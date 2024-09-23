exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 2273:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "style_wrapper__nOX1E"
};


/***/ }),

/***/ 2052:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "modal_container__230SW",
	"modal-form": "modal_modal-form__Vx1vr"
};


/***/ }),

/***/ 7428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2273);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_1__);


/* 
	Modal

	- Ao clicar no wrapper do modal, o modal deve ser fechado, porém esta ação deve ser ignorada caso o usuário clique em qualquer elemento dentro do modal
*/ const Modal = ({ children , title , isOpen , ...props })=>{
    function handleCloseClick(e) {
        props.onClose?.("click", e.target);
    }
    function handleConfirmClick(e) {
        props.onConfirm?.();
    }
    function handleKeyDown(e) {
        if (e.key === "Escape") props.onClose?.("esc", e.target);
    }
    if (!isOpen) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-modal-wrapper": true,
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper),
        onClick: handleCloseClick,
        onKeyDown: handleKeyDown,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-modal-container": true,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    "data-modal-header": true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            "data-modal-close": true,
                            onClick: handleCloseClick,
                            children: "X"
                        })
                    ]
                }),
                children,
                !props.footer?.hidden && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    "data-modal-footer": true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            "data-modal-cancel": true,
                            onClick: handleCloseClick,
                            children: props.footer?.cancelText ?? "Cancelar"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            "data-modal-confirm": true,
                            onClick: handleConfirmClick,
                            "data-type": "confirm",
                            children: props.footer?.confirmText ?? "Confirmar"
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;