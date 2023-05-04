import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { GroupTask, SubTask, Task, Voice } from '../models';

export const getAllGroupTaskController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  try {
    res.status(200).json({
      status: 200,
      data: groupTaskList,
    });
  } catch (err) {
    next(err);
  }
};
