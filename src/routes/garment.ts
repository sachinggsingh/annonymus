import express from 'express';
export const router = express.Router();

import { createGarment, getGarments,updateGarment,deleteGarment } from '../controller/garment';

router.post('/garment', createGarment);
router.get('/garments', getGarments);;
router.put('/garment/:id', updateGarment);
router.delete('/garment/:id', deleteGarment);

// userId is not available