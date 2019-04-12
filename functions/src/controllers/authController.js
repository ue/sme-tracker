/* eslint-disable promise/no-nesting */
import express from "express";
import firebase from "firebase";
import { firebaseService } from "../services/firebaseService";

const app = express();

// app.get("/login", (req, res) => {
//   return firebaseService
//     .auth()
//     .signInWithEmailAndPassword("bird@test.com", "123456789")
//     .then(result => {
//       return result.getIdToken().then(token => {
//         req.headers.authorization = "Bearer " + token;
//       });
//     })
//     .catch(error => console.log("error :", error));
// });

export default app;
