import express from 'express';
import controller from '../controllers/HelpRequestsController';
const router = express.router();

import controller from './controllers/HelpRequestController';

router.get('/:id', controller.getById);
router.get('/', controller.getAll);
router.put('/:id', controller.update);

export default router;
