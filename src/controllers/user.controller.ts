import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { ResJSON } from '../utils/interface';
import { IPayload } from '../utils/jwt_service';
import { GroupTask, SubTask, Task, TaskIncluded, User, Voice } from '../models';
import { removeKeys } from '../utils/remove_key';
import { Op } from 'sequelize';
import bcrypt from 'bcrypt';

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
      ],
    });

    const noneListed = await Task.findAll({
      where: {
        userMail,
        id: {
          [Op.notIn]: taskIdList,
        },
      },
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: { ...userInfo?.dataValues, nonelistedTaskList: noneListed },
    });
  } catch (err) {
    next(err);
  }
};

export const updateInfoController = async (
  req: Request<{}, {}, User>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { firstName, lastName, phoneNum, dateOfBirth } = req.body;

    const [_, updatedUserInfor] = await User.update(
      {
        firstName,
        lastName,
        phoneNum,
        dateOfBirth,
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
      message: 'Updated successfully',
      data: removeKeys(
        ['password', 'refreshToken', 'createdAt', 'updatedAt'],
        updatedUserInfor[0].dataValues
      ),
    });
  } catch (err) {
    next(err);
  }
};

export const updatePasswordController = async (
  req: Request<{}, {}, { oldPassword: string; newPassword: string }>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { oldPassword, newPassword } = req.body;

    // Check match oldPassword
    const user = await User.findByPk(userMail, {
      attributes: ['password'],
    });

    if (!user) {
      throw createError.InternalServerError('Maybe wrong something');
    }

    const hashPassword = user.password;
    const isMatch = await bcrypt.compare(oldPassword, hashPassword);

    if (!isMatch) {
      throw createError.Unauthorized('Wrong password');
    }

    // Set password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await User.update(
      {
        password: hashedPassword,
      },
      {
        where: {
          mail: userMail,
        },
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: 'Changed password successfully',
    });
  } catch (err) {
    next(err);
  }
};
