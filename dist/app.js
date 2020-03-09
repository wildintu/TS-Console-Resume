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
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar n = 'Name: ';\nvar names = 'Lexi';\nvar c = 'Career: ';\nvar career = 'Coding / Marketing';\nvar am = 'About Me: ';\nvar aboutMe = 'I am obsessed with my dog and sunsets';\nvar int = 'My Interests:';\nvar interests = ['coffee', 'tech', 'tigers', 'fitness'];\nvar mpe = 'My Previous Experience:';\nvar pastPositions = [\n    { company: 'Ultaca', location: 'Pelham, AL', title: 'Marketing Manager', description: 'Assist with all marketing needs' },\n    { company: 'Vestavia CC', location: 'Vestavia, AL', title: 'Merchandise Manager', description: 'Assist with merchandise needs' },\n    { company: 'Southern Shirt', location: 'Tuscaloosa, AL', title: 'Marketing Manager', description: 'Assist with marketing needs' }\n];\nconsole.log(n + names.toUpperCase() + \"\\n\" + c + career + \"\\n\" + am + aboutMe);\nconsole.log('\\n' + int);\nfunction displayInterests(inter) {\n    console.log('* ' + inter);\n}\ndisplayInterests('Coffee');\ndisplayInterests('Tech');\ndisplayInterests('Tigers');\ndisplayInterests('Fitness');\nconsole.log(\"\\n\" + mpe);\nfunction displayPosition(cName, jobTitle, jDescription) {\n    console.log('* ' + jobTitle + \" at \" + cName + \" to \" + jDescription);\n}\ndisplayPosition('Ultaca', 'Marketing Manager', 'Assist with all marketing needs');\ndisplayPosition('Vestavia CC', 'Merchandise Manager', 'Assist with merchandise needs');\ndisplayPosition('Southern Shirt', 'Marketing Manager', 'Assist with marketing needs');\nfunction displaySkill() {\n    for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {\n        var skill = skills_1[_i];\n        if (skill.isCool) {\n            console.log('* ' + \"BAM: \" + skill.skill);\n        }\n        else {\n            console.log('* ' + skill.skill);\n        }\n    }\n}\nvar sk = 'My Skills:';\nvar skills = [\n    { skill: 'Marketing', isCool: true },\n    { skill: 'Photography', isCool: true },\n    { skill: 'Email', isCool: false },\n    { skill: 'Facebook Ads', isCool: false }\n];\nconsole.log('\\n' + sk);\ndisplaySkill();\n\n\n//# sourceURL=webpack:///./script.ts?");

/***/ })

/******/ });