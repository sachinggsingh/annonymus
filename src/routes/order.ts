import express from 'express'
import { placeOrder } from '../controller/order'
import { OrderValidation, validateWithJoi } from '../config/Validations'

export const router = express.Router()

// Apply validation middleware to the route
router.post('/order', validateWithJoi(OrderValidation), placeOrder)

export default router