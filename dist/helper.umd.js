(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["helper"] = factory();
	else
		root["helper"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "faa1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


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
 *  @param { String }   name       - 标识名，需要和 emit 相同
 *  @param { Function } [callback] - 等值成功后的回调函数
 **/


var on = function on(name, callback) {
  var promise = new Promise(function (resolve, reject) {
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
  /**
   *  若 callback 存在
   *  则在 promise resolve 后执行 callback
   *  on 方法为同步函数
   **/

  if (callback) {
    promise.then(function (result) {
      return callback(null, result);
    }).catch(function (err) {
      return callback(err, null);
    });
    return null;
  }
  /**
   *  若 callback 不存在
   *  则返回 Promise
   **/
  else {
      return promise;
    }
};
/**
 *  用于通知变量已有值，触发回调
 *  @param { String } name - 标识名，需要和 on 相同
 *  @param { String } value - 结果值，该值会被缓存起来
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

      target.value = value || true;
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


// CONCATENATED MODULE: ./src/modules/obj-to-form-data/index.js
/**
 *  将 js 对象转为 formData
 *  @param { Object }  obj - 需要转换为 formData 的对象
 *  @param { Object }  [opts] - 配置
 *  @param { Boolean } [opts.arrayBrackets=false] - 是否需要在数组类型的key后面加上小括号
 *
 *  @description
 *    目前已知 php 解析 formData 数组类型时需要将 key 后面加上 [] 才能正常解析
 *    而其他后端语言不用
 *
 *    php example:
 *      files[]: (binary)
 *      files[]: (binary)
 *
 *    other example:
 *      files: (binary)
 *      files: (binary)
 **/
var objToFormData = function objToFormData(obj) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    arrayBrackets: false
  };
  var formData = new FormData();

  var _loop = function _loop(key) {
    var value = obj[key];
    var isArr = value instanceof Array;
    /** 数组类型 **/

    if (isArr) {
      value.forEach(function (itemValue, i) {
        formData.append(opts.arrayBrackets ? key + '[]' : key, itemValue);
      });
    }
    /** 非数组类型 **/
    else {
        formData.append(key, value);
      }
  };

  for (var key in obj) {
    _loop(key);
  }

  return formData;
};


// CONCATENATED MODULE: ./src/modules/hide-part-str/index.js
/**
 *  隐藏部分字符串
 *
 *  @param { String } str       - 需要转换的字符串
 *  @param { String } [chars=*] - 转换后的字符
 *  @param { Number } [startI]  - 从哪里开始转换（包含），默认会截取中间的位置进行转换
 *  @param { Number } [endI]    - 转换结束的位置（包含），默认会截取中间的位置进行转换
 *
 *  @return { String }
 **/
function hidePartStr(str, chars, startI, endI) {
  /** 参数处理 **/
  str = String(str);
  chars = chars || '*';
  startI = startI || null;
  endI = endI || null;
  /**
   *  默认情况
   *  会自动截取中间的部分转换
   **/

  var strLength = str.length;
  var transformLength = parseInt(strLength / 2);
  var transformStartI = parseInt((strLength - transformLength) / 2);
  var transformEndI = transformStartI + transformLength;
  var chartStr = '';
  /**
   *  指定了 startI 和 endI
   **/

  if (typeof startI === 'number' && typeof endI === 'number') {
    /** startI 负数情况 **/
    if (startI < 0) {
      startI = strLength + startI;
    }
    /** endI 负数情况处理 **/


    if (endI < 0) {
      endI = strLength + endI;
    }
    /** 包含 endI **/


    endI++;
    transformLength = endI - startI;
    transformStartI = startI;
    transformEndI = endI;
  }

  for (var i = 0; i < transformLength; i++) {
    chartStr += chars;
  }

  return str.substr(0, transformStartI) + chartStr + str.substr(transformEndI);
}


// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__("faa1");

// CONCATENATED MODULE: ./src/modules/jason-web-socket/index.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { jason_web_socket_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function jason_web_socket_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function jason_web_socket_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 *  class JasonWebSocket
 *  @param { String }   url    - 接口地址
 *  @param { Object }   [opts] - 其他配置
 *  @param { Boolean | Function }  [opts.retry=false] - 是否断开重连，Function 需要返回 Boolean，可以返回 Promise
 *  @param { Number }  [opts.retryDelay=1000] - 重连的延迟时间
 **/

var jason_web_socket_JasonWebSocket =
/*#__PURE__*/
function () {
  function JasonWebSocket(url, opts) {
    jason_web_socket_classCallCheck(this, JasonWebSocket);

    /** 配置默认值 **/
    opts = _objectSpread({
      retry: false,
      retryDelay: 1000
    }, opts);
    /** WebSocket 实例 **/

    this.ws = null;
    /** 接收到的所有数据 **/

    this.data = [];
    /** 事件对象 **/

    this._events = new events["EventEmitter"]();
    /** 初始化连接 **/

    this._init(url, opts);
  }

  _createClass(JasonWebSocket, [{
    key: "_init",
    value: function _init(url, opts) {
      var _this = this;

      /** 连接 **/
      this.ws = null;
      this.ws = new WebSocket(url);
      /** 初始化事件 **/

      this.ws.onopen = function () {
        var _this$_events;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_this$_events = _this._events).emit.apply(_this$_events, ['open'].concat(args));
      };

      this.ws.onmessage = function () {
        var _this$_events2;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_this$_events2 = _this._events).emit.apply(_this$_events2, ['message'].concat(args));
      };

      this.ws.onerror = function () {
        var _this$_events3;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        (_this$_events3 = _this._events).emit.apply(_this$_events3, ['error'].concat(args));
      };

      this.ws.onclose = function () {
        var _this$_events4;

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        (_this$_events4 = _this._events).emit.apply(_this$_events4, ['close'].concat(args));
      };
      /** 接收到消息时，存入到 data 属性中 **/


      this.on('message', function (e) {
        _this.data.push(e.data);
      });
      /** 断开重连逻辑 **/

      this.once('close', function (e) {
        /**
         *  ! 不重连
         **/
        if (Boolean(opts.retry) === false) {
          return null;
        }
        /**
         *  延迟重连
         **/


        setTimeout(
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var canRetry;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;

                            if (!(typeof opts.retry === 'function')) {
                              _context.next = 7;
                              break;
                            }

                            _context.next = 4;
                            return opts.retry();

                          case 4:
                            _context.t0 = _context.sent;
                            _context.next = 8;
                            break;

                          case 7:
                            _context.t0 = true;

                          case 8:
                            return _context.abrupt("return", _context.t0);

                          case 11:
                            _context.prev = 11;
                            _context.t1 = _context["catch"](0);
                            console.error(_context.t1);
                            return _context.abrupt("return", false);

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 11]]);
                  }))();

                case 2:
                  canRetry = _context2.sent;

                  /**
                   *  若需要重连则重新连接
                   **/
                  canRetry && _this._init(url, opts);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })), opts.retryDelay);
      });
    }
    /** 绑定事件 **/

  }, {
    key: "on",
    value: function on(eventName, handler) {
      return this._events.on(eventName, handler);
    }
    /** 绑定一次性事件 **/

  }, {
    key: "once",
    value: function once(eventName, handler) {
      return this._events.once(eventName, handler);
    }
    /** 解除事件 **/

  }, {
    key: "off",
    value: function off(eventName, handler) {
      return this._events.off(eventName, handler);
    }
    /** 主动向服务器发送消息，代理 ws.send 方法 **/

  }, {
    key: "send",
    value: function send() {
      var _this$ws;

      return (_this$ws = this.ws).send.apply(_this$ws, arguments);
    }
    /** 主动关闭连接，代理 ws.close 方法 **/

  }, {
    key: "close",
    value: function close() {
      var _this$ws2;

      return (_this$ws2 = this.ws).close.apply(_this$ws2, arguments);
    }
  }]);

  return JasonWebSocket;
}();


