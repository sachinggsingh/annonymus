import Service from "../model/services";
import { Request, Response } from "express";
import { logger } from "../config/logger";

export async function getAllServices(req: Request, res: Response): Promise<void> {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    logger.error("Error fetching services:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createService(req: Request, res: Response): Promise<void> {
  try {
    const { name, description, isAvailable, baseType, basePrice, deliveryTimeInMinuter, } = req.body;
    if (!name || !description || !baseType || !basePrice || isAvailable === undefined) {
      logger.warn("Validation failed: All fields are required");
      res.status(400).json({ message: "All fields are required" });
    }

    const checkIfAlreadyExists = await Service.findOne({ name, baseType, basePrice, description });
    if (checkIfAlreadyExists) {
      logger.warn("Service already exists:", name);
      res.status(400).json({ message: "Service already exists" });
    }

    const newService = new Service({
      name,
      description,
      isAvailable,
      baseType,
      basePrice,
      deliveryTimeInMinuter,
    });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    logger.error("Error creating service:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateService(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { name, description, isAvailable, baseType } = req.body;

    if (!name || !description || !baseType || isAvailable === undefined) {
      logger.warn("Validation failed: All fields are required");
      res.status(400).json({ message: "All fields are required" });
    }

    const service = await Service.findByIdAndUpdate(
      id,
      { name, description, isAvailable, baseType },
      { new: true }
    );

    if (!service) {
      logger.warn("Service not found:", id);
      res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    logger.error("Error updating service:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteService(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      logger.warn("Service not found:", id);
      res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    logger.error("Error deleting service:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
