import garment from "../model/garment";
import { Request, Response } from "express";
import { logger } from "../config/logger";
import { GarmentValidation, validateWithJoi } from "../config/Validations";

export const createGarment = async (req: Request, res: Response): Promise<void> => {
    try {
        // Validate request body
        const validationResult = GarmentValidation.validate(req.body, { abortEarly: false });
        if (validationResult.error) {
            const errorMessages = validationResult.error.details.map(detail => detail.message);
            logger.warn(`Garment validation failed: ${errorMessages.join(', ')}`);
            res.status(400).json({ 
                error: "Validation failed", 
                details: errorMessages,
                success: false 
            });
            return;
        }

        const { name, description, category, note, quantity } = req.body;

        const existingGarment = await garment.findOne({ name });
        if (existingGarment) {
            logger.warn(`Garment already exists: ${name}`);
            res.status(400).json({ 
                error: "Garment already exists",
                success: false 
            });
            return;
        }

        const newGarment = new garment({
            name,
            description,
            category,
            note: note || '',
            quantity
        });
        await newGarment.save();
        logger.info(`Garment created successfully: ${newGarment._id}`);
        res.status(201).json({
            message: "Garment created successfully",
            success: true,
            data: newGarment
        });
    } catch (error) {
        logger.error(`Error creating garment: ${error}`);
        res.status(500).json({ 
            error: "Internal Server Error",
            success: false 
        });
    }
};

export const getGarments = async (req: Request, res: Response): Promise<void> => {
    try {
        const garmentsList = await garment.find();
        if (garmentsList.length === 0) {
            logger.warn("No garments found");
            res.status(404).json({ 
                message: "No garments found",
                success: false 
            });
            return;
        }
        
        logger.info(`Retrieved ${garmentsList.length} garments successfully`);
        res.status(200).json({
            message: "Garments retrieved successfully",
            success: true,
            data: garmentsList
        });
    } catch (error) {
        logger.error(`Error retrieving garments: ${error}`);
        res.status(500).json({ 
            error: "Internal Server Error",
            success: false 
        });
    }
};

export const updateGarment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, description, category, note, quantity } = req.body;

        // Validate the update data
        const updateData = { name, description, category, note, quantity };
        const validationResult = GarmentValidation.validate(updateData, { abortEarly: false });
        if (validationResult.error) {
            const errorMessages = validationResult.error.details.map(detail => detail.message);
            logger.warn(`Garment update validation failed: ${errorMessages.join(', ')}`);
            res.status(400).json({ 
                error: "Validation failed", 
                details: errorMessages,
                success: false 
            });
            return;
        }

        const updatedGarment = await garment.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedGarment) {
            logger.warn(`Garment not found: ${id}`);
            res.status(404).json({ 
                error: "Garment not found",
                success: false 
            });
            return;
        }
        
        logger.info(`Garment updated successfully: ${updatedGarment._id}`);
        res.status(200).json({
            message: "Garment updated successfully",
            success: true,
            data: updatedGarment
        });
    } catch (error) {
        logger.error(`Error updating garment: ${error}`);
        res.status(500).json({ 
            error: "Internal Server Error",
            success: false 
        });
    }
};

export const deleteGarment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedGarment = await garment.findByIdAndDelete(id);
        
        if (!deletedGarment) {
            logger.warn(`Garment not found: ${id}`);
            res.status(404).json({ 
                error: "Garment not found",
                success: false 
            });
            return;
        }
        
        logger.info(`Garment deleted successfully: ${deletedGarment._id}`);
        res.status(200).json({ 
            message: "Garment deleted successfully",
            success: true 
        });
    } catch (error) {
        logger.error(`Error deleting garment: ${error}`);
        res.status(500).json({ 
            error: "Internal Server Error",
            success: false 
        });
    }
};