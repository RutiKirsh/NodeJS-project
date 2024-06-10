import express from 'express';
import controller from '../controllers/VolunteersController';

const router = express.router();
router.get('/', controller.getAll);
router.get('/:id', controller.getById)
router.put('/:id', controller.update);
router.post('/', controller.insert)

export default router;