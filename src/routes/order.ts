import express from 'express'
export const router = express.Router()

import {placeOrder} from '../controller/order'

router.post('/order', placeOrder);
// userId is not available