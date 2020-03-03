'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = count;

var _defaultConfig = require('../util/default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasCount(client, selector, count, countStore) {
    var elements = client.$$(selector);

    countStore.count = elements.length;

    return elements.length === count;
}

function waitUntilCount(client, selector, count) {
    var defaultWait = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var reverse = arguments[4];

    var countStore = {};

    if (!reverse) {
        try {
            client.waitUntil(function () {
                return hasCount(client, selector, count, countStore);
            }, defaultWait);
        } catch (error) {
            throw new Error('Element with selector <' + selector + '> does not appear in the DOM ' + count + ' times ' + ('within ' + defaultWait + ' ms, but it shows up ' + countStore.count + ' times instead.'));
        }
    } else {
        client.waitUntil(function () {
            return !hasCount(client, selector, count, countStore);
        }, defaultWait, 'Element with selector <' + selector + '> still appears in the DOM ' + count + ' times after ' + defaultWait + ' ms');
    }
}

function count(client, chai, utils, options) {
    var config = (0, _defaultConfig2.default)(options);
    chai.Assertion.addMethod('count', function (expected) {
        var selector = utils.flag(this, 'object');
        var negate = utils.flag(this, 'negate');
        var immediately = utils.flag(this, 'immediately');

        if (!immediately) {
            waitUntilCount(client, selector, expected, config.defaultWait, negate);
        }

        var countStore = {};

        this.assert(hasCount(client, selector, expected, countStore), 'Expected <' + selector + '> to appear in the DOM ' + expected + ' times, but it shows up ' + countStore.count + ' times instead.', 'Expected <' + selector + '> not to appear in the DOM ' + expected + ' times, but it does.');
    });
}