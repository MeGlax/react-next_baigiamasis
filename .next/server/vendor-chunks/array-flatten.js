"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/array-flatten";
exports.ids = ["vendor-chunks/array-flatten"];
exports.modules = {

/***/ "../backend/node_modules/array-flatten/array-flatten.js":
/*!**************************************************************!*\
  !*** ../backend/node_modules/array-flatten/array-flatten.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\n/**\n * Expose `arrayFlatten`.\n */\nmodule.exports = arrayFlatten\n\n/**\n * Recursive flatten function with depth.\n *\n * @param  {Array}  array\n * @param  {Array}  result\n * @param  {Number} depth\n * @return {Array}\n */\nfunction flattenWithDepth (array, result, depth) {\n  for (var i = 0; i < array.length; i++) {\n    var value = array[i]\n\n    if (depth > 0 && Array.isArray(value)) {\n      flattenWithDepth(value, result, depth - 1)\n    } else {\n      result.push(value)\n    }\n  }\n\n  return result\n}\n\n/**\n * Recursive flatten function. Omitting depth is slightly faster.\n *\n * @param  {Array} array\n * @param  {Array} result\n * @return {Array}\n */\nfunction flattenForever (array, result) {\n  for (var i = 0; i < array.length; i++) {\n    var value = array[i]\n\n    if (Array.isArray(value)) {\n      flattenForever(value, result)\n    } else {\n      result.push(value)\n    }\n  }\n\n  return result\n}\n\n/**\n * Flatten an array, with the ability to define a depth.\n *\n * @param  {Array}  array\n * @param  {Number} depth\n * @return {Array}\n */\nfunction arrayFlatten (array, depth) {\n  if (depth == null) {\n    return flattenForever(array, [])\n  }\n\n  return flattenWithDepth(array, [], depth)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvYXJyYXktZmxhdHRlbi9hcnJheS1mbGF0dGVuLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvYXJyYXktZmxhdHRlbi9hcnJheS1mbGF0dGVuLmpzP2RjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogRXhwb3NlIGBhcnJheUZsYXR0ZW5gLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmxhdHRlblxuXG4vKipcbiAqIFJlY3Vyc2l2ZSBmbGF0dGVuIGZ1bmN0aW9uIHdpdGggZGVwdGguXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9ICByZXN1bHRcbiAqIEBwYXJhbSAge051bWJlcn0gZGVwdGhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmbGF0dGVuV2l0aERlcHRoIChhcnJheSwgcmVzdWx0LCBkZXB0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaV1cblxuICAgIGlmIChkZXB0aCA+IDAgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZsYXR0ZW5XaXRoRGVwdGgodmFsdWUsIHJlc3VsdCwgZGVwdGggLSAxKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogUmVjdXJzaXZlIGZsYXR0ZW4gZnVuY3Rpb24uIE9taXR0aW5nIGRlcHRoIGlzIHNsaWdodGx5IGZhc3Rlci5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSByZXN1bHRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmbGF0dGVuRm9yZXZlciAoYXJyYXksIHJlc3VsdCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaV1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgZmxhdHRlbkZvcmV2ZXIodmFsdWUsIHJlc3VsdClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIEZsYXR0ZW4gYW4gYXJyYXksIHdpdGggdGhlIGFiaWxpdHkgdG8gZGVmaW5lIGEgZGVwdGguXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICBhcnJheVxuICogQHBhcmFtICB7TnVtYmVyfSBkZXB0aFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGFycmF5RmxhdHRlbiAoYXJyYXksIGRlcHRoKSB7XG4gIGlmIChkZXB0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZsYXR0ZW5Gb3JldmVyKGFycmF5LCBbXSlcbiAgfVxuXG4gIHJldHVybiBmbGF0dGVuV2l0aERlcHRoKGFycmF5LCBbXSwgZGVwdGgpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../backend/node_modules/array-flatten/array-flatten.js\n");

/***/ })

};
;