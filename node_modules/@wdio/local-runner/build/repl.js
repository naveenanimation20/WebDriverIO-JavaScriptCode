"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _repl = _interopRequireDefault(require("@wdio/repl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WDIORunnerRepl extends _repl.default {
  constructor(childProcess, options) {
    super(options);
    this.childProcess = childProcess;
  }

  _getError(params) {
    if (!params.error) {
      return null;
    }

    const err = new Error(params.message);
    err.stack = params.stack;
    return err;
  }

  eval(cmd, context, filename, callback) {
    if (this.commandIsRunning) {
      return;
    }

    this.commandIsRunning = true;
    this.childProcess.send({
      origin: 'debugger',
      name: 'eval',
      content: {
        cmd
      }
    });
    this.callback = callback;
  }

  onResult(params) {
    const error = this._getError(params);

    this.callback(error, params.result);
    this.commandIsRunning = false;
  }

  start(...args) {
    this.childProcess.send({
      origin: 'debugger',
      name: 'start'
    });
    return super.start(...args);
  }

}

exports.default = WDIORunnerRepl;