"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClubs = exports.getNations = exports.getFifaPlayersApi = void 0;
const request_1 = require("../api/request");
const controller_1 = require("./controller");
const controller_2 = require("./controller");
const getFifaPlayersApi = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const players = yield (0, request_1.appGetPlayers)(page);
    const playersArray = [];
    return new Promise((resolve) => {
        players.items.forEach((item, i) => __awaiter(void 0, void 0, void 0, function* () {
            const { name, nation, position, club } = item;
            const respNation = yield (0, controller_1.getNation)(nation);
            const { name: nationName } = respNation;
            const clubName = yield (0, controller_2.getClub)(club);
            const { name: nameClub } = clubName;
            const data = {
                name,
                nation: nationName ? nationName : "",
                position,
                club: nameClub ? nameClub : "",
            };
            playersArray[i] = data;
            if (i === players.items.length - 1)
                resolve(playersArray);
        }));
    });
});
exports.getFifaPlayersApi = getFifaPlayersApi;
const getNations = (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
    const nations = yield (0, controller_1.getNationsSave)(input);
    return nations;
});
exports.getNations = getNations;
const getClubs = (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
    const clubs = yield (0, controller_1.getClubsSave)(input);
    return clubs;
});
exports.getClubs = getClubs;
