import { Request, Response, NextFunction } from 'express';
import { GroupTask, User } from '../models';
import createError from 'http-errors';
import bcrypt from 'bcrypt';
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  userPayload,
} from '../utils/jwt_service';
import { removeKeys } from '../utils/remove_key';
import { ResJSON } from '../utils/interface';
import client from '../configs/connectionRedis';

interface registerModel {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  phoneNum: string;
}

interface loginModel {
  email: string;
  password: string;
}

export const registerController = async (
  req: Request<{}, {}, registerModel>,
  res: Response<ResJSON>,
  next: NextFunction
) => {
  try {
    const { email, password, lastName, firstName, phoneNum } = req.body;

    // Validate some field

    // Check email exist
    const userExist = await User.findOne({
      where: {
        mail: email,
      },
      raw: true,
      nest: true,
    });
    if (userExist) {
      throw createError.Conflict('This email is registered');
    }

    // Create new user
    await User.create({
      mail: email,
      password,
      lastName,
      firstName,
      phoneNum,
    });

    // Create today gtask
    await GroupTask.create({
      userMail: email,
      name: 'Today',
    });

    res.status(201).json({
      statusCode: 201,
      message: 'New account registration successful',
    });
  } catch (err) {
    next(err);
  }
};

export const loginController = async (
  req: Request<{}, {}, loginModel>,
  res: Response<ResJSON>,
  next: NextFunction
) => {
  try {
    // Get body
    const { email, password } = req.body;

    // Check email exist in database
    const user = await User.findOne({
      attributes: {
        exclude: ['refreshToken', 'createdAt', 'updatedAt'],
      },
      where: {
        mail: email,
      },
      raw: true,
      nest: true,
    });
    if (!user) {
      throw createError.Conflict('User not register');
    }

    // Unhash & check password
    const hashPassword = user.password;
    const isMatch = await bcrypt.compare(password, hashPassword);
    if (!isMatch) {
      throw createError.Unauthorized('Wrong password');
    }

    // Create payload for token
    const payload: userPayload = {
      mail: user.mail,
    };

    // Create access token & refresh token
    const accessToken = await signAccessToken(payload);
    const refreshToken = await signRefreshToken(payload);

    // Store refresh token in cookie
    // res.cookie('refreshToken', refreshToken, {
    //   httpOnly: true,
    //   secure: false,
    //   path: '/',
    //   sameSite: 'strict',
    //   maxAge: 60 * 60 * 24 * 3600 * 1000,
    // });

    res.status(200).json({
      statusCode: 200,
      message: 'Login successfully',
      data: {
        user: removeKeys(['password'], user),
        accessToken,
        refreshToken,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const logoutController = async (
  req: Request<{}, {}, User>,
  res: Response<ResJSON>,
  next: NextFunction
) => {
  try {
    // Take refresh token from req.body of user
    const { refreshToken } = req.body;

    // Check refresh token exists
    if (!refreshToken) {
      return next(createError.Unauthorized('No refresh token in body'));
    }

    // Verify refreshToken
    const { user } = await verifyRefreshToken(refreshToken);

    // Remove RK in redis
    await client
      .del(user.mail)
      .catch((err) => next(createError.InternalServerError(`Unable delete key in redis: ${err}`)));

    res.status(200).json({
      statusCode: 200,
      message: 'Logout successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const refreshTokenController = async (
  req: Request<{}, {}, User>,
  res: Response<ResJSON>,
  next: NextFunction
) => {
  try {
    // Take refresh token from req.body
    const { refreshToken } = req.body;

    // Check refresh token exists
    if (!refreshToken) {
      return next(createError.Unauthorized('No refresh token in body'));
    }

    // Check proper user
    const { user } = await verifyRefreshToken(refreshToken);

    // Create new access token & refresh token, then send it to user
    const accessToken = await signAccessToken(user);
    const refToken = await signRefreshToken(user);

    // Store refresh token in cookie
    // res.cookie('refreshToken', refToken, {
    //   httpOnly: true,
    //   secure: false,
    //   path: '/',
    //   sameSite: 'strict',
    //   maxAge: 60 * 60 * 24 * 3600 * 1000,
    // });

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: {
        accessToken,
        refreshToken: refToken,
      },
    });
  } catch (err) {
    next(err);
  }
};
