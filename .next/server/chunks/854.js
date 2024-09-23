exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 3494:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__gyuVq"
};


/***/ }),

/***/ 6854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ ToastProvider),
  p: () => (/* binding */ useToast)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/ToastMessage/style.module.css
var style_module = __webpack_require__(3494);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/ToastMessage/index.tsx


const ToastMessage = ({ content: data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (style_module_default()).container,
        "data-toast-type": data.type,
        "data-toast-id": data.id,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                "data-content": true,
                children: data.message
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                "data-close": true,
                children: "╳"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/contexts/ToastContext/index.tsx
// src/contexts/ToastContext.tsx



const ToastContext = /*#__PURE__*/ (0,external_react_.createContext)(undefined);
const ToastProvider = ({ children  })=>{
    const [toasts, setToasts] = (0,external_react_.useState)([]);
    const addToast = (message)=>{
        setToasts((prev)=>[
                ...prev,
                message
            ]);
        setTimeout(()=>{
            setToasts((prev)=>prev.filter((toast)=>toast.id !== message.id));
        }, 3000); // Remove a mensagem após 3 segundos
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ToastContext.Provider, {
        value: {
            addToast
        },
        children: [
            toasts.map((toast)=>/*#__PURE__*/ jsx_runtime.jsx(ToastMessage, {
                    content: toast
                }, toast.id)),
            children
        ]
    });
};
const useToast = ()=>{
    const context = (0,external_react_.useContext)(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};


/***/ })

};
;