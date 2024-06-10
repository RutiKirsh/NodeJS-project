import express from 'express';
import controller from '../controllers/HelpRequestsController';
const router = express.router();

import controller from './controllers/HelpRequestController';

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
//router.put('/:id', controller.update);

export default router;
