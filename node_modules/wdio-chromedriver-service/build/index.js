"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.launcher = exports.default = void 0;

var _launcher = _interopRequireDefault(require("./launcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChromeService {}

exports.default = ChromeService;
const launcher = _launcher.default;
exports.launcher = launcher;