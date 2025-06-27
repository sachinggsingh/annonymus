import mongoose, {Document,Schema}  from "mongoose";

interface OrderModel extends Document {
    id: mongoose.Types.ObjectId;
    items : [{
        garmentId: mongoose.Types.ObjectId;
        serviceId: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        totalPrice: number;
    }],
    isExpress: boolean;
    totalAmount: number;
    status: string;
    pickUpDate: Date;
    deliveryDate: Date;
}

const orderSchema = new Schema<OrderModel>({
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
            min: 1
        },
        price: {
            type: Number,
            required: true,
            min: 0
        }
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
        enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
        default: 'Pending'
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