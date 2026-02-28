(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("toastr", [], factory);
	else if(typeof exports === 'object')
		exports["toastr"] = factory();
	else
		root["toastr"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/index.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/index.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII= */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII="), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII= */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII="), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg== */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg=="), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII= */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII="), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --toast-text-color: #FFFFFF;\n  --toast-link-hover-color: #CCCCCC;\n  --toast-background-color: #030303;\n  --toast-success-color: #51A351;\n  --toast-error-color: #BD362F;\n  --toast-info-color: #2F96B4;\n  --toast-warning-color: #F89406;\n  --toast-progress-color: #000000;\n  --toast-opacity: 0.8;\n  --toast-font-family: Roboto, Helvetica, Arial, sans-serif;\n  --toast-font-weight: 400;\n  --toast-font-size: clamp(14px, 1rem, 16px);\n  --toast-line-height: 1.5;\n  --toast-letter-spacing: 0.00938em;\n  --toast-info-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  --toast-error-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  --toast-success-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  --toast-warning-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n:root[theme=light] {\n  --toast-text-color: #000000;\n  --toast-link-hover-color: #030303;\n  --toast-background-color: #CCCCCC;\n}\n@media (prefers-color-scheme: light) {\n  :root[theme=light] {\n    --toast-text-color: #000000;\n    --toast-link-hover-color: #030303;\n    --toast-background-color: #CCCCCC;\n  }\n}\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  -ms-word-wrap: break-word;\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: var(--toast-text-color);\n}\n.toast-message a:hover {\n  color: var(--toast-link-hover-color);\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: absolute;\n  right: 0.5em;\n  top: 0.1em;\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--toast-text-color);\n  text-shadow: 0 1px 0 rgb(255, 255, 255);\n  opacity: 0.8;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  filter: alpha(opacity=80);\n  line-height: 1;\n}\n.toast-close-button:hover, .toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n  filter: alpha(opacity=40);\n}\n\n.rtl .toast-close-button {\n  left: -0.3em;\n  float: left;\n  right: 0.3em;\n}\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n#toast-container {\n  position: fixed;\n  z-index: 999999;\n  pointer-events: none;\n  font-family: var(--toast-font-family);\n  font-weight: var(--toast-font-weight);\n  font-size: var(--toast-font-size);\n  line-height: var(--toast-line-height);\n  letter-spacing: var(--toast-letter-spacing);\n}\n#toast-container * {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n#toast-container > div {\n  position: relative;\n  pointer-events: auto;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  box-shadow: 0 0 12px #999999;\n  color: var(--toast-text-color);\n  opacity: 0.8;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  filter: alpha(opacity=80);\n}\n#toast-container > div.rtl {\n  direction: rtl;\n  padding: 15px 50px 15px 15px;\n  background-position: right 15px center;\n}\n#toast-container > div:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  filter: alpha(opacity=100);\n  cursor: pointer;\n}\n#toast-container > .toast-info {\n  background-image: var(--toast-info-image) !important;\n}\n#toast-container > .toast-error {\n  background-image: var(--toast-error-image) !important;\n}\n#toast-container > .toast-success {\n  background-image: var(--toast-success-image) !important;\n}\n#toast-container > .toast-warning {\n  background-image: var(--toast-warning-image) !important;\n}\n#toast-container.toast-top-center > div, #toast-container.toast-bottom-center > div {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n#toast-container.toast-top-full-width > div, #toast-container.toast-bottom-full-width > div {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast {\n  background-color: var(--toast-background-color);\n}\n\n.toast-success {\n  background-color: var(--toast-success-color);\n}\n\n.toast-error {\n  background-color: var(--toast-error-color);\n}\n\n.toast-info {\n  background-color: var(--toast-info-color);\n}\n\n.toast-warning {\n  background-color: var(--toast-warning-color);\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: var(--toast-progress-color);\n  opacity: 0.4;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n  filter: alpha(opacity=40);\n}\n\n@media all and (max-width: 240px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  #toast-container > div.rtl {\n    padding: 8px 50px 8px 8px;\n  }\n  #toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n  #toast-container .rtl .toast-close-button {\n    left: -0.2em;\n    right: 0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  #toast-container > div.rtl {\n    padding: 8px 50px 8px 8px;\n  }\n  #toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n  #toast-container .rtl .toast-close-button {\n    left: -0.2em;\n    right: 0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  #toast-container > div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n  #toast-container > div.rtl {\n    padding: 15px 50px 15px 15px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAiBA;EACC,2BAAA;EACA,iCAAA;EACA,iCAAA;EACA,8BAAA;EACA,4BAAA;EACA,2BAAA;EACA,8BAAA;EACA,+BAAA;EACA,oBAAA;EAEA,yDAAA;EACA,wBAAA;EACA,0CAAA;EACA,wBAAA;EACA,iCAAA;EAEA,2DAAA;EACA,4DAAA;EACA,8DAAA;EACA,8DAAA;AAlBD;;AAqBA;EACC,2BAAA;EACA,iCAAA;EACA,iCAAA;AAlBD;AAoBC;EALD;IAME,2BAAA;IACA,iCAAA;IACA,iCAAA;EAjBA;AACF;;AA0CA;EACC,iBAAA;AAvCD;;AA0CA;EARC,yBAD0B;EAE1B,qBAF0B;AA5B3B;AAwCC;;EAEC,8BAAA;AAtCF;AAyCC;EACC,oCAAA;EACA,qBAAA;AAvCF;;AA2CA;EACC,kBAAA;EACA,YAAA;EACG,UAAA;EACH,eAAA;EACA,iBAAA;EACA,8BAAA;EACA,uCAAA;EAnCD,YAoCkB;EAnClB,+DAAA;EACA,yBAAA;EAmCC,cAAA;AAtCD;AAwCC;EAEC,cAxGM;EAyGN,qBAAA;EACA,eAAA;EA3CF,YA4CmB;EA3CnB,+DAAA;EACA,yBAAA;AAKA;;AAyCA;EACC,YAAA;EACA,WAAA;EACA,YAAA;AAtCD;;AAyCA;EACC,UAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AAtCD;;AAyCA;EACC,MAAA;EACA,QAAA;EACA,WAAA;AAtCD;;AAyCA;EACC,SAAA;EACA,QAAA;EACA,WAAA;AAtCD;;AAyCA;EACC,MAAA;EACA,QAAA;EACA,WAAA;AAtCD;;AAyCA;EACC,SAAA;EACA,QAAA;EACA,WAAA;AAtCD;;AAyCA;EACC,SAAA;EACA,UAAA;AAtCD;;AAyCA;EACC,SAAA;EACA,WAAA;AAtCD;;AAyCA;EACC,WAAA;EACA,YAAA;AAtCD;;AAyCA;EACC,YAAA;EACA,UAAA;AAtCD;;AAyCA;EACC,eAAA;EACA,eAAA;EACA,oBAAA;EACA,qCAAA;EACA,qCAAA;EACA,iCAAA;EACA,qCAAA;EACA,2CAAA;AAtCD;AAwCC;EACC,2BAAA;OAAA,sBAAA;AAtCF;AAyCC;EACC,kBAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;EACA,4BAAA;EACA,YAAA;EAzID,8BA0IuB;EACtB,gCAAA;EACA,4BAAA;EAxID,4BAyIoB;EACnB,8BAAA;EAnIF,YAtD4B;EAuD5B,+DAAA;EACA,yBAAA;AA6FA;AAwCC;EACC,cAAA;EACA,4BAAA;EACA,sCAAA;AAtCF;AAyCC;EApJA,4BAqJoB;EA9IrB,UA+ImB;EA9InB,gEAAA;EACA,0BAAA;EA8IE,eAAA;AArCF;AAwCC;EACC,oDAAA;AAtCF;AAyCC;EACC,qDAAA;AAvCF;AA0CC;EACC,uDAAA;AAxCF;AA2CC;EACC,uDAAA;AAzCF;AA4CC;EAEC,YAAA;EACA,iBAAA;EACA,kBAAA;AA3CF;AA8CC;EAEC,UAAA;EACA,iBAAA;EACA,kBAAA;AA7CF;;AAiDA;EACC,+CAAA;AA9CD;;AAiDA;EACC,4CAAA;AA9CD;;AAiDA;EACC,0CAAA;AA9CD;;AAiDA;EACC,yCAAA;AA9CD;;AAiDA;EACC,4CAAA;AA9CD;;AAiDA;EACC,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,6CAAA;EA3MD,YA4MkB;EA3MlB,+DAAA;EACA,yBAAA;AA8JA;;AA+CA;EAGE;IACC,yBAAA;IACA,WAAA;EA9CD;EAiDA;IACC,yBAAA;EA/CD;EAkDA;IACC,aAAA;IACA,WAAA;EAhDD;EAmDA;IACC,YAAA;IACA,YAAA;EAjDD;AACF;AAqDA;EAEE;IACC,yBAAA;IACA,WAAA;EApDD;EAuDA;IACC,yBAAA;EArDD;EAwDA;IACC,aAAA;IACA,WAAA;EAtDD;EAyDA;IACC,YAAA;IACA,YAAA;EAvDD;AACF;AA2DA;EAEE;IACC,4BAAA;IACA,WAAA;EA1DD;EA6DA;IACC,4BAAA;EA3DD;AACF","sourcesContent":["// Variables\n$black: #000000;\n$grey: #999999;\n$light-grey: #CCCCCC;\n$white: #FFFFFF;\n$near-black: #030303;\n$green: #51A351;\n$red: #BD362F;\n$blue: #2F96B4;\n$orange: #F89406;\n$default-container-opacity: .8;\n$default-font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n$default-font-weight: 400;\n$default-font-size: clamp(14px, 1rem, 16px);\n$default-line-height: 1.5;\n$default-letter-spacing: 0.00938em;\n\n:root {\n\t--toast-text-color: #{$white};\n\t--toast-link-hover-color: #{$light-grey};\n\t--toast-background-color: #{$near-black};\n\t--toast-success-color: #{$green};\n\t--toast-error-color: #{$red};\n\t--toast-info-color: #{$blue};\n\t--toast-warning-color: #{$orange};\n\t--toast-progress-color: #{$black};\n\t--toast-opacity: #{$default-container-opacity};\n\n\t--toast-font-family: #{$default-font-family};\n\t--toast-font-weight: #{$default-font-weight};\n\t--toast-font-size: #{$default-font-size};\n\t--toast-line-height: #{$default-line-height};\n\t--toast-letter-spacing: #{$default-letter-spacing};\n\n\t--toast-info-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=\");\n\t--toast-error-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=\");\n\t--toast-success-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==\");\n\t--toast-warning-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=\");\n}\n\n:root[theme=\"light\"] {\n\t--toast-text-color: #{$black};\n\t--toast-link-hover-color: #{$near-black};\n\t--toast-background-color: #{$light-grey};\n\n\t@media (prefers-color-scheme: light) {\n\t\t--toast-text-color: #{$black};\n\t\t--toast-link-hover-color: #{$near-black};\n\t\t--toast-background-color: #{$light-grey};\n\t}\n}\n\n@mixin borderRadius($radius) {\n\tborder-radius: $radius;\n}\n\n@mixin boxShadow($boxShadow) {\n\tbox-shadow: $boxShadow;\n}\n\n@mixin opacity($opacity) {\n\t$opacityPercent: (\n\t\t$opacity * 100\n\t);\nopacity: $opacity;\n-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=#{$opacityPercent});\nfilter: alpha(opacity=$opacityPercent);\n}\n\n@mixin wordWrap($wordWrap: break-word) {\n\t-ms-word-wrap: $wordWrap;\n\tword-wrap: $wordWrap;\n}\n\n.toast-title {\n\tfont-weight: bold;\n}\n\n.toast-message {\n\t@include wordWrap();\n\n\ta,\n\tlabel {\n\t\tcolor: var(--toast-text-color);\n\t}\n\n\ta:hover {\n\t\tcolor: var(--toast-link-hover-color);\n\t\ttext-decoration: none;\n\t}\n}\n\n.toast-close-button {\n\tposition: absolute;\n\tright: 0.5em;\n    top: 0.1em;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tcolor: var(--toast-text-color);\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 1);\n\t@include opacity(0.8);\n\tline-height: 1;\n\n\t&:hover,\n\t&:focus {\n\t\tcolor: $black;\n\t\ttext-decoration: none;\n\t\tcursor: pointer;\n\t\t@include opacity(0.4);\n\t}\n}\n\n.rtl .toast-close-button {\n\tleft: -0.3em;\n\tfloat: left;\n\tright: 0.3em;\n}\n\nbutton.toast-close-button {\n\tpadding: 0;\n\tcursor: pointer;\n\tbackground: transparent;\n\tborder: 0;\n\tappearance: none;\n}\n\n.toast-top-center {\n\ttop: 0;\n\tright: 0;\n\twidth: 100%;\n}\n\n.toast-bottom-center {\n\tbottom: 0;\n\tright: 0;\n\twidth: 100%;\n}\n\n.toast-top-full-width {\n\ttop: 0;\n\tright: 0;\n\twidth: 100%;\n}\n\n.toast-bottom-full-width {\n\tbottom: 0;\n\tright: 0;\n\twidth: 100%;\n}\n\n.toast-top-left {\n\ttop: 12px;\n\tleft: 12px;\n}\n\n.toast-top-right {\n\ttop: 12px;\n\tright: 12px;\n}\n\n.toast-bottom-right {\n\tright: 12px;\n\tbottom: 12px;\n}\n\n.toast-bottom-left {\n\tbottom: 12px;\n\tleft: 12px;\n}\n\n#toast-container {\n\tposition: fixed;\n\tz-index: 999999;\n\tpointer-events: none;\n\tfont-family: var(--toast-font-family);\n\tfont-weight: var(--toast-font-weight);\n\tfont-size: var(--toast-font-size);\n\tline-height: var(--toast-line-height);\n\tletter-spacing: var(--toast-letter-spacing);\n\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\n\t>div {\n\t\tposition: relative;\n\t\tpointer-events: auto;\n\t\toverflow: hidden;\n\t\tmargin: 0 0 6px;\n\t\tpadding: 15px 15px 15px 50px;\n\t\twidth: 300px;\n\t\t@include borderRadius(3px 3px 3px 3px);\n\t\tbackground-position: 15px center;\n\t\tbackground-repeat: no-repeat;\n\t\t@include boxShadow(0 0 12px $grey);\n\t\tcolor: var(--toast-text-color);\n\t\t@include opacity($default-container-opacity);\n\t}\n\n\t>div.rtl {\n\t\tdirection: rtl;\n\t\tpadding: 15px 50px 15px 15px;\n\t\tbackground-position: right 15px center;\n\t}\n\n\t>div:hover {\n\t\t@include boxShadow(0 0 12px $black);\n\t\t@include opacity(1);\n\t\tcursor: pointer;\n\t}\n\n\t>.toast-info {\n\t\tbackground-image: var(--toast-info-image) !important;\n\t}\n\n\t>.toast-error {\n\t\tbackground-image: var(--toast-error-image) !important;\n\t}\n\n\t>.toast-success {\n\t\tbackground-image: var(--toast-success-image) !important;\n\t}\n\n\t>.toast-warning {\n\t\tbackground-image: var(--toast-warning-image) !important;\n\t}\n\n\t&.toast-top-center>div,\n\t&.toast-bottom-center>div {\n\t\twidth: 300px;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\n\t&.toast-top-full-width>div,\n\t&.toast-bottom-full-width>div {\n\t\twidth: 96%;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n}\n\n.toast {\n\tbackground-color: var(--toast-background-color);\n}\n\n.toast-success {\n\tbackground-color: var(--toast-success-color);\n}\n\n.toast-error {\n\tbackground-color: var(--toast-error-color);\n}\n\n.toast-info {\n\tbackground-color: var(--toast-info-color);\n}\n\n.toast-warning {\n\tbackground-color: var(--toast-warning-color);\n}\n\n.toast-progress {\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n\theight: 4px;\n\tbackground-color: var(--toast-progress-color);\n\t@include opacity(0.4);\n}\n\n@media all and (max-width: 240px) {\n\t#toast-container {\n\n\t\t>div {\n\t\t\tpadding: 8px 8px 8px 50px;\n\t\t\twidth: 11em;\n\t\t}\n\n\t\t>div.rtl {\n\t\t\tpadding: 8px 50px 8px 8px;\n\t\t}\n\n\t\t& .toast-close-button {\n\t\t\tright: -0.2em;\n\t\t\ttop: -0.2em;\n\t\t}\n\n\t\t& .rtl .toast-close-button {\n\t\t\tleft: -0.2em;\n\t\t\tright: 0.2em;\n\t\t}\n\t}\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n\t#toast-container {\n\t\t>div {\n\t\t\tpadding: 8px 8px 8px 50px;\n\t\t\twidth: 18em;\n\t\t}\n\n\t\t>div.rtl {\n\t\t\tpadding: 8px 50px 8px 8px;\n\t\t}\n\n\t\t& .toast-close-button {\n\t\t\tright: -0.2em;\n\t\t\ttop: -0.2em;\n\t\t}\n\n\t\t& .rtl .toast-close-button {\n\t\t\tleft: -0.2em;\n\t\t\tright: 0.2em;\n\t\t}\n\t}\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n\t#toast-container {\n\t\t>div {\n\t\t\tpadding: 15px 15px 15px 50px;\n\t\t\twidth: 25em;\n\t\t}\n\n\t\t>div.rtl {\n\t\t\tpadding: 15px 50px 15px 15px;\n\t\t}\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Toast.ts":
