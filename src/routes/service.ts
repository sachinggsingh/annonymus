import express from 'express'
export const router = express.Router()

import {getAllServices,createService,updateService,deleteService} from '../controller/services'

router.post("/services",createService);
router.get('/services',getAllServices);
router.put('/services/:id',updateService);
router.delete('/services/:id',deleteService);
