import * as functions from "firebase-functions";
import admin from "firebase-admin";

export const adminService = admin.initializeApp(functions.config().firebase);
