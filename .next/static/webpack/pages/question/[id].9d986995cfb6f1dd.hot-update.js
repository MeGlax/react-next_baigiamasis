"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/question/[id]",{

/***/ "./api/question.js":
/*!*************************!*\
  !*** ./api/question.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   answerQuestion: function() { return /* binding */ answerQuestion; }\n/* harmony export */ });\nconst answerQuestion = async (param)=>{\n    let { jwt_token, question_id, answerValue } = param;\n    const body = {\n        answer: answer\n    };\n    const headers = {\n        Authorization: jwt_token\n    };\n    try {\n        const response = await axios.post(\"\".concat(\"http://www.localhost:3220\", \"/question/\").concat(question_id, \"/answer\"), body, {\n            headers: headers\n        });\n        console.log(\"response: \", response);\n    } catch (err) {\n        console.error(\"error fetching username:\", err);\n        return \"anonymous\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvcXVlc3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGlCQUFpQjtRQUFPLEVBQ25DQyxTQUFTLEVBQ1RDLFdBQVcsRUFDWEMsV0FBVyxFQUNaO0lBQ0MsTUFBTUMsT0FBTztRQUFFQyxRQUFRQTtJQUFPO0lBQzlCLE1BQU1DLFVBQVU7UUFBRUMsZUFBZU47SUFBVTtJQUMzQyxJQUFJO1FBQ0YsTUFBTU8sV0FBVyxNQUFNQyxNQUFNQyxJQUFJLENBQy9CLEdBQXNDUixPQUFuQ1MsMkJBQXNCLEVBQUMsY0FBd0IsT0FBWlQsYUFBWSxZQUNsREUsTUFDQTtZQUFFRSxTQUFTQTtRQUFRO1FBRXJCUSxRQUFRQyxHQUFHLENBQUMsY0FBY1A7SUFDNUIsRUFBRSxPQUFPUSxLQUFLO1FBQ1pGLFFBQVFHLEtBQUssQ0FBQyw0QkFBNEJEO1FBQzFDLE9BQU87SUFDVDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL3F1ZXN0aW9uLmpzPzBkMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFuc3dlclF1ZXN0aW9uID0gYXN5bmMgKHtcclxuICBqd3RfdG9rZW4sXHJcbiAgcXVlc3Rpb25faWQsXHJcbiAgYW5zd2VyVmFsdWUsXHJcbn0pID0+IHtcclxuICBjb25zdCBib2R5ID0geyBhbnN3ZXI6IGFuc3dlciB9O1xyXG4gIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246IGp3dF90b2tlbiB9O1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52LlNFUlZFUl9VUkx9L3F1ZXN0aW9uLyR7cXVlc3Rpb25faWR9L2Fuc3dlcmAsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBmZXRjaGluZyB1c2VybmFtZTpcIiwgZXJyKTtcclxuICAgIHJldHVybiBcImFub255bW91c1wiO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImFuc3dlclF1ZXN0aW9uIiwiand0X3Rva2VuIiwicXVlc3Rpb25faWQiLCJhbnN3ZXJWYWx1ZSIsImJvZHkiLCJhbnN3ZXIiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIlNFUlZFUl9VUkwiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/question.js\n"));

/***/ })

});