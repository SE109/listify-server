import { Router } from 'express';
import { testRouteController } from '../controllers/test.controller';

const router: Router = Router();

// [GET] /test/check-route -> Test route
router.get('/check-route', testRouteController);

export default router;
