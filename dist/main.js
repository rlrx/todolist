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
/* harmony export */   getLocalStorageProjectList: () => (/* binding */ getLocalStorageProjectList),
/* harmony export */   getProjectNameByTask: () => (/* binding */ getProjectNameByTask),
/* harmony export */   getTaskList: () => (/* binding */ getTaskList),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   removeTaskFromProject: () => (/* binding */ removeTaskFromProject)
/* harmony export */ });
const helloWorld = [];
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
    let projectList = getLocalStorageProjectList();
    projectList.push(newProject);
    // update local storage projectList
    updateLocalStorage(projectList);
    return newProject;
}

function addTaskToProject(newTask) {
    let projectName = document.querySelector('.mainContentTitle').textContent;
    // Find the project based on projectName from projectList
    let projectList = getLocalStorageProjectList();
    const project = projectList.find(obj => obj.projectName === projectName);
    project.projectTaskList.push(newTask);
    // Update the projectList with new project with included task
    let projectIndex = projectList.findIndex(obj => obj.projectName === projectName);
    projectList[projectIndex] = project;
    // update local storage projectList
    updateLocalStorage(projectList);
    console.log(project.projectTaskList);
}

// get the task list of a project object based on task name
function getTaskList(projectName) {
    // get projectList based on what is in localStorage
    let projectList = getLocalStorageProjectList();
    const project = projectList.find(obj => obj.projectName === projectName);
    console.log(project.projectTaskList);
    return project.projectTaskList;
}

// bug here
// createProject.js:50 Uncaught TypeError: Cannot read properties of undefined (reading 'projectTaskList')
// at removeTaskFromProject (createProject.js:50:1)
function removeTaskFromProject(projectName, taskTitleToBeDeleted) {
    let projectList = getLocalStorageProjectList();
    const projectIndex = projectList.findIndex(obj => obj.projectName === projectName);
    const project = projectList.find(obj => obj.projectName === projectName);
    console.log(project);
    let updatedProjectTaskList = project.projectTaskList.filter(task => task.taskName !== taskTitleToBeDeleted);
    let updatedAttribute = {projectTaskList: updatedProjectTaskList};
    if(projectIndex !== -1) {
        Object.assign(projectList[projectIndex], updatedAttribute);
    }
    updateLocalStorage(projectList);
}

// iterate through all project objects and concatenate all their projectTaskList
function getAllTasks() {
    let taskList = [];
    let projectList = getLocalStorageProjectList();
    for(let proj of projectList) {
        taskList = taskList.concat(proj.projectTaskList);
    }
    return taskList;
}

// iterate through all project objects to find the project which holds a task
function getProjectNameByTask(taskName) {
    let projectName;
    let projectList = getLocalStorageProjectList();
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
    let projectList = getLocalStorageProjectList();
    const projectIndex = projectList.findIndex(obj => obj.projectName === projectName);
    projectList.splice(projectIndex, 1);
    // update local storage projectList
    updateLocalStorage(projectList);
}

function updateLocalStorage(projectList) {
    // Store the JSON string in localStorage under a specific key
    localStorage.setItem('projectListKey', JSON.stringify(projectList));
}

