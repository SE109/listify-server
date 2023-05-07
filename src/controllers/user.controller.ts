import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { ResJSON } from '../utils/interface';
import { IPayload } from '../utils/jwt_service';
import { GroupTask, SubTask, Task, TaskIncluded, User, Voice } from '../models';
import { removeKeys } from '../utils/remove_key';
import { Op } from 'sequelize';

export const updateAvatarController = async (
  req: Request<{}, {}, User>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { avatar } = req.body;

    const [_, updatedAvaUser] = await User.update(
      {
        avatar,
      },
      {
        where: {
          mail: userMail,
        },
        returning: true,
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: 'Updated avatar successfully',
      data: removeKeys(['password', 'createdAt', 'updatedAt'], updatedAvaUser[0].dataValues),
    });
  } catch (err) {
    next(err);
  }
};

export const getInfoController = async (
  req: Request,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const taskInGTask = await GroupTask.findAll({
      include: [
        {
          model: Task,
          through: {
            attributes: [],
          },
        },
      ],
      where: {
        userMail,
      },
    });

    const taskIdList = taskInGTask.reduce<number[]>((acc, curVal) => {
      const idList = curVal.taskList.map((cur) => cur.id);
      return [...acc, ...idList];
    }, []);

    const userInfo = await User.findByPk(userMail, {
      attributes: {
        exclude: ['password', 'refreshToken', 'createdAt', 'updatedAt'],
      },
      include: [
        {
          model: GroupTask,
          attributes: {
            exclude: ['userMail', 'createdAt', 'updatedAt'],
          },
          include: [
            {
              model: Task,
              through: {
                attributes: [],
              },
              attributes: {
                exclude: ['userMail', 'createdAt', 'updatedAt'],
              },
              include: [
                {
                  model: SubTask,
                  attributes: {
                    exclude: ['taskId', 'createdAt', 'updatedAt'],
                  },
                },
                {
                  model: Voice,
                  attributes: {
                    exclude: ['taskId', 'createdAt', 'updatedAt'],
                  },
                },
              ],
            },
          ],
        },
        {
          model: Task,
          where: {
            id: {
              [Op.notIn]: taskIdList,
            },
          },
          attributes: {
            exclude: ['userMail', 'createdAt', 'updatedAt'],
          },
        },
      ],
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: userInfo,
    });
  } catch (err) {
    next(err);
  }
};
