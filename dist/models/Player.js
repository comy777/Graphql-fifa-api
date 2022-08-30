"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PlayerSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)("player", PlayerSchema);
