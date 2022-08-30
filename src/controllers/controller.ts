import { appGetNations, appGetRequestClubs } from "../api/request";
import Club from "../models/Club";
import Nation from "../models/Nation";

export const getNationsSave = async (page: number) => {
  const nations = await appGetNations(page);
  await nations.forEach(async (item) => {
    const { id: idNation, name } = item;
    const data = { idNation, name };
    const nationSave = new Nation(data);
    await nationSave.save();
  });
  return nations;
};

export const getClubsSave = async (page: number) => {
  const clubs = await appGetRequestClubs(page);
  await clubs.forEach(async (item) => {
    const { id: idClub, name } = item;
    const data = { idClub, name };
    const clubSave = new Club(data);
    await clubSave.save();
  });
  return clubs;
};

export const getNation = async (idNation: number) => {
  const nation = await Nation.findOne({ idNation });
  if (!nation) return { idNation: 0, name: "" };
  return nation;
};

export const getClub = async (idClub: number) => {
  const club = await Club.findOne({ idClub });
  if (!club) return { idClub: 0, name: "" };
  return club;
};
