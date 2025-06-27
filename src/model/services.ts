import mongoose, { Document, Schema } from 'mongoose';

export interface Service extends Document{
    _id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    deliveryTimeInMinuter: number;
    isAvailable: boolean;
    baseType: string;
    basePrice: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const serviceSchema: Schema<Service>  = new Schema({
    name :{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    deliveryTimeInMinuter: {
        type: Number,
        default: 30,
        min: 25
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
    },
},{
    timestamps: true,
})

export default mongoose.model<Service>('Service', serviceSchema, 'Service');
