import garment from "../model/garment";
import { Request, Response } from "express";
import { logger } from "../config/logger";

export const createGarment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, category, note,quantity } = req.body;
        if (!name || !description || !category||!quantity) {
            logger.warn("Validation failed: All fields are required");
            res.status(400).json({ error: "All fields are required" });
            return;
        }

        const existingGarment = await garment.findOne({ name });
        if (existingGarment) {
            logger.warn("Garment already exists");
            res.status(400).json({ error: "Garment already exists" });
            return;
        }

        const newGarment = new garment({
            name,
            description,
            category,
            note,
            quantity
        });
        await newGarment.save();
        logger.info("Garment created successfully");
        res.status(201).json(newGarment);
    }
    catch (error) {
        logger.error(`Error creating garment: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export const getGarments = async (req: Request, res: Response): Promise<void> => {
    try {
        const garmentsList = await garment.find();
        if (garmentsList.length === 0) {
            logger.warn("No garments found");
            res.status(404).json({ message: "No garments found" });
            return;
        } else {
            logger.info("Garments retrieved successfully");
            res.status(200).json(garmentsList);
        }
    }
    catch (error) {
        logger.error(`Error retrieving garments: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export const updateGarment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, description, category, isAvailable } = req.body;
        const updatedGarment = await garment.findByIdAndUpdate(
            id,
            { name, description, category, isAvailable },
            { new: true }
        );

        if (!updatedGarment) {

            logger.warn("Garment not found");


            res.status(404).json({ error: "Garment not found" });
        } else {
            logger.info("Garment updated successfully");
            res.status(200).json(updatedGarment);
        }
    } catch (error) {
        logger.error(`Error updating garment: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export const deleteGarment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedGarment = await garment.findByIdAndDelete(id);
        if (!deletedGarment) {
            logger.warn("Garment not found");
            res.status(404).json({ error: "Garment not found" });
        } else {
            logger.info("Garment deleted successfully");
            res.status(200).json({ message: "Garment deleted successfully" });
        }
    } catch (error) {
        logger.error(`Error deleting garment: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}