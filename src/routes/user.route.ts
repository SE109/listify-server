import { Router } from 'express';
import { verifyAccessToken } from '../utils/jwt_service';
import { updateAvatarController } from '../controllers/user.controller';

const router: Router = Router();

// [GET] /user/update-avatar -> User update avatar
router.put('/update-avatar', verifyAccessToken, updateAvatarController);

export default router;
