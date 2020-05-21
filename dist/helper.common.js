module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/modules/beautiful-log/index.js
var _COLOR;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** 日志类型 **/
var TYPE = {
  LOG: 'log',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'err'
};
/** 各类型主题色 **/

var COLOR = (_COLOR = {}, _defineProperty(_COLOR, TYPE.LOG, '#4CAF50'), _defineProperty(_COLOR, TYPE.INFO, '#2196F3'), _defineProperty(_COLOR, TYPE.WARN, '#F57C00'), _defineProperty(_COLOR, TYPE.ERROR, '#FF5252'), _COLOR);
/**
 *  所有方法参数如下
 *  @param { String }         title  - 日志标题，会显示在当前日志的头部，根据不同方法会有不同背景色，醒目显示
 *  @param { String | Array } [desc] - 详解介绍，可以为数组，会显示多行
 *  @param { String }         [type] - 日志类型，默认为 log，可选 info、warn、err
 **/

var log = function log(options) {
  var type = options.type,
      title = options.title,
      desc = options.desc;
  var color = COLOR[type] || COLOR[TYPE.LOG];
  /**
   *  简写逻辑
   *  若配置项为字符串或者数字类型
   **/

  if (typeof options === 'string' || typeof options === 'number') {
    title = options;
    desc = [];
  }
  /** 对象配置 **/
  else {
      /**
       *  优化使用
       *    若 desc 为 Error 类型，那么 type 默认为 err
       **/
      color = desc instanceof Error ? COLOR[options.type] ? color : COLOR[TYPE.ERROR] : color;
      /** 统一 desc 为数组类型 **/

      if (desc instanceof Array === false) {
        if (desc !== undefined) {
          desc = [desc];
        } else {
          desc = [];
        }
      }
    }
  /** 输出漂亮的日志 **/


  console.log('');
  console.log('=============================================================');
  console.log("%c".concat(title), "color: white; font-size: 12px; background-color: ".concat(color, "; padding: 2px 5px; border-radius: 2px"));
  /** 若有 desc 才输出的部分 **/

  if (desc.length) {
    console.log('-');
    desc.forEach(function (desc) {
      console.log(desc);
    });
    console.log('-');
  }

  console.log('=============================================================');
  console.log('');
};


// CONCATENATED MODULE: ./src/modules/wait-value/index.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  内部值集合
 *    key 为自定义的字符串标识
 *    value 为 “等值” 实例
 **/
var valueCollection = {};
/** “等值” 实例 **/

var ValueItem = function ValueItem() {
  _classCallCheck(this, ValueItem);

  this.resolveArr = [];
  this.rejectArr = [];
  this.value = null;
};
/**
 *  根据 '标识名' 监听变量是否已赋值
 *  该函数返回一个 Promise
 *
 *  该函数执行时
 *  若 '标识名' 已被 emit 过
 *  则会立刻触发 resolve
 *  返回 emit 时的缓存值
 *
 *  @param { String } name - 标识名，需要和 emit 相同
 **/


var on = function on(name) {
  return new Promise(function (resolve, reject) {
    /**
     *  当前 name 指向的 resolve 集合
     *  若不存在则初始化
     **/
    var target = valueCollection[name] = valueCollection[name] || new ValueItem();
    /**
     *  已有值，则立刻返回缓存的结果
     **/

    if (target.value) {
      resolve(target.value);
    }
    /**
     *  暂时无值
     *  push resolve 和 reject
     *  等待 emit 触发
     **/
    else {
        target.resolveArr.push(resolve);
        target.rejectArr.push(reject);
      }
  });
};
/**
 *  用于通知变量已有值，触发回调
 *  @param { String } name - 标识名，需要和 on 相同
 **/


