"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Let_cia_Desktop_UNESP_8_semestre_Banco_de_Dados_II_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Let_cia_Desktop_UNESP_8_semestre_Banco_de_Dados_II_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Let_cia_Desktop_UNESP_8_semestre_Banco_de_Dados_II_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Index.module.css */ \"./styles/Index.module.css\");\n/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api */ \"./api/api.js\");\n/* harmony import */ var _lib_CardContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/CardContext */ \"./lib/CardContext.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.js\");\n/* harmony import */ var _components_HeaderClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HeaderClient */ \"./components/HeaderClient.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Cart() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), adress = ref[0], setAdress = ref[1];\n    var cart = (0,_lib_CardContext__WEBPACK_IMPORTED_MODULE_4__.useCart)().cart;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getInfo();\n    }, []);\n    var getInfo = function() {\n        var _ref = _asyncToGenerator(C_Users_Let_cia_Desktop_UNESP_8_semestre_Banco_de_Dados_II_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var data;\n            return C_Users_Let_cia_Desktop_UNESP_8_semestre_Banco_de_Dados_II_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _api_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"/market\");\n                    case 3:\n                        data = _ctx.sent.data;\n                        setAdress(data[0].market_adress);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function getInfo(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var Finish = function(data) {\n        // não funfa\n        try {\n            var teste = _api_api__WEBPACK_IMPORTED_MODULE_3__.api.post(\"/order\", data).teste;\n            alert(\"Compra finalizada\");\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_HeaderClient__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                logo: \"/logo.png\",\n                adress: adress\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\pages\\\\cart.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default().products)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\pages\\\\cart.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\pages\\\\cart.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    text: \"Finalizar a compra\",\n                    onClick: function() {\n                        Finish();\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\pages\\\\cart.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\pages\\\\cart.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\pages\\\\cart.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n}\n_s(Cart, \"PPK3EfVhEF3W0CqmlYtk77/QvmU=\", false, function() {\n    return [\n        _lib_CardContext__WEBPACK_IMPORTED_MODULE_4__.useCart\n    ];\n});\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFFSjtBQUVkO0FBQ1k7QUFFSDtBQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTVDUSxJQUFJLEdBQUcsQ0FBQzs7SUFDZixHQUFLLENBQXVCTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFoQ08sTUFBTSxHQUFlUCxHQUFZLEtBQXpCUSxTQUFTLEdBQUlSLEdBQVk7SUFFeEMsR0FBSyxDQUFHUyxJQUFJLEdBQUtOLHlEQUFPLEdBQWhCTSxJQUFJO0lBRVpWLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZXLE9BQU87SUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFDQSxPQUFPO2lOQUFHLFFBQVEsU0FBREMsS0FBSyxFQUFLLENBQUM7Z0JBRXRCQyxJQUFJOzs7Ozs7K0JBQVdWLDZDQUFPLENBQUMsQ0FBUzs7d0JBQWhDVSxJQUFJLGFBQUpBLElBQUk7d0JBQ1pKLFNBQVMsQ0FBQ0ksSUFBSSxDQUFDLENBQUMsRUFBRUUsYUFBYTs7Ozs7O3dCQUUvQkMsT0FBTyxDQUFDQyxLQUFLOzs7Ozs7Ozs7OztRQUVqQixDQUFDO3dCQVBLTixPQUFPLENBQVVDLEtBQUs7Ozs7SUFTNUIsR0FBSyxDQUFDTSxNQUFNLEdBQUcsUUFBUSxDQUFQTCxJQUFJLEVBQUssQ0FBQztRQUN4QixFQUFZO1FBQ1osR0FBRyxDQUFDLENBQUM7WUFDSCxHQUFLLENBQUdNLEtBQUssR0FBS2hCLDhDQUFRLENBQUMsQ0FBUSxTQUFFVSxJQUFJLEVBQWpDTSxLQUFLO1lBQ2JFLEtBQUssQ0FBRSxDQUFpQjtRQUMxQixDQUFDLENBQUMsS0FBSyxFQUFFSixLQUFLLEVBQUUsQ0FBQztZQUNmRCxPQUFPLENBQUNDLEtBQUssQ0FBQ0EsS0FBSztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hLLENBQUc7UUFBQ0MsU0FBUyxFQUFFckIsMkVBQWU7O3dGQUM1QkksZ0VBQVk7Z0JBQUNtQixJQUFJLEVBQUMsQ0FBVztnQkFBQ2pCLE1BQU0sRUFBRUEsTUFBTTs7Ozs7O3dGQUU1Q2tCLENBQUk7Z0JBQUNILFNBQVMsRUFBRXJCLHNFQUFVO3NHQUN4Qm9CLENBQUc7b0JBQUNDLFNBQVMsRUFBRXJCLDBFQUFjOzs7Ozs7Ozs7Ozt3RkFHL0JvQixDQUFHO2dCQUFDQyxTQUFTLEVBQUVyQix3RUFBWTtzR0FDekJHLDBEQUFNO29CQUNMd0IsSUFBSSxFQUFDLENBQW9CO29CQUN6QkMsT0FBTyxFQUFFLFFBQ25CLEdBRHlCLENBQUM7d0JBQ2RaLE1BQU07b0JBQ1IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWCxDQUFDO0dBOUNRWCxJQUFJOztRQUdNSCxxREFBTzs7O0tBSGpCRyxJQUFJO0FBZ0RiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcz9mNDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL2FwaS9hcGlcIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiLi4vbGliL0NhcmRDb250ZXh0XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgSGVhZGVyQ2xpZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlckNsaWVudFwiO1xuXG5mdW5jdGlvbiBDYXJ0KCkge1xuICBjb25zdCBbYWRyZXNzLCBzZXRBZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDYXJ0KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRJbmZvKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRJbmZvID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcIi9tYXJrZXRcIik7XG4gICAgICBzZXRBZHJlc3MoZGF0YVswXS5tYXJrZXRfYWRyZXNzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEZpbmlzaCA9IChkYXRhKSA9PiB7XG4gICAgLy8gbsOjbyBmdW5mYVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHRlc3RlIH0gPSBhcGkucG9zdChcIi9vcmRlclwiLCBkYXRhKTtcbiAgICAgIGFsZXJ0KGBDb21wcmEgZmluYWxpemFkYWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkZXJDbGllbnQgbG9nbz1cIi9sb2dvLnBuZ1wiIGFkcmVzcz17YWRyZXNzfT48L0hlYWRlckNsaWVudD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZS5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2R1Y3RzfT48L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvb3Rlcn0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0ZXh0PVwiRmluYWxpemFyIGEgY29tcHJhXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBGaW5pc2goKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiYXBpIiwidXNlQ2FydCIsIkJ1dHRvbiIsIkhlYWRlckNsaWVudCIsIkNhcnQiLCJhZHJlc3MiLCJzZXRBZHJlc3MiLCJjYXJ0IiwiZ2V0SW5mbyIsImV2ZW50IiwiZGF0YSIsImdldCIsIm1hcmtldF9hZHJlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJGaW5pc2giLCJ0ZXN0ZSIsInBvc3QiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImxvZ28iLCJtYWluIiwicHJvZHVjdHMiLCJmb290ZXIiLCJ0ZXh0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

/***/ })

});