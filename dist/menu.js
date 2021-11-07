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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const cardsMenu = document.querySelector('.cards-menu');\r\n\r\n    const changeTitle = (restaurant) => {\r\n        const restaurantTitle = document.querySelector('.restaurant-title');\r\n        const ratingEl = document.querySelector('.rating');\r\n        const priceEl = document.querySelector('.price');\r\n        const categoryEl = document.querySelector('.category');\r\n\r\n        const { name, stars, price, kitchen } = restaurant;\r\n        restaurantTitle.textContent = name;\r\n        ratingEl.textContent = stars;\r\n        priceEl.textContent = price;\r\n        categoryEl.textContent = kitchen;\r\n    };\r\n\r\n    const renderItems = (data) => {\r\n        data.forEach(item => {\r\n            const { description, id, image, name, price } = item;\r\n\r\n            const div = document.createElement('div');\r\n            div.classList.add('card');\r\n            div.innerHTML = `\r\n                <div class=\"card\">\r\n                    <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n                    <div class=\"card-text\">\r\n                        <div class=\"card-heading\">\r\n                            <h3 class=\"card-title card-title-reg\">${name}</h3>\r\n                        </div>\r\n                        <!-- /.card-heading -->\r\n                        <div class=\"card-info\">\r\n                            <div class=\"ingredients\">${description}\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.card-info -->\r\n                        <div class=\"card-buttons\">\r\n                            <button class=\"button button-primary button-add-cart\">\r\n                                <span class=\"button-card-text\">В корзину</span>\r\n                                <span class=\"button-cart-svg\"></span>\r\n                            </button>\r\n                            <strong class=\"card-price-bold\">${price} ₽</strong>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card-text -->\r\n                </div>\r\n                <!-- /.card -->\r\n            `;\r\n\r\n            cardsMenu.append(div);\r\n        });\r\n    };\r\n\r\n    if (localStorage.getItem('restaurant')) {\r\n        const restaurant = JSON.parse(localStorage.getItem('restaurant'));\r\n        changeTitle(restaurant);\r\n\r\n        fetch(`./db/${restaurant.products}`)\r\n            .then((response) => {\r\n                return response.json();\r\n            })\r\n            .then((data) => {\r\n                renderItems(data);\r\n            })\r\n            .catch((error) => {\r\n                console.log(error);\r\n            });\r\n    } else {\r\n        window.location.href = '/';\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOEJBQThCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0NBQXNDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsTUFBTSxTQUFTLEtBQUs7QUFDcEQ7QUFDQTtBQUNBLG9FQUFvRSxLQUFLO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELE9BQU87QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG8tZGVsZm9vZC8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLW1lbnUnKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IChyZXN0YXVyYW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhdXJhbnQtdGl0bGUnKTtcclxuICAgICAgICBjb25zdCByYXRpbmdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRpbmcnKTtcclxuICAgICAgICBjb25zdCBwcmljZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlJyk7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeScpO1xyXG5cclxuICAgICAgICBjb25zdCB7IG5hbWUsIHN0YXJzLCBwcmljZSwga2l0Y2hlbiB9ID0gcmVzdGF1cmFudDtcclxuICAgICAgICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHJhdGluZ0VsLnRleHRDb250ZW50ID0gc3RhcnM7XHJcbiAgICAgICAgcHJpY2VFbC50ZXh0Q29udGVudCA9IHByaWNlO1xyXG4gICAgICAgIGNhdGVnb3J5RWwudGV4dENvbnRlbnQgPSBraXRjaGVuO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlIH0gPSBpdGVtO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCIke25hbWV9XCIgY2xhc3M9XCJjYXJkLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1yZWdcIj4ke25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRpbmcgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmdyZWRpZW50c1wiPiR7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWluZm8gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLWFkZC1jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FyZC10ZXh0XCI+0JIg0LrQvtGA0LfQuNC90YM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FydC1zdmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJjYXJkLXByaWNlLWJvbGRcIj4ke3ByaWNlfSDigr08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtdGV4dCAtLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICBjYXJkc01lbnUuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3RhdXJhbnQnKSk7XHJcbiAgICAgICAgY2hhbmdlVGl0bGUocmVzdGF1cmFudCk7XHJcblxyXG4gICAgICAgIGZldGNoKGAuL2RiLyR7cmVzdGF1cmFudC5wcm9kdWN0c31gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtcyhkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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