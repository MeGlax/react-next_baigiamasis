"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/content-type";
exports.ids = ["vendor-chunks/content-type"];
exports.modules = {

/***/ "../backend/node_modules/content-type/index.js":
/*!*****************************************************!*\
  !*** ../backend/node_modules/content-type/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*!\n * content-type\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * RegExp to match *( \";\" parameter ) in RFC 7231 sec 3.1.1.1\n *\n * parameter     = token \"=\" ( token / quoted-string )\n * token         = 1*tchar\n * tchar         = \"!\" / \"#\" / \"$\" / \"%\" / \"&\" / \"'\" / \"*\"\n *               / \"+\" / \"-\" / \".\" / \"^\" / \"_\" / \"`\" / \"|\" / \"~\"\n *               / DIGIT / ALPHA\n *               ; any VCHAR, except delimiters\n * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE\n * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text\n * obs-text      = %x80-FF\n * quoted-pair   = \"\\\" ( HTAB / SP / VCHAR / obs-text )\n */\nvar PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *(\"(?:[\\u000b\\u0020\\u0021\\u0023-\\u005b\\u005d-\\u007e\\u0080-\\u00ff]|\\\\[\\u000b\\u0020-\\u00ff])*\"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g // eslint-disable-line no-control-regex\nvar TEXT_REGEXP = /^[\\u000b\\u0020-\\u007e\\u0080-\\u00ff]+$/ // eslint-disable-line no-control-regex\nvar TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/\n\n/**\n * RegExp to match quoted-pair in RFC 7230 sec 3.2.6\n *\n * quoted-pair = \"\\\" ( HTAB / SP / VCHAR / obs-text )\n * obs-text    = %x80-FF\n */\nvar QESC_REGEXP = /\\\\([\\u000b\\u0020-\\u00ff])/g // eslint-disable-line no-control-regex\n\n/**\n * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6\n */\nvar QUOTE_REGEXP = /([\\\\\"])/g\n\n/**\n * RegExp to match type in RFC 7231 sec 3.1.1.1\n *\n * media-type = type \"/\" subtype\n * type       = token\n * subtype    = token\n */\nvar TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/\n\n/**\n * Module exports.\n * @public\n */\n\nexports.format = format\nexports.parse = parse\n\n/**\n * Format object to media type.\n *\n * @param {object} obj\n * @return {string}\n * @public\n */\n\nfunction format (obj) {\n  if (!obj || typeof obj !== 'object') {\n    throw new TypeError('argument obj is required')\n  }\n\n  var parameters = obj.parameters\n  var type = obj.type\n\n  if (!type || !TYPE_REGEXP.test(type)) {\n    throw new TypeError('invalid type')\n  }\n\n  var string = type\n\n  // append parameters\n  if (parameters && typeof parameters === 'object') {\n    var param\n    var params = Object.keys(parameters).sort()\n\n    for (var i = 0; i < params.length; i++) {\n      param = params[i]\n\n      if (!TOKEN_REGEXP.test(param)) {\n        throw new TypeError('invalid parameter name')\n      }\n\n      string += '; ' + param + '=' + qstring(parameters[param])\n    }\n  }\n\n  return string\n}\n\n/**\n * Parse media type to object.\n *\n * @param {string|object} string\n * @return {Object}\n * @public\n */\n\nfunction parse (string) {\n  if (!string) {\n    throw new TypeError('argument string is required')\n  }\n\n  // support req/res-like objects as argument\n  var header = typeof string === 'object'\n    ? getcontenttype(string)\n    : string\n\n  if (typeof header !== 'string') {\n    throw new TypeError('argument string is required to be a string')\n  }\n\n  var index = header.indexOf(';')\n  var type = index !== -1\n    ? header.slice(0, index).trim()\n    : header.trim()\n\n  if (!TYPE_REGEXP.test(type)) {\n    throw new TypeError('invalid media type')\n  }\n\n  var obj = new ContentType(type.toLowerCase())\n\n  // parse parameters\n  if (index !== -1) {\n    var key\n    var match\n    var value\n\n    PARAM_REGEXP.lastIndex = index\n\n    while ((match = PARAM_REGEXP.exec(header))) {\n      if (match.index !== index) {\n        throw new TypeError('invalid parameter format')\n      }\n\n      index += match[0].length\n      key = match[1].toLowerCase()\n      value = match[2]\n\n      if (value.charCodeAt(0) === 0x22 /* \" */) {\n        // remove quotes\n        value = value.slice(1, -1)\n\n        // remove escapes\n        if (value.indexOf('\\\\') !== -1) {\n          value = value.replace(QESC_REGEXP, '$1')\n        }\n      }\n\n      obj.parameters[key] = value\n    }\n\n    if (index !== header.length) {\n      throw new TypeError('invalid parameter format')\n    }\n  }\n\n  return obj\n}\n\n/**\n * Get content-type from req/res objects.\n *\n * @param {object}\n * @return {Object}\n * @private\n */\n\nfunction getcontenttype (obj) {\n  var header\n\n  if (typeof obj.getHeader === 'function') {\n    // res-like\n    header = obj.getHeader('content-type')\n  } else if (typeof obj.headers === 'object') {\n    // req-like\n    header = obj.headers && obj.headers['content-type']\n  }\n\n  if (typeof header !== 'string') {\n    throw new TypeError('content-type header is missing from object')\n  }\n\n  return header\n}\n\n/**\n * Quote a string if necessary.\n *\n * @param {string} val\n * @return {string}\n * @private\n */\n\nfunction qstring (val) {\n  var str = String(val)\n\n  // no need to quote tokens\n  if (TOKEN_REGEXP.test(str)) {\n    return str\n  }\n\n  if (str.length > 0 && !TEXT_REGEXP.test(str)) {\n    throw new TypeError('invalid parameter value')\n  }\n\n  return '\"' + str.replace(QUOTE_REGEXP, '\\\\$1') + '\"'\n}\n\n/**\n * Class to represent a content type.\n * @private\n */\nfunction ContentType (type) {\n  this.parameters = Object.create(null)\n  this.type = type\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvY29udGVudC10eXBlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVo7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4uL2JhY2tlbmQvbm9kZV9tb2R1bGVzL2NvbnRlbnQtdHlwZS9pbmRleC5qcz82OGQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogY29udGVudC10eXBlXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoICooIFwiO1wiIHBhcmFtZXRlciApIGluIFJGQyA3MjMxIHNlYyAzLjEuMS4xXG4gKlxuICogcGFyYW1ldGVyICAgICA9IHRva2VuIFwiPVwiICggdG9rZW4gLyBxdW90ZWQtc3RyaW5nIClcbiAqIHRva2VuICAgICAgICAgPSAxKnRjaGFyXG4gKiB0Y2hhciAgICAgICAgID0gXCIhXCIgLyBcIiNcIiAvIFwiJFwiIC8gXCIlXCIgLyBcIiZcIiAvIFwiJ1wiIC8gXCIqXCJcbiAqICAgICAgICAgICAgICAgLyBcIitcIiAvIFwiLVwiIC8gXCIuXCIgLyBcIl5cIiAvIFwiX1wiIC8gXCJgXCIgLyBcInxcIiAvIFwiflwiXG4gKiAgICAgICAgICAgICAgIC8gRElHSVQgLyBBTFBIQVxuICogICAgICAgICAgICAgICA7IGFueSBWQ0hBUiwgZXhjZXB0IGRlbGltaXRlcnNcbiAqIHF1b3RlZC1zdHJpbmcgPSBEUVVPVEUgKiggcWR0ZXh0IC8gcXVvdGVkLXBhaXIgKSBEUVVPVEVcbiAqIHFkdGV4dCAgICAgICAgPSBIVEFCIC8gU1AgLyAleDIxIC8gJXgyMy01QiAvICV4NUQtN0UgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqIHF1b3RlZC1wYWlyICAgPSBcIlxcXCIgKCBIVEFCIC8gU1AgLyBWQ0hBUiAvIG9icy10ZXh0IClcbiAqL1xudmFyIFBBUkFNX1JFR0VYUCA9IC87ICooWyEjJCUmJyorLl5fYHx+MC05QS1aYS16LV0rKSAqPSAqKFwiKD86W1xcdTAwMGJcXHUwMDIwXFx1MDAyMVxcdTAwMjMtXFx1MDA1YlxcdTAwNWQtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl18XFxcXFtcXHUwMDBiXFx1MDAyMC1cXHUwMGZmXSkqXCJ8WyEjJCUmJyorLl5fYHx+MC05QS1aYS16LV0rKSAqL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG52YXIgVEVYVF9SRUdFWFAgPSAvXltcXHUwMDBiXFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbnZhciBUT0tFTl9SRUdFWFAgPSAvXlshIyQlJicqKy5eX2B8fjAtOUEtWmEtei1dKyQvXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIHF1b3RlZC1wYWlyIGluIFJGQyA3MjMwIHNlYyAzLjIuNlxuICpcbiAqIHF1b3RlZC1wYWlyID0gXCJcXFwiICggSFRBQiAvIFNQIC8gVkNIQVIgLyBvYnMtdGV4dCApXG4gKiBvYnMtdGV4dCAgICA9ICV4ODAtRkZcbiAqL1xudmFyIFFFU0NfUkVHRVhQID0gL1xcXFwoW1xcdTAwMGJcXHUwMDIwLVxcdTAwZmZdKS9nIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBjaGFycyB0aGF0IG11c3QgYmUgcXVvdGVkLXBhaXIgaW4gUkZDIDcyMzAgc2VjIDMuMi42XG4gKi9cbnZhciBRVU9URV9SRUdFWFAgPSAvKFtcXFxcXCJdKS9nXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIHR5cGUgaW4gUkZDIDcyMzEgc2VjIDMuMS4xLjFcbiAqXG4gKiBtZWRpYS10eXBlID0gdHlwZSBcIi9cIiBzdWJ0eXBlXG4gKiB0eXBlICAgICAgID0gdG9rZW5cbiAqIHN1YnR5cGUgICAgPSB0b2tlblxuICovXG52YXIgVFlQRV9SRUdFWFAgPSAvXlshIyQlJicqKy5eX2B8fjAtOUEtWmEtei1dK1xcL1shIyQlJicqKy5eX2B8fjAtOUEtWmEtei1dKyQvXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXRcbmV4cG9ydHMucGFyc2UgPSBwYXJzZVxuXG4vKipcbiAqIEZvcm1hdCBvYmplY3QgdG8gbWVkaWEgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0IChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBvYmogaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgdmFyIHBhcmFtZXRlcnMgPSBvYmoucGFyYW1ldGVyc1xuICB2YXIgdHlwZSA9IG9iai50eXBlXG5cbiAgaWYgKCF0eXBlIHx8ICFUWVBFX1JFR0VYUC50ZXN0KHR5cGUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCB0eXBlJylcbiAgfVxuXG4gIHZhciBzdHJpbmcgPSB0eXBlXG5cbiAgLy8gYXBwZW5kIHBhcmFtZXRlcnNcbiAgaWYgKHBhcmFtZXRlcnMgJiYgdHlwZW9mIHBhcmFtZXRlcnMgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHBhcmFtXG4gICAgdmFyIHBhcmFtcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLnNvcnQoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhcmFtID0gcGFyYW1zW2ldXG5cbiAgICAgIGlmICghVE9LRU5fUkVHRVhQLnRlc3QocGFyYW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIG5hbWUnKVxuICAgICAgfVxuXG4gICAgICBzdHJpbmcgKz0gJzsgJyArIHBhcmFtICsgJz0nICsgcXN0cmluZyhwYXJhbWV0ZXJzW3BhcmFtXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nXG59XG5cbi8qKlxuICogUGFyc2UgbWVkaWEgdHlwZSB0byBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBzdHJpbmdcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZSAoc3RyaW5nKSB7XG4gIGlmICghc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyaW5nIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIC8vIHN1cHBvcnQgcmVxL3Jlcy1saWtlIG9iamVjdHMgYXMgYXJndW1lbnRcbiAgdmFyIGhlYWRlciA9IHR5cGVvZiBzdHJpbmcgPT09ICdvYmplY3QnXG4gICAgPyBnZXRjb250ZW50dHlwZShzdHJpbmcpXG4gICAgOiBzdHJpbmdcblxuICBpZiAodHlwZW9mIGhlYWRlciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzdHJpbmcgaXMgcmVxdWlyZWQgdG8gYmUgYSBzdHJpbmcnKVxuICB9XG5cbiAgdmFyIGluZGV4ID0gaGVhZGVyLmluZGV4T2YoJzsnKVxuICB2YXIgdHlwZSA9IGluZGV4ICE9PSAtMVxuICAgID8gaGVhZGVyLnNsaWNlKDAsIGluZGV4KS50cmltKClcbiAgICA6IGhlYWRlci50cmltKClcblxuICBpZiAoIVRZUEVfUkVHRVhQLnRlc3QodHlwZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIG1lZGlhIHR5cGUnKVxuICB9XG5cbiAgdmFyIG9iaiA9IG5ldyBDb250ZW50VHlwZSh0eXBlLnRvTG93ZXJDYXNlKCkpXG5cbiAgLy8gcGFyc2UgcGFyYW1ldGVyc1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdmFyIGtleVxuICAgIHZhciBtYXRjaFxuICAgIHZhciB2YWx1ZVxuXG4gICAgUEFSQU1fUkVHRVhQLmxhc3RJbmRleCA9IGluZGV4XG5cbiAgICB3aGlsZSAoKG1hdGNoID0gUEFSQU1fUkVHRVhQLmV4ZWMoaGVhZGVyKSkpIHtcbiAgICAgIGlmIChtYXRjaC5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBwYXJhbWV0ZXIgZm9ybWF0JylcbiAgICAgIH1cblxuICAgICAgaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICBrZXkgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpXG4gICAgICB2YWx1ZSA9IG1hdGNoWzJdXG5cbiAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAweDIyIC8qIFwiICovKSB7XG4gICAgICAgIC8vIHJlbW92ZSBxdW90ZXNcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSlcblxuICAgICAgICAvLyByZW1vdmUgZXNjYXBlc1xuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignXFxcXCcpICE9PSAtMSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShRRVNDX1JFR0VYUCwgJyQxJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvYmoucGFyYW1ldGVyc1trZXldID0gdmFsdWVcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggIT09IGhlYWRlci5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIGZvcm1hdCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG4vKipcbiAqIEdldCBjb250ZW50LXR5cGUgZnJvbSByZXEvcmVzIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdldGNvbnRlbnR0eXBlIChvYmopIHtcbiAgdmFyIGhlYWRlclxuXG4gIGlmICh0eXBlb2Ygb2JqLmdldEhlYWRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIHJlcy1saWtlXG4gICAgaGVhZGVyID0gb2JqLmdldEhlYWRlcignY29udGVudC10eXBlJylcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqLmhlYWRlcnMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gcmVxLWxpa2VcbiAgICBoZWFkZXIgPSBvYmouaGVhZGVycyAmJiBvYmouaGVhZGVyc1snY29udGVudC10eXBlJ11cbiAgfVxuXG4gIGlmICh0eXBlb2YgaGVhZGVyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NvbnRlbnQtdHlwZSBoZWFkZXIgaXMgbWlzc2luZyBmcm9tIG9iamVjdCcpXG4gIH1cblxuICByZXR1cm4gaGVhZGVyXG59XG5cbi8qKlxuICogUXVvdGUgYSBzdHJpbmcgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcXN0cmluZyAodmFsKSB7XG4gIHZhciBzdHIgPSBTdHJpbmcodmFsKVxuXG4gIC8vIG5vIG5lZWQgdG8gcXVvdGUgdG9rZW5zXG4gIGlmIChUT0tFTl9SRUdFWFAudGVzdChzdHIpKSB7XG4gICAgcmV0dXJuIHN0clxuICB9XG5cbiAgaWYgKHN0ci5sZW5ndGggPiAwICYmICFURVhUX1JFR0VYUC50ZXN0KHN0cikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHBhcmFtZXRlciB2YWx1ZScpXG4gIH1cblxuICByZXR1cm4gJ1wiJyArIHN0ci5yZXBsYWNlKFFVT1RFX1JFR0VYUCwgJ1xcXFwkMScpICsgJ1wiJ1xufVxuXG4vKipcbiAqIENsYXNzIHRvIHJlcHJlc2VudCBhIGNvbnRlbnQgdHlwZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIENvbnRlbnRUeXBlICh0eXBlKSB7XG4gIHRoaXMucGFyYW1ldGVycyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy50eXBlID0gdHlwZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../backend/node_modules/content-type/index.js\n");

/***/ })

};
;