import express from "express";
import morgan from "morgan";
import cors from "cors"


import { __dirname } from "./utils.js";

import error_handler from "./middlewares/error_handler.js";
import not_found_handler from "./middlewares/not_found.js";
import MongoConnect from "./config/Mongo.js";
import "./config/config.js";

import IndexRouter from "./routes/index.js";
const router = new IndexRouter()

const server = express();

//middlewares
server.use(cors());
server.use(morgan("dev"));
server.use("/", express.static('public'));
server.use(express.json());
server.use(express.urlencoded({ extended:true }));
server.use("/api", router.getRouter());
server.use(error_handler);
server.use(not_found_handler);

//database
const mongo = new MongoConnect(process.env.LINK_DB);
mongo.connect_mongo();
mongo.single();

export default server;