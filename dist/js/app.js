/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("$(document).ready(function () {\n  // burger menu\n  var checkBox = $('#ms_menu-btn');\n  checkBox.prop('checked', false);\n  $('#ms_toggle').click(function () {\n    if ($(this).siblings(checkBox).prop('checked') == false) {\n      $(this).siblings(checkBox).prop('checked', true);\n    } else {\n      $(this).siblings(checkBox).prop('checked', false);\n    }\n  }); // smooth scroll via anchor, a native function ES2018\n\n  document.querySelectorAll('a[href^=\"#\"]').forEach(function (anchor) {\n    anchor.addEventListener('click', function (e) {\n      e.preventDefault(); // go (smooth)\n\n      document.querySelector(this.getAttribute('href')).scrollIntoView({\n        behavior: 'smooth'\n      }); // and close sidebar   \n\n      $(this).parents('#ms_nav').siblings(checkBox).prop('checked', false);\n    });\n  }); // $(window).scroll(function() {\n  //   if ($(this).scrollTop() > 20) {\n  //     $('#toTopBtn').fadeIn( \"slow\", function() {\n  //       $(this).show();\n  //     });\n  //   } else {\n  //     $('#toTopBtn').fadeOut( \"slow\", function() {\n  //       $(this).show();\n  //     });\n  //   }\n  // });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZnJpY2FhcG9ydGFwb3J0ZXNlLy4vc3JjL2FwcC5qcz8xMTEyIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2hlY2tCb3giLCJwcm9wIiwiY2xpY2siLCJzaWJsaW5ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYW5jaG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwicGFyZW50cyJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBRUMsUUFBRixDQUFELENBQWNDLEtBQWQsQ0FBb0IsWUFBVztBQUU3QjtBQUNBLE1BQUlDLFFBQVEsR0FBR0gsQ0FBQyxDQUFDLGNBQUQsQ0FBaEI7QUFDQUcsRUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWMsU0FBZCxFQUF5QixLQUF6QjtBQUVBSixFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCSyxLQUFoQixDQUFzQixZQUFXO0FBRS9CLFFBQUtMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sUUFBUixDQUFpQkgsUUFBakIsRUFBMkJDLElBQTNCLENBQWdDLFNBQWhDLEtBQThDLEtBQW5ELEVBQTJEO0FBRXpESixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFFBQVIsQ0FBaUJILFFBQWpCLEVBQTJCQyxJQUEzQixDQUFnQyxTQUFoQyxFQUEyQyxJQUEzQztBQUVELEtBSkQsTUFJTztBQUVMSixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFFBQVIsQ0FBaUJILFFBQWpCLEVBQTJCQyxJQUEzQixDQUFnQyxTQUFoQyxFQUEyQyxLQUEzQztBQUNEO0FBQ0YsR0FWRCxFQU42QixDQWtCN0I7O0FBQ0FILEVBQUFBLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsY0FBMUIsRUFBMENDLE9BQTFDLENBQWtELFVBQUFDLE1BQU0sRUFBSTtBQUMxREEsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVQyxDQUFWLEVBQWE7QUFDNUNBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRixHQUQ0QyxDQUU1Qzs7QUFDQVgsTUFBQUEsUUFBUSxDQUFDWSxhQUFULENBQXVCLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBdkIsRUFBa0RDLGNBQWxELENBQWlFO0FBQy9EQyxRQUFBQSxRQUFRLEVBQUU7QUFEcUQsT0FBakUsRUFINEMsQ0FNNUM7O0FBQ0FoQixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQixPQUFSLENBQWdCLFNBQWhCLEVBQTJCWCxRQUEzQixDQUFvQ0gsUUFBcEMsRUFBOENDLElBQTlDLENBQW1ELFNBQW5ELEVBQThELEtBQTlEO0FBQ0QsS0FSRDtBQVNELEdBVkQsRUFuQjZCLENBK0I3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUQsQ0EzQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIC8vIGJ1cmdlciBtZW51XG4gIHZhciBjaGVja0JveCA9ICQoJyNtc19tZW51LWJ0bicpO1xuICBjaGVja0JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXG4gICQoJyNtc190b2dnbGUnKS5jbGljayhmdW5jdGlvbigpIHtcblxuICAgIGlmICggJCh0aGlzKS5zaWJsaW5ncyhjaGVja0JveCkucHJvcCgnY2hlY2tlZCcpID09IGZhbHNlICkge1xuXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKGNoZWNrQm94KS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKGNoZWNrQm94KS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gc21vb3RoIHNjcm9sbCB2aWEgYW5jaG9yLCBhIG5hdGl2ZSBmdW5jdGlvbiBFUzIwMThcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7ICAgIFxuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7ICAgICAgICBcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIGdvIChzbW9vdGgpXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHsgICAgICAgICAgICBcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnICAgICAgICBcbiAgICAgIH0pO1xuICAgICAgLy8gYW5kIGNsb3NlIHNpZGViYXIgICBcbiAgICAgICQodGhpcykucGFyZW50cygnI21zX25hdicpLnNpYmxpbmdzKGNoZWNrQm94KS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAvLyAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMjApIHtcbiAgLy8gICAgICQoJyN0b1RvcEJ0bicpLmZhZGVJbiggXCJzbG93XCIsIGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICAkKHRoaXMpLnNob3coKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICAkKCcjdG9Ub3BCdG4nKS5mYWRlT3V0KCBcInNsb3dcIiwgZnVuY3Rpb24oKSB7XG4gIC8vICAgICAgICQodGhpcykuc2hvdygpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9KTtcbiAgICBcbn0pOyJdLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZnJpY2FhcG9ydGFwb3J0ZXNlLy4vc3JjL2FwcC5zY3NzPzU2ZGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc3JjL2FwcC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/app.js"],
/******/ 			["./src/app.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkafricaaportaportese"] = self["webpackChunkafricaaportaportese"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;