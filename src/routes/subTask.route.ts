import { Router } from 'express';
import {
  getAllSubtaskBelongToTaskController,
  getSingleSubtaskByIdController,
  addSubtaskController,
  updateTitleSubtaskByIdController,
  removeSubtaskByIdController,
  toggleMarkSubtaskController,
} from '../controllers/subTask.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /subtask/tid/{taskId} -> Get all subtask belong to Task
router.get('/tid/:taskId', verifyAccessToken, getAllSubtaskBelongToTaskController);

// [GET] /subtask/{subtaskId} -> Get single subtask by id
router.get('/:subtaskId', verifyAccessToken, getSingleSubtaskByIdController);

// [POST] /subtask -> Create new subtask
router.post('/', verifyAccessToken, addSubtaskController);

// [PUT] /subtask/{subtaskId} -> Update title subtask by id
router.put('/:subtaskId', verifyAccessToken, updateTitleSubtaskByIdController);

// [DELETE] /subtask/{subtaskId} -> Delete subtask by id
router.delete('/:subtaskId', verifyAccessToken, removeSubtaskByIdController);

// [PUT] /subtask/{subtaskId}/toggle-mark -> Mark/unmark done Subtask
router.put('/:subtaskId/toggle-mark', verifyAccessToken, toggleMarkSubtaskController);

export default router;
