/* eslint-disable promise/always-return */
/* eslint-disable promise/no-nesting */
import express from "express";
import { adminService } from "../services/adminService";

const app = express();

const database = adminService.firestore();

app.post("/add-employee", (req, res) => {
  const { name, role, storeId, phoneNumber } = req.body;

  if (!name || !role || !storeId || !phoneNumber) {
    res.status(422).send("Missing Paramerter!");
    return;
  }

  const userRef = database.collection("users");
  const storeRef = database.collection("stores").doc(storeId);

  try {
    storeRef
      .get()
      .then(doc => {
        if (!doc.exists) {
          res.status(400).send('Internal Error!');
        } else {
          adminService
            .auth()
            .createUser({
              phoneNumber: phoneNumber,
              displayName: name,
              disabled: false
            })
            .then(userRecord => {
              userRef.doc(userRecord.uid).set({
                name,
                role,
                storeId
              });
              storeRef.set({
                employeeCount: doc.data().employeeCount + 1
              });
              res.status(200);
              return;
            })
            .catch(error => {
              res.status(400).send(error);
            });
        }
      })
      .catch(error => {
        res.status(400).send(error);
      });
  } catch (error) {
    res.status(400).send(error);
    return;
  }
});

export default app;
