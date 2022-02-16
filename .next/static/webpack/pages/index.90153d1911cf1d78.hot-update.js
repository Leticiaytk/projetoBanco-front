"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CardProduct.js":
/*!***********************************!*\
  !*** ./components/CardProduct.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CardIcon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_CardContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/CardContext */ \"./lib/CardContext.js\");\n/* harmony import */ var _styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/CardProduct.module.css */ \"./styles/CardProduct.module.css\");\n/* harmony import */ var _styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction CardIcon(param) {\n    var image = param.image, product = param.product, key = param.key;\n    _s();\n    var ref = (0,_lib_CardContext__WEBPACK_IMPORTED_MODULE_2__.useCart)(), cart = ref.cart, setCart = ref.setCart;\n    var handleAddToCart = function(item) {\n        var newCart = _toConsumableArray(cart);\n        newCart.push(item);\n        alert(\"\".concat(item.product_name, \" adicionado ao carrinho.\"));\n        setCart(newCart);\n    };\n    var handleRemoveFromCart = function(item) {\n        var newCart = _toConsumableArray(cart);\n        newCart.pop(item);\n        alert(\"\".concat(item.product_name, \" removido do carrinho.\"));\n        setCart(newCart);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: image,\n                alt: \"Card Product\",\n                width: 65,\n                height: 65\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\CardProduct.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                        children: product.product_name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\CardProduct.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                        children: product.product_price.toFixed(2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\CardProduct.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().minusButton),\n                                onClick: function() {\n                                    handleRemoveFromCart(product), console.log(product);\n                                },\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\CardProduct.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_CardProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().plusButton),\n                                onClick: function() {\n                                    return handleAddToCart(product);\n                                },\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\CardProduct.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\CardProduct.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\CardProduct.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\CardProduct.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n};\n_s(CardIcon, \"BCWH5WUsKNh+PtQ+RIg6Invx6Ag=\", false, function() {\n    return [\n        _lib_CardContext__WEBPACK_IMPORTED_MODULE_2__.useCart\n    ];\n});\n_c = CardIcon;\nvar _c;\n$RefreshReg$(_c, \"CardIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRQcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFYztBQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsUUFBUSxDQUFDRyxRQUFRLENBQUMsS0FBdUIsRUFBRSxDQUFDO1FBQXhCQyxLQUFLLEdBQVAsS0FBdUIsQ0FBckJBLEtBQUssRUFBRUMsT0FBTyxHQUFoQixLQUF1QixDQUFkQSxPQUFPLEVBQUVDLEdBQUcsR0FBckIsS0FBdUIsQ0FBTEEsR0FBRzs7SUFDcEQsR0FBSyxDQUFxQkwsR0FBUyxHQUFUQSx5REFBTyxJQUF6Qk0sSUFBSSxHQUFjTixHQUFTLENBQTNCTSxJQUFJLEVBQUVDLE9BQU8sR0FBS1AsR0FBUyxDQUFyQk8sT0FBTztJQUVyQixHQUFLLENBQUNDLGVBQWUsR0FBRyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1FBQ2pDLEdBQUssQ0FBQ0MsT0FBTyxzQkFBT0osSUFBSTtRQUV4QkksT0FBTyxDQUFDQyxJQUFJLENBQUNGLElBQUk7UUFDakJHLEtBQUssQ0FBRSxHQUFvQixNQUF3QixDQUExQ0gsSUFBSSxDQUFDSSxZQUFZLEVBQUMsQ0FBd0I7UUFFbkROLE9BQU8sQ0FBQ0csT0FBTztJQUNqQixDQUFDO0lBRUQsR0FBSyxDQUFDSSxvQkFBb0IsR0FBRyxRQUFRLENBQVBMLElBQUksRUFBSyxDQUFDO1FBQ3RDLEdBQUssQ0FBQ0MsT0FBTyxzQkFBT0osSUFBSTtRQUV4QkksT0FBTyxDQUFDSyxHQUFHLENBQUNOLElBQUk7UUFDaEJHLEtBQUssQ0FBRSxHQUFvQixNQUFzQixDQUF4Q0gsSUFBSSxDQUFDSSxZQUFZLEVBQUMsQ0FBc0I7UUFFakROLE9BQU8sQ0FBQ0csT0FBTztJQUNqQixDQUFDO0lBRUQsTUFBTSw2RUFDSE0sQ0FBRztRQUFDQyxTQUFTLEVBQUVoQiw0RUFBVTs7d0ZBQ3ZCRixtREFBSztnQkFBQ29CLEdBQUcsRUFBRWhCLEtBQUs7Z0JBQUVpQixHQUFHLEVBQUMsQ0FBYztnQkFBQ0MsS0FBSyxFQUFFLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxFQUFFOzs7Ozs7d0ZBQzFETixDQUFHO2dCQUFDQyxTQUFTLEVBQUVoQiw0RUFBVTs7Z0dBQ3ZCZSxDQUFHO3dCQUFDQyxTQUFTLEVBQUVoQiw0RUFBVTtrQ0FBR0csT0FBTyxDQUFDUyxZQUFZOzs7Ozs7Z0dBQ2hERyxDQUFHO3dCQUFDQyxTQUFTLEVBQUVoQiw2RUFBVztrQ0FBR0csT0FBTyxDQUFDc0IsYUFBYSxDQUFDQyxPQUFPLENBQUMsQ0FBQzs7Ozs7O2dHQUM1RFgsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFaEIsK0VBQWE7O3dHQUMxQmUsQ0FBRztnQ0FDRkMsU0FBUyxFQUFFaEIsbUZBQWlCO2dDQUM1QjZCLE9BQU8sRUFBRSxRQUNyQixHQUQyQixDQUFDO29DQUNkaEIsb0JBQW9CLENBQUNWLE9BQU8sR0FBRzJCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNUIsT0FBTztnQ0FDcEQsQ0FBQzswQ0FDRixDQUVEOzs7Ozs7d0dBQ0NZLENBQUc7Z0NBQ0ZDLFNBQVMsRUFBRWhCLGtGQUFnQjtnQ0FDM0I2QixPQUFPLEVBQUUsUUFBUTtvQ0FBRnRCLE1BQU0sQ0FBTkEsZUFBZSxDQUFDSixPQUFPOzswQ0FDdkMsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQTlDdUJGLFFBQVE7O1FBQ0pGLHFEQUFPOzs7S0FEWEUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmRQcm9kdWN0LmpzPzdhMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiLi4vbGliL0NhcmRDb250ZXh0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9DYXJkUHJvZHVjdC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRJY29uKHsgaW1hZ2UsIHByb2R1Y3QsIGtleSB9KSB7XG4gIGNvbnN0IHsgY2FydCwgc2V0Q2FydCB9ID0gdXNlQ2FydCgpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgbmV3Q2FydCA9IFsuLi5jYXJ0XTtcblxuICAgIG5ld0NhcnQucHVzaChpdGVtKTtcbiAgICBhbGVydChgJHtpdGVtLnByb2R1Y3RfbmFtZX0gYWRpY2lvbmFkbyBhbyBjYXJyaW5oby5gKTtcblxuICAgIHNldENhcnQobmV3Q2FydCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRnJvbUNhcnQgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uY2FydF07XG5cbiAgICBuZXdDYXJ0LnBvcChpdGVtKTtcbiAgICBhbGVydChgJHtpdGVtLnByb2R1Y3RfbmFtZX0gcmVtb3ZpZG8gZG8gY2FycmluaG8uYCk7XG5cbiAgICBzZXRDYXJ0KG5ld0NhcnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmR9PlxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cIkNhcmQgUHJvZHVjdFwiIHdpZHRoPXs2NX0gaGVpZ2h0PXs2NX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXh0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hbWV9Pntwcm9kdWN0LnByb2R1Y3RfbmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByaWNlfT57cHJvZHVjdC5wcm9kdWN0X3ByaWNlLnRvRml4ZWQoMil9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25zfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLm1pbnVzQnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVSZW1vdmVGcm9tQ2FydChwcm9kdWN0KSwgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnBsdXNCdXR0b259XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb0NhcnQocHJvZHVjdCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgK1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlQ2FydCIsInN0eWxlIiwiQ2FyZEljb24iLCJpbWFnZSIsInByb2R1Y3QiLCJrZXkiLCJjYXJ0Iiwic2V0Q2FydCIsImhhbmRsZUFkZFRvQ2FydCIsIml0ZW0iLCJuZXdDYXJ0IiwicHVzaCIsImFsZXJ0IiwicHJvZHVjdF9uYW1lIiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJwb3AiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0IiwibmFtZSIsInByaWNlIiwicHJvZHVjdF9wcmljZSIsInRvRml4ZWQiLCJidXR0b25zIiwibWludXNCdXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsInBsdXNCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CardProduct.js\n");

/***/ })

});