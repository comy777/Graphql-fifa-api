import { Schema, model } from "mongoose";

const PlayerSchema = new Schema({
  name: {
    type: String,
  },
  nation: {
    type: String,
  },
  club: {
    type: String,
  },
  position: {
    type: String,
  },
});

PlayerSchema.index({ name: "text", club: "text" });

export default model("player", PlayerSchema);
