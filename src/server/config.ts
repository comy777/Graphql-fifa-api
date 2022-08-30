import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { conectDatabase } from "../database/config";
import typeDefs from "../apollo/typeDefs";
import resolvers from "../apollo/resolvers";
import { validateToken } from "../jwt/jwt";

class Server {
  app: ApolloServer;
  port: number;

  constructor() {
    this.app = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => {
        const token = req.headers["x-api-key"];
        if (token) {
          try {
            const user = validateToken(token);
            return user;
          } catch (error) {
            console.log(error);
          }
        }
      },
      csrfPrevention: true,
      cache: "bounded",
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    });
    this.port = process.env.PORT;
    this.db();
  }

  start() {
    this.app.listen().then(({ url }) => {
      console.log(`Server running ${url}`);
    });
  }

  async db() {
    await conectDatabase();
  }
}

export default Server;