/*!**********************!*\
  !*** ./src/Toast.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toast: function() { return /* binding */ Toast; }
/* harmony export */ });
/* harmony import */ var _ToastAnimator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastAnimator */ "./src/ToastAnimator.ts");
/* harmony import */ var _ToastTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastTimer */ "./src/ToastTimer.ts");
/* harmony import */ var _ToastBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastBuilder */ "./src/ToastBuilder.ts");



/**
 * Represents an individual toast notification with its own state and behavior
 */
class Toast {
    constructor(id, map, options, onRemoveCallback) {
        this.onRemoveCallback = onRemoveCallback;
        this.state = 'visible';
        this.isHovered = false;
        this.id = id;
        this.map = map;
        this.options = options;
        this.startTime = new Date();
        // Build DOM elements
        const elements = _ToastBuilder__WEBPACK_IMPORTED_MODULE_2__.ToastBuilder.build(map, options);
        this.element = elements.toastElement;
        this.closeElement = elements.closeElement;
        // Initialize timer
        this.timer = new _ToastTimer__WEBPACK_IMPORTED_MODULE_1__.ToastTimer(this.element, options, () => this.hide());
        // Setup event handlers
        this.setupEventHandlers();
    }
    /**
     * Show the toast notification
     */
    show() {
        this.element.style.display = 'none';
        _ToastAnimator__WEBPACK_IMPORTED_MODULE_0__.ToastAnimator.show(this.element, this.options.showMethod, this.options.showDuration, this.options.showEasing, () => {
            this.options.onShown?.();
        });
        // Start timer immediately, not after animation
        this.timer.start();
    }
    /**
     * Hide the toast notification
     */
    hide(force = false) {
        // Don't hide if focused unless forced
        if (!force && this.element.matches(':focus')) {
            return;
        }
        this.timer.stop();
        _ToastAnimator__WEBPACK_IMPORTED_MODULE_0__.ToastAnimator.hide(this.element, () => {
            this.remove();
            this.options.onHidden?.();
        }, this.options.hideMethod, this.options.hideDuration, this.options.hideEasing);
    }
    /**
     * Remove the toast from DOM
     */
    remove() {
        this.state = 'hidden';
        this.endTime = new Date();
        this.timer.stop();
        this.onRemoveCallback(this);
    }
    /**
     * Get the toast response object
     */
    getResponse() {
        return {
            toastId: this.id,
            state: this.state,
            startTime: this.startTime,
            endTime: this.endTime,
            options: this.options,
            map: this.map,
        };
    }
    /**
     * Check if the toast element is visible in the DOM
     */
    isVisible() {
        if (typeof window?.getComputedStyle === 'function') {
            return (window.getComputedStyle(this.element).display !== 'none' &&
                window.getComputedStyle(this.element).visibility !== 'hidden' &&
                this.element.offsetWidth > 0 &&
                this.element.offsetHeight > 0);
        }
        return this.element && this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
    }
    /**
     * Setup event handlers for the toast
     */
    setupEventHandlers() {
        // Hover events to pause/resume timer
        if (this.options.closeOnHover) {
            this.element.addEventListener('mouseenter', () => this.handleMouseEnter());
            this.element.addEventListener('mouseleave', () => this.handleMouseLeave());
        }
        // Click to dismiss
        if (!this.options.onclick && this.options.tapToDismiss) {
            this.element.addEventListener('click', () => this.hide());
        }
        // Close button
        if (this.options.closeButton && this.closeElement) {
            this.closeElement.addEventListener('click', (event) => {
                event.stopPropagation();
                this.options.onCloseClick?.(event);
                this.hide();
            });
        }
        // Custom click handler
        if (this.options.onclick) {
            this.element.addEventListener('click', (event) => {
                this.options.onclick(event);
                this.hide();
            });
        }
    }
    /**
     * Handle mouse enter event
     */
    handleMouseEnter() {
        if (!this.isHovered) {
            this.isHovered = true;
            this.timer.pause();
        }
    }
    /**
     * Handle mouse leave event
     */
    handleMouseLeave() {
        if (this.isHovered) {
            this.isHovered = false;
            this.timer.resume();
        }
    }
}


