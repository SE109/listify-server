import { Router } from 'express';
import {
  getAllTaskBelongToGTaskController,
  addTaskController,
  updateInfoTaskController,
  removeTaskByIdController,
  moveTaskToGTaskController,
  duplicateTaskController,
} from '../controllers/task.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /task/b-gtask -> Get all task belong to gtask
router.get('/b-gtask/:gtaskId', verifyAccessToken, getAllTaskBelongToGTaskController);

// [POST] /task -> Create new task
router.post('/', verifyAccessToken, addTaskController);

// [PUT] /task/{taskId} -> Update info task
router.put('/:taskId', verifyAccessToken, updateInfoTaskController);

// [DELETE] /task/{taskId} -> Delete task by id
router.delete('/:taskId', verifyAccessToken, removeTaskByIdController);

// [PUT] /task/{taskId}/move -> Move task to gtask
router.put('/:taskId/move', verifyAccessToken, moveTaskToGTaskController);

// [POST] /task/{taskId}/dup -> Duplicate task
router.post('/:taskId/dup', verifyAccessToken, duplicateTaskController);

export default router;
