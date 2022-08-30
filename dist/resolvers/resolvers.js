"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fifa_1 = require("./fifa");
const main_1 = require("../controllers/main");
const root = {
    getFifaPlayersApi: fifa_1.getFifaPlayersApi,
    getNations: fifa_1.getNations,
    getClubs: fifa_1.getClubs,
    getTeam: main_1.getTeam,
};
exports.default = root;
