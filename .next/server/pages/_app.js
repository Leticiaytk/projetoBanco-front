/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/CardContext.js":
/*!****************************!*\
  !*** ./lib/CardContext.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider),\n/* harmony export */   \"useCart\": () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartProvider({ children  }) {\n    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function saveProduct(product) {\n        const newCart = [\n            ...cart\n        ];\n        newCart.push(product);\n        alert(`${product.product_name} adicionado ao carrinho.`);\n        setCart(newCart);\n        console.log(cart);\n    }\n    function removeProduct(product) {\n        const newCart = [\n            ...cart\n        ];\n        const index = newCart.indexOf(product);\n        console.log(newCart.indexOf(product));\n        newCart.splice(index, 1);\n        alert(`${product.product_name} removido do carrinho.`);\n        setCart(newCart);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            saveProduct,\n            removeProduct,\n            cart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\lib\\\\CardContext.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this));\n}\nfunction useCart() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvQ2FyZENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0U7QUFFL0QsS0FBSyxDQUFDSSxXQUFXLGlCQUFHSixvREFBYSxDQUFDLENBQUMsQ0FBQztBQUVwQyxTQUFTSyxZQUFZLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUMsS0FBSyxNQUFFQyxJQUFJLE1BQUVDLE9BQU8sTUFBSU4sK0NBQVEsQ0FBQyxDQUFDLENBQUM7YUFFMUJPLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7UUFDN0IsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztlQUFHSixJQUFJO1FBQUEsQ0FBQztRQUN6QkksT0FBTyxDQUFDQyxJQUFJLENBQUNGLE9BQU87UUFDcEJHLEtBQUssSUFBSUgsT0FBTyxDQUFDSSxZQUFZLENBQUMsd0JBQXdCO1FBRXRETixPQUFPLENBQUNHLE9BQU87UUFDZkksT0FBTyxDQUFDQyxHQUFHLENBQUNULElBQUk7SUFDbEIsQ0FBQzthQUVRVSxhQUFhLENBQUNQLE9BQU8sRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7ZUFBR0osSUFBSTtRQUFBLENBQUM7UUFFekIsS0FBSyxDQUFDVyxLQUFLLEdBQUdQLE9BQU8sQ0FBQ1EsT0FBTyxDQUFDVCxPQUFPO1FBQ3JDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDUSxPQUFPLENBQUNULE9BQU87UUFDbkNDLE9BQU8sQ0FBQ1MsTUFBTSxDQUFDRixLQUFLLEVBQUUsQ0FBQztRQUV2QkwsS0FBSyxJQUFJSCxPQUFPLENBQUNJLFlBQVksQ0FBQyxzQkFBc0I7UUFFcEROLE9BQU8sQ0FBQ0csT0FBTztJQUNqQixDQUFDO0lBQ0QsTUFBTSw2RUFDSFAsV0FBVyxDQUFDaUIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDYixXQUFXO1lBQUVRLGFBQWE7WUFBRVYsSUFBSTtRQUFDLENBQUM7a0JBQzlERCxRQUFROzs7Ozs7QUFHZixDQUFDO0FBRU0sU0FBU2lCLE9BQU8sR0FBRyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQ3RCLGlEQUFVLENBQUNHLFdBQVc7QUFDL0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8tYmQvLi9saWIvQ2FyZENvbnRleHQuanM/MmExOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgZnVuY3Rpb24gc2F2ZVByb2R1Y3QocHJvZHVjdCkge1xuICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uY2FydF07XG4gICAgbmV3Q2FydC5wdXNoKHByb2R1Y3QpO1xuICAgIGFsZXJ0KGAke3Byb2R1Y3QucHJvZHVjdF9uYW1lfSBhZGljaW9uYWRvIGFvIGNhcnJpbmhvLmApO1xuXG4gICAgc2V0Q2FydChuZXdDYXJ0KTtcbiAgICBjb25zb2xlLmxvZyhjYXJ0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2R1Y3QocHJvZHVjdCkge1xuICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uY2FydF07XG5cbiAgICBjb25zdCBpbmRleCA9IG5ld0NhcnQuaW5kZXhPZihwcm9kdWN0KTtcbiAgICBjb25zb2xlLmxvZyhuZXdDYXJ0LmluZGV4T2YocHJvZHVjdCkpO1xuICAgIG5ld0NhcnQuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGFsZXJ0KGAke3Byb2R1Y3QucHJvZHVjdF9uYW1lfSByZW1vdmlkbyBkbyBjYXJyaW5oby5gKTtcblxuICAgIHNldENhcnQobmV3Q2FydCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2F2ZVByb2R1Y3QsIHJlbW92ZVByb2R1Y3QsIGNhcnQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhcnQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnQiLCJzZXRDYXJ0Iiwic2F2ZVByb2R1Y3QiLCJwcm9kdWN0IiwibmV3Q2FydCIsInB1c2giLCJhbGVydCIsInByb2R1Y3RfbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVQcm9kdWN0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/CardContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_CardContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/CardContext */ \"./lib/CardContext.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps , router  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_CardContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n        children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, {\n            ...pageProps,\n            key: router.pathname,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\pages\\\\_app.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Let\\xedcia\\\\Desktop\\\\UNESP\\\\8\\xba semestre\\\\Banco de Dados II\\\\Front\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDbUI7U0FFeENDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEQsTUFBTSw2RUFDSEosMERBQVk7cUZBQ1ZFLFNBQVM7ZUFBS0MsU0FBUztZQUFFRSxHQUFHLEVBQUVELE1BQU0sQ0FBQ0UsUUFBUTs7Ozs7Ozs7Ozs7OztBQUdwRCxDQUFDO0FBRUQsaUVBQWVMLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8tYmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vbGliL0NhcmRDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPENhcnRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucGF0aG5hbWV9IC8+XG4gICAgPC9DYXJ0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNhcnRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwia2V5IiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();