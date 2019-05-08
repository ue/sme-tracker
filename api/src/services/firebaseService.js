import * as functions from "firebase-functions";
import firebase from "firebase";

export const firebaseService = firebase.initializeApp(
  functions.config().firebase
);
