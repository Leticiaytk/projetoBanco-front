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

/***/ "./lib/CardContext.js":
/*!****************************!*\
  !*** ./lib/CardContext.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; },\n/* harmony export */   \"CartProvider\": function() { return /* binding */ CartProvider; },\n/* harmony export */   \"saveProduct\": function() { return /* binding */ saveProduct; },\n/* harmony export */   \"useCart\": function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartProvider(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cart = ref[0], setCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), data = ref1[0], setData = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart: cart,\n            data: data\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\lib\\\\CardContext.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n_s(CartProvider, \"BwR7ZrOrbuosEP+yZrvHQ76gYBw=\");\n_c = CartProvider;\nfunction saveProduct(product) {\n    setData(product);\n}\nfunction useCart() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n}\n_s1(useCart, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"CartProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvQ2FyZENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRTs7QUFFL0QsR0FBSyxDQUFDSSxXQUFXLGlCQUFHSixvREFBYSxDQUFDLENBQUMsQ0FBQztBQUVwQyxTQUFTSyxZQUFZLENBQUMsS0FBWSxFQUFFLENBQUM7UUFBYkMsUUFBUSxHQUFWLEtBQVksQ0FBVkEsUUFBUTs7SUFDckMsR0FBSyxDQUFtQkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE1QkssSUFBSSxHQUFhTCxHQUFZLEtBQXZCTSxPQUFPLEdBQUlOLEdBQVk7SUFDcEMsR0FBSyxDQUFtQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE1Qk8sSUFBSSxHQUFhUCxJQUFZLEtBQXZCUSxPQUFPLEdBQUlSLElBQVk7SUFFcEMsTUFBTSw2RUFDSEUsV0FBVyxDQUFDTyxRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNMLElBQUksRUFBSkEsSUFBSTtZQUFFRSxJQUFJLEVBQUpBLElBQUk7UUFBQyxDQUFDO2tCQUN4Q0gsUUFBUTs7Ozs7O0FBR2YsQ0FBQztHQVRlRCxZQUFZO0tBQVpBLFlBQVk7QUFXckIsU0FBU1EsV0FBVyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUNwQ0osT0FBTyxDQUFDSSxPQUFPO0FBQ2pCLENBQUM7QUFFTSxTQUFTQyxPQUFPLEdBQUcsQ0FBQzs7SUFDekIsTUFBTSxDQUFDZCxpREFBVSxDQUFDRyxXQUFXO0FBQy9CLENBQUM7SUFGZVcsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvQ2FyZENvbnRleHQuanM/MmExOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXJ0LCBkYXRhIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvZHVjdChwcm9kdWN0KSB7XG4gIHNldERhdGEocHJvZHVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcnRDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0Iiwic2V0Q2FydCIsImRhdGEiLCJzZXREYXRhIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInNhdmVQcm9kdWN0IiwicHJvZHVjdCIsInVzZUNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/CardContext.js\n");

/***/ })

});