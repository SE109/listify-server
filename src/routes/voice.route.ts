import { Router } from 'express';
import { getAllVoiceOfTaskController } from '../controllers/voice.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /voice/vtask/{taskId} -> Get all voice of task
router.get('/vtask/:taskId', verifyAccessToken, getAllVoiceOfTaskController);

export default router;
