/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./src/Alata-Regular.ttf */ "./src/Alata-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'CustomFont'; /* Choose a name for your font family */
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    /* Add additional src lines for other font formats if necessary */
    font-weight: normal;
    font-style: normal;
  }

* {
    box-sizing: border-box;
    font-family: 'Alata', sans-serif;
    margin: 0;
}

.dialogBoxes {
    position: relative;
}

.addProjectDialog, .addTaskDialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.newProjectSubmit, .newTaskSubmit {
    max-width: max-content;
}

.newProjectForm, .newTaskForm {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    gap: 7px;
}


.content {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    margin: 0;
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1F2937;
    font-size: 35px;
    font-weight: lighter;
    padding: 20px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5); /* Adding a shadow to the right side */
}

.headerTitle {
    justify-content: center;
    align-items: center;
    color: white;
}

.pageContent {
    display: grid;
    grid-template-columns: 1fr 6fr;
}

.sidebar {
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1F2937;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.5); /* Adding a shadow to the right side */
}

.sidebarTop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

.sidebarButton {
    font-family: 'Alata', sans-serif;
    text-align: center;
    font-size: 1.3em;
    font-weight:lighter;
    color: white;
}

.sidebarProjects {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    font-size: 15px;
}

.addProjectButton, .addTaskButton {
    background-color: #3882F6;
    color: white;
    border-radius: 4px;
    padding: 4px;
    margin: 4px;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.mainContent {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    padding: 8px;
}

.mainContentTitle {
    font-size: 30px;
    font-weight: lighter;
    background-color: #295eb4;
    color: white;
    border-radius: 4px;
    padding-left: 6px;
    padding-top: 6px;
    padding-bottom: 6px;
}

.taskDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 6px;
}

