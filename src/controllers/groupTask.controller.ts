import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { GroupTask, SubTask, Task, TaskIncluded, Voice } from '../models';
import { ResJSON } from '../utils/interface';
import { removeKeys } from '../utils/remove_key';
import { Op } from 'sequelize';

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

    res.status(201).json({
      statusCode: 201,
      message: 'Added successfully',
      data: removeKeys(['userMail'], createdGroupTask.dataValues),
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

    if (!gtaskId) {
      throw createError.BadRequest('Missing params');
    }

    const gtask = await GroupTask.findOne({
      where: {
        id: gtaskId,
      },
      attributes: {
        exclude: ['userMail'],
      },
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

export const renameGTaskByIdController = async (
  req: Request<{ gtaskId: string }, {}, GroupTask>,
  res: Response<ResJSON>,
  next: NextFunction
) => {
  try {
    const { gtaskId: unconvertGtaskId } = req.params;
    const gtaskId: number = +unconvertGtaskId;

    if (!gtaskId) {
      throw createError.BadRequest('Missing params');
    }

    const gtask = await GroupTask.findOne({
      where: {
        id: gtaskId,
      },
      raw: true,
    });

    if (!gtask) {
      throw createError.BadRequest('gtaskId does not exist');
    }

    const { name } = req.body;

    const [_, updatedGtask] = await GroupTask.update(
      {
        name,
      },
      {
        where: {
          id: gtaskId,
        },
        returning: true,
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: 'Renamed successfully',
      data: removeKeys(['userMail'], updatedGtask[0].dataValues),
    });
  } catch (err) {
    next(err);
  }
};

export const removeGTaskByIdController = async (
  req: Request<{ gtaskId: string }, {}, GroupTask>,
  res: Response<ResJSON>,
  next: NextFunction
) => {
  try {
    const { gtaskId: unconvertGtaskId } = req.params;
    const gtaskId: number = +unconvertGtaskId;

    if (!gtaskId) {
      throw createError.BadRequest('Missing params');
    }

    const gtask = await GroupTask.findOne({
      where: {
        id: gtaskId,
      },
      raw: true,
    });

    if (!gtask) {
      throw createError.BadRequest('gtaskId does not exist');
    }

    const taskListBelongToGTask = await TaskIncluded.findAll({
      where: {
        groupTaskId: gtaskId,
      },
      attributes: ['taskId'],
      raw: true,
    });

    const taskIdList = taskListBelongToGTask.map((curVal) => curVal.taskId);

    const unmarkTaskList = await Task.findAll({
      where: {
        id: {
          [Op.in]: taskIdList,
        },
        isCompleted: false,
      },
    });

    if (unmarkTaskList.length > 0) {
      throw createError.Conflict('GroupTask cannot be deleted because it still unmark task');
    }

    await GroupTask.destroy({
      where: {
        id: gtaskId,
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