/***/ }),

/***/ "./src/ToastAnimator.ts":
/*!******************************!*\
  !*** ./src/ToastAnimator.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastAnimator: function() { return /* binding */ ToastAnimator; }
/* harmony export */ });
/**
 * Handles toast animation logic (show/hide effects)
 */
class ToastAnimator {
    /**
     * Show element with animation
     */
    static show(element, method, duration, easing, onComplete) {
        if (method === 'fadeIn') {
            element.style.transition = `opacity ${duration}ms ${easing}`;
            element.style.opacity = '0';
            element.style.display = 'block';
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                onComplete?.();
            });
        }
        else if (method === 'slideDown') {
            element.style.transition = `max-height ${duration}ms ${easing}`;
            element.style.maxHeight = '0';
            element.style.display = 'block';
            requestAnimationFrame(() => {
                element.style.maxHeight = `${element.scrollHeight}px`;
                onComplete?.();
            });
        }
        else {
            element.style.display = 'block';
            onComplete?.();
        }
    }
    /**
     * Hide element with animation
     */
    static hide(element, onComplete, method, duration, easing) {
        if (method === 'fadeOut' && duration) {
            element.style.transition = `opacity ${duration}ms ${easing}`;
            element.style.opacity = '1';
            requestAnimationFrame(() => (element.style.opacity = '0'));
            setTimeout(() => {
                element.style.display = 'none';
                onComplete();
            }, duration);
        }
        else {
            element.style.display = 'none';
            onComplete();
        }
    }
}


