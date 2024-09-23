(() => {
var exports = {};
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 6122:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "lista_container__vNIFo",
	"content": "lista_content__2_O_Q"
};


/***/ }),

/***/ 5196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fpagina_estatica_absolutePagePath_private_next_pages_2Fpagina_estatica_tsx_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fpagina_estatica_absolutePagePath_private_next_pages_2Fpagina_estatica_tsx_preferredRegion_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/pagina-estatica.tsx
var pagina_estatica_namespaceObject = {};
__webpack_require__.r(pagina_estatica_namespaceObject);
__webpack_require__.d(pagina_estatica_namespaceObject, {
  "default": () => (Lista),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/lista.module.css
var lista_module = __webpack_require__(6122);
var lista_module_default = /*#__PURE__*/__webpack_require__.n(lista_module);
;// CONCATENATED MODULE: ./src/pages/pagina-estatica.tsx
/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */ 

function Lista({ initialList  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (lista_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (lista_module_default()).content,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    children: "Lista de cidades"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    "data-list-container": true,
                    children: initialList?.map((city)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-list-item": true,
                            children: city.name
                        }, city.id))
                })
            ]
        })
    });
}
async function getStaticProps() {
    try {
        const response = await fetch("/api/cities/10");
        const data = await response.json();
        if (!response.ok) throw new Error("Erro ao obter os dados");
        return {
            props: {
                initialList: data
            },
            revalidate: 60
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                initialList: []
            }
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fpagina-estatica&absolutePagePath=private-next-pages%2Fpagina-estatica.tsx&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fpagina_estatica_absolutePagePath_private_next_pages_2Fpagina_estatica_tsx_preferredRegion_ = ((0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fpagina_estatica_absolutePagePath_private_next_pages_2Fpagina_estatica_tsx_preferredRegion_getStaticProps = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pagina_estatica_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/pagina-estatica","pathname":"/pagina-estatica","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: pagina_estatica_namespaceObject })
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [812], () => (__webpack_exec__(5196)));
module.exports = __webpack_exports__;

})();