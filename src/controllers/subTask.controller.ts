import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { ResJSON } from '../utils/interface';
import { IPayload } from '../utils/jwt_service';
import { SubTask, Task } from '../models';
import { removeKeys } from '../utils/remove_key';

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

export const getSingleSubtaskByIdController = async (
  req: Request<{ subtaskId: string }>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { subtaskId: unconvertSubtaskId } = req.params;
    const subtaskId: number = +unconvertSubtaskId;

    const task = await Task.findOne({
      where: {
        userMail,
      },
      include: {
        model: SubTask,
        where: {
          id: subtaskId,
        },
        attributes: {
          exclude: ['taskId', 'updatedAt', 'createdAt'],
        },
      },
      raw: true,
      nest: true,
    });

    if (!task) {
      throw createError.BadRequest('subtaskId does not exist');
    }

    const subtask = task.subTaskList;

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: subtask,
    });
  } catch (err) {
    next(err);
  }
};

export const addSubtaskController = async (
  req: Request<{}, {}, SubTask>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { taskId, title } = req.body;

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

    const subtaskCreated = await SubTask.create({
      taskId,
      title,
      isCompleted: false,
    });

    res.status(201).json({
      statusCode: 201,
      message: 'Added successfully',
      data: subtaskCreated,
    });
  } catch (err) {
    next(err);
  }
};

export const updateTitleSubtaskByIdController = async (
  req: Request<{ subtaskId: string }, {}, SubTask>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { title } = req.body;

    const { subtaskId: unconvertSubtaskId } = req.params;
    const subtaskId: number = +unconvertSubtaskId;

    const task = await Task.findOne({
      where: {
        userMail,
      },
      include: {
        model: SubTask,
        where: {
          id: subtaskId,
        },
        attributes: {
          exclude: ['taskId', 'updatedAt', 'createdAt'],
        },
      },
      raw: true,
      nest: true,
    });

    if (!task) {
      throw createError.BadRequest('subtaskId does not exist');
    }

    const [_, updatedSubtask] = await SubTask.update(
      {
        title,
      },
      {
        where: {
          id: subtaskId,
        },
        returning: true,
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: 'Updated successfully',
      data: removeKeys(['taskId', 'createdAt', 'updatedAt'], updatedSubtask[0].dataValues),
    });
  } catch (err) {
    next(err);
  }
};

export const removeSubtaskByIdController = async (
  req: Request<{ subtaskId: string }, {}, SubTask>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { title } = req.body;

    const { subtaskId: unconvertSubtaskId } = req.params;
    const subtaskId: number = +unconvertSubtaskId;

    const task = await Task.findOne({
      where: {
        userMail,
      },
      include: {
        model: SubTask,
        where: {
          id: subtaskId,
        },
        attributes: {
          exclude: ['taskId', 'updatedAt', 'createdAt'],
        },
      },
      raw: true,
      nest: true,
    });

    if (!task) {
      throw createError.BadRequest('subtaskId does not exist');
    }

    await SubTask.destroy({
      where: {
        id: subtaskId,
      },
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const toggleMarkSubtaskController = async (
  req: Request<{ subtaskId: string }>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { subtaskId: unconvertSubtaskId } = req.params;
    const subtaskId: number = +unconvertSubtaskId;

    const task = await Task.findOne({
      where: {
        userMail,
      },
      include: {
        model: SubTask,
        where: {
          id: subtaskId,
        },
        attributes: {
          exclude: ['taskId', 'updatedAt', 'createdAt'],
        },
      },
      nest: true,
    });

    if (!task) {
      throw createError.BadRequest('subtaskId does not exist');
    }

    const { isCompleted } = task.subTaskList[0];

    const [_, updatedSubtask] = await SubTask.update(
      {
        isCompleted: !isCompleted,
      },
      {
        where: {
          id: subtaskId,
        },
        returning: true,
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: `${isCompleted ? 'Unmarked' : 'Marked'} successfully`,
      data: removeKeys(['userMail'], updatedSubtask[0].dataValues),
    });
  } catch (err) {
    next(err);
  }
};

export const duplicateSubtaskController = async (
  req: Request<{ subtaskId: string }>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { subtaskId: unconvertSubtaskId } = req.params;
    const subtaskId: number = +unconvertSubtaskId;

    const task = await Task.findOne({
      where: {
        userMail,
      },
      include: {
        model: SubTask,
        where: {
          id: subtaskId,
        },
        attributes: {
          exclude: ['updatedAt', 'createdAt'],
        },
      },
      nest: true,
    });

    if (!task) {
      throw createError.BadRequest('subtaskId does not exist');
    }

    const { taskId, title } = task.subTaskList[0];

    const duplicatedSubtask = await SubTask.create({
      taskId,
      title,
      isCompleted: false,
    });

    res.status(201).json({
      statusCode: 201,
      message: 'Duplicated successfully',
      data: duplicatedSubtask,
    });
  } catch (err) {
    next(err);
  }
};
