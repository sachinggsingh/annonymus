import express from 'express'
export const router = express.Router()
import {getPriceWithServiceIdAndGarmentId, getAllPricingByGarmentId, getAllPricingByServiceId} from '../controller/priceController'

router.get('/pricing/:id/:id', getPriceWithServiceIdAndGarmentId);
router.get('/pricing/:id', getAllPricingByGarmentId);
router.get('/pricing/:id', getAllPricingByServiceId);