"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`
  type Player {
    name: String
    nation: String
    club: String
    position: String
  }

  type Nation {
    id: Int
    name: String
  }

  type Club {
    id: Int
    name: String
  }

  input TeamInput {
    name: String,
    page: Int
  }

  type Query {
    getFifaPlayersApi: [Player]
  }

  type Mutation {
    getNations(input: Int): [Nation]
    getClubs(input: Int): [Club]
    getTeam(input: TeamInput): String
  }
`);
exports.default = schema;