/***/ }),

/***/ "./src/ToastBuilder.ts":
/*!*****************************!*\
  !*** ./src/ToastBuilder.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastBuilder: function() { return /* binding */ ToastBuilder; }
/* harmony export */ });
/**
 * Builds toast DOM elements
 */
class ToastBuilder {
    /**
     * Escape HTML to prevent XSS
     */
    static escapeHtml(source) {
        return source.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    /**
     * Create close button element
     */
    static createCloseButton() {
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.innerHTML = '&times;';
        return btn;
    }
    /**
     * Build a complete toast element with all its components
     */
    static build(map, options) {
        const toastElement = document.createElement('div');
        const titleElement = document.createElement('div');
        const messageElement = document.createElement('div');
        const progressElement = document.createElement('div');
        const closeElement = options?.closeHtml || document.createElement('div');
        // Apply toast classes
        if (map.iconClass) {
            if (typeof options.toastClass === 'string') {
                options.toastClass.split(' ').forEach((className) => toastElement.classList.add(className));
            }
            else if (Array.isArray(options.toastClass)) {
                options.toastClass.forEach((value) => toastElement.classList.add(value));
            }
            toastElement.classList.add(map.iconClass);
        }
        // Add title
        if (map.title) {
            titleElement.className = options.titleClass;
            titleElement.innerHTML = options.escapeHtml ? this.escapeHtml(map.title) : map.title;
            toastElement.appendChild(titleElement);
        }
        // Add message
        if (map.message) {
            messageElement.className = options.messageClass;
            messageElement.innerHTML = options.escapeHtml ? this.escapeHtml(map.message) : map.message;
            toastElement.appendChild(messageElement);
        }
        // Add close button
        if (options.closeButton) {
            closeElement.className = options.closeClass;
            closeElement.setAttribute('role', 'button');
            closeElement.innerHTML = options.closeHtml.innerHTML;
            toastElement.appendChild(closeElement);
        }
        // Add progress bar
        if (options.progressBar) {
            progressElement.className = options.progressClass;
            toastElement.appendChild(progressElement);
        }
        // RTL support
        if (options.rtl) {
            toastElement.classList.add('rtl');
        }
        // Set ARIA attributes
        let ariaValue = 'polite';
        if (map.iconClass === 'toast-error' || map.iconClass === 'toast-warning') {
            ariaValue = 'assertive';
        }
        toastElement.setAttribute('aria-live', ariaValue);
        return {
            toastElement,
            titleElement,
            messageElement,
            progressElement,
            closeElement,
        };
    }
}


/***/ }),

