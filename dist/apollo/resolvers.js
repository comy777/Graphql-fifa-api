"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../controllers/main");
const resolvers = {
    Query: {
        getQuery: main_1.getQuery,
    },
    Mutation: {
        searchTeam: main_1.searchTeam,
        searchPlayer: main_1.searchPlayer,
        login: main_1.login,
    },
};
exports.default = resolvers;
