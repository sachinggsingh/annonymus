import express from 'express'
import { 
    getPriceWithServiceIdAndGarmentId, 
    getAllPricingByGarmentId, 
    getAllPricingByServiceId,
    setPricing 
} from '../controller/priceController'
import { PricingValidation, validateWithJoi } from '../config/Validations'

export const router = express.Router()

// Apply validation middleware to routes that need it
router.post('/pricing', validateWithJoi(PricingValidation), setPricing)
router.get('/pricing/garment/:garmentId', getAllPricingByGarmentId)
router.get('/pricing/service/:serviceId', getAllPricingByServiceId)
router.get('/pricing/:garmentId/:serviceId', getPriceWithServiceIdAndGarmentId)

export default router