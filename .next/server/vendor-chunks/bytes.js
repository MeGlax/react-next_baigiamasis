"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bytes";
exports.ids = ["vendor-chunks/bytes"];
exports.modules = {

/***/ "../backend/node_modules/bytes/index.js":
/*!**********************************************!*\
  !*** ../backend/node_modules/bytes/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/*!\n * bytes\n * Copyright(c) 2012-2014 TJ Holowaychuk\n * Copyright(c) 2015 Jed Watson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = bytes;\nmodule.exports.format = format;\nmodule.exports.parse = parse;\n\n/**\n * Module variables.\n * @private\n */\n\nvar formatThousandsRegExp = /\\B(?=(\\d{3})+(?!\\d))/g;\n\nvar formatDecimalsRegExp = /(?:\\.0*|(\\.[^0]+)0+)$/;\n\nvar map = {\n  b:  1,\n  kb: 1 << 10,\n  mb: 1 << 20,\n  gb: 1 << 30,\n  tb: Math.pow(1024, 4),\n  pb: Math.pow(1024, 5),\n};\n\nvar parseRegExp = /^((-|\\+)?(\\d+(?:\\.\\d+)?)) *(kb|mb|gb|tb|pb)$/i;\n\n/**\n * Convert the given value in bytes into a string or parse to string to an integer in bytes.\n *\n * @param {string|number} value\n * @param {{\n *  case: [string],\n *  decimalPlaces: [number]\n *  fixedDecimals: [boolean]\n *  thousandsSeparator: [string]\n *  unitSeparator: [string]\n *  }} [options] bytes options.\n *\n * @returns {string|number|null}\n */\n\nfunction bytes(value, options) {\n  if (typeof value === 'string') {\n    return parse(value);\n  }\n\n  if (typeof value === 'number') {\n    return format(value, options);\n  }\n\n  return null;\n}\n\n/**\n * Format the given value in bytes into a string.\n *\n * If the value is negative, it is kept as such. If it is a float,\n * it is rounded.\n *\n * @param {number} value\n * @param {object} [options]\n * @param {number} [options.decimalPlaces=2]\n * @param {number} [options.fixedDecimals=false]\n * @param {string} [options.thousandsSeparator=]\n * @param {string} [options.unit=]\n * @param {string} [options.unitSeparator=]\n *\n * @returns {string|null}\n * @public\n */\n\nfunction format(value, options) {\n  if (!Number.isFinite(value)) {\n    return null;\n  }\n\n  var mag = Math.abs(value);\n  var thousandsSeparator = (options && options.thousandsSeparator) || '';\n  var unitSeparator = (options && options.unitSeparator) || '';\n  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;\n  var fixedDecimals = Boolean(options && options.fixedDecimals);\n  var unit = (options && options.unit) || '';\n\n  if (!unit || !map[unit.toLowerCase()]) {\n    if (mag >= map.pb) {\n      unit = 'PB';\n    } else if (mag >= map.tb) {\n      unit = 'TB';\n    } else if (mag >= map.gb) {\n      unit = 'GB';\n    } else if (mag >= map.mb) {\n      unit = 'MB';\n    } else if (mag >= map.kb) {\n      unit = 'KB';\n    } else {\n      unit = 'B';\n    }\n  }\n\n  var val = value / map[unit.toLowerCase()];\n  var str = val.toFixed(decimalPlaces);\n\n  if (!fixedDecimals) {\n    str = str.replace(formatDecimalsRegExp, '$1');\n  }\n\n  if (thousandsSeparator) {\n    str = str.split('.').map(function (s, i) {\n      return i === 0\n        ? s.replace(formatThousandsRegExp, thousandsSeparator)\n        : s\n    }).join('.');\n  }\n\n  return str + unitSeparator + unit;\n}\n\n/**\n * Parse the string value into an integer in bytes.\n *\n * If no unit is given, it is assumed the value is in bytes.\n *\n * @param {number|string} val\n *\n * @returns {number|null}\n * @public\n */\n\nfunction parse(val) {\n  if (typeof val === 'number' && !isNaN(val)) {\n    return val;\n  }\n\n  if (typeof val !== 'string') {\n    return null;\n  }\n\n  // Test if the string passed is valid\n  var results = parseRegExp.exec(val);\n  var floatValue;\n  var unit = 'b';\n\n  if (!results) {\n    // Nothing could be extracted from the given string\n    floatValue = parseInt(val, 10);\n    unit = 'b'\n  } else {\n    // Retrieve the value and the unit\n    floatValue = parseFloat(results[1]);\n    unit = results[4].toLowerCase();\n  }\n\n  if (isNaN(floatValue)) {\n    return null;\n  }\n\n  return Math.floor(map[unit] * floatValue);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvYnl0ZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLEVBQUU7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4uL2JhY2tlbmQvbm9kZV9tb2R1bGVzL2J5dGVzL2luZGV4LmpzP2RiYjMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBieXRlc1xuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTUgSmVkIFdhdHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXM7XG5tb2R1bGUuZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXQ7XG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBmb3JtYXRUaG91c2FuZHNSZWdFeHAgPSAvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZztcblxudmFyIGZvcm1hdERlY2ltYWxzUmVnRXhwID0gLyg/OlxcLjAqfChcXC5bXjBdKykwKykkLztcblxudmFyIG1hcCA9IHtcbiAgYjogIDEsXG4gIGtiOiAxIDw8IDEwLFxuICBtYjogMSA8PCAyMCxcbiAgZ2I6IDEgPDwgMzAsXG4gIHRiOiBNYXRoLnBvdygxMDI0LCA0KSxcbiAgcGI6IE1hdGgucG93KDEwMjQsIDUpLFxufTtcblxudmFyIHBhcnNlUmVnRXhwID0gL14oKC18XFwrKT8oXFxkKyg/OlxcLlxcZCspPykpICooa2J8bWJ8Z2J8dGJ8cGIpJC9pO1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIGluIGJ5dGVzIGludG8gYSBzdHJpbmcgb3IgcGFyc2UgdG8gc3RyaW5nIHRvIGFuIGludGVnZXIgaW4gYnl0ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHt7XG4gKiAgY2FzZTogW3N0cmluZ10sXG4gKiAgZGVjaW1hbFBsYWNlczogW251bWJlcl1cbiAqICBmaXhlZERlY2ltYWxzOiBbYm9vbGVhbl1cbiAqICB0aG91c2FuZHNTZXBhcmF0b3I6IFtzdHJpbmddXG4gKiAgdW5pdFNlcGFyYXRvcjogW3N0cmluZ11cbiAqICB9fSBbb3B0aW9uc10gYnl0ZXMgb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfG51bWJlcnxudWxsfVxuICovXG5cbmZ1bmN0aW9uIGJ5dGVzKHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbHVlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBGb3JtYXQgdGhlIGdpdmVuIHZhbHVlIGluIGJ5dGVzIGludG8gYSBzdHJpbmcuXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIG5lZ2F0aXZlLCBpdCBpcyBrZXB0IGFzIHN1Y2guIElmIGl0IGlzIGEgZmxvYXQsXG4gKiBpdCBpcyByb3VuZGVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmRlY2ltYWxQbGFjZXM9Ml1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5maXhlZERlY2ltYWxzPWZhbHNlXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnRob3VzYW5kc1NlcGFyYXRvcj1dXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMudW5pdD1dXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMudW5pdFNlcGFyYXRvcj1dXG4gKlxuICogQHJldHVybnMge3N0cmluZ3xudWxsfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYWcgPSBNYXRoLmFicyh2YWx1ZSk7XG4gIHZhciB0aG91c2FuZHNTZXBhcmF0b3IgPSAob3B0aW9ucyAmJiBvcHRpb25zLnRob3VzYW5kc1NlcGFyYXRvcikgfHwgJyc7XG4gIHZhciB1bml0U2VwYXJhdG9yID0gKG9wdGlvbnMgJiYgb3B0aW9ucy51bml0U2VwYXJhdG9yKSB8fCAnJztcbiAgdmFyIGRlY2ltYWxQbGFjZXMgPSAob3B0aW9ucyAmJiBvcHRpb25zLmRlY2ltYWxQbGFjZXMgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLmRlY2ltYWxQbGFjZXMgOiAyO1xuICB2YXIgZml4ZWREZWNpbWFscyA9IEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLmZpeGVkRGVjaW1hbHMpO1xuICB2YXIgdW5pdCA9IChvcHRpb25zICYmIG9wdGlvbnMudW5pdCkgfHwgJyc7XG5cbiAgaWYgKCF1bml0IHx8ICFtYXBbdW5pdC50b0xvd2VyQ2FzZSgpXSkge1xuICAgIGlmIChtYWcgPj0gbWFwLnBiKSB7XG4gICAgICB1bml0ID0gJ1BCJztcbiAgICB9IGVsc2UgaWYgKG1hZyA+PSBtYXAudGIpIHtcbiAgICAgIHVuaXQgPSAnVEInO1xuICAgIH0gZWxzZSBpZiAobWFnID49IG1hcC5nYikge1xuICAgICAgdW5pdCA9ICdHQic7XG4gICAgfSBlbHNlIGlmIChtYWcgPj0gbWFwLm1iKSB7XG4gICAgICB1bml0ID0gJ01CJztcbiAgICB9IGVsc2UgaWYgKG1hZyA+PSBtYXAua2IpIHtcbiAgICAgIHVuaXQgPSAnS0InO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gJ0InO1xuICAgIH1cbiAgfVxuXG4gIHZhciB2YWwgPSB2YWx1ZSAvIG1hcFt1bml0LnRvTG93ZXJDYXNlKCldO1xuICB2YXIgc3RyID0gdmFsLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XG5cbiAgaWYgKCFmaXhlZERlY2ltYWxzKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoZm9ybWF0RGVjaW1hbHNSZWdFeHAsICckMScpO1xuICB9XG5cbiAgaWYgKHRob3VzYW5kc1NlcGFyYXRvcikge1xuICAgIHN0ciA9IHN0ci5zcGxpdCgnLicpLm1hcChmdW5jdGlvbiAocywgaSkge1xuICAgICAgcmV0dXJuIGkgPT09IDBcbiAgICAgICAgPyBzLnJlcGxhY2UoZm9ybWF0VGhvdXNhbmRzUmVnRXhwLCB0aG91c2FuZHNTZXBhcmF0b3IpXG4gICAgICAgIDogc1xuICAgIH0pLmpvaW4oJy4nKTtcbiAgfVxuXG4gIHJldHVybiBzdHIgKyB1bml0U2VwYXJhdG9yICsgdW5pdDtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgc3RyaW5nIHZhbHVlIGludG8gYW4gaW50ZWdlciBpbiBieXRlcy5cbiAqXG4gKiBJZiBubyB1bml0IGlzIGdpdmVuLCBpdCBpcyBhc3N1bWVkIHRoZSB2YWx1ZSBpcyBpbiBieXRlcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbFxuICpcbiAqIEByZXR1cm5zIHtudW1iZXJ8bnVsbH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZSh2YWwpIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmICFpc05hTih2YWwpKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gVGVzdCBpZiB0aGUgc3RyaW5nIHBhc3NlZCBpcyB2YWxpZFxuICB2YXIgcmVzdWx0cyA9IHBhcnNlUmVnRXhwLmV4ZWModmFsKTtcbiAgdmFyIGZsb2F0VmFsdWU7XG4gIHZhciB1bml0ID0gJ2InO1xuXG4gIGlmICghcmVzdWx0cykge1xuICAgIC8vIE5vdGhpbmcgY291bGQgYmUgZXh0cmFjdGVkIGZyb20gdGhlIGdpdmVuIHN0cmluZ1xuICAgIGZsb2F0VmFsdWUgPSBwYXJzZUludCh2YWwsIDEwKTtcbiAgICB1bml0ID0gJ2InXG4gIH0gZWxzZSB7XG4gICAgLy8gUmV0cmlldmUgdGhlIHZhbHVlIGFuZCB0aGUgdW5pdFxuICAgIGZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KHJlc3VsdHNbMV0pO1xuICAgIHVuaXQgPSByZXN1bHRzWzRdLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBpZiAoaXNOYU4oZmxvYXRWYWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmZsb29yKG1hcFt1bml0XSAqIGZsb2F0VmFsdWUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../backend/node_modules/bytes/index.js\n");

/***/ })

};
;