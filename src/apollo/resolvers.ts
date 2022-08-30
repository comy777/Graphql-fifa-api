import { getQuery, searchPlayer, searchTeam, login } from "../controllers/main";

const resolvers = {
  Query: {
    getQuery,
  },

  Mutation: {
    searchTeam,
    searchPlayer,
    login,
  },
};

export default resolvers;
