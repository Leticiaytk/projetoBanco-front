"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addproduct",{

/***/ "./components/HeaderMarket.js":
/*!************************************!*\
  !*** ./components/HeaderMarket.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeaderMarket; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ \"./api/api.js\");\n/* harmony import */ var _styles_HeaderClient_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/HeaderClient.module.css */ \"./styles/HeaderClient.module.css\");\n/* harmony import */ var _styles_HeaderClient_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_HeaderClient_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction HeaderMarket(param) {\n    var logo = param.logo, adress = param.adress;\n    var searchProduct = function searchProduct(value) {\n        var query = \"/product/?product_name=\";\n        query += \"\".concat(value);\n        try {\n            var data = _api_api__WEBPACK_IMPORTED_MODULE_4__.api.get(query).data;\n            console.log(\"pesquisa por nome do produto\");\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), info = ref[0], setInfo = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_HeaderClient_module_css__WEBPACK_IMPORTED_MODULE_6___default().bar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_HeaderClient_module_css__WEBPACK_IMPORTED_MODULE_6___default().top),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_HeaderClient_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                    onClick: function() {\n                        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: logo,\n                        alt: \"Market logo\",\n                        width: 65,\n                        height: 65\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\HeaderMarket.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\HeaderMarket.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_HeaderClient_module_css__WEBPACK_IMPORTED_MODULE_6___default().adress),\n                    children: adress\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\HeaderMarket.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_HeaderClient_module_css__WEBPACK_IMPORTED_MODULE_6___default().textInfo),\n                    children: \"Aberto 7h-20h\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\HeaderMarket.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\HeaderMarket.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\components\\\\HeaderMarket.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n};\n_s(HeaderMarket, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = HeaderMarket;\nvar _c;\n$RefreshReg$(_c, \"HeaderMarket\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlck1hcmtldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRTtBQUNBO0FBQ0E7QUFDcUI7QUFDeEI7QUFDUzs7QUFFdkIsUUFBUSxDQUFDTyxZQUFZLENBQUMsS0FBZ0IsRUFBRSxDQUFDO1FBQWpCQyxJQUFJLEdBQU4sS0FBZ0IsQ0FBZEEsSUFBSSxFQUFFQyxNQUFNLEdBQWQsS0FBZ0IsQ0FBUkEsTUFBTTtRQUd4Q0MsYUFBYSxHQUF0QixRQUFRLENBQUNBLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDN0IsR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBeUI7UUFDckNBLEtBQUssSUFBSyxHQUFRLE9BQU5ELEtBQUs7UUFFakIsR0FBRyxDQUFDLENBQUM7WUFDSCxHQUFLLENBQUdFLElBQUksR0FBS1YsNkNBQU8sQ0FBQ1MsS0FBSyxFQUF0QkMsSUFBSTtZQUNaRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE4QjtRQUM1QyxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztZQUNmRixPQUFPLENBQUNFLEtBQUssQ0FBQ0EsS0FBSztRQUNyQixDQUFDO0lBQ0gsQ0FBQzs7SUFaRCxHQUFLLENBQW1CZixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1QmdCLElBQUksR0FBYWhCLEdBQVksS0FBdkJpQixPQUFPLEdBQUlqQixHQUFZO0lBY3BDLE1BQU0sNkVBQ0hrQixDQUFHO1FBQUNDLFNBQVMsRUFBRWpCLDRFQUFTOzhGQUN0QmdCLENBQUc7WUFBQ0MsU0FBUyxFQUFFakIsNEVBQVM7OzRGQUN0QmdCLENBQUc7b0JBQ0ZDLFNBQVMsRUFBRWpCLDZFQUFVO29CQUNyQm9CLE9BQU8sRUFBRSxRQUNuQixHQUR5QixDQUFDO3dCQUNkdkIsdURBQVcsQ0FBQyxDQUFHO29CQUNqQixDQUFDOzBHQUVBRCxtREFBSzt3QkFBQzBCLEdBQUcsRUFBRWxCLElBQUk7d0JBQUVtQixHQUFHLEVBQUMsQ0FBYTt3QkFBQ0MsS0FBSyxFQUFFLEVBQUU7d0JBQUVDLE1BQU0sRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs0RkFFMURULENBQUc7b0JBQUNDLFNBQVMsRUFBRWpCLCtFQUFZOzhCQUFHSyxNQUFNOzs7Ozs7NEZBQ3BDVyxDQUFHO29CQUFDQyxTQUFTLEVBQUVqQixpRkFBYzs4QkFBRSxDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyRCxDQUFDO0dBL0J1QkcsWUFBWTtLQUFaQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyTWFya2V0LmpzP2UyMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9hcGkvYXBpXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9IZWFkZXJDbGllbnQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlck1hcmtldCh7IGxvZ28sIGFkcmVzcyB9KSB7XG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIHNlYXJjaFByb2R1Y3QodmFsdWUpIHtcbiAgICBsZXQgcXVlcnkgPSBcIi9wcm9kdWN0Lz9wcm9kdWN0X25hbWU9XCI7XG4gICAgcXVlcnkgKz0gYCR7dmFsdWV9YDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGFwaS5nZXQocXVlcnkpO1xuICAgICAgY29uc29sZS5sb2coXCJwZXNxdWlzYSBwb3Igbm9tZSBkbyBwcm9kdXRvXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5iYXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvcH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmxvZ299XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJNYXJrZXQgbG9nb1wiIHdpZHRoPXs2NX0gaGVpZ2h0PXs2NX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZHJlc3N9PnthZHJlc3N9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXh0SW5mb30+QWJlcnRvIDdoLTIwaDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSb3V0ZXIiLCJ1c2VTdGF0ZSIsImFwaSIsInN0eWxlIiwiQnV0dG9uIiwiRm9ybSIsIkhlYWRlck1hcmtldCIsImxvZ28iLCJhZHJlc3MiLCJzZWFyY2hQcm9kdWN0IiwidmFsdWUiLCJxdWVyeSIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJpbmZvIiwic2V0SW5mbyIsImRpdiIsImNsYXNzTmFtZSIsImJhciIsInRvcCIsIm9uQ2xpY2siLCJwdXNoIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0SW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HeaderMarket.js\n");

/***/ })

});