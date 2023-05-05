import { Router } from 'express';
import { getAllTaskBelongToGTaskController } from '../controllers/task.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /task/b-gtask -> Get all task belong to gtask
router.get('/b-gtask/:gtaskId', verifyAccessToken, getAllTaskBelongToGTaskController);

export default router;
