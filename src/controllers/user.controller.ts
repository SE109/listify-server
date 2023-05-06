import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { ResJSON } from '../utils/interface';
import { IPayload } from '../utils/jwt_service';
import { User } from '../models';
import { removeKeys } from '../utils/remove_key';

export const updateAvatarController = async (
  req: Request<{}, {}, User>,
  res: Response<ResJSON, { payload: IPayload }>,
  next: NextFunction
) => {
  try {
    // Get userMail from previous middleware
    const userMail = res.locals.payload.user.mail;

    const { avatar } = req.body;

    const [_, updatedAvaUser] = await User.update(
      {
        avatar,
      },
      {
        where: {
          mail: userMail,
        },
        returning: true,
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: 'Updated avatar successfully',
      data: removeKeys(['password', 'createdAt', 'updatedAt'], updatedAvaUser[0].dataValues),
    });
  } catch (err) {
    next(err);
  }
};
