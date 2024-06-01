import express from 'express';
const router = express.router();

import controller from './controllers/HelpRequestController';

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.insert);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
