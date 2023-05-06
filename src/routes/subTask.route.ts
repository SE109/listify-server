import { Router } from 'express';
import {
  getAllSubtaskBelongToTaskController,
  getSingleSubtaskByIdController,
} from '../controllers/subTask.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /subtask/tid/{taskId} -> Get all subtask belong to Task
router.get('/tid/:taskId', verifyAccessToken, getAllSubtaskBelongToTaskController);

// [GET] /subtask/{subtaskId} -> Get single subtask by id
router.get('/:subtaskId', verifyAccessToken, getSingleSubtaskByIdController);

export default router;
