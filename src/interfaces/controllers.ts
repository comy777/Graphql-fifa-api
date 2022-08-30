import { Player } from "./response";

export interface GetFifaApiProps {
  input: number;
}

export interface PropsTeamSearch {
  input: {
    name: string;
    page: number;
  };
}

export interface PropsPlayersSearch {
  input: {
    search: string;
    page: 1;
    order: string;
  };
}

export interface PropsValidateTeam {
  players: Player[] | undefined;
  query: string;
}

export interface PropsPages {
  players: Player[] | undefined;
  query: string;
  page: number;
}

export interface PropsPlayers {
  players: Player[] | undefined;
  page: number;
}

export interface PropsLogin {
  input: {
    email: string;
    password: string;
  };
}

export interface User {
  email: string;
}
