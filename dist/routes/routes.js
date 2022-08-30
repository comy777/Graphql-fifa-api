"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_1 = require("../middlewares/validate");
const main_1 = require("../controllers/main");
const routes = (0, express_1.Router)();
routes.post("/api/v1/team", [(0, express_validator_1.check)("name", "El nombre del equipo es requerido").notEmpty(), validate_1.validate], main_1.getTeam);
exports.default = routes;
