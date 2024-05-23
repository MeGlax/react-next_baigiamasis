"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/webidl-conversions";
exports.ids = ["vendor-chunks/webidl-conversions"];
exports.modules = {

/***/ "../backend/node_modules/webidl-conversions/lib/index.js":
/*!***************************************************************!*\
  !*** ../backend/node_modules/webidl-conversions/lib/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction makeException(ErrorType, message, options) {\n  if (options.globals) {\n    ErrorType = options.globals[ErrorType.name];\n  }\n  return new ErrorType(`${options.context ? options.context : \"Value\"} ${message}.`);\n}\n\nfunction toNumber(value, options) {\n  if (typeof value === \"bigint\") {\n    throw makeException(TypeError, \"is a BigInt which cannot be converted to a number\", options);\n  }\n  if (!options.globals) {\n    return Number(value);\n  }\n  return options.globals.Number(value);\n}\n\n// Round x to the nearest integer, choosing the even integer if it lies halfway between two.\nfunction evenRound(x) {\n  // There are four cases for numbers with fractional part being .5:\n  //\n  // case |     x     | floor(x) | round(x) | expected | x <> 0 | x % 1 | x & 1 |   example\n  //   1  |  2n + 0.5 |  2n      |  2n + 1  |  2n      |   >    |  0.5  |   0   |  0.5 ->  0\n  //   2  |  2n + 1.5 |  2n + 1  |  2n + 2  |  2n + 2  |   >    |  0.5  |   1   |  1.5 ->  2\n  //   3  | -2n - 0.5 | -2n - 1  | -2n      | -2n      |   <    | -0.5  |   0   | -0.5 ->  0\n  //   4  | -2n - 1.5 | -2n - 2  | -2n - 1  | -2n - 2  |   <    | -0.5  |   1   | -1.5 -> -2\n  // (where n is a non-negative integer)\n  //\n  // Branch here for cases 1 and 4\n  if ((x > 0 && (x % 1) === +0.5 && (x & 1) === 0) ||\n        (x < 0 && (x % 1) === -0.5 && (x & 1) === 1)) {\n    return censorNegativeZero(Math.floor(x));\n  }\n\n  return censorNegativeZero(Math.round(x));\n}\n\nfunction integerPart(n) {\n  return censorNegativeZero(Math.trunc(n));\n}\n\nfunction sign(x) {\n  return x < 0 ? -1 : 1;\n}\n\nfunction modulo(x, y) {\n  // https://tc39.github.io/ecma262/#eqn-modulo\n  // Note that http://stackoverflow.com/a/4467559/3191 does NOT work for large modulos\n  const signMightNotMatch = x % y;\n  if (sign(y) !== sign(signMightNotMatch)) {\n    return signMightNotMatch + y;\n  }\n  return signMightNotMatch;\n}\n\nfunction censorNegativeZero(x) {\n  return x === 0 ? 0 : x;\n}\n\nfunction createIntegerConversion(bitLength, { unsigned }) {\n  let lowerBound, upperBound;\n  if (unsigned) {\n    lowerBound = 0;\n    upperBound = 2 ** bitLength - 1;\n  } else {\n    lowerBound = -(2 ** (bitLength - 1));\n    upperBound = 2 ** (bitLength - 1) - 1;\n  }\n\n  const twoToTheBitLength = 2 ** bitLength;\n  const twoToOneLessThanTheBitLength = 2 ** (bitLength - 1);\n\n  return (value, options = {}) => {\n    let x = toNumber(value, options);\n    x = censorNegativeZero(x);\n\n    if (options.enforceRange) {\n      if (!Number.isFinite(x)) {\n        throw makeException(TypeError, \"is not a finite number\", options);\n      }\n\n      x = integerPart(x);\n\n      if (x < lowerBound || x > upperBound) {\n        throw makeException(\n          TypeError,\n          `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`,\n          options\n        );\n      }\n\n      return x;\n    }\n\n    if (!Number.isNaN(x) && options.clamp) {\n      x = Math.min(Math.max(x, lowerBound), upperBound);\n      x = evenRound(x);\n      return x;\n    }\n\n    if (!Number.isFinite(x) || x === 0) {\n      return 0;\n    }\n    x = integerPart(x);\n\n    // Math.pow(2, 64) is not accurately representable in JavaScript, so try to avoid these per-spec operations if\n    // possible. Hopefully it's an optimization for the non-64-bitLength cases too.\n    if (x >= lowerBound && x <= upperBound) {\n      return x;\n    }\n\n    // These will not work great for bitLength of 64, but oh well. See the README for more details.\n    x = modulo(x, twoToTheBitLength);\n    if (!unsigned && x >= twoToOneLessThanTheBitLength) {\n      return x - twoToTheBitLength;\n    }\n    return x;\n  };\n}\n\nfunction createLongLongConversion(bitLength, { unsigned }) {\n  const upperBound = Number.MAX_SAFE_INTEGER;\n  const lowerBound = unsigned ? 0 : Number.MIN_SAFE_INTEGER;\n  const asBigIntN = unsigned ? BigInt.asUintN : BigInt.asIntN;\n\n  return (value, options = {}) => {\n    let x = toNumber(value, options);\n    x = censorNegativeZero(x);\n\n    if (options.enforceRange) {\n      if (!Number.isFinite(x)) {\n        throw makeException(TypeError, \"is not a finite number\", options);\n      }\n\n      x = integerPart(x);\n\n      if (x < lowerBound || x > upperBound) {\n        throw makeException(\n          TypeError,\n          `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`,\n          options\n        );\n      }\n\n      return x;\n    }\n\n    if (!Number.isNaN(x) && options.clamp) {\n      x = Math.min(Math.max(x, lowerBound), upperBound);\n      x = evenRound(x);\n      return x;\n    }\n\n    if (!Number.isFinite(x) || x === 0) {\n      return 0;\n    }\n\n    let xBigInt = BigInt(integerPart(x));\n    xBigInt = asBigIntN(bitLength, xBigInt);\n    return Number(xBigInt);\n  };\n}\n\nexports.any = value => {\n  return value;\n};\n\nexports.undefined = () => {\n  return undefined;\n};\n\nexports.boolean = value => {\n  return Boolean(value);\n};\n\nexports.byte = createIntegerConversion(8, { unsigned: false });\nexports.octet = createIntegerConversion(8, { unsigned: true });\n\nexports.short = createIntegerConversion(16, { unsigned: false });\nexports[\"unsigned short\"] = createIntegerConversion(16, { unsigned: true });\n\nexports.long = createIntegerConversion(32, { unsigned: false });\nexports[\"unsigned long\"] = createIntegerConversion(32, { unsigned: true });\n\nexports[\"long long\"] = createLongLongConversion(64, { unsigned: false });\nexports[\"unsigned long long\"] = createLongLongConversion(64, { unsigned: true });\n\nexports.double = (value, options = {}) => {\n  const x = toNumber(value, options);\n\n  if (!Number.isFinite(x)) {\n    throw makeException(TypeError, \"is not a finite floating-point value\", options);\n  }\n\n  return x;\n};\n\nexports[\"unrestricted double\"] = (value, options = {}) => {\n  const x = toNumber(value, options);\n\n  return x;\n};\n\nexports.float = (value, options = {}) => {\n  const x = toNumber(value, options);\n\n  if (!Number.isFinite(x)) {\n    throw makeException(TypeError, \"is not a finite floating-point value\", options);\n  }\n\n  if (Object.is(x, -0)) {\n    return x;\n  }\n\n  const y = Math.fround(x);\n\n  if (!Number.isFinite(y)) {\n    throw makeException(TypeError, \"is outside the range of a single-precision floating-point value\", options);\n  }\n\n  return y;\n};\n\nexports[\"unrestricted float\"] = (value, options = {}) => {\n  const x = toNumber(value, options);\n\n  if (isNaN(x)) {\n    return x;\n  }\n\n  if (Object.is(x, -0)) {\n    return x;\n  }\n\n  return Math.fround(x);\n};\n\nexports.DOMString = (value, options = {}) => {\n  if (options.treatNullAsEmptyString && value === null) {\n    return \"\";\n  }\n\n  if (typeof value === \"symbol\") {\n    throw makeException(TypeError, \"is a symbol, which cannot be converted to a string\", options);\n  }\n\n  const StringCtor = options.globals ? options.globals.String : String;\n  return StringCtor(value);\n};\n\nexports.ByteString = (value, options = {}) => {\n  const x = exports.DOMString(value, options);\n  let c;\n  for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {\n    if (c > 255) {\n      throw makeException(TypeError, \"is not a valid ByteString\", options);\n    }\n  }\n\n  return x;\n};\n\nexports.USVString = (value, options = {}) => {\n  const S = exports.DOMString(value, options);\n  const n = S.length;\n  const U = [];\n  for (let i = 0; i < n; ++i) {\n    const c = S.charCodeAt(i);\n    if (c < 0xD800 || c > 0xDFFF) {\n      U.push(String.fromCodePoint(c));\n    } else if (0xDC00 <= c && c <= 0xDFFF) {\n      U.push(String.fromCodePoint(0xFFFD));\n    } else if (i === n - 1) {\n      U.push(String.fromCodePoint(0xFFFD));\n    } else {\n      const d = S.charCodeAt(i + 1);\n      if (0xDC00 <= d && d <= 0xDFFF) {\n        const a = c & 0x3FF;\n        const b = d & 0x3FF;\n        U.push(String.fromCodePoint((2 << 15) + ((2 << 9) * a) + b));\n        ++i;\n      } else {\n        U.push(String.fromCodePoint(0xFFFD));\n      }\n    }\n  }\n\n  return U.join(\"\");\n};\n\nexports.object = (value, options = {}) => {\n  if (value === null || (typeof value !== \"object\" && typeof value !== \"function\")) {\n    throw makeException(TypeError, \"is not an object\", options);\n  }\n\n  return value;\n};\n\nconst abByteLengthGetter =\n    Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, \"byteLength\").get;\nconst sabByteLengthGetter =\n    typeof SharedArrayBuffer === \"function\" ?\n      Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, \"byteLength\").get :\n      null;\n\nfunction isNonSharedArrayBuffer(value) {\n  try {\n    // This will throw on SharedArrayBuffers, but not detached ArrayBuffers.\n    // (The spec says it should throw, but the spec conflicts with implementations: https://github.com/tc39/ecma262/issues/678)\n    abByteLengthGetter.call(value);\n\n    return true;\n  } catch {\n    return false;\n  }\n}\n\nfunction isSharedArrayBuffer(value) {\n  try {\n    sabByteLengthGetter.call(value);\n    return true;\n  } catch {\n    return false;\n  }\n}\n\nfunction isArrayBufferDetached(value) {\n  try {\n    // eslint-disable-next-line no-new\n    new Uint8Array(value);\n    return false;\n  } catch {\n    return true;\n  }\n}\n\nexports.ArrayBuffer = (value, options = {}) => {\n  if (!isNonSharedArrayBuffer(value)) {\n    if (options.allowShared && !isSharedArrayBuffer(value)) {\n      throw makeException(TypeError, \"is not an ArrayBuffer or SharedArrayBuffer\", options);\n    }\n    throw makeException(TypeError, \"is not an ArrayBuffer\", options);\n  }\n  if (isArrayBufferDetached(value)) {\n    throw makeException(TypeError, \"is a detached ArrayBuffer\", options);\n  }\n\n  return value;\n};\n\nconst dvByteLengthGetter =\n    Object.getOwnPropertyDescriptor(DataView.prototype, \"byteLength\").get;\nexports.DataView = (value, options = {}) => {\n  try {\n    dvByteLengthGetter.call(value);\n  } catch (e) {\n    throw makeException(TypeError, \"is not a DataView\", options);\n  }\n\n  if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {\n    throw makeException(TypeError, \"is backed by a SharedArrayBuffer, which is not allowed\", options);\n  }\n  if (isArrayBufferDetached(value.buffer)) {\n    throw makeException(TypeError, \"is backed by a detached ArrayBuffer\", options);\n  }\n\n  return value;\n};\n\n// Returns the unforgeable `TypedArray` constructor name or `undefined`,\n// if the `this` value isn't a valid `TypedArray` object.\n//\n// https://tc39.es/ecma262/#sec-get-%typedarray%.prototype-@@tostringtag\nconst typedArrayNameGetter = Object.getOwnPropertyDescriptor(\n  Object.getPrototypeOf(Uint8Array).prototype,\n  Symbol.toStringTag\n).get;\n[\n  Int8Array,\n  Int16Array,\n  Int32Array,\n  Uint8Array,\n  Uint16Array,\n  Uint32Array,\n  Uint8ClampedArray,\n  Float32Array,\n  Float64Array\n].forEach(func => {\n  const { name } = func;\n  const article = /^[AEIOU]/u.test(name) ? \"an\" : \"a\";\n  exports[name] = (value, options = {}) => {\n    if (!ArrayBuffer.isView(value) || typedArrayNameGetter.call(value) !== name) {\n      throw makeException(TypeError, `is not ${article} ${name} object`, options);\n    }\n    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {\n      throw makeException(TypeError, \"is a view on a SharedArrayBuffer, which is not allowed\", options);\n    }\n    if (isArrayBufferDetached(value.buffer)) {\n      throw makeException(TypeError, \"is a view on a detached ArrayBuffer\", options);\n    }\n\n    return value;\n  };\n});\n\n// Common definitions\n\nexports.ArrayBufferView = (value, options = {}) => {\n  if (!ArrayBuffer.isView(value)) {\n    throw makeException(TypeError, \"is not a view on an ArrayBuffer or SharedArrayBuffer\", options);\n  }\n\n  if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {\n    throw makeException(TypeError, \"is a view on a SharedArrayBuffer, which is not allowed\", options);\n  }\n\n  if (isArrayBufferDetached(value.buffer)) {\n    throw makeException(TypeError, \"is a view on a detached ArrayBuffer\", options);\n  }\n  return value;\n};\n\nexports.BufferSource = (value, options = {}) => {\n  if (ArrayBuffer.isView(value)) {\n    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {\n      throw makeException(TypeError, \"is a view on a SharedArrayBuffer, which is not allowed\", options);\n    }\n\n    if (isArrayBufferDetached(value.buffer)) {\n      throw makeException(TypeError, \"is a view on a detached ArrayBuffer\", options);\n    }\n    return value;\n  }\n\n  if (!options.allowShared && !isNonSharedArrayBuffer(value)) {\n    throw makeException(TypeError, \"is not an ArrayBuffer or a view on one\", options);\n  }\n  if (options.allowShared && !isSharedArrayBuffer(value) && !isNonSharedArrayBuffer(value)) {\n    throw makeException(TypeError, \"is not an ArrayBuffer, SharedArrayBuffer, or a view on one\", options);\n  }\n  if (isArrayBufferDetached(value)) {\n    throw makeException(TypeError, \"is a detached ArrayBuffer\", options);\n  }\n\n  return value;\n};\n\nexports.DOMTimeStamp = exports[\"unsigned long long\"];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvd2ViaWRsLWNvbnZlcnNpb25zL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBNkMsRUFBRSxRQUFRO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsVUFBVTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWSxLQUFLLFdBQVc7QUFDMUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxZQUFZLEtBQUssV0FBVztBQUMxRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBOztBQUVBLFlBQVksZ0NBQWdDLGlCQUFpQjtBQUM3RCxhQUFhLGdDQUFnQyxnQkFBZ0I7O0FBRTdELGFBQWEsaUNBQWlDLGlCQUFpQjtBQUMvRCx5QkFBeUIsaUNBQWlDLGdCQUFnQjs7QUFFMUUsWUFBWSxpQ0FBaUMsaUJBQWlCO0FBQzlELHdCQUF3QixpQ0FBaUMsZ0JBQWdCOztBQUV6RSxvQkFBb0Isa0NBQWtDLGlCQUFpQjtBQUN2RSw2QkFBNkIsa0NBQWtDLGdCQUFnQjs7QUFFL0UsY0FBYyx1QkFBdUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLHVCQUF1QjtBQUNyRDs7QUFFQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCLHVCQUF1QjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQSxrQkFBa0Isc0NBQXNDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBLHNDQUFzQztBQUN0QztBQUNBLCtDQUErQyxTQUFTLEVBQUUsTUFBTTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi4vYmFja2VuZC9ub2RlX21vZHVsZXMvd2ViaWRsLWNvbnZlcnNpb25zL2xpYi9pbmRleC5qcz9kYzcwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBtYWtlRXhjZXB0aW9uKEVycm9yVHlwZSwgbWVzc2FnZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgRXJyb3JUeXBlID0gb3B0aW9ucy5nbG9iYWxzW0Vycm9yVHlwZS5uYW1lXTtcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yVHlwZShgJHtvcHRpb25zLmNvbnRleHQgPyBvcHRpb25zLmNvbnRleHQgOiBcIlZhbHVlXCJ9ICR7bWVzc2FnZX0uYCk7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIpIHtcbiAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgXCJpcyBhIEJpZ0ludCB3aGljaCBjYW5ub3QgYmUgY29udmVydGVkIHRvIGEgbnVtYmVyXCIsIG9wdGlvbnMpO1xuICB9XG4gIGlmICghb3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnMuZ2xvYmFscy5OdW1iZXIodmFsdWUpO1xufVxuXG4vLyBSb3VuZCB4IHRvIHRoZSBuZWFyZXN0IGludGVnZXIsIGNob29zaW5nIHRoZSBldmVuIGludGVnZXIgaWYgaXQgbGllcyBoYWxmd2F5IGJldHdlZW4gdHdvLlxuZnVuY3Rpb24gZXZlblJvdW5kKHgpIHtcbiAgLy8gVGhlcmUgYXJlIGZvdXIgY2FzZXMgZm9yIG51bWJlcnMgd2l0aCBmcmFjdGlvbmFsIHBhcnQgYmVpbmcgLjU6XG4gIC8vXG4gIC8vIGNhc2UgfCAgICAgeCAgICAgfCBmbG9vcih4KSB8IHJvdW5kKHgpIHwgZXhwZWN0ZWQgfCB4IDw+IDAgfCB4ICUgMSB8IHggJiAxIHwgICBleGFtcGxlXG4gIC8vICAgMSAgfCAgMm4gKyAwLjUgfCAgMm4gICAgICB8ICAybiArIDEgIHwgIDJuICAgICAgfCAgID4gICAgfCAgMC41ICB8ICAgMCAgIHwgIDAuNSAtPiAgMFxuICAvLyAgIDIgIHwgIDJuICsgMS41IHwgIDJuICsgMSAgfCAgMm4gKyAyICB8ICAybiArIDIgIHwgICA+ICAgIHwgIDAuNSAgfCAgIDEgICB8ICAxLjUgLT4gIDJcbiAgLy8gICAzICB8IC0ybiAtIDAuNSB8IC0ybiAtIDEgIHwgLTJuICAgICAgfCAtMm4gICAgICB8ICAgPCAgICB8IC0wLjUgIHwgICAwICAgfCAtMC41IC0+ICAwXG4gIC8vICAgNCAgfCAtMm4gLSAxLjUgfCAtMm4gLSAyICB8IC0ybiAtIDEgIHwgLTJuIC0gMiAgfCAgIDwgICAgfCAtMC41ICB8ICAgMSAgIHwgLTEuNSAtPiAtMlxuICAvLyAod2hlcmUgbiBpcyBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyKVxuICAvL1xuICAvLyBCcmFuY2ggaGVyZSBmb3IgY2FzZXMgMSBhbmQgNFxuICBpZiAoKHggPiAwICYmICh4ICUgMSkgPT09ICswLjUgJiYgKHggJiAxKSA9PT0gMCkgfHxcbiAgICAgICAgKHggPCAwICYmICh4ICUgMSkgPT09IC0wLjUgJiYgKHggJiAxKSA9PT0gMSkpIHtcbiAgICByZXR1cm4gY2Vuc29yTmVnYXRpdmVaZXJvKE1hdGguZmxvb3IoeCkpO1xuICB9XG5cbiAgcmV0dXJuIGNlbnNvck5lZ2F0aXZlWmVybyhNYXRoLnJvdW5kKHgpKTtcbn1cblxuZnVuY3Rpb24gaW50ZWdlclBhcnQobikge1xuICByZXR1cm4gY2Vuc29yTmVnYXRpdmVaZXJvKE1hdGgudHJ1bmMobikpO1xufVxuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgcmV0dXJuIHggPCAwID8gLTEgOiAxO1xufVxuXG5mdW5jdGlvbiBtb2R1bG8oeCwgeSkge1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI2Vxbi1tb2R1bG9cbiAgLy8gTm90ZSB0aGF0IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ0Njc1NTkvMzE5MSBkb2VzIE5PVCB3b3JrIGZvciBsYXJnZSBtb2R1bG9zXG4gIGNvbnN0IHNpZ25NaWdodE5vdE1hdGNoID0geCAlIHk7XG4gIGlmIChzaWduKHkpICE9PSBzaWduKHNpZ25NaWdodE5vdE1hdGNoKSkge1xuICAgIHJldHVybiBzaWduTWlnaHROb3RNYXRjaCArIHk7XG4gIH1cbiAgcmV0dXJuIHNpZ25NaWdodE5vdE1hdGNoO1xufVxuXG5mdW5jdGlvbiBjZW5zb3JOZWdhdGl2ZVplcm8oeCkge1xuICByZXR1cm4geCA9PT0gMCA/IDAgOiB4O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnRlZ2VyQ29udmVyc2lvbihiaXRMZW5ndGgsIHsgdW5zaWduZWQgfSkge1xuICBsZXQgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZDtcbiAgaWYgKHVuc2lnbmVkKSB7XG4gICAgbG93ZXJCb3VuZCA9IDA7XG4gICAgdXBwZXJCb3VuZCA9IDIgKiogYml0TGVuZ3RoIC0gMTtcbiAgfSBlbHNlIHtcbiAgICBsb3dlckJvdW5kID0gLSgyICoqIChiaXRMZW5ndGggLSAxKSk7XG4gICAgdXBwZXJCb3VuZCA9IDIgKiogKGJpdExlbmd0aCAtIDEpIC0gMTtcbiAgfVxuXG4gIGNvbnN0IHR3b1RvVGhlQml0TGVuZ3RoID0gMiAqKiBiaXRMZW5ndGg7XG4gIGNvbnN0IHR3b1RvT25lTGVzc1RoYW5UaGVCaXRMZW5ndGggPSAyICoqIChiaXRMZW5ndGggLSAxKTtcblxuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBsZXQgeCA9IHRvTnVtYmVyKHZhbHVlLCBvcHRpb25zKTtcbiAgICB4ID0gY2Vuc29yTmVnYXRpdmVaZXJvKHgpO1xuXG4gICAgaWYgKG9wdGlvbnMuZW5mb3JjZVJhbmdlKSB7XG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh4KSkge1xuICAgICAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgXCJpcyBub3QgYSBmaW5pdGUgbnVtYmVyXCIsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICB4ID0gaW50ZWdlclBhcnQoeCk7XG5cbiAgICAgIGlmICh4IDwgbG93ZXJCb3VuZCB8fCB4ID4gdXBwZXJCb3VuZCkge1xuICAgICAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFxuICAgICAgICAgIFR5cGVFcnJvcixcbiAgICAgICAgICBgaXMgb3V0c2lkZSB0aGUgYWNjZXB0ZWQgcmFuZ2Ugb2YgJHtsb3dlckJvdW5kfSB0byAke3VwcGVyQm91bmR9LCBpbmNsdXNpdmVgLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuXG4gICAgaWYgKCFOdW1iZXIuaXNOYU4oeCkgJiYgb3B0aW9ucy5jbGFtcCkge1xuICAgICAgeCA9IE1hdGgubWluKE1hdGgubWF4KHgsIGxvd2VyQm91bmQpLCB1cHBlckJvdW5kKTtcbiAgICAgIHggPSBldmVuUm91bmQoeCk7XG4gICAgICByZXR1cm4geDtcbiAgICB9XG5cbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh4KSB8fCB4ID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgeCA9IGludGVnZXJQYXJ0KHgpO1xuXG4gICAgLy8gTWF0aC5wb3coMiwgNjQpIGlzIG5vdCBhY2N1cmF0ZWx5IHJlcHJlc2VudGFibGUgaW4gSmF2YVNjcmlwdCwgc28gdHJ5IHRvIGF2b2lkIHRoZXNlIHBlci1zcGVjIG9wZXJhdGlvbnMgaWZcbiAgICAvLyBwb3NzaWJsZS4gSG9wZWZ1bGx5IGl0J3MgYW4gb3B0aW1pemF0aW9uIGZvciB0aGUgbm9uLTY0LWJpdExlbmd0aCBjYXNlcyB0b28uXG4gICAgaWYgKHggPj0gbG93ZXJCb3VuZCAmJiB4IDw9IHVwcGVyQm91bmQpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIC8vIFRoZXNlIHdpbGwgbm90IHdvcmsgZ3JlYXQgZm9yIGJpdExlbmd0aCBvZiA2NCwgYnV0IG9oIHdlbGwuIFNlZSB0aGUgUkVBRE1FIGZvciBtb3JlIGRldGFpbHMuXG4gICAgeCA9IG1vZHVsbyh4LCB0d29Ub1RoZUJpdExlbmd0aCk7XG4gICAgaWYgKCF1bnNpZ25lZCAmJiB4ID49IHR3b1RvT25lTGVzc1RoYW5UaGVCaXRMZW5ndGgpIHtcbiAgICAgIHJldHVybiB4IC0gdHdvVG9UaGVCaXRMZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB4O1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb25nTG9uZ0NvbnZlcnNpb24oYml0TGVuZ3RoLCB7IHVuc2lnbmVkIH0pIHtcbiAgY29uc3QgdXBwZXJCb3VuZCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICBjb25zdCBsb3dlckJvdW5kID0gdW5zaWduZWQgPyAwIDogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVI7XG4gIGNvbnN0IGFzQmlnSW50TiA9IHVuc2lnbmVkID8gQmlnSW50LmFzVWludE4gOiBCaWdJbnQuYXNJbnROO1xuXG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGxldCB4ID0gdG9OdW1iZXIodmFsdWUsIG9wdGlvbnMpO1xuICAgIHggPSBjZW5zb3JOZWdhdGl2ZVplcm8oeCk7XG5cbiAgICBpZiAob3B0aW9ucy5lbmZvcmNlUmFuZ2UpIHtcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHgpKSB7XG4gICAgICAgIHRocm93IG1ha2VFeGNlcHRpb24oVHlwZUVycm9yLCBcImlzIG5vdCBhIGZpbml0ZSBudW1iZXJcIiwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHggPSBpbnRlZ2VyUGFydCh4KTtcblxuICAgICAgaWYgKHggPCBsb3dlckJvdW5kIHx8IHggPiB1cHBlckJvdW5kKSB7XG4gICAgICAgIHRocm93IG1ha2VFeGNlcHRpb24oXG4gICAgICAgICAgVHlwZUVycm9yLFxuICAgICAgICAgIGBpcyBvdXRzaWRlIHRoZSBhY2NlcHRlZCByYW5nZSBvZiAke2xvd2VyQm91bmR9IHRvICR7dXBwZXJCb3VuZH0sIGluY2x1c2l2ZWAsXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geDtcbiAgICB9XG5cbiAgICBpZiAoIU51bWJlci5pc05hTih4KSAmJiBvcHRpb25zLmNsYW1wKSB7XG4gICAgICB4ID0gTWF0aC5taW4oTWF0aC5tYXgoeCwgbG93ZXJCb3VuZCksIHVwcGVyQm91bmQpO1xuICAgICAgeCA9IGV2ZW5Sb3VuZCh4KTtcbiAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHgpIHx8IHggPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGxldCB4QmlnSW50ID0gQmlnSW50KGludGVnZXJQYXJ0KHgpKTtcbiAgICB4QmlnSW50ID0gYXNCaWdJbnROKGJpdExlbmd0aCwgeEJpZ0ludCk7XG4gICAgcmV0dXJuIE51bWJlcih4QmlnSW50KTtcbiAgfTtcbn1cblxuZXhwb3J0cy5hbnkgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydHMudW5kZWZpbmVkID0gKCkgPT4ge1xuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0cy5ib29sZWFuID0gdmFsdWUgPT4ge1xuICByZXR1cm4gQm9vbGVhbih2YWx1ZSk7XG59O1xuXG5leHBvcnRzLmJ5dGUgPSBjcmVhdGVJbnRlZ2VyQ29udmVyc2lvbig4LCB7IHVuc2lnbmVkOiBmYWxzZSB9KTtcbmV4cG9ydHMub2N0ZXQgPSBjcmVhdGVJbnRlZ2VyQ29udmVyc2lvbig4LCB7IHVuc2lnbmVkOiB0cnVlIH0pO1xuXG5leHBvcnRzLnNob3J0ID0gY3JlYXRlSW50ZWdlckNvbnZlcnNpb24oMTYsIHsgdW5zaWduZWQ6IGZhbHNlIH0pO1xuZXhwb3J0c1tcInVuc2lnbmVkIHNob3J0XCJdID0gY3JlYXRlSW50ZWdlckNvbnZlcnNpb24oMTYsIHsgdW5zaWduZWQ6IHRydWUgfSk7XG5cbmV4cG9ydHMubG9uZyA9IGNyZWF0ZUludGVnZXJDb252ZXJzaW9uKDMyLCB7IHVuc2lnbmVkOiBmYWxzZSB9KTtcbmV4cG9ydHNbXCJ1bnNpZ25lZCBsb25nXCJdID0gY3JlYXRlSW50ZWdlckNvbnZlcnNpb24oMzIsIHsgdW5zaWduZWQ6IHRydWUgfSk7XG5cbmV4cG9ydHNbXCJsb25nIGxvbmdcIl0gPSBjcmVhdGVMb25nTG9uZ0NvbnZlcnNpb24oNjQsIHsgdW5zaWduZWQ6IGZhbHNlIH0pO1xuZXhwb3J0c1tcInVuc2lnbmVkIGxvbmcgbG9uZ1wiXSA9IGNyZWF0ZUxvbmdMb25nQ29udmVyc2lvbig2NCwgeyB1bnNpZ25lZDogdHJ1ZSB9KTtcblxuZXhwb3J0cy5kb3VibGUgPSAodmFsdWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCB4ID0gdG9OdW1iZXIodmFsdWUsIG9wdGlvbnMpO1xuXG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHgpKSB7XG4gICAgdGhyb3cgbWFrZUV4Y2VwdGlvbihUeXBlRXJyb3IsIFwiaXMgbm90IGEgZmluaXRlIGZsb2F0aW5nLXBvaW50IHZhbHVlXCIsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnRzW1widW5yZXN0cmljdGVkIGRvdWJsZVwiXSA9ICh2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IHggPSB0b051bWJlcih2YWx1ZSwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnRzLmZsb2F0ID0gKHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgeCA9IHRvTnVtYmVyKHZhbHVlLCBvcHRpb25zKTtcblxuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh4KSkge1xuICAgIHRocm93IG1ha2VFeGNlcHRpb24oVHlwZUVycm9yLCBcImlzIG5vdCBhIGZpbml0ZSBmbG9hdGluZy1wb2ludCB2YWx1ZVwiLCBvcHRpb25zKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuaXMoeCwgLTApKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICBjb25zdCB5ID0gTWF0aC5mcm91bmQoeCk7XG5cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoeSkpIHtcbiAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgXCJpcyBvdXRzaWRlIHRoZSByYW5nZSBvZiBhIHNpbmdsZS1wcmVjaXNpb24gZmxvYXRpbmctcG9pbnQgdmFsdWVcIiwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4geTtcbn07XG5cbmV4cG9ydHNbXCJ1bnJlc3RyaWN0ZWQgZmxvYXRcIl0gPSAodmFsdWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCB4ID0gdG9OdW1iZXIodmFsdWUsIG9wdGlvbnMpO1xuXG4gIGlmIChpc05hTih4KSkge1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgaWYgKE9iamVjdC5pcyh4LCAtMCkpIHtcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmZyb3VuZCh4KTtcbn07XG5cbmV4cG9ydHMuRE9NU3RyaW5nID0gKHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKG9wdGlvbnMudHJlYXROdWxsQXNFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzeW1ib2xcIikge1xuICAgIHRocm93IG1ha2VFeGNlcHRpb24oVHlwZUVycm9yLCBcImlzIGEgc3ltYm9sLCB3aGljaCBjYW5ub3QgYmUgY29udmVydGVkIHRvIGEgc3RyaW5nXCIsIG9wdGlvbnMpO1xuICB9XG5cbiAgY29uc3QgU3RyaW5nQ3RvciA9IG9wdGlvbnMuZ2xvYmFscyA/IG9wdGlvbnMuZ2xvYmFscy5TdHJpbmcgOiBTdHJpbmc7XG4gIHJldHVybiBTdHJpbmdDdG9yKHZhbHVlKTtcbn07XG5cbmV4cG9ydHMuQnl0ZVN0cmluZyA9ICh2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IHggPSBleHBvcnRzLkRPTVN0cmluZyh2YWx1ZSwgb3B0aW9ucyk7XG4gIGxldCBjO1xuICBmb3IgKGxldCBpID0gMDsgKGMgPSB4LmNvZGVQb2ludEF0KGkpKSAhPT0gdW5kZWZpbmVkOyArK2kpIHtcbiAgICBpZiAoYyA+IDI1NSkge1xuICAgICAgdGhyb3cgbWFrZUV4Y2VwdGlvbihUeXBlRXJyb3IsIFwiaXMgbm90IGEgdmFsaWQgQnl0ZVN0cmluZ1wiLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geDtcbn07XG5cbmV4cG9ydHMuVVNWU3RyaW5nID0gKHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgUyA9IGV4cG9ydHMuRE9NU3RyaW5nKHZhbHVlLCBvcHRpb25zKTtcbiAgY29uc3QgbiA9IFMubGVuZ3RoO1xuICBjb25zdCBVID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgY29uc3QgYyA9IFMuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID4gMHhERkZGKSB7XG4gICAgICBVLnB1c2goU3RyaW5nLmZyb21Db2RlUG9pbnQoYykpO1xuICAgIH0gZWxzZSBpZiAoMHhEQzAwIDw9IGMgJiYgYyA8PSAweERGRkYpIHtcbiAgICAgIFUucHVzaChTdHJpbmcuZnJvbUNvZGVQb2ludCgweEZGRkQpKTtcbiAgICB9IGVsc2UgaWYgKGkgPT09IG4gLSAxKSB7XG4gICAgICBVLnB1c2goU3RyaW5nLmZyb21Db2RlUG9pbnQoMHhGRkZEKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGQgPSBTLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgaWYgKDB4REMwMCA8PSBkICYmIGQgPD0gMHhERkZGKSB7XG4gICAgICAgIGNvbnN0IGEgPSBjICYgMHgzRkY7XG4gICAgICAgIGNvbnN0IGIgPSBkICYgMHgzRkY7XG4gICAgICAgIFUucHVzaChTdHJpbmcuZnJvbUNvZGVQb2ludCgoMiA8PCAxNSkgKyAoKDIgPDwgOSkgKiBhKSArIGIpKTtcbiAgICAgICAgKytpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVS5wdXNoKFN0cmluZy5mcm9tQ29kZVBvaW50KDB4RkZGRCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBVLmpvaW4oXCJcIik7XG59O1xuXG5leHBvcnRzLm9iamVjdCA9ICh2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHRocm93IG1ha2VFeGNlcHRpb24oVHlwZUVycm9yLCBcImlzIG5vdCBhbiBvYmplY3RcIiwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5jb25zdCBhYkJ5dGVMZW5ndGhHZXR0ZXIgPVxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoQXJyYXlCdWZmZXIucHJvdG90eXBlLCBcImJ5dGVMZW5ndGhcIikuZ2V0O1xuY29uc3Qgc2FiQnl0ZUxlbmd0aEdldHRlciA9XG4gICAgdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgP1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihTaGFyZWRBcnJheUJ1ZmZlci5wcm90b3R5cGUsIFwiYnl0ZUxlbmd0aFwiKS5nZXQgOlxuICAgICAgbnVsbDtcblxuZnVuY3Rpb24gaXNOb25TaGFyZWRBcnJheUJ1ZmZlcih2YWx1ZSkge1xuICB0cnkge1xuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBvbiBTaGFyZWRBcnJheUJ1ZmZlcnMsIGJ1dCBub3QgZGV0YWNoZWQgQXJyYXlCdWZmZXJzLlxuICAgIC8vIChUaGUgc3BlYyBzYXlzIGl0IHNob3VsZCB0aHJvdywgYnV0IHRoZSBzcGVjIGNvbmZsaWN0cyB3aXRoIGltcGxlbWVudGF0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvZWNtYTI2Mi9pc3N1ZXMvNjc4KVxuICAgIGFiQnl0ZUxlbmd0aEdldHRlci5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTaGFyZWRBcnJheUJ1ZmZlcih2YWx1ZSkge1xuICB0cnkge1xuICAgIHNhYkJ5dGVMZW5ndGhHZXR0ZXIuY2FsbCh2YWx1ZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyRGV0YWNoZWQodmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgbmV3IFVpbnQ4QXJyYXkodmFsdWUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZXhwb3J0cy5BcnJheUJ1ZmZlciA9ICh2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICghaXNOb25TaGFyZWRBcnJheUJ1ZmZlcih2YWx1ZSkpIHtcbiAgICBpZiAob3B0aW9ucy5hbGxvd1NoYXJlZCAmJiAhaXNTaGFyZWRBcnJheUJ1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHRocm93IG1ha2VFeGNlcHRpb24oVHlwZUVycm9yLCBcImlzIG5vdCBhbiBBcnJheUJ1ZmZlciBvciBTaGFyZWRBcnJheUJ1ZmZlclwiLCBvcHRpb25zKTtcbiAgICB9XG4gICAgdGhyb3cgbWFrZUV4Y2VwdGlvbihUeXBlRXJyb3IsIFwiaXMgbm90IGFuIEFycmF5QnVmZmVyXCIsIG9wdGlvbnMpO1xuICB9XG4gIGlmIChpc0FycmF5QnVmZmVyRGV0YWNoZWQodmFsdWUpKSB7XG4gICAgdGhyb3cgbWFrZUV4Y2VwdGlvbihUeXBlRXJyb3IsIFwiaXMgYSBkZXRhY2hlZCBBcnJheUJ1ZmZlclwiLCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IGR2Qnl0ZUxlbmd0aEdldHRlciA9XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihEYXRhVmlldy5wcm90b3R5cGUsIFwiYnl0ZUxlbmd0aFwiKS5nZXQ7XG5leHBvcnRzLkRhdGFWaWV3ID0gKHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcbiAgdHJ5IHtcbiAgICBkdkJ5dGVMZW5ndGhHZXR0ZXIuY2FsbCh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgXCJpcyBub3QgYSBEYXRhVmlld1wiLCBvcHRpb25zKTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucy5hbGxvd1NoYXJlZCAmJiBpc1NoYXJlZEFycmF5QnVmZmVyKHZhbHVlLmJ1ZmZlcikpIHtcbiAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgXCJpcyBiYWNrZWQgYnkgYSBTaGFyZWRBcnJheUJ1ZmZlciwgd2hpY2ggaXMgbm90IGFsbG93ZWRcIiwgb3B0aW9ucyk7XG4gIH1cbiAgaWYgKGlzQXJyYXlCdWZmZXJEZXRhY2hlZCh2YWx1ZS5idWZmZXIpKSB7XG4gICAgdGhyb3cgbWFrZUV4Y2VwdGlvbihUeXBlRXJyb3IsIFwiaXMgYmFja2VkIGJ5IGEgZGV0YWNoZWQgQXJyYXlCdWZmZXJcIiwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBSZXR1cm5zIHRoZSB1bmZvcmdlYWJsZSBgVHlwZWRBcnJheWAgY29uc3RydWN0b3IgbmFtZSBvciBgdW5kZWZpbmVkYCxcbi8vIGlmIHRoZSBgdGhpc2AgdmFsdWUgaXNuJ3QgYSB2YWxpZCBgVHlwZWRBcnJheWAgb2JqZWN0LlxuLy9cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LSV0eXBlZGFycmF5JS5wcm90b3R5cGUtQEB0b3N0cmluZ3RhZ1xuY29uc3QgdHlwZWRBcnJheU5hbWVHZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVWludDhBcnJheSkucHJvdG90eXBlLFxuICBTeW1ib2wudG9TdHJpbmdUYWdcbikuZ2V0O1xuW1xuICBJbnQ4QXJyYXksXG4gIEludDE2QXJyYXksXG4gIEludDMyQXJyYXksXG4gIFVpbnQ4QXJyYXksXG4gIFVpbnQxNkFycmF5LFxuICBVaW50MzJBcnJheSxcbiAgVWludDhDbGFtcGVkQXJyYXksXG4gIEZsb2F0MzJBcnJheSxcbiAgRmxvYXQ2NEFycmF5XG5dLmZvckVhY2goZnVuYyA9PiB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gZnVuYztcbiAgY29uc3QgYXJ0aWNsZSA9IC9eW0FFSU9VXS91LnRlc3QobmFtZSkgPyBcImFuXCIgOiBcImFcIjtcbiAgZXhwb3J0c1tuYW1lXSA9ICh2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgaWYgKCFBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpIHx8IHR5cGVkQXJyYXlOYW1lR2V0dGVyLmNhbGwodmFsdWUpICE9PSBuYW1lKSB7XG4gICAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgYGlzIG5vdCAke2FydGljbGV9ICR7bmFtZX0gb2JqZWN0YCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5hbGxvd1NoYXJlZCAmJiBpc1NoYXJlZEFycmF5QnVmZmVyKHZhbHVlLmJ1ZmZlcikpIHtcbiAgICAgIHRocm93IG1ha2VFeGNlcHRpb24oVHlwZUVycm9yLCBcImlzIGEgdmlldyBvbiBhIFNoYXJlZEFycmF5QnVmZmVyLCB3aGljaCBpcyBub3QgYWxsb3dlZFwiLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXlCdWZmZXJEZXRhY2hlZCh2YWx1ZS5idWZmZXIpKSB7XG4gICAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgXCJpcyBhIHZpZXcgb24gYSBkZXRhY2hlZCBBcnJheUJ1ZmZlclwiLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59KTtcblxuLy8gQ29tbW9uIGRlZmluaXRpb25zXG5cbmV4cG9ydHMuQXJyYXlCdWZmZXJWaWV3ID0gKHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKCFBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG4gICAgdGhyb3cgbWFrZUV4Y2VwdGlvbihUeXBlRXJyb3IsIFwiaXMgbm90IGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciBvciBTaGFyZWRBcnJheUJ1ZmZlclwiLCBvcHRpb25zKTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucy5hbGxvd1NoYXJlZCAmJiBpc1NoYXJlZEFycmF5QnVmZmVyKHZhbHVlLmJ1ZmZlcikpIHtcbiAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgXCJpcyBhIHZpZXcgb24gYSBTaGFyZWRBcnJheUJ1ZmZlciwgd2hpY2ggaXMgbm90IGFsbG93ZWRcIiwgb3B0aW9ucyk7XG4gIH1cblxuICBpZiAoaXNBcnJheUJ1ZmZlckRldGFjaGVkKHZhbHVlLmJ1ZmZlcikpIHtcbiAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgXCJpcyBhIHZpZXcgb24gYSBkZXRhY2hlZCBBcnJheUJ1ZmZlclwiLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnRzLkJ1ZmZlclNvdXJjZSA9ICh2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG4gICAgaWYgKCFvcHRpb25zLmFsbG93U2hhcmVkICYmIGlzU2hhcmVkQXJyYXlCdWZmZXIodmFsdWUuYnVmZmVyKSkge1xuICAgICAgdGhyb3cgbWFrZUV4Y2VwdGlvbihUeXBlRXJyb3IsIFwiaXMgYSB2aWV3IG9uIGEgU2hhcmVkQXJyYXlCdWZmZXIsIHdoaWNoIGlzIG5vdCBhbGxvd2VkXCIsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5QnVmZmVyRGV0YWNoZWQodmFsdWUuYnVmZmVyKSkge1xuICAgICAgdGhyb3cgbWFrZUV4Y2VwdGlvbihUeXBlRXJyb3IsIFwiaXMgYSB2aWV3IG9uIGEgZGV0YWNoZWQgQXJyYXlCdWZmZXJcIiwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucy5hbGxvd1NoYXJlZCAmJiAhaXNOb25TaGFyZWRBcnJheUJ1ZmZlcih2YWx1ZSkpIHtcbiAgICB0aHJvdyBtYWtlRXhjZXB0aW9uKFR5cGVFcnJvciwgXCJpcyBub3QgYW4gQXJyYXlCdWZmZXIgb3IgYSB2aWV3IG9uIG9uZVwiLCBvcHRpb25zKTtcbiAgfVxuICBpZiAob3B0aW9ucy5hbGxvd1NoYXJlZCAmJiAhaXNTaGFyZWRBcnJheUJ1ZmZlcih2YWx1ZSkgJiYgIWlzTm9uU2hhcmVkQXJyYXlCdWZmZXIodmFsdWUpKSB7XG4gICAgdGhyb3cgbWFrZUV4Y2VwdGlvbihUeXBlRXJyb3IsIFwiaXMgbm90IGFuIEFycmF5QnVmZmVyLCBTaGFyZWRBcnJheUJ1ZmZlciwgb3IgYSB2aWV3IG9uIG9uZVwiLCBvcHRpb25zKTtcbiAgfVxuICBpZiAoaXNBcnJheUJ1ZmZlckRldGFjaGVkKHZhbHVlKSkge1xuICAgIHRocm93IG1ha2VFeGNlcHRpb24oVHlwZUVycm9yLCBcImlzIGEgZGV0YWNoZWQgQXJyYXlCdWZmZXJcIiwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnRzLkRPTVRpbWVTdGFtcCA9IGV4cG9ydHNbXCJ1bnNpZ25lZCBsb25nIGxvbmdcIl07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../backend/node_modules/webidl-conversions/lib/index.js\n");

/***/ })

};
;