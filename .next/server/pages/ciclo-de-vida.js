(() => {
var exports = {};
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 6310:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ciclo-de-vida_container__Dyc9C"
};


/***/ }),

/***/ 1859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fciclo_de_vida_absolutePagePath_private_next_pages_2Fciclo_de_vida_tsx_preferredRegion_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fciclo_de_vida_absolutePagePath_private_next_pages_2Fciclo_de_vida_tsx_preferredRegion_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/ciclo-de-vida.tsx
var ciclo_de_vida_namespaceObject = {};
__webpack_require__.r(ciclo_de_vida_namespaceObject);
__webpack_require__.d(ciclo_de_vida_namespaceObject, {
  "default": () => (CicloDeVida),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/ciclo-de-vida.module.css
var ciclo_de_vida_module = __webpack_require__(6310);
var ciclo_de_vida_module_default = /*#__PURE__*/__webpack_require__.n(ciclo_de_vida_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Counter/index.tsx


const Counter = ({ initialCount  })=>{
    const [count, setCount] = (0,external_react_.useState)(initialCount);
    (0,external_react_.useEffect)(()=>{
        const mountEvent = new CustomEvent("onCounterMount");
        window.dispatchEvent(mountEvent);
        return ()=>{
            const unmountEvent = new CustomEvent("onCounterUnmount");
            window.dispatchEvent(unmountEvent);
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        const updateEvent = new CustomEvent("onCounterUpdate", {
            detail: count
        });
        window.dispatchEvent(updateEvent);
        if (count >= 10) {
            setCount(0);
        }
    }, [
        count
    ]);
    const handleIncrement = ()=>{
        setCount((prevCount)=>prevCount + 1);
    };
    const handleDecrement = ()=>{
        setCount((prevCount)=>prevCount - 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                onClick: handleDecrement,
                children: "Decrementar -"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                children: [
                    "Contador: ",
                    count
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                onClick: handleIncrement,
                children: "Incrementar +"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/ciclo-de-vida.tsx
/**
 * Ciclo de Vida
 *
 * - No evento de montagem deste component, deve ser registrados os seguintes events listeners:
 *  	- onCounterMount
 * 		- onCounterUnmount
 * 		- onCounterUpdate
 * - Os eventos devem ser disparados no componente Counter, seguindo o ciclo de vida do mesmo
 * - Ao atualizar o contador, deverá ser passado o valor atualizado no evento onCounterUpdate, e quando o valor
 * 		chegar a 10, o Counter deve ser desmontado.
 *
 * (Opcional)
 * - Ao observar os eventos, você verá que eles são disparados mais de uma vez, isso acontece porque o componente
 * 		Counter é desmontado e montado novamente, e os eventos são registrados novamente, isto é um problema comum
 * 		no nextjs, você deve resolver este problema.
 */ 



function CicloDeVida({ initialCount  }) {
    const [showCounter, setShowCounter] = (0,external_react_.useState)(false);
    function handleOcultCounterClick() {
        setShowCounter((prevState)=>!prevState);
    }
    (0,external_react_.useEffect)(()=>{
        const handleMount = (event)=>{
            console.log("componente montado");
        };
        const handleUnmount = (event)=>{
            console.log("componente desmontado");
        };
        const handleUpdate = (event)=>{
            console.log("componente atualizado", event.detail);
        };
        window.addEventListener("onCounterMount", handleMount);
        window.addEventListener("onCounterUnmount", handleUnmount);
        window.addEventListener("onCounterUpdate", handleUpdate);
        return ()=>{
            window.removeEventListener("onCounterMount", handleMount);
            window.removeEventListener("onCounterUnmount", handleUnmount);
            window.removeEventListener("onCounterUpdate", handleUpdate);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (ciclo_de_vida_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    type: "button",
                    onClick: handleOcultCounterClick,
                    children: showCounter ? "Ocultar contador" : "Mostrar contador"
                }),
                showCounter && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            children: "Exemplo de Ciclo de vida"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-content": true,
                            children: /*#__PURE__*/ jsx_runtime.jsx(Counter, {
                                initialCount: initialCount
                            })
                        })
                    ]
                })
            ]
        })
    });
}
const getServerSideProps = async ()=>{
    return {
        props: {
            initialCount: 0
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fciclo-de-vida&absolutePagePath=private-next-pages%2Fciclo-de-vida.tsx&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fciclo_de_vida_absolutePagePath_private_next_pages_2Fciclo_de_vida_tsx_preferredRegion_ = ((0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fciclo_de_vida_absolutePagePath_private_next_pages_2Fciclo_de_vida_tsx_preferredRegion_getServerSideProps = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(ciclo_de_vida_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/ciclo-de-vida","pathname":"/ciclo-de-vida","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: ciclo_de_vida_namespaceObject })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812], () => (__webpack_exec__(1859)));
module.exports = __webpack_exports__;

})();