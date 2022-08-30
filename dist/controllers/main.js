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
exports.login = exports.getQuery = exports.searchPlayer = exports.searchTeam = void 0;
const Player_1 = __importDefault(require("../models/Player"));
const fifa_1 = require("./fifa");
const fifa_2 = require("../utils/fifa");
const jwt_1 = require("../jwt/jwt");
//Funcion para guardar los jugadores
const savePlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    const totalPage = 1106;
    let page = 0;
    const resp = [];
    return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
        do {
            const players = yield (0, fifa_1.getFifaPlayersApi)(page);
            players.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
                const player = new Player_1.default(item);
                yield player.save();
            }));
            page += 1;
        } while (page <= totalPage);
        if (page === totalPage)
            resolve(resp);
    }));
});
const searchTeam = (_, { input }, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, page } = input;
    const user = ctx.email;
    if (!user)
        throw new Error("Token requerido");
    const pageSearch = page ? page : 1;
    const club = name;
    const search = { $text: { $search: club } };
    const players = yield Player_1.default.find(search);
    const team = (0, fifa_2.validatePages)({
        players,
        query: name,
        page: pageSearch,
    });
    return team;
});
exports.searchTeam = searchTeam;
const searchPlayer = (_, { input }, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const user = ctx.email;
    if (!user)
        throw new Error("Token requerido");
    const { search, order, page } = input;
    const pageSearch = page ? page : 1;
    const regex = new RegExp(search, "i");
    const query = { name: regex };
    const orderList = order ? order : "asc";
    const orden = orderList === "asc" ? 1 : -1;
    const players = yield Player_1.default.find(query).sort({ name: orden });
    const response = (0, fifa_2.validatePlayers)({ players, page: pageSearch });
    return response;
});
exports.searchPlayer = searchPlayer;
const getQuery = () => {
    return "Query";
};
exports.getQuery = getQuery;
const login = (_, { input }) => {
    const { email, password } = input;
    if (!email)
        throw new Error("El email es requerido");
    if (!password)
        throw new Error("La contraseña es requerida");
    const token = (0, jwt_1.generateToken)({ email });
    return { token };
};
exports.login = login;
