(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.snap = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }

        return n[i].exports;
      }

      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);

      return o;
    }

    return r;
  }()({
    1: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.onRpcRequest = exports.getMessage = void 0;

      const getMessage = originString => {
        return `Hello ya cunt, ${originString}!`;
      };

      exports.getMessage = getMessage;

      const onRpcRequest = ({
        origin,
        request
      }) => {
        console.log({ origin, request })
        switch (request.method) {
          case 'hello':
            // setTimeout(console.log('time out'), 61000);
            console.log('Hello from a Snap');
            return wallet.request({
              method: 'snap_confirm',
              params: [{
                prompt: getMessage(origin),
                description: 'This custom confirmation is just for display purposes.',
                textAreaContent: 'You sure I can'
              }]
            });

          default:
            throw new Error('Method not found.');
        }
      };

      exports.onRpcRequest = onRpcRequest;
    }, {}]
  }, {}, [1])(1);
});