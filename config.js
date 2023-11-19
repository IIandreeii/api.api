"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
console.log(process.env.NICKNAME);
var config = exports.config = {
  host: 'monorail.proxy.rlwy.net', 
  user: 'root',
  password: 'AE-a-eh3de264a2D3Ed62eGcc-ECHC-2',
  database: 'railway',
  port: 27687
};
