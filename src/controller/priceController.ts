import Pricing from "../model/pricingModel";
import { Request, Response } from "express";
import { logger } from "../config/logger";
import { PricingValidation, validateWithJoi } from "../config/Validations";

export const setPricing = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        // Validate request body
        const validationResult = PricingValidation.validate(req.body, { abortEarly: false });
        if (validationResult.error) {
            const errorMessages = validationResult.error.details.map(detail => detail.message);
            logger.warn(`Pricing validation failed: ${errorMessages.join(', ')}`);
            res.status(400).json({
                message: "Validation failed",
                details: errorMessages,
                status: "error",
                success: false,
            });
            return;
        }

        const { garmentId, serviceId, price, expressPrice } = req.body;

        const existingPricing = await Pricing.findOne({ garmentId, serviceId });
        if (existingPricing) {
            // If pricing already exists, update it
            existingPricing.price = price;
            existingPricing.expressPrice = expressPrice || price;
            await existingPricing.save();
            
            logger.info(`Pricing updated successfully: ${existingPricing._id}`);
            res.status(200).json({
                message: "Pricing updated successfully",
                status: "success",
                success: true,
                data: existingPricing,
            });
            return;
        }

        // Create new pricing entry
        const newPricing = await Pricing.create({
            garmentId,
            serviceId,
            price,
            expressPrice: expressPrice || price,
        });
        
        logger.info(`Pricing created successfully: ${newPricing._id}`);
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
        const { garmentId } = req.params;
        const pricingList = await Pricing.find({ garmentId }).populate("serviceId");
        
        if (!pricingList || pricingList.length === 0) {
            logger.warn(`No pricing found for garmentId: ${garmentId}`);
            res.status(404).json({
                message: "No pricing found for the specified garment",
                status: "error",
                success: false,
            });
            return;
        }
        
        logger.info(`Retrieved ${pricingList.length} pricing records for garmentId: ${garmentId}`);
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
        const { serviceId } = req.params;
        const pricingList = await Pricing.find({ serviceId })
            .populate("garmentId")
            .populate("serviceId");
            
        if (!pricingList || pricingList.length === 0) {
            logger.warn(`No pricing found for serviceId: ${serviceId}`);
            res.status(404).json({
                message: "No pricing found for the specified service",
                status: "error",
                success: false,
            });
            return;
        }
        
        logger.info(`Retrieved ${pricingList.length} pricing records for serviceId: ${serviceId}`);
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

export const getPriceWithServiceIdAndGarmentId = async(req: Request, res: Response): Promise<void> => {
    try {
        const { garmentId, serviceId } = req.params;
        const pricing = await Pricing.findOne({ garmentId, serviceId });

        if (!pricing) {
            logger.warn(`Pricing not found for garmentId: ${garmentId}, serviceId: ${serviceId}`);
            res.status(404).json({
                message: "Pricing not found for the specified garment and service",
                status: "error",
                success: false,
            });
            return;
        }

        logger.info(`Pricing retrieved successfully: ${pricing._id}`);
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
};