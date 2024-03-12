import mongoose, { mongo } from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: number,
      default: 0,
    },
    stock: {
      type: number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.types.ObjectId,
      ref: 'User',
    },
    category: {
      type: mongoose.Schema.types.ObejectId,
      ref: 'category',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
