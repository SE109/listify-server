import { Router } from 'express';
import { verifyAccessToken } from '../utils/jwt_service';
import {
  getAllGroupTaskController,
  addGroupTaskController,
} from '../controllers/groupTask.controller';

const router: Router = Router();

// [GET] /gtask -> Get all GroupTask belong to user
router.get('/', verifyAccessToken, getAllGroupTaskController);

// [POST] /gtask -> Create new GroupTask
router.post('/', verifyAccessToken, addGroupTaskController);

export default router;
