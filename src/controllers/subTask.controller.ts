import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { ResJSON } from '../utils/interface';
import { IPayload } from '../utils/jwt_service';
import { SubTask, Task } from '../models';

export const getAllSubtaskBelongToTaskController = async (
  req: Request<{ taskId: string }>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { taskId: unconvertTaskId } = req.params;
    const taskId: number = +unconvertTaskId;

    const task = await Task.findOne({
      where: {
        id: taskId,
        userMail,
      },
      include: {
        model: SubTask,
        attributes: {
          exclude: ['taskId', 'createdAt', 'updatedAt'],
        },
      },
    });

    if (!task) {
      throw createError.BadRequest('taskId does not exist');
    }

    const { subTaskList } = task;

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: subTaskList,
    });
  } catch (err) {
    next(err);
  }
};