"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MOCHA_TIMEOUT_MESSAGE_REPLACEMENT = exports.MOCHA_TIMEOUT_MESSAGE = void 0;
const MOCHA_TIMEOUT_MESSAGE = 'Ensure the done() callback is being called in this test.';
exports.MOCHA_TIMEOUT_MESSAGE = MOCHA_TIMEOUT_MESSAGE;
const MOCHA_TIMEOUT_MESSAGE_REPLACEMENT = `
    The execution in the test "%s %s" took too long. Try to reduce the run time or
    increase your timeout for test specs (https://webdriver.io/docs/timeouts.html).`;
exports.MOCHA_TIMEOUT_MESSAGE_REPLACEMENT = MOCHA_TIMEOUT_MESSAGE_REPLACEMENT;