import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { ResJSON } from '../utils/interface';
import { Task, Voice } from '../models';
import { IPayload } from '../utils/jwt_service';

export const getAllVoiceOfTaskController = async (
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
      raw: true,
    });

    if (!task) {
      throw createError.BadRequest('taskId does not exist');
    }

    const voiceList = await Voice.findAll({
      where: {
        taskId,
      },
      attributes: {
        exclude: ['taskId', 'createdAt', 'updatedAt'],
      },
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: voiceList,
    });
  } catch (err) {
    next(err);
  }
};
