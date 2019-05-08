"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebaseService = undefined;

var _firebaseFunctions = require("firebase-functions");

var functions = _interopRequireWildcard(_firebaseFunctions);

var _firebase = require("firebase");

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const firebaseService = exports.firebaseService = _firebase2.default.initializeApp(functions.config().firebase);