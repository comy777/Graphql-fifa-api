"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL = process.env.API_FIFA;
const apiFifa = axios_1.default.create({
    baseURL,
    headers: {
        "X-AUTH-TOKEN": process.env.API_KEY,
    },
});
exports.default = apiFifa;
