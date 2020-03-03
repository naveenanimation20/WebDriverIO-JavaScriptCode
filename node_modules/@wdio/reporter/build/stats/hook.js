"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runnable = _interopRequireDefault(require("./runnable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HookStats extends _runnable.default {
  constructor(runner) {
    super('hook');
    this.uid = _runnable.default.getIdentifier(runner);
    this.cid = runner.cid;
    this.title = runner.title;
    this.parent = runner.parent;
  }

  complete(errors) {
    this.errors = errors;

    if (errors && errors.length) {
      this.error = errors[0];
      this.state = 'failed';
    }

    super.complete();
  }

}

exports.default = HookStats;