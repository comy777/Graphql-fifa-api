"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
  input TeamInput {
    name: String
    page: Int
  }

  input PlayerInput {
    search: String
    page: Int
    order: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Response {
    page: Int
    totalPages: Int
    items: Int
    totalItems: Int
    players: [Player]
  }

  type Player {
    name: String
    nation: String
    club: String
    position: String
  }

  type Token {
    token: String
  }

  type Query {
    getQuery: String
  }

  type Mutation {
    searchTeam(input: TeamInput): Response
    searchPlayer(input: PlayerInput): Response
    login(input: LoginInput): Token
  }
`;
exports.default = typeDefs;
