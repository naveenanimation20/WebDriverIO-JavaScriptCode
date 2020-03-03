'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = there;

var _elementExists = require('../util/element-exists');

var _elementExists2 = _interopRequireDefault(_elementExists);

var _defaultConfig = require('../util/default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function there(client, chai, utils, options) {
    var config = (0, _defaultConfig2.default)(options);

    chai.Assertion.addMethod('there', function () {
        var selector = utils.flag(this, 'object');
        var negate = utils.flag(this, 'negate');
        var immediately = utils.flag(this, 'immediately');

        var isThere = !negate;
        var defaultWait = immediately ? 0 : config.defaultWait;
        try {
            (0, _elementExists2.default)(client, selector, defaultWait, negate);
        } catch (error) {
            isThere = negate;
        }

        this.assert(isThere, 'Expected <' + selector + '> to be there, but it is not there.', 'Expected <' + selector + '> not to be there, and yet, there it is.');
    });
}