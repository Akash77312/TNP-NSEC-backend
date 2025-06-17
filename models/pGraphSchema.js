import mongoose from "mongoose";

const pGraphSchema = new mongoose.Schema({
  year: { type: String, required: true },
  postGraduate: { type: Number, required: true },
  underGraduate: { type: Number, required: true },
  total: { type: Number, required: true },
});

export default mongoose.model("Placement", pGraphSchema);
