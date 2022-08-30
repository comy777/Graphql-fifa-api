import { Player, TeamResponse } from "../interfaces/response";
import PlayerSchema from "../models/Player";
import { getFifaPlayersApi } from "./fifa";
import { validatePages, validatePlayers } from "../utils/fifa";
import {
  PropsPlayersSearch,
  PropsTeamSearch,
  PropsLogin,
} from "../interfaces/controllers";
import { generateToken } from "../jwt/jwt";

//Funcion para guardar los jugadores
const savePlayers = async () => {
  const totalPage = 1106;
  let page = 0;
  const resp: Player[] = [];
  return new Promise(async (resolve) => {
    do {
      const players = await getFifaPlayersApi(page);
      players.forEach(async (item) => {
        const player = new PlayerSchema(item);
        await player.save();
      });
      page += 1;
    } while (page <= totalPage);
    if (page === totalPage) resolve(resp);
  });
};

export const searchTeam = async (
  _: any,
  { input }: PropsTeamSearch,
  ctx: any
) => {
  const { name, page } = input;
  const user = ctx.email;
  if (!user) throw new Error("Token requerido");
  const pageSearch = page ? page : 1;
  const club = name;
  const search = { $text: { $search: club } };
  const players = await PlayerSchema.find<Player>(search);
  const team: TeamResponse | undefined | [] = validatePages({
    players,
    query: name,
    page: pageSearch,
  });
  return team;
};

export const searchPlayer = async (
  _: any,
  { input }: PropsPlayersSearch,
  ctx: any
) => {
  const user = ctx.email;
  if (!user) throw new Error("Token requerido");
  const { search, order, page } = input;
  const pageSearch = page ? page : 1;
  const regex = new RegExp(search, "i");
  const query = { name: regex };
  const orderList = order ? order : "asc";
  const orden = orderList === "asc" ? 1 : -1;
  const players = await PlayerSchema.find<Player>(query).sort({ name: orden });
  const response = validatePlayers({ players, page: pageSearch });
  return response;
};

export const getQuery = () => {
  return "Query";
};

export const login = (_: any, { input }: PropsLogin) => {
  const { email, password } = input;
  if (!email) throw new Error("El email es requerido");
  if (!password) throw new Error("La contraseña es requerida");
  const token = generateToken({ email });
  return { token };
};
