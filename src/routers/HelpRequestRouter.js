import express from 'express';
import helpController from '../controllers/HelpRequestsController.js';
import ourFilters from '../reqFilter/OurFilter.js'
const router = express.Router();
router.get('/:id', helpController.getById);
router.get('/', helpController.getAll);
router.put('/:id', helpController.update);


export default router;
