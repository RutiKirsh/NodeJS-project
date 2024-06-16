import express from 'express';
import controller from '../controllers/VolunteersController.js';

const router = express.router();
router.get('/', controller.getAll);
router.get('/:id', controller.getById)
router.post('/', controller.insert)

export default router;