"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _adminService = require("../services/adminService");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable promise/always-return */
/* eslint-disable promise/no-nesting */
const app = (0, _express2.default)();

const database = _adminService.adminService.firestore();

app.post("/add-employee", (req, res) => {
  const { name, role, storeId, phoneNumber } = req.body;

  if (!name || !role || !storeId || !phoneNumber) {
    res.status(422).send("Missing Paramerter!");
    return;
  }

  const userRef = database.collection("users");
  const storeRef = database.collection("stores").doc(storeId);

  try {
    storeRef.get().then(doc => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {

        _adminService.adminService.auth().createUser({
          phoneNumber: phoneNumber,
          displayName: name,
          disabled: false
        }).then(userRecord => {
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
        }).catch(error => {
          console.log("Error creating new user:", error);
          res.status(400).send(error);
        });
      }
    }).catch(err => {
      console.log("Error getting document", err);
    });
  } catch (error) {
    res.status(500).send(error);
    return;
  }
});

exports.default = app;