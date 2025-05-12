import mongoose, { Document, Schema } from "mongoose";

// Interface định nghĩa cấu trúc document trong MongoDB
export interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

// Định nghĩa schema với validation và tùy chọn
export const userSchema = new Schema<IUser>(
  {
    name: { type: String, trim: true },
    age: { type: Number, required: false },
    password: { type: String, required: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
  },
  {
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

// Tạo và xuất Mongoose model
export const UserModel = mongoose.model<IUser>("User", userSchema);