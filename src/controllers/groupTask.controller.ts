import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { GroupTask, SubTask, Task, Voice } from '../models';
import { ResJSON } from '../utils/interface';

export const getAllGTaskController = async (
  req: Request,
  res: Response<ResJSON>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const groupTaskList = await GroupTask.findAll({
      where: {
        userMail,
      },
      attributes: {
        exclude: ['userMail', 'createdAt', 'updatedAt'],
      },
      include: [
        {
          model: Task,
          through: {
            attributes: [],
          },
          include: [
            {
              model: SubTask,
              attributes: {
                exclude: ['createdAt', 'updatedAt'],
              },
            },
            {
              model: Voice,
              attributes: {
                exclude: ['createdAt', 'updatedAt'],
              },
            },
          ],
          attributes: {
            exclude: ['userMail', 'createdAt', 'updatedAt'],
          },
        },
      ],
      nest: true,
      raw: true,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: groupTaskList,
    });
  } catch (err) {
    next(err);
  }
};

export const addGTaskController = async (
  req: Request<{}, {}, GroupTask>,
  res: Response<ResJSON>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    // Todo: Add validation
    const { name } = req.body;

    // Create new grouptask
    const createdGroupTask = await GroupTask.create({
      userMail,
      name,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Added successfully',
      data: createdGroupTask,
    });
  } catch (err) {
    next(err);
  }
};

export const getSingleGTaskByIdController = async (
  req: Request<{ gtaskId: string }>,
  res: Response<ResJSON>,
  next: NextFunction
) => {
  try {
    const { gtaskId: unconvertGtaskId } = req.params;
    const gtaskId: number = +unconvertGtaskId;

    const gtask = await GroupTask.findOne({
      where: {
        id: gtaskId,
      },
      nest: true,
      raw: true,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: gtask,
    });
  } catch (err) {
    next(err);
  }
};
