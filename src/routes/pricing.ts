import express from 'express'
export const router = express.Router()
import {getPriceWithServiceIdAndGarmentId, getAllPricingByGarmentId, getAllPricingByServiceId} from '../controller/priceController'

router.get('/pricing/:garmentId/:serviceId', getPriceWithServiceIdAndGarmentId);
router.get('/pricing/:garmentId', getAllPricingByGarmentId);
router.get('/pricing/:serviceId', getAllPricingByServiceId);