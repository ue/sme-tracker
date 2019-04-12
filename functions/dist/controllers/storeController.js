"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _adminService = require("../services/adminService");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable promise/no-nesting */
const app = (0, _express2.default)();

const database = _adminService.adminService.firestore();

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
      employeeCount: parseInt(employeeCount)
    });
    res.send(`Hello ${req.user.email}`);
    return;
  } catch (error) {
    res.status(500).send(error);
    return;
  }
});

exports.default = app;