import Pricing from "../model/pricingModel";
import {logger} from "../config/logger";
import {Request, Response} from "express";
import { log } from "console";

interface OrderItem {
    garmentId: string;
    serviceId: string;
    isExpress: boolean;
    expressPrice?: number;
    price: number;
    qty: number;
}

export const setTheOrder = async (items: OrderItem[]): Promise<number> => {
    let total = 0;
    for (const item of items) {
        const priceEntry = await Pricing.findOne({ garmentId: item.garmentId, serviceId: item.serviceId });

        if (!priceEntry) {
            logger.error("Pricing not found for garmentId:", item.garmentId, "and serviceId:", item.serviceId);
            throw new Error("Pricing not found for garmentId: " + item.garmentId + " and serviceId: " + item.serviceId);
        }

        const price = item.isExpress && item.expressPrice
            ? item.expressPrice
            : item.price;

        total += price * item.qty;
    }
    return total;
}
