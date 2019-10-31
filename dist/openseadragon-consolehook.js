/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/consolehook.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/consolehook.js":
/*!****************************!*\
  !*** ./src/consolehook.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2019 Mark Salsbery
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* global OpenSeadragon */

/**
 * @file
 * @version  openseadragon-consolehook 2.0.0
 * @author Mark Salsbery <msalsbery@hotmail.com>
 *
 */

/**
 * @module openseadragon-consolehook
 * @version  openseadragon-consolehook 2.0.0
 *
 */
(function (OSD, $) {
  // if (!OSD.version || OSD.version.major < 1) {
  // 	throw new Error(
  // 		'OpenSeadragonConsoleHook requires OpenSeadragon version 1.0.0+'
  // 	);
  // }

  /**
   * Creates a new ConsoleHook.
   *
   * @method addConsoleHook
   * @memberof external:"OpenSeadragon.Viewer"#
   * @param {Object} options
      * @param {Function} [options.log] - console.log function. Function can return true to prevent original function call.
      * @param {Function} [options.debug] - console.debug function. Function can return true to prevent original function call.
      * @param {Function} [options.info] - console.info function. Function can return true to prevent original function call.
      * @param {Function} [options.warn] - console.warn function. Function can return true to prevent original function call.
      * @param {Function} [options.error] - console.error function. Function can return true to prevent original function call.
   * @returns {OpenSeadragonImaging.ConsoleHook}
   *
   **/
  OSD.Viewer.prototype.addConsoleHook = function (options) {
    options = options || {};
    return new $.ConsoleHook(options);
  };
  /**
   * Creates a new OpenSeadragonImaging.ConsoleHook.
   *
   * @class ConsoleHook
   * @classdesc Provides hooks into the OpenSeadragon console pipeline.
   * @memberof OpenSeadragonImaging
   * @param {Object} options
   * @param {Function} [options.log] - console.log function. Function can return true to prevent original function call.
   * @param {Function} [options.debug] - console.debug function. Function can return true to prevent original function call.
   * @param {Function} [options.info] - console.info function. Function can return true to prevent original function call.
   * @param {Function} [options.warn] - console.warn function. Function can return true to prevent original function call.
   * @param {Function} [options.error] - console.error function. Function can return true to prevent original function call.
   *
   **/


  $.ConsoleHook = function (options) {
    options = options || {};

    var _loop = function _loop(key) {
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        /*jshint loopfunc:true*/
        // eslint-disable-next-line no-loop-func
        (function (handler) {
          var origHandler = OSD.console[key];

          OSD.console[key] = function () {
            if (!handler.apply(this, arguments) && origHandler) {
              origHandler.apply(this, arguments);
            }
          };
        })(options[key]);
        /*jshint loopfunc:false*/

      }
    };

    for (var key in options) {
      _loop(key);
    }
  };
  /**
   * ConsoleHook version.
   * @member {Object} OpenSeadragonImaging.ConsoleHook.version
   * @property {String} versionStr - The version number as a string ('major.minor.revision').
   * @property {Number} major - The major version number.
   * @property {Number} minor - The minor version number.
   * @property {Number} revision - The revision number.
   */


  $.ConsoleHook.version = {
    versionStr: '2.0.0'
  };
  var versionSplits = $.ConsoleHook.version.versionStr.split('.');
  $.ConsoleHook.version.major = parseInt(versionSplits[0], 10);
  $.ConsoleHook.version.minor = parseInt(versionSplits[1], 10);
  $.ConsoleHook.version.revision = parseInt(versionSplits[2], 10);
})(OpenSeadragon, window.OpenSeadragonImaging = window.OpenSeadragonImaging || {});

/* harmony default export */ __webpack_exports__["default"] = (window.OpenSeadragonImaging.ConsoleHook);

/***/ })

/******/ });
//# sourceMappingURL=openseadragon-consolehook.js.map