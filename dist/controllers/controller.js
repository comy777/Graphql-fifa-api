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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClub = exports.getNation = exports.getClubsSave = exports.getNationsSave = void 0;
const request_1 = require("../api/request");
const Club_1 = __importDefault(require("../models/Club"));
const Nation_1 = __importDefault(require("../models/Nation"));
const getNationsSave = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const nations = yield (0, request_1.appGetNations)(page);
    yield nations.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
        const { id: idNation, name } = item;
        const data = { idNation, name };
        const nationSave = new Nation_1.default(data);
        yield nationSave.save();
    }));
    return nations;
});
exports.getNationsSave = getNationsSave;
const getClubsSave = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const clubs = yield (0, request_1.appGetRequestClubs)(page);
    yield clubs.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
        const { id: idClub, name } = item;
        const data = { idClub, name };
        const clubSave = new Club_1.default(data);
        yield clubSave.save();
    }));
    return clubs;
});
exports.getClubsSave = getClubsSave;
const getNation = (idNation) => __awaiter(void 0, void 0, void 0, function* () {
    const nation = yield Nation_1.default.findOne({ idNation });
    if (!nation)
        return { idNation: 0, name: "" };
    return nation;
});
exports.getNation = getNation;
const getClub = (idClub) => __awaiter(void 0, void 0, void 0, function* () {
    const club = yield Club_1.default.findOne({ idClub });
    if (!club)
        return { idClub: 0, name: "" };
    return club;
});
exports.getClub = getClub;
