import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { IPayload } from '../utils/jwt_service';
import { ResJSON } from '../utils/interface';
import { GroupTask, SubTask, Task, TaskIncluded, Voice } from '../models';
import { removeKeys } from '../utils/remove_key';

export const getAllTaskBelongToGTaskController = async (
  req: Request<{ gtaskId: string }>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { gtaskId: unconvertGtaskId } = req.params;
    const gtaskId: number = +unconvertGtaskId;

    if (!gtaskId) {
      throw createError.BadRequest('Missing params');
    }

    const gtask = await GroupTask.findOne({
      where: {
        id: gtaskId,
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
    });

    if (!gtask) {
      throw createError.BadRequest('gtaskId does not exist');
    }

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: gtask,
    });
  } catch (err) {
    next(err);
  }
};

export const addTaskController = async (
  req: Request<{}, {}, Task>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { title, description, fromDate, toDate } = req.body;

    const createdTask = await Task.create({
      userMail,
      title,
      description,
      fromDate,
      toDate,
      isCompleted: false,
      isFavorited: false,
    });

    res.status(201).json({
      statusCode: 201,
      message: 'Added successfully',
      data: removeKeys(['userMail'], createdTask.dataValues),
    });
  } catch (err) {
    next(err);
  }
};

export const updateInfoTaskController = async (
  req: Request<{ taskId: string }, {}, Task>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { title, description, fromDate, toDate } = req.body;

    const { taskId: unconvertTaskId } = req.params;
    const taskId: number = +unconvertTaskId;

    const [_, updatedTask] = await Task.update(
      {
        title,
        description,
        fromDate,
        toDate,
      },
      {
        where: {
          id: taskId,
          userMail,
        },
        returning: true,
      }
    );

    if (updatedTask.length === 0) {
      throw createError.BadRequest('gtaskId does not exist');
    }

    res.status(200).json({
      statusCode: 200,
      message: 'Updated successfully',
      data: removeKeys(['userMail'], updatedTask[0].dataValues),
    });
  } catch (err) {
    next(err);
  }
};

export const removeTaskByIdController = async (
  req: Request<{ taskId: string }, {}, Task>,
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
    });

    if (!task) {
      throw createError.BadRequest('taskId does not exist');
    }

    const removeSubTask = new Promise<void>(async (resolve) => {
      await SubTask.destroy({
        where: {
          taskId,
        },
      });

      resolve();
    });

    const removeVoice = new Promise<void>(async (resolve) => {
      await Voice.destroy({
        where: {
          taskId,
        },
      });

      resolve();
    });

    const removeTaskInclude = new Promise<void>(async (resolve) => {
      await TaskIncluded.destroy({
        where: {
          taskId,
        },
      });

      resolve();
    });

    await Promise.all([removeSubTask, removeVoice, removeTaskInclude]);

    await Task.destroy({
      where: {
        id: taskId,
        userMail,
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

export const moveTaskToGTaskController = async (
  req: Request<{ taskId: string }, {}, { groupTaskId: number }>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { taskId: unconvertTaskId } = req.params;
    const taskId: number = +unconvertTaskId;

    const { groupTaskId } = req.body;

    const task = await Task.findOne({
      where: {
        id: taskId,
        userMail,
      },
    });

    if (!task) {
      throw createError.BadRequest('taskId does not exist');
    }

    const gtask = await GroupTask.findOne({
      where: {
        id: groupTaskId,
        userMail,
      },
    });

    if (!gtask) {
      throw createError.BadRequest('gtaskId does not exist');
    }

    await TaskIncluded.destroy({
      where: {
        taskId,
      },
    });

    await TaskIncluded.create({
      taskId,
      groupTaskId,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Moved successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const duplicateTaskController = async (
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

    const { id, createdAt, updatedAt, ...newTask } = task;

    const duplicatedTask = await Task.create(newTask);

    res.status(201).json({
      statusCode: 201,
      message: 'Duplicated successfully',
      data: removeKeys(['userMail'], duplicatedTask.dataValues),
    });
  } catch (err) {
    next(err);
  }
};

export const toggleMarkTaskController = async (
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

    const { isCompleted } = task;

    const [_, updatedTask] = await Task.update(
      {
        isCompleted: !isCompleted,
      },
      {
        where: {
          id: taskId,
        },
        returning: true,
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: `${isCompleted ? 'Unmarked' : 'Marked'} successfully`,
      data: removeKeys(['userMail'], updatedTask[0].dataValues),
    });
  } catch (err) {
    next(err);
  }
};

export const toggleFavoTaskController = async (
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

    const { isFavorited } = task;

    const [_, updatedTask] = await Task.update(
      {
        isFavorited: !isFavorited,
      },
      {
        where: {
          id: taskId,
        },
        returning: true,
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: `${isFavorited ? 'Removed' : 'Added'} favorite task successfully`,
      data: removeKeys(['userMail'], updatedTask[0].dataValues),
    });
  } catch (err) {
    next(err);
  }
};
