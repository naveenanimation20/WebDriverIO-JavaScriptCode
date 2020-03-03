"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configWithDefaults;
function configWithDefaults(config) {
    var defaultConfig = { defaultWait: 0 };
    return Object.assign({}, defaultConfig, config);
}