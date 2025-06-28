import Joi from "joi";
import { Request, Response, NextFunction } from 'express';

export const ServiceValidation = Joi.object({
    name: Joi.string().required().trim().min(2).max(100).messages({
        "string.empty": "Name is required",
        "string.min": "Name must be at least 2 characters long",
        "string.max": "Name must not exceed 100 characters",
        "any.required": "Name is required"
    }),
    description: Joi.string().required().trim().min(10).max(500).messages({
        "string.empty": "Description is required",
        "string.min": "Description must be at least 10 characters long",
        "string.max": "Description must not exceed 500 characters",
        "any.required": "Description is required"   
    }),
    deliveryTimeInMinutes: Joi.number().min(15).max(480).default(30).messages({
        "number.min": "Delivery time must be at least 15 minutes",
        "number.max": "Delivery time must not exceed 480 minutes (8 hours)",
        "number.base": "Delivery time must be a number"
    }),
    isAvailable: Joi.boolean().default(true).messages({
        "boolean.base": "Availability must be a boolean"
    }),
    baseType: Joi.string().valid("perKg", "perItem", "perService").required().messages({
        "any.only": "Base type must be one of 'perKg', 'perItem', or 'perService'",
        "any.required": "Base type is required"
    }),
    basePrice: Joi.number().min(0).required().messages({   
        "number.base": "Base price must be a number",
        "number.min": "Base price must be non-negative",
        "any.required": "Base price is required"
    })
});

export const GarmentValidation = Joi.object({
    name: Joi.string().required().trim().min(2).max(100).messages({
        "string.empty": "Name is required",
        "string.min": "Name must be at least 2 characters long",
        "string.max": "Name must not exceed 100 characters",
        "any.required": "Name is required"
    }),
    description: Joi.string().required().trim().min(10).max(500).messages({
        "string.empty": "Description is required",
        "string.min": "Description must be at least 10 characters long",
        "string.max": "Description must not exceed 500 characters",
        "any.required": "Description is required"
    }),
    note: Joi.string().optional().allow('').max(200).messages({
        "string.base": "Note must be a string",
        "string.max": "Note must not exceed 200 characters"
    }),
    quantity: Joi.number().min(1).max(100).required().messages({
        "number.base": "Quantity must be a number",
        "number.min": "Quantity must be at least 1",
        "number.max": "Quantity must not exceed 100",
        "any.required": "Quantity is required"
    }),
    category: Joi.string().valid('Clothing', 'Linen', 'FootWear', 'Others').default('Clothing').messages({
        "any.only": "Category must be one of 'Clothing', 'Linen', 'FootWear', or 'Others'"
    })
});

export const OrderValidation = Joi.object({
    customerName: Joi.string().required().trim().min(2).max(100).messages({
        "string.empty": "Customer name is required",
        "string.min": "Customer name must be at least 2 characters long",
        "string.max": "Customer name must not exceed 100 characters",
        "any.required": "Customer name is required"
    }),
    customerPhone: Joi.string().required().trim().pattern(/^[0-9+\-\s()]+$/).min(10).max(15).messages({
        "string.empty": "Customer phone is required",
        "string.pattern.base": "Phone number format is invalid",
        "string.min": "Phone number must be at least 10 digits",
        "string.max": "Phone number must not exceed 15 digits",
        "any.required": "Customer phone is required"
    }),
    customerAddress: Joi.string().required().trim().min(10).max(300).messages({
        "string.empty": "Customer address is required",
        "string.min": "Address must be at least 10 characters long",
        "string.max": "Address must not exceed 300 characters",
        "any.required": "Customer address is required"
    }),
    garments: Joi.array().items(Joi.object({
        garmentId: Joi.string().required().messages({
            "any.required": "Garment ID is required"
        }),
        quantity: Joi.number().min(1).max(50).required().messages({
            "number.base": "Quantity must be a number",
            "number.min": "Quantity must be at least 1",
            "number.max": "Quantity must not exceed 50",
            "any.required": "Quantity is required"
        })
    })).min(1).required().messages({
        "array.min": "At least one garment is required",
        "any.required": "Garments are required"
    }),
    services: Joi.array().items(Joi.object({
        serviceId: Joi.string().required().messages({
            "any.required": "Service ID is required"
        })
    })).optional().default([]),
    totalAmount: Joi.number().min(0).required().messages({
        "number.base": "Total amount must be a number",
        "number.min": "Total amount must be non-negative",
        "any.required": "Total amount is required"
    }),
    status: Joi.string().valid('pending', 'processing', 'completed', 'cancelled').default('pending').messages({
        "any.only": "Status must be one of 'pending', 'processing', 'completed', or 'cancelled'"
    })
});

export const PricingValidation = Joi.object({
    serviceId: Joi.string().required().messages({
        "any.required": "Service ID is required"
    }),
    garmentId: Joi.string().required().messages({
        "any.required": "Garment ID is required"
    }),
    price: Joi.number().min(0).required().messages({
        "number.base": "Price must be a number",
        "number.min": "Price must be non-negative",
        "any.required": "Price is required"
    }),
    isActive: Joi.boolean().default(true).messages({
        "boolean.base": "Active status must be a boolean"
    })
});

// Joi validation middleware
export const validateWithJoi = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errorMessage = error.details.map(detail => detail.message);
            res.status(400).json({ errors: errorMessage });
            return;
        }
        next();
    };
}; 