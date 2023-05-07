import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { IPayload } from '../utils/jwt_service';
import { ResJSON } from '../utils/interface';
import { GroupTask, Task } from '../models';
import { Op } from 'sequelize';

type searchTypes = 'all' | 'nonelisted' | 'done' | 'undone' | 'today';

export const searchController = async (
  req: Request<{}, {}, {}, { limit: string; page: string; keyword: string; types: searchTypes[] }>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { limit: unconvertLimit, page: unconvertPage, keyword, types } = req.query;
    const limit: number = +unconvertLimit;
    const page: number = +unconvertPage;

    const typesConvert: searchTypes[] =
      typeof types === 'string' ? [types] : types.includes('all') ? ['all'] : types;

    if (!limit || !keyword || !types) {
      throw createError.BadRequest('Missing params');
    }

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

    const task = await Task.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.iLike]: `${keyword}%`,
            },
          },
          {
            description: {
              [Op.iLike]: `${keyword}%`,
            },
          },
        ],
        userMail,
        isCompleted: {
          [Op.or]: [
            typesConvert.includes('done') ? true : undefined,
            typesConvert.includes('undone') ? false : undefined,
          ].filter((item) => item !== undefined),
        },
        id: {
          [Op.notIn]: typesConvert.includes('nonelisted') ? taskIdList : [],
        },
        fromDate: {
          [Op.lte]: typesConvert.includes('today') ? new Date() : new Date(2033, 11, 30),
        },
        toDate: {
          [Op.gte]: typesConvert.includes('today') ? new Date() : new Date(2011, 11, 30),
        },
      },
      attributes: {
        exclude: ['userMail', 'createdAt', 'updatedAt'],
      },
      limit,
      offset: limit * (page - 1),
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: task,
    });
  } catch (err) {
    next(err);
  }
};