/***/ "./src/ToastContainer.ts":
/*!*******************************!*\
  !*** ./src/ToastContainer.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastContainer: function() { return /* binding */ ToastContainer; }
/* harmony export */ });
/**
 * Manages the toast container element
 */
class ToastContainer {
    /**
     * Get or create the container element
     * @param options Toast options
     * @param create If true, creates a new container. If 'ifExists', only uses existing elements. If false, returns current container only.
     */
    getContainer(options, create = false) {
        // Check if container exists in memory and is still in DOM
        if (this.container && this.container.parentNode) {
            return this.container;
        }
        // Container was removed from DOM, clear reference
        if (this.container && !this.container.parentNode) {
            this.container = undefined;
        }
        // If not creating and not checking for existing, just return current state
        if (create === false) {
            return this.container;
        }
        // Try to find existing container in DOM (for 'ifExists' or true)
        const existingContainer = document.getElementById(options.containerId);
        if (existingContainer) {
            this.container = existingContainer;
            return this.container;
        }
        // Create new container only if explicitly requested with true (not 'ifExists')
        if (create === true) {
            this.container = this.createContainer(options);
        }
        return this.container;
    }
    /**
     * Add a toast element to the container
     */
    addToast(toastElement, options) {
        if (!this.container) {
            this.getContainer(options, true);
        }
        if (options.newestOnTop) {
            this.container?.prepend(toastElement);
        }
        else {
            this.container?.append(toastElement);
        }
    }
    /**
     * Remove a toast element from the container
     */
    removeToast(toastElement) {
        // Only remove if element is no longer visible
        if (!this.isVisible(toastElement)) {
            toastElement.remove();
            // Note: We don't remove the empty container here anymore.
            // The container persists to match expected behavior.
            // It can be removed explicitly via clearReference() if needed.
        }
    }
    /**
     * Check if element is visible
     */
    isVisible(elem) {
        if (typeof window?.getComputedStyle === 'function') {
            return (window.getComputedStyle(elem).display !== 'none' &&
                window.getComputedStyle(elem).visibility !== 'hidden' &&
                elem.offsetWidth > 0 &&
                elem.offsetHeight > 0);
        }
        return elem && elem.offsetWidth > 0 && elem.offsetHeight > 0;
    }
    /**
     * Clear the container reference
     */
    clearReference() {
        this.container = undefined;
    }
    /**
     * Check if container has any toasts
     */
    hasToasts() {
        return this.container ? this.container.children.length > 0 : false;
    }
    /**
     * Get all toast elements in the container
     */
    getAllToasts() {
        if (!this.container) {
            return [];
        }
        return Array.from(this.container.children);
    }
    /**
     * Create the container element
     * Note: This only creates the container if an element with the containerId already exists,
     * OR if we find it appropriate to create a new one (when explicitly requested via notify)
     */
    createContainer(options) {
        // Check if an element with this ID already exists
        const existingElement = document.getElementById(options.containerId);
        if (existingElement) {
            // Element exists, enhance it with our class and return it
            if (!existingElement.classList.contains(options.positionClass.split(' ')[0])) {
                existingElement.className = options.positionClass;
            }
            return existingElement;
        }
        const target = document.querySelector(options.target);
        if (!target) {
            // Target doesn't exist, cannot create container
            return undefined;
        }
        const container = document.createElement('div');
        container.id = options.containerId;
        container.className = options.positionClass;
        target.appendChild(container);
        return container;
    }
}


