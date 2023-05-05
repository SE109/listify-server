import { Router } from 'express';
import { verifyAccessToken } from '../utils/jwt_service';
import {
  getAllGTaskController,
  addGTaskController,
  getSingleGTaskByIdController,
  renameGTaskByIdController,
} from '../controllers/groupTask.controller';

const router: Router = Router();

// [GET] /gtask -> Get all gtask belong to user
router.get('/', verifyAccessToken, getAllGTaskController);

// [POST] /gtask -> Create new gtask
router.post('/', verifyAccessToken, addGTaskController);

// [GET] /gtask/{gtaskId} -> Get single gtask by id
router.get('/:gtaskId', verifyAccessToken, getSingleGTaskByIdController);

// [PUT] /gtask/{gtaskId} -> Rename gtask by id
router.put('/:gtaskId', verifyAccessToken, renameGTaskByIdController);

export default router;
