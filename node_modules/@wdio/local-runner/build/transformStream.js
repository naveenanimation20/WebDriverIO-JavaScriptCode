"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stream = require("stream");

var _constants = require("./constants");

class RunnerTransformStream extends _stream.Transform {
  constructor(cid, emitter) {
    super();
    this.cid = cid;
    this.emitter = emitter;
  }

  _transform(chunk, encoding, callback) {
    const logMsg = chunk.toString();

    if (_constants.DEBUGGER_MESSAGES.some(m => logMsg.startsWith(m))) {
      return callback();
    }

    this.push(`[${this.cid}] ${logMsg}`);
    callback();
  }

  _final(callback) {
    this.unpipe();
    callback();
  }

}

exports.default = RunnerTransformStream;