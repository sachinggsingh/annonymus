import mongoose, { Document, Schema } from 'mongoose';

export interface Garment extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    isAvailable: boolean;
    category:string;
    createdAt?: Date;
    updatedAt?: Date;
}

const garments = new Schema<Garment>({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    category:{
        type: String,
        required: true,
        enum: ['Clothing', 'Linen', 'FootWear', 'Others'],
        default: 'Clothing'
    }
}, {
    timestamps: true,
})


export default mongoose.model<Garment>('Garment', garments, 'Garment');