import express from 'express'
export const router = express.Router()

import {getAllServices,createService,deleteService,getServiceById} from '../controller/services'
// updateService

router.post("/services",createService);
router.get('/services',getAllServices);
router.get('/services/:id',getServiceById);
// router.put('/services/:id',updateService);
router.delete('/services/:id',deleteService);
