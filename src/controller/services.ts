import Service from "../model/services";
import { Request, Response } from "express";
import { logger } from "../config/logger";
import { ServiceValidation, validateWithJoi } from "../config/Validations";

export async function getAllServices(req: Request, res: Response): Promise<void> {
  try {
    const services = await Service.find();
    logger.info(`Retrieved ${services.length} services successfully`);
    res.status(200).json({
      message: "Services retrieved successfully",
      success: true,
      data: services
    });
  } catch (error) {
    logger.error("Error fetching services:", error);
    res.status(500).json({ 
      message: "Internal Server Error",
      success: false 
    });
  }
}

export async function createService(req: Request, res: Response): Promise<void> {
  try {
    // Validate request body
    const validationResult = ServiceValidation.validate(req.body, { abortEarly: false });
    if (validationResult.error) {
      const errorMessages = validationResult.error.details.map(detail => detail.message);
      logger.warn(`Service validation failed: ${errorMessages.join(', ')}`);
      res.status(400).json({ 
        message: "Validation failed", 
        details: errorMessages,
        success: false 
      });
      return;
    }

    const { name, description, isAvailable, baseType, basePrice, deliveryTimeInMinutes } = req.body;

    const checkIfAlreadyExists = await Service.findOne({ name });
    if (checkIfAlreadyExists) {
      logger.warn(`Service already exists: ${name}`);
      res.status(400).json({ 
        message: "Service already exists",
        success: false 
      });
      return;
    }

    const newService = new Service({
      name,
      description,
      isAvailable: isAvailable !== undefined ? isAvailable : true,
      baseType,
      basePrice,
      deliveryTimeInMinutes: deliveryTimeInMinutes || 30,
    });
    await newService.save();
    
    logger.info(`Service created successfully: ${newService._id}`);
    res.status(201).json({
      message: "Service created successfully",
      success: true,
      data: newService
    });
  } catch (error) {
    logger.error("Error creating service:", error);
    res.status(500).json({ 
      message: "Internal Server Error",
      success: false 
    });
  }
}

export async function updateService(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { name, description, isAvailable, baseType, basePrice, deliveryTimeInMinutes } = req.body;

    // Validate the update data
    const updateData = { name, description, isAvailable, baseType, basePrice, deliveryTimeInMinutes };
    const validationResult = ServiceValidation.validate(updateData, { abortEarly: false });
    if (validationResult.error) {
      const errorMessages = validationResult.error.details.map(detail => detail.message);
      logger.warn(`Service update validation failed: ${errorMessages.join(', ')}`);
      res.status(400).json({ 
        message: "Validation failed", 
        details: errorMessages,
        success: false 
      });
      return;
    }

    const service = await Service.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!service) {
      logger.warn(`Service not found: ${id}`);
      res.status(404).json({ 
        message: "Service not found",
        success: false 
      });
      return;
    }

    logger.info(`Service updated successfully: ${service._id}`);
    res.status(200).json({
      message: "Service updated successfully",
      success: true,
      data: service
    });
  } catch (error) {
    logger.error("Error updating service:", error);
    res.status(500).json({ 
      message: "Internal Server Error",
      success: false 
    });
  }
}

export async function deleteService(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      logger.warn(`Service not found: ${id}`);
      res.status(404).json({ 
        message: "Service not found",
        success: false 
      });
      return;
    }

    logger.info(`Service deleted successfully: ${service._id}`);
    res.status(200).json({ 
      message: "Service deleted successfully",
      success: true 
    });
  } catch (error) {
    logger.error("Error deleting service:", error);
    res.status(500).json({ 
      message: "Internal Server Error",
      success: false 
    });
  }
}