/***/ }),

/***/ "./src/ToastTimer.ts":
/*!***************************!*\
  !*** ./src/ToastTimer.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastTimer: function() { return /* binding */ ToastTimer; }
/* harmony export */ });
/**
 * Manages timers and progress bar for an individual toast notification
 */
class ToastTimer {
    constructor(toastElement, options, onHideCallback) {
        this.toastElement = toastElement;
        this.options = options;
        this.onHideCallback = onHideCallback;
        this.hideTimeoutId = null;
        this.progressIntervalId = null;
        this.hideEta = 0;
        this.maxHideTime = 0;
        this.isPaused = false;
    }
    /**
     * Start the hide timer and progress bar
     */
    start() {
        if (this.options.timeOut > 0) {
            this.maxHideTime = this.options.timeOut;
            this.hideEta = Date.now() + this.maxHideTime;
            this.hideTimeoutId = window.setTimeout(() => {
                if (!this.isPaused) {
                    this.onHideCallback();
                }
            }, this.options.timeOut);
            if (this.options.progressBar) {
                this.startProgressBar();
            }
        }
    }
    /**
     * Pause the timer (e.g., on mouseover)
     */
    pause() {
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
            this.hideTimeoutId = null;
        }
        if (this.progressIntervalId) {
            clearInterval(this.progressIntervalId);
            this.progressIntervalId = null;
        }
        this.isPaused = true;
        this.hideEta = 0;
    }
    /**
     * Resume the timer with extended timeout (e.g., on mouseout)
     */
    resume() {
        const timeout = this.options.extendedTimeOut > 0 ? this.options.extendedTimeOut : this.options.timeOut;
        if (timeout > 0) {
            this.maxHideTime = timeout;
            this.hideEta = Date.now() + this.maxHideTime;
            this.hideTimeoutId = window.setTimeout(() => {
                this.onHideCallback();
            }, timeout);
            if (this.options.progressBar) {
                this.startProgressBar();
            }
            this.isPaused = false;
        }
    }
    /**
     * Stop all timers
     */
    stop() {
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
            this.hideTimeoutId = null;
        }
        if (this.progressIntervalId) {
            clearInterval(this.progressIntervalId);
            this.progressIntervalId = null;
        }
    }
    /**
     * Check if timer is currently paused
     */
    isPausedState() {
        return this.isPaused;
    }
    /**
     * Start the progress bar animation
     */
    startProgressBar() {
        if (this.progressIntervalId) {
            clearInterval(this.progressIntervalId);
        }
        this.progressIntervalId = window.setInterval(() => {
            this.updateProgress();
        }, 10);
    }
    /**
     * Update progress bar width
     */
    updateProgress() {
        const percentage = ((this.hideEta - Date.now()) / this.maxHideTime) * 100;
        const progressElement = this.toastElement.querySelector(`.${this.options.progressClass}`);
        if (progressElement) {
            progressElement.style.width = `${Math.max(0, percentage)}%`;
        }
    }
}


