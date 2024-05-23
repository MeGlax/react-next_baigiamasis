"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ee-first";
exports.ids = ["vendor-chunks/ee-first"];
exports.modules = {

/***/ "../backend/node_modules/ee-first/index.js":
/*!*************************************************!*\
  !*** ../backend/node_modules/ee-first/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/*!\n * ee-first\n * Copyright(c) 2014 Jonathan Ong\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = first\n\n/**\n * Get the first event in a set of event emitters and event pairs.\n *\n * @param {array} stuff\n * @param {function} done\n * @public\n */\n\nfunction first(stuff, done) {\n  if (!Array.isArray(stuff))\n    throw new TypeError('arg must be an array of [ee, events...] arrays')\n\n  var cleanups = []\n\n  for (var i = 0; i < stuff.length; i++) {\n    var arr = stuff[i]\n\n    if (!Array.isArray(arr) || arr.length < 2)\n      throw new TypeError('each array member must be [ee, events...]')\n\n    var ee = arr[0]\n\n    for (var j = 1; j < arr.length; j++) {\n      var event = arr[j]\n      var fn = listener(event, callback)\n\n      // listen to the event\n      ee.on(event, fn)\n      // push this listener to the list of cleanups\n      cleanups.push({\n        ee: ee,\n        event: event,\n        fn: fn,\n      })\n    }\n  }\n\n  function callback() {\n    cleanup()\n    done.apply(null, arguments)\n  }\n\n  function cleanup() {\n    var x\n    for (var i = 0; i < cleanups.length; i++) {\n      x = cleanups[i]\n      x.ee.removeListener(x.event, x.fn)\n    }\n  }\n\n  function thunk(fn) {\n    done = fn\n  }\n\n  thunk.cancel = cleanup\n\n  return thunk\n}\n\n/**\n * Create the event listener.\n * @private\n */\n\nfunction listener(event, done) {\n  return function onevent(arg1) {\n    var args = new Array(arguments.length)\n    var ee = this\n    var err = event === 'error'\n      ? arg1\n      : null\n\n    // copy args to prevent arguments escaping scope\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i]\n    }\n\n    done(err, ee, event, args)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvZWUtZmlyc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixrQkFBa0I7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uLi9iYWNrZW5kL25vZGVfbW9kdWxlcy9lZS1maXJzdC9pbmRleC5qcz9jODljIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZWUtZmlyc3RcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmaXJzdFxuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgZXZlbnQgaW4gYSBzZXQgb2YgZXZlbnQgZW1pdHRlcnMgYW5kIGV2ZW50IHBhaXJzLlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IHN0dWZmXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkb25lXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZmlyc3Qoc3R1ZmYsIGRvbmUpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHN0dWZmKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmcgbXVzdCBiZSBhbiBhcnJheSBvZiBbZWUsIGV2ZW50cy4uLl0gYXJyYXlzJylcblxuICB2YXIgY2xlYW51cHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R1ZmYubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYXJyID0gc3R1ZmZbaV1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyci5sZW5ndGggPCAyKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZWFjaCBhcnJheSBtZW1iZXIgbXVzdCBiZSBbZWUsIGV2ZW50cy4uLl0nKVxuXG4gICAgdmFyIGVlID0gYXJyWzBdXG5cbiAgICBmb3IgKHZhciBqID0gMTsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIGV2ZW50ID0gYXJyW2pdXG4gICAgICB2YXIgZm4gPSBsaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG5cbiAgICAgIC8vIGxpc3RlbiB0byB0aGUgZXZlbnRcbiAgICAgIGVlLm9uKGV2ZW50LCBmbilcbiAgICAgIC8vIHB1c2ggdGhpcyBsaXN0ZW5lciB0byB0aGUgbGlzdCBvZiBjbGVhbnVwc1xuICAgICAgY2xlYW51cHMucHVzaCh7XG4gICAgICAgIGVlOiBlZSxcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICBmbjogZm4sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgIGNsZWFudXAoKVxuICAgIGRvbmUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgeFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xlYW51cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHggPSBjbGVhbnVwc1tpXVxuICAgICAgeC5lZS5yZW1vdmVMaXN0ZW5lcih4LmV2ZW50LCB4LmZuKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRodW5rKGZuKSB7XG4gICAgZG9uZSA9IGZuXG4gIH1cblxuICB0aHVuay5jYW5jZWwgPSBjbGVhbnVwXG5cbiAgcmV0dXJuIHRodW5rXG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBldmVudCBsaXN0ZW5lci5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbGlzdGVuZXIoZXZlbnQsIGRvbmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uZXZlbnQoYXJnMSkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgdmFyIGVlID0gdGhpc1xuICAgIHZhciBlcnIgPSBldmVudCA9PT0gJ2Vycm9yJ1xuICAgICAgPyBhcmcxXG4gICAgICA6IG51bGxcblxuICAgIC8vIGNvcHkgYXJncyB0byBwcmV2ZW50IGFyZ3VtZW50cyBlc2NhcGluZyBzY29wZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cblxuICAgIGRvbmUoZXJyLCBlZSwgZXZlbnQsIGFyZ3MpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../backend/node_modules/ee-first/index.js\n");

/***/ })

};
;