var emit = function emit(name, value) {
  /**
   *  当前 name 指向的 resolve 集合
   *  若不存在则初始化
   **/
  var target = valueCollection[name] = valueCollection[name] || new ValueItem();
  /** 判断是否是重复触发 **/

  if (target.value) {
    return console.warn("\u6765\u81EA waitValue \u7684\u8B66\u544A\uFF0C".concat(name, " \u5DF2\u88AB\u8D4B\u503C\uFF0C\u8BF7\u52FF\u91CD\u590D\u901A\u77E5"));
  }
  /** 若 value 是 error，则 reject **/


  if (value instanceof Error === true) {
    target.rejectArr.forEach(function (reject) {
      reject(value);
    });
  }
  /**
   *  不是错误，则 resolve
   *  设置已完成标识
   *  缓存结果（若为引用类型则会深拷贝）
   **/
  else {
      /** 触发全部的 resolve **/
      target.resolveArr.forEach(function (resolve) {
        resolve(value);
      });
      /** 缓存值，若为引用类型深拷贝**/

      target.value = value;
      /** 清除 resolve 和 reject 数组 **/

      delete target.resolveArr;
      delete target.rejectArr;
    }
};

var waitValue = {
  on: on,
  emit: emit
};

// CONCATENATED MODULE: ./src/modules/cache-value/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** 内部的缓存值对象，所有缓存的值都会被记录到这里 **/
var innerCacheData = {};
/**
 *  缓存数据
 *  注意：重复 cache 相同的 name 会替换上一个的缓存值
 *
 *  @param { String } name  - 缓存标识
 *  @param { Any }    value - 缓存值
 **/

var cache = function cache(name, value) {
  var _name = String(name);

  var _value = value;
  /** 深拷贝 value **/

  if (_typeof(_value) === 'object') {
    _value = JSON.parse(JSON.stringify(value));
  }
  /** 记录到内部缓存值对象中 **/


  innerCacheData[_name] = _value;
};
/**
 *  回退数据
 *
 *  @param { String }   name  - 缓存标识
 *  @param { Function } backHandler - 自定义的回退方法
 **/


var back = function back(name, backHandler) {
  backHandler(innerCacheData[String(name)]);
};

var cacheValue = {
  cache: cache,
  back: back
};

// CONCATENATED MODULE: ./src/modules/is-empty-value/index.js
var isEmptyValue = function isEmptyValue(value) {
  /**
   *  null, undefined, NaN, ''
   *  确定为空值
   **/
  if (value === null || value === undefined || typeof value === 'number' && isNaN(value) || value === '') {
    return true;
  }
  /**
   *  字符串类型这里去除开头和结尾的空格，再判断下是否为空
   **/
  else if (typeof value === 'string') {
      if (value.replace(/(^\s*)|(\s*$)/g, '') === '') {
        return true;
      }
    }
  /** 检验通过 **/


  return false;
};


// CONCATENATED MODULE: ./src/modules/prefix-zero/index.js
/**
 *  补 0 前缀
 *  @param { Number } - 数字
 *  @param { Number } - 固定的总位数
 **/
var prefixZero = function prefixZero(num, n) {
  return (Array(n).join(0) + num).slice(-n);
};


// CONCATENATED MODULE: ./src/modules/file-size-conver/index.js
var fileSizeConver = {};

