import { Request, Response } from "express";
import Pricing from "../model/pricingModel";
import { logger } from "../config/logger";
import Order from "../model/order";
import { OrderValidation, validateWithJoi } from "../config/Validations";

export const placeOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const { customerName, customerPhone, customerAddress, garments, services, totalAmount, status } = req.body;
        
        // Validate request body
        const validationResult = OrderValidation.validate(req.body, { abortEarly: false });
        if (validationResult.error) {
            const errorMessages = validationResult.error.details.map(detail => detail.message);
            logger.warn(`Order validation failed: ${errorMessages.join(', ')}`);
            res.status(400).json({ 
                error: "Validation failed", 
                details: errorMessages,
                success: false 
            });
            return;
        }

        let calculatedTotalAmount = 0;
        const orderItems = [];

        // Process each garment with its service
        for (const garmentItem of garments) {
            const pricing = await Pricing.findOne({
                serviceId: garmentItem.serviceId,
                garmentId: garmentItem.garmentId,
            });
            
            if (!pricing) {
                logger.warn(`No pricing found for serviceId: ${garmentItem.serviceId}, garmentId: ${garmentItem.garmentId}`);
                res.status(400).json({ 
                    error: "No pricing found for one or more items", 
                    success: false 
                });
                return;
            }

            const itemTotalPrice = pricing.price * garmentItem.quantity;
            orderItems.push({ 
                ...garmentItem, 
                price: pricing.price, 
                totalPrice: itemTotalPrice 
            });
            calculatedTotalAmount += itemTotalPrice;
        }

        // Verify total amount matches calculated amount
        if (Math.abs(calculatedTotalAmount - totalAmount) > 0.01) {
            logger.warn(`Total amount mismatch: calculated=${calculatedTotalAmount}, provided=${totalAmount}`);
            res.status(400).json({ 
                error: "Total amount calculation mismatch", 
                success: false 
            });
            return;
        }

        const order = await Order.create({
            customerName,
            customerPhone,
            customerAddress,
            items: orderItems,
            services: services || [],
            totalAmount: calculatedTotalAmount,
            status: status || 'pending',
            pickUpDate: new Date(),
            deliveryDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Default 24 hours later
        });

        logger.info(`Order created successfully with ID: ${order._id}`);
        res.status(201).json({
            message: "Order placed successfully",
            success: true,
            data: order
        });
    } catch (error) {
        logger.error(`Error placing order: ${error}`);
        res.status(500).json({ 
            error: "Internal Server Error",
            success: false 
        });
    }
};
