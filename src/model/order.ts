import mongoose, {Document,Schema}  from "mongoose";

interface OrderModel extends Document {
    _id: mongoose.Types.ObjectId;
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    items: [{
        garmentId: mongoose.Types.ObjectId;
        serviceId: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        totalPrice: number;
    }];
    services: mongoose.Types.ObjectId[];
    isExpress: boolean;
    totalAmount: number;
    status: string;
    pickUpDate: Date;
    deliveryDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

const orderSchema = new Schema<OrderModel>({
    customerName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    customerPhone: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 15
    },
    customerAddress: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 300
    },
    items: [{
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
        quantity: {
            type: Number,
            required: true,
            min: 1,
            max: 100
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        totalPrice: {
            type: Number,
            required: true,
            min: 0
        }
    }],
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'Service'
    }],
    isExpress: {
        type: Boolean,
        default: false
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'completed', 'cancelled'],
        default: 'pending'
    },
    pickUpDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model<OrderModel>('Order', orderSchema, 'Orders');