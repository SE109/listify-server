import { Router } from 'express';
import {
  getAllVoiceOfTaskController,
  getSingleVoiceByIdController,
  addVoiceController,
  updateVoiceByIdController,
} from '../controllers/voice.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /voice/vtask/{taskId} -> Get all voice of task
router.get('/vtask/:taskId', verifyAccessToken, getAllVoiceOfTaskController);

// [GET] /voice/{voiceId} -> Get single voice by id
router.get('/:voiceId', verifyAccessToken, getSingleVoiceByIdController);

// [POST] /voice -> Create new voice
router.post('/', verifyAccessToken, addVoiceController);

// [PUT] /voice/{voiceId} -> Update voice by id
router.put('/:voiceId', verifyAccessToken, updateVoiceByIdController);

export default router;
