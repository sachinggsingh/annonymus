import Pricing from "../model/pricingModel";
import { Request, Response } from "express";
import { logger } from "../config/logger";

export const setPricing = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
    const { garmentId, serviceId, price, expressPrice } = req.body;

    const existingPricing = await Pricing.findOne({ garmentId, serviceId });
    if (existingPricing) {
      // If pricing already exists, update it
        existingPricing.price = price;
        existingPricing.expressPrice = expressPrice;
        await existingPricing.save();
        res.status(200).json({
        message: "Pricing updated successfully",
        status: "success",
        success: true,
        data: existingPricing,
        });
    }

    // new pricing entry
    const newPricing = await Pricing.create({
        garmentId,
        serviceId,
        price,
        expressPrice,
    });
    res.status(201).json({
        message: "Pricing set successfully",
        status: "success",
        success: true,
        data: newPricing,
    });
    } catch (error) {
    logger.error("Error setting pricing:", error);
    res.status(500).json({
        message: "Internal server error while setting pricing",
        status: "error",
        success: false,
    });
    }
};


export const getAllPricingByGarmentId = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
    const pricingList = await Pricing.find({ garmentId: req.params.garmentId }).populate("serviceId");
    if(!pricingList || pricingList.length === 0) {
        res.status(404).json({
            message: "No pricing found for the specified garment",
            status: "error",
            success: false,
        });
    }
    res.status(200).json({
        message: "All pricing retrieved successfully",
        status: "success",
        success: true,
        data: pricingList,
    });
    } catch (error) {
    logger.error("Error retrieving all pricing:", error);
    res.status(500).json({
        message: "Internal server error while retrieving all pricing",
        status: "error",
        success: false,
    });
    }
};


export const getAllPricingByServiceId = async (
    req: Request,   
    res: Response
): Promise<void> => {
    try {
        const pricingList = await Pricing.find({ serviceId: req.params.serviceId })
            .populate("garmentId")
            .populate("serviceId");
            if(!pricingList || pricingList.length === 0) {
        res.status(404).json({
            message: "No pricing found for the specified garment",
            status: "error",
            success: false,
        });
    }
        res.status(200).json({
            message: "All pricing retrieved successfully",
            status: "success",
            success: true,
            data: pricingList,
        });
    } catch (error) {
        logger.error("Error retrieving all pricing:", error);
        res.status(500).json({
            message: "Internal server error while retrieving all pricing",
            status: "error",
            success: false,
        });
    }
}


export const getPriceWithServiceIdAndGarmentId = async(req:Request, res:Response):Promise<void> => {
    try {
        const { garmentId, serviceId } = req.params;
        const pricing = await Pricing.findOne({ garmentId, serviceId })

        if (!pricing) {
                res.status(404).json({
                message: "Pricing not found for the specified garment and service",
                status: "error",
                success: false,
            });
        }

        res.status(200).json({
            message: "Pricing retrieved successfully",
            status: "success",
            success: true,
            data: pricing,
        });
    } catch (error) {
        logger.error("Error retrieving pricing:", error);
        res.status(500).json({
            message: "Internal server error while retrieving pricing",
            status: "error",
            success: false,
        });
    }
}