fileSizeConver.betterShow = function (size, unit) {
  var bSize = null;

  var _unit = unit.toLowerCase();

  var _size = '';
  /** 将 size 转为 bSize **/

  switch (_unit) {
    case 'b':
      {
        bSize = size;
        break;
      }

    case 'kb':
      {
        bSize = size * 1024;
        break;
      }

    case 'mb':
      {
        bSize = size * 1024 * 1024;
        break;
      }

    case 'gb':
      {
        bSize = size * 1024 * 1024 * 1024;
        break;
      }

    case 'tb':
      {
        bSize = size * 1024 * 1024 * 1024 * 1024;
        break;
      }

    default:
      {
        throw new Error("fileSizeConver\uFF1AoriginUnit \u53C2\u6570\u5355\u4F4D\u9519\u8BEF ".concat(originUnit));
      }
  }

  if (bSize < 0.1 * 1024) {
    //如果小于0.1KB转化成B
    _size = bSize.toFixed(2) + 'B';
  } else if (bSize < 0.1 * 1024 * 1024) {
    //如果小于0.1MB转化成KB
    _size = (bSize / 1024).toFixed(2) + 'KB';
  } else if (bSize < 0.1 * 1024 * 1024 * 1024) {
    //如果小于0.1GB转化成MB
    _size = (bSize / (1024 * 1024)).toFixed(2) + 'MB';
  } else {
    //其他转化成GB
    _size = (bSize / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
  }

  var _sizestr = _size + '';

  var len = _sizestr.indexOf('\.');

  var dec = _sizestr.substr(len + 1, 2);

  if (dec == '00') {
    //当小数点后为00时 去掉小数部分
    return _sizestr.substring(0, len) + _sizestr.substr(len + 3, 2);
  }

  return _sizestr;
};
/**
 *  @param { Number } size - 文件大小
 *  @param { String } originUnit      - 转换前的文件单位
 *  @param { String } converUnit      - 转换后的文件单位
 *  @param { Boolean } [hasUnit=true] - 转换后是否带单位
 **/


fileSizeConver.format = function (size, originUnit, converUnit) {
  var hasUnit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var bSize = null;
  var formatSize = null;
  var fileLengthFormatNParams = null;

  var _originUnit = originUnit.toLowerCase();

  var _converUnit = converUnit.toLowerCase();
  /** 将 size 转为 bSize **/


  switch (_originUnit) {
    case 'b':
      {
        bSize = size;
        break;
      }

    case 'kb':
      {
        bSize = size * 1024;
        break;
      }

    case 'mb':
      {
        bSize = size * 1024 * 1024;
        break;
      }

    case 'gb':
      {
        bSize = size * 1024 * 1024 * 1024;
        break;
      }

    case 'tb':
      {
        bSize = size * 1024 * 1024 * 1024 * 1024;
        break;
      }

    default:
      {
        throw new Error("fileSizeConver\uFF1AoriginUnit \u53C2\u6570\u5355\u4F4D\u9519\u8BEF ".concat(originUnit));
      }
  }
  /** 确定 fileLengthFormatNParams **/


  switch (_converUnit) {
    case 'b':
      {
        formatSize = bSize + 'b';
        break;
      }

    case 'kb':
      {
        formatSize = bSize / 1024 + 'kb';
        break;
      }

    case 'mb':
      {
        formatSize = bSize / 1024 / 1024 + 'mb';
        break;
      }

    case 'gb':
      {
        formatSize = bSize / 1024 / 1024 / 1024 + 'gb';
        break;
      }

    case 'tb':
      {
        formatSize = bSize / 1024 / 1024 / 1024 / 1024 + 'tb';
        break;
      }

    default:
      {
        throw new Error("fileSizeConver\uFF1AconverUnit \u53C2\u6570\u5355\u4F4D\u9519\u8BEF ".concat(converUnit));
      }
  }

  return hasUnit ? formatSize : parseFloat(formatSize);
};


// CONCATENATED MODULE: ./src/index.js






// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport log */__webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* concated harmony reexport waitValue */__webpack_require__.d(__webpack_exports__, "waitValue", function() { return waitValue; });
/* concated harmony reexport cacheValue */__webpack_require__.d(__webpack_exports__, "cacheValue", function() { return cacheValue; });
/* concated harmony reexport isEmptyValue */__webpack_require__.d(__webpack_exports__, "isEmptyValue", function() { return isEmptyValue; });
/* concated harmony reexport prefixZero */__webpack_require__.d(__webpack_exports__, "prefixZero", function() { return prefixZero; });
/* concated harmony reexport fileSizeConver */__webpack_require__.d(__webpack_exports__, "fileSizeConver", function() { return fileSizeConver; });




/***/ })

/******/ });
//# sourceMappingURL=helper.common.js.map