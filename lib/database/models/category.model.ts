import mongoose, { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
})

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category;