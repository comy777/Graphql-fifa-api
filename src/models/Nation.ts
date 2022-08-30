import { Schema, model } from "mongoose";

const NationSchema = new Schema({
  idNation: {
    type: Number,
  },
  name: {
    type: String,
  },
});

export default model("nation", NationSchema);
