import mongoose, { Document, Schema } from 'mongoose';

export interface Service extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    deliveryTimeInMinutes: number;
    isAvailable: boolean;
    baseType: string;
    basePrice: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const serviceSchema: Schema<Service> = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 2,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 500
    },
    deliveryTimeInMinutes: {
        type: Number,
        default: 30,
        min: 15,
        max: 480
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    baseType: {
        type: String,
        enum: ["perKg", "perItem", "perService"],
        required: true,
    },
    basePrice: {
        type: Number,
        required: true,
        min: 0
    },
}, {
    timestamps: true,
});

export default mongoose.model<Service>('Service', serviceSchema, 'Service');
