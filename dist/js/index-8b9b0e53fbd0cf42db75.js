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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_less__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_index_less__);

let arr = [1, 2, 3, 4, 5]
let arrB = arr.map(item => item * 2)

console.log(arrB)
console.log('new Set(arrB)', new Set(arrB))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Cannot find module 'imagemin-gifsicle'\n    at Function.Module._resolveFilename (module.js:527:15)\n    at Function.Module._load (module.js:476:23)\n    at Module.require (module.js:568:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/Applications/project/webpack-many-pages/node_modules/.2.0.0@img-loader/index.js:4:24)\n    at Module._compile (module.js:624:30)\n    at Object.Module._extensions..js (module.js:635:10)\n    at Module.load (module.js:545:32)\n    at tryModuleLoad (module.js:508:12)\n    at Function.Module._load (module.js:500:3)\n    at Module.require (module.js:568:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:165:10)\n    at /Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/Compilation.js:151:10)\n    at factoryCallback (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/Compilation.js:344:12)\n    at factory (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModuleFactory.js:241:5)\n    at applyPluginsAsyncWaterfall (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModuleFactory.js:94:13)\n    at /Applications/project/webpack-many-pages/node_modules/.0.2.8@tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Applications/project/webpack-many-pages/node_modules/.0.2.8@tapable/lib/Tapable.js:272:13)\n    at resolver (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModuleFactory.js:69:10)\n    at process.nextTick (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModuleFactory.js:194:7)\n    at runLoaders (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModule.js:195:19)\n    at /Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:364:11\n    at /Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:165:10)\n    at /Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Applications/project/webpack-many-pages/node_modules/.2.3.0@loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/Compilation.js:151:10)\n    at factoryCallback (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/Compilation.js:344:12)\n    at factory (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModuleFactory.js:241:5)\n    at applyPluginsAsyncWaterfall (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModuleFactory.js:94:13)\n    at /Applications/project/webpack-many-pages/node_modules/.0.2.8@tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Applications/project/webpack-many-pages/node_modules/.0.2.8@tapable/lib/Tapable.js:272:13)\n    at resolver (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModuleFactory.js:69:10)\n    at process.nextTick (/Applications/project/webpack-many-pages/node_modules/.3.10.0@webpack/lib/NormalModuleFactory.js:194:7)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })
/******/ ]);