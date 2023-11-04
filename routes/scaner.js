"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _scaner = require("../controllers/scaner");
var router = (0, _express.Router)();
router.put("/scaner/:id", _scaner.updatescanner);
var _default = exports["default"] = router;