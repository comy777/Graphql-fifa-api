"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = ({ email }) => {
    const payload = { email };
    return jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "7d",
    });
};
exports.generateToken = generateToken;
const validateToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
    }
    catch (error) {
        throw new Error("Refrescar token");
    }
};
exports.validateToken = validateToken;
