require("dotenv").config();
import Server from "./server/config";

const server = new Server();

server.start();
