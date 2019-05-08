import * as functions from "firebase-functions";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { authenticate } from "./middlewares/auth";

import userController from "./controllers/userController";
import storeController from "./controllers/storeController";

const app = express();

app.use(cookieParser());
app.use(cors({ origin: true }));
app.use(authenticate);

app.use('/user', userController)
app.use('/store', storeController)

app.get("/hello", (req, res) => {
  res.send(`Hello ${req.user.email}`);
});

export const api = functions.https.onRequest(app);
