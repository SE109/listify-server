import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { ResJSON } from '../utils/interface';
import { Task, Voice } from '../models';
import { IPayload } from '../utils/jwt_service';
import { removeKeys } from '../utils/remove_key';

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

export const getSingleVoiceByIdController = async (
  req: Request<{ voiceId: string }>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { voiceId: unconvertVoiceId } = req.params;
    const voiceId: number = +unconvertVoiceId;

    const task = await Task.findOne({
      where: {
        userMail,
      },
      include: {
        model: Voice,
        where: {
          id: voiceId,
        },
        attributes: {
          exclude: ['taskId', 'updatedAt', 'createdAt'],
        },
      },
      raw: true,
      nest: true,
    });

    if (!task) {
      throw createError.BadRequest('voiceId does not exist');
    }

    const voice = task.voiceList;

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: voice,
    });
  } catch (err) {
    next(err);
  }
};

export const addVoiceController = async (
  req: Request<{}, {}, Voice>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { taskId, name, file } = req.body;

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

    const createdVoice = await Voice.create({
      taskId,
      name,
      file,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Added successfully',
      data: createdVoice,
    });
  } catch (err) {
    next(err);
  }
};

export const updateVoiceByIdController = async (
  req: Request<{ voiceId: string }, {}, Voice>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { name, file } = req.body;

    const { voiceId: unconvertVoiceId } = req.params;
    const voiceId: number = +unconvertVoiceId;

    const task = await Task.findOne({
      where: {
        userMail,
      },
      include: {
        model: Voice,
        where: {
          id: voiceId,
        },
        attributes: {
          exclude: ['taskId', 'updatedAt', 'createdAt'],
        },
      },
      raw: true,
      nest: true,
    });

    if (!task) {
      throw createError.BadRequest('voiceId does not exist');
    }

    const [_, updatedVoice] = await Voice.update(
      {
        name,
        file,
      },
      {
        where: {
          id: voiceId,
        },
        returning: true,
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: 'Updated successfully',
      data: removeKeys(['taskId', 'createdAt', 'updatedAt'], updatedVoice[0].dataValues),
    });
  } catch (err) {
    next(err);
  }
};
