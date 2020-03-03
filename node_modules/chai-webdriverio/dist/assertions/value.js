'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = value;

var _defaultConfig = require('../util/default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doesOneElementHaveValue = function doesOneElementHaveValue(client, selector, expected) {
    var elements = client.$$(selector);
    var values = [];
    var filteredList = elements.filter(function (element) {
        var value = element.getValue();
        values.push(value);
        var elementHasExpectedValue = expected instanceof RegExp ? value.match(expected) : value === expected;

        return elementHasExpectedValue;
    });

    return {
        result: filteredList.length > 0,
        values: values
    };
};

function value(client, chai, utils, options) {
    var config = (0, _defaultConfig2.default)(options);
    chai.Assertion.addMethod('value', function (expected) {
        var selector = utils.flag(this, 'object');
        var immediately = utils.flag(this, 'immediately');

        if (!immediately) {
            try {
                client.waitUntil(function () {
                    return doesOneElementHaveValue(client, selector, expected).result;
                }, config.defaultWait);
            } catch (e) {
                // actual assertion is handled below
            }
        }

        var elementContainsValue = doesOneElementHaveValue(client, selector, expected);
        this.assert(elementContainsValue.result, 'Expected an element matching <' + selector + '> to contain value "' + expected + '", but only found these values: ' + elementContainsValue.values, 'Expected an element matching <' + selector + '> not to contain value "' + expected + '", but found these values: ' + elementContainsValue.values);
    });
}