"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertElementExists;
function assertElementExists(client, selector) {
  var defaultWait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var reverse = arguments[3];

  try {
    client.$(selector).waitForExist(defaultWait, reverse);
  } catch (error) {
    if (reverse) {
      throw new Error("Element with selector <" + selector + "> still exists after " + defaultWait + "ms (while waiting for it not to).");
    } else {
      throw new Error("Could not find element with selector <" + selector + "> within " + defaultWait + "ms");
    }
  }
}