.taskDivLeft {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.taskDivTitle {
    font-size: 20px;
    font-weight: lighter;
}

.taskDivDesc {
    font-size: 15px;
    font-weight: lighter;
}

.taskDivRight {
    display: flex;
    gap: 15px;
    padding-right: 15px;
}

.taskDivDate {
    font-size: 15px;
    font-weight: lighter;
}

.footer {
    display: flex;
    justify-content: center;
    background-color: #1F2937;
    color: white;
    padding: 4px;
    font-size: x-small;
}





`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB,EAAE,uCAAuC;IAClE,+DAA+E;IAC/E,iEAAiE;IACjE,mBAAmB;IACnB,kBAAkB;EACpB;;AAEF;IACI,sBAAsB;IACtB,gCAAgC;IAChC,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;;AAGA;IACI,aAAa;IACb,iCAAiC;IACjC,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,oBAAoB;IACpB,aAAa;IACb,2CAA2C,EAAE,sCAAsC;AACvF;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,yBAAyB;IACzB,iBAAiB;IACjB,oBAAoB;IACpB,2CAA2C,EAAE,sCAAsC;AACvF;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,0CAA0C;IAC1C,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: 'CustomFont'; /* Choose a name for your font family */\n    src: url('/Users/ryan/repos/todolist/src/Alata-Regular.ttf') format('truetype');\n    /* Add additional src lines for other font formats if necessary */\n    font-weight: normal;\n    font-style: normal;\n  }\n\n* {\n    box-sizing: border-box;\n    font-family: 'Alata', sans-serif;\n    margin: 0;\n}\n\n.dialogBoxes {\n    position: relative;\n}\n\n.addProjectDialog, .addTaskDialog {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.newProjectSubmit, .newTaskSubmit {\n    max-width: max-content;\n}\n\n.newProjectForm, .newTaskForm {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 15px;\n    gap: 7px;\n}\n\n\n.content {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    min-height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1F2937;\n    font-size: 35px;\n    font-weight: lighter;\n    padding: 20px;\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5); /* Adding a shadow to the right side */\n}\n\n.headerTitle {\n    justify-content: center;\n    align-items: center;\n    color: white;\n}\n\n.pageContent {\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n}\n\n.sidebar {\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: #1F2937;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.5); /* Adding a shadow to the right side */\n}\n\n.sidebarTop {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    padding: 20px;\n}\n\n.sidebarButton {\n    font-family: 'Alata', sans-serif;\n    text-align: center;\n    font-size: 1.3em;\n    font-weight:lighter;\n    color: white;\n}\n\n.sidebarProjects {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 20px;\n    font-size: 15px;\n}\n\n.addProjectButton, .addTaskButton {\n    background-color: #3882F6;\n    color: white;\n    border-radius: 4px;\n    padding: 4px;\n    margin: 4px;\n    font-size: 16px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.mainContent {\n    grid-column: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n}\n\n.mainContentTitle {\n    font-size: 30px;\n    font-weight: lighter;\n    background-color: #295eb4;\n    color: white;\n    border-radius: 4px;\n    padding-left: 6px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n}\n\n.taskDiv {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 10px;\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n    border-radius: 4px;\n    border: 1px solid #ddd;\n    padding: 6px;\n}\n\n.taskDivLeft {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.taskDivTitle {\n    font-size: 20px;\n    font-weight: lighter;\n}\n\n.taskDivDesc {\n    font-size: 15px;\n    font-weight: lighter;\n}\n\n.taskDivRight {\n    display: flex;\n    gap: 15px;\n    padding-right: 15px;\n}\n\n.taskDivDate {\n    font-size: 15px;\n    font-weight: lighter;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    background-color: #1F2937;\n    color: white;\n    padding: 4px;\n    font-size: x-small;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
/***/ ((module) => {



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
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
/***/ ((module) => {



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
/***/ ((module) => {



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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
/***/ ((module) => {



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
/***/ ((module) => {



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

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject),
/* harmony export */   getAllTasks: () => (/* binding */ getAllTasks),
/* harmony export */   getTaskList: () => (/* binding */ getTaskList),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
const projectList = [];

function Project(projectName) {
    this.projectName = projectName;
    this.projectTaskList = [];
}

// creates a project object based on project name and add the object to projectList array
function addProject(event) {
    event.preventDefault();
    let formData = new FormData(document.forms.newProjectForm);
    let projectName = formData.get('projectName');
    let newProject = new Project(projectName);
    projectList.push(newProject);
    return newProject;
}

function addTaskToProject(newTask) {
    let projectName = document.querySelector('.mainContentTitle').textContent;
    // Find the project based on projectName from projectList
    const project = projectList.find(obj => obj.projectName === projectName);
    console.log("Task added to project Task List");
    project.projectTaskList.push(newTask);
    console.log(project.projectTaskList);
}

// get the task list of project object based on task name
function getTaskList(projectName) {
    const project = projectList.find(obj => obj.projectName === projectName);
    console.log(project.projectTaskList);
    return project.projectTaskList;
}

// iterate through all project objects and concatenate all their projectTaskList
function getAllTasks() {
    let taskList = [];
    for(let proj of projectList) {
        taskList = taskList.concat(proj.projectTaskList);
    }
    return taskList;
}









/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask)
/* harmony export */ });


function Task(taskName, taskDetails, taskDate) {
    this.taskName = taskName;
    this.taskDetails = taskDetails;
    this.taskDate = taskDate;
}

function addTask(event) {
    event.preventDefault();
    let formData = new FormData(document.forms.newTaskForm);
    let taskName = formData.get('taskName');
    let taskDetails = formData.get('taskDetails');
    let taskDate = formData.get('taskDate');
    let newTask = new Task(taskName, taskDetails, taskDate);
    return newTask;
}



/***/ }),

/***/ "./src/loadDisplay.js":
/*!****************************!*\
  !*** ./src/loadDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectSidebar: () => (/* binding */ addProjectSidebar),
/* harmony export */   allTaskDisplay: () => (/* binding */ allTaskDisplay),
/* harmony export */   createTaskDiv: () => (/* binding */ createTaskDiv),
/* harmony export */   initialDisplay: () => (/* binding */ initialDisplay)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// DOM RELATED MODULE




function initialDisplay() {
    const content = document.querySelector('.content');
    // header content
    const header = document.createElement('div');
    header.classList.add('header');
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle');
    headerTitle.textContent = 'NoProcrastination';
    header.appendChild(headerTitle);

    // page content
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
        // side bar top
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    const sidebarTop = document.createElement('div');
    sidebarTop.classList.add('sidebarTop');
    const allTaskButton = document.createElement('div');
    allTaskButton.classList.add('allTaskButton', 'sidebarButton');
    allTaskButton.textContent = 'All Tasks';
    const todayButton = document.createElement('div');
    todayButton.classList.add('todayButton', 'sidebarButton');
    todayButton.textContent = 'Today';
    const importantButton = document.createElement('div');
    importantButton.classList.add('importantButton', 'sidebarButton');
    importantButton.textContent = 'Important';
    sidebarTop.appendChild(allTaskButton);
    sidebarTop.appendChild(todayButton);
    sidebarTop.appendChild(importantButton);
        // side bar bottom
    const sidebarBottom = document.createElement('div');
    sidebarBottom.classList.add('sidebarBottom');
    const sidebarProjects = document.createElement('div');
    sidebarProjects.classList.add('sidebarProjects', 'sidebarButton');
    const addProjectButton = document.createElement('div');
    addProjectButton.textContent = '+ Add Project';
    addProjectButton.classList.add('addProjectButton', 'sidebarButton');
    sidebarBottom.appendChild(sidebarProjects);
    sidebarBottom.appendChild(addProjectButton);
    sidebar.appendChild(sidebarTop);
    sidebar.appendChild(sidebarBottom);
        // main content
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    const mainContentTitle = document.createElement('div');
    mainContentTitle.classList.add('mainContentTitle');
    const mainContentContainer = document.createElement('div');
    mainContentContainer.classList.add('mainContentContainer');
    mainContent.appendChild(mainContentTitle);
    mainContent.append(mainContentContainer);
    pageContent.appendChild(sidebar);
    pageContent.appendChild(mainContent);

    // footer content
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'Copyright OriginalRyan ©';

    // append to html file
    content.appendChild(header);
    content.appendChild(pageContent);
    content.appendChild(footer);
}

function allTaskDisplay() {
    // clear any content in mainContentContainer before rerendering
    let mainContentContainer = document.querySelector('.mainContentContainer');
    while(mainContentContainer.firstChild) {
        mainContentContainer.removeChild(mainContentContainer.firstChild);
    }
    // Change the title
    let mainContentTitle = document.querySelector('.mainContentTitle');
    mainContentTitle.textContent = 'All Tasks';
    let taskList = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.getAllTasks)();
    displayTasks(taskList); // 
}

function todaytaskDisplay() {

}

function importanttaskDisplay() {

}

function addProjectSidebar(projectName) {
    let sidebarProjects = document.querySelector('.sidebarProjects');
    const newProject = document.createElement('div');
    newProject.classList.add('sidebarProject');
    newProject.textContent = projectName;
    newProject.addEventListener('click', displayProject);

    sidebarProjects.appendChild(newProject);
}


function displayProject(event) {
    // clear any projects in mainContentContainer before rerendering
    let mainContentContainer = document.querySelector('.mainContentContainer');
    while(mainContentContainer.firstChild) {
        mainContentContainer.removeChild(mainContentContainer.firstChild);
    }
    // Change the title
    let projectName = event.target.textContent;
    let mainContentTitle = document.querySelector('.mainContentTitle');
    mainContentTitle.textContent = projectName;
    // Add Task Button
    let mainContent = document.querySelector('.mainContent');
    const addTaskButton = document.createElement('div');
    addTaskButton.classList.add('addTaskButton');
    addTaskButton.textContent = '+ Add Task';
    addTaskButton.addEventListener('click', addTaskClick);
        // Ensure add task button is added only once
    if(mainContent.querySelector('.addTaskButton') == null){
        mainContent.appendChild(addTaskButton);
    }
    // Display tasks of project clicked by appending tasks to mainContentContainer
    // 1) Access the tasklist of projectObject
    let taskList = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.getTaskList)(projectName);
    // 2) Append all to the mainContent
    displayTasks(taskList);
}

function addTaskClick() {
    const addTaskDialog = document.querySelector('.addTaskDialog');
    addTaskDialog.showModal();
}

function displayTasks(taskList) {
    for(let task of taskList) {
        let taskName = task.taskName;
        let taskDetails = task.taskDetails;
        let taskDate = task.taskDate;
        createTaskDiv(taskName, taskDetails, taskDate);
    }
}

function createTaskDiv(taskName, taskDetails, taskDate) {
    let mainContentContainer = document.querySelector('.mainContentContainer');
    // create taskDiv
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    // create taskDivLeft
    let taskDivLeft = document.createElement('div');
    taskDivLeft.classList.add('taskDivLeft');
    // create title and description
    let taskDivTitle = document.createElement('div');
    taskDivTitle.classList.add('taskDivTitle');
    taskDivTitle.textContent = taskName;
    let taskDivDesc = document.createElement('div');
    taskDivDesc.classList.add('taskDivDesc');
    taskDivDesc.textContent = taskDetails;
    taskDivLeft.appendChild(taskDivTitle);
    taskDivLeft.appendChild(taskDivDesc);
    // create taskDivRight
    let taskDivRight = document.createElement('div');
    taskDivRight.classList.add('taskDivRight');
    // create date and checkbox
    let taskDivDate = document.createElement('div');
    taskDivDate.classList.add('taskDivDate');
    taskDivDate.textContent = taskDate;
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'completedCheckbox';
    checkbox.name = 'completedCheckbox';
    checkbox.addEventListener('click', completedCheckbox);
    taskDivRight.appendChild(taskDivDate);
    taskDivRight.appendChild(checkbox);

    taskDiv.appendChild(taskDivLeft);
    taskDiv.appendChild(taskDivRight);
    mainContentContainer.appendChild(taskDiv);
}

function completedCheckbox(event) {
    let mainContentContainer = document.querySelector('.mainContentContainer');
    console.log('checkbox clicked');
    let checkbox = event.target;
    let taskDivToBeDeleted = checkbox.parentNode.parentNode;
    mainContentContainer.removeChild(taskDivToBeDeleted);
}





/***/ }),

/***/ "./src/Alata-Regular.ttf":
/*!*******************************!*\
  !*** ./src/Alata-Regular.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a90e0970a7aca7d36f95.ttf";

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _loadDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadDisplay */ "./src/loadDisplay.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");




(0,_loadDisplay__WEBPACK_IMPORTED_MODULE_1__.initialDisplay)();

// Add Project Button
const addProjectDialog = document.querySelector('.addProjectDialog');
const addProjectButton = document.querySelector('.addProjectButton');
addProjectButton.addEventListener('click', () => {
    addProjectDialog.showModal();
})

const newProjectSubmit = document.querySelector('.newProjectSubmit');
newProjectSubmit.addEventListener('click', (event) => {
    let newProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addProject)(event); //new project obj
    (0,_loadDisplay__WEBPACK_IMPORTED_MODULE_1__.addProjectSidebar)(newProject.projectName);
    addProjectDialog.close()
})


// Add Task Submit Button
const addTaskDialog = document.querySelector('.addTaskDialog');
const newTaskSubmit = document.querySelector('.newTaskSubmit');
newTaskSubmit.addEventListener('click', (event) => {
    let newTask = (0,_createTask__WEBPACK_IMPORTED_MODULE_2__.addTask)(event);
    // Link this task to the project
    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(newTask);
    // Get the taskName, taskDetails, taskDate from newTask object
    let taskName = newTask.taskName;
    let taskDetails = newTask.taskDetails;
    let taskDate = newTask.taskDate;
    // Append this latest task to the main container
    (0,_loadDisplay__WEBPACK_IMPORTED_MODULE_1__.createTaskDiv)(taskName, taskDetails, taskDate);
    addTaskDialog.close();
})


// All Tasks Button
const allTaskButton = document.querySelector('.allTaskButton');
allTaskButton.addEventListener('click', () => {
    (0,_loadDisplay__WEBPACK_IMPORTED_MODULE_1__.allTaskDisplay)();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDdUM7QUFDb0I7QUFDdEM7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVztBQUM5Qiw0QkFBNEI7QUFDNUI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFXO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E0RTtBQUNxQjtBQUNoRDs7QUFFakQsNERBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHFCQUFxQiwwREFBVSxTQUFTO0FBQ3hDLElBQUksK0RBQWlCO0FBQ3JCO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQU87QUFDekI7QUFDQSxJQUFJLGdFQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBYTtBQUNqQjtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWM7QUFDbEIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2FkRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvVXNlcnMvcnlhbi9yZXBvcy90b2RvbGlzdC9zcmMvQWxhdGEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ3VzdG9tRm9udCc7IC8qIENob29zZSBhIG5hbWUgZm9yIHlvdXIgZm9udCBmYW1pbHkgKi9cbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgLyogQWRkIGFkZGl0aW9uYWwgc3JjIGxpbmVzIGZvciBvdGhlciBmb250IGZvcm1hdHMgaWYgbmVjZXNzYXJ5ICovXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ0FsYXRhJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5kaWFsb2dCb3hlcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkUHJvamVjdERpYWxvZywgLmFkZFRhc2tEaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5uZXdQcm9qZWN0U3VibWl0LCAubmV3VGFza1N1Ym1pdCB7XG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLm5ld1Byb2plY3RGb3JtLCAubmV3VGFza0Zvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGdhcDogN3B4O1xufVxuXG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkZGluZyBhIHNoYWRvdyB0byB0aGUgcmlnaHQgc2lkZSAqL1xufVxuXG4uaGVhZGVyVGl0bGUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGFnZUNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xufVxuXG4uc2lkZWJhciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBBZGRpbmcgYSBzaGFkb3cgdG8gdGhlIHJpZ2h0IHNpZGUgKi9cbn1cblxuLnNpZGViYXJUb3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2lkZWJhckJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdBbGF0YScsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zaWRlYmFyUHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5hZGRQcm9qZWN0QnV0dG9uLCAuYWRkVGFza0J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODJGNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLm1haW5Db250ZW50VGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk1ZWI0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuXG4udGFza0RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiA2cHg7XG59XG5cbi50YXNrRGl2TGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xufVxuXG4udGFza0RpdlRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi50YXNrRGl2RGVzYyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4udGFza0RpdlJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4udGFza0RpdkRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSwrREFBK0U7SUFDL0UsaUVBQWlFO0lBQ2pFLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsMkNBQTJDLEVBQUUsc0NBQXNDO0FBQ3ZGOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwyQ0FBMkMsRUFBRSxzQ0FBc0M7QUFDdkY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXN0b21Gb250JzsgLyogQ2hvb3NlIGEgbmFtZSBmb3IgeW91ciBmb250IGZhbWlseSAqL1xcbiAgICBzcmM6IHVybCgnL1VzZXJzL3J5YW4vcmVwb3MvdG9kb2xpc3Qvc3JjL0FsYXRhLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICAvKiBBZGQgYWRkaXRpb25hbCBzcmMgbGluZXMgZm9yIG90aGVyIGZvbnQgZm9ybWF0cyBpZiBuZWNlc3NhcnkgKi9cXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0FsYXRhJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGlhbG9nQm94ZXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hZGRQcm9qZWN0RGlhbG9nLCAuYWRkVGFza0RpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5uZXdQcm9qZWN0U3VibWl0LCAubmV3VGFza1N1Ym1pdCB7XFxuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5uZXdQcm9qZWN0Rm9ybSwgLm5ld1Rhc2tGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkZGluZyBhIHNoYWRvdyB0byB0aGUgcmlnaHQgc2lkZSAqL1xcbn1cXG5cXG4uaGVhZGVyVGl0bGUge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGFnZUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQWRkaW5nIGEgc2hhZG93IHRvIHRoZSByaWdodCBzaWRlICovXFxufVxcblxcbi5zaWRlYmFyVG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnNpZGViYXJCdXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ0FsYXRhJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyUHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24sIC5hZGRUYXNrQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODJGNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5tYWluQ29udGVudFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NWViNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4udGFza0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLnRhc2tEaXZMZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50YXNrRGl2VGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4udGFza0RpdkRlc2Mge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4udGFza0RpdlJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4udGFza0RpdkRhdGUge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuZnVuY3Rpb24gUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB0aGlzLnByb2plY3RUYXNrTGlzdCA9IFtdO1xufVxuXG4vLyBjcmVhdGVzIGEgcHJvamVjdCBvYmplY3QgYmFzZWQgb24gcHJvamVjdCBuYW1lIGFuZCBhZGQgdGhlIG9iamVjdCB0byBwcm9qZWN0TGlzdCBhcnJheVxuZnVuY3Rpb24gYWRkUHJvamVjdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRvY3VtZW50LmZvcm1zLm5ld1Byb2plY3RGb3JtKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBmb3JtRGF0YS5nZXQoJ3Byb2plY3ROYW1lJyk7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChuZXdUYXNrKSB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250ZW50VGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICAvLyBGaW5kIHRoZSBwcm9qZWN0IGJhc2VkIG9uIHByb2plY3ROYW1lIGZyb20gcHJvamVjdExpc3RcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZmluZChvYmogPT4gb2JqLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJUYXNrIGFkZGVkIHRvIHByb2plY3QgVGFzayBMaXN0XCIpO1xuICAgIHByb2plY3QucHJvamVjdFRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdC5wcm9qZWN0VGFza0xpc3QpO1xufVxuXG4vLyBnZXQgdGhlIHRhc2sgbGlzdCBvZiBwcm9qZWN0IG9iamVjdCBiYXNlZCBvbiB0YXNrIG5hbWVcbmZ1bmN0aW9uIGdldFRhc2tMaXN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmZpbmQob2JqID0+IG9iai5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QucHJvamVjdFRhc2tMaXN0KTtcbiAgICByZXR1cm4gcHJvamVjdC5wcm9qZWN0VGFza0xpc3Q7XG59XG5cbi8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgcHJvamVjdCBvYmplY3RzIGFuZCBjb25jYXRlbmF0ZSBhbGwgdGhlaXIgcHJvamVjdFRhc2tMaXN0XG5mdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICBsZXQgdGFza0xpc3QgPSBbXTtcbiAgICBmb3IobGV0IHByb2ogb2YgcHJvamVjdExpc3QpIHtcbiAgICAgICAgdGFza0xpc3QgPSB0YXNrTGlzdC5jb25jYXQocHJvai5wcm9qZWN0VGFza0xpc3QpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza0xpc3Q7XG59XG5cblxuXG5cblxuXG5cbmV4cG9ydCB7cHJvamVjdExpc3QsIGFkZFByb2plY3QsIGFkZFRhc2tUb1Byb2plY3QsIGdldFRhc2tMaXN0LCBnZXRBbGxUYXNrc307IiwiXG5cbmZ1bmN0aW9uIFRhc2sodGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSkge1xuICAgIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICB0aGlzLnRhc2tEZXRhaWxzID0gdGFza0RldGFpbHM7XG4gICAgdGhpcy50YXNrRGF0ZSA9IHRhc2tEYXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQuZm9ybXMubmV3VGFza0Zvcm0pO1xuICAgIGxldCB0YXNrTmFtZSA9IGZvcm1EYXRhLmdldCgndGFza05hbWUnKTtcbiAgICBsZXQgdGFza0RldGFpbHMgPSBmb3JtRGF0YS5nZXQoJ3Rhc2tEZXRhaWxzJyk7XG4gICAgbGV0IHRhc2tEYXRlID0gZm9ybURhdGEuZ2V0KCd0YXNrRGF0ZScpO1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSk7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2sgfTsiLCIvLyBET00gUkVMQVRFRCBNT0RVTEVcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuaW1wb3J0IHsgZ2V0VGFza0xpc3QsIGdldEFsbFRhc2tzIH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBpbml0aWFsRGlzcGxheSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAvLyBoZWFkZXIgY29udGVudFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlclRpdGxlJyk7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnTm9Qcm9jcmFzdGluYXRpb24nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbiAgICAvLyBwYWdlIGNvbnRlbnRcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2VDb250ZW50Jyk7XG4gICAgICAgIC8vIHNpZGUgYmFyIHRvcFxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBjb25zdCBzaWRlYmFyVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhclRvcC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyVG9wJyk7XG4gICAgY29uc3QgYWxsVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFsbFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWxsVGFza0J1dHRvbicsICdzaWRlYmFyQnV0dG9uJyk7XG4gICAgYWxsVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuICAgIGNvbnN0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kYXlCdXR0b24nLCAnc2lkZWJhckJ1dHRvbicpO1xuICAgIHRvZGF5QnV0dG9uLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICBjb25zdCBpbXBvcnRhbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbXBvcnRhbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50QnV0dG9uJywgJ3NpZGViYXJCdXR0b24nKTtcbiAgICBpbXBvcnRhbnRCdXR0b24udGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgICBzaWRlYmFyVG9wLmFwcGVuZENoaWxkKGFsbFRhc2tCdXR0b24pO1xuICAgIHNpZGViYXJUb3AuYXBwZW5kQ2hpbGQodG9kYXlCdXR0b24pO1xuICAgIHNpZGViYXJUb3AuYXBwZW5kQ2hpbGQoaW1wb3J0YW50QnV0dG9uKTtcbiAgICAgICAgLy8gc2lkZSBiYXIgYm90dG9tXG4gICAgY29uc3Qgc2lkZWJhckJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJCb3R0b20uY2xhc3NMaXN0LmFkZCgnc2lkZWJhckJvdHRvbScpO1xuICAgIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyUHJvamVjdHMnLCAnc2lkZWJhckJ1dHRvbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJysgQWRkIFByb2plY3QnO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ1dHRvbicsICdzaWRlYmFyQnV0dG9uJyk7XG4gICAgc2lkZWJhckJvdHRvbS5hcHBlbmRDaGlsZChzaWRlYmFyUHJvamVjdHMpO1xuICAgIHNpZGViYXJCb3R0b20uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyVG9wKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJCb3R0b20pO1xuICAgICAgICAvLyBtYWluIGNvbnRlbnRcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50Jyk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRlbnRUaXRsZScpO1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRlbnRDb250YWluZXInKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudFRpdGxlKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmQobWFpbkNvbnRlbnRDb250YWluZXIpO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxuICAgIC8vIGZvb3RlciBjb250ZW50XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgT3JpZ2luYWxSeWFuIMKpJztcblxuICAgIC8vIGFwcGVuZCB0byBodG1sIGZpbGVcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBhbGxUYXNrRGlzcGxheSgpIHtcbiAgICAvLyBjbGVhciBhbnkgY29udGVudCBpbiBtYWluQ29udGVudENvbnRhaW5lciBiZWZvcmUgcmVyZW5kZXJpbmdcbiAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnRDb250YWluZXInKTtcbiAgICB3aGlsZShtYWluQ29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW5Db250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBDaGFuZ2UgdGhlIHRpdGxlXG4gICAgbGV0IG1haW5Db250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnRUaXRsZScpO1xuICAgIG1haW5Db250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICBsZXQgdGFza0xpc3QgPSBnZXRBbGxUYXNrcygpO1xuICAgIGRpc3BsYXlUYXNrcyh0YXNrTGlzdCk7IC8vIFxufVxuXG5mdW5jdGlvbiB0b2RheXRhc2tEaXNwbGF5KCkge1xuXG59XG5cbmZ1bmN0aW9uIGltcG9ydGFudHRhc2tEaXNwbGF5KCkge1xuXG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RTaWRlYmFyKHByb2plY3ROYW1lKSB7XG4gICAgbGV0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyUHJvamVjdHMnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyUHJvamVjdCcpO1xuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVByb2plY3QpO1xuXG4gICAgc2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KGV2ZW50KSB7XG4gICAgLy8gY2xlYXIgYW55IHByb2plY3RzIGluIG1haW5Db250ZW50Q29udGFpbmVyIGJlZm9yZSByZXJlbmRlcmluZ1xuICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudENvbnRhaW5lcicpO1xuICAgIHdoaWxlKG1haW5Db250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENoYW5nZSB0aGUgdGl0bGVcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgbGV0IG1haW5Db250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnRUaXRsZScpO1xuICAgIG1haW5Db250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAvLyBBZGQgVGFzayBCdXR0b25cbiAgICBsZXQgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnQnKTtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnV0dG9uJyk7XG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza0NsaWNrKTtcbiAgICAgICAgLy8gRW5zdXJlIGFkZCB0YXNrIGJ1dHRvbiBpcyBhZGRlZCBvbmx5IG9uY2VcbiAgICBpZihtYWluQ29udGVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0J1dHRvbicpID09IG51bGwpe1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICB9XG4gICAgLy8gRGlzcGxheSB0YXNrcyBvZiBwcm9qZWN0IGNsaWNrZWQgYnkgYXBwZW5kaW5nIHRhc2tzIHRvIG1haW5Db250ZW50Q29udGFpbmVyXG4gICAgLy8gMSkgQWNjZXNzIHRoZSB0YXNrbGlzdCBvZiBwcm9qZWN0T2JqZWN0XG4gICAgbGV0IHRhc2tMaXN0ID0gZ2V0VGFza0xpc3QocHJvamVjdE5hbWUpO1xuICAgIC8vIDIpIEFwcGVuZCBhbGwgdG8gdGhlIG1haW5Db250ZW50XG4gICAgZGlzcGxheVRhc2tzKHRhc2tMaXN0KTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza0NsaWNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0RpYWxvZycpO1xuICAgIGFkZFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyh0YXNrTGlzdCkge1xuICAgIGZvcihsZXQgdGFzayBvZiB0YXNrTGlzdCkge1xuICAgICAgICBsZXQgdGFza05hbWUgPSB0YXNrLnRhc2tOYW1lO1xuICAgICAgICBsZXQgdGFza0RldGFpbHMgPSB0YXNrLnRhc2tEZXRhaWxzO1xuICAgICAgICBsZXQgdGFza0RhdGUgPSB0YXNrLnRhc2tEYXRlO1xuICAgICAgICBjcmVhdGVUYXNrRGl2KHRhc2tOYW1lLCB0YXNrRGV0YWlscywgdGFza0RhdGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rpdih0YXNrTmFtZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlKSB7XG4gICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250ZW50Q29udGFpbmVyJyk7XG4gICAgLy8gY3JlYXRlIHRhc2tEaXZcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFza0RpdicpO1xuICAgIC8vIGNyZWF0ZSB0YXNrRGl2TGVmdFxuICAgIGxldCB0YXNrRGl2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXZMZWZ0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXZMZWZ0Jyk7XG4gICAgLy8gY3JlYXRlIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICAgIGxldCB0YXNrRGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza0RpdlRpdGxlJyk7XG4gICAgdGFza0RpdlRpdGxlLnRleHRDb250ZW50ID0gdGFza05hbWU7XG4gICAgbGV0IHRhc2tEaXZEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RpdkRlc2MuY2xhc3NMaXN0LmFkZCgndGFza0RpdkRlc2MnKTtcbiAgICB0YXNrRGl2RGVzYy50ZXh0Q29udGVudCA9IHRhc2tEZXRhaWxzO1xuICAgIHRhc2tEaXZMZWZ0LmFwcGVuZENoaWxkKHRhc2tEaXZUaXRsZSk7XG4gICAgdGFza0RpdkxlZnQuYXBwZW5kQ2hpbGQodGFza0RpdkRlc2MpO1xuICAgIC8vIGNyZWF0ZSB0YXNrRGl2UmlnaHRcbiAgICBsZXQgdGFza0RpdlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RpdlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXZSaWdodCcpO1xuICAgIC8vIGNyZWF0ZSBkYXRlIGFuZCBjaGVja2JveFxuICAgIGxldCB0YXNrRGl2RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXZEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXZEYXRlJyk7XG4gICAgdGFza0RpdkRhdGUudGV4dENvbnRlbnQgPSB0YXNrRGF0ZTtcbiAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmlkID0gJ2NvbXBsZXRlZENoZWNrYm94JztcbiAgICBjaGVja2JveC5uYW1lID0gJ2NvbXBsZXRlZENoZWNrYm94JztcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBsZXRlZENoZWNrYm94KTtcbiAgICB0YXNrRGl2UmlnaHQuYXBwZW5kQ2hpbGQodGFza0RpdkRhdGUpO1xuICAgIHRhc2tEaXZSaWdodC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEaXZMZWZ0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEaXZSaWdodCk7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZENoZWNrYm94KGV2ZW50KSB7XG4gICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250ZW50Q29udGFpbmVyJyk7XG4gICAgY29uc29sZS5sb2coJ2NoZWNrYm94IGNsaWNrZWQnKTtcbiAgICBsZXQgY2hlY2tib3ggPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IHRhc2tEaXZUb0JlRGVsZXRlZCA9IGNoZWNrYm94LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrRGl2VG9CZURlbGV0ZWQpO1xufVxuXG5cblxuZXhwb3J0IHtpbml0aWFsRGlzcGxheSwgYWRkUHJvamVjdFNpZGViYXIsIGFsbFRhc2tEaXNwbGF5LCBjcmVhdGVUYXNrRGl2fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHByb2plY3RMaXN0LCBhZGRQcm9qZWN0LCBhZGRUYXNrVG9Qcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHsgaW5pdGlhbERpc3BsYXksIGFkZFByb2plY3RTaWRlYmFyLCBhbGxUYXNrRGlzcGxheSwgY3JlYXRlVGFza0RpdiB9IGZyb20gXCIuL2xvYWREaXNwbGF5XCI7XG5pbXBvcnQgeyB0YXNrTGlzdCwgYWRkVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxuaW5pdGlhbERpc3BsYXkoKTtcblxuLy8gQWRkIFByb2plY3QgQnV0dG9uXG5jb25zdCBhZGRQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3REaWFsb2cnKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEJ1dHRvbicpO1xuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xufSlcblxuY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0U3VibWl0Jyk7XG5uZXdQcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBhZGRQcm9qZWN0KGV2ZW50KTsgLy9uZXcgcHJvamVjdCBvYmpcbiAgICBhZGRQcm9qZWN0U2lkZWJhcihuZXdQcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICBhZGRQcm9qZWN0RGlhbG9nLmNsb3NlKClcbn0pXG5cblxuLy8gQWRkIFRhc2sgU3VibWl0IEJ1dHRvblxuY29uc3QgYWRkVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrRGlhbG9nJyk7XG5jb25zdCBuZXdUYXNrU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tTdWJtaXQnKTtcbm5ld1Rhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgbmV3VGFzayA9IGFkZFRhc2soZXZlbnQpO1xuICAgIC8vIExpbmsgdGhpcyB0YXNrIHRvIHRoZSBwcm9qZWN0XG4gICAgYWRkVGFza1RvUHJvamVjdChuZXdUYXNrKTtcbiAgICAvLyBHZXQgdGhlIHRhc2tOYW1lLCB0YXNrRGV0YWlscywgdGFza0RhdGUgZnJvbSBuZXdUYXNrIG9iamVjdFxuICAgIGxldCB0YXNrTmFtZSA9IG5ld1Rhc2sudGFza05hbWU7XG4gICAgbGV0IHRhc2tEZXRhaWxzID0gbmV3VGFzay50YXNrRGV0YWlscztcbiAgICBsZXQgdGFza0RhdGUgPSBuZXdUYXNrLnRhc2tEYXRlO1xuICAgIC8vIEFwcGVuZCB0aGlzIGxhdGVzdCB0YXNrIHRvIHRoZSBtYWluIGNvbnRhaW5lclxuICAgIGNyZWF0ZVRhc2tEaXYodGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSk7XG4gICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xufSlcblxuXG4vLyBBbGwgVGFza3MgQnV0dG9uXG5jb25zdCBhbGxUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFRhc2tCdXR0b24nKTtcbmFsbFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWxsVGFza0Rpc3BsYXkoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9