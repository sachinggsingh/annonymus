import { Request, Response } from "express";
import Pricing from "../model/pricingModel";
import { logger } from "../config/logger";
import Order from "../model/order";

export const placeOrder = async (req: Request, res: Response):Promise<void> => {
    try {
    const {  items, pickUpDate,quantity,basePrice,deliveryDate,isAvailable } = req.body;
    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
        {
        const pricing = await Pricing.findOne({
            serviceId: item.serviceId,
            garmentId: item.garmentId,
        });
        if (!pricing) {
            logger.warn("No pricing is found ");
            res
                .status(400)
                .json({ msg: "No pricing found", success: false });
            return;
        }

        const totalPrice = basePrice * quantity;

        orderItems.push({ ...item, pricePerUnit: basePrice, totalPrice });
        totalAmount += totalPrice;
        }
    }
    const order = await Order.create({
        items: orderItems,
        pickUpDate,
        deliveryDate,
        isAvailable,
        totalPrice: totalAmount,
    });

    res.status(201).json(order);
    } catch (error) {
    logger.error(`Error placing order: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
    }
};
