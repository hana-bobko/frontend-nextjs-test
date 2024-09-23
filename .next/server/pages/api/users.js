"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 5673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */ {
/*FEITO ✅*/ }/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    if (req.method === "GET") {
        const users = [
            {
                id: 0,
                name: "Jo\xe3o Silva",
                email: "joao.silva@email.com"
            },
            {
                id: 1,
                name: "Maria Joaquina",
                email: "maria.oliveira@email.com"
            },
            {
                id: 2,
                name: "Paulo Cirilo",
                email: "paulo.cirilo@email.com"
            }
        ];
        return res.status(200).json(users);
    } else {
        return res.status(405).json({
            message: "Method Not Allowed"
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5673));
module.exports = __webpack_exports__;

})();