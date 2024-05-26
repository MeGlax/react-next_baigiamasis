"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/atoms/CardTitle/CardTitle.jsx":
/*!**************************************************!*\
  !*** ./components/atoms/CardTitle/CardTitle.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardTitle_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardTitle.module.css */ \"./components/atoms/CardTitle/CardTitle.module.css\");\n/* harmony import */ var _CardTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardTitle_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/delete.svg */ \"./assets/delete.svg\");\n/* harmony import */ var _api_question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/question */ \"./api/question.js\");\n/* harmony import */ var _molecules_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/Modal/Modal */ \"./components/molecules/Modal/Modal.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst CardTitle = (param)=>{\n    let { title, question_id, asker_id, refreshQuestions } = param;\n    _s();\n    const isQuestionYours = asker_id === js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"user_id\") ? true : false;\n    const [isWarningShown, setWarningShown] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const delete_question = async ()=>{\n        const jwt_token = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"jwt_token\");\n        try {\n            await (0,_api_question__WEBPACK_IMPORTED_MODULE_5__.deleteQuestion)({\n                jwt_token,\n                question_id\n            });\n            await refreshQuestions();\n        } catch (err) {\n            console.log(\"there was a problem deleting the answer\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"question/\".concat(question_id),\n                children: \"\".concat(title, \" \")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardTitle\\\\CardTitle.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            isQuestionYours && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: _assets_delete_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                className: (_CardTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default().deleteImg),\n                onClick: ()=>{\n                    setWarningShown(true);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardTitle\\\\CardTitle.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined),\n            isWarningShown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                message: \"Are you sure you want to delete this\",\n                onCancel: ()=>{\n                    setWarningShown(false);\n                },\n                onConfirm: ()=>{\n                    delete_question();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardTitle\\\\CardTitle.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardTitle\\\\CardTitle.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardTitle, \"l45GbV4WJr3mquOwJauo4MPAbW8=\");\n_c = CardTitle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardTitle);\nvar _c;\n$RefreshReg$(_c, \"CardTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0NhcmRUaXRsZS9DYXJkVGl0bGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNmO0FBQ0c7QUFDbUI7QUFDSTtBQUNQO0FBQ2Y7QUFFakMsTUFBTU8sWUFBWTtRQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLGdCQUFnQixFQUFFOztJQUNuRSxNQUFNQyxrQkFBa0JGLGFBQWFSLHFEQUFXLENBQUMsYUFBYSxPQUFPO0lBQ3JFLE1BQU0sQ0FBQ1ksZ0JBQWdCQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUM7SUFFbkQsTUFBTVUsa0JBQWtCO1FBQ3RCLE1BQU1DLFlBQVlmLHFEQUFXLENBQUM7UUFFOUIsSUFBSTtZQUNGLE1BQU1FLDZEQUFjQSxDQUFDO2dCQUFFYTtnQkFBV1I7WUFBWTtZQUM5QyxNQUFNRTtRQUNSLEVBQUUsT0FBT08sS0FBSztZQUNaQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ3BCLGtEQUFJQTtnQkFBQ3FCLE1BQU0sWUFBd0IsT0FBWmI7MEJBQWdCLEdBQVMsT0FBTkQsT0FBTTs7Ozs7O1lBQ2hESSxpQ0FDQyw4REFBQ1c7Z0JBQ0NDLEtBQUtyQiw4REFBYTtnQkFDbEJzQixXQUFXekIsd0VBQWdCO2dCQUMzQjBCLFNBQVM7b0JBQ1BYLGdCQUFnQjtnQkFDbEI7Ozs7OztZQUdIRCxnQ0FDQyw4REFBQ1QsOERBQUtBO2dCQUNKc0IsU0FBUztnQkFDVEMsVUFBVTtvQkFDUmIsZ0JBQWdCO2dCQUNsQjtnQkFDQWMsV0FBVztvQkFDVGI7Z0JBQ0Y7Ozs7Ozs7Ozs7OztBQUtWO0dBeENNVDtLQUFBQTtBQTBDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F0b21zL0NhcmRUaXRsZS9DYXJkVGl0bGUuanN4Pzg5MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJkVGl0bGUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IGRlbGV0ZUltZyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcclxuaW1wb3J0IHsgZGVsZXRlUXVlc3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3F1ZXN0aW9uXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDYXJkVGl0bGUgPSAoeyB0aXRsZSwgcXVlc3Rpb25faWQsIGFza2VyX2lkLCByZWZyZXNoUXVlc3Rpb25zIH0pID0+IHtcclxuICBjb25zdCBpc1F1ZXN0aW9uWW91cnMgPSBhc2tlcl9pZCA9PT0gY29va2llcy5nZXQoXCJ1c2VyX2lkXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIGNvbnN0IFtpc1dhcm5pbmdTaG93biwgc2V0V2FybmluZ1Nob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlX3F1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgand0X3Rva2VuID0gY29va2llcy5nZXQoXCJqd3RfdG9rZW5cIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZGVsZXRlUXVlc3Rpb24oeyBqd3RfdG9rZW4sIHF1ZXN0aW9uX2lkIH0pO1xyXG4gICAgICBhd2FpdCByZWZyZXNoUXVlc3Rpb25zKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGVyZSB3YXMgYSBwcm9ibGVtIGRlbGV0aW5nIHRoZSBhbnN3ZXJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2BxdWVzdGlvbi8ke3F1ZXN0aW9uX2lkfWB9PntgJHt0aXRsZX0gYH08L0xpbms+XHJcbiAgICAgIHtpc1F1ZXN0aW9uWW91cnMgJiYgKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17ZGVsZXRlSW1nLnNyY31cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUltZ31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0V2FybmluZ1Nob3duKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7aXNXYXJuaW5nU2hvd24gJiYgKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgbWVzc2FnZT17XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXNcIn1cclxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFdhcm5pbmdTaG93bihmYWxzZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZV9xdWVzdGlvbigpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRUaXRsZTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkxpbmsiLCJjb29raWVzIiwiZGVsZXRlSW1nIiwiZGVsZXRlUXVlc3Rpb24iLCJNb2RhbCIsInVzZVN0YXRlIiwiQ2FyZFRpdGxlIiwidGl0bGUiLCJxdWVzdGlvbl9pZCIsImFza2VyX2lkIiwicmVmcmVzaFF1ZXN0aW9ucyIsImlzUXVlc3Rpb25Zb3VycyIsImdldCIsImlzV2FybmluZ1Nob3duIiwic2V0V2FybmluZ1Nob3duIiwiZGVsZXRlX3F1ZXN0aW9uIiwiand0X3Rva2VuIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImhyZWYiLCJpbWciLCJzcmMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibWVzc2FnZSIsIm9uQ2FuY2VsIiwib25Db25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/CardTitle/CardTitle.jsx\n"));

/***/ })

});