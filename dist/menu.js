/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG8tZGVsZm9vZC8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSAnLi9tb2R1bGVzL2F1dGgnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21vZHVsZXMvbWVudSc7XHJcblxyXG5hdXRoKCk7XHJcbm1lbnUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    'use strict';\r\n\r\n    const buttonAuth = document.querySelector('.button-auth');\r\n    const buttonOut = document.querySelector('.button-out');\r\n    const userName = document.querySelector('.user-name');\r\n    const modalAuth = document.querySelector('.modal-auth');\r\n    const closeAuth = document.querySelector('.close-auth');\r\n    const logInForm = document.getElementById('logInForm');\r\n    const inputLogin = document.getElementById('login');\r\n    const inputPassword = document.getElementById('password');\r\n    const inputError = document.querySelector('.input-error');\r\n\r\n    const login = (user) => {\r\n        buttonAuth.style.display = 'none';\r\n        buttonOut.style.display = 'block';\r\n        modalAuth.style.display = 'none';\r\n        userName.style.display = 'block';\r\n        userName.textContent = user.login;\r\n    };\r\n\r\n    const logout = () => {\r\n        buttonAuth.style.display = 'flex';\r\n        buttonOut.style.display = 'none';\r\n        userName.style.display = 'none';\r\n        userName.textContent = '';\r\n        localStorage.removeItem('user')\r\n    };\r\n\r\n    const validateInput = () => {\r\n        if (inputLogin.value !== '') {\r\n            inputLogin.style.border = '';\r\n            inputError.style.display = 'none';\r\n            return true\r\n        } else {\r\n            inputLogin.style.border = '1px solid red';\r\n            inputError.style.display = 'block';\r\n            return false;\r\n        }\r\n    };\r\n\r\n    buttonAuth.addEventListener('click', () => {\r\n        inputLogin.style.border = '';\r\n        inputLogin.value = '';\r\n        inputPassword.value = '';\r\n        modalAuth.style.display = 'flex';\r\n    });\r\n\r\n    closeAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'none';\r\n        inputLogin.value = '';\r\n        inputPassword.value = '';\r\n        inputLogin.style.border = '';\r\n        inputError.style.display = 'none';\r\n    });\r\n\r\n    logInForm.addEventListener('submit', (evt) => {\r\n        evt.preventDefault();\r\n\r\n        if (validateInput()) {\r\n            const user = {\r\n                login: inputLogin.value,\r\n                password: inputPassword.value\r\n            };\r\n\r\n            localStorage.setItem('user', JSON.stringify(user));\r\n\r\n            login(user);\r\n        } else {\r\n            inputLogin.style.border = '1px solid red';\r\n        }\r\n\r\n    });\r\n\r\n    buttonOut.addEventListener('click', logout);\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')));\r\n    }\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvLWRlbGZvb2QvLi9zcmMvbW9kdWxlcy9hdXRoLmpzP2U3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXV0aCA9ICgpID0+IHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hdXRoJyk7XHJcbiAgICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW91dCcpO1xyXG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJyk7XHJcbiAgICBjb25zdCBtb2RhbEF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYXV0aCcpO1xyXG4gICAgY29uc3QgY2xvc2VBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWF1dGgnKTtcclxuICAgIGNvbnN0IGxvZ0luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dJbkZvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKTtcclxuICAgIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcclxuICAgIGNvbnN0IGlucHV0RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZXJyb3InKTtcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW47XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaW5wdXRMb2dpbi52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgaW5wdXRMb2dpbi5zdHlsZS5ib3JkZXIgPSAnJztcclxuICAgICAgICAgICAgaW5wdXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0TG9naW4uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICBpbnB1dEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlucHV0TG9naW4uc3R5bGUuYm9yZGVyID0gJyc7XHJcbiAgICAgICAgaW5wdXRMb2dpbi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQudmFsdWUgPSAnJztcclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBpbnB1dExvZ2luLnZhbHVlID0gJyc7XHJcbiAgICAgICAgaW5wdXRQYXNzd29yZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlucHV0TG9naW4uc3R5bGUuYm9yZGVyID0gJyc7XHJcbiAgICAgICAgaW5wdXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRlSW5wdXQoKSkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgICAgICAgICAgbG9naW46IGlucHV0TG9naW4udmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcblxyXG4gICAgICAgICAgICBsb2dpbih1c2VyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dExvZ2luLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nb3V0KTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG4gICAgICAgIGxvZ2luKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGg7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const restaurant = 'food-band';\r\n\r\n    const renderItems = (data) => {\r\n        data.forEach(item => {\r\n            console.log(item);\r\n        });\r\n    };\r\n\r\n    fetch(`./db/${restaurant}.json`)\r\n        .then((response) => {\r\n            return response.json();\r\n        })\r\n        .then((data) => {\r\n            renderItems(data);\r\n        })\r\n        .catch((error) => {\r\n            console.log(error);\r\n        });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvLWRlbGZvb2QvLi9zcmMvbW9kdWxlcy9tZW51LmpzPzJmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSAnZm9vZC1iYW5kJztcclxuXHJcbiAgICBjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goYC4vZGIvJHtyZXN0YXVyYW50fS5qc29uYClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;