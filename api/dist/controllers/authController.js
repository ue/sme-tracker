"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _firebase = require("firebase");

var _firebase2 = _interopRequireDefault(_firebase);

var _firebaseService = require("../services/firebaseService");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

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

/* eslint-disable promise/no-nesting */
exports.default = app;