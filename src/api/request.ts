import apiFifa from "./config";
import {
  ItemClub,
  ItemNationGetResponse,
  NationGetResponse,
} from "../interfaces/response";
import { ClubResponse, PlayersReponse } from "../interfaces/response";

export const appGetPlayers = async (page = 1): Promise<PlayersReponse> => {
  const { data } = await apiFifa.get<PlayersReponse>(`players?page=${page}`);
  return data;
};

export const appGetNations = async (
  page = 1
): Promise<ItemNationGetResponse[]> => {
  const { data } = await apiFifa.get<NationGetResponse>(`nations?page=${page}`);
  return data.items;
};

export const appGetRequestClubs = async (page = 1): Promise<ItemClub[]> => {
  const { data } = await apiFifa.get<ClubResponse>(`clubs?page=${page}`);
  return data.items;
};
