/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app-mobile.js":
/*!**************************!*\
  !*** ./js/app-mobile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobile_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile/select.js */ \"./js/mobile/select.js\");\n/* harmony import */ var _mobile_plus_minus_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile/plus-minus-button.js */ \"./js/mobile/plus-minus-button.js\");\n/* harmony import */ var _mobile_menu_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile/menu-button.js */ \"./js/mobile/menu-button.js\");\n/* harmony import */ var _mobile_notifications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile/notifications.js */ \"./js/mobile/notifications.js\");\n/* harmony import */ var _mobile_accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/accordion.js */ \"./js/mobile/accordion.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_mobile_accordion_js__WEBPACK_IMPORTED_MODULE_4__.renderAccordion)();\r\n(0,_mobile_notifications_js__WEBPACK_IMPORTED_MODULE_3__.renderNotifications)();\r\n(0,_mobile_select_js__WEBPACK_IMPORTED_MODULE_0__.renderSelect)();\r\n(0,_mobile_plus_minus_button_js__WEBPACK_IMPORTED_MODULE_1__.renderPlusMinusButton)();\r\n(0,_mobile_menu_button_js__WEBPACK_IMPORTED_MODULE_2__.renderMenuButton)();\n\n//# sourceURL=webpack:///./js/app-mobile.js?");

/***/ }),

/***/ "./js/mobile/accordion.js":
/*!********************************!*\
  !*** ./js/mobile/accordion.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAccordion\": () => (/* binding */ renderAccordion)\n/* harmony export */ });\nlet renderAccordion = () =>{\r\n    \r\n    let faqs = document.querySelectorAll(\".question\");\r\n\r\n    if(faqs){\r\n        faqs.forEach((faq, i) => {\r\n            faq.addEventListener(\"click\", () => {\r\n                let contents = document.querySelectorAll(\".content\")\r\n                contents[i].classList.toggle(\"active\")\r\n                let arrow = document.querySelectorAll(\".item\")\r\n                arrow[i].classList.toggle(\"active\")\r\n            });\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/mobile/accordion.js?");

/***/ }),

/***/ "./js/mobile/menu-button.js":
/*!**********************************!*\
  !*** ./js/mobile/menu-button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuButton\": () => (/* binding */ renderMenuButton)\n/* harmony export */ });\nlet renderMenuButton = () => {\r\n\r\n    let hamburger = document.querySelector(\".hamburger\");\r\n    let menu = document.getElementById(\"hamburger-menu\");\r\n    \r\n    if(hamburger){\r\n        hamburger.addEventListener(\"click\",()=> {\r\n\r\n            hamburger.classList.toggle(\"active\");\r\n            menu.classList.toggle(\"active\");\r\n        }); \r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/mobile/menu-button.js?");

/***/ }),

/***/ "./js/mobile/notifications.js":
/*!************************************!*\
  !*** ./js/mobile/notifications.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNotifications\": () => (/* binding */ renderNotifications)\n/* harmony export */ });\nlet renderNotifications = () =>{\r\n    \r\n}\n\n//# sourceURL=webpack:///./js/mobile/notifications.js?");

/***/ }),

/***/ "./js/mobile/plus-minus-button.js":
/*!****************************************!*\
  !*** ./js/mobile/plus-minus-button.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPlusMinusButton\": () => (/* binding */ renderPlusMinusButton)\n/* harmony export */ });\nlet renderPlusMinusButton = () => {\r\n\r\n    let adds = document.querySelectorAll(\".add\");\r\n    let substracts = document.querySelectorAll(\".subtract\");\r\n    \r\n    if(adds){\r\n        adds.forEach(add => {\r\n            add.addEventListener(\"click\", () => {\r\n    \r\n                let show = add.closest('.amount').querySelector('.show');\r\n    \r\n                show.value = (parseInt(show.value) + 1)\r\n            });\r\n        });\r\n    }\r\n    \r\n    if(substracts){\r\n        substracts.forEach(substract => {\r\n\r\n            substract.addEventListener(\"click\", () => {\r\n            \r\n                let show = substract.closest('.amount').querySelector('.show');\r\n    \r\n                if(show.value > 1){\r\n                    show.value = (parseInt(show.value) - 1)\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./js/mobile/plus-minus-button.js?");

/***/ }),

/***/ "./js/mobile/select.js":
/*!*****************************!*\
  !*** ./js/mobile/select.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderSelect\": () => (/* binding */ renderSelect)\n/* harmony export */ });\nlet renderSelect = () => {\r\n    let infoproducts = document.querySelectorAll('.information-product');\r\n    \r\n    if(infoproducts){\r\n        infoproducts.forEach(infoproduct =>{\r\n\r\n            infoproduct.addEventListener(\"change\", () => {\r\n                \r\n                let infoRelated = document.querySelector('.information-related');\r\n          \r\n                if(infoproduct == infoRelated.dataset.related){\r\n                    infoRelated.classList.add('active');\r\n                }else{\r\n                    infoRelated.classList.remove('active');\r\n                }\r\n            });\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/mobile/select.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app-mobile.js");
/******/ 	
/******/ })()
;