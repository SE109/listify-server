import { Router } from 'express';
import {
  getAllTaskBelongToGTaskController,
  getAllFavoriteTaskBelongToUserController,
  addTaskController,
  updateInfoTaskController,
  removeTaskByIdController,
  clearAllSubtaskBelongToTaskController,
  moveTaskToGTaskController,
  duplicateTaskController,
  toggleMarkTaskController,
  toggleFavoTaskController,
} from '../controllers/task.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /task/b-gtask/{gtaskId} -> Get all task belong to gtask
router.get('/b-gtask/:gtaskId', verifyAccessToken, getAllTaskBelongToGTaskController);

// [GET] /task/fav -> Get all favorite task belong to user
router.get('/fav', verifyAccessToken, getAllFavoriteTaskBelongToUserController);

// [POST] /task -> Create new task
router.post('/', verifyAccessToken, addTaskController);

// [PUT] /task/{taskId} -> Update info task
router.put('/:taskId', verifyAccessToken, updateInfoTaskController);

// [DELETE] /task/{taskId} -> Delete task by id
router.delete('/:taskId', verifyAccessToken, removeTaskByIdController);

// [DELETE] /task/subtask/{taskId} -> Clear all subtask belong to task
router.delete('/subtask/:taskId', verifyAccessToken, clearAllSubtaskBelongToTaskController);

// [PUT] /task/{taskId}/move -> Move task to gtask
router.put('/:taskId/move', verifyAccessToken, moveTaskToGTaskController);

// [POST] /task/{taskId}/dup -> Duplicate task
router.post('/:taskId/dup', verifyAccessToken, duplicateTaskController);

// [PUT] /task/{taskId}/toggle-mark -> Mark/unmark done task
router.put('/:taskId/toggle-mark', verifyAccessToken, toggleMarkTaskController);

// [PUT] /task/{taskId}/toggle-favo -> Add/remove favorite task
router.put('/:taskId/toggle-favo', verifyAccessToken, toggleFavoTaskController);

export default router;
