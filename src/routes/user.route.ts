import { Router } from 'express';
import { verifyAccessToken } from '../utils/jwt_service';
import {
  updateAvatarController,
  getInfoController,
  updateInfoController,
} from '../controllers/user.controller';

const router: Router = Router();

// [PUT] /user/update-avatar -> Update avatar user
router.put('/update-avatar', verifyAccessToken, updateAvatarController);

// [GET] /user/get-info -> Get user info
router.get('/get-info', verifyAccessToken, getInfoController);

// [PUT] /user/update-info -> Update information of user
router.put('/update-info', verifyAccessToken, updateInfoController);

export default router;
