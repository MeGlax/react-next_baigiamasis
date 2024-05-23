/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/path-to-regexp";
exports.ids = ["vendor-chunks/path-to-regexp"];
exports.modules = {

/***/ "../backend/node_modules/path-to-regexp/index.js":
/*!*******************************************************!*\
  !*** ../backend/node_modules/path-to-regexp/index.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("/**\n * Expose `pathtoRegexp`.\n */\n\nmodule.exports = pathtoRegexp;\n\n/**\n * Match matching groups in a regular expression.\n */\nvar MATCHING_GROUP_REGEXP = /\\((?!\\?)/g;\n\n/**\n * Normalize the given path string,\n * returning a regular expression.\n *\n * An empty array should be passed,\n * which will contain the placeholder\n * key names. For example \"/user/:id\" will\n * then contain [\"id\"].\n *\n * @param  {String|RegExp|Array} path\n * @param  {Array} keys\n * @param  {Object} options\n * @return {RegExp}\n * @api private\n */\n\nfunction pathtoRegexp(path, keys, options) {\n  options = options || {};\n  keys = keys || [];\n  var strict = options.strict;\n  var end = options.end !== false;\n  var flags = options.sensitive ? '' : 'i';\n  var extraOffset = 0;\n  var keysOffset = keys.length;\n  var i = 0;\n  var name = 0;\n  var m;\n\n  if (path instanceof RegExp) {\n    while (m = MATCHING_GROUP_REGEXP.exec(path.source)) {\n      keys.push({\n        name: name++,\n        optional: false,\n        offset: m.index\n      });\n    }\n\n    return path;\n  }\n\n  if (Array.isArray(path)) {\n    // Map array parts into regexps and return their source. We also pass\n    // the same keys and options instance into every generation to get\n    // consistent matching groups before we join the sources together.\n    path = path.map(function (value) {\n      return pathtoRegexp(value, keys, options).source;\n    });\n\n    return new RegExp('(?:' + path.join('|') + ')', flags);\n  }\n\n  path = ('^' + path + (strict ? '' : path[path.length - 1] === '/' ? '?' : '/?'))\n    .replace(/\\/\\(/g, '/(?:')\n    .replace(/([\\/\\.])/g, '\\\\$1')\n    .replace(/(\\\\\\/)?(\\\\\\.)?:(\\w+)(\\(.*?\\))?(\\*)?(\\?)?/g, function (match, slash, format, key, capture, star, optional, offset) {\n      slash = slash || '';\n      format = format || '';\n      capture = capture || '([^\\\\/' + format + ']+?)';\n      optional = optional || '';\n\n      keys.push({\n        name: key,\n        optional: !!optional,\n        offset: offset + extraOffset\n      });\n\n      var result = ''\n        + (optional ? '' : slash)\n        + '(?:'\n        + format + (optional ? slash : '') + capture\n        + (star ? '((?:[\\\\/' + format + '].+?)?)' : '')\n        + ')'\n        + optional;\n\n      extraOffset += result.length - match.length;\n\n      return result;\n    })\n    .replace(/\\*/g, function (star, index) {\n      var len = keys.length\n\n      while (len-- > keysOffset && keys[len].offset > index) {\n        keys[len].offset += 3; // Replacement length minus asterisk length.\n      }\n\n      return '(.*)';\n    });\n\n  // This is a workaround for handling unnamed matching groups.\n  while (m = MATCHING_GROUP_REGEXP.exec(path)) {\n    var escapeCount = 0;\n    var index = m.index;\n\n    while (path.charAt(--index) === '\\\\') {\n      escapeCount++;\n    }\n\n    // It's possible to escape the bracket.\n    if (escapeCount % 2 === 1) {\n      continue;\n    }\n\n    if (keysOffset + i === keys.length || keys[keysOffset + i].offset > m.index) {\n      keys.splice(keysOffset + i, 0, {\n        name: name++, // Unnamed matching groups must be consistently linear.\n        optional: false,\n        offset: m.index\n      });\n    }\n\n    i++;\n  }\n\n  // If the path is non-ending, match until the end or a slash.\n  path += (end ? '$' : (path[path.length - 1] === '/' ? '' : '(?=\\\\/|$)'));\n\n  return new RegExp(path, flags);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUJBQXFCO0FBQ2pDLFlBQVksT0FBTztBQUNuQixZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uLi9iYWNrZW5kL25vZGVfbW9kdWxlcy9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcz8xMTI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXhwb3NlIGBwYXRodG9SZWdleHBgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aHRvUmVnZXhwO1xuXG4vKipcbiAqIE1hdGNoIG1hdGNoaW5nIGdyb3VwcyBpbiBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqL1xudmFyIE1BVENISU5HX0dST1VQX1JFR0VYUCA9IC9cXCgoPyFcXD8pL2c7XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZyxcbiAqIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBzaG91bGQgYmUgcGFzc2VkLFxuICogd2hpY2ggd2lsbCBjb250YWluIHRoZSBwbGFjZWhvbGRlclxuICoga2V5IG5hbWVzLiBGb3IgZXhhbXBsZSBcIi91c2VyLzppZFwiIHdpbGxcbiAqIHRoZW4gY29udGFpbiBbXCJpZFwiXS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd8UmVnRXhwfEFycmF5fSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXRodG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAga2V5cyA9IGtleXMgfHwgW107XG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdDtcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZTtcbiAgdmFyIGZsYWdzID0gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJztcbiAgdmFyIGV4dHJhT2Zmc2V0ID0gMDtcbiAgdmFyIGtleXNPZmZzZXQgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbmFtZSA9IDA7XG4gIHZhciBtO1xuXG4gIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgd2hpbGUgKG0gPSBNQVRDSElOR19HUk9VUF9SRUdFWFAuZXhlYyhwYXRoLnNvdXJjZSkpIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IG5hbWUrKyxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICBvZmZzZXQ6IG0uaW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICAvLyBNYXAgYXJyYXkgcGFydHMgaW50byByZWdleHBzIGFuZCByZXR1cm4gdGhlaXIgc291cmNlLiBXZSBhbHNvIHBhc3NcbiAgICAvLyB0aGUgc2FtZSBrZXlzIGFuZCBvcHRpb25zIGluc3RhbmNlIGludG8gZXZlcnkgZ2VuZXJhdGlvbiB0byBnZXRcbiAgICAvLyBjb25zaXN0ZW50IG1hdGNoaW5nIGdyb3VwcyBiZWZvcmUgd2Ugam9pbiB0aGUgc291cmNlcyB0b2dldGhlci5cbiAgICBwYXRoID0gcGF0aC5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGF0aHRvUmVnZXhwKHZhbHVlLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86JyArIHBhdGguam9pbignfCcpICsgJyknLCBmbGFncyk7XG4gIH1cblxuICBwYXRoID0gKCdeJyArIHBhdGggKyAoc3RyaWN0ID8gJycgOiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJyA/ICc/JyA6ICcvPycpKVxuICAgIC5yZXBsYWNlKC9cXC9cXCgvZywgJy8oPzonKVxuICAgIC5yZXBsYWNlKC8oW1xcL1xcLl0pL2csICdcXFxcJDEnKVxuICAgIC5yZXBsYWNlKC8oXFxcXFxcLyk/KFxcXFxcXC4pPzooXFx3KykoXFwoLio/XFwpKT8oXFwqKT8oXFw/KT8vZywgZnVuY3Rpb24gKG1hdGNoLCBzbGFzaCwgZm9ybWF0LCBrZXksIGNhcHR1cmUsIHN0YXIsIG9wdGlvbmFsLCBvZmZzZXQpIHtcbiAgICAgIHNsYXNoID0gc2xhc2ggfHwgJyc7XG4gICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgICBjYXB0dXJlID0gY2FwdHVyZSB8fCAnKFteXFxcXC8nICsgZm9ybWF0ICsgJ10rPyknO1xuICAgICAgb3B0aW9uYWwgPSBvcHRpb25hbCB8fCAnJztcblxuICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgbmFtZToga2V5LFxuICAgICAgICBvcHRpb25hbDogISFvcHRpb25hbCxcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQgKyBleHRyYU9mZnNldFxuICAgICAgfSk7XG5cbiAgICAgIHZhciByZXN1bHQgPSAnJ1xuICAgICAgICArIChvcHRpb25hbCA/ICcnIDogc2xhc2gpXG4gICAgICAgICsgJyg/OidcbiAgICAgICAgKyBmb3JtYXQgKyAob3B0aW9uYWwgPyBzbGFzaCA6ICcnKSArIGNhcHR1cmVcbiAgICAgICAgKyAoc3RhciA/ICcoKD86W1xcXFwvJyArIGZvcm1hdCArICddLis/KT8pJyA6ICcnKVxuICAgICAgICArICcpJ1xuICAgICAgICArIG9wdGlvbmFsO1xuXG4gICAgICBleHRyYU9mZnNldCArPSByZXN1bHQubGVuZ3RoIC0gbWF0Y2gubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pXG4gICAgLnJlcGxhY2UoL1xcKi9nLCBmdW5jdGlvbiAoc3RhciwgaW5kZXgpIHtcbiAgICAgIHZhciBsZW4gPSBrZXlzLmxlbmd0aFxuXG4gICAgICB3aGlsZSAobGVuLS0gPiBrZXlzT2Zmc2V0ICYmIGtleXNbbGVuXS5vZmZzZXQgPiBpbmRleCkge1xuICAgICAgICBrZXlzW2xlbl0ub2Zmc2V0ICs9IDM7IC8vIFJlcGxhY2VtZW50IGxlbmd0aCBtaW51cyBhc3RlcmlzayBsZW5ndGguXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnKC4qKSc7XG4gICAgfSk7XG5cbiAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIGhhbmRsaW5nIHVubmFtZWQgbWF0Y2hpbmcgZ3JvdXBzLlxuICB3aGlsZSAobSA9IE1BVENISU5HX0dST1VQX1JFR0VYUC5leGVjKHBhdGgpKSB7XG4gICAgdmFyIGVzY2FwZUNvdW50ID0gMDtcbiAgICB2YXIgaW5kZXggPSBtLmluZGV4O1xuXG4gICAgd2hpbGUgKHBhdGguY2hhckF0KC0taW5kZXgpID09PSAnXFxcXCcpIHtcbiAgICAgIGVzY2FwZUNvdW50Kys7XG4gICAgfVxuXG4gICAgLy8gSXQncyBwb3NzaWJsZSB0byBlc2NhcGUgdGhlIGJyYWNrZXQuXG4gICAgaWYgKGVzY2FwZUNvdW50ICUgMiA9PT0gMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGtleXNPZmZzZXQgKyBpID09PSBrZXlzLmxlbmd0aCB8fCBrZXlzW2tleXNPZmZzZXQgKyBpXS5vZmZzZXQgPiBtLmluZGV4KSB7XG4gICAgICBrZXlzLnNwbGljZShrZXlzT2Zmc2V0ICsgaSwgMCwge1xuICAgICAgICBuYW1lOiBuYW1lKyssIC8vIFVubmFtZWQgbWF0Y2hpbmcgZ3JvdXBzIG11c3QgYmUgY29uc2lzdGVudGx5IGxpbmVhci5cbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICBvZmZzZXQ6IG0uaW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGkrKztcbiAgfVxuXG4gIC8vIElmIHRoZSBwYXRoIGlzIG5vbi1lbmRpbmcsIG1hdGNoIHVudGlsIHRoZSBlbmQgb3IgYSBzbGFzaC5cbiAgcGF0aCArPSAoZW5kID8gJyQnIDogKHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nID8gJycgOiAnKD89XFxcXC98JCknKSk7XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocGF0aCwgZmxhZ3MpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../backend/node_modules/path-to-regexp/index.js\n");

/***/ })

};
;