import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export const testRouteController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      status: 200,
      data: 'testRouteController',
    });
  } catch (err) {
    next(err);
  }
};
