(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var objectToString = function objectToString(obj) {
    var arr = function arr(a) {
      var str = '';
      a.forEach(function (i) {
        str += '"' + i + '",\n';
      });
      return str;
    };

    var ooo = function ooo(obj) {
      var str = '';
      Object.keys(obj).forEach(function (i) {
        switch (_typeof(obj[i])) {
          case 'string':
            str += i + ': "' + obj[i] + '",\n';
            break;
          case 'object':
            if (Array.isArray(obj[i])) {
              str += i + ': [\n' + arr(obj[i]) + '],\n';
            } else {
              str += i + ': {\n' + ooo(obj[i]) + '},\n';
            }
            break;
          default:
            str += i + ': ' + obj[i] + ',\n';

        }
      });
      return str;
    };

    return 'const result = {\n' + ooo(obj) + '\n}';
  };

  exports.default = objectToString;
});