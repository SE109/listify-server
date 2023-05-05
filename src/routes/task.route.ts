import { Router } from 'express';
import {
  getAllTaskBelongToGTaskController,
  addTaskController,
  updateInfoTaskController,
} from '../controllers/task.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /task/b-gtask -> Get all task belong to gtask
router.get('/b-gtask/:gtaskId', verifyAccessToken, getAllTaskBelongToGTaskController);

// [POST] /task -> Create new task
router.post('/', verifyAccessToken, addTaskController);

// [PUT] /task/{taskId} -> Update info task
router.put('/:taskId', verifyAccessToken, updateInfoTaskController);

export default router;
