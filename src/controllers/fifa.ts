import { appGetPlayers } from "../api/request";
import { getNationsSave, getClubsSave, getNation } from "./controller";
import { Player } from "../interfaces/response";
import { getClub } from "./controller";
import { GetFifaApiProps } from "../interfaces/controllers";

export const getFifaPlayersApi = async (page: number): Promise<Player[]> => {
  const players = await appGetPlayers(page);
  const playersArray: Player[] = [];
  return new Promise((resolve) => {
    players.items.forEach(async (item, i) => {
      const { name, nation, position, club } = item;
      const respNation = await getNation(nation);
      const { name: nationName } = respNation;
      const clubName = await getClub(club);
      const { name: nameClub } = clubName;
      const data = {
        name,
        nation: nationName ? nationName : "",
        position,
        club: nameClub ? nameClub : "",
      };
      playersArray[i] = data;
      if (i === players.items.length - 1) resolve(playersArray);
    });
  });
};

export const getNations = async (_: any, { input }: GetFifaApiProps) => {
  const nations = await getNationsSave(input);
  return nations;
};

export const getClubs = async (_: any, { input }: GetFifaApiProps) => {
  const clubs = await getClubsSave(input);
  return clubs;
};
