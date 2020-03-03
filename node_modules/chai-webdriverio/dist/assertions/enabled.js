'use strict';

Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.default = enabled;

var _defaultConfig = require('../util/default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isOneElementEnabled = function isOneElementEnabled(client, selector) {
     var elements = client.$$(selector);
     var filteredList = elements.filter(function (element) {
          return element.isEnabled();
     });

     return filteredList.length > 0;
};

function enabled(client, chai, utils, options) {
     var config = (0, _defaultConfig2.default)(options);

     chai.Assertion.addMethod('enabled', function () {
          var negate = utils.flag(this, 'negate');
          var selector = utils.flag(this, 'object');
          var immediately = utils.flag(this, 'immediately');

          var errorMsg = 'Expected <' + selector + '> to be enabled but it is not';
          var errorMsgNegate = 'Expected <' + selector + '> to not be enabled but it is';

          if (!immediately) {
               client.waitUntil(function () {
                    return isOneElementEnabled(client, selector) == !negate;
               }, config.defaultWait, negate ? errorMsgNegate : errorMsg);
          }

          this.assert(isOneElementEnabled(client, selector), errorMsg, errorMsgNegate);
     });
}