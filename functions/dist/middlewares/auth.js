'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = undefined;

var _firebaseAdmin = require('firebase-admin');

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

var _adminService = require('../services/adminService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const firebase = require('firebase');

//authentication middleware
const authenticate = exports.authenticate = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    console.log('Check if request is authorized with Firebase ID token');

    if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) && !(req.cookies && req.cookies.__session)) {
      console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.', 'Make sure you authorize your request by providing the following HTTP header:', 'Authorization: Bearer <Firebase ID Token>', 'or by passing a "__session" cookie.');
      res.status(403).send('Unauthorized');
      return;
    }

    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      console.log('Found "Authorization" header');
      // Read the ID Token from the Authorization header.
      idToken = req.headers.authorization.split('Bearer ')[1];
    } else if (req.cookies) {
      console.log('Found "__session" cookie');
      // Read the ID Token from cookie.
      idToken = req.cookies.__session;
    } else {
      // No cookie
      res.status(403).send('Unauthorized');
      return;
    }

    try {
      const decodedIdToken = yield _firebaseAdmin2.default.auth().verifyIdToken(idToken);
      console.log('ID Token correctly decoded', decodedIdToken);
      req.user = decodedIdToken;
      next();
      return;
    } catch (error) {
      console.error('Error while verifying Firebase ID token:', error);
      res.status(403).send('Unauthorized');
      return;
    }
  });

  return function authenticate(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

// // test icin eklendi, KALDIRILACAK!.
// const login =  (req, res, next) => {
//     firebase.auth().signInWithEmailAndPassword('bird@test.com', '123456789').then(function(result) {
//         result.getIdToken().then(function(token) {
//             req.headers.authorization = 'Bearer ' + token;
//             next();
//         });
//     });
// };