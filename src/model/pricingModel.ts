import mongoose, { Document, Schema } from 'mongoose';

interface PricingModel extends Document {
    _id: mongoose.Types.ObjectId;
    garmentId: mongoose.Types.ObjectId;
    serviceId: mongoose.Types.ObjectId;
    price: number;
    expressPrice: number;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const pricingSchema = new Schema<PricingModel>({
    garmentId: {
        type: Schema.Types.ObjectId,
        ref: 'Garment',
        required: true
    },
    serviceId: {
        type: Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    expressPrice: {
        type: Number,
        required: true,
        min: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Create compound index to ensure unique garment-service combinations
pricingSchema.index({ garmentId: 1, serviceId: 1 }, { unique: true });

export default mongoose.model<PricingModel>('Pricing', pricingSchema, 'Pricing');
