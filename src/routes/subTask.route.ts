import { Router } from 'express';
import { getAllSubtaskBelongToTaskController } from '../controllers/subTask.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /subtask/tid/{taskId} -> Get all subtask belong to Task
router.get('/tid/:taskId', verifyAccessToken, getAllSubtaskBelongToTaskController);

export default router;
