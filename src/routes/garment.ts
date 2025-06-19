import express from 'express';
export const router = express.Router();

import { createGarment, getGarments, getGarmentById,updateGarment,deleteGarment } from '../controller/garment';

router.post('/garment', createGarment);
router.get('/garments', getGarments);
router.get('/garment/:userId', getGarmentById);
router.put('/garment/:userId', updateGarment);
router.delete('/garment/:userId', deleteGarment);

// userId is not available