// CONCATENATED MODULE: ./src/index.js









// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport log */__webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* concated harmony reexport waitValue */__webpack_require__.d(__webpack_exports__, "waitValue", function() { return waitValue; });
/* concated harmony reexport cacheValue */__webpack_require__.d(__webpack_exports__, "cacheValue", function() { return cacheValue; });
/* concated harmony reexport isEmptyValue */__webpack_require__.d(__webpack_exports__, "isEmptyValue", function() { return isEmptyValue; });
/* concated harmony reexport prefixZero */__webpack_require__.d(__webpack_exports__, "prefixZero", function() { return prefixZero; });
/* concated harmony reexport fileSizeConver */__webpack_require__.d(__webpack_exports__, "fileSizeConver", function() { return fileSizeConver; });
/* concated harmony reexport objToFormData */__webpack_require__.d(__webpack_exports__, "objToFormData", function() { return objToFormData; });
/* concated harmony reexport hidePartStr */__webpack_require__.d(__webpack_exports__, "hidePartStr", function() { return hidePartStr; });
/* concated harmony reexport JasonWebSocket */__webpack_require__.d(__webpack_exports__, "JasonWebSocket", function() { return jason_web_socket_JasonWebSocket; });




/***/ })

/******/ });
});
//# sourceMappingURL=helper.umd.js.map