function getLocalStorageProjectList(){
    let projectListString = localStorage.getItem('projectListKey');
    let projectList = JSON.parse(projectListString); // List of projectObjects
    return projectList;
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
    let projectList = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.getLocalStorageProjectList)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUEwRTtBQUN0SCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUEsT0FBTyxnRkFBZ0Ysd0JBQXdCLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLHdCQUF3QixPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxzQ0FBc0MsaUNBQWlDLHFJQUFxSSxrR0FBa0cseUJBQXlCLEtBQUssU0FBUyw2QkFBNkIsdUNBQXVDLGdCQUFnQixHQUFHLGtCQUFrQix5QkFBeUIsR0FBRyx1Q0FBdUMseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1QyxHQUFHLHVDQUF1Qyw2QkFBNkIsR0FBRyxtQ0FBbUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZUFBZSxHQUFHLGdCQUFnQixvQkFBb0Isd0NBQXdDLHdCQUF3QixnQkFBZ0IsR0FBRyxhQUFhLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdDQUFnQyxzQkFBc0IsMkJBQTJCLG9CQUFvQixtREFBbUQsMENBQTBDLGtCQUFrQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixHQUFHLGtCQUFrQixvQkFBb0IscUNBQXFDLEdBQUcsY0FBYyx5QkFBeUIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsZ0NBQWdDLHdCQUF3QiwyQkFBMkIsbURBQW1ELDBDQUEwQyxpQkFBaUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGdCQUFnQixvQkFBb0IsR0FBRyxvQkFBb0IsdUNBQXVDLHlCQUF5Qix1QkFBdUIsMEJBQTBCLG1CQUFtQixHQUFHLHNCQUFzQixvQkFBb0IsNkJBQTZCLG9CQUFvQixnQkFBZ0Isc0JBQXNCLEdBQUcscUJBQXFCLG9CQUFvQiw4QkFBOEIsZUFBZSxHQUFHLHFDQUFxQyxtQkFBbUIscUJBQXFCLEdBQUcsbUJBQW1CLGtCQUFrQixtQkFBbUIsR0FBRyx1Q0FBdUMsZ0NBQWdDLG1CQUFtQix5QkFBeUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsK0NBQStDLEdBQUcsa0JBQWtCLHlCQUF5QixvQkFBb0IsNkJBQTZCLG1CQUFtQixHQUFHLHVCQUF1QixzQkFBc0IsMkJBQTJCLGdDQUFnQyxtQkFBbUIseUJBQXlCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEdBQUcsY0FBYyxvQkFBb0IscUNBQXFDLDBCQUEwQix1QkFBdUIsaURBQWlELHlCQUF5Qiw2QkFBNkIsbUJBQW1CLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLG1CQUFtQixzQkFBc0IsMkJBQTJCLEdBQUcsa0JBQWtCLHNCQUFzQiwyQkFBMkIsR0FBRyxtQkFBbUIsb0JBQW9CLGdCQUFnQiwwQkFBMEIsR0FBRyxrQkFBa0Isc0JBQXNCLDJCQUEyQixHQUFHLGFBQWEsb0JBQW9CLDhCQUE4QixnQ0FBZ0MsbUJBQW1CLG1CQUFtQix5QkFBeUIsR0FBRywrQkFBK0I7QUFDcjFLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDL00xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDdUM7QUFDeUg7QUFDM0k7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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akI7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFjO0FBQ2xCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbG9hZERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL1VzZXJzL3J5YW4vRGVza3RvcC9vZGluL3RvZG9saXN0L3NyYy9BbGF0YS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDdXN0b21Gb250JzsgLyogQ2hvb3NlIGEgbmFtZSBmb3IgeW91ciBmb250IGZhbWlseSAqL1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICAvKiBBZGQgYWRkaXRpb25hbCBzcmMgbGluZXMgZm9yIG90aGVyIGZvbnQgZm9ybWF0cyBpZiBuZWNlc3NhcnkgKi9cbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBcbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdBbGF0YScsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZGlhbG9nQm94ZXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZFByb2plY3REaWFsb2csIC5hZGRUYXNrRGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubmV3UHJvamVjdFN1Ym1pdCwgLm5ld1Rhc2tTdWJtaXQge1xuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5uZXdQcm9qZWN0Rm9ybSwgLm5ld1Rhc2tGb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBnYXA6IDdweDtcbn1cblxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBBZGRpbmcgYSBzaGFkb3cgdG8gdGhlIHJpZ2h0IHNpZGUgKi9cbn1cblxuLmhlYWRlclRpdGxlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZ2VDb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcbn1cblxuLnNpZGViYXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQWRkaW5nIGEgc2hhZG93IHRvIHRoZSByaWdodCBzaWRlICovXG59XG5cbi5zaWRlYmFyVG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnNpZGViYXJCdXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnQWxhdGEnLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2lkZWJhclByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBnYXA6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc2lkZWJhclByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi50YXNrQ2hlY2tib3gsIC5wcm9qZWN0Q2hlY2tib3gge1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuLnRhc2tDaGVja2JveCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYWRkUHJvamVjdEJ1dHRvbiwgLmFkZFRhc2tCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgyRjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5tYWluQ29udGVudCB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG5cbi5tYWluQ29udGVudFRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NWViNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLnRhc2tEaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogNnB4O1xufVxuXG4udGFza0RpdkxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuLnRhc2tEaXZUaXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4udGFza0RpdkRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLnRhc2tEaXZSaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLnRhc2tEaXZEYXRlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuXG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUIsRUFBRSx1Q0FBdUM7SUFDbEUsK0RBQXNGO0lBQ3RGLGlFQUFpRTtJQUNqRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDJDQUEyQyxFQUFFLHNDQUFzQztBQUN2Rjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMkNBQTJDLEVBQUUsc0NBQXNDO0FBQ3ZGOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3VzdG9tRm9udCc7IC8qIENob29zZSBhIG5hbWUgZm9yIHlvdXIgZm9udCBmYW1pbHkgKi9cXG4gICAgc3JjOiB1cmwoJy9Vc2Vycy9yeWFuL0Rlc2t0b3Avb2Rpbi90b2RvbGlzdC9zcmMvQWxhdGEtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIC8qIEFkZCBhZGRpdGlvbmFsIHNyYyBsaW5lcyBmb3Igb3RoZXIgZm9udCBmb3JtYXRzIGlmIG5lY2Vzc2FyeSAqL1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuICBcXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGF0YScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmRpYWxvZ0JveGVzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYWRkUHJvamVjdERpYWxvZywgLmFkZFRhc2tEaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ubmV3UHJvamVjdFN1Ym1pdCwgLm5ld1Rhc2tTdWJtaXQge1xcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ubmV3UHJvamVjdEZvcm0sIC5uZXdUYXNrRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBBZGRpbmcgYSBzaGFkb3cgdG8gdGhlIHJpZ2h0IHNpZGUgKi9cXG59XFxuXFxuLmhlYWRlclRpdGxlIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBhZ2VDb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkZGluZyBhIHNoYWRvdyB0byB0aGUgcmlnaHQgc2lkZSAqL1xcbn1cXG5cXG4uc2lkZWJhclRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyQnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGF0YScsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhclByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5zaWRlYmFyUHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnRhc2tDaGVja2JveCwgLnByb2plY3RDaGVja2JveCB7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi50YXNrQ2hlY2tib3gge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbiwgLmFkZFRhc2tCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MkY2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ubWFpbkNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLm1haW5Db250ZW50VGl0bGUge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk1ZWI0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XFxuICAgIHBhZGRpbmctdG9wOiA2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XFxufVxcblxcbi50YXNrRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4udGFza0RpdkxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRhc2tEaXZUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi50YXNrRGl2RGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi50YXNrRGl2UmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblxcbi50YXNrRGl2RGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBoZWxsb1dvcmxkID0gW107XG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5cbmZ1bmN0aW9uIFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy5wcm9qZWN0VGFza0xpc3QgPSBbXTtcbn1cblxuLy8gY3JlYXRlcyBhIHByb2plY3Qgb2JqZWN0IGJhc2VkIG9uIHByb2plY3QgbmFtZSBhbmQgYWRkIHRoZSBvYmplY3QgdG8gcHJvamVjdExpc3QgYXJyYXlcbmZ1bmN0aW9uIGFkZFByb2plY3QoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5mb3Jtcy5uZXdQcm9qZWN0Rm9ybSk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZm9ybURhdGEuZ2V0KCdwcm9qZWN0TmFtZScpO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGdldExvY2FsU3RvcmFnZVByb2plY3RMaXN0KCk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICAvLyB1cGRhdGUgbG9jYWwgc3RvcmFnZSBwcm9qZWN0TGlzdFxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QobmV3VGFzaykge1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudFRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgLy8gRmluZCB0aGUgcHJvamVjdCBiYXNlZCBvbiBwcm9qZWN0TmFtZSBmcm9tIHByb2plY3RMaXN0XG4gICAgbGV0IHByb2plY3RMaXN0ID0gZ2V0TG9jYWxTdG9yYWdlUHJvamVjdExpc3QoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZmluZChvYmogPT4gb2JqLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdC5wcm9qZWN0VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAvLyBVcGRhdGUgdGhlIHByb2plY3RMaXN0IHdpdGggbmV3IHByb2plY3Qgd2l0aCBpbmNsdWRlZCB0YXNrXG4gICAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RMaXN0LmZpbmRJbmRleChvYmogPT4gb2JqLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XSA9IHByb2plY3Q7XG4gICAgLy8gdXBkYXRlIGxvY2FsIHN0b3JhZ2UgcHJvamVjdExpc3RcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QucHJvamVjdFRhc2tMaXN0KTtcbn1cblxuLy8gZ2V0IHRoZSB0YXNrIGxpc3Qgb2YgYSBwcm9qZWN0IG9iamVjdCBiYXNlZCBvbiB0YXNrIG5hbWVcbmZ1bmN0aW9uIGdldFRhc2tMaXN0KHByb2plY3ROYW1lKSB7XG4gICAgLy8gZ2V0IHByb2plY3RMaXN0IGJhc2VkIG9uIHdoYXQgaXMgaW4gbG9jYWxTdG9yYWdlXG4gICAgbGV0IHByb2plY3RMaXN0ID0gZ2V0TG9jYWxTdG9yYWdlUHJvamVjdExpc3QoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZmluZChvYmogPT4gb2JqLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdC5wcm9qZWN0VGFza0xpc3QpO1xuICAgIHJldHVybiBwcm9qZWN0LnByb2plY3RUYXNrTGlzdDtcbn1cblxuLy8gYnVnIGhlcmVcbi8vIGNyZWF0ZVByb2plY3QuanM6NTAgVW5jYXVnaHQgVHlwZUVycm9yOiBDYW5ub3QgcmVhZCBwcm9wZXJ0aWVzIG9mIHVuZGVmaW5lZCAocmVhZGluZyAncHJvamVjdFRhc2tMaXN0Jylcbi8vIGF0IHJlbW92ZVRhc2tGcm9tUHJvamVjdCAoY3JlYXRlUHJvamVjdC5qczo1MDoxKVxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrVGl0bGVUb0JlRGVsZXRlZCkge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGdldExvY2FsU3RvcmFnZVByb2plY3RMaXN0KCk7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QuZmluZEluZGV4KG9iaiA9PiBvYmoucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZmluZChvYmogPT4gb2JqLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgbGV0IHVwZGF0ZWRQcm9qZWN0VGFza0xpc3QgPSBwcm9qZWN0LnByb2plY3RUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnRhc2tOYW1lICE9PSB0YXNrVGl0bGVUb0JlRGVsZXRlZCk7XG4gICAgbGV0IHVwZGF0ZWRBdHRyaWJ1dGUgPSB7cHJvamVjdFRhc2tMaXN0OiB1cGRhdGVkUHJvamVjdFRhc2tMaXN0fTtcbiAgICBpZihwcm9qZWN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdExpc3RbcHJvamVjdEluZGV4XSwgdXBkYXRlZEF0dHJpYnV0ZSk7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG59XG5cbi8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgcHJvamVjdCBvYmplY3RzIGFuZCBjb25jYXRlbmF0ZSBhbGwgdGhlaXIgcHJvamVjdFRhc2tMaXN0XG5mdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICBsZXQgdGFza0xpc3QgPSBbXTtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBnZXRMb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCgpO1xuICAgIGZvcihsZXQgcHJvaiBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICB0YXNrTGlzdCA9IHRhc2tMaXN0LmNvbmNhdChwcm9qLnByb2plY3RUYXNrTGlzdCk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrTGlzdDtcbn1cblxuLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCBwcm9qZWN0IG9iamVjdHMgdG8gZmluZCB0aGUgcHJvamVjdCB3aGljaCBob2xkcyBhIHRhc2tcbmZ1bmN0aW9uIGdldFByb2plY3ROYW1lQnlUYXNrKHRhc2tOYW1lKSB7XG4gICAgbGV0IHByb2plY3ROYW1lO1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGdldExvY2FsU3RvcmFnZVByb2plY3RMaXN0KCk7XG4gICAgZm9yKGxldCBwcm9qIG9mIHByb2plY3RMaXN0KSB7XG4gICAgICAgIGZvcihsZXQgdGFzayBvZiBwcm9qLnByb2plY3RUYXNrTGlzdCkge1xuICAgICAgICAgICAgaWYodGFzay50YXNrTmFtZSA9PT0gdGFza05hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZSA9IHByb2oucHJvamVjdE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb2plY3ROYW1lO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gZ2V0TG9jYWxTdG9yYWdlUHJvamVjdExpc3QoKTtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0TGlzdC5maW5kSW5kZXgob2JqID0+IG9iai5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RMaXN0LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlIHByb2plY3RMaXN0XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RMaXN0KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RMaXN0KSB7XG4gICAgLy8gU3RvcmUgdGhlIEpTT04gc3RyaW5nIGluIGxvY2FsU3RvcmFnZSB1bmRlciBhIHNwZWNpZmljIGtleVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdEtleScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZVByb2plY3RMaXN0KCl7XG4gICAgbGV0IHByb2plY3RMaXN0U3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0S2V5Jyk7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShwcm9qZWN0TGlzdFN0cmluZyk7IC8vIExpc3Qgb2YgcHJvamVjdE9iamVjdHNcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cblxuXG5cblxuXG5leHBvcnQge3Byb2plY3RMaXN0LCBhZGRQcm9qZWN0LCBhZGRUYXNrVG9Qcm9qZWN0LCBnZXRUYXNrTGlzdCwgZ2V0QWxsVGFza3MsIGdldFByb2plY3ROYW1lQnlUYXNrLCByZW1vdmVUYXNrRnJvbVByb2plY3QsIGRlbGV0ZVByb2plY3QsIGdldExvY2FsU3RvcmFnZVByb2plY3RMaXN0fTsiLCJcblxuZnVuY3Rpb24gVGFzayh0YXNrTmFtZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlKSB7XG4gICAgdGhpcy50YXNrTmFtZSA9IHRhc2tOYW1lO1xuICAgIHRoaXMudGFza0RldGFpbHMgPSB0YXNrRGV0YWlscztcbiAgICB0aGlzLnRhc2tEYXRlID0gdGFza0RhdGU7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5mb3Jtcy5uZXdUYXNrRm9ybSk7XG4gICAgbGV0IHRhc2tOYW1lID0gZm9ybURhdGEuZ2V0KCd0YXNrTmFtZScpO1xuICAgIGxldCB0YXNrRGV0YWlscyA9IGZvcm1EYXRhLmdldCgndGFza0RldGFpbHMnKTtcbiAgICBsZXQgdGFza0RhdGUgPSBmb3JtRGF0YS5nZXQoJ3Rhc2tEYXRlJyk7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrTmFtZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbn1cblxuZXhwb3J0IHsgYWRkVGFzayB9OyIsIi8vIERPTSBSRUxBVEVEIE1PRFVMRVxuaW1wb3J0IHsgYWRkVGFzayB9IGZyb20gJy4vY3JlYXRlVGFzayc7XG5pbXBvcnQgeyBnZXRUYXNrTGlzdCwgZ2V0QWxsVGFza3MsIHByb2plY3RMaXN0LCBnZXRQcm9qZWN0TmFtZUJ5VGFzaywgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBnZXRMb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gaW5pdGlhbERpc3BsYXkoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgLy8gaGVhZGVyIGNvbnRlbnRcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUaXRsZScpO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ05vUHJvY3Jhc3RpbmF0aW9uJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgLy8gcGFnZSBjb250ZW50XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwYWdlQ29udGVudCcpO1xuICAgICAgICAvLyBzaWRlIGJhciB0b3BcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgY29uc3Qgc2lkZWJhclRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJUb3AuY2xhc3NMaXN0LmFkZCgnc2lkZWJhclRvcCcpO1xuICAgIGNvbnN0IGFsbFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbGxUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FsbFRhc2tCdXR0b24nLCAnc2lkZWJhckJ1dHRvbicpO1xuICAgIGFsbFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5QnV0dG9uJywgJ3NpZGViYXJCdXR0b24nKTtcbiAgICB0b2RheUJ1dHRvbi50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgY29uc3QgaW1wb3J0YW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0YW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudEJ1dHRvbicsICdzaWRlYmFyQnV0dG9uJyk7XG4gICAgaW1wb3J0YW50QnV0dG9uLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgc2lkZWJhclRvcC5hcHBlbmRDaGlsZChhbGxUYXNrQnV0dG9uKTtcbiAgICBzaWRlYmFyVG9wLmFwcGVuZENoaWxkKHRvZGF5QnV0dG9uKTtcbiAgICBzaWRlYmFyVG9wLmFwcGVuZENoaWxkKGltcG9ydGFudEJ1dHRvbik7XG4gICAgICAgIC8vIHNpZGUgYmFyIGJvdHRvbVxuICAgIGNvbnN0IHNpZGViYXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyQm90dG9tLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJCb3R0b20nKTtcbiAgICBjb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnc2lkZWJhclByb2plY3RzJywgJ3NpZGViYXJCdXR0b24nKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RCdXR0b24nLCAnc2lkZWJhckJ1dHRvbicpO1xuICAgIHNpZGViYXJCb3R0b20uYXBwZW5kQ2hpbGQoc2lkZWJhclByb2plY3RzKTtcbiAgICBzaWRlYmFyQm90dG9tLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhclRvcCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQm90dG9tKTtcbiAgICAgICAgLy8gbWFpbiBjb250ZW50XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGVudCcpO1xuICAgIGNvbnN0IG1haW5Db250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudFRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50VGl0bGUnKTtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50Q29udGFpbmVyJyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRUaXRsZSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kKG1haW5Db250ZW50Q29udGFpbmVyKTtcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbiAgICAvLyBmb290ZXIgY29udGVudFxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IE9yaWdpbmFsUnlhbiDCqSc7XG5cbiAgICAvLyBhcHBlbmQgdG8gaHRtbCBmaWxlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gbG9jYWxTdG9yYWdlRGlzcGxheSgpIHtcbiAgICAvLyBDbGVhciBhbnkgcHJvamVjdHMgaW4gc2lkZWJhclByb2plY3RzIGJlZm9yZSByZXJlbmRlcmluZ1xuICAgIGxldCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhclByb2plY3RzJyk7XG4gICAgd2hpbGUoc2lkZWJhclByb2plY3RzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2lkZWJhclByb2plY3RzLnJlbW92ZUNoaWxkKHNpZGViYXJQcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBwcm9qZWN0TGlzdCBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIGxldCBwcm9qZWN0TGlzdCA9IGdldExvY2FsU3RvcmFnZVByb2plY3RMaXN0KCk7XG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBwcm9qZWN0TGlzdCBhbmQgcnVuIGFkZFByb2plY3RTaWRlYmFyIG9uIGVhY2ggcHJvamVjdFxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdExpc3Qpe1xuICAgICAgICBhZGRQcm9qZWN0U2lkZWJhcihwcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFsbFRhc2tEaXNwbGF5KCkge1xuICAgIC8vIENsZWFyIGFueSBjb250ZW50IGluIG1haW5Db250ZW50Q29udGFpbmVyIGJlZm9yZSByZXJlbmRlcmluZ1xuICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudENvbnRhaW5lcicpO1xuICAgIHdoaWxlKG1haW5Db250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENoYW5nZSB0aGUgdGl0bGVcbiAgICBsZXQgbWFpbkNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudFRpdGxlJyk7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuICAgIGxldCB0YXNrTGlzdCA9IGdldEFsbFRhc2tzKCk7XG4gICAgZGlzcGxheVRhc2tzKHRhc2tMaXN0KTsgXG59XG5cbmZ1bmN0aW9uIHRvZGF5dGFza0Rpc3BsYXkoKSB7XG5cbn1cblxuZnVuY3Rpb24gaW1wb3J0YW50dGFza0Rpc3BsYXkoKSB7XG5cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFNpZGViYXIocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJQcm9qZWN0cycpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJQcm9qZWN0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhclByb2plY3ROYW1lJyk7XG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UHJvamVjdCk7XG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2hlY2tib3gnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5pZCA9ICdjb21wbGV0ZWRDaGVja2JveCc7XG4gICAgY2hlY2tib3gubmFtZSA9ICdjb21wbGV0ZWRDaGVja2JveCc7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21wbGV0ZWRQcm9qZWN0Q2hlY2tib3gpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kKG5ld1Byb2plY3QpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoZXZlbnQpIHtcbiAgICAvLyBjbGVhciBhbnkgcHJvamVjdHMgaW4gbWFpbkNvbnRlbnRDb250YWluZXIgYmVmb3JlIHJlcmVuZGVyaW5nXG4gICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250ZW50Q29udGFpbmVyJyk7XG4gICAgd2hpbGUobWFpbkNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluQ29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluQ29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ2hhbmdlIHRoZSB0aXRsZVxuICAgIGxldCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBsZXQgbWFpbkNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudFRpdGxlJyk7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIC8vIEFkZCBUYXNrIEJ1dHRvblxuICAgIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2tCdXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrQ2xpY2spO1xuICAgICAgICAvLyBFbnN1cmUgYWRkIHRhc2sgYnV0dG9uIGlzIGFkZGVkIG9ubHkgb25jZVxuICAgIGlmKG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrQnV0dG9uJykgPT0gbnVsbCl7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgIH1cbiAgICAvLyBEaXNwbGF5IHRhc2tzIG9mIHByb2plY3QgY2xpY2tlZCBieSBhcHBlbmRpbmcgdGFza3MgdG8gbWFpbkNvbnRlbnRDb250YWluZXJcbiAgICAvLyAxKSBBY2Nlc3MgdGhlIHRhc2tsaXN0IG9mIHByb2plY3RPYmplY3RcbiAgICBsZXQgdGFza0xpc3QgPSBnZXRUYXNrTGlzdChwcm9qZWN0TmFtZSk7XG4gICAgLy8gMikgQXBwZW5kIGFsbCB0byB0aGUgbWFpbkNvbnRlbnRcbiAgICBkaXNwbGF5VGFza3ModGFza0xpc3QpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrQ2xpY2soKSB7XG4gICAgY29uc3QgYWRkVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrRGlhbG9nJyk7XG4gICAgYWRkVGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHRhc2tMaXN0KSB7XG4gICAgZm9yKGxldCB0YXNrIG9mIHRhc2tMaXN0KSB7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IHRhc2sudGFza05hbWU7XG4gICAgICAgIGxldCB0YXNrRGV0YWlscyA9IHRhc2sudGFza0RldGFpbHM7XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IHRhc2sudGFza0RhdGU7XG4gICAgICAgIGNyZWF0ZVRhc2tEaXYodGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGl2KHRhc2tOYW1lLCB0YXNrRGV0YWlscywgdGFza0RhdGUpIHtcbiAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnRDb250YWluZXInKTtcbiAgICAvLyBjcmVhdGUgdGFza0RpdlxuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2Jyk7XG4gICAgLy8gY3JlYXRlIHRhc2tEaXZMZWZ0XG4gICAgbGV0IHRhc2tEaXZMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RpdkxlZnQuY2xhc3NMaXN0LmFkZCgndGFza0RpdkxlZnQnKTtcbiAgICAvLyBjcmVhdGUgdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG4gICAgbGV0IHRhc2tEaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2VGl0bGUnKTtcbiAgICB0YXNrRGl2VGl0bGUudGV4dENvbnRlbnQgPSB0YXNrTmFtZTtcbiAgICBsZXQgdGFza0RpdkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2RGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2RGVzYycpO1xuICAgIHRhc2tEaXZEZXNjLnRleHRDb250ZW50ID0gdGFza0RldGFpbHM7XG4gICAgdGFza0RpdkxlZnQuYXBwZW5kQ2hpbGQodGFza0RpdlRpdGxlKTtcbiAgICB0YXNrRGl2TGVmdC5hcHBlbmRDaGlsZCh0YXNrRGl2RGVzYyk7XG4gICAgLy8gY3JlYXRlIHRhc2tEaXZSaWdodFxuICAgIGxldCB0YXNrRGl2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2UmlnaHQuY2xhc3NMaXN0LmFkZCgndGFza0RpdlJpZ2h0Jyk7XG4gICAgLy8gY3JlYXRlIGRhdGUgYW5kIGNoZWNrYm94XG4gICAgbGV0IHRhc2tEaXZEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RpdkRhdGUuY2xhc3NMaXN0LmFkZCgndGFza0RpdkRhdGUnKTtcbiAgICB0YXNrRGl2RGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEYXRlO1xuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndGFza0NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guaWQgPSAnY29tcGxldGVkQ2hlY2tib3gnO1xuICAgIGNoZWNrYm94Lm5hbWUgPSAnY29tcGxldGVkQ2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tcGxldGVkVGFza0NoZWNrYm94KTtcbiAgICB0YXNrRGl2UmlnaHQuYXBwZW5kQ2hpbGQodGFza0RpdkRhdGUpO1xuICAgIHRhc2tEaXZSaWdodC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEaXZMZWZ0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEaXZSaWdodCk7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZFByb2plY3RDaGVja2JveChldmVudCkge1xuICAgIC8vIHJlbW92ZSBzaWRlYmFyUHJvamVjdCBmcm9tIHNpZGViYXJQcm9qZWN0c1xuICAgIGxldCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhclByb2plY3RzJyk7XG4gICAgbGV0IGNoZWNrYm94ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBzaWRlYmFyUHJvamVjdFRvQmVEZWxldGVkID0gY2hlY2tib3gucGFyZW50Tm9kZTtcbiAgICBzaWRlYmFyUHJvamVjdHMucmVtb3ZlQ2hpbGQoc2lkZWJhclByb2plY3RUb0JlRGVsZXRlZCk7XG5cbiAgICAvLyByZW1vdmUgcHJvamVjdCBmcm9tIHByb2plY3RMaXN0XG4gICAgbGV0IHByb2plY3ROYW1lID0gc2lkZWJhclByb2plY3RUb0JlRGVsZXRlZC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhclByb2plY3ROYW1lJykudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgLy8ganVtcCB0byBkaXNwbGF5IGFsbCB0YXNrIG9uIG1haW4gY29udGVudCB3aGVuIGEgcHJvamVjdCBpcyBkZWxldGVkXG4gICAgYWxsVGFza0Rpc3BsYXkoKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVkVGFza0NoZWNrYm94KGV2ZW50KSB7XG4gICAgLy8gcmVtb3ZlIHRhc2tEaXYgZnJvbSBtYWluQ29udGVudENvbnRhaW5lclxuICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudENvbnRhaW5lcicpO1xuICAgIGxldCBjaGVja2JveCA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgdGFza0RpdlRvQmVEZWxldGVkID0gY2hlY2tib3gucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tEaXZUb0JlRGVsZXRlZCk7XG5cbiAgICAvLyByZW1vdmUgdGFzayBmcm9tIHByb2plY3RUYXNrTGlzdCBvZiBwcm9qZWN0IG9iamVjdFxuICAgIGxldCB0YXNrVGl0bGVUb0JlRGVsZXRlZCA9IHRhc2tEaXZUb0JlRGVsZXRlZC5xdWVyeVNlbGVjdG9yKCcudGFza0RpdkxlZnQgLnRhc2tEaXZUaXRsZScpLnRleHRDb250ZW50O1xuICAgIGxldCBwcm9qZWN0TmFtZVRvQmVEZWxldGVkID0gZ2V0UHJvamVjdE5hbWVCeVRhc2sodGFza1RpdGxlVG9CZURlbGV0ZWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGVjayBoZXJlJyk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVUb0JlRGVsZXRlZCk7IC8vaXNzdWVcbiAgICAvLyBjb25zb2xlLmxvZygnY2hlY2sgaGVyZSBlbmRzMicpO1xuICAgIHJlbW92ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0TmFtZVRvQmVEZWxldGVkLCB0YXNrVGl0bGVUb0JlRGVsZXRlZCk7XG59XG5cblxuXG5cbmV4cG9ydCB7aW5pdGlhbERpc3BsYXksIGFkZFByb2plY3RTaWRlYmFyLCBhbGxUYXNrRGlzcGxheSwgY3JlYXRlVGFza0RpdiwgbG9jYWxTdG9yYWdlRGlzcGxheX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHByb2plY3RMaXN0LCBhZGRQcm9qZWN0LCBhZGRUYXNrVG9Qcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHsgaW5pdGlhbERpc3BsYXksIGFkZFByb2plY3RTaWRlYmFyLCBhbGxUYXNrRGlzcGxheSwgY3JlYXRlVGFza0RpdiwgbG9jYWxTdG9yYWdlRGlzcGxheSB9IGZyb20gXCIuL2xvYWREaXNwbGF5XCI7XG5pbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG4vLyBMb2FkIGluaXRpYWwgZGlzcGxheSBlbGVtZW50c1xuaW5pdGlhbERpc3BsYXkoKTtcblxuLy8gQ2hlY2sgaWYgbG9jYWxTdG9yYWdlIGlzIGVtcHR5XG5pZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIGlzIGVtcHR5XCIpO1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZSBpcyBub3QgZW1wdHlcIik7XG4gICAgbG9jYWxTdG9yYWdlRGlzcGxheSgpO1xufVxuXG4vLyBMb2FkIGxvY2FsU3RvcmFnZSBwcm9qZWN0c1xuLy8gbG9jYWxTdG9yYWdlRGlzcGxheSgpO1xuXG4vLyBBZGQgUHJvamVjdCBCdXR0b25cbmNvbnN0IGFkZFByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdERpYWxvZycpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7XG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG59KVxuXG5jb25zdCBuZXdQcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RTdWJtaXQnKTtcbm5ld1Byb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IGFkZFByb2plY3QoZXZlbnQpOyAvL25ldyBwcm9qZWN0IG9ialxuICAgIGFkZFByb2plY3RTaWRlYmFyKG5ld1Byb2plY3QucHJvamVjdE5hbWUpO1xuICAgIGFkZFByb2plY3REaWFsb2cuY2xvc2UoKVxufSlcblxuXG4vLyBBZGQgVGFzayBTdWJtaXQgQnV0dG9uXG5jb25zdCBhZGRUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tEaWFsb2cnKTtcbmNvbnN0IG5ld1Rhc2tTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza1N1Ym1pdCcpO1xubmV3VGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGxldCBuZXdUYXNrID0gYWRkVGFzayhldmVudCk7XG4gICAgLy8gTGluayB0aGlzIHRhc2sgdG8gdGhlIHByb2plY3RcbiAgICBhZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2spO1xuICAgIC8vIEdldCB0aGUgdGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSBmcm9tIG5ld1Rhc2sgb2JqZWN0XG4gICAgbGV0IHRhc2tOYW1lID0gbmV3VGFzay50YXNrTmFtZTtcbiAgICBsZXQgdGFza0RldGFpbHMgPSBuZXdUYXNrLnRhc2tEZXRhaWxzO1xuICAgIGxldCB0YXNrRGF0ZSA9IG5ld1Rhc2sudGFza0RhdGU7XG4gICAgLy8gQXBwZW5kIHRoaXMgbGF0ZXN0IHRhc2sgdG8gdGhlIG1haW4gY29udGFpbmVyXG4gICAgY3JlYXRlVGFza0Rpdih0YXNrTmFtZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlKTtcbiAgICBhZGRUYXNrRGlhbG9nLmNsb3NlKCk7XG59KVxuXG5cbi8vIEFsbCBUYXNrcyBCdXR0b25cbmNvbnN0IGFsbFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsVGFza0J1dHRvbicpO1xuYWxsVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhbGxUYXNrRGlzcGxheSgpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=