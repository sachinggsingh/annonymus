import express from 'express';
import { createGarment, getGarments, updateGarment, deleteGarment } from '../controller/garment';
import { GarmentValidation, validateWithJoi } from '../config/Validations';

export const router = express.Router();

// Apply validation middleware to routes that need it
router.post('/garment', validateWithJoi(GarmentValidation), createGarment);
router.get('/garments', getGarments);
router.put('/garment/:id', validateWithJoi(GarmentValidation), updateGarment);
router.delete('/garment/:id', deleteGarment);

export default router;

// userId is not available