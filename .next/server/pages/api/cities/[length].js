"use strict";
(() => {
var exports = {};
exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 9247:
/***/ ((module) => {

module.exports = import("@faker-js/faker/locale/pt_BR");;

/***/ }),

/***/ 9642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ApiMethod)
/* harmony export */ });
function ApiMethod(method) {
    return function(handler) {
        return async function(req, res) {
            if (req.method !== method) {
                return res.status(405).json({
                    ok: false,
                    message: "Method not allowed",
                    ptMessage: "M\xe9todo n\xe3o permitido"
                });
            }
            return handler(req, res);
        };
    };
}


/***/ }),

/***/ 3472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _faker_js_faker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9247);
/* harmony import */ var _decorators_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faker_js_faker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__]);
_faker_js_faker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function loop(length) {
    return Array.from({
        length
    }, ()=>1).map((_, index)=>index + 1);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_decorators_method__WEBPACK_IMPORTED_MODULE_1__/* .ApiMethod */ .p)("GET")(async (req, res)=>{
    const length = Number(req.query.length);
    const cities = [];
    for (const _ of loop(length)){
        cities.push({
            id: _faker_js_faker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__.faker.string.uuid(),
            name: _faker_js_faker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__.faker.location.city()
        });
    }
    return res.status(200).json(cities);
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3472));
module.exports = __webpack_exports__;

})();