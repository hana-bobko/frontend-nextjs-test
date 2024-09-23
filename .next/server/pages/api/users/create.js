"use strict";
(() => {
var exports = {};
exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 3477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */ const users = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    if (req.method === "POST") {
        try {
            const { name , email  } = req.body;
            if (!name || !email) {
                return res.status(400).json({
                    error: "Nome e email s\xe3o obrigat\xf3rios."
                });
            }
            const newUser = {
                id: users.length + 1,
                name,
                email
            };
            users.push(newUser);
            console.log(users);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json({
                error: "Erro ao criar o usu\xe1rio."
            });
        }
    } else {
        return res.status(405).json({
            error: "M\xe9todo n\xe3o permitido. Use POST."
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3477));
module.exports = __webpack_exports__;

})();