/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg== ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII= ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=";

/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII= ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=";

/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII= ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"toastr": 0
/******/ 		};
/******/ 		
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toast */ "./src/Toast.ts");
/* harmony import */ var _ToastContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastContainer */ "./src/ToastContainer.ts");
/* harmony import */ var _ToastBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastBuilder */ "./src/ToastBuilder.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");




/**
 * Main Toastr class that orchestrates toast notifications
 */
class Toastr {
    /**
     * Get the container element (for backward compatibility)
     * Returns the container only if it's already been set/created by toastr
     */
    get container() {
        return this.toastContainer.getContainer(this.getOptions(), false);
    }
    /**
     * Set the container element (for backward compatibility)
     */
    set container(value) {
        // Clear the reference in the container manager
        if (value === undefined) {
            this.toastContainer.clearReference();
        }
    }
    constructor(options = {}) {
        this.listener = null;
        this.toastId = 0;
        this.toasts = new Map();
        this.options = {};
        this.version = '3.0.0';
        this.toastType = {
            error: 'error',
            info: 'info',
            success: 'success',
            warning: 'warning',
        };
        const defaultOptions = this.getDefaults();
        this.options = {
            ...defaultOptions,
            ...options,
        };
        this.toastContainer = new _ToastContainer__WEBPACK_IMPORTED_MODULE_1__.ToastContainer();
    }
    /**
     * Create an error toast notification.
     * @param message The message to be displayed.
     * @param title The title of the toast notification.
     * @param optionsOverride Additional options to override the defaults.
     * @returns The created notification element or null if the notification was prevented.
     */
    error(message, title, optionsOverride) {
        return this.notify({
            type: this.toastType.error,
            iconClass: this.getOptions().iconClasses?.error,
            message,
            optionsOverride,
            title,
        });
    }
    /**
     * Create an info toast notification.
     * @param message The message to be displayed.
     * @param title The title of the toast notification.
     * @param optionsOverride Additional options to override the defaults.
     * @returns The created notification element or null if the notification was prevented.
     */
    info(message, title, optionsOverride) {
        return this.notify({
            type: this.toastType.info,
            iconClass: this.getOptions().iconClasses?.info,
            message,
            optionsOverride,
            title,
        });
    }
    /**
     * Create a success toast notification.
     * @param message The message to be displayed.
     * @param title The title of the toast notification.
     * @param optionsOverride Additional options to override the defaults.
     * @returns The created notification element or null if the notification was prevented.
     */
    success(message, title, optionsOverride) {
        return this.notify({
            type: this.toastType.success,
            iconClass: this.getOptions().iconClasses?.success,
            message,
            optionsOverride,
            title,
        });
    }
    /**
     * Create a warning toast notification.
     * @param message The message to be displayed.
     * @param title The title of the toast notification.
     * @param optionsOverride Additional options to override the defaults.
     * @returns The created notification element or null if the notification was prevented.
     */
    warning(message, title, optionsOverride) {
        return this.notify({
            type: this.toastType.warning,
            iconClass: this.getOptions().iconClasses?.warning,
            message,
            optionsOverride,
            title,
        });
    }
    /**
     * Remove a specific or all toast notifications.
     * @param toastElement The specific toast notification element to remove. If not provided, all toast notifications will be removed.
     * @param clearOptions Options to override the defaults.
     * @param clearOptions.force If true, the toast notification will be removed even if it is being hovered.
     * @returns void
     */
    clear(toastElement, clearOptions) {
        // Get or create container (will create if doesn't exist but element with ID exists in DOM)
        if (!this.container) {
            this.getContainer(this.getOptions(), 'ifExists');
        }
        if (toastElement) {
            const toast = this.findToastByElement(toastElement);
            if (toast) {
                toast.hide(clearOptions?.force);
            }
        }
        else {
            // Clear all toasts
            this.toasts.forEach((toast) => toast.hide(clearOptions?.force));
        }
    }
    /**
     * Remove a specific or all toast notifications.
     * @param toastElement The specific toast notification element to remove. If not provided, all toast notifications will be removed.
     * @returns void
     */
    remove(toastElement) {
        const options = this.getOptions();
        // Try to get existing container (won't create new one, only uses if exists in DOM)
        if (!this.container) {
            this.getContainer(options, 'ifExists');
        }
        if (toastElement) {
            // Don't remove if focused
            if (!toastElement.matches(':focus')) {
                const toast = this.findToastByElement(toastElement);
                if (toast) {
                    toast.remove();
                }
            }
        }
        else {
            // Remove container if it has toasts
            if (this.toastContainer.hasToasts()) {
                this.toasts.forEach((toast) => toast.remove());
            }
        }
    }
    /**
     * Subscribe to toast events
     */
    subscribe(callback) {
        this.listener = callback;
    }
    /**
     * Returns the container element used for the toast notifications.
     * @param options The toast options. If not provided, the default options are used.
     * @param create If true, the container is created if it does not exist. If 'ifExists', only returns existing container.
     * @returns The container element.
     */
    getContainer(options, create = false) {
        if (!options) {
            options = this.getOptions();
        }
        return this.toastContainer.getContainer(options, create);
    }
    /**
     * Create and show a toast notification
     */
    notify(map) {
        const options = this.getOptions();
        const iconClass = map?.optionsOverride?.iconClass || map.iconClass || options.iconClass;
        map.iconClass = iconClass;
        if (map.optionsOverride) {
            Object.assign(options, map.optionsOverride);
        }
        if (this.shouldExit(options, map)) {
            return null;
        }
        this.toastId++;
        // Create container
        this.toastContainer.getContainer(options, true);
        // Create toast instance
        const toast = new _Toast__WEBPACK_IMPORTED_MODULE_0__.Toast(this.toastId, map, options, (removedToast) => this.handleToastRemoval(removedToast));
        // Add to container
        this.toastContainer.addToast(toast.element, options);
        // Store reference
        this.toasts.set(this.toastId, toast);
        // Show the toast
        toast.show();
        // Publish response
        this.publish(toast.getResponse());
        if (options.debug && console) {
            console.log(toast.getResponse());
        }
        return toast.element;
    }
    /**
     * Handle toast removal callback
     */
    handleToastRemoval(toast) {
        this.toastContainer.removeToast(toast.element);
        this.toasts.delete(toast.id);
        // Clear previous toast reference if container is empty
        if (!this.toastContainer.hasToasts()) {
            this.previousToast = undefined;
        }
    }
    /**
     * Find toast by element
     */
    findToastByElement(element) {
        for (const toast of this.toasts.values()) {
            if (toast.element === element) {
                return toast;
            }
        }
        return undefined;
    }
    /**
     * Check if notification should be prevented
     */
    shouldExit(options, map) {
        if (options.preventDuplicates && map.message === this.previousToast) {
            return true;
        }
        this.previousToast = map.message;
        return false;
    }
    /**
     * Get merged options
     */
    getOptions() {
        return {
            ...this.getDefaults(),
            ...this.options,
        };
    }
    /**
     * Get default options
     */
    getDefaults() {
        return {
            tapToDismiss: true,
            toastClass: 'toast',
            containerId: 'toast-container',
            debug: false,
            showMethod: 'fadeIn',
            showDuration: 300,
            showEasing: 'swing',
            onShown: undefined,
            hideMethod: 'fadeOut',
            hideDuration: 1000,
            hideEasing: 'swing',
            onHidden: undefined,
            closeMethod: 'fadeOut',
            closeDuration: 1000,
            closeEasing: 'swing',
            closeOnHover: true,
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning',
            },
            iconClass: 'toast-info',
            positionClass: 'toast-top-right',
            timeOut: 5000,
            titleClass: 'toast-title',
            messageClass: 'toast-message',
            escapeHtml: false,
            target: 'body',
            closeHtml: _ToastBuilder__WEBPACK_IMPORTED_MODULE_2__.ToastBuilder.createCloseButton(),
            closeClass: 'toast-close-button',
            newestOnTop: true,
            preventDuplicates: false,
            progressBar: false,
            progressClass: 'toast-progress',
            rtl: false,
        };
    }
    /**
     * Publish toast response to subscriber
     */
    publish(response) {
        if (this.listener) {
            this.listener(response);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Toastr);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=toastr.umd.js.map