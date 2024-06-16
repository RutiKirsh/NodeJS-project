import express from 'express';
import controller from '../controllers/HelpRequestsController.js';
const router = express.router();

import controller from './controllers/HelpRequestController.js';

router.get('/:id', controller.getById);
router.get('/', controller.getAll);
router.put('/:id', controller.update);

export default router;
