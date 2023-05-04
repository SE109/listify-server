import { Router } from 'express';
import { verifyAccessToken } from '../utils/jwt_service';
import { getAllGroupTaskController } from '../controllers/groupTask.controller';

const router: Router = Router();

// [GET] /gtask -> Get all GroupTask belong to user
router.get('/', verifyAccessToken, getAllGroupTaskController);

export default router;
