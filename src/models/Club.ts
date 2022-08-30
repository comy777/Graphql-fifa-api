import { Schema, model } from "mongoose";

const ClubSchema = new Schema({
  idClub: {
    type: Number,
  },
  name: {
    type: String,
  },
});

export default model("club", ClubSchema);
