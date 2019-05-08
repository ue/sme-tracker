"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = undefined;

var _firebaseFunctions = require("firebase-functions");

var functions = _interopRequireWildcard(_firebaseFunctions);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _auth = require("./middlewares/auth");

var _userController = require("./controllers/userController");

var _userController2 = _interopRequireDefault(_userController);

var _storeController = require("./controllers/storeController");

var _storeController2 = _interopRequireDefault(_storeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const app = (0, _express2.default)();

app.use((0, _cookieParser2.default)());
app.use((0, _cors2.default)({ origin: true }));
app.use(_auth.authenticate);

app.use('/user', _userController2.default);
app.use('/store', _storeController2.default);

app.get("/hello", (req, res) => {
  res.send(`Hello ${req.user.email}`);
});

const api = exports.api = functions.https.onRequest(app);