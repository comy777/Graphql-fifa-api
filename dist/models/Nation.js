"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NationSchema = new mongoose_1.Schema({
    idNation: {
        type: Number,
    },
    name: {
        type: String,
    },
});
exports.default = (0, mongoose_1.model)("nation", NationSchema);
