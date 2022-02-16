"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/CardContext.js":
/*!****************************!*\
  !*** ./lib/CardContext.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; },\n/* harmony export */   \"CartProvider\": function() { return /* binding */ CartProvider; },\n/* harmony export */   \"useCart\": function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartProvider(param) {\n    var children = param.children;\n    var saveProduct = function saveProduct(product) {\n        var newCart = _toConsumableArray(cart);\n        newCart.push(product);\n        alert(\"\".concat(product.product_name, \" adicionado ao carrinho.\"));\n        setCart(newCart);\n        console.log(cart);\n    };\n    var removeProduct = function removeProduct(product) {\n        var newCart = _toConsumableArray(cart);\n        var index = newCart.indexOf(product);\n        console.log(newCart.indexOf(product));\n        newCart.splice(index, 1);\n        alert(\"\".concat(product.product_name, \" removido do carrinho.\"));\n        setCart(newCart);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cart = ref[0], setCart = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            saveProduct: saveProduct,\n            removeProduct: removeProduct,\n            cart: cart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\lib\\\\CardContext.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this));\n}\n_s(CartProvider, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = CartProvider;\nfunction useCart() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n}\n_s1(useCart, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"CartProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvQ2FyZENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0QsR0FBSyxDQUFDSSxXQUFXLGlCQUFHSixvREFBYSxDQUFDLENBQUMsQ0FBQztBQUVwQyxTQUFTSyxZQUFZLENBQUMsS0FBWSxFQUFFLENBQUM7UUFBYkMsUUFBUSxHQUFWLEtBQVksQ0FBVkEsUUFBUTtRQUc1QkMsV0FBVyxHQUFwQixRQUFRLENBQUNBLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7UUFDN0IsR0FBSyxDQUFDQyxPQUFPLHNCQUFPQyxJQUFJO1FBQ3hCRCxPQUFPLENBQUNFLElBQUksQ0FBQ0gsT0FBTztRQUNwQkksS0FBSyxDQUFFLEdBQXVCLE1BQXdCLENBQTdDSixPQUFPLENBQUNLLFlBQVksRUFBQyxDQUF3QjtRQUV0REMsT0FBTyxDQUFDTCxPQUFPO1FBQ2ZNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJO0lBQ2xCLENBQUM7UUFFUU8sYUFBYSxHQUF0QixRQUFRLENBQUNBLGFBQWEsQ0FBQ1QsT0FBTyxFQUFFLENBQUM7UUFDL0IsR0FBSyxDQUFDQyxPQUFPLHNCQUFPQyxJQUFJO1FBRXhCLEdBQUssQ0FBQ1EsS0FBSyxHQUFHVCxPQUFPLENBQUNVLE9BQU8sQ0FBQ1gsT0FBTztRQUNyQ08sT0FBTyxDQUFDQyxHQUFHLENBQUNQLE9BQU8sQ0FBQ1UsT0FBTyxDQUFDWCxPQUFPO1FBQ25DQyxPQUFPLENBQUNXLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFLENBQUM7UUFFdkJOLEtBQUssQ0FBRSxHQUF1QixNQUFzQixDQUEzQ0osT0FBTyxDQUFDSyxZQUFZLEVBQUMsQ0FBc0I7UUFFcERDLE9BQU8sQ0FBQ0wsT0FBTztJQUNqQixDQUFDOztJQXJCRCxHQUFLLENBQW1CUCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTVCUSxJQUFJLEdBQWFSLEdBQVksS0FBdkJZLE9BQU8sR0FBSVosR0FBWTtJQXNCcEMsTUFBTSw2RUFDSEUsV0FBVyxDQUFDaUIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDZixXQUFXLEVBQVhBLFdBQVc7WUFBRVUsYUFBYSxFQUFiQSxhQUFhO1lBQUVQLElBQUksRUFBSkEsSUFBSTtRQUFDLENBQUM7a0JBQzlESixRQUFROzs7Ozs7QUFHZixDQUFDO0dBNUJlRCxZQUFZO0tBQVpBLFlBQVk7QUE4QnJCLFNBQVNrQixPQUFPLEdBQUcsQ0FBQzs7SUFDekIsTUFBTSxDQUFDdEIsaURBQVUsQ0FBQ0csV0FBVztBQUMvQixDQUFDO0lBRmVtQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9DYXJkQ29udGV4dC5qcz8yYTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBzYXZlUHJvZHVjdChwcm9kdWN0KSB7XG4gICAgY29uc3QgbmV3Q2FydCA9IFsuLi5jYXJ0XTtcbiAgICBuZXdDYXJ0LnB1c2gocHJvZHVjdCk7XG4gICAgYWxlcnQoYCR7cHJvZHVjdC5wcm9kdWN0X25hbWV9IGFkaWNpb25hZG8gYW8gY2FycmluaG8uYCk7XG5cbiAgICBzZXRDYXJ0KG5ld0NhcnQpO1xuICAgIGNvbnNvbGUubG9nKGNhcnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChwcm9kdWN0KSB7XG4gICAgY29uc3QgbmV3Q2FydCA9IFsuLi5jYXJ0XTtcblxuICAgIGNvbnN0IGluZGV4ID0gbmV3Q2FydC5pbmRleE9mKHByb2R1Y3QpO1xuICAgIGNvbnNvbGUubG9nKG5ld0NhcnQuaW5kZXhPZihwcm9kdWN0KSk7XG4gICAgbmV3Q2FydC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgYWxlcnQoYCR7cHJvZHVjdC5wcm9kdWN0X25hbWV9IHJlbW92aWRvIGRvIGNhcnJpbmhvLmApO1xuXG4gICAgc2V0Q2FydChuZXdDYXJ0KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzYXZlUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCwgY2FydCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYXJ0Q29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwic2F2ZVByb2R1Y3QiLCJwcm9kdWN0IiwibmV3Q2FydCIsImNhcnQiLCJwdXNoIiwiYWxlcnQiLCJwcm9kdWN0X25hbWUiLCJzZXRDYXJ0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZVByb2R1Y3QiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/CardContext.js\n");

/***/ })

});