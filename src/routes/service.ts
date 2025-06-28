import express from 'express'
import { getAllServices, createService, updateService, deleteService } from '../controller/services'
import { ServiceValidation, validateWithJoi } from '../config/Validations'

export const router = express.Router()

router.post("/services", validateWithJoi(ServiceValidation), createService)
router.get('/services', getAllServices)
router.put('/services/:id', validateWithJoi(ServiceValidation), updateService)
router.delete('/services/:id', deleteService)

export default router
