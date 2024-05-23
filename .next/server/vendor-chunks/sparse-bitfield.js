/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sparse-bitfield";
exports.ids = ["vendor-chunks/sparse-bitfield"];
exports.modules = {

/***/ "../backend/node_modules/sparse-bitfield/index.js":
/*!********************************************************!*\
  !*** ../backend/node_modules/sparse-bitfield/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pager = __webpack_require__(/*! memory-pager */ \"../backend/node_modules/memory-pager/index.js\")\n\nmodule.exports = Bitfield\n\nfunction Bitfield (opts) {\n  if (!(this instanceof Bitfield)) return new Bitfield(opts)\n  if (!opts) opts = {}\n  if (Buffer.isBuffer(opts)) opts = {buffer: opts}\n\n  this.pageOffset = opts.pageOffset || 0\n  this.pageSize = opts.pageSize || 1024\n  this.pages = opts.pages || pager(this.pageSize)\n\n  this.byteLength = this.pages.length * this.pageSize\n  this.length = 8 * this.byteLength\n\n  if (!powerOfTwo(this.pageSize)) throw new Error('The page size should be a power of two')\n\n  this._trackUpdates = !!opts.trackUpdates\n  this._pageMask = this.pageSize - 1\n\n  if (opts.buffer) {\n    for (var i = 0; i < opts.buffer.length; i += this.pageSize) {\n      this.pages.set(i / this.pageSize, opts.buffer.slice(i, i + this.pageSize))\n    }\n    this.byteLength = opts.buffer.length\n    this.length = 8 * this.byteLength\n  }\n}\n\nBitfield.prototype.get = function (i) {\n  var o = i & 7\n  var j = (i - o) / 8\n\n  return !!(this.getByte(j) & (128 >> o))\n}\n\nBitfield.prototype.getByte = function (i) {\n  var o = i & this._pageMask\n  var j = (i - o) / this.pageSize\n  var page = this.pages.get(j, true)\n\n  return page ? page.buffer[o + this.pageOffset] : 0\n}\n\nBitfield.prototype.set = function (i, v) {\n  var o = i & 7\n  var j = (i - o) / 8\n  var b = this.getByte(j)\n\n  return this.setByte(j, v ? b | (128 >> o) : b & (255 ^ (128 >> o)))\n}\n\nBitfield.prototype.toBuffer = function () {\n  var all = alloc(this.pages.length * this.pageSize)\n\n  for (var i = 0; i < this.pages.length; i++) {\n    var next = this.pages.get(i, true)\n    var allOffset = i * this.pageSize\n    if (next) next.buffer.copy(all, allOffset, this.pageOffset, this.pageOffset + this.pageSize)\n  }\n\n  return all\n}\n\nBitfield.prototype.setByte = function (i, b) {\n  var o = i & this._pageMask\n  var j = (i - o) / this.pageSize\n  var page = this.pages.get(j, false)\n\n  o += this.pageOffset\n\n  if (page.buffer[o] === b) return false\n  page.buffer[o] = b\n\n  if (i >= this.byteLength) {\n    this.byteLength = i + 1\n    this.length = this.byteLength * 8\n  }\n\n  if (this._trackUpdates) this.pages.updated(page)\n\n  return true\n}\n\nfunction alloc (n) {\n  if (Buffer.alloc) return Buffer.alloc(n)\n  var b = new Buffer(n)\n  b.fill(0)\n  return b\n}\n\nfunction powerOfTwo (x) {\n  return !(x & (x - 1))\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvc3BhcnNlLWJpdGZpZWxkL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLFlBQVksbUJBQU8sQ0FBQyxtRUFBYzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvc3BhcnNlLWJpdGZpZWxkL2luZGV4LmpzP2QyMDYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhZ2VyID0gcmVxdWlyZSgnbWVtb3J5LXBhZ2VyJylcblxubW9kdWxlLmV4cG9ydHMgPSBCaXRmaWVsZFxuXG5mdW5jdGlvbiBCaXRmaWVsZCAob3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQml0ZmllbGQpKSByZXR1cm4gbmV3IEJpdGZpZWxkKG9wdHMpXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob3B0cykpIG9wdHMgPSB7YnVmZmVyOiBvcHRzfVxuXG4gIHRoaXMucGFnZU9mZnNldCA9IG9wdHMucGFnZU9mZnNldCB8fCAwXG4gIHRoaXMucGFnZVNpemUgPSBvcHRzLnBhZ2VTaXplIHx8IDEwMjRcbiAgdGhpcy5wYWdlcyA9IG9wdHMucGFnZXMgfHwgcGFnZXIodGhpcy5wYWdlU2l6ZSlcblxuICB0aGlzLmJ5dGVMZW5ndGggPSB0aGlzLnBhZ2VzLmxlbmd0aCAqIHRoaXMucGFnZVNpemVcbiAgdGhpcy5sZW5ndGggPSA4ICogdGhpcy5ieXRlTGVuZ3RoXG5cbiAgaWYgKCFwb3dlck9mVHdvKHRoaXMucGFnZVNpemUpKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwYWdlIHNpemUgc2hvdWxkIGJlIGEgcG93ZXIgb2YgdHdvJylcblxuICB0aGlzLl90cmFja1VwZGF0ZXMgPSAhIW9wdHMudHJhY2tVcGRhdGVzXG4gIHRoaXMuX3BhZ2VNYXNrID0gdGhpcy5wYWdlU2l6ZSAtIDFcblxuICBpZiAob3B0cy5idWZmZXIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdHMuYnVmZmVyLmxlbmd0aDsgaSArPSB0aGlzLnBhZ2VTaXplKSB7XG4gICAgICB0aGlzLnBhZ2VzLnNldChpIC8gdGhpcy5wYWdlU2l6ZSwgb3B0cy5idWZmZXIuc2xpY2UoaSwgaSArIHRoaXMucGFnZVNpemUpKVxuICAgIH1cbiAgICB0aGlzLmJ5dGVMZW5ndGggPSBvcHRzLmJ1ZmZlci5sZW5ndGhcbiAgICB0aGlzLmxlbmd0aCA9IDggKiB0aGlzLmJ5dGVMZW5ndGhcbiAgfVxufVxuXG5CaXRmaWVsZC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGkpIHtcbiAgdmFyIG8gPSBpICYgN1xuICB2YXIgaiA9IChpIC0gbykgLyA4XG5cbiAgcmV0dXJuICEhKHRoaXMuZ2V0Qnl0ZShqKSAmICgxMjggPj4gbykpXG59XG5cbkJpdGZpZWxkLnByb3RvdHlwZS5nZXRCeXRlID0gZnVuY3Rpb24gKGkpIHtcbiAgdmFyIG8gPSBpICYgdGhpcy5fcGFnZU1hc2tcbiAgdmFyIGogPSAoaSAtIG8pIC8gdGhpcy5wYWdlU2l6ZVxuICB2YXIgcGFnZSA9IHRoaXMucGFnZXMuZ2V0KGosIHRydWUpXG5cbiAgcmV0dXJuIHBhZ2UgPyBwYWdlLmJ1ZmZlcltvICsgdGhpcy5wYWdlT2Zmc2V0XSA6IDBcbn1cblxuQml0ZmllbGQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChpLCB2KSB7XG4gIHZhciBvID0gaSAmIDdcbiAgdmFyIGogPSAoaSAtIG8pIC8gOFxuICB2YXIgYiA9IHRoaXMuZ2V0Qnl0ZShqKVxuXG4gIHJldHVybiB0aGlzLnNldEJ5dGUoaiwgdiA/IGIgfCAoMTI4ID4+IG8pIDogYiAmICgyNTUgXiAoMTI4ID4+IG8pKSlcbn1cblxuQml0ZmllbGQucHJvdG90eXBlLnRvQnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYWxsID0gYWxsb2ModGhpcy5wYWdlcy5sZW5ndGggKiB0aGlzLnBhZ2VTaXplKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuZXh0ID0gdGhpcy5wYWdlcy5nZXQoaSwgdHJ1ZSlcbiAgICB2YXIgYWxsT2Zmc2V0ID0gaSAqIHRoaXMucGFnZVNpemVcbiAgICBpZiAobmV4dCkgbmV4dC5idWZmZXIuY29weShhbGwsIGFsbE9mZnNldCwgdGhpcy5wYWdlT2Zmc2V0LCB0aGlzLnBhZ2VPZmZzZXQgKyB0aGlzLnBhZ2VTaXplKVxuICB9XG5cbiAgcmV0dXJuIGFsbFxufVxuXG5CaXRmaWVsZC5wcm90b3R5cGUuc2V0Qnl0ZSA9IGZ1bmN0aW9uIChpLCBiKSB7XG4gIHZhciBvID0gaSAmIHRoaXMuX3BhZ2VNYXNrXG4gIHZhciBqID0gKGkgLSBvKSAvIHRoaXMucGFnZVNpemVcbiAgdmFyIHBhZ2UgPSB0aGlzLnBhZ2VzLmdldChqLCBmYWxzZSlcblxuICBvICs9IHRoaXMucGFnZU9mZnNldFxuXG4gIGlmIChwYWdlLmJ1ZmZlcltvXSA9PT0gYikgcmV0dXJuIGZhbHNlXG4gIHBhZ2UuYnVmZmVyW29dID0gYlxuXG4gIGlmIChpID49IHRoaXMuYnl0ZUxlbmd0aCkge1xuICAgIHRoaXMuYnl0ZUxlbmd0aCA9IGkgKyAxXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmJ5dGVMZW5ndGggKiA4XG4gIH1cblxuICBpZiAodGhpcy5fdHJhY2tVcGRhdGVzKSB0aGlzLnBhZ2VzLnVwZGF0ZWQocGFnZSlcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBhbGxvYyAobikge1xuICBpZiAoQnVmZmVyLmFsbG9jKSByZXR1cm4gQnVmZmVyLmFsbG9jKG4pXG4gIHZhciBiID0gbmV3IEJ1ZmZlcihuKVxuICBiLmZpbGwoMClcbiAgcmV0dXJuIGJcbn1cblxuZnVuY3Rpb24gcG93ZXJPZlR3byAoeCkge1xuICByZXR1cm4gISh4ICYgKHggLSAxKSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../backend/node_modules/sparse-bitfield/index.js\n");

/***/ })

};
;