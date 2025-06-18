import mongoose,{Document,Schema} from 'mongoose';

interface PricingModel extends Document {
    garmentId: mongoose.Types.ObjectId;
    serviceId: mongoose.Types.ObjectId;
    price: number;
    expressPrice: number;
}

const pricingSchema = new Schema<PricingModel>({
    garmentId:{
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
    },
    expressPrice: {
        type: Number,
    }
}, {
    timestamps: true
});

export default mongoose.model<PricingModel>('Pricing', pricingSchema, 'Pricing');
