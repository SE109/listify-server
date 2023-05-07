import { Router } from 'express';
import { searchController } from '../controllers/search.controller';
import { verifyAccessToken } from '../utils/jwt_service';

const router: Router = Router();

// [GET] /search -> Search task
router.get('/', verifyAccessToken, searchController);

export default router;
