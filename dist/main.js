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

.sidebarProject {
    display: flex;
    justify-content: center;
    gap: 8px;
}

.taskCheckbox, .projectCheckbox {
    flex-grow: 0;
    flex-shrink: 0;
}

.taskCheckbox {
    width: 20px;
    height: 20px;
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





`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB,EAAE,uCAAuC;IAClE,+DAAsF;IACtF,iEAAiE;IACjE,mBAAmB;IACnB,kBAAkB;EACpB;;AAEF;IACI,sBAAsB;IACtB,gCAAgC;IAChC,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;;AAGA;IACI,aAAa;IACb,iCAAiC;IACjC,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,oBAAoB;IACpB,aAAa;IACb,2CAA2C,EAAE,sCAAsC;AACvF;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,yBAAyB;IACzB,iBAAiB;IACjB,oBAAoB;IACpB,2CAA2C,EAAE,sCAAsC;AACvF;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,0CAA0C;IAC1C,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: 'CustomFont'; /* Choose a name for your font family */\n    src: url('/Users/ryan/Desktop/odin/todolist/src/Alata-Regular.ttf') format('truetype');\n    /* Add additional src lines for other font formats if necessary */\n    font-weight: normal;\n    font-style: normal;\n  }\n  \n* {\n    box-sizing: border-box;\n    font-family: 'Alata', sans-serif;\n    margin: 0;\n}\n\n.dialogBoxes {\n    position: relative;\n}\n\n.addProjectDialog, .addTaskDialog {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.newProjectSubmit, .newTaskSubmit {\n    max-width: max-content;\n}\n\n.newProjectForm, .newTaskForm {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 15px;\n    gap: 7px;\n}\n\n\n.content {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    min-height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1F2937;\n    font-size: 35px;\n    font-weight: lighter;\n    padding: 20px;\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5); /* Adding a shadow to the right side */\n}\n\n.headerTitle {\n    justify-content: center;\n    align-items: center;\n    color: white;\n}\n\n.pageContent {\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n}\n\n.sidebar {\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: #1F2937;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.5); /* Adding a shadow to the right side */\n}\n\n.sidebarTop {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    padding: 20px;\n}\n\n.sidebarButton {\n    font-family: 'Alata', sans-serif;\n    text-align: center;\n    font-size: 1.3em;\n    font-weight:lighter;\n    color: white;\n}\n\n.sidebarProjects {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 20px;\n    font-size: 15px;\n}\n\n.sidebarProject {\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n}\n\n.taskCheckbox, .projectCheckbox {\n    flex-grow: 0;\n    flex-shrink: 0;\n}\n\n.taskCheckbox {\n    width: 20px;\n    height: 20px;\n}\n\n.addProjectButton, .addTaskButton {\n    background-color: #3882F6;\n    color: white;\n    border-radius: 4px;\n    padding: 4px;\n    margin: 4px;\n    font-size: 16px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.mainContent {\n    grid-column: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n}\n\n.mainContentTitle {\n    font-size: 30px;\n    font-weight: lighter;\n    background-color: #295eb4;\n    color: white;\n    border-radius: 4px;\n    padding-left: 6px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n}\n\n.taskDiv {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 10px;\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n    border-radius: 4px;\n    border: 1px solid #ddd;\n    padding: 6px;\n}\n\n.taskDivLeft {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.taskDivTitle {\n    font-size: 20px;\n    font-weight: lighter;\n}\n\n.taskDivDesc {\n    font-size: 15px;\n    font-weight: lighter;\n}\n\n.taskDivRight {\n    display: flex;\n    gap: 15px;\n    padding-right: 15px;\n}\n\n.taskDivDate {\n    font-size: 15px;\n    font-weight: lighter;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    background-color: #1F2937;\n    color: white;\n    padding: 4px;\n    font-size: x-small;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getAllTasks: () => (/* binding */ getAllTasks),
/* harmony export */   getProjectNameByTask: () => (/* binding */ getProjectNameByTask),
/* harmony export */   getTaskList: () => (/* binding */ getTaskList),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   removeTaskFromProject: () => (/* binding */ removeTaskFromProject)
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
    // update local storage projectList
    updateLocalStorage(projectList);
    return newProject;
}

function addTaskToProject(newTask) {
    let projectName = document.querySelector('.mainContentTitle').textContent;
    // Find the project based on projectName from projectList
    const project = projectList.find(obj => obj.projectName === projectName);
    project.projectTaskList.push(newTask);
    console.log(project.projectTaskList);
}

// get the task list of a project object based on task name
function getTaskList(projectName) {
    // get projectList based on what is in localStorage
    let projectListString = localStorage.getItem('projectListKey');
    let projectList = JSON.parse(projectListString); // List of projectObjects
    const project = projectList.find(obj => obj.projectName === projectName);
    console.log(project.projectTaskList);
    return project.projectTaskList;
}

function removeTaskFromProject(projectName, taskTitleToBeDeleted) {
    const projectIndex = projectList.findIndex(obj => obj.projectName === projectName);
    const project = projectList.find(obj => obj.projectName === projectName);
    let updatedProjectTaskList = project.projectTaskList.filter(task => task.taskName !== taskTitleToBeDeleted);
    let updatedAttribute = {projectTaskList: updatedProjectTaskList};
    if(projectIndex !== -1) {
        Object.assign(projectList[projectIndex], updatedAttribute);
    }
}

// iterate through all project objects and concatenate all their projectTaskList
function getAllTasks() {
    let taskList = [];
    for(let proj of projectList) {
        taskList = taskList.concat(proj.projectTaskList);
    }
    return taskList;
}

// iterate through all project objects to find the project which holds a task
function getProjectNameByTask(taskName) {
    let projectName;
    for(let proj of projectList) {
        for(let task of proj.projectTaskList) {
            if(task.taskName === taskName) {
                console.log(task);
                projectName = proj.projectName;
            }
        }
    }
    return projectName;
}

function deleteProject(projectName) {
    const projectIndex = projectList.findIndex(obj => obj.projectName === projectName);
    projectList.splice(projectIndex, 1);
    // update local storage projectList
    updateLocalStorage(projectList);
}

function updateLocalStorage(projectList) {
    // Store the JSON string in localStorage under a specific key
    localStorage.setItem('projectListKey', JSON.stringify(projectList));
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
/* harmony export */   initialDisplay: () => (/* binding */ initialDisplay),
/* harmony export */   localStorageDisplay: () => (/* binding */ localStorageDisplay)
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

function localStorageDisplay() {
    // Clear any projects in sidebarProjects before rerendering
    let sidebarProjects = document.querySelector('.sidebarProjects');
    while(sidebarProjects.firstChild) {
        sidebarProjects.removeChild(sidebarProjects.firstChild);
    }
    // Get the projectList from localStorage
    let projectListString = localStorage.getItem('projectListKey');
    let projectList = JSON.parse(projectListString); // List of projectObjects
    console.log("parsed projectList below: ");
    console.log(projectList);
    // Iterate through the projectList and run addProjectSidebar on each project
    for (let project of projectList){
        addProjectSidebar(project.projectName);
    }
}

function allTaskDisplay() {
    // Clear any content in mainContentContainer before rerendering
    let mainContentContainer = document.querySelector('.mainContentContainer');
    while(mainContentContainer.firstChild) {
        mainContentContainer.removeChild(mainContentContainer.firstChild);
    }
    // Change the title
    let mainContentTitle = document.querySelector('.mainContentTitle');
    mainContentTitle.textContent = 'All Tasks';
    let taskList = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.getAllTasks)();
    displayTasks(taskList); 
}

function todaytaskDisplay() {

}

function importanttaskDisplay() {

}

function addProjectSidebar(projectName) {
    let sidebarProjects = document.querySelector('.sidebarProjects');
    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('sidebarProject');
    const newProject = document.createElement('div');
    newProject.classList.add('sidebarProjectName');
    newProject.textContent = projectName;
    newProject.addEventListener('click', displayProject);
    let checkbox = document.createElement('input');
    checkbox.classList.add('projectCheckbox');
    checkbox.type = 'checkbox';
    checkbox.id = 'completedCheckbox';
    checkbox.name = 'completedCheckbox';
    checkbox.addEventListener('click', completedProjectCheckbox);
    newProjectContainer.append(newProject);
    newProjectContainer.appendChild(checkbox);
    sidebarProjects.appendChild(newProjectContainer);
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
    checkbox.classList.add('taskCheckbox');
    checkbox.type = 'checkbox';
    checkbox.id = 'completedCheckbox';
    checkbox.name = 'completedCheckbox';
    checkbox.addEventListener('click', completedTaskCheckbox);
    taskDivRight.appendChild(taskDivDate);
    taskDivRight.appendChild(checkbox);

    taskDiv.appendChild(taskDivLeft);
    taskDiv.appendChild(taskDivRight);
    mainContentContainer.appendChild(taskDiv);
}

function completedProjectCheckbox(event) {
    // remove sidebarProject from sidebarProjects
    let sidebarProjects = document.querySelector('.sidebarProjects');
    let checkbox = event.target;
    let sidebarProjectToBeDeleted = checkbox.parentNode;
    sidebarProjects.removeChild(sidebarProjectToBeDeleted);

    // remove project from projectList
    let projectName = sidebarProjectToBeDeleted.querySelector('.sidebarProjectName').textContent;
    (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(projectName);
    // jump to display all task on main content when a project is deleted
    allTaskDisplay();
}

function completedTaskCheckbox(event) {
    // remove taskDiv from mainContentContainer
    let mainContentContainer = document.querySelector('.mainContentContainer');
    let checkbox = event.target;
    let taskDivToBeDeleted = checkbox.parentNode.parentNode;
    mainContentContainer.removeChild(taskDivToBeDeleted);

    // remove task from projectTaskList of project object
    let taskTitleToBeDeleted = taskDivToBeDeleted.querySelector('.taskDivLeft .taskDivTitle').textContent;
    let projectNameToBeDeleted = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.getProjectNameByTask)(taskTitleToBeDeleted);
    // console.log('check here');
    // console.log(projectNameToBeDeleted); //issue
    // console.log('check here ends2');
    (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.removeTaskFromProject)(projectNameToBeDeleted, taskTitleToBeDeleted);
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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




// Load initial display elements
(0,_loadDisplay__WEBPACK_IMPORTED_MODULE_1__.initialDisplay)();

// Check if localStorage is empty
if (localStorage.length === 0) {
    console.log("localStorage is empty");
} else {
    console.log("localStorage is not empty");
    (0,_loadDisplay__WEBPACK_IMPORTED_MODULE_1__.localStorageDisplay)();
}

// Load localStorage projects
// localStorageDisplay();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDdUM7QUFDNkY7QUFDL0c7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFB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bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2FkRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvVXNlcnMvcnlhbi9EZXNrdG9wL29kaW4vdG9kb2xpc3Qvc3JjL0FsYXRhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0N1c3RvbUZvbnQnOyAvKiBDaG9vc2UgYSBuYW1lIGZvciB5b3VyIGZvbnQgZmFtaWx5ICovXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIC8qIEFkZCBhZGRpdGlvbmFsIHNyYyBsaW5lcyBmb3Igb3RoZXIgZm9udCBmb3JtYXRzIGlmIG5lY2Vzc2FyeSAqL1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIFxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ0FsYXRhJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5kaWFsb2dCb3hlcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkUHJvamVjdERpYWxvZywgLmFkZFRhc2tEaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5uZXdQcm9qZWN0U3VibWl0LCAubmV3VGFza1N1Ym1pdCB7XG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLm5ld1Byb2plY3RGb3JtLCAubmV3VGFza0Zvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGdhcDogN3B4O1xufVxuXG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkZGluZyBhIHNoYWRvdyB0byB0aGUgcmlnaHQgc2lkZSAqL1xufVxuXG4uaGVhZGVyVGl0bGUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGFnZUNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xufVxuXG4uc2lkZWJhciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBBZGRpbmcgYSBzaGFkb3cgdG8gdGhlIHJpZ2h0IHNpZGUgKi9cbn1cblxuLnNpZGViYXJUb3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2lkZWJhckJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdBbGF0YScsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zaWRlYmFyUHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zaWRlYmFyUHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnRhc2tDaGVja2JveCwgLnByb2plY3RDaGVja2JveCB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udGFza0NoZWNrYm94IHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5hZGRQcm9qZWN0QnV0dG9uLCAuYWRkVGFza0J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODJGNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLm1haW5Db250ZW50VGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk1ZWI0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuXG4udGFza0RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiA2cHg7XG59XG5cbi50YXNrRGl2TGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xufVxuXG4udGFza0RpdlRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi50YXNrRGl2RGVzYyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4udGFza0RpdlJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4udGFza0RpdkRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSwrREFBc0Y7SUFDdEYsaUVBQWlFO0lBQ2pFLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsMkNBQTJDLEVBQUUsc0NBQXNDO0FBQ3ZGOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwyQ0FBMkMsRUFBRSxzQ0FBc0M7QUFDdkY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXN0b21Gb250JzsgLyogQ2hvb3NlIGEgbmFtZSBmb3IgeW91ciBmb250IGZhbWlseSAqL1xcbiAgICBzcmM6IHVybCgnL1VzZXJzL3J5YW4vRGVza3RvcC9vZGluL3RvZG9saXN0L3NyYy9BbGF0YS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgLyogQWRkIGFkZGl0aW9uYWwgc3JjIGxpbmVzIGZvciBvdGhlciBmb250IGZvcm1hdHMgaWYgbmVjZXNzYXJ5ICovXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG4gIFxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0FsYXRhJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGlhbG9nQm94ZXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hZGRQcm9qZWN0RGlhbG9nLCAuYWRkVGFza0RpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5uZXdQcm9qZWN0U3VibWl0LCAubmV3VGFza1N1Ym1pdCB7XFxuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5uZXdQcm9qZWN0Rm9ybSwgLm5ld1Rhc2tGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkZGluZyBhIHNoYWRvdyB0byB0aGUgcmlnaHQgc2lkZSAqL1xcbn1cXG5cXG4uaGVhZGVyVGl0bGUge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGFnZUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQWRkaW5nIGEgc2hhZG93IHRvIHRoZSByaWdodCBzaWRlICovXFxufVxcblxcbi5zaWRlYmFyVG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnNpZGViYXJCdXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ0FsYXRhJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyUHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLnNpZGViYXJQcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4udGFza0NoZWNrYm94LCAucHJvamVjdENoZWNrYm94IHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnRhc2tDaGVja2JveCB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uLCAuYWRkVGFza0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgyRjY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubWFpbkNvbnRlbnRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTVlYjQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcXG4gICAgcGFkZGluZy10b3A6IDZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcXG59XFxuXFxuLnRhc2tEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbi50YXNrRGl2TGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udGFza0RpdlRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxuLnRhc2tEaXZEZXNjIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxuLnRhc2tEaXZSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuLnRhc2tEaXZEYXRlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbmZ1bmN0aW9uIFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy5wcm9qZWN0VGFza0xpc3QgPSBbXTtcbn1cblxuLy8gY3JlYXRlcyBhIHByb2plY3Qgb2JqZWN0IGJhc2VkIG9uIHByb2plY3QgbmFtZSBhbmQgYWRkIHRoZSBvYmplY3QgdG8gcHJvamVjdExpc3QgYXJyYXlcbmZ1bmN0aW9uIGFkZFByb2plY3QoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5mb3Jtcy5uZXdQcm9qZWN0Rm9ybSk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZm9ybURhdGEuZ2V0KCdwcm9qZWN0TmFtZScpO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgLy8gdXBkYXRlIGxvY2FsIHN0b3JhZ2UgcHJvamVjdExpc3RcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2spIHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnRUaXRsZScpLnRleHRDb250ZW50O1xuICAgIC8vIEZpbmQgdGhlIHByb2plY3QgYmFzZWQgb24gcHJvamVjdE5hbWUgZnJvbSBwcm9qZWN0TGlzdFxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5maW5kKG9iaiA9PiBvYmoucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0LnByb2plY3RUYXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QucHJvamVjdFRhc2tMaXN0KTtcbn1cblxuLy8gZ2V0IHRoZSB0YXNrIGxpc3Qgb2YgYSBwcm9qZWN0IG9iamVjdCBiYXNlZCBvbiB0YXNrIG5hbWVcbmZ1bmN0aW9uIGdldFRhc2tMaXN0KHByb2plY3ROYW1lKSB7XG4gICAgLy8gZ2V0IHByb2plY3RMaXN0IGJhc2VkIG9uIHdoYXQgaXMgaW4gbG9jYWxTdG9yYWdlXG4gICAgbGV0IHByb2plY3RMaXN0U3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0S2V5Jyk7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShwcm9qZWN0TGlzdFN0cmluZyk7IC8vIExpc3Qgb2YgcHJvamVjdE9iamVjdHNcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZmluZChvYmogPT4gb2JqLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdC5wcm9qZWN0VGFza0xpc3QpO1xuICAgIHJldHVybiBwcm9qZWN0LnByb2plY3RUYXNrTGlzdDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrVGl0bGVUb0JlRGVsZXRlZCkge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RMaXN0LmZpbmRJbmRleChvYmogPT4gb2JqLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmZpbmQob2JqID0+IG9iai5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIGxldCB1cGRhdGVkUHJvamVjdFRhc2tMaXN0ID0gcHJvamVjdC5wcm9qZWN0VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay50YXNrTmFtZSAhPT0gdGFza1RpdGxlVG9CZURlbGV0ZWQpO1xuICAgIGxldCB1cGRhdGVkQXR0cmlidXRlID0ge3Byb2plY3RUYXNrTGlzdDogdXBkYXRlZFByb2plY3RUYXNrTGlzdH07XG4gICAgaWYocHJvamVjdEluZGV4ICE9PSAtMSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0sIHVwZGF0ZWRBdHRyaWJ1dGUpO1xuICAgIH1cbn1cblxuLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCBwcm9qZWN0IG9iamVjdHMgYW5kIGNvbmNhdGVuYXRlIGFsbCB0aGVpciBwcm9qZWN0VGFza0xpc3RcbmZ1bmN0aW9uIGdldEFsbFRhc2tzKCkge1xuICAgIGxldCB0YXNrTGlzdCA9IFtdO1xuICAgIGZvcihsZXQgcHJvaiBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICB0YXNrTGlzdCA9IHRhc2tMaXN0LmNvbmNhdChwcm9qLnByb2plY3RUYXNrTGlzdCk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrTGlzdDtcbn1cblxuLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCBwcm9qZWN0IG9iamVjdHMgdG8gZmluZCB0aGUgcHJvamVjdCB3aGljaCBob2xkcyBhIHRhc2tcbmZ1bmN0aW9uIGdldFByb2plY3ROYW1lQnlUYXNrKHRhc2tOYW1lKSB7XG4gICAgbGV0IHByb2plY3ROYW1lO1xuICAgIGZvcihsZXQgcHJvaiBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICBmb3IobGV0IHRhc2sgb2YgcHJvai5wcm9qZWN0VGFza0xpc3QpIHtcbiAgICAgICAgICAgIGlmKHRhc2sudGFza05hbWUgPT09IHRhc2tOYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUgPSBwcm9qLnByb2plY3ROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0TmFtZTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RMaXN0LmZpbmRJbmRleChvYmogPT4gb2JqLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgLy8gdXBkYXRlIGxvY2FsIHN0b3JhZ2UgcHJvamVjdExpc3RcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpIHtcbiAgICAvLyBTdG9yZSB0aGUgSlNPTiBzdHJpbmcgaW4gbG9jYWxTdG9yYWdlIHVuZGVyIGEgc3BlY2lmaWMga2V5XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0S2V5JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn1cblxuXG5cblxuXG5cbmV4cG9ydCB7cHJvamVjdExpc3QsIGFkZFByb2plY3QsIGFkZFRhc2tUb1Byb2plY3QsIGdldFRhc2tMaXN0LCBnZXRBbGxUYXNrcywgZ2V0UHJvamVjdE5hbWVCeVRhc2ssIHJlbW92ZVRhc2tGcm9tUHJvamVjdCwgZGVsZXRlUHJvamVjdH07IiwiXG5cbmZ1bmN0aW9uIFRhc2sodGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSkge1xuICAgIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICB0aGlzLnRhc2tEZXRhaWxzID0gdGFza0RldGFpbHM7XG4gICAgdGhpcy50YXNrRGF0ZSA9IHRhc2tEYXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQuZm9ybXMubmV3VGFza0Zvcm0pO1xuICAgIGxldCB0YXNrTmFtZSA9IGZvcm1EYXRhLmdldCgndGFza05hbWUnKTtcbiAgICBsZXQgdGFza0RldGFpbHMgPSBmb3JtRGF0YS5nZXQoJ3Rhc2tEZXRhaWxzJyk7XG4gICAgbGV0IHRhc2tEYXRlID0gZm9ybURhdGEuZ2V0KCd0YXNrRGF0ZScpO1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSk7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2sgfTsiLCIvLyBET00gUkVMQVRFRCBNT0RVTEVcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuaW1wb3J0IHsgZ2V0VGFza0xpc3QsIGdldEFsbFRhc2tzLCBwcm9qZWN0TGlzdCwgZ2V0UHJvamVjdE5hbWVCeVRhc2ssIHJlbW92ZVRhc2tGcm9tUHJvamVjdCwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gaW5pdGlhbERpc3BsYXkoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgLy8gaGVhZGVyIGNvbnRlbnRcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUaXRsZScpO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ05vUHJvY3Jhc3RpbmF0aW9uJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgLy8gcGFnZSBjb250ZW50XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwYWdlQ29udGVudCcpO1xuICAgICAgICAvLyBzaWRlIGJhciB0b3BcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgY29uc3Qgc2lkZWJhclRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJUb3AuY2xhc3NMaXN0LmFkZCgnc2lkZWJhclRvcCcpO1xuICAgIGNvbnN0IGFsbFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbGxUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FsbFRhc2tCdXR0b24nLCAnc2lkZWJhckJ1dHRvbicpO1xuICAgIGFsbFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5QnV0dG9uJywgJ3NpZGViYXJCdXR0b24nKTtcbiAgICB0b2RheUJ1dHRvbi50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgY29uc3QgaW1wb3J0YW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0YW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudEJ1dHRvbicsICdzaWRlYmFyQnV0dG9uJyk7XG4gICAgaW1wb3J0YW50QnV0dG9uLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgc2lkZWJhclRvcC5hcHBlbmRDaGlsZChhbGxUYXNrQnV0dG9uKTtcbiAgICBzaWRlYmFyVG9wLmFwcGVuZENoaWxkKHRvZGF5QnV0dG9uKTtcbiAgICBzaWRlYmFyVG9wLmFwcGVuZENoaWxkKGltcG9ydGFudEJ1dHRvbik7XG4gICAgICAgIC8vIHNpZGUgYmFyIGJvdHRvbVxuICAgIGNvbnN0IHNpZGViYXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyQm90dG9tLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJCb3R0b20nKTtcbiAgICBjb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnc2lkZWJhclByb2plY3RzJywgJ3NpZGViYXJCdXR0b24nKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RCdXR0b24nLCAnc2lkZWJhckJ1dHRvbicpO1xuICAgIHNpZGViYXJCb3R0b20uYXBwZW5kQ2hpbGQoc2lkZWJhclByb2plY3RzKTtcbiAgICBzaWRlYmFyQm90dG9tLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhclRvcCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQm90dG9tKTtcbiAgICAgICAgLy8gbWFpbiBjb250ZW50XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGVudCcpO1xuICAgIGNvbnN0IG1haW5Db250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudFRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50VGl0bGUnKTtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50Q29udGFpbmVyJyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRUaXRsZSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kKG1haW5Db250ZW50Q29udGFpbmVyKTtcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbiAgICAvLyBmb290ZXIgY29udGVudFxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IE9yaWdpbmFsUnlhbiDCqSc7XG5cbiAgICAvLyBhcHBlbmQgdG8gaHRtbCBmaWxlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gbG9jYWxTdG9yYWdlRGlzcGxheSgpIHtcbiAgICAvLyBDbGVhciBhbnkgcHJvamVjdHMgaW4gc2lkZWJhclByb2plY3RzIGJlZm9yZSByZXJlbmRlcmluZ1xuICAgIGxldCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhclByb2plY3RzJyk7XG4gICAgd2hpbGUoc2lkZWJhclByb2plY3RzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2lkZWJhclByb2plY3RzLnJlbW92ZUNoaWxkKHNpZGViYXJQcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBwcm9qZWN0TGlzdCBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIGxldCBwcm9qZWN0TGlzdFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdEtleScpO1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UocHJvamVjdExpc3RTdHJpbmcpOyAvLyBMaXN0IG9mIHByb2plY3RPYmplY3RzXG4gICAgY29uc29sZS5sb2coXCJwYXJzZWQgcHJvamVjdExpc3QgYmVsb3c6IFwiKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBwcm9qZWN0TGlzdCBhbmQgcnVuIGFkZFByb2plY3RTaWRlYmFyIG9uIGVhY2ggcHJvamVjdFxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdExpc3Qpe1xuICAgICAgICBhZGRQcm9qZWN0U2lkZWJhcihwcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFsbFRhc2tEaXNwbGF5KCkge1xuICAgIC8vIENsZWFyIGFueSBjb250ZW50IGluIG1haW5Db250ZW50Q29udGFpbmVyIGJlZm9yZSByZXJlbmRlcmluZ1xuICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudENvbnRhaW5lcicpO1xuICAgIHdoaWxlKG1haW5Db250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENoYW5nZSB0aGUgdGl0bGVcbiAgICBsZXQgbWFpbkNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudFRpdGxlJyk7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuICAgIGxldCB0YXNrTGlzdCA9IGdldEFsbFRhc2tzKCk7XG4gICAgZGlzcGxheVRhc2tzKHRhc2tMaXN0KTsgXG59XG5cbmZ1bmN0aW9uIHRvZGF5dGFza0Rpc3BsYXkoKSB7XG5cbn1cblxuZnVuY3Rpb24gaW1wb3J0YW50dGFza0Rpc3BsYXkoKSB7XG5cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFNpZGViYXIocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJQcm9qZWN0cycpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJQcm9qZWN0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhclByb2plY3ROYW1lJyk7XG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UHJvamVjdCk7XG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2hlY2tib3gnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5pZCA9ICdjb21wbGV0ZWRDaGVja2JveCc7XG4gICAgY2hlY2tib3gubmFtZSA9ICdjb21wbGV0ZWRDaGVja2JveCc7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21wbGV0ZWRQcm9qZWN0Q2hlY2tib3gpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kKG5ld1Byb2plY3QpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoZXZlbnQpIHtcbiAgICAvLyBjbGVhciBhbnkgcHJvamVjdHMgaW4gbWFpbkNvbnRlbnRDb250YWluZXIgYmVmb3JlIHJlcmVuZGVyaW5nXG4gICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250ZW50Q29udGFpbmVyJyk7XG4gICAgd2hpbGUobWFpbkNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluQ29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluQ29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ2hhbmdlIHRoZSB0aXRsZVxuICAgIGxldCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBsZXQgbWFpbkNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudFRpdGxlJyk7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIC8vIEFkZCBUYXNrIEJ1dHRvblxuICAgIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2tCdXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrQ2xpY2spO1xuICAgICAgICAvLyBFbnN1cmUgYWRkIHRhc2sgYnV0dG9uIGlzIGFkZGVkIG9ubHkgb25jZVxuICAgIGlmKG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrQnV0dG9uJykgPT0gbnVsbCl7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgIH1cbiAgICAvLyBEaXNwbGF5IHRhc2tzIG9mIHByb2plY3QgY2xpY2tlZCBieSBhcHBlbmRpbmcgdGFza3MgdG8gbWFpbkNvbnRlbnRDb250YWluZXJcbiAgICAvLyAxKSBBY2Nlc3MgdGhlIHRhc2tsaXN0IG9mIHByb2plY3RPYmplY3RcbiAgICBsZXQgdGFza0xpc3QgPSBnZXRUYXNrTGlzdChwcm9qZWN0TmFtZSk7XG4gICAgLy8gMikgQXBwZW5kIGFsbCB0byB0aGUgbWFpbkNvbnRlbnRcbiAgICBkaXNwbGF5VGFza3ModGFza0xpc3QpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrQ2xpY2soKSB7XG4gICAgY29uc3QgYWRkVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrRGlhbG9nJyk7XG4gICAgYWRkVGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHRhc2tMaXN0KSB7XG4gICAgZm9yKGxldCB0YXNrIG9mIHRhc2tMaXN0KSB7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IHRhc2sudGFza05hbWU7XG4gICAgICAgIGxldCB0YXNrRGV0YWlscyA9IHRhc2sudGFza0RldGFpbHM7XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IHRhc2sudGFza0RhdGU7XG4gICAgICAgIGNyZWF0ZVRhc2tEaXYodGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGl2KHRhc2tOYW1lLCB0YXNrRGV0YWlscywgdGFza0RhdGUpIHtcbiAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnRDb250YWluZXInKTtcbiAgICAvLyBjcmVhdGUgdGFza0RpdlxuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2Jyk7XG4gICAgLy8gY3JlYXRlIHRhc2tEaXZMZWZ0XG4gICAgbGV0IHRhc2tEaXZMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RpdkxlZnQuY2xhc3NMaXN0LmFkZCgndGFza0RpdkxlZnQnKTtcbiAgICAvLyBjcmVhdGUgdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG4gICAgbGV0IHRhc2tEaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2VGl0bGUnKTtcbiAgICB0YXNrRGl2VGl0bGUudGV4dENvbnRlbnQgPSB0YXNrTmFtZTtcbiAgICBsZXQgdGFza0RpdkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2RGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2RGVzYycpO1xuICAgIHRhc2tEaXZEZXNjLnRleHRDb250ZW50ID0gdGFza0RldGFpbHM7XG4gICAgdGFza0RpdkxlZnQuYXBwZW5kQ2hpbGQodGFza0RpdlRpdGxlKTtcbiAgICB0YXNrRGl2TGVmdC5hcHBlbmRDaGlsZCh0YXNrRGl2RGVzYyk7XG4gICAgLy8gY3JlYXRlIHRhc2tEaXZSaWdodFxuICAgIGxldCB0YXNrRGl2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2UmlnaHQuY2xhc3NMaXN0LmFkZCgndGFza0RpdlJpZ2h0Jyk7XG4gICAgLy8gY3JlYXRlIGRhdGUgYW5kIGNoZWNrYm94XG4gICAgbGV0IHRhc2tEaXZEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RpdkRhdGUuY2xhc3NMaXN0LmFkZCgndGFza0RpdkRhdGUnKTtcbiAgICB0YXNrRGl2RGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEYXRlO1xuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndGFza0NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guaWQgPSAnY29tcGxldGVkQ2hlY2tib3gnO1xuICAgIGNoZWNrYm94Lm5hbWUgPSAnY29tcGxldGVkQ2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tcGxldGVkVGFza0NoZWNrYm94KTtcbiAgICB0YXNrRGl2UmlnaHQuYXBwZW5kQ2hpbGQodGFza0RpdkRhdGUpO1xuICAgIHRhc2tEaXZSaWdodC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEaXZMZWZ0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEaXZSaWdodCk7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZFByb2plY3RDaGVja2JveChldmVudCkge1xuICAgIC8vIHJlbW92ZSBzaWRlYmFyUHJvamVjdCBmcm9tIHNpZGViYXJQcm9qZWN0c1xuICAgIGxldCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhclByb2plY3RzJyk7XG4gICAgbGV0IGNoZWNrYm94ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBzaWRlYmFyUHJvamVjdFRvQmVEZWxldGVkID0gY2hlY2tib3gucGFyZW50Tm9kZTtcbiAgICBzaWRlYmFyUHJvamVjdHMucmVtb3ZlQ2hpbGQoc2lkZWJhclByb2plY3RUb0JlRGVsZXRlZCk7XG5cbiAgICAvLyByZW1vdmUgcHJvamVjdCBmcm9tIHByb2plY3RMaXN0XG4gICAgbGV0IHByb2plY3ROYW1lID0gc2lkZWJhclByb2plY3RUb0JlRGVsZXRlZC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhclByb2plY3ROYW1lJykudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgLy8ganVtcCB0byBkaXNwbGF5IGFsbCB0YXNrIG9uIG1haW4gY29udGVudCB3aGVuIGEgcHJvamVjdCBpcyBkZWxldGVkXG4gICAgYWxsVGFza0Rpc3BsYXkoKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVkVGFza0NoZWNrYm94KGV2ZW50KSB7XG4gICAgLy8gcmVtb3ZlIHRhc2tEaXYgZnJvbSBtYWluQ29udGVudENvbnRhaW5lclxuICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudENvbnRhaW5lcicpO1xuICAgIGxldCBjaGVja2JveCA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgdGFza0RpdlRvQmVEZWxldGVkID0gY2hlY2tib3gucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tEaXZUb0JlRGVsZXRlZCk7XG5cbiAgICAvLyByZW1vdmUgdGFzayBmcm9tIHByb2plY3RUYXNrTGlzdCBvZiBwcm9qZWN0IG9iamVjdFxuICAgIGxldCB0YXNrVGl0bGVUb0JlRGVsZXRlZCA9IHRhc2tEaXZUb0JlRGVsZXRlZC5xdWVyeVNlbGVjdG9yKCcudGFza0RpdkxlZnQgLnRhc2tEaXZUaXRsZScpLnRleHRDb250ZW50O1xuICAgIGxldCBwcm9qZWN0TmFtZVRvQmVEZWxldGVkID0gZ2V0UHJvamVjdE5hbWVCeVRhc2sodGFza1RpdGxlVG9CZURlbGV0ZWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGVjayBoZXJlJyk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVUb0JlRGVsZXRlZCk7IC8vaXNzdWVcbiAgICAvLyBjb25zb2xlLmxvZygnY2hlY2sgaGVyZSBlbmRzMicpO1xuICAgIHJlbW92ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0TmFtZVRvQmVEZWxldGVkLCB0YXNrVGl0bGVUb0JlRGVsZXRlZCk7XG59XG5cblxuXG5cbmV4cG9ydCB7aW5pdGlhbERpc3BsYXksIGFkZFByb2plY3RTaWRlYmFyLCBhbGxUYXNrRGlzcGxheSwgY3JlYXRlVGFza0RpdiwgbG9jYWxTdG9yYWdlRGlzcGxheX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHByb2plY3RMaXN0LCBhZGRQcm9qZWN0LCBhZGRUYXNrVG9Qcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHsgaW5pdGlhbERpc3BsYXksIGFkZFByb2plY3RTaWRlYmFyLCBhbGxUYXNrRGlzcGxheSwgY3JlYXRlVGFza0RpdiwgbG9jYWxTdG9yYWdlRGlzcGxheSB9IGZyb20gXCIuL2xvYWREaXNwbGF5XCI7XG5pbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG4vLyBMb2FkIGluaXRpYWwgZGlzcGxheSBlbGVtZW50c1xuaW5pdGlhbERpc3BsYXkoKTtcblxuLy8gQ2hlY2sgaWYgbG9jYWxTdG9yYWdlIGlzIGVtcHR5XG5pZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIGlzIGVtcHR5XCIpO1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZSBpcyBub3QgZW1wdHlcIik7XG4gICAgbG9jYWxTdG9yYWdlRGlzcGxheSgpO1xufVxuXG4vLyBMb2FkIGxvY2FsU3RvcmFnZSBwcm9qZWN0c1xuLy8gbG9jYWxTdG9yYWdlRGlzcGxheSgpO1xuXG4vLyBBZGQgUHJvamVjdCBCdXR0b25cbmNvbnN0IGFkZFByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdERpYWxvZycpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7XG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG59KVxuXG5jb25zdCBuZXdQcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RTdWJtaXQnKTtcbm5ld1Byb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IGFkZFByb2plY3QoZXZlbnQpOyAvL25ldyBwcm9qZWN0IG9ialxuICAgIGFkZFByb2plY3RTaWRlYmFyKG5ld1Byb2plY3QucHJvamVjdE5hbWUpO1xuICAgIGFkZFByb2plY3REaWFsb2cuY2xvc2UoKVxufSlcblxuXG4vLyBBZGQgVGFzayBTdWJtaXQgQnV0dG9uXG5jb25zdCBhZGRUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tEaWFsb2cnKTtcbmNvbnN0IG5ld1Rhc2tTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza1N1Ym1pdCcpO1xubmV3VGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGxldCBuZXdUYXNrID0gYWRkVGFzayhldmVudCk7XG4gICAgLy8gTGluayB0aGlzIHRhc2sgdG8gdGhlIHByb2plY3RcbiAgICBhZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2spO1xuICAgIC8vIEdldCB0aGUgdGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSBmcm9tIG5ld1Rhc2sgb2JqZWN0XG4gICAgbGV0IHRhc2tOYW1lID0gbmV3VGFzay50YXNrTmFtZTtcbiAgICBsZXQgdGFza0RldGFpbHMgPSBuZXdUYXNrLnRhc2tEZXRhaWxzO1xuICAgIGxldCB0YXNrRGF0ZSA9IG5ld1Rhc2sudGFza0RhdGU7XG4gICAgLy8gQXBwZW5kIHRoaXMgbGF0ZXN0IHRhc2sgdG8gdGhlIG1haW4gY29udGFpbmVyXG4gICAgY3JlYXRlVGFza0Rpdih0YXNrTmFtZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlKTtcbiAgICBhZGRUYXNrRGlhbG9nLmNsb3NlKCk7XG59KVxuXG5cbi8vIEFsbCBUYXNrcyBCdXR0b25cbmNvbnN0IGFsbFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsVGFza0J1dHRvbicpO1xuYWxsVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhbGxUYXNrRGlzcGxheSgpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=