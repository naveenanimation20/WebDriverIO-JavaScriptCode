'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = text;

var _defaultConfig = require('../util/default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doesOneElementContainText = function doesOneElementContainText(client, selector, expected) {
    var elements = client.$$(selector);
    var texts = [];
    var filteredList = elements.filter(function (element) {
        var text = element.getText();
        texts.push(text);
        var elementHasExpectedText = expected instanceof RegExp ? text.match(expected) : text === expected;

        return elementHasExpectedText;
    });

    return {
        result: filteredList.length > 0,
        texts: texts
    };
};

function text(client, chai, utils, options) {
    var config = (0, _defaultConfig2.default)(options);

    chai.Assertion.addMethod('text', function (expected) {
        var selector = utils.flag(this, 'object');
        var immediately = utils.flag(this, 'immediately');

        if (!immediately) {
            try {
                client.waitUntil(function () {
                    return doesOneElementContainText(client, selector, expected).result;
                }, config.defaultWait);
            } catch (e) {
                // actual assertion is handled below
            }
        }

        var elementContainsText = doesOneElementContainText(client, selector, expected);
        this.assert(elementContainsText.result, 'Expected element <' + selector + '> to contain text "' + expected + '", but only found: ' + elementContainsText.texts, 'Expected element <' + selector + '> not to contain text "' + expected + '", but found: ' + elementContainsText.texts);
    });
}