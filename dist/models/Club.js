"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClubSchema = new mongoose_1.Schema({
    idClub: {
        type: Number,
    },
    name: {
        type: String,
    },
});
exports.default = (0, mongoose_1.model)("club", ClubSchema);
