'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = displayed;

var _defaultConfig = require('../util/default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isOneElementDisplayed = function isOneElementDisplayed(client, selector) {
    var elements = client.$$(selector);
    var filteredList = elements.filter(function (element) {
        return element.isDisplayed();
    });

    return filteredList.length > 0;
};

function displayed(client, chai, utils, options) {
    var config = (0, _defaultConfig2.default)(options);

    chai.Assertion.addMethod('displayed', function () {
        var negate = utils.flag(this, 'negate');
        var selector = utils.flag(this, 'object');
        var immediately = utils.flag(this, 'immediately');

        var errorMsg = 'Expected <' + selector + '> to be displayed but it is not';
        var errorMsgNegate = 'Expected <' + selector + '> to not be displayed but it is';

        if (!immediately) {
            client.waitUntil(function () {
                return isOneElementDisplayed(client, selector) == !negate;
            }, config.defaultWait, negate ? errorMsgNegate : errorMsg);
        }

        this.assert(isOneElementDisplayed(client, selector), errorMsg, errorMsgNegate);
    });
}