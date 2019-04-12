/* eslint-disable promise/no-nesting */
import express from "express";
import { adminService } from "../services/adminService";

const app = express();

const database = adminService.firestore();

app.post("/create-store", (req, res) => {
  const { name, description, employeeCount } = req.body;

  if (!name || !description || !employeeCount) {
    res.status(422).send("Missing Paramerter!");
    return;
  }

  const storeRef = database.collection("stores").doc();

  try {
    storeRef.set({
      name,
      description,
      employeeCount: parseInt(employeeCount),
    });
    res.send(`Hello ${req.user.email}`);
    return;
  } catch (error) {
    res.status(500).send(error);
    return;
  }
});

export default app;
