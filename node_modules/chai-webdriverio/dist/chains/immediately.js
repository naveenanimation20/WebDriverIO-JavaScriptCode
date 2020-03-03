'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = immediately;
function immediately(client, chai, utils) {
    chai.Assertion.addChainableMethod('immediately', function () {
        utils.flag(this, 'immediately', true);
    });
}