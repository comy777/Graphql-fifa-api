import {
  PropsPages,
  PropsPlayers,
  PropsValidateTeam,
} from "../interfaces/controllers";
import { Player, TeamResponse } from "../interfaces/response";

export const validateTeam = ({
  players,
  query,
}: PropsValidateTeam): Player[] => {
  const team: Player[] = [];
  let contador = 0;
  if (!players) return [];
  const queryName = query.trim().toLowerCase();
  players.forEach((item, i) => {
    if (!item) return;
    const { club, name, nation, position } = item;
    if (!club) return;
    const clubName = club.toLowerCase();
    if (clubName === queryName) {
      const data = {
        club: club ? club : "",
        name: name ? name : "",
        nation: nation ? nation : "",
        position: position ? position : "",
      };
      team[contador] = data;
      contador += 1;
    }
  });
  return team;
};

export const validatePages = ({
  players,
  query,
  page,
}: PropsPages): TeamResponse | undefined | [] => {
  const team: Player[] = validateTeam({ players, query });
  if (team.length === 0)
    throw new Error("No hay conincidencias con la busqueda");
  const totalPages = team.length / 10;
  const total = totalPages.toFixed(0);
  if (page > parseInt(total)) throw new Error("Numero de pagina no valido");
  const elementos = page === 1 ? 0 : 10 * page - 10;
  const totalElementos = page === 1 ? 10 : elementos + 10;
  const resp = team.slice(elementos, totalElementos);
  const response = {
    page: page ? page : 1,
    totalPages: totalPages.toFixed(0),
    items: resp.length,
    totalItems: team.length,
    players: resp,
  };
  return response;
};

export const validatePlayers = ({
  players,
  page,
}: PropsPlayers): TeamResponse | undefined => {
  if (!players) return;
  if (players.length === 0)
    throw new Error("No hay conincidencias con la busqueda");
  const totalPages = players.length > 10 ? players.length / 10 : 1;
  const total = totalPages.toFixed(0);
  if (page > parseInt(total)) throw new Error("Numero de pagina no valido");
  const elementos = page === 1 ? 0 : 10 * page - 10;
  const totalElementos = page === 1 ? 10 : elementos + 10;
  const resp = players.slice(elementos, totalElementos);
  const response = {
    page: page ? page : 1,
    totalPages: totalPages.toFixed(0),
    items: resp.length,
    totalItems: players.length,
    players: resp,
  };
  return response;
};
