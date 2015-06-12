/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function vPollPlayer(e,o){if(!o.socketUrl)throw new Error("options.socketUrl needs to be specified");var r=window.socket=_socketIoClient2["default"](o.socketUrl);r.on("message",function(e){return console.log(e)});var i=_videoJs2["default"](e,o),l=new _videoJs2["default"].Chart(i,{});i.addChild(l);var t=new _videoJs2["default"].FormPoll(i,{});return i.addChild(t),window.sendPoll=function(){console.log("No logic for sending implemented .... hiding poll"),t.addClass("hide-el")},window.askPoll=function(){console.log("Showing poll form"),t.removeClass("hide-el")},i}var _Object$defineProperty=__webpack_require__(1)["default"],_interopRequireDefault=__webpack_require__(5)["default"];_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=vPollPlayer;var _videoJs=__webpack_require__(6),_videoJs2=_interopRequireDefault(_videoJs),_videojsContribHls=__webpack_require__(9),_videojsContribHls2=_interopRequireDefault(_videojsContribHls),_socketIoClient=__webpack_require__(10),_socketIoClient2=_interopRequireDefault(_socketIoClient),_chartJs=__webpack_require__(62),_chartJs2=_interopRequireDefault(_chartJs);__webpack_require__(63),__webpack_require__(9),__webpack_require__(64),__webpack_require__(72),__webpack_require__(73),window.vPollPlayer=vPollPlayer,module.exports=exports["default"];
	//# sourceMappingURL=out.map.js

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}

	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}

	var $ = module.exports = __webpack_require__(4)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/**
	 * @fileoverview Main function src.
	 */

	// HTML5 Shiv. Must be in <head> to support older browsers.
	document.createElement('video');
	document.createElement('audio');
	document.createElement('track');

	/**
	 * Doubles as the main function for users to create a player instance and also
	 * the main library object.
	 *
	 * **ALIASES** videojs, _V_ (deprecated)
	 *
	 * The `vjs` function can be used to initialize or retrieve a player.
	 *
	 *     var myPlayer = vjs('my_video_id');
	 *
	 * @param  {String|Element} id      Video element or video element ID
	 * @param  {Object=} options        Optional options object for config/settings
	 * @param  {Function=} ready        Optional ready callback
	 * @return {vjs.Player}             A player instance
	 * @namespace
	 */
	var vjs = function(id, options, ready){
	  var tag; // Element of ID

	  // Allow for element or ID to be passed in
	  // String ID
	  if (typeof id === 'string') {

	    // Adjust for jQuery ID syntax
	    if (id.indexOf('#') === 0) {
	      id = id.slice(1);
	    }

	    // If a player instance has already been created for this ID return it.
	    if (vjs.players[id]) {

	      // If options or ready funtion are passed, warn
	      if (options) {
	        vjs.log.warn ('Player "' + id + '" is already initialised. Options will not be applied.');
	      }

	      if (ready) {
	        vjs.players[id].ready(ready);
	      }

	      return vjs.players[id];

	    // Otherwise get element for ID
	    } else {
	      tag = vjs.el(id);
	    }

	  // ID is a media element
	  } else {
	    tag = id;
	  }

	  // Check for a useable element
	  if (!tag || !tag.nodeName) { // re: nodeName, could be a box div also
	    throw new TypeError('The element or ID supplied is not valid. (videojs)'); // Returns
	  }

	  // Element may have a player attr referring to an already created player instance.
	  // If not, set up a new player and return the instance.
	  return tag['player'] || new vjs.Player(tag, options, ready);
	};

	// Extended name, also available externally, window.videojs
	var videojs = window['videojs'] = vjs;

	// CDN Version. Used to target right flash swf.
	vjs.CDN_VERSION = '4.12';
	vjs.ACCESS_PROTOCOL = ('https:' == document.location.protocol ? 'https://' : 'http://');

	/**
	* Full player version
	* @type {string}
	*/
	vjs['VERSION'] = '4.12.7';

	/**
	 * Global Player instance options, surfaced from vjs.Player.prototype.options_
	 * vjs.options = vjs.Player.prototype.options_
	 * All options should use string keys so they avoid
	 * renaming by closure compiler
	 * @type {Object}
	 */
	vjs.options = {
	  // Default order of fallback technology
	  'techOrder': ['html5','flash'],
	  // techOrder: ['flash','html5'],

	  'html5': {},
	  'flash': {},

	  // Default of web browser is 300x150. Should rely on source width/height.
	  'width': 300,
	  'height': 150,
	  // defaultVolume: 0.85,
	  'defaultVolume': 0.00, // The freakin seaguls are driving me crazy!

	  // default playback rates
	  'playbackRates': [],
	  // Add playback rate selection by adding rates
	  // 'playbackRates': [0.5, 1, 1.5, 2],

	  // default inactivity timeout
	  'inactivityTimeout': 2000,

	  // Included control sets
	  'children': {
	    'mediaLoader': {},
	    'posterImage': {},
	    'loadingSpinner': {},
	    'textTrackDisplay': {},
	    'bigPlayButton': {},
	    'controlBar': {},
	    'errorDisplay': {},
	    'textTrackSettings': {}
	  },

	  'language': document.getElementsByTagName('html')[0].getAttribute('lang') || navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || 'en',

	  // locales and their language translations
	  'languages': {},

	  // Default message to show when a video cannot be played.
	  'notSupportedMessage': 'No compatible source was found for this video.'
	};

	// Set CDN Version of swf
	// The added (+) blocks the replace from changing this 4.12 string
	if (vjs.CDN_VERSION !== 'GENERATED'+'_CDN_VSN') {
	  videojs.options['flash']['swf'] = vjs.ACCESS_PROTOCOL + 'vjs.zencdn.net/'+vjs.CDN_VERSION+'/video-js.swf';
	}

	/**
	 * Utility function for adding languages to the default options. Useful for
	 * amending multiple language support at runtime.
	 *
	 * Example: vjs.addLanguage('es', {'Hello':'Hola'});
	 *
	 * @param  {String} code The language code or dictionary property
	 * @param  {Object} data The data values to be translated
	 * @return {Object} The resulting global languages dictionary object
	 */
	vjs.addLanguage = function(code, data){
	  if(vjs.options['languages'][code] !== undefined) {
	    vjs.options['languages'][code] = vjs.util.mergeOptions(vjs.options['languages'][code], data);
	  } else {
	    vjs.options['languages'][code] = data;
	  }
	  return vjs.options['languages'];
	};

	/**
	 * Global player list
	 * @type {Object}
	 */
	vjs.players = {};

	/*!
	 * Custom Universal Module Definition (UMD)
	 *
	 * Video.js will never be a non-browser lib so we can simplify UMD a bunch and
	 * still support requirejs and browserify. This also needs to be closure
	 * compiler compatible, so string keys are used.
	 */
	if ("function" === 'function' && __webpack_require__(8)['amd']) {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){ return videojs; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	// checking that module is an object too because of umdjs/umd#35
	} else if (true) {
	  module['exports'] = videojs;
	}
	/**
	 * Core Object/Class for objects that use inheritance + constructors
	 *
	 * To create a class that can be subclassed itself, extend the CoreObject class.
	 *
	 *     var Animal = CoreObject.extend();
	 *     var Horse = Animal.extend();
	 *
	 * The constructor can be defined through the init property of an object argument.
	 *
	 *     var Animal = CoreObject.extend({
	 *       init: function(name, sound){
	 *         this.name = name;
	 *       }
	 *     });
	 *
	 * Other methods and properties can be added the same way, or directly to the
	 * prototype.
	 *
	 *    var Animal = CoreObject.extend({
	 *       init: function(name){
	 *         this.name = name;
	 *       },
	 *       getName: function(){
	 *         return this.name;
	 *       },
	 *       sound: '...'
	 *    });
	 *
	 *    Animal.prototype.makeSound = function(){
	 *      alert(this.sound);
	 *    };
	 *
	 * To create an instance of a class, use the create method.
	 *
	 *    var fluffy = Animal.create('Fluffy');
	 *    fluffy.getName(); // -> Fluffy
	 *
	 * Methods and properties can be overridden in subclasses.
	 *
	 *     var Horse = Animal.extend({
	 *       sound: 'Neighhhhh!'
	 *     });
	 *
	 *     var horsey = Horse.create('Horsey');
	 *     horsey.getName(); // -> Horsey
	 *     horsey.makeSound(); // -> Alert: Neighhhhh!
	 *
	 * @class
	 * @constructor
	 */
	vjs.CoreObject = vjs['CoreObject'] = function(){};
	// Manually exporting vjs['CoreObject'] here for Closure Compiler
	// because of the use of the extend/create class methods
	// If we didn't do this, those functions would get flattened to something like
	// `a = ...` and `this.prototype` would refer to the global object instead of
	// CoreObject

	/**
	 * Create a new object that inherits from this Object
	 *
	 *     var Animal = CoreObject.extend();
	 *     var Horse = Animal.extend();
	 *
	 * @param {Object} props Functions and properties to be applied to the
	 *                       new object's prototype
	 * @return {vjs.CoreObject} An object that inherits from CoreObject
	 * @this {*}
	 */
	vjs.CoreObject.extend = function(props){
	  var init, subObj;

	  props = props || {};
	  // Set up the constructor using the supplied init method
	  // or using the init of the parent object
	  // Make sure to check the unobfuscated version for external libs
	  init = props['init'] || props.init || this.prototype['init'] || this.prototype.init || function(){};
	  // In Resig's simple class inheritance (previously used) the constructor
	  //  is a function that calls `this.init.apply(arguments)`
	  // However that would prevent us from using `ParentObject.call(this);`
	  //  in a Child constructor because the `this` in `this.init`
	  //  would still refer to the Child and cause an infinite loop.
	  // We would instead have to do
	  //    `ParentObject.prototype.init.apply(this, arguments);`
	  //  Bleh. We're not creating a _super() function, so it's good to keep
	  //  the parent constructor reference simple.
	  subObj = function(){
	    init.apply(this, arguments);
	  };

	  // Inherit from this object's prototype
	  subObj.prototype = vjs.obj.create(this.prototype);
	  // Reset the constructor property for subObj otherwise
	  // instances of subObj would have the constructor of the parent Object
	  subObj.prototype.constructor = subObj;

	  // Make the class extendable
	  subObj.extend = vjs.CoreObject.extend;
	  // Make a function for creating instances
	  subObj.create = vjs.CoreObject.create;

	  // Extend subObj's prototype with functions and other properties from props
	  for (var name in props) {
	    if (props.hasOwnProperty(name)) {
	      subObj.prototype[name] = props[name];
	    }
	  }

	  return subObj;
	};

	/**
	 * Create a new instance of this Object class
	 *
	 *     var myAnimal = Animal.create();
	 *
	 * @return {vjs.CoreObject} An instance of a CoreObject subclass
	 * @this {*}
	 */
	vjs.CoreObject.create = function(){
	  // Create a new object that inherits from this object's prototype
	  var inst = vjs.obj.create(this.prototype);

	  // Apply this constructor function to the new object
	  this.apply(inst, arguments);

	  // Return the new object
	  return inst;
	};
	/**
	 * @fileoverview Event System (John Resig - Secrets of a JS Ninja http://jsninja.com/)
	 * (Original book version wasn't completely usable, so fixed some things and made Closure Compiler compatible)
	 * This should work very similarly to jQuery's events, however it's based off the book version which isn't as
	 * robust as jquery's, so there's probably some differences.
	 */

	/**
	 * Add an event listener to element
	 * It stores the handler function in a separate cache object
	 * and adds a generic handler to the element's event,
	 * along with a unique id (guid) to the element.
	 * @param  {Element|Object}   elem Element or object to bind listeners to
	 * @param  {String|Array}   type Type of event to bind to.
	 * @param  {Function} fn   Event listener.
	 * @private
	 */
	vjs.on = function(elem, type, fn){
	  if (vjs.obj.isArray(type)) {
	    return _handleMultipleEvents(vjs.on, elem, type, fn);
	  }

	  var data = vjs.getData(elem);

	  // We need a place to store all our handler data
	  if (!data.handlers) data.handlers = {};

	  if (!data.handlers[type]) data.handlers[type] = [];

	  if (!fn.guid) fn.guid = vjs.guid++;

	  data.handlers[type].push(fn);

	  if (!data.dispatcher) {
	    data.disabled = false;

	    data.dispatcher = function (event){

	      if (data.disabled) return;
	      event = vjs.fixEvent(event);

	      var handlers = data.handlers[event.type];

	      if (handlers) {
	        // Copy handlers so if handlers are added/removed during the process it doesn't throw everything off.
	        var handlersCopy = handlers.slice(0);

	        for (var m = 0, n = handlersCopy.length; m < n; m++) {
	          if (event.isImmediatePropagationStopped()) {
	            break;
	          } else {
	            handlersCopy[m].call(elem, event);
	          }
	        }
	      }
	    };
	  }

	  if (data.handlers[type].length == 1) {
	    if (elem.addEventListener) {
	      elem.addEventListener(type, data.dispatcher, false);
	    } else if (elem.attachEvent) {
	      elem.attachEvent('on' + type, data.dispatcher);
	    }
	  }
	};

	/**
	 * Removes event listeners from an element
	 * @param  {Element|Object}   elem Object to remove listeners from
	 * @param  {String|Array=}   type Type of listener to remove. Don't include to remove all events from element.
	 * @param  {Function} fn   Specific listener to remove. Don't include to remove listeners for an event type.
	 * @private
	 */
	vjs.off = function(elem, type, fn) {
	  // Don't want to add a cache object through getData if not needed
	  if (!vjs.hasData(elem)) return;

	  var data = vjs.getData(elem);

	  // If no events exist, nothing to unbind
	  if (!data.handlers) { return; }

	  if (vjs.obj.isArray(type)) {
	    return _handleMultipleEvents(vjs.off, elem, type, fn);
	  }

	  // Utility function
	  var removeType = function(t){
	     data.handlers[t] = [];
	     vjs.cleanUpEvents(elem,t);
	  };

	  // Are we removing all bound events?
	  if (!type) {
	    for (var t in data.handlers) removeType(t);
	    return;
	  }

	  var handlers = data.handlers[type];

	  // If no handlers exist, nothing to unbind
	  if (!handlers) return;

	  // If no listener was provided, remove all listeners for type
	  if (!fn) {
	    removeType(type);
	    return;
	  }

	  // We're only removing a single handler
	  if (fn.guid) {
	    for (var n = 0; n < handlers.length; n++) {
	      if (handlers[n].guid === fn.guid) {
	        handlers.splice(n--, 1);
	      }
	    }
	  }

	  vjs.cleanUpEvents(elem, type);
	};

	/**
	 * Clean up the listener cache and dispatchers
	 * @param  {Element|Object} elem Element to clean up
	 * @param  {String} type Type of event to clean up
	 * @private
	 */
	vjs.cleanUpEvents = function(elem, type) {
	  var data = vjs.getData(elem);

	  // Remove the events of a particular type if there are none left
	  if (data.handlers[type].length === 0) {
	    delete data.handlers[type];
	    // data.handlers[type] = null;
	    // Setting to null was causing an error with data.handlers

	    // Remove the meta-handler from the element
	    if (elem.removeEventListener) {
	      elem.removeEventListener(type, data.dispatcher, false);
	    } else if (elem.detachEvent) {
	      elem.detachEvent('on' + type, data.dispatcher);
	    }
	  }

	  // Remove the events object if there are no types left
	  if (vjs.isEmpty(data.handlers)) {
	    delete data.handlers;
	    delete data.dispatcher;
	    delete data.disabled;

	    // data.handlers = null;
	    // data.dispatcher = null;
	    // data.disabled = null;
	  }

	  // Finally remove the expando if there is no data left
	  if (vjs.isEmpty(data)) {
	    vjs.removeData(elem);
	  }
	};

	/**
	 * Fix a native event to have standard property values
	 * @param  {Object} event Event object to fix
	 * @return {Object}
	 * @private
	 */
	vjs.fixEvent = function(event) {

	  function returnTrue() { return true; }
	  function returnFalse() { return false; }

	  // Test if fixing up is needed
	  // Used to check if !event.stopPropagation instead of isPropagationStopped
	  // But native events return true for stopPropagation, but don't have
	  // other expected methods like isPropagationStopped. Seems to be a problem
	  // with the Javascript Ninja code. So we're just overriding all events now.
	  if (!event || !event.isPropagationStopped) {
	    var old = event || window.event;

	    event = {};
	    // Clone the old object so that we can modify the values event = {};
	    // IE8 Doesn't like when you mess with native event properties
	    // Firefox returns false for event.hasOwnProperty('type') and other props
	    //  which makes copying more difficult.
	    // TODO: Probably best to create a whitelist of event props
	    for (var key in old) {
	      // Safari 6.0.3 warns you if you try to copy deprecated layerX/Y
	      // Chrome warns you if you try to copy deprecated keyboardEvent.keyLocation
	      if (key !== 'layerX' && key !== 'layerY' && key !== 'keyLocation') {
	        // Chrome 32+ warns if you try to copy deprecated returnValue, but
	        // we still want to if preventDefault isn't supported (IE8).
	        if (!(key == 'returnValue' && old.preventDefault)) {
	          event[key] = old[key];
	        }
	      }
	    }

	    // The event occurred on this element
	    if (!event.target) {
	      event.target = event.srcElement || document;
	    }

	    // Handle which other element the event is related to
	    event.relatedTarget = event.fromElement === event.target ?
	      event.toElement :
	      event.fromElement;

	    // Stop the default browser action
	    event.preventDefault = function () {
	      if (old.preventDefault) {
	        old.preventDefault();
	      }
	      event.returnValue = false;
	      event.isDefaultPrevented = returnTrue;
	      event.defaultPrevented = true;
	    };

	    event.isDefaultPrevented = returnFalse;
	    event.defaultPrevented = false;

	    // Stop the event from bubbling
	    event.stopPropagation = function () {
	      if (old.stopPropagation) {
	        old.stopPropagation();
	      }
	      event.cancelBubble = true;
	      event.isPropagationStopped = returnTrue;
	    };

	    event.isPropagationStopped = returnFalse;

	    // Stop the event from bubbling and executing other handlers
	    event.stopImmediatePropagation = function () {
	      if (old.stopImmediatePropagation) {
	        old.stopImmediatePropagation();
	      }
	      event.isImmediatePropagationStopped = returnTrue;
	      event.stopPropagation();
	    };

	    event.isImmediatePropagationStopped = returnFalse;

	    // Handle mouse position
	    if (event.clientX != null) {
	      var doc = document.documentElement, body = document.body;

	      event.pageX = event.clientX +
	        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
	        (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = event.clientY +
	        (doc && doc.scrollTop || body && body.scrollTop || 0) -
	        (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // Handle key presses
	    event.which = event.charCode || event.keyCode;

	    // Fix button for mouse clicks:
	    // 0 == left; 1 == middle; 2 == right
	    if (event.button != null) {
	      event.button = (event.button & 1 ? 0 :
	        (event.button & 4 ? 1 :
	          (event.button & 2 ? 2 : 0)));
	    }
	  }

	  // Returns fixed-up instance
	  return event;
	};

	/**
	 * Trigger an event for an element
	 * @param  {Element|Object}      elem  Element to trigger an event on
	 * @param  {Event|Object|String} event A string (the type) or an event object with a type attribute
	 * @private
	 */
	vjs.trigger = function(elem, event) {
	  // Fetches element data and a reference to the parent (for bubbling).
	  // Don't want to add a data object to cache for every parent,
	  // so checking hasData first.
	  var elemData = (vjs.hasData(elem)) ? vjs.getData(elem) : {};
	  var parent = elem.parentNode || elem.ownerDocument;
	      // type = event.type || event,
	      // handler;

	  // If an event name was passed as a string, creates an event out of it
	  if (typeof event === 'string') {
	    event = { type:event, target:elem };
	  }
	  // Normalizes the event properties.
	  event = vjs.fixEvent(event);

	  // If the passed element has a dispatcher, executes the established handlers.
	  if (elemData.dispatcher) {
	    elemData.dispatcher.call(elem, event);
	  }

	  // Unless explicitly stopped or the event does not bubble (e.g. media events)
	    // recursively calls this function to bubble the event up the DOM.
	    if (parent && !event.isPropagationStopped() && event.bubbles !== false) {
	    vjs.trigger(parent, event);

	  // If at the top of the DOM, triggers the default action unless disabled.
	  } else if (!parent && !event.defaultPrevented) {
	    var targetData = vjs.getData(event.target);

	    // Checks if the target has a default action for this event.
	    if (event.target[event.type]) {
	      // Temporarily disables event dispatching on the target as we have already executed the handler.
	      targetData.disabled = true;
	      // Executes the default action.
	      if (typeof event.target[event.type] === 'function') {
	        event.target[event.type]();
	      }
	      // Re-enables event dispatching.
	      targetData.disabled = false;
	    }
	  }

	  // Inform the triggerer if the default was prevented by returning false
	  return !event.defaultPrevented;
	  /* Original version of js ninja events wasn't complete.
	   * We've since updated to the latest version, but keeping this around
	   * for now just in case.
	   */
	  // // Added in addition to book. Book code was broke.
	  // event = typeof event === 'object' ?
	  //   event[vjs.expando] ?
	  //     event :
	  //     new vjs.Event(type, event) :
	  //   new vjs.Event(type);

	  // event.type = type;
	  // if (handler) {
	  //   handler.call(elem, event);
	  // }

	  // // Clean up the event in case it is being reused
	  // event.result = undefined;
	  // event.target = elem;
	};

	/**
	 * Trigger a listener only once for an event
	 * @param  {Element|Object}   elem Element or object to
	 * @param  {String|Array}   type
	 * @param  {Function} fn
	 * @private
	 */
	vjs.one = function(elem, type, fn) {
	  if (vjs.obj.isArray(type)) {
	    return _handleMultipleEvents(vjs.one, elem, type, fn);
	  }
	  var func = function(){
	    vjs.off(elem, type, func);
	    fn.apply(this, arguments);
	  };
	  // copy the guid to the new function so it can removed using the original function's ID
	  func.guid = fn.guid = fn.guid || vjs.guid++;
	  vjs.on(elem, type, func);
	};

	/**
	 * Loops through an array of event types and calls the requested method for each type.
	 * @param  {Function} fn   The event method we want to use.
	 * @param  {Element|Object} elem Element or object to bind listeners to
	 * @param  {String}   type Type of event to bind to.
	 * @param  {Function} callback   Event listener.
	 * @private
	 */
	function _handleMultipleEvents(fn, elem, type, callback) {
	  vjs.arr.forEach(type, function(type) {
	    fn(elem, type, callback); //Call the event method for each one of the types
	  });
	}
	var hasOwnProp = Object.prototype.hasOwnProperty;

	/**
	 * Creates an element and applies properties.
	 * @param  {String=} tagName    Name of tag to be created.
	 * @param  {Object=} properties Element properties to be applied.
	 * @return {Element}
	 * @private
	 */
	vjs.createEl = function(tagName, properties){
	  var el;

	  tagName = tagName || 'div';
	  properties = properties || {};

	  el = document.createElement(tagName);

	  vjs.obj.each(properties, function(propName, val){
	    // Not remembering why we were checking for dash
	    // but using setAttribute means you have to use getAttribute

	    // The check for dash checks for the aria-* attributes, like aria-label, aria-valuemin.
	    // The additional check for "role" is because the default method for adding attributes does not
	    // add the attribute "role". My guess is because it's not a valid attribute in some namespaces, although
	    // browsers handle the attribute just fine. The W3C allows for aria-* attributes to be used in pre-HTML5 docs.
	    // http://www.w3.org/TR/wai-aria-primer/#ariahtml. Using setAttribute gets around this problem.
	    if (propName.indexOf('aria-') !== -1 || propName == 'role') {
	     el.setAttribute(propName, val);
	    } else {
	     el[propName] = val;
	    }
	  });

	  return el;
	};

	/**
	 * Uppercase the first letter of a string
	 * @param  {String} string String to be uppercased
	 * @return {String}
	 * @private
	 */
	vjs.capitalize = function(string){
	  return string.charAt(0).toUpperCase() + string.slice(1);
	};

	/**
	 * Object functions container
	 * @type {Object}
	 * @private
	 */
	vjs.obj = {};

	/**
	 * Object.create shim for prototypal inheritance
	 *
	 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create
	 *
	 * @function
	 * @param  {Object}   obj Object to use as prototype
	 * @private
	 */
	vjs.obj.create = Object.create || function(obj){
	  //Create a new function called 'F' which is just an empty object.
	  function F() {}

	  //the prototype of the 'F' function should point to the
	  //parameter of the anonymous function.
	  F.prototype = obj;

	  //create a new constructor function based off of the 'F' function.
	  return new F();
	};

	/**
	 * Loop through each property in an object and call a function
	 * whose arguments are (key,value)
	 * @param  {Object}   obj Object of properties
	 * @param  {Function} fn  Function to be called on each property.
	 * @this {*}
	 * @private
	 */
	vjs.obj.each = function(obj, fn, context){
	  for (var key in obj) {
	    if (hasOwnProp.call(obj, key)) {
	      fn.call(context || this, key, obj[key]);
	    }
	  }
	};

	/**
	 * Merge two objects together and return the original.
	 * @param  {Object} obj1
	 * @param  {Object} obj2
	 * @return {Object}
	 * @private
	 */
	vjs.obj.merge = function(obj1, obj2){
	  if (!obj2) { return obj1; }
	  for (var key in obj2){
	    if (hasOwnProp.call(obj2, key)) {
	      obj1[key] = obj2[key];
	    }
	  }
	  return obj1;
	};

	/**
	 * Merge two objects, and merge any properties that are objects
	 * instead of just overwriting one. Uses to merge options hashes
	 * where deeper default settings are important.
	 * @param  {Object} obj1 Object to override
	 * @param  {Object} obj2 Overriding object
	 * @return {Object}      New object. Obj1 and Obj2 will be untouched.
	 * @private
	 */
	vjs.obj.deepMerge = function(obj1, obj2){
	  var key, val1, val2;

	  // make a copy of obj1 so we're not overwriting original values.
	  // like prototype.options_ and all sub options objects
	  obj1 = vjs.obj.copy(obj1);

	  for (key in obj2){
	    if (hasOwnProp.call(obj2, key)) {
	      val1 = obj1[key];
	      val2 = obj2[key];

	      // Check if both properties are pure objects and do a deep merge if so
	      if (vjs.obj.isPlain(val1) && vjs.obj.isPlain(val2)) {
	        obj1[key] = vjs.obj.deepMerge(val1, val2);
	      } else {
	        obj1[key] = obj2[key];
	      }
	    }
	  }
	  return obj1;
	};

	/**
	 * Make a copy of the supplied object
	 * @param  {Object} obj Object to copy
	 * @return {Object}     Copy of object
	 * @private
	 */
	vjs.obj.copy = function(obj){
	  return vjs.obj.merge({}, obj);
	};

	/**
	 * Check if an object is plain, and not a dom node or any object sub-instance
	 * @param  {Object} obj Object to check
	 * @return {Boolean}     True if plain, false otherwise
	 * @private
	 */
	vjs.obj.isPlain = function(obj){
	  return !!obj
	    && typeof obj === 'object'
	    && obj.toString() === '[object Object]'
	    && obj.constructor === Object;
	};

	/**
	 * Check if an object is Array
	*  Since instanceof Array will not work on arrays created in another frame we need to use Array.isArray, but since IE8 does not support Array.isArray we need this shim
	 * @param  {Object} obj Object to check
	 * @return {Boolean}     True if plain, false otherwise
	 * @private
	 */
	vjs.obj.isArray = Array.isArray || function(arr) {
	  return Object.prototype.toString.call(arr) === '[object Array]';
	};

	/**
	 * Check to see whether the input is NaN or not.
	 * NaN is the only JavaScript construct that isn't equal to itself
	 * @param {Number} num Number to check
	 * @return {Boolean} True if NaN, false otherwise
	 * @private
	 */
	vjs.isNaN = function(num) {
	  return num !== num;
	};

	/**
	 * Bind (a.k.a proxy or Context). A simple method for changing the context of a function
	   It also stores a unique id on the function so it can be easily removed from events
	 * @param  {*}   context The object to bind as scope
	 * @param  {Function} fn      The function to be bound to a scope
	 * @param  {Number=}   uid     An optional unique ID for the function to be set
	 * @return {Function}
	 * @private
	 */
	vjs.bind = function(context, fn, uid) {
	  // Make sure the function has a unique ID
	  if (!fn.guid) { fn.guid = vjs.guid++; }

	  // Create the new function that changes the context
	  var ret = function() {
	    return fn.apply(context, arguments);
	  };

	  // Allow for the ability to individualize this function
	  // Needed in the case where multiple objects might share the same prototype
	  // IF both items add an event listener with the same function, then you try to remove just one
	  // it will remove both because they both have the same guid.
	  // when using this, you need to use the bind method when you remove the listener as well.
	  // currently used in text tracks
	  ret.guid = (uid) ? uid + '_' + fn.guid : fn.guid;

	  return ret;
	};

	/**
	 * Element Data Store. Allows for binding data to an element without putting it directly on the element.
	 * Ex. Event listeners are stored here.
	 * (also from jsninja.com, slightly modified and updated for closure compiler)
	 * @type {Object}
	 * @private
	 */
	vjs.cache = {};

	/**
	 * Unique ID for an element or function
	 * @type {Number}
	 * @private
	 */
	vjs.guid = 1;

	/**
	 * Unique attribute name to store an element's guid in
	 * @type {String}
	 * @constant
	 * @private
	 */
	vjs.expando = 'vdata' + (new Date()).getTime();

	/**
	 * Returns the cache object where data for an element is stored
	 * @param  {Element} el Element to store data for.
	 * @return {Object}
	 * @private
	 */
	vjs.getData = function(el){
	  var id = el[vjs.expando];
	  if (!id) {
	    id = el[vjs.expando] = vjs.guid++;
	  }
	  if (!vjs.cache[id]) {
	    vjs.cache[id] = {};
	  }
	  return vjs.cache[id];
	};

	/**
	 * Returns the cache object where data for an element is stored
	 * @param  {Element} el Element to store data for.
	 * @return {Object}
	 * @private
	 */
	vjs.hasData = function(el){
	  var id = el[vjs.expando];
	  return !(!id || vjs.isEmpty(vjs.cache[id]));
	};

	/**
	 * Delete data for the element from the cache and the guid attr from getElementById
	 * @param  {Element} el Remove data for an element
	 * @private
	 */
	vjs.removeData = function(el){
	  var id = el[vjs.expando];
	  if (!id) { return; }
	  // Remove all stored data
	  // Changed to = null
	  // http://coding.smashingmagazine.com/2012/11/05/writing-fast-memory-efficient-javascript/
	  // vjs.cache[id] = null;
	  delete vjs.cache[id];

	  // Remove the expando property from the DOM node
	  try {
	    delete el[vjs.expando];
	  } catch(e) {
	    if (el.removeAttribute) {
	      el.removeAttribute(vjs.expando);
	    } else {
	      // IE doesn't appear to support removeAttribute on the document element
	      el[vjs.expando] = null;
	    }
	  }
	};

	/**
	 * Check if an object is empty
	 * @param  {Object}  obj The object to check for emptiness
	 * @return {Boolean}
	 * @private
	 */
	vjs.isEmpty = function(obj) {
	  for (var prop in obj) {
	    // Inlude null properties as empty.
	    if (obj[prop] !== null) {
	      return false;
	    }
	  }
	  return true;
	};

	/**
	 * Check if an element has a CSS class
	 * @param {Element} element Element to check
	 * @param {String} classToCheck Classname to check
	 * @private
	 */
	vjs.hasClass = function(element, classToCheck){
	  return ((' ' + element.className + ' ').indexOf(' ' + classToCheck + ' ') !== -1);
	};


	/**
	 * Add a CSS class name to an element
	 * @param {Element} element    Element to add class name to
	 * @param {String} classToAdd Classname to add
	 * @private
	 */
	vjs.addClass = function(element, classToAdd){
	  if (!vjs.hasClass(element, classToAdd)) {
	    element.className = element.className === '' ? classToAdd : element.className + ' ' + classToAdd;
	  }
	};

	/**
	 * Remove a CSS class name from an element
	 * @param {Element} element    Element to remove from class name
	 * @param {String} classToAdd Classname to remove
	 * @private
	 */
	vjs.removeClass = function(element, classToRemove){
	  var classNames, i;

	  if (!vjs.hasClass(element, classToRemove)) {return;}

	  classNames = element.className.split(' ');

	  // no arr.indexOf in ie8, and we don't want to add a big shim
	  for (i = classNames.length - 1; i >= 0; i--) {
	    if (classNames[i] === classToRemove) {
	      classNames.splice(i,1);
	    }
	  }

	  element.className = classNames.join(' ');
	};

	/**
	 * Element for testing browser HTML5 video capabilities
	 * @type {Element}
	 * @constant
	 * @private
	 */
	vjs.TEST_VID = vjs.createEl('video');
	(function() {
	  var track = document.createElement('track');
	  track.kind = 'captions';
	  track.srclang = 'en';
	  track.label = 'English';
	  vjs.TEST_VID.appendChild(track);
	})();

	/**
	 * Useragent for browser testing.
	 * @type {String}
	 * @constant
	 * @private
	 */
	vjs.USER_AGENT = navigator.userAgent;

	/**
	 * Device is an iPhone
	 * @type {Boolean}
	 * @constant
	 * @private
	 */
	vjs.IS_IPHONE = (/iPhone/i).test(vjs.USER_AGENT);
	vjs.IS_IPAD = (/iPad/i).test(vjs.USER_AGENT);
	vjs.IS_IPOD = (/iPod/i).test(vjs.USER_AGENT);
	vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD;

	vjs.IOS_VERSION = (function(){
	  var match = vjs.USER_AGENT.match(/OS (\d+)_/i);
	  if (match && match[1]) { return match[1]; }
	})();

	vjs.IS_ANDROID = (/Android/i).test(vjs.USER_AGENT);
	vjs.ANDROID_VERSION = (function() {
	  // This matches Android Major.Minor.Patch versions
	  // ANDROID_VERSION is Major.Minor as a Number, if Minor isn't available, then only Major is returned
	  var match = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
	    major,
	    minor;

	  if (!match) {
	    return null;
	  }

	  major = match[1] && parseFloat(match[1]);
	  minor = match[2] && parseFloat(match[2]);

	  if (major && minor) {
	    return parseFloat(match[1] + '.' + match[2]);
	  } else if (major) {
	    return major;
	  } else {
	    return null;
	  }
	})();
	// Old Android is defined as Version older than 2.3, and requiring a webkit version of the android browser
	vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && (/webkit/i).test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3;

	vjs.IS_FIREFOX = (/Firefox/i).test(vjs.USER_AGENT);
	vjs.IS_CHROME = (/Chrome/i).test(vjs.USER_AGENT);
	vjs.IS_IE8 = (/MSIE\s8\.0/).test(vjs.USER_AGENT);

	vjs.TOUCH_ENABLED = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);
	vjs.BACKGROUND_SIZE_SUPPORTED = 'backgroundSize' in vjs.TEST_VID.style;

	/**
	 * Apply attributes to an HTML element.
	 * @param  {Element} el         Target element.
	 * @param  {Object=} attributes Element attributes to be applied.
	 * @private
	 */
	vjs.setElementAttributes = function(el, attributes){
	  vjs.obj.each(attributes, function(attrName, attrValue) {
	    if (attrValue === null || typeof attrValue === 'undefined' || attrValue === false) {
	      el.removeAttribute(attrName);
	    } else {
	      el.setAttribute(attrName, (attrValue === true ? '' : attrValue));
	    }
	  });
	};

	/**
	 * Get an element's attribute values, as defined on the HTML tag
	 * Attributes are not the same as properties. They're defined on the tag
	 * or with setAttribute (which shouldn't be used with HTML)
	 * This will return true or false for boolean attributes.
	 * @param  {Element} tag Element from which to get tag attributes
	 * @return {Object}
	 * @private
	 */
	vjs.getElementAttributes = function(tag){
	  var obj, knownBooleans, attrs, attrName, attrVal;

	  obj = {};

	  // known boolean attributes
	  // we can check for matching boolean properties, but older browsers
	  // won't know about HTML5 boolean attributes that we still read from
	  knownBooleans = ','+'autoplay,controls,loop,muted,default'+',';

	  if (tag && tag.attributes && tag.attributes.length > 0) {
	    attrs = tag.attributes;

	    for (var i = attrs.length - 1; i >= 0; i--) {
	      attrName = attrs[i].name;
	      attrVal = attrs[i].value;

	      // check for known booleans
	      // the matching element property will return a value for typeof
	      if (typeof tag[attrName] === 'boolean' || knownBooleans.indexOf(','+attrName+',') !== -1) {
	        // the value of an included boolean attribute is typically an empty
	        // string ('') which would equal false if we just check for a false value.
	        // we also don't want support bad code like autoplay='false'
	        attrVal = (attrVal !== null) ? true : false;
	      }

	      obj[attrName] = attrVal;
	    }
	  }

	  return obj;
	};

	/**
	 * Get the computed style value for an element
	 * From http://robertnyman.com/2006/04/24/get-the-rendered-style-of-an-element/
	 * @param  {Element} el        Element to get style value for
	 * @param  {String} strCssRule Style name
	 * @return {String}            Style value
	 * @private
	 */
	vjs.getComputedDimension = function(el, strCssRule){
	  var strValue = '';
	  if(document.defaultView && document.defaultView.getComputedStyle){
	    strValue = document.defaultView.getComputedStyle(el, '').getPropertyValue(strCssRule);

	  } else if(el.currentStyle){
	    // IE8 Width/Height support
	    strValue = el['client'+strCssRule.substr(0,1).toUpperCase() + strCssRule.substr(1)] + 'px';
	  }
	  return strValue;
	};

	/**
	 * Insert an element as the first child node of another
	 * @param  {Element} child   Element to insert
	 * @param  {[type]} parent Element to insert child into
	 * @private
	 */
	vjs.insertFirst = function(child, parent){
	  if (parent.firstChild) {
	    parent.insertBefore(child, parent.firstChild);
	  } else {
	    parent.appendChild(child);
	  }
	};

	/**
	 * Object to hold browser support information
	 * @type {Object}
	 * @private
	 */
	vjs.browser = {};

	/**
	 * Shorthand for document.getElementById()
	 * Also allows for CSS (jQuery) ID syntax. But nothing other than IDs.
	 * @param  {String} id  Element ID
	 * @return {Element}    Element with supplied ID
	 * @private
	 */
	vjs.el = function(id){
	  if (id.indexOf('#') === 0) {
	    id = id.slice(1);
	  }

	  return document.getElementById(id);
	};

	/**
	 * Format seconds as a time string, H:MM:SS or M:SS
	 * Supplying a guide (in seconds) will force a number of leading zeros
	 * to cover the length of the guide
	 * @param  {Number} seconds Number of seconds to be turned into a string
	 * @param  {Number} guide   Number (in seconds) to model the string after
	 * @return {String}         Time formatted as H:MM:SS or M:SS
	 * @private
	 */
	vjs.formatTime = function(seconds, guide) {
	  // Default to using seconds as guide
	  guide = guide || seconds;
	  var s = Math.floor(seconds % 60),
	      m = Math.floor(seconds / 60 % 60),
	      h = Math.floor(seconds / 3600),
	      gm = Math.floor(guide / 60 % 60),
	      gh = Math.floor(guide / 3600);

	  // handle invalid times
	  if (isNaN(seconds) || seconds === Infinity) {
	    // '-' is false for all relational operators (e.g. <, >=) so this setting
	    // will add the minimum number of fields specified by the guide
	    h = m = s = '-';
	  }

	  // Check if we need to show hours
	  h = (h > 0 || gh > 0) ? h + ':' : '';

	  // If hours are showing, we may need to add a leading zero.
	  // Always show at least one digit of minutes.
	  m = (((h || gm >= 10) && m < 10) ? '0' + m : m) + ':';

	  // Check if leading zero is need for seconds
	  s = (s < 10) ? '0' + s : s;

	  return h + m + s;
	};

	// Attempt to block the ability to select text while dragging controls
	vjs.blockTextSelection = function(){
	  document.body.focus();
	  document.onselectstart = function () { return false; };
	};
	// Turn off text selection blocking
	vjs.unblockTextSelection = function(){ document.onselectstart = function () { return true; }; };

	/**
	 * Trim whitespace from the ends of a string.
	 * @param  {String} string String to trim
	 * @return {String}        Trimmed string
	 * @private
	 */
	vjs.trim = function(str){
	  return (str+'').replace(/^\s+|\s+$/g, '');
	};

	/**
	 * Should round off a number to a decimal place
	 * @param  {Number} num Number to round
	 * @param  {Number} dec Number of decimal places to round to
	 * @return {Number}     Rounded number
	 * @private
	 */
	vjs.round = function(num, dec) {
	  if (!dec) { dec = 0; }
	  return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	};

	/**
	 * Should create a fake TimeRange object
	 * Mimics an HTML5 time range instance, which has functions that
	 * return the start and end times for a range
	 * TimeRanges are returned by the buffered() method
	 * @param  {Number} start Start time in seconds
	 * @param  {Number} end   End time in seconds
	 * @return {Object}       Fake TimeRange object
	 * @private
	 */
	vjs.createTimeRange = function(start, end){
	  return {
	    length: 1,
	    start: function() { return start; },
	    end: function() { return end; }
	  };
	};

	/**
	 * Add to local storage (may removable)
	 * @private
	 */
	vjs.setLocalStorage = function(key, value){
	  try {
	    // IE was throwing errors referencing the var anywhere without this
	    var localStorage = window.localStorage || false;
	    if (!localStorage) { return; }
	    localStorage[key] = value;
	  } catch(e) {
	    if (e.code == 22 || e.code == 1014) { // Webkit == 22 / Firefox == 1014
	      vjs.log('LocalStorage Full (VideoJS)', e);
	    } else {
	      if (e.code == 18) {
	        vjs.log('LocalStorage not allowed (VideoJS)', e);
	      } else {
	        vjs.log('LocalStorage Error (VideoJS)', e);
	      }
	    }
	  }
	};

	/**
	 * Get absolute version of relative URL. Used to tell flash correct URL.
	 * http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
	 * @param  {String} url URL to make absolute
	 * @return {String}     Absolute URL
	 * @private
	 */
	vjs.getAbsoluteURL = function(url){

	  // Check if absolute URL
	  if (!url.match(/^https?:\/\//)) {
	    // Convert to absolute URL. Flash hosted off-site needs an absolute URL.
	    url = vjs.createEl('div', {
	      innerHTML: '<a href="'+url+'">x</a>'
	    }).firstChild.href;
	  }

	  return url;
	};


	/**
	 * Resolve and parse the elements of a URL
	 * @param  {String} url The url to parse
	 * @return {Object}     An object of url details
	 */
	vjs.parseUrl = function(url) {
	  var div, a, addToBody, props, details;

	  props = ['protocol', 'hostname', 'port', 'pathname', 'search', 'hash', 'host'];

	  // add the url to an anchor and let the browser parse the URL
	  a = vjs.createEl('a', { href: url });

	  // IE8 (and 9?) Fix
	  // ie8 doesn't parse the URL correctly until the anchor is actually
	  // added to the body, and an innerHTML is needed to trigger the parsing
	  addToBody = (a.host === '' && a.protocol !== 'file:');
	  if (addToBody) {
	    div = vjs.createEl('div');
	    div.innerHTML = '<a href="'+url+'"></a>';
	    a = div.firstChild;
	    // prevent the div from affecting layout
	    div.setAttribute('style', 'display:none; position:absolute;');
	    document.body.appendChild(div);
	  }

	  // Copy the specific URL properties to a new object
	  // This is also needed for IE8 because the anchor loses its
	  // properties when it's removed from the dom
	  details = {};
	  for (var i = 0; i < props.length; i++) {
	    details[props[i]] = a[props[i]];
	  }

	  // IE9 adds the port to the host property unlike everyone else. If
	  // a port identifier is added for standard ports, strip it.
	  if (details.protocol === 'http:') {
	    details.host = details.host.replace(/:80$/, '');
	  }
	  if (details.protocol === 'https:') {
	    details.host = details.host.replace(/:443$/, '');
	  }

	  if (addToBody) {
	    document.body.removeChild(div);
	  }

	  return details;
	};

	/**
	 * Log messages to the console and history based on the type of message
	 *
	 * @param  {String} type The type of message, or `null` for `log`
	 * @param  {[type]} args The args to be passed to the log
	 * @private
	 */
	function _logType(type, args){
	  var argsArray, noop, console;

	  // convert args to an array to get array functions
	  argsArray = Array.prototype.slice.call(args);
	  // if there's no console then don't try to output messages
	  // they will still be stored in vjs.log.history
	  // Was setting these once outside of this function, but containing them
	  // in the function makes it easier to test cases where console doesn't exist
	  noop = function(){};
	  console = window['console'] || {
	    'log': noop,
	    'warn': noop,
	    'error': noop
	  };

	  if (type) {
	    // add the type to the front of the message
	    argsArray.unshift(type.toUpperCase()+':');
	  } else {
	    // default to log with no prefix
	    type = 'log';
	  }

	  // add to history
	  vjs.log.history.push(argsArray);

	  // add console prefix after adding to history
	  argsArray.unshift('VIDEOJS:');

	  // call appropriate log function
	  if (console[type].apply) {
	    console[type].apply(console, argsArray);
	  } else {
	    // ie8 doesn't allow error.apply, but it will just join() the array anyway
	    console[type](argsArray.join(' '));
	  }
	}

	/**
	 * Log plain debug messages
	 */
	vjs.log = function(){
	  _logType(null, arguments);
	};

	/**
	 * Keep a history of log messages
	 * @type {Array}
	 */
	vjs.log.history = [];

	/**
	 * Log error messages
	 */
	vjs.log.error = function(){
	  _logType('error', arguments);
	};

	/**
	 * Log warning messages
	 */
	vjs.log.warn = function(){
	  _logType('warn', arguments);
	};

	// Offset Left
	// getBoundingClientRect technique from John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
	vjs.findPosition = function(el) {
	  var box, docEl, body, clientLeft, scrollLeft, left, clientTop, scrollTop, top;

	  if (el.getBoundingClientRect && el.parentNode) {
	    box = el.getBoundingClientRect();
	  }

	  if (!box) {
	    return {
	      left: 0,
	      top: 0
	    };
	  }

	  docEl = document.documentElement;
	  body = document.body;

	  clientLeft = docEl.clientLeft || body.clientLeft || 0;
	  scrollLeft = window.pageXOffset || body.scrollLeft;
	  left = box.left + scrollLeft - clientLeft;

	  clientTop = docEl.clientTop || body.clientTop || 0;
	  scrollTop = window.pageYOffset || body.scrollTop;
	  top = box.top + scrollTop - clientTop;

	  // Android sometimes returns slightly off decimal values, so need to round
	  return {
	    left: vjs.round(left),
	    top: vjs.round(top)
	  };
	};

	/**
	 * Array functions container
	 * @type {Object}
	 * @private
	 */
	vjs.arr = {};

	/*
	 * Loops through an array and runs a function for each item inside it.
	 * @param  {Array}    array       The array
	 * @param  {Function} callback    The function to be run for each item
	 * @param  {*}        thisArg     The `this` binding of callback
	 * @returns {Array}               The array
	 * @private
	 */
	vjs.arr.forEach = function(array, callback, thisArg) {
	  if (vjs.obj.isArray(array) && callback instanceof Function) {
	    for (var i = 0, len = array.length; i < len; ++i) {
	      callback.call(thisArg || vjs, array[i], i, array);
	    }
	  }

	  return array;
	};
	/**
	 * Simple http request for retrieving external files (e.g. text tracks)
	 *
	 * ##### Example
	 *
	 *     // using url string
	 *     videojs.xhr('http://example.com/myfile.vtt', function(error, response, responseBody){});
	 *
	 *     // or options block
	 *     videojs.xhr({
	 *       uri: 'http://example.com/myfile.vtt',
	 *       method: 'GET',
	 *       responseType: 'text'
	 *     }, function(error, response, responseBody){
	 *       if (error) {
	 *         // log the error
	 *       } else {
	 *         // successful, do something with the response
	 *       }
	 *     });
	 *
	 *
	 * API is modeled after the Raynos/xhr, which we hope to use after
	 * getting browserify implemented.
	 * https://github.com/Raynos/xhr/blob/master/index.js
	 *
	 * @param  {Object|String}  options   Options block or URL string
	 * @param  {Function}       callback  The callback function
	 * @returns {Object}                  The request
	 */
	vjs.xhr = function(options, callback){
	  var XHR, request, urlInfo, winLoc, fileUrl, crossOrigin, abortTimeout, successHandler, errorHandler;

	  // If options is a string it's the url
	  if (typeof options === 'string') {
	    options = {
	      uri: options
	    };
	  }

	  // Merge with default options
	  videojs.util.mergeOptions({
	    method: 'GET',
	    timeout: 45 * 1000
	  }, options);

	  callback = callback || function(){};

	  successHandler = function(){
	    window.clearTimeout(abortTimeout);
	    callback(null, request, request.response || request.responseText);
	  };

	  errorHandler = function(err){
	    window.clearTimeout(abortTimeout);

	    if (!err || typeof err === 'string') {
	      err = new Error(err);
	    }

	    callback(err, request);
	  };

	  XHR = window.XMLHttpRequest;

	  if (typeof XHR === 'undefined') {
	    // Shim XMLHttpRequest for older IEs
	    XHR = function () {
	      try { return new window.ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch (e) {}
	      try { return new window.ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch (f) {}
	      try { return new window.ActiveXObject('Msxml2.XMLHTTP'); } catch (g) {}
	      throw new Error('This browser does not support XMLHttpRequest.');
	    };
	  }

	  request = new XHR();
	  // Store a reference to the url on the request instance
	  request.uri = options.uri;

	  urlInfo = vjs.parseUrl(options.uri);
	  winLoc = window.location;
	  // Check if url is for another domain/origin
	  // IE8 doesn't know location.origin, so we won't rely on it here
	  crossOrigin = (urlInfo.protocol + urlInfo.host) !== (winLoc.protocol + winLoc.host);

	  // XDomainRequest -- Use for IE if XMLHTTPRequest2 isn't available
	  // 'withCredentials' is only available in XMLHTTPRequest2
	  // Also XDomainRequest has a lot of gotchas, so only use if cross domain
	  if (crossOrigin && window.XDomainRequest && !('withCredentials' in request)) {
	    request = new window.XDomainRequest();
	    request.onload = successHandler;
	    request.onerror = errorHandler;
	    // These blank handlers need to be set to fix ie9
	    // http://cypressnorth.com/programming/internet-explorer-aborting-ajax-requests-fixed/
	    request.onprogress = function(){};
	    request.ontimeout = function(){};

	  // XMLHTTPRequest
	  } else {
	    fileUrl = (urlInfo.protocol == 'file:' || winLoc.protocol == 'file:');

	    request.onreadystatechange = function() {
	      if (request.readyState === 4) {
	        if (request.timedout) {
	          return errorHandler('timeout');
	        }

	        if (request.status === 200 || fileUrl && request.status === 0) {
	          successHandler();
	        } else {
	          errorHandler();
	        }
	      }
	    };

	    if (options.timeout) {
	      abortTimeout = window.setTimeout(function() {
	        if (request.readyState !== 4) {
	          request.timedout = true;
	          request.abort();
	        }
	      }, options.timeout);
	    }
	  }

	  // open the connection
	  try {
	    // Third arg is async, or ignored by XDomainRequest
	    request.open(options.method || 'GET', options.uri, true);
	  } catch(err) {
	    return errorHandler(err);
	  }

	  // withCredentials only supported by XMLHttpRequest2
	  if(options.withCredentials) {
	    request.withCredentials = true;
	  }

	  if (options.responseType) {
	    request.responseType = options.responseType;
	  }

	  // send the request
	  try {
	    request.send();
	  } catch(err) {
	    return errorHandler(err);
	  }

	  return request;
	};
	/**
	 * Utility functions namespace
	 * @namespace
	 * @type {Object}
	 */
	vjs.util = {};

	/**
	 * Merge two options objects, recursively merging any plain object properties as
	 * well.  Previously `deepMerge`
	 *
	 * @param  {Object} obj1 Object to override values in
	 * @param  {Object} obj2 Overriding object
	 * @return {Object}      New object -- obj1 and obj2 will be untouched
	 */
	vjs.util.mergeOptions = function(obj1, obj2){
	  var key, val1, val2;

	  // make a copy of obj1 so we're not overwriting original values.
	  // like prototype.options_ and all sub options objects
	  obj1 = vjs.obj.copy(obj1);

	  for (key in obj2){
	    if (obj2.hasOwnProperty(key)) {
	      val1 = obj1[key];
	      val2 = obj2[key];

	      // Check if both properties are pure objects and do a deep merge if so
	      if (vjs.obj.isPlain(val1) && vjs.obj.isPlain(val2)) {
	        obj1[key] = vjs.util.mergeOptions(val1, val2);
	      } else {
	        obj1[key] = obj2[key];
	      }
	    }
	  }
	  return obj1;
	};vjs.EventEmitter = function() {
	};

	vjs.EventEmitter.prototype.allowedEvents_ = {
	};

	vjs.EventEmitter.prototype.on = function(type, fn) {
	  // Remove the addEventListener alias before calling vjs.on
	  // so we don't get into an infinite type loop
	  var ael = this.addEventListener;
	  this.addEventListener = Function.prototype;
	  vjs.on(this, type, fn);
	  this.addEventListener = ael;
	};
	vjs.EventEmitter.prototype.addEventListener = vjs.EventEmitter.prototype.on;

	vjs.EventEmitter.prototype.off = function(type, fn) {
	  vjs.off(this, type, fn);
	};
	vjs.EventEmitter.prototype.removeEventListener = vjs.EventEmitter.prototype.off;

	vjs.EventEmitter.prototype.one = function(type, fn) {
	  vjs.one(this, type, fn);
	};

	vjs.EventEmitter.prototype.trigger = function(event) {
	  var type = event.type || event;

	  if (typeof event === 'string') {
	    event = {
	      type: type
	    };
	  }
	  event = vjs.fixEvent(event);

	  if (this.allowedEvents_[type] && this['on' + type]) {
	    this['on' + type](event);
	  }

	  vjs.trigger(this, event);
	};
	// The standard DOM EventTarget.dispatchEvent() is aliased to trigger()
	vjs.EventEmitter.prototype.dispatchEvent = vjs.EventEmitter.prototype.trigger;
	/**
	 * @fileoverview Player Component - Base class for all UI objects
	 *
	 */

	/**
	 * Base UI Component class
	 *
	 * Components are embeddable UI objects that are represented by both a
	 * javascript object and an element in the DOM. They can be children of other
	 * components, and can have many children themselves.
	 *
	 *     // adding a button to the player
	 *     var button = player.addChild('button');
	 *     button.el(); // -> button element
	 *
	 *     <div class="video-js">
	 *       <div class="vjs-button">Button</div>
	 *     </div>
	 *
	 * Components are also event emitters.
	 *
	 *     button.on('click', function(){
	 *       console.log('Button Clicked!');
	 *     });
	 *
	 *     button.trigger('customevent');
	 *
	 * @param {Object} player  Main Player
	 * @param {Object=} options
	 * @class
	 * @constructor
	 * @extends vjs.CoreObject
	 */
	vjs.Component = vjs.CoreObject.extend({
	  /**
	   * the constructor function for the class
	   *
	   * @constructor
	   */
	  init: function(player, options, ready){
	    this.player_ = player;

	    // Make a copy of prototype.options_ to protect against overriding global defaults
	    this.options_ = vjs.obj.copy(this.options_);

	    // Updated options with supplied options
	    options = this.options(options);

	    // Get ID from options or options element if one is supplied
	    this.id_ = options['id'] || (options['el'] && options['el']['id']);

	    // If there was no ID from the options, generate one
	    if (!this.id_) {
	      // Don't require the player ID function in the case of mock players
	      this.id_ = ((player.id && player.id()) || 'no_player') + '_component_' + vjs.guid++;
	    }

	    this.name_ = options['name'] || null;

	    // Create element if one wasn't provided in options
	    this.el_ = options['el'] || this.createEl();

	    this.children_ = [];
	    this.childIndex_ = {};
	    this.childNameIndex_ = {};

	    // Add any child components in options
	    this.initChildren();

	    this.ready(ready);
	    // Don't want to trigger ready here or it will before init is actually
	    // finished for all children that run this constructor

	    if (options.reportTouchActivity !== false) {
	      this.enableTouchActivity();
	    }
	  }
	});

	/**
	 * Dispose of the component and all child components
	 */
	vjs.Component.prototype.dispose = function(){
	  this.trigger({ type: 'dispose', 'bubbles': false });

	  // Dispose all children.
	  if (this.children_) {
	    for (var i = this.children_.length - 1; i >= 0; i--) {
	      if (this.children_[i].dispose) {
	        this.children_[i].dispose();
	      }
	    }
	  }

	  // Delete child references
	  this.children_ = null;
	  this.childIndex_ = null;
	  this.childNameIndex_ = null;

	  // Remove all event listeners.
	  this.off();

	  // Remove element from DOM
	  if (this.el_.parentNode) {
	    this.el_.parentNode.removeChild(this.el_);
	  }

	  vjs.removeData(this.el_);
	  this.el_ = null;
	};

	/**
	 * Reference to main player instance
	 *
	 * @type {vjs.Player}
	 * @private
	 */
	vjs.Component.prototype.player_ = true;

	/**
	 * Return the component's player
	 *
	 * @return {vjs.Player}
	 */
	vjs.Component.prototype.player = function(){
	  return this.player_;
	};

	/**
	 * The component's options object
	 *
	 * @type {Object}
	 * @private
	 */
	vjs.Component.prototype.options_;

	/**
	 * Deep merge of options objects
	 *
	 * Whenever a property is an object on both options objects
	 * the two properties will be merged using vjs.obj.deepMerge.
	 *
	 * This is used for merging options for child components. We
	 * want it to be easy to override individual options on a child
	 * component without having to rewrite all the other default options.
	 *
	 *     Parent.prototype.options_ = {
	 *       children: {
	 *         'childOne': { 'foo': 'bar', 'asdf': 'fdsa' },
	 *         'childTwo': {},
	 *         'childThree': {}
	 *       }
	 *     }
	 *     newOptions = {
	 *       children: {
	 *         'childOne': { 'foo': 'baz', 'abc': '123' }
	 *         'childTwo': null,
	 *         'childFour': {}
	 *       }
	 *     }
	 *
	 *     this.options(newOptions);
	 *
	 * RESULT
	 *
	 *     {
	 *       children: {
	 *         'childOne': { 'foo': 'baz', 'asdf': 'fdsa', 'abc': '123' },
	 *         'childTwo': null, // Disabled. Won't be initialized.
	 *         'childThree': {},
	 *         'childFour': {}
	 *       }
	 *     }
	 *
	 * @param  {Object} obj Object of new option values
	 * @return {Object}     A NEW object of this.options_ and obj merged
	 */
	vjs.Component.prototype.options = function(obj){
	  if (obj === undefined) return this.options_;

	  return this.options_ = vjs.util.mergeOptions(this.options_, obj);
	};

	/**
	 * The DOM element for the component
	 *
	 * @type {Element}
	 * @private
	 */
	vjs.Component.prototype.el_;

	/**
	 * Create the component's DOM element
	 *
	 * @param  {String=} tagName  Element's node type. e.g. 'div'
	 * @param  {Object=} attributes An object of element attributes that should be set on the element
	 * @return {Element}
	 */
	vjs.Component.prototype.createEl = function(tagName, attributes){
	  return vjs.createEl(tagName, attributes);
	};

	vjs.Component.prototype.localize = function(string){
	  var lang = this.player_.language(),
	      languages = this.player_.languages();
	  if (languages && languages[lang] && languages[lang][string]) {
	    return languages[lang][string];
	  }
	  return string;
	};

	/**
	 * Get the component's DOM element
	 *
	 *     var domEl = myComponent.el();
	 *
	 * @return {Element}
	 */
	vjs.Component.prototype.el = function(){
	  return this.el_;
	};

	/**
	 * An optional element where, if defined, children will be inserted instead of
	 * directly in `el_`
	 *
	 * @type {Element}
	 * @private
	 */
	vjs.Component.prototype.contentEl_;

	/**
	 * Return the component's DOM element for embedding content.
	 * Will either be el_ or a new element defined in createEl.
	 *
	 * @return {Element}
	 */
	vjs.Component.prototype.contentEl = function(){
	  return this.contentEl_ || this.el_;
	};

	/**
	 * The ID for the component
	 *
	 * @type {String}
	 * @private
	 */
	vjs.Component.prototype.id_;

	/**
	 * Get the component's ID
	 *
	 *     var id = myComponent.id();
	 *
	 * @return {String}
	 */
	vjs.Component.prototype.id = function(){
	  return this.id_;
	};

	/**
	 * The name for the component. Often used to reference the component.
	 *
	 * @type {String}
	 * @private
	 */
	vjs.Component.prototype.name_;

	/**
	 * Get the component's name. The name is often used to reference the component.
	 *
	 *     var name = myComponent.name();
	 *
	 * @return {String}
	 */
	vjs.Component.prototype.name = function(){
	  return this.name_;
	};

	/**
	 * Array of child components
	 *
	 * @type {Array}
	 * @private
	 */
	vjs.Component.prototype.children_;

	/**
	 * Get an array of all child components
	 *
	 *     var kids = myComponent.children();
	 *
	 * @return {Array} The children
	 */
	vjs.Component.prototype.children = function(){
	  return this.children_;
	};

	/**
	 * Object of child components by ID
	 *
	 * @type {Object}
	 * @private
	 */
	vjs.Component.prototype.childIndex_;

	/**
	 * Returns a child component with the provided ID
	 *
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.getChildById = function(id){
	  return this.childIndex_[id];
	};

	/**
	 * Object of child components by name
	 *
	 * @type {Object}
	 * @private
	 */
	vjs.Component.prototype.childNameIndex_;

	/**
	 * Returns a child component with the provided name
	 *
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.getChild = function(name){
	  return this.childNameIndex_[name];
	};

	/**
	 * Adds a child component inside this component
	 *
	 *     myComponent.el();
	 *     // -> <div class='my-component'></div>
	 *     myComonent.children();
	 *     // [empty array]
	 *
	 *     var myButton = myComponent.addChild('MyButton');
	 *     // -> <div class='my-component'><div class="my-button">myButton<div></div>
	 *     // -> myButton === myComonent.children()[0];
	 *
	 * Pass in options for child constructors and options for children of the child
	 *
	 *     var myButton = myComponent.addChild('MyButton', {
	 *       text: 'Press Me',
	 *       children: {
	 *         buttonChildExample: {
	 *           buttonChildOption: true
	 *         }
	 *       }
	 *     });
	 *
	 * @param {String|vjs.Component} child The class name or instance of a child to add
	 * @param {Object=} options Options, including options to be passed to children of the child.
	 * @return {vjs.Component} The child component (created by this process if a string was used)
	 * @suppress {accessControls|checkRegExp|checkTypes|checkVars|const|constantProperty|deprecated|duplicate|es5Strict|fileoverviewTags|globalThis|invalidCasts|missingProperties|nonStandardJsDocs|strictModuleDepCheck|undefinedNames|undefinedVars|unknownDefines|uselessCode|visibility}
	 */
	vjs.Component.prototype.addChild = function(child, options){
	  var component, componentClass, componentName;

	  // If child is a string, create new component with options
	  if (typeof child === 'string') {
	    componentName = child;

	    // Make sure options is at least an empty object to protect against errors
	    options = options || {};

	    // If no componentClass in options, assume componentClass is the name lowercased
	    // (e.g. playButton)
	    componentClass = options['componentClass'] || vjs.capitalize(componentName);

	    // Set name through options
	    options['name'] = componentName;

	    // Create a new object & element for this controls set
	    // If there's no .player_, this is a player
	    // Closure Compiler throws an 'incomplete alias' warning if we use the vjs variable directly.
	    // Every class should be exported, so this should never be a problem here.
	    component = new window['videojs'][componentClass](this.player_ || this, options);

	  // child is a component instance
	  } else {
	    component = child;
	  }

	  this.children_.push(component);

	  if (typeof component.id === 'function') {
	    this.childIndex_[component.id()] = component;
	  }

	  // If a name wasn't used to create the component, check if we can use the
	  // name function of the component
	  componentName = componentName || (component.name && component.name());

	  if (componentName) {
	    this.childNameIndex_[componentName] = component;
	  }

	  // Add the UI object's element to the container div (box)
	  // Having an element is not required
	  if (typeof component['el'] === 'function' && component['el']()) {
	    this.contentEl().appendChild(component['el']());
	  }

	  // Return so it can stored on parent object if desired.
	  return component;
	};

	/**
	 * Remove a child component from this component's list of children, and the
	 * child component's element from this component's element
	 *
	 * @param  {vjs.Component} component Component to remove
	 */
	vjs.Component.prototype.removeChild = function(component){
	  if (typeof component === 'string') {
	    component = this.getChild(component);
	  }

	  if (!component || !this.children_) return;

	  var childFound = false;
	  for (var i = this.children_.length - 1; i >= 0; i--) {
	    if (this.children_[i] === component) {
	      childFound = true;
	      this.children_.splice(i,1);
	      break;
	    }
	  }

	  if (!childFound) return;

	  this.childIndex_[component.id()] = null;
	  this.childNameIndex_[component.name()] = null;

	  var compEl = component.el();
	  if (compEl && compEl.parentNode === this.contentEl()) {
	    this.contentEl().removeChild(component.el());
	  }
	};

	/**
	 * Add and initialize default child components from options
	 *
	 *     // when an instance of MyComponent is created, all children in options
	 *     // will be added to the instance by their name strings and options
	 *     MyComponent.prototype.options_.children = {
	 *       myChildComponent: {
	 *         myChildOption: true
	 *       }
	 *     }
	 *
	 *     // Or when creating the component
	 *     var myComp = new MyComponent(player, {
	 *       children: {
	 *         myChildComponent: {
	 *           myChildOption: true
	 *         }
	 *       }
	 *     });
	 *
	 * The children option can also be an Array of child names or
	 * child options objects (that also include a 'name' key).
	 *
	 *     var myComp = new MyComponent(player, {
	 *       children: [
	 *         'button',
	 *         {
	 *           name: 'button',
	 *           someOtherOption: true
	 *         }
	 *       ]
	 *     });
	 *
	 */
	vjs.Component.prototype.initChildren = function(){
	  var parent, parentOptions, children, child, name, opts, handleAdd;

	  parent = this;
	  parentOptions = parent.options();
	  children = parentOptions['children'];

	  if (children) {
	    handleAdd = function(name, opts){
	      // Allow options for children to be set at the parent options
	      // e.g. videojs(id, { controlBar: false });
	      // instead of videojs(id, { children: { controlBar: false });
	      if (parentOptions[name] !== undefined) {
	        opts = parentOptions[name];
	      }

	      // Allow for disabling default components
	      // e.g. vjs.options['children']['posterImage'] = false
	      if (opts === false) return;

	      // Create and add the child component.
	      // Add a direct reference to the child by name on the parent instance.
	      // If two of the same component are used, different names should be supplied
	      // for each
	      parent[name] = parent.addChild(name, opts);
	    };

	    // Allow for an array of children details to passed in the options
	    if (vjs.obj.isArray(children)) {
	      for (var i = 0; i < children.length; i++) {
	        child = children[i];

	        if (typeof child == 'string') {
	          // ['myComponent']
	          name = child;
	          opts = {};
	        } else {
	          // [{ name: 'myComponent', otherOption: true }]
	          name = child.name;
	          opts = child;
	        }

	        handleAdd(name, opts);
	      }
	    } else {
	      vjs.obj.each(children, handleAdd);
	    }
	  }
	};

	/**
	 * Allows sub components to stack CSS class names
	 *
	 * @return {String} The constructed class name
	 */
	vjs.Component.prototype.buildCSSClass = function(){
	    // Child classes can include a function that does:
	    // return 'CLASS NAME' + this._super();
	    return '';
	};

	/* Events
	============================================================================= */

	/**
	 * Add an event listener to this component's element
	 *
	 *     var myFunc = function(){
	 *       var myComponent = this;
	 *       // Do something when the event is fired
	 *     };
	 *
	 *     myComponent.on('eventType', myFunc);
	 *
	 * The context of myFunc will be myComponent unless previously bound.
	 *
	 * Alternatively, you can add a listener to another element or component.
	 *
	 *     myComponent.on(otherElement, 'eventName', myFunc);
	 *     myComponent.on(otherComponent, 'eventName', myFunc);
	 *
	 * The benefit of using this over `vjs.on(otherElement, 'eventName', myFunc)`
	 * and `otherComponent.on('eventName', myFunc)` is that this way the listeners
	 * will be automatically cleaned up when either component is disposed.
	 * It will also bind myComponent as the context of myFunc.
	 *
	 * **NOTE**: When using this on elements in the page other than window
	 * and document (both permanent), if you remove the element from the DOM
	 * you need to call `vjs.trigger(el, 'dispose')` on it to clean up
	 * references to it and allow the browser to garbage collect it.
	 *
	 * @param  {String|vjs.Component} first   The event type or other component
	 * @param  {Function|String}      second  The event handler or event type
	 * @param  {Function}             third   The event handler
	 * @return {vjs.Component}        self
	 */
	vjs.Component.prototype.on = function(first, second, third){
	  var target, type, fn, removeOnDispose, cleanRemover, thisComponent;

	  if (typeof first === 'string' || vjs.obj.isArray(first)) {
	    vjs.on(this.el_, first, vjs.bind(this, second));

	  // Targeting another component or element
	  } else {
	    target = first;
	    type = second;
	    fn = vjs.bind(this, third);
	    thisComponent = this;

	    // When this component is disposed, remove the listener from the other component
	    removeOnDispose = function(){
	      thisComponent.off(target, type, fn);
	    };
	    // Use the same function ID so we can remove it later it using the ID
	    // of the original listener
	    removeOnDispose.guid = fn.guid;
	    this.on('dispose', removeOnDispose);

	    // If the other component is disposed first we need to clean the reference
	    // to the other component in this component's removeOnDispose listener
	    // Otherwise we create a memory leak.
	    cleanRemover = function(){
	      thisComponent.off('dispose', removeOnDispose);
	    };
	    // Add the same function ID so we can easily remove it later
	    cleanRemover.guid = fn.guid;

	    // Check if this is a DOM node
	    if (first.nodeName) {
	      // Add the listener to the other element
	      vjs.on(target, type, fn);
	      vjs.on(target, 'dispose', cleanRemover);

	    // Should be a component
	    // Not using `instanceof vjs.Component` because it makes mock players difficult
	    } else if (typeof first.on === 'function') {
	      // Add the listener to the other component
	      target.on(type, fn);
	      target.on('dispose', cleanRemover);
	    }
	  }

	  return this;
	};

	/**
	 * Remove an event listener from this component's element
	 *
	 *     myComponent.off('eventType', myFunc);
	 *
	 * If myFunc is excluded, ALL listeners for the event type will be removed.
	 * If eventType is excluded, ALL listeners will be removed from the component.
	 *
	 * Alternatively you can use `off` to remove listeners that were added to other
	 * elements or components using `myComponent.on(otherComponent...`.
	 * In this case both the event type and listener function are REQUIRED.
	 *
	 *     myComponent.off(otherElement, 'eventType', myFunc);
	 *     myComponent.off(otherComponent, 'eventType', myFunc);
	 *
	 * @param  {String=|vjs.Component}  first  The event type or other component
	 * @param  {Function=|String}       second The listener function or event type
	 * @param  {Function=}              third  The listener for other component
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.off = function(first, second, third){
	  var target, otherComponent, type, fn, otherEl;

	  if (!first || typeof first === 'string' || vjs.obj.isArray(first)) {
	    vjs.off(this.el_, first, second);
	  } else {
	    target = first;
	    type = second;
	    // Ensure there's at least a guid, even if the function hasn't been used
	    fn = vjs.bind(this, third);

	    // Remove the dispose listener on this component,
	    // which was given the same guid as the event listener
	    this.off('dispose', fn);

	    if (first.nodeName) {
	      // Remove the listener
	      vjs.off(target, type, fn);
	      // Remove the listener for cleaning the dispose listener
	      vjs.off(target, 'dispose', fn);
	    } else {
	      target.off(type, fn);
	      target.off('dispose', fn);
	    }
	  }

	  return this;
	};

	/**
	 * Add an event listener to be triggered only once and then removed
	 *
	 *     myComponent.one('eventName', myFunc);
	 *
	 * Alternatively you can add a listener to another element or component
	 * that will be triggered only once.
	 *
	 *     myComponent.one(otherElement, 'eventName', myFunc);
	 *     myComponent.one(otherComponent, 'eventName', myFunc);
	 *
	 * @param  {String|vjs.Component}  first   The event type or other component
	 * @param  {Function|String}       second  The listener function or event type
	 * @param  {Function=}             third   The listener function for other component
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.one = function(first, second, third) {
	  var target, type, fn, thisComponent, newFunc;

	  if (typeof first === 'string' || vjs.obj.isArray(first)) {
	    vjs.one(this.el_, first, vjs.bind(this, second));
	  } else {
	    target = first;
	    type = second;
	    fn = vjs.bind(this, third);
	    thisComponent = this;

	    newFunc = function(){
	      thisComponent.off(target, type, newFunc);
	      fn.apply(this, arguments);
	    };
	    // Keep the same function ID so we can remove it later
	    newFunc.guid = fn.guid;

	    this.on(target, type, newFunc);
	  }

	  return this;
	};

	/**
	 * Trigger an event on an element
	 *
	 *     myComponent.trigger('eventName');
	 *     myComponent.trigger({'type':'eventName'});
	 *
	 * @param  {Event|Object|String} event  A string (the type) or an event object with a type attribute
	 * @return {vjs.Component}       self
	 */
	vjs.Component.prototype.trigger = function(event){
	  vjs.trigger(this.el_, event);
	  return this;
	};

	/* Ready
	================================================================================ */
	/**
	 * Is the component loaded
	 * This can mean different things depending on the component.
	 *
	 * @private
	 * @type {Boolean}
	 */
	vjs.Component.prototype.isReady_;

	/**
	 * Trigger ready as soon as initialization is finished
	 *
	 * Allows for delaying ready. Override on a sub class prototype.
	 * If you set this.isReadyOnInitFinish_ it will affect all components.
	 * Specially used when waiting for the Flash player to asynchronously load.
	 *
	 * @type {Boolean}
	 * @private
	 */
	vjs.Component.prototype.isReadyOnInitFinish_ = true;

	/**
	 * List of ready listeners
	 *
	 * @type {Array}
	 * @private
	 */
	vjs.Component.prototype.readyQueue_;

	/**
	 * Bind a listener to the component's ready state
	 *
	 * Different from event listeners in that if the ready event has already happened
	 * it will trigger the function immediately.
	 *
	 * @param  {Function} fn Ready listener
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.ready = function(fn){
	  if (fn) {
	    if (this.isReady_) {
	      fn.call(this);
	    } else {
	      if (this.readyQueue_ === undefined) {
	        this.readyQueue_ = [];
	      }
	      this.readyQueue_.push(fn);
	    }
	  }
	  return this;
	};

	/**
	 * Trigger the ready listeners
	 *
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.triggerReady = function(){
	  this.isReady_ = true;

	  var readyQueue = this.readyQueue_;

	  if (readyQueue && readyQueue.length > 0) {

	    for (var i = 0, j = readyQueue.length; i < j; i++) {
	      readyQueue[i].call(this);
	    }

	    // Reset Ready Queue
	    this.readyQueue_ = [];

	    // Allow for using event listeners also, in case you want to do something everytime a source is ready.
	    this.trigger('ready');
	  }
	};

	/* Display
	============================================================================= */

	/**
	 * Check if a component's element has a CSS class name
	 *
	 * @param {String} classToCheck Classname to check
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.hasClass = function(classToCheck){
	  return vjs.hasClass(this.el_, classToCheck);
	};

	/**
	 * Add a CSS class name to the component's element
	 *
	 * @param {String} classToAdd Classname to add
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.addClass = function(classToAdd){
	  vjs.addClass(this.el_, classToAdd);
	  return this;
	};

	/**
	 * Remove a CSS class name from the component's element
	 *
	 * @param {String} classToRemove Classname to remove
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.removeClass = function(classToRemove){
	  vjs.removeClass(this.el_, classToRemove);
	  return this;
	};

	/**
	 * Show the component element if hidden
	 *
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.show = function(){
	  this.removeClass('vjs-hidden');
	  return this;
	};

	/**
	 * Hide the component element if currently showing
	 *
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.hide = function(){
	  this.addClass('vjs-hidden');
	  return this;
	};

	/**
	 * Lock an item in its visible state
	 * To be used with fadeIn/fadeOut.
	 *
	 * @return {vjs.Component}
	 * @private
	 */
	vjs.Component.prototype.lockShowing = function(){
	  this.addClass('vjs-lock-showing');
	  return this;
	};

	/**
	 * Unlock an item to be hidden
	 * To be used with fadeIn/fadeOut.
	 *
	 * @return {vjs.Component}
	 * @private
	 */
	vjs.Component.prototype.unlockShowing = function(){
	  this.removeClass('vjs-lock-showing');
	  return this;
	};

	/**
	 * Disable component by making it unshowable
	 *
	 * Currently private because we're moving towards more css-based states.
	 * @private
	 */
	vjs.Component.prototype.disable = function(){
	  this.hide();
	  this.show = function(){};
	};

	/**
	 * Set or get the width of the component (CSS values)
	 *
	 * Setting the video tag dimension values only works with values in pixels.
	 * Percent values will not work.
	 * Some percents can be used, but width()/height() will return the number + %,
	 * not the actual computed width/height.
	 *
	 * @param  {Number|String=} num   Optional width number
	 * @param  {Boolean} skipListeners Skip the 'resize' event trigger
	 * @return {vjs.Component} This component, when setting the width
	 * @return {Number|String} The width, when getting
	 */
	vjs.Component.prototype.width = function(num, skipListeners){
	  return this.dimension('width', num, skipListeners);
	};

	/**
	 * Get or set the height of the component (CSS values)
	 *
	 * Setting the video tag dimension values only works with values in pixels.
	 * Percent values will not work.
	 * Some percents can be used, but width()/height() will return the number + %,
	 * not the actual computed width/height.
	 *
	 * @param  {Number|String=} num     New component height
	 * @param  {Boolean=} skipListeners Skip the resize event trigger
	 * @return {vjs.Component} This component, when setting the height
	 * @return {Number|String} The height, when getting
	 */
	vjs.Component.prototype.height = function(num, skipListeners){
	  return this.dimension('height', num, skipListeners);
	};

	/**
	 * Set both width and height at the same time
	 *
	 * @param  {Number|String} width
	 * @param  {Number|String} height
	 * @return {vjs.Component} The component
	 */
	vjs.Component.prototype.dimensions = function(width, height){
	  // Skip resize listeners on width for optimization
	  return this.width(width, true).height(height);
	};

	/**
	 * Get or set width or height
	 *
	 * This is the shared code for the width() and height() methods.
	 * All for an integer, integer + 'px' or integer + '%';
	 *
	 * Known issue: Hidden elements officially have a width of 0. We're defaulting
	 * to the style.width value and falling back to computedStyle which has the
	 * hidden element issue. Info, but probably not an efficient fix:
	 * http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/
	 *
	 * @param  {String} widthOrHeight  'width' or 'height'
	 * @param  {Number|String=} num     New dimension
	 * @param  {Boolean=} skipListeners Skip resize event trigger
	 * @return {vjs.Component} The component if a dimension was set
	 * @return {Number|String} The dimension if nothing was set
	 * @private
	 */
	vjs.Component.prototype.dimension = function(widthOrHeight, num, skipListeners){
	  if (num !== undefined) {
	    if (num === null || vjs.isNaN(num)) {
	      num = 0;
	    }

	    // Check if using css width/height (% or px) and adjust
	    if ((''+num).indexOf('%') !== -1 || (''+num).indexOf('px') !== -1) {
	      this.el_.style[widthOrHeight] = num;
	    } else if (num === 'auto') {
	      this.el_.style[widthOrHeight] = '';
	    } else {
	      this.el_.style[widthOrHeight] = num+'px';
	    }

	    // skipListeners allows us to avoid triggering the resize event when setting both width and height
	    if (!skipListeners) { this.trigger('resize'); }

	    // Return component
	    return this;
	  }

	  // Not setting a value, so getting it
	  // Make sure element exists
	  if (!this.el_) return 0;

	  // Get dimension value from style
	  var val = this.el_.style[widthOrHeight];
	  var pxIndex = val.indexOf('px');
	  if (pxIndex !== -1) {
	    // Return the pixel value with no 'px'
	    return parseInt(val.slice(0,pxIndex), 10);

	  // No px so using % or no style was set, so falling back to offsetWidth/height
	  // If component has display:none, offset will return 0
	  // TODO: handle display:none and no dimension style using px
	  } else {

	    return parseInt(this.el_['offset'+vjs.capitalize(widthOrHeight)], 10);

	    // ComputedStyle version.
	    // Only difference is if the element is hidden it will return
	    // the percent value (e.g. '100%'')
	    // instead of zero like offsetWidth returns.
	    // var val = vjs.getComputedStyleValue(this.el_, widthOrHeight);
	    // var pxIndex = val.indexOf('px');

	    // if (pxIndex !== -1) {
	    //   return val.slice(0, pxIndex);
	    // } else {
	    //   return val;
	    // }
	  }
	};

	/**
	 * Fired when the width and/or height of the component changes
	 * @event resize
	 */
	vjs.Component.prototype.onResize;

	/**
	 * Emit 'tap' events when touch events are supported
	 *
	 * This is used to support toggling the controls through a tap on the video.
	 *
	 * We're requiring them to be enabled because otherwise every component would
	 * have this extra overhead unnecessarily, on mobile devices where extra
	 * overhead is especially bad.
	 * @private
	 */
	vjs.Component.prototype.emitTapEvents = function(){
	  var touchStart, firstTouch, touchTime, couldBeTap, noTap,
	      xdiff, ydiff, touchDistance, tapMovementThreshold, touchTimeThreshold;

	  // Track the start time so we can determine how long the touch lasted
	  touchStart = 0;
	  firstTouch = null;

	  // Maximum movement allowed during a touch event to still be considered a tap
	  // Other popular libs use anywhere from 2 (hammer.js) to 15, so 10 seems like a nice, round number.
	  tapMovementThreshold = 10;

	  // The maximum length a touch can be while still being considered a tap
	  touchTimeThreshold = 200;

	  this.on('touchstart', function(event) {
	    // If more than one finger, don't consider treating this as a click
	    if (event.touches.length === 1) {
	      firstTouch = vjs.obj.copy(event.touches[0]);
	      // Record start time so we can detect a tap vs. "touch and hold"
	      touchStart = new Date().getTime();
	      // Reset couldBeTap tracking
	      couldBeTap = true;
	    }
	  });

	  this.on('touchmove', function(event) {
	    // If more than one finger, don't consider treating this as a click
	    if (event.touches.length > 1) {
	      couldBeTap = false;
	    } else if (firstTouch) {
	      // Some devices will throw touchmoves for all but the slightest of taps.
	      // So, if we moved only a small distance, this could still be a tap
	      xdiff = event.touches[0].pageX - firstTouch.pageX;
	      ydiff = event.touches[0].pageY - firstTouch.pageY;
	      touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
	      if (touchDistance > tapMovementThreshold) {
	        couldBeTap = false;
	      }
	    }
	  });

	  noTap = function(){
	    couldBeTap = false;
	  };
	  // TODO: Listen to the original target. http://youtu.be/DujfpXOKUp8?t=13m8s
	  this.on('touchleave', noTap);
	  this.on('touchcancel', noTap);

	  // When the touch ends, measure how long it took and trigger the appropriate
	  // event
	  this.on('touchend', function(event) {
	    firstTouch = null;
	    // Proceed only if the touchmove/leave/cancel event didn't happen
	    if (couldBeTap === true) {
	      // Measure how long the touch lasted
	      touchTime = new Date().getTime() - touchStart;
	      // Make sure the touch was less than the threshold to be considered a tap
	      if (touchTime < touchTimeThreshold) {
	        event.preventDefault(); // Don't let browser turn this into a click
	        this.trigger('tap');
	        // It may be good to copy the touchend event object and change the
	        // type to tap, if the other event properties aren't exact after
	        // vjs.fixEvent runs (e.g. event.target)
	      }
	    }
	  });
	};

	/**
	 * Report user touch activity when touch events occur
	 *
	 * User activity is used to determine when controls should show/hide. It's
	 * relatively simple when it comes to mouse events, because any mouse event
	 * should show the controls. So we capture mouse events that bubble up to the
	 * player and report activity when that happens.
	 *
	 * With touch events it isn't as easy. We can't rely on touch events at the
	 * player level, because a tap (touchstart + touchend) on the video itself on
	 * mobile devices is meant to turn controls off (and on). User activity is
	 * checked asynchronously, so what could happen is a tap event on the video
	 * turns the controls off, then the touchend event bubbles up to the player,
	 * which if it reported user activity, would turn the controls right back on.
	 * (We also don't want to completely block touch events from bubbling up)
	 *
	 * Also a touchmove, touch+hold, and anything other than a tap is not supposed
	 * to turn the controls back on on a mobile device.
	 *
	 * Here we're setting the default component behavior to report user activity
	 * whenever touch events happen, and this can be turned off by components that
	 * want touch events to act differently.
	 */
	vjs.Component.prototype.enableTouchActivity = function() {
	  var report, touchHolding, touchEnd;

	  // Don't continue if the root player doesn't support reporting user activity
	  if (!this.player().reportUserActivity) {
	    return;
	  }

	  // listener for reporting that the user is active
	  report = vjs.bind(this.player(), this.player().reportUserActivity);

	  this.on('touchstart', function() {
	    report();
	    // For as long as the they are touching the device or have their mouse down,
	    // we consider them active even if they're not moving their finger or mouse.
	    // So we want to continue to update that they are active
	    this.clearInterval(touchHolding);
	    // report at the same interval as activityCheck
	    touchHolding = this.setInterval(report, 250);
	  });

	  touchEnd = function(event) {
	    report();
	    // stop the interval that maintains activity if the touch is holding
	    this.clearInterval(touchHolding);
	  };

	  this.on('touchmove', report);
	  this.on('touchend', touchEnd);
	  this.on('touchcancel', touchEnd);
	};

	/**
	 * Creates timeout and sets up disposal automatically.
	 * @param {Function} fn The function to run after the timeout.
	 * @param {Number} timeout Number of ms to delay before executing specified function.
	 * @return {Number} Returns the timeout ID
	 */
	vjs.Component.prototype.setTimeout = function(fn, timeout) {
	  fn = vjs.bind(this, fn);

	  // window.setTimeout would be preferable here, but due to some bizarre issue with Sinon and/or Phantomjs, we can't.
	  var timeoutId = setTimeout(fn, timeout);

	  var disposeFn = function() {
	    this.clearTimeout(timeoutId);
	  };

	  disposeFn.guid = 'vjs-timeout-'+ timeoutId;

	  this.on('dispose', disposeFn);

	  return timeoutId;
	};


	/**
	 * Clears a timeout and removes the associated dispose listener
	 * @param {Number} timeoutId The id of the timeout to clear
	 * @return {Number} Returns the timeout ID
	 */
	vjs.Component.prototype.clearTimeout = function(timeoutId) {
	  clearTimeout(timeoutId);

	  var disposeFn = function(){};
	  disposeFn.guid = 'vjs-timeout-'+ timeoutId;

	  this.off('dispose', disposeFn);

	  return timeoutId;
	};

	/**
	 * Creates an interval and sets up disposal automatically.
	 * @param {Function} fn The function to run every N seconds.
	 * @param {Number} interval Number of ms to delay before executing specified function.
	 * @return {Number} Returns the interval ID
	 */
	vjs.Component.prototype.setInterval = function(fn, interval) {
	  fn = vjs.bind(this, fn);

	  var intervalId = setInterval(fn, interval);

	  var disposeFn = function() {
	    this.clearInterval(intervalId);
	  };

	  disposeFn.guid = 'vjs-interval-'+ intervalId;

	  this.on('dispose', disposeFn);

	  return intervalId;
	};

	/**
	 * Clears an interval and removes the associated dispose listener
	 * @param {Number} intervalId The id of the interval to clear
	 * @return {Number} Returns the interval ID
	 */
	vjs.Component.prototype.clearInterval = function(intervalId) {
	  clearInterval(intervalId);

	  var disposeFn = function(){};
	  disposeFn.guid = 'vjs-interval-'+ intervalId;

	  this.off('dispose', disposeFn);

	  return intervalId;
	};
	/* Button - Base class for all buttons
	================================================================================ */
	/**
	 * Base class for all buttons
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @class
	 * @constructor
	 */
	vjs.Button = vjs.Component.extend({
	  /**
	   * @constructor
	   * @inheritDoc
	   */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    this.emitTapEvents();

	    this.on('tap', this.onClick);
	    this.on('click', this.onClick);
	    this.on('focus', this.onFocus);
	    this.on('blur', this.onBlur);
	  }
	});

	vjs.Button.prototype.createEl = function(type, props){
	  var el;

	  // Add standard Aria and Tabindex info
	  props = vjs.obj.merge({
	    className: this.buildCSSClass(),
	    'role': 'button',
	    'aria-live': 'polite', // let the screen reader user know that the text of the button may change
	    tabIndex: 0
	  }, props);

	  el = vjs.Component.prototype.createEl.call(this, type, props);

	  // if innerHTML hasn't been overridden (bigPlayButton), add content elements
	  if (!props.innerHTML) {
	    this.contentEl_ = vjs.createEl('div', {
	      className: 'vjs-control-content'
	    });

	    this.controlText_ = vjs.createEl('span', {
	      className: 'vjs-control-text',
	      innerHTML: this.localize(this.buttonText) || 'Need Text'
	    });

	    this.contentEl_.appendChild(this.controlText_);
	    el.appendChild(this.contentEl_);
	  }

	  return el;
	};

	vjs.Button.prototype.buildCSSClass = function(){
	  // TODO: Change vjs-control to vjs-button?
	  return 'vjs-control ' + vjs.Component.prototype.buildCSSClass.call(this);
	};

	  // Click - Override with specific functionality for button
	vjs.Button.prototype.onClick = function(){};

	  // Focus - Add keyboard functionality to element
	vjs.Button.prototype.onFocus = function(){
	  vjs.on(document, 'keydown', vjs.bind(this, this.onKeyPress));
	};

	  // KeyPress (document level) - Trigger click when keys are pressed
	vjs.Button.prototype.onKeyPress = function(event){
	  // Check for space bar (32) or enter (13) keys
	  if (event.which == 32 || event.which == 13) {
	    event.preventDefault();
	    this.onClick();
	  }
	};

	// Blur - Remove keyboard triggers
	vjs.Button.prototype.onBlur = function(){
	  vjs.off(document, 'keydown', vjs.bind(this, this.onKeyPress));
	};
	/* Slider
	================================================================================ */
	/**
	 * The base functionality for sliders like the volume bar and seek bar
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.Slider = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    // Set property names to bar and handle to match with the child Slider class is looking for
	    this.bar = this.getChild(this.options_['barName']);
	    this.handle = this.getChild(this.options_['handleName']);

	    this.on('mousedown', this.onMouseDown);
	    this.on('touchstart', this.onMouseDown);
	    this.on('focus', this.onFocus);
	    this.on('blur', this.onBlur);
	    this.on('click', this.onClick);

	    this.on(player, 'controlsvisible', this.update);
	    this.on(player, this.playerEvent, this.update);
	  }
	});

	vjs.Slider.prototype.createEl = function(type, props) {
	  props = props || {};
	  // Add the slider element class to all sub classes
	  props.className = props.className + ' vjs-slider';
	  props = vjs.obj.merge({
	    'role': 'slider',
	    'aria-valuenow': 0,
	    'aria-valuemin': 0,
	    'aria-valuemax': 100,
	    tabIndex: 0
	  }, props);

	  return vjs.Component.prototype.createEl.call(this, type, props);
	};

	vjs.Slider.prototype.onMouseDown = function(event){
	  event.preventDefault();
	  vjs.blockTextSelection();
	  this.addClass('vjs-sliding');

	  this.on(document, 'mousemove', this.onMouseMove);
	  this.on(document, 'mouseup', this.onMouseUp);
	  this.on(document, 'touchmove', this.onMouseMove);
	  this.on(document, 'touchend', this.onMouseUp);

	  this.onMouseMove(event);
	};

	// To be overridden by a subclass
	vjs.Slider.prototype.onMouseMove = function(){};

	vjs.Slider.prototype.onMouseUp = function() {
	  vjs.unblockTextSelection();
	  this.removeClass('vjs-sliding');

	  this.off(document, 'mousemove', this.onMouseMove);
	  this.off(document, 'mouseup', this.onMouseUp);
	  this.off(document, 'touchmove', this.onMouseMove);
	  this.off(document, 'touchend', this.onMouseUp);

	  this.update();
	};

	vjs.Slider.prototype.update = function(){
	  // In VolumeBar init we have a setTimeout for update that pops and update to the end of the
	  // execution stack. The player is destroyed before then update will cause an error
	  if (!this.el_) return;

	  // If scrubbing, we could use a cached value to make the handle keep up with the user's mouse.
	  // On HTML5 browsers scrubbing is really smooth, but some flash players are slow, so we might want to utilize this later.
	  // var progress =  (this.player_.scrubbing) ? this.player_.getCache().currentTime / this.player_.duration() : this.player_.currentTime() / this.player_.duration();

	  var barProgress,
	      progress = this.getPercent(),
	      handle = this.handle,
	      bar = this.bar;

	  // Protect against no duration and other division issues
	  if (typeof progress !== 'number' ||
	      progress !== progress ||
	      progress < 0 ||
	      progress === Infinity) {
	        progress = 0;
	  }

	  barProgress = progress;

	  // If there is a handle, we need to account for the handle in our calculation for progress bar
	  // so that it doesn't fall short of or extend past the handle.
	  if (handle) {

	    var box = this.el_,
	        boxWidth = box.offsetWidth,

	        handleWidth = handle.el().offsetWidth,

	        // The width of the handle in percent of the containing box
	        // In IE, widths may not be ready yet causing NaN
	        handlePercent = (handleWidth) ? handleWidth / boxWidth : 0,

	        // Get the adjusted size of the box, considering that the handle's center never touches the left or right side.
	        // There is a margin of half the handle's width on both sides.
	        boxAdjustedPercent = 1 - handlePercent,

	        // Adjust the progress that we'll use to set widths to the new adjusted box width
	        adjustedProgress = progress * boxAdjustedPercent;

	    // The bar does reach the left side, so we need to account for this in the bar's width
	    barProgress = adjustedProgress + (handlePercent / 2);

	    // Move the handle from the left based on the adjected progress
	    handle.el().style.left = vjs.round(adjustedProgress * 100, 2) + '%';
	  }

	  // Set the new bar width
	  if (bar) {
	    bar.el().style.width = vjs.round(barProgress * 100, 2) + '%';
	  }
	};

	vjs.Slider.prototype.calculateDistance = function(event){
	  var el, box, boxX, boxY, boxW, boxH, handle, pageX, pageY;

	  el = this.el_;
	  box = vjs.findPosition(el);
	  boxW = boxH = el.offsetWidth;
	  handle = this.handle;

	  if (this.options()['vertical']) {
	    boxY = box.top;

	    if (event.changedTouches) {
	      pageY = event.changedTouches[0].pageY;
	    } else {
	      pageY = event.pageY;
	    }

	    if (handle) {
	      var handleH = handle.el().offsetHeight;
	      // Adjusted X and Width, so handle doesn't go outside the bar
	      boxY = boxY + (handleH / 2);
	      boxH = boxH - handleH;
	    }

	    // Percent that the click is through the adjusted area
	    return Math.max(0, Math.min(1, ((boxY - pageY) + boxH) / boxH));

	  } else {
	    boxX = box.left;

	    if (event.changedTouches) {
	      pageX = event.changedTouches[0].pageX;
	    } else {
	      pageX = event.pageX;
	    }

	    if (handle) {
	      var handleW = handle.el().offsetWidth;

	      // Adjusted X and Width, so handle doesn't go outside the bar
	      boxX = boxX + (handleW / 2);
	      boxW = boxW - handleW;
	    }

	    // Percent that the click is through the adjusted area
	    return Math.max(0, Math.min(1, (pageX - boxX) / boxW));
	  }
	};

	vjs.Slider.prototype.onFocus = function(){
	  this.on(document, 'keydown', this.onKeyPress);
	};

	vjs.Slider.prototype.onKeyPress = function(event){
	  if (event.which == 37 || event.which == 40) { // Left and Down Arrows
	    event.preventDefault();
	    this.stepBack();
	  } else if (event.which == 38 || event.which == 39) { // Up and Right Arrows
	    event.preventDefault();
	    this.stepForward();
	  }
	};

	vjs.Slider.prototype.onBlur = function(){
	  this.off(document, 'keydown', this.onKeyPress);
	};

	/**
	 * Listener for click events on slider, used to prevent clicks
	 *   from bubbling up to parent elements like button menus.
	 * @param  {Object} event Event object
	 */
	vjs.Slider.prototype.onClick = function(event){
	  event.stopImmediatePropagation();
	  event.preventDefault();
	};

	/**
	 * SeekBar Behavior includes play progress bar, and seek handle
	 * Needed so it can determine seek position based on handle position/size
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.SliderHandle = vjs.Component.extend();

	/**
	 * Default value of the slider
	 *
	 * @type {Number}
	 * @private
	 */
	vjs.SliderHandle.prototype.defaultValue = 0;

	/** @inheritDoc */
	vjs.SliderHandle.prototype.createEl = function(type, props) {
	  props = props || {};
	  // Add the slider element class to all sub classes
	  props.className = props.className + ' vjs-slider-handle';
	  props = vjs.obj.merge({
	    innerHTML: '<span class="vjs-control-text">'+this.defaultValue+'</span>'
	  }, props);

	  return vjs.Component.prototype.createEl.call(this, 'div', props);
	};
	/* Menu
	================================================================================ */
	/**
	 * The Menu component is used to build pop up menus, including subtitle and
	 * captions selection menus.
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @class
	 * @constructor
	 */
	vjs.Menu = vjs.Component.extend();

	/**
	 * Add a menu item to the menu
	 * @param {Object|String} component Component or component type to add
	 */
	vjs.Menu.prototype.addItem = function(component){
	  this.addChild(component);
	  component.on('click', vjs.bind(this, function(){
	    this.unlockShowing();
	  }));
	};

	/** @inheritDoc */
	vjs.Menu.prototype.createEl = function(){
	  var contentElType = this.options().contentElType || 'ul';
	  this.contentEl_ = vjs.createEl(contentElType, {
	    className: 'vjs-menu-content'
	  });
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    append: this.contentEl_,
	    className: 'vjs-menu'
	  });
	  el.appendChild(this.contentEl_);

	  // Prevent clicks from bubbling up. Needed for Menu Buttons,
	  // where a click on the parent is significant
	  vjs.on(el, 'click', function(event){
	    event.preventDefault();
	    event.stopImmediatePropagation();
	  });

	  return el;
	};

	/**
	 * The component for a menu item. `<li>`
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @class
	 * @constructor
	 */
	vjs.MenuItem = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);
	    this.selected(options['selected']);
	  }
	});

	/** @inheritDoc */
	vjs.MenuItem.prototype.createEl = function(type, props){
	  return vjs.Button.prototype.createEl.call(this, 'li', vjs.obj.merge({
	    className: 'vjs-menu-item',
	    innerHTML: this.localize(this.options_['label'])
	  }, props));
	};

	/**
	 * Handle a click on the menu item, and set it to selected
	 */
	vjs.MenuItem.prototype.onClick = function(){
	  this.selected(true);
	};

	/**
	 * Set this menu item as selected or not
	 * @param  {Boolean} selected
	 */
	vjs.MenuItem.prototype.selected = function(selected){
	  if (selected) {
	    this.addClass('vjs-selected');
	    this.el_.setAttribute('aria-selected',true);
	  } else {
	    this.removeClass('vjs-selected');
	    this.el_.setAttribute('aria-selected',false);
	  }
	};


	/**
	 * A button class with a popup menu
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.MenuButton = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);

	    this.update();

	    this.on('keydown', this.onKeyPress);
	    this.el_.setAttribute('aria-haspopup', true);
	    this.el_.setAttribute('role', 'button');
	  }
	});

	vjs.MenuButton.prototype.update = function() {
	  var menu = this.createMenu();

	  if (this.menu) {
	    this.removeChild(this.menu);
	  }

	  this.menu = menu;
	  this.addChild(menu);

	  if (this.items && this.items.length === 0) {
	    this.hide();
	  } else if (this.items && this.items.length > 1) {
	    this.show();
	  }
	};

	/**
	 * Track the state of the menu button
	 * @type {Boolean}
	 * @private
	 */
	vjs.MenuButton.prototype.buttonPressed_ = false;

	vjs.MenuButton.prototype.createMenu = function(){
	  var menu = new vjs.Menu(this.player_);

	  // Add a title list item to the top
	  if (this.options().title) {
	    menu.contentEl().appendChild(vjs.createEl('li', {
	      className: 'vjs-menu-title',
	      innerHTML: vjs.capitalize(this.options().title),
	      tabindex: -1
	    }));
	  }

	  this.items = this['createItems']();

	  if (this.items) {
	    // Add menu items to the menu
	    for (var i = 0; i < this.items.length; i++) {
	      menu.addItem(this.items[i]);
	    }
	  }

	  return menu;
	};

	/**
	 * Create the list of menu items. Specific to each subclass.
	 */
	vjs.MenuButton.prototype.createItems = function(){};

	/** @inheritDoc */
	vjs.MenuButton.prototype.buildCSSClass = function(){
	  return this.className + ' vjs-menu-button ' + vjs.Button.prototype.buildCSSClass.call(this);
	};

	// Focus - Add keyboard functionality to element
	// This function is not needed anymore. Instead, the keyboard functionality is handled by
	// treating the button as triggering a submenu. When the button is pressed, the submenu
	// appears. Pressing the button again makes the submenu disappear.
	vjs.MenuButton.prototype.onFocus = function(){};
	// Can't turn off list display that we turned on with focus, because list would go away.
	vjs.MenuButton.prototype.onBlur = function(){};

	vjs.MenuButton.prototype.onClick = function(){
	  // When you click the button it adds focus, which will show the menu indefinitely.
	  // So we'll remove focus when the mouse leaves the button.
	  // Focus is needed for tab navigation.
	  this.one('mouseout', vjs.bind(this, function(){
	    this.menu.unlockShowing();
	    this.el_.blur();
	  }));
	  if (this.buttonPressed_){
	    this.unpressButton();
	  } else {
	    this.pressButton();
	  }
	};

	vjs.MenuButton.prototype.onKeyPress = function(event){

	  // Check for space bar (32) or enter (13) keys
	  if (event.which == 32 || event.which == 13) {
	    if (this.buttonPressed_){
	      this.unpressButton();
	    } else {
	      this.pressButton();
	    }
	    event.preventDefault();
	  // Check for escape (27) key
	  } else if (event.which == 27){
	    if (this.buttonPressed_){
	      this.unpressButton();
	    }
	    event.preventDefault();
	  }
	};

	vjs.MenuButton.prototype.pressButton = function(){
	  this.buttonPressed_ = true;
	  this.menu.lockShowing();
	  this.el_.setAttribute('aria-pressed', true);
	  if (this.items && this.items.length > 0) {
	    this.items[0].el().focus(); // set the focus to the title of the submenu
	  }
	};

	vjs.MenuButton.prototype.unpressButton = function(){
	  this.buttonPressed_ = false;
	  this.menu.unlockShowing();
	  this.el_.setAttribute('aria-pressed', false);
	};
	/**
	 * Custom MediaError to mimic the HTML5 MediaError
	 * @param {Number} code The media error code
	 */
	vjs.MediaError = function(code){
	  if (typeof code === 'number') {
	    this.code = code;
	  } else if (typeof code === 'string') {
	    // default code is zero, so this is a custom error
	    this.message = code;
	  } else if (typeof code === 'object') { // object
	    vjs.obj.merge(this, code);
	  }

	  if (!this.message) {
	    this.message = vjs.MediaError.defaultMessages[this.code] || '';
	  }
	};

	/**
	 * The error code that refers two one of the defined
	 * MediaError types
	 * @type {Number}
	 */
	vjs.MediaError.prototype.code = 0;

	/**
	 * An optional message to be shown with the error.
	 * Message is not part of the HTML5 video spec
	 * but allows for more informative custom errors.
	 * @type {String}
	 */
	vjs.MediaError.prototype.message = '';

	/**
	 * An optional status code that can be set by plugins
	 * to allow even more detail about the error.
	 * For example the HLS plugin might provide the specific
	 * HTTP status code that was returned when the error
	 * occurred, then allowing a custom error overlay
	 * to display more information.
	 * @type {[type]}
	 */
	vjs.MediaError.prototype.status = null;

	vjs.MediaError.errorTypes = [
	  'MEDIA_ERR_CUSTOM',            // = 0
	  'MEDIA_ERR_ABORTED',           // = 1
	  'MEDIA_ERR_NETWORK',           // = 2
	  'MEDIA_ERR_DECODE',            // = 3
	  'MEDIA_ERR_SRC_NOT_SUPPORTED', // = 4
	  'MEDIA_ERR_ENCRYPTED'          // = 5
	];

	vjs.MediaError.defaultMessages = {
	  1: 'You aborted the video playback',
	  2: 'A network error caused the video download to fail part-way.',
	  3: 'The video playback was aborted due to a corruption problem or because the video used features your browser did not support.',
	  4: 'The video could not be loaded, either because the server or network failed or because the format is not supported.',
	  5: 'The video is encrypted and we do not have the keys to decrypt it.'
	};

	// Add types as properties on MediaError
	// e.g. MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
	for (var errNum = 0; errNum < vjs.MediaError.errorTypes.length; errNum++) {
	  vjs.MediaError[vjs.MediaError.errorTypes[errNum]] = errNum;
	  // values should be accessible on both the class and instance
	  vjs.MediaError.prototype[vjs.MediaError.errorTypes[errNum]] = errNum;
	}
	(function(){
	  var apiMap, specApi, browserApi, i;

	  /**
	   * Store the browser-specific methods for the fullscreen API
	   * @type {Object|undefined}
	   * @private
	   */
	  vjs.browser.fullscreenAPI;

	  // browser API methods
	  // map approach from Screenful.js - https://github.com/sindresorhus/screenfull.js
	  apiMap = [
	    // Spec: https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html
	    [
	      'requestFullscreen',
	      'exitFullscreen',
	      'fullscreenElement',
	      'fullscreenEnabled',
	      'fullscreenchange',
	      'fullscreenerror'
	    ],
	    // WebKit
	    [
	      'webkitRequestFullscreen',
	      'webkitExitFullscreen',
	      'webkitFullscreenElement',
	      'webkitFullscreenEnabled',
	      'webkitfullscreenchange',
	      'webkitfullscreenerror'
	    ],
	    // Old WebKit (Safari 5.1)
	    [
	      'webkitRequestFullScreen',
	      'webkitCancelFullScreen',
	      'webkitCurrentFullScreenElement',
	      'webkitCancelFullScreen',
	      'webkitfullscreenchange',
	      'webkitfullscreenerror'
	    ],
	    // Mozilla
	    [
	      'mozRequestFullScreen',
	      'mozCancelFullScreen',
	      'mozFullScreenElement',
	      'mozFullScreenEnabled',
	      'mozfullscreenchange',
	      'mozfullscreenerror'
	    ],
	    // Microsoft
	    [
	      'msRequestFullscreen',
	      'msExitFullscreen',
	      'msFullscreenElement',
	      'msFullscreenEnabled',
	      'MSFullscreenChange',
	      'MSFullscreenError'
	    ]
	  ];

	  specApi = apiMap[0];

	  // determine the supported set of functions
	  for (i=0; i<apiMap.length; i++) {
	    // check for exitFullscreen function
	    if (apiMap[i][1] in document) {
	      browserApi = apiMap[i];
	      break;
	    }
	  }

	  // map the browser API names to the spec API names
	  // or leave vjs.browser.fullscreenAPI undefined
	  if (browserApi) {
	    vjs.browser.fullscreenAPI = {};

	    for (i=0; i<browserApi.length; i++) {
	      vjs.browser.fullscreenAPI[specApi[i]] = browserApi[i];
	    }
	  }

	})();
	/**
	 * An instance of the `vjs.Player` class is created when any of the Video.js setup methods are used to initialize a video.
	 *
	 * ```js
	 * var myPlayer = videojs('example_video_1');
	 * ```
	 *
	 * In the following example, the `data-setup` attribute tells the Video.js library to create a player instance when the library is ready.
	 *
	 * ```html
	 * <video id="example_video_1" data-setup='{}' controls>
	 *   <source src="my-source.mp4" type="video/mp4">
	 * </video>
	 * ```
	 *
	 * After an instance has been created it can be accessed globally using `Video('example_video_1')`.
	 *
	 * @class
	 * @extends vjs.Component
	 */
	vjs.Player = vjs.Component.extend({

	  /**
	   * player's constructor function
	   *
	   * @constructs
	   * @method init
	   * @param {Element} tag        The original video tag used for configuring options
	   * @param {Object=} options    Player options
	   * @param {Function=} ready    Ready callback function
	   */
	  init: function(tag, options, ready){
	    this.tag = tag; // Store the original tag used to set options

	    // Make sure tag ID exists
	    tag.id = tag.id || 'vjs_video_' + vjs.guid++;

	    // Store the tag attributes used to restore html5 element
	    this.tagAttributes = tag && vjs.getElementAttributes(tag);

	    // Set Options
	    // The options argument overrides options set in the video tag
	    // which overrides globally set options.
	    // This latter part coincides with the load order
	    // (tag must exist before Player)
	    options = vjs.obj.merge(this.getTagSettings(tag), options);

	    // Update Current Language
	    this.language_ = options['language'] || vjs.options['language'];

	    // Update Supported Languages
	    this.languages_ = options['languages'] || vjs.options['languages'];

	    // Cache for video property values.
	    this.cache_ = {};

	    // Set poster
	    this.poster_ = options['poster'] || '';

	    // Set controls
	    this.controls_ = !!options['controls'];
	    // Original tag settings stored in options
	    // now remove immediately so native controls don't flash.
	    // May be turned back on by HTML5 tech if nativeControlsForTouch is true
	    tag.controls = false;

	    // we don't want the player to report touch activity on itself
	    // see enableTouchActivity in Component
	    options.reportTouchActivity = false;

	    // Set isAudio based on whether or not an audio tag was used
	    this.isAudio(this.tag.nodeName.toLowerCase() === 'audio');

	    // Run base component initializing with new options.
	    // Builds the element through createEl()
	    // Inits and embeds any child components in opts
	    vjs.Component.call(this, this, options, ready);

	    // Update controls className. Can't do this when the controls are initially
	    // set because the element doesn't exist yet.
	    if (this.controls()) {
	      this.addClass('vjs-controls-enabled');
	    } else {
	      this.addClass('vjs-controls-disabled');
	    }

	    if (this.isAudio()) {
	      this.addClass('vjs-audio');
	    }

	    // TODO: Make this smarter. Toggle user state between touching/mousing
	    // using events, since devices can have both touch and mouse events.
	    // if (vjs.TOUCH_ENABLED) {
	    //   this.addClass('vjs-touch-enabled');
	    // }

	    // Make player easily findable by ID
	    vjs.players[this.id_] = this;

	    if (options['plugins']) {
	      vjs.obj.each(options['plugins'], function(key, val){
	        this[key](val);
	      }, this);
	    }

	    this.listenForUserActivity();
	  }
	});

	/**
	 * The player's stored language code
	 *
	 * @type {String}
	 * @private
	 */
	vjs.Player.prototype.language_;

	/**
	 * The player's language code
	 * @param  {String} languageCode  The locale string
	 * @return {String}             The locale string when getting
	 * @return {vjs.Player}         self, when setting
	 */
	vjs.Player.prototype.language = function (languageCode) {
	  if (languageCode === undefined) {
	    return this.language_;
	  }

	  this.language_ = languageCode;
	  return this;
	};

	/**
	 * The player's stored language dictionary
	 *
	 * @type {Object}
	 * @private
	 */
	vjs.Player.prototype.languages_;

	vjs.Player.prototype.languages = function(){
	  return this.languages_;
	};

	/**
	 * Player instance options, surfaced using vjs.options
	 * vjs.options = vjs.Player.prototype.options_
	 * Make changes in vjs.options, not here.
	 * All options should use string keys so they avoid
	 * renaming by closure compiler
	 * @type {Object}
	 * @private
	 */
	vjs.Player.prototype.options_ = vjs.options;

	/**
	 * Destroys the video player and does any necessary cleanup
	 *
	 *     myPlayer.dispose();
	 *
	 * This is especially helpful if you are dynamically adding and removing videos
	 * to/from the DOM.
	 */
	vjs.Player.prototype.dispose = function(){
	  this.trigger('dispose');
	  // prevent dispose from being called twice
	  this.off('dispose');

	  // Kill reference to this player
	  vjs.players[this.id_] = null;
	  if (this.tag && this.tag['player']) { this.tag['player'] = null; }
	  if (this.el_ && this.el_['player']) { this.el_['player'] = null; }

	  if (this.tech) { this.tech.dispose(); }

	  // Component dispose
	  vjs.Component.prototype.dispose.call(this);
	};

	vjs.Player.prototype.getTagSettings = function(tag){
	  var tagOptions,
	      dataSetup,
	      options = {
	        'sources': [],
	        'tracks': []
	      };

	  tagOptions = vjs.getElementAttributes(tag);
	  dataSetup = tagOptions['data-setup'];

	  // Check if data-setup attr exists.
	  if (dataSetup !== null){
	    // Parse options JSON
	    // If empty string, make it a parsable json object.
	    vjs.obj.merge(tagOptions, vjs.JSON.parse(dataSetup || '{}'));
	  }

	  vjs.obj.merge(options, tagOptions);

	  // Get tag children settings
	  if (tag.hasChildNodes()) {
	    var children, child, childName, i, j;

	    children = tag.childNodes;

	    for (i=0,j=children.length; i<j; i++) {
	      child = children[i];
	      // Change case needed: http://ejohn.org/blog/nodename-case-sensitivity/
	      childName = child.nodeName.toLowerCase();
	      if (childName === 'source') {
	        options['sources'].push(vjs.getElementAttributes(child));
	      } else if (childName === 'track') {
	        options['tracks'].push(vjs.getElementAttributes(child));
	      }
	    }
	  }

	  return options;
	};

	vjs.Player.prototype.createEl = function(){
	  var
	    el = this.el_ = vjs.Component.prototype.createEl.call(this, 'div'),
	    tag = this.tag,
	    attrs;

	  // Remove width/height attrs from tag so CSS can make it 100% width/height
	  tag.removeAttribute('width');
	  tag.removeAttribute('height');

	  // Copy over all the attributes from the tag, including ID and class
	  // ID will now reference player box, not the video tag
	  attrs = vjs.getElementAttributes(tag);
	  vjs.obj.each(attrs, function(attr) {
	    // workaround so we don't totally break IE7
	    // http://stackoverflow.com/questions/3653444/css-styles-not-applied-on-dynamic-elements-in-internet-explorer-7
	    if (attr == 'class') {
	      el.className = attrs[attr];
	    } else {
	      el.setAttribute(attr, attrs[attr]);
	    }
	  });

	  // Update tag id/class for use as HTML5 playback tech
	  // Might think we should do this after embedding in container so .vjs-tech class
	  // doesn't flash 100% width/height, but class only applies with .video-js parent
	  tag.id += '_html5_api';
	  tag.className = 'vjs-tech';

	  // Make player findable on elements
	  tag['player'] = el['player'] = this;
	  // Default state of video is paused
	  this.addClass('vjs-paused');

	  // Make box use width/height of tag, or rely on default implementation
	  // Enforce with CSS since width/height attrs don't work on divs
	  this.width(this.options_['width'], true); // (true) Skip resize listener on load
	  this.height(this.options_['height'], true);

	  // vjs.insertFirst seems to cause the networkState to flicker from 3 to 2, so
	  // keep track of the original for later so we can know if the source originally failed
	  tag.initNetworkState_ = tag.networkState;

	  // Wrap video tag in div (el/box) container
	  if (tag.parentNode) {
	    tag.parentNode.insertBefore(el, tag);
	  }
	  vjs.insertFirst(tag, el); // Breaks iPhone, fixed in HTML5 setup.

	  // The event listeners need to be added before the children are added
	  // in the component init because the tech (loaded with mediaLoader) may
	  // fire events, like loadstart, that these events need to capture.
	  // Long term it might be better to expose a way to do this in component.init
	  // like component.initEventListeners() that runs between el creation and
	  // adding children
	  this.el_ = el;
	  this.on('loadstart', this.onLoadStart);
	  this.on('waiting', this.onWaiting);
	  this.on(['canplay', 'canplaythrough', 'playing', 'ended'], this.onWaitEnd);
	  this.on('seeking', this.onSeeking);
	  this.on('seeked', this.onSeeked);
	  this.on('ended', this.onEnded);
	  this.on('play', this.onPlay);
	  this.on('firstplay', this.onFirstPlay);
	  this.on('pause', this.onPause);
	  this.on('progress', this.onProgress);
	  this.on('durationchange', this.onDurationChange);
	  this.on('fullscreenchange', this.onFullscreenChange);

	  return el;
	};

	// /* Media Technology (tech)
	// ================================================================================ */
	// Load/Create an instance of playback technology including element and API methods
	// And append playback element in player div.
	vjs.Player.prototype.loadTech = function(techName, source){

	  // Pause and remove current playback technology
	  if (this.tech) {
	    this.unloadTech();
	  }

	  // get rid of the HTML5 video tag as soon as we are using another tech
	  if (techName !== 'Html5' && this.tag) {
	    vjs.Html5.disposeMediaElement(this.tag);
	    this.tag = null;
	  }

	  this.techName = techName;

	  // Turn off API access because we're loading a new tech that might load asynchronously
	  this.isReady_ = false;

	  var techReady = function(){
	    this.player_.triggerReady();
	  };

	  // Grab tech-specific options from player options and add source and parent element to use.
	  var techOptions = vjs.obj.merge({ 'source': source, 'parentEl': this.el_ }, this.options_[techName.toLowerCase()]);

	  if (source) {
	    this.currentType_ = source.type;
	    if (source.src == this.cache_.src && this.cache_.currentTime > 0) {
	      techOptions['startTime'] = this.cache_.currentTime;
	    }

	    this.cache_.src = source.src;
	  }

	  // Initialize tech instance
	  this.tech = new window['videojs'][techName](this, techOptions);

	  this.tech.ready(techReady);
	};

	vjs.Player.prototype.unloadTech = function(){
	  this.isReady_ = false;

	  this.tech.dispose();

	  this.tech = false;
	};

	// There's many issues around changing the size of a Flash (or other plugin) object.
	// First is a plugin reload issue in Firefox that has been around for 11 years: https://bugzilla.mozilla.org/show_bug.cgi?id=90268
	// Then with the new fullscreen API, Mozilla and webkit browsers will reload the flash object after going to fullscreen.
	// To get around this, we're unloading the tech, caching source and currentTime values, and reloading the tech once the plugin is resized.
	// reloadTech: function(betweenFn){
	//   vjs.log('unloadingTech')
	//   this.unloadTech();
	//   vjs.log('unloadedTech')
	//   if (betweenFn) { betweenFn.call(); }
	//   vjs.log('LoadingTech')
	//   this.loadTech(this.techName, { src: this.cache_.src })
	//   vjs.log('loadedTech')
	// },

	// /* Player event handlers (how the player reacts to certain events)
	// ================================================================================ */

	/**
	 * Fired when the user agent begins looking for media data
	 * @event loadstart
	 */
	vjs.Player.prototype.onLoadStart = function() {
	  // TODO: Update to use `emptied` event instead. See #1277.

	  this.removeClass('vjs-ended');

	  // reset the error state
	  this.error(null);

	  // If it's already playing we want to trigger a firstplay event now.
	  // The firstplay event relies on both the play and loadstart events
	  // which can happen in any order for a new source
	  if (!this.paused()) {
	    this.trigger('firstplay');
	  } else {
	    // reset the hasStarted state
	    this.hasStarted(false);
	  }
	};

	vjs.Player.prototype.hasStarted_ = false;

	vjs.Player.prototype.hasStarted = function(hasStarted){
	  if (hasStarted !== undefined) {
	    // only update if this is a new value
	    if (this.hasStarted_ !== hasStarted) {
	      this.hasStarted_ = hasStarted;
	      if (hasStarted) {
	        this.addClass('vjs-has-started');
	        // trigger the firstplay event if this newly has played
	        this.trigger('firstplay');
	      } else {
	        this.removeClass('vjs-has-started');
	      }
	    }
	    return this;
	  }
	  return this.hasStarted_;
	};

	/**
	 * Fired when the player has initial duration and dimension information
	 * @event loadedmetadata
	 */
	vjs.Player.prototype.onLoadedMetaData;

	/**
	 * Fired when the player has downloaded data at the current playback position
	 * @event loadeddata
	 */
	vjs.Player.prototype.onLoadedData;

	/**
	 * Fired when the player has finished downloading the source data
	 * @event loadedalldata
	 */
	vjs.Player.prototype.onLoadedAllData;

	/**
	 * Fired whenever the media begins or resumes playback
	 * @event play
	 */
	vjs.Player.prototype.onPlay = function(){
	  this.removeClass('vjs-ended');
	  this.removeClass('vjs-paused');
	  this.addClass('vjs-playing');

	  // hide the poster when the user hits play
	  // https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-play
	  this.hasStarted(true);
	};

	/**
	 * Fired whenever the media begins waiting
	 * @event waiting
	 */
	vjs.Player.prototype.onWaiting = function(){
	  this.addClass('vjs-waiting');
	};

	/**
	 * A handler for events that signal that waiting has ended
	 * which is not consistent between browsers. See #1351
	 * @private
	 */
	vjs.Player.prototype.onWaitEnd = function(){
	  this.removeClass('vjs-waiting');
	};

	/**
	 * Fired whenever the player is jumping to a new time
	 * @event seeking
	 */
	vjs.Player.prototype.onSeeking = function(){
	  this.addClass('vjs-seeking');
	};

	/**
	 * Fired when the player has finished jumping to a new time
	 * @event seeked
	 */
	vjs.Player.prototype.onSeeked = function(){
	  this.removeClass('vjs-seeking');
	};

	/**
	 * Fired the first time a video is played
	 *
	 * Not part of the HLS spec, and we're not sure if this is the best
	 * implementation yet, so use sparingly. If you don't have a reason to
	 * prevent playback, use `myPlayer.one('play');` instead.
	 *
	 * @event firstplay
	 */
	vjs.Player.prototype.onFirstPlay = function(){
	    //If the first starttime attribute is specified
	    //then we will start at the given offset in seconds
	    if(this.options_['starttime']){
	      this.currentTime(this.options_['starttime']);
	    }

	    this.addClass('vjs-has-started');
	};

	/**
	 * Fired whenever the media has been paused
	 * @event pause
	 */
	vjs.Player.prototype.onPause = function(){
	  this.removeClass('vjs-playing');
	  this.addClass('vjs-paused');
	};

	/**
	 * Fired when the current playback position has changed
	 *
	 * During playback this is fired every 15-250 milliseconds, depending on the
	 * playback technology in use.
	 * @event timeupdate
	 */
	vjs.Player.prototype.onTimeUpdate;

	/**
	 * Fired while the user agent is downloading media data
	 * @event progress
	 */
	vjs.Player.prototype.onProgress = function(){
	  // Add custom event for when source is finished downloading.
	  if (this.bufferedPercent() == 1) {
	    this.trigger('loadedalldata');
	  }
	};

	/**
	 * Fired when the end of the media resource is reached (currentTime == duration)
	 * @event ended
	 */
	vjs.Player.prototype.onEnded = function(){
	  this.addClass('vjs-ended');
	  if (this.options_['loop']) {
	    this.currentTime(0);
	    this.play();
	  } else if (!this.paused()) {
	    this.pause();
	  }
	};

	/**
	 * Fired when the duration of the media resource is first known or changed
	 * @event durationchange
	 */
	vjs.Player.prototype.onDurationChange = function(){
	  // Allows for caching value instead of asking player each time.
	  // We need to get the techGet response and check for a value so we don't
	  // accidentally cause the stack to blow up.
	  var duration = this.techGet('duration');
	  if (duration) {
	    if (duration < 0) {
	      duration = Infinity;
	    }
	    this.duration(duration);
	    // Determine if the stream is live and propagate styles down to UI.
	    if (duration === Infinity) {
	      this.addClass('vjs-live');
	    } else {
	      this.removeClass('vjs-live');
	    }
	  }
	};

	/**
	 * Fired when the volume changes
	 * @event volumechange
	 */
	vjs.Player.prototype.onVolumeChange;

	/**
	 * Fired when the player switches in or out of fullscreen mode
	 * @event fullscreenchange
	 */
	vjs.Player.prototype.onFullscreenChange = function() {
	  if (this.isFullscreen()) {
	    this.addClass('vjs-fullscreen');
	  } else {
	    this.removeClass('vjs-fullscreen');
	  }
	};

	/**
	 * Fired when an error occurs
	 * @event error
	 */
	vjs.Player.prototype.onError;

	// /* Player API
	// ================================================================================ */

	/**
	 * Object for cached values.
	 * @private
	 */
	vjs.Player.prototype.cache_;

	vjs.Player.prototype.getCache = function(){
	  return this.cache_;
	};

	// Pass values to the playback tech
	vjs.Player.prototype.techCall = function(method, arg){
	  // If it's not ready yet, call method when it is
	  if (this.tech && !this.tech.isReady_) {
	    this.tech.ready(function(){
	      this[method](arg);
	    });

	  // Otherwise call method now
	  } else {
	    try {
	      this.tech[method](arg);
	    } catch(e) {
	      vjs.log(e);
	      throw e;
	    }
	  }
	};

	// Get calls can't wait for the tech, and sometimes don't need to.
	vjs.Player.prototype.techGet = function(method){
	  if (this.tech && this.tech.isReady_) {

	    // Flash likes to die and reload when you hide or reposition it.
	    // In these cases the object methods go away and we get errors.
	    // When that happens we'll catch the errors and inform tech that it's not ready any more.
	    try {
	      return this.tech[method]();
	    } catch(e) {
	      // When building additional tech libs, an expected method may not be defined yet
	      if (this.tech[method] === undefined) {
	        vjs.log('Video.js: ' + method + ' method not defined for '+this.techName+' playback technology.', e);
	      } else {
	        // When a method isn't available on the object it throws a TypeError
	        if (e.name == 'TypeError') {
	          vjs.log('Video.js: ' + method + ' unavailable on '+this.techName+' playback technology element.', e);
	          this.tech.isReady_ = false;
	        } else {
	          vjs.log(e);
	        }
	      }
	      throw e;
	    }
	  }

	  return;
	};

	/**
	 * start media playback
	 *
	 *     myPlayer.play();
	 *
	 * @return {vjs.Player} self
	 */
	vjs.Player.prototype.play = function(){
	  this.techCall('play');
	  return this;
	};

	/**
	 * Pause the video playback
	 *
	 *     myPlayer.pause();
	 *
	 * @return {vjs.Player} self
	 */
	vjs.Player.prototype.pause = function(){
	  this.techCall('pause');
	  return this;
	};

	/**
	 * Check if the player is paused
	 *
	 *     var isPaused = myPlayer.paused();
	 *     var isPlaying = !myPlayer.paused();
	 *
	 * @return {Boolean} false if the media is currently playing, or true otherwise
	 */
	vjs.Player.prototype.paused = function(){
	  // The initial state of paused should be true (in Safari it's actually false)
	  return (this.techGet('paused') === false) ? false : true;
	};

	/**
	 * Get or set the current time (in seconds)
	 *
	 *     // get
	 *     var whereYouAt = myPlayer.currentTime();
	 *
	 *     // set
	 *     myPlayer.currentTime(120); // 2 minutes into the video
	 *
	 * @param  {Number|String=} seconds The time to seek to
	 * @return {Number}        The time in seconds, when not setting
	 * @return {vjs.Player}    self, when the current time is set
	 */
	vjs.Player.prototype.currentTime = function(seconds){
	  if (seconds !== undefined) {

	    this.techCall('setCurrentTime', seconds);

	    return this;
	  }

	  // cache last currentTime and return. default to 0 seconds
	  //
	  // Caching the currentTime is meant to prevent a massive amount of reads on the tech's
	  // currentTime when scrubbing, but may not provide much performance benefit afterall.
	  // Should be tested. Also something has to read the actual current time or the cache will
	  // never get updated.
	  return this.cache_.currentTime = (this.techGet('currentTime') || 0);
	};

	/**
	 * Get the length in time of the video in seconds
	 *
	 *     var lengthOfVideo = myPlayer.duration();
	 *
	 * **NOTE**: The video must have started loading before the duration can be
	 * known, and in the case of Flash, may not be known until the video starts
	 * playing.
	 *
	 * @return {Number} The duration of the video in seconds
	 */
	vjs.Player.prototype.duration = function(seconds){
	  if (seconds !== undefined) {

	    // cache the last set value for optimized scrubbing (esp. Flash)
	    this.cache_.duration = parseFloat(seconds);

	    return this;
	  }

	  if (this.cache_.duration === undefined) {
	    this.onDurationChange();
	  }

	  return this.cache_.duration || 0;
	};

	/**
	 * Calculates how much time is left.
	 *
	 *     var timeLeft = myPlayer.remainingTime();
	 *
	 * Not a native video element function, but useful
	 * @return {Number} The time remaining in seconds
	 */
	vjs.Player.prototype.remainingTime = function(){
	  return this.duration() - this.currentTime();
	};

	// http://dev.w3.org/html5/spec/video.html#dom-media-buffered
	// Buffered returns a timerange object.
	// Kind of like an array of portions of the video that have been downloaded.

	/**
	 * Get a TimeRange object with the times of the video that have been downloaded
	 *
	 * If you just want the percent of the video that's been downloaded,
	 * use bufferedPercent.
	 *
	 *     // Number of different ranges of time have been buffered. Usually 1.
	 *     numberOfRanges = bufferedTimeRange.length,
	 *
	 *     // Time in seconds when the first range starts. Usually 0.
	 *     firstRangeStart = bufferedTimeRange.start(0),
	 *
	 *     // Time in seconds when the first range ends
	 *     firstRangeEnd = bufferedTimeRange.end(0),
	 *
	 *     // Length in seconds of the first time range
	 *     firstRangeLength = firstRangeEnd - firstRangeStart;
	 *
	 * @return {Object} A mock TimeRange object (following HTML spec)
	 */
	vjs.Player.prototype.buffered = function(){
	  var buffered = this.techGet('buffered');

	  if (!buffered || !buffered.length) {
	    buffered = vjs.createTimeRange(0,0);
	  }

	  return buffered;
	};

	/**
	 * Get the percent (as a decimal) of the video that's been downloaded
	 *
	 *     var howMuchIsDownloaded = myPlayer.bufferedPercent();
	 *
	 * 0 means none, 1 means all.
	 * (This method isn't in the HTML5 spec, but it's very convenient)
	 *
	 * @return {Number} A decimal between 0 and 1 representing the percent
	 */
	vjs.Player.prototype.bufferedPercent = function(){
	  var duration = this.duration(),
	      buffered = this.buffered(),
	      bufferedDuration = 0,
	      start, end;

	  if (!duration) {
	    return 0;
	  }

	  for (var i=0; i<buffered.length; i++){
	    start = buffered.start(i);
	    end   = buffered.end(i);

	    // buffered end can be bigger than duration by a very small fraction
	    if (end > duration) {
	      end = duration;
	    }

	    bufferedDuration += end - start;
	  }

	  return bufferedDuration / duration;
	};

	/**
	 * Get the ending time of the last buffered time range
	 *
	 * This is used in the progress bar to encapsulate all time ranges.
	 * @return {Number} The end of the last buffered time range
	 */
	vjs.Player.prototype.bufferedEnd = function(){
	  var buffered = this.buffered(),
	      duration = this.duration(),
	      end = buffered.end(buffered.length-1);

	  if (end > duration) {
	    end = duration;
	  }

	  return end;
	};

	/**
	 * Get or set the current volume of the media
	 *
	 *     // get
	 *     var howLoudIsIt = myPlayer.volume();
	 *
	 *     // set
	 *     myPlayer.volume(0.5); // Set volume to half
	 *
	 * 0 is off (muted), 1.0 is all the way up, 0.5 is half way.
	 *
	 * @param  {Number} percentAsDecimal The new volume as a decimal percent
	 * @return {Number}                  The current volume, when getting
	 * @return {vjs.Player}              self, when setting
	 */
	vjs.Player.prototype.volume = function(percentAsDecimal){
	  var vol;

	  if (percentAsDecimal !== undefined) {
	    vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))); // Force value to between 0 and 1
	    this.cache_.volume = vol;
	    this.techCall('setVolume', vol);
	    vjs.setLocalStorage('volume', vol);
	    return this;
	  }

	  // Default to 1 when returning current volume.
	  vol = parseFloat(this.techGet('volume'));
	  return (isNaN(vol)) ? 1 : vol;
	};


	/**
	 * Get the current muted state, or turn mute on or off
	 *
	 *     // get
	 *     var isVolumeMuted = myPlayer.muted();
	 *
	 *     // set
	 *     myPlayer.muted(true); // mute the volume
	 *
	 * @param  {Boolean=} muted True to mute, false to unmute
	 * @return {Boolean} True if mute is on, false if not, when getting
	 * @return {vjs.Player} self, when setting mute
	 */
	vjs.Player.prototype.muted = function(muted){
	  if (muted !== undefined) {
	    this.techCall('setMuted', muted);
	    return this;
	  }
	  return this.techGet('muted') || false; // Default to false
	};

	// Check if current tech can support native fullscreen
	// (e.g. with built in controls like iOS, so not our flash swf)
	vjs.Player.prototype.supportsFullScreen = function(){
	  return this.techGet('supportsFullScreen') || false;
	};

	/**
	 * is the player in fullscreen
	 * @type {Boolean}
	 * @private
	 */
	vjs.Player.prototype.isFullscreen_ = false;

	/**
	 * Check if the player is in fullscreen mode
	 *
	 *     // get
	 *     var fullscreenOrNot = myPlayer.isFullscreen();
	 *
	 *     // set
	 *     myPlayer.isFullscreen(true); // tell the player it's in fullscreen
	 *
	 * NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
	 * property and instead document.fullscreenElement is used. But isFullscreen is
	 * still a valuable property for internal player workings.
	 *
	 * @param  {Boolean=} isFS Update the player's fullscreen state
	 * @return {Boolean} true if fullscreen, false if not
	 * @return {vjs.Player} self, when setting
	 */
	vjs.Player.prototype.isFullscreen = function(isFS){
	  if (isFS !== undefined) {
	    this.isFullscreen_ = !!isFS;
	    return this;
	  }
	  return this.isFullscreen_;
	};

	/**
	 * Old naming for isFullscreen()
	 * @deprecated for lowercase 's' version
	 */
	vjs.Player.prototype.isFullScreen = function(isFS){
	  vjs.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');
	  return this.isFullscreen(isFS);
	};

	/**
	 * Increase the size of the video to full screen
	 *
	 *     myPlayer.requestFullscreen();
	 *
	 * In some browsers, full screen is not supported natively, so it enters
	 * "full window mode", where the video fills the browser window.
	 * In browsers and devices that support native full screen, sometimes the
	 * browser's default controls will be shown, and not the Video.js custom skin.
	 * This includes most mobile devices (iOS, Android) and older versions of
	 * Safari.
	 *
	 * @return {vjs.Player} self
	 */
	vjs.Player.prototype.requestFullscreen = function(){
	  var fsApi = vjs.browser.fullscreenAPI;

	  this.isFullscreen(true);

	  if (fsApi) {
	    // the browser supports going fullscreen at the element level so we can
	    // take the controls fullscreen as well as the video

	    // Trigger fullscreenchange event after change
	    // We have to specifically add this each time, and remove
	    // when canceling fullscreen. Otherwise if there's multiple
	    // players on a page, they would all be reacting to the same fullscreen
	    // events
	    vjs.on(document, fsApi['fullscreenchange'], vjs.bind(this, function(e){
	      this.isFullscreen(document[fsApi.fullscreenElement]);

	      // If cancelling fullscreen, remove event listener.
	      if (this.isFullscreen() === false) {
	        vjs.off(document, fsApi['fullscreenchange'], arguments.callee);
	      }

	      this.trigger('fullscreenchange');
	    }));

	    this.el_[fsApi.requestFullscreen]();

	  } else if (this.tech.supportsFullScreen()) {
	    // we can't take the video.js controls fullscreen but we can go fullscreen
	    // with native controls
	    this.techCall('enterFullScreen');
	  } else {
	    // fullscreen isn't supported so we'll just stretch the video element to
	    // fill the viewport
	    this.enterFullWindow();
	    this.trigger('fullscreenchange');
	  }

	  return this;
	};

	/**
	 * Old naming for requestFullscreen
	 * @deprecated for lower case 's' version
	 */
	vjs.Player.prototype.requestFullScreen = function(){
	  vjs.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');
	  return this.requestFullscreen();
	};


	/**
	 * Return the video to its normal size after having been in full screen mode
	 *
	 *     myPlayer.exitFullscreen();
	 *
	 * @return {vjs.Player} self
	 */
	vjs.Player.prototype.exitFullscreen = function(){
	  var fsApi = vjs.browser.fullscreenAPI;
	  this.isFullscreen(false);

	  // Check for browser element fullscreen support
	  if (fsApi) {
	    document[fsApi.exitFullscreen]();
	  } else if (this.tech.supportsFullScreen()) {
	   this.techCall('exitFullScreen');
	  } else {
	   this.exitFullWindow();
	   this.trigger('fullscreenchange');
	  }

	  return this;
	};

	/**
	 * Old naming for exitFullscreen
	 * @deprecated for exitFullscreen
	 */
	vjs.Player.prototype.cancelFullScreen = function(){
	  vjs.log.warn('player.cancelFullScreen() has been deprecated, use player.exitFullscreen()');
	  return this.exitFullscreen();
	};

	// When fullscreen isn't supported we can stretch the video container to as wide as the browser will let us.
	vjs.Player.prototype.enterFullWindow = function(){
	  this.isFullWindow = true;

	  // Storing original doc overflow value to return to when fullscreen is off
	  this.docOrigOverflow = document.documentElement.style.overflow;

	  // Add listener for esc key to exit fullscreen
	  vjs.on(document, 'keydown', vjs.bind(this, this.fullWindowOnEscKey));

	  // Hide any scroll bars
	  document.documentElement.style.overflow = 'hidden';

	  // Apply fullscreen styles
	  vjs.addClass(document.body, 'vjs-full-window');

	  this.trigger('enterFullWindow');
	};
	vjs.Player.prototype.fullWindowOnEscKey = function(event){
	  if (event.keyCode === 27) {
	    if (this.isFullscreen() === true) {
	      this.exitFullscreen();
	    } else {
	      this.exitFullWindow();
	    }
	  }
	};

	vjs.Player.prototype.exitFullWindow = function(){
	  this.isFullWindow = false;
	  vjs.off(document, 'keydown', this.fullWindowOnEscKey);

	  // Unhide scroll bars.
	  document.documentElement.style.overflow = this.docOrigOverflow;

	  // Remove fullscreen styles
	  vjs.removeClass(document.body, 'vjs-full-window');

	  // Resize the box, controller, and poster to original sizes
	  // this.positionAll();
	  this.trigger('exitFullWindow');
	};

	vjs.Player.prototype.selectSource = function(sources){
	  // Loop through each playback technology in the options order
	  for (var i=0,j=this.options_['techOrder'];i<j.length;i++) {
	    var techName = vjs.capitalize(j[i]),
	        tech = window['videojs'][techName];

	    // Check if the current tech is defined before continuing
	    if (!tech) {
	      vjs.log.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
	      continue;
	    }

	    // Check if the browser supports this technology
	    if (tech.isSupported()) {
	      // Loop through each source object
	      for (var a=0,b=sources;a<b.length;a++) {
	        var source = b[a];

	        // Check if source can be played with this technology
	        if (tech['canPlaySource'](source)) {
	          return { source: source, tech: techName };
	        }
	      }
	    }
	  }

	  return false;
	};

	/**
	 * The source function updates the video source
	 *
	 * There are three types of variables you can pass as the argument.
	 *
	 * **URL String**: A URL to the the video file. Use this method if you are sure
	 * the current playback technology (HTML5/Flash) can support the source you
	 * provide. Currently only MP4 files can be used in both HTML5 and Flash.
	 *
	 *     myPlayer.src("http://www.example.com/path/to/video.mp4");
	 *
	 * **Source Object (or element):** A javascript object containing information
	 * about the source file. Use this method if you want the player to determine if
	 * it can support the file using the type information.
	 *
	 *     myPlayer.src({ type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" });
	 *
	 * **Array of Source Objects:** To provide multiple versions of the source so
	 * that it can be played using HTML5 across browsers you can use an array of
	 * source objects. Video.js will detect which version is supported and load that
	 * file.
	 *
	 *     myPlayer.src([
	 *       { type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" },
	 *       { type: "video/webm", src: "http://www.example.com/path/to/video.webm" },
	 *       { type: "video/ogg", src: "http://www.example.com/path/to/video.ogv" }
	 *     ]);
	 *
	 * @param  {String|Object|Array=} source The source URL, object, or array of sources
	 * @return {String} The current video source when getting
	 * @return {String} The player when setting
	 */
	vjs.Player.prototype.src = function(source){
	  if (source === undefined) {
	    return this.techGet('src');
	  }

	  // case: Array of source objects to choose from and pick the best to play
	  if (vjs.obj.isArray(source)) {
	    this.sourceList_(source);

	  // case: URL String (http://myvideo...)
	  } else if (typeof source === 'string') {
	    // create a source object from the string
	    this.src({ src: source });

	  // case: Source object { src: '', type: '' ... }
	  } else if (source instanceof Object) {
	    // check if the source has a type and the loaded tech cannot play the source
	    // if there's no type we'll just try the current tech
	    if (source.type && !window['videojs'][this.techName]['canPlaySource'](source)) {
	      // create a source list with the current source and send through
	      // the tech loop to check for a compatible technology
	      this.sourceList_([source]);
	    } else {
	      this.cache_.src = source.src;
	      this.currentType_ = source.type || '';

	      // wait until the tech is ready to set the source
	      this.ready(function(){

	        // The setSource tech method was added with source handlers
	        // so older techs won't support it
	        // We need to check the direct prototype for the case where subclasses
	        // of the tech do not support source handlers
	        if (window['videojs'][this.techName].prototype.hasOwnProperty('setSource')) {
	          this.techCall('setSource', source);
	        } else {
	          this.techCall('src', source.src);
	        }

	        if (this.options_['preload'] == 'auto') {
	          this.load();
	        }

	        if (this.options_['autoplay']) {
	          this.play();
	        }
	      });
	    }
	  }

	  return this;
	};

	/**
	 * Handle an array of source objects
	 * @param  {[type]} sources Array of source objects
	 * @private
	 */
	vjs.Player.prototype.sourceList_ = function(sources){
	  var sourceTech = this.selectSource(sources);

	  if (sourceTech) {
	    if (sourceTech.tech === this.techName) {
	      // if this technology is already loaded, set the source
	      this.src(sourceTech.source);
	    } else {
	      // load this technology with the chosen source
	      this.loadTech(sourceTech.tech, sourceTech.source);
	    }
	  } else {
	    // We need to wrap this in a timeout to give folks a chance to add error event handlers
	    this.setTimeout( function() {
	      this.error({ code: 4, message: this.localize(this.options()['notSupportedMessage']) });
	    }, 0);

	    // we could not find an appropriate tech, but let's still notify the delegate that this is it
	    // this needs a better comment about why this is needed
	    this.triggerReady();
	  }
	};

	/**
	 * Begin loading the src data.
	 * @return {vjs.Player} Returns the player
	 */
	vjs.Player.prototype.load = function(){
	  this.techCall('load');
	  return this;
	};

	/**
	 * Returns the fully qualified URL of the current source value e.g. http://mysite.com/video.mp4
	 * Can be used in conjuction with `currentType` to assist in rebuilding the current source object.
	 * @return {String} The current source
	 */
	vjs.Player.prototype.currentSrc = function(){
	  return this.techGet('currentSrc') || this.cache_.src || '';
	};

	/**
	 * Get the current source type e.g. video/mp4
	 * This can allow you rebuild the current source object so that you could load the same
	 * source and tech later
	 * @return {String} The source MIME type
	 */
	vjs.Player.prototype.currentType = function(){
	    return this.currentType_ || '';
	};

	/**
	 * Get or set the preload attribute.
	 * @return {String} The preload attribute value when getting
	 * @return {vjs.Player} Returns the player when setting
	 */
	vjs.Player.prototype.preload = function(value){
	  if (value !== undefined) {
	    this.techCall('setPreload', value);
	    this.options_['preload'] = value;
	    return this;
	  }
	  return this.techGet('preload');
	};

	/**
	 * Get or set the autoplay attribute.
	 * @return {String} The autoplay attribute value when getting
	 * @return {vjs.Player} Returns the player when setting
	 */
	vjs.Player.prototype.autoplay = function(value){
	  if (value !== undefined) {
	    this.techCall('setAutoplay', value);
	    this.options_['autoplay'] = value;
	    return this;
	  }
	  return this.techGet('autoplay', value);
	};

	/**
	 * Get or set the loop attribute on the video element.
	 * @return {String} The loop attribute value when getting
	 * @return {vjs.Player} Returns the player when setting
	 */
	vjs.Player.prototype.loop = function(value){
	  if (value !== undefined) {
	    this.techCall('setLoop', value);
	    this.options_['loop'] = value;
	    return this;
	  }
	  return this.techGet('loop');
	};

	/**
	 * the url of the poster image source
	 * @type {String}
	 * @private
	 */
	vjs.Player.prototype.poster_;

	/**
	 * get or set the poster image source url
	 *
	 * ##### EXAMPLE:
	 *
	 *     // getting
	 *     var currentPoster = myPlayer.poster();
	 *
	 *     // setting
	 *     myPlayer.poster('http://example.com/myImage.jpg');
	 *
	 * @param  {String=} [src] Poster image source URL
	 * @return {String} poster URL when getting
	 * @return {vjs.Player} self when setting
	 */
	vjs.Player.prototype.poster = function(src){
	  if (src === undefined) {
	    return this.poster_;
	  }

	  // The correct way to remove a poster is to set as an empty string
	  // other falsey values will throw errors
	  if (!src) {
	    src = '';
	  }

	  // update the internal poster variable
	  this.poster_ = src;

	  // update the tech's poster
	  this.techCall('setPoster', src);

	  // alert components that the poster has been set
	  this.trigger('posterchange');

	  return this;
	};

	/**
	 * Whether or not the controls are showing
	 * @type {Boolean}
	 * @private
	 */
	vjs.Player.prototype.controls_;

	/**
	 * Get or set whether or not the controls are showing.
	 * @param  {Boolean} controls Set controls to showing or not
	 * @return {Boolean}    Controls are showing
	 */
	vjs.Player.prototype.controls = function(bool){
	  if (bool !== undefined) {
	    bool = !!bool; // force boolean
	    // Don't trigger a change event unless it actually changed
	    if (this.controls_ !== bool) {
	      this.controls_ = bool;
	      if (bool) {
	        this.removeClass('vjs-controls-disabled');
	        this.addClass('vjs-controls-enabled');
	        this.trigger('controlsenabled');
	      } else {
	        this.removeClass('vjs-controls-enabled');
	        this.addClass('vjs-controls-disabled');
	        this.trigger('controlsdisabled');
	      }
	    }
	    return this;
	  }
	  return this.controls_;
	};

	vjs.Player.prototype.usingNativeControls_;

	/**
	 * Toggle native controls on/off. Native controls are the controls built into
	 * devices (e.g. default iPhone controls), Flash, or other techs
	 * (e.g. Vimeo Controls)
	 *
	 * **This should only be set by the current tech, because only the tech knows
	 * if it can support native controls**
	 *
	 * @param  {Boolean} bool    True signals that native controls are on
	 * @return {vjs.Player}      Returns the player
	 * @private
	 */
	vjs.Player.prototype.usingNativeControls = function(bool){
	  if (bool !== undefined) {
	    bool = !!bool; // force boolean
	    // Don't trigger a change event unless it actually changed
	    if (this.usingNativeControls_ !== bool) {
	      this.usingNativeControls_ = bool;
	      if (bool) {
	        this.addClass('vjs-using-native-controls');

	        /**
	         * player is using the native device controls
	         *
	         * @event usingnativecontrols
	         * @memberof vjs.Player
	         * @instance
	         * @private
	         */
	        this.trigger('usingnativecontrols');
	      } else {
	        this.removeClass('vjs-using-native-controls');

	        /**
	         * player is using the custom HTML controls
	         *
	         * @event usingcustomcontrols
	         * @memberof vjs.Player
	         * @instance
	         * @private
	         */
	        this.trigger('usingcustomcontrols');
	      }
	    }
	    return this;
	  }
	  return this.usingNativeControls_;
	};

	/**
	 * Store the current media error
	 * @type {Object}
	 * @private
	 */
	vjs.Player.prototype.error_ = null;

	/**
	 * Set or get the current MediaError
	 * @param  {*} err A MediaError or a String/Number to be turned into a MediaError
	 * @return {vjs.MediaError|null}     when getting
	 * @return {vjs.Player}              when setting
	 */
	vjs.Player.prototype.error = function(err){
	  if (err === undefined) {
	    return this.error_;
	  }

	  // restoring to default
	  if (err === null) {
	    this.error_ = err;
	    this.removeClass('vjs-error');
	    return this;
	  }

	  // error instance
	  if (err instanceof vjs.MediaError) {
	    this.error_ = err;
	  } else {
	    this.error_ = new vjs.MediaError(err);
	  }

	  // fire an error event on the player
	  this.trigger('error');

	  // add the vjs-error classname to the player
	  this.addClass('vjs-error');

	  // log the name of the error type and any message
	  // ie8 just logs "[object object]" if you just log the error object
	  vjs.log.error('(CODE:'+this.error_.code+' '+vjs.MediaError.errorTypes[this.error_.code]+')', this.error_.message, this.error_);

	  return this;
	};

	/**
	 * Returns whether or not the player is in the "ended" state.
	 * @return {Boolean} True if the player is in the ended state, false if not.
	 */
	vjs.Player.prototype.ended = function(){ return this.techGet('ended'); };

	/**
	 * Returns whether or not the player is in the "seeking" state.
	 * @return {Boolean} True if the player is in the seeking state, false if not.
	 */
	vjs.Player.prototype.seeking = function(){ return this.techGet('seeking'); };

	// When the player is first initialized, trigger activity so components
	// like the control bar show themselves if needed
	vjs.Player.prototype.userActivity_ = true;
	vjs.Player.prototype.reportUserActivity = function(event){
	  this.userActivity_ = true;
	};

	vjs.Player.prototype.userActive_ = true;
	vjs.Player.prototype.userActive = function(bool){
	  if (bool !== undefined) {
	    bool = !!bool;
	    if (bool !== this.userActive_) {
	      this.userActive_ = bool;
	      if (bool) {
	        // If the user was inactive and is now active we want to reset the
	        // inactivity timer
	        this.userActivity_ = true;
	        this.removeClass('vjs-user-inactive');
	        this.addClass('vjs-user-active');
	        this.trigger('useractive');
	      } else {
	        // We're switching the state to inactive manually, so erase any other
	        // activity
	        this.userActivity_ = false;

	        // Chrome/Safari/IE have bugs where when you change the cursor it can
	        // trigger a mousemove event. This causes an issue when you're hiding
	        // the cursor when the user is inactive, and a mousemove signals user
	        // activity. Making it impossible to go into inactive mode. Specifically
	        // this happens in fullscreen when we really need to hide the cursor.
	        //
	        // When this gets resolved in ALL browsers it can be removed
	        // https://code.google.com/p/chromium/issues/detail?id=103041
	        if(this.tech) {
	          this.tech.one('mousemove', function(e){
	            e.stopPropagation();
	            e.preventDefault();
	          });
	        }

	        this.removeClass('vjs-user-active');
	        this.addClass('vjs-user-inactive');
	        this.trigger('userinactive');
	      }
	    }
	    return this;
	  }
	  return this.userActive_;
	};

	vjs.Player.prototype.listenForUserActivity = function(){
	  var onActivity, onMouseMove, onMouseDown, mouseInProgress, onMouseUp,
	      activityCheck, inactivityTimeout, lastMoveX, lastMoveY;

	  onActivity = vjs.bind(this, this.reportUserActivity);

	  onMouseMove = function(e) {
	    // #1068 - Prevent mousemove spamming
	    // Chrome Bug: https://code.google.com/p/chromium/issues/detail?id=366970
	    if(e.screenX != lastMoveX || e.screenY != lastMoveY) {
	      lastMoveX = e.screenX;
	      lastMoveY = e.screenY;
	      onActivity();
	    }
	  };

	  onMouseDown = function() {
	    onActivity();
	    // For as long as the they are touching the device or have their mouse down,
	    // we consider them active even if they're not moving their finger or mouse.
	    // So we want to continue to update that they are active
	    this.clearInterval(mouseInProgress);
	    // Setting userActivity=true now and setting the interval to the same time
	    // as the activityCheck interval (250) should ensure we never miss the
	    // next activityCheck
	    mouseInProgress = this.setInterval(onActivity, 250);
	  };

	  onMouseUp = function(event) {
	    onActivity();
	    // Stop the interval that maintains activity if the mouse/touch is down
	    this.clearInterval(mouseInProgress);
	  };

	  // Any mouse movement will be considered user activity
	  this.on('mousedown', onMouseDown);
	  this.on('mousemove', onMouseMove);
	  this.on('mouseup', onMouseUp);

	  // Listen for keyboard navigation
	  // Shouldn't need to use inProgress interval because of key repeat
	  this.on('keydown', onActivity);
	  this.on('keyup', onActivity);

	  // Run an interval every 250 milliseconds instead of stuffing everything into
	  // the mousemove/touchmove function itself, to prevent performance degradation.
	  // `this.reportUserActivity` simply sets this.userActivity_ to true, which
	  // then gets picked up by this loop
	  // http://ejohn.org/blog/learning-from-twitter/
	  activityCheck = this.setInterval(function() {
	    // Check to see if mouse/touch activity has happened
	    if (this.userActivity_) {
	      // Reset the activity tracker
	      this.userActivity_ = false;

	      // If the user state was inactive, set the state to active
	      this.userActive(true);

	      // Clear any existing inactivity timeout to start the timer over
	      this.clearTimeout(inactivityTimeout);

	      var timeout = this.options()['inactivityTimeout'];
	      if (timeout > 0) {
	          // In <timeout> milliseconds, if no more activity has occurred the
	          // user will be considered inactive
	          inactivityTimeout = this.setTimeout(function () {
	              // Protect against the case where the inactivityTimeout can trigger just
	              // before the next user activity is picked up by the activityCheck loop
	              // causing a flicker
	              if (!this.userActivity_) {
	                  this.userActive(false);
	              }
	          }, timeout);
	      }
	    }
	  }, 250);
	};

	/**
	 * Gets or sets the current playback rate.
	 * @param  {Boolean} rate   New playback rate to set.
	 * @return {Number}         Returns the new playback rate when setting
	 * @return {Number}         Returns the current playback rate when getting
	 */
	vjs.Player.prototype.playbackRate = function(rate) {
	  if (rate !== undefined) {
	    this.techCall('setPlaybackRate', rate);
	    return this;
	  }

	  if (this.tech && this.tech['featuresPlaybackRate']) {
	    return this.techGet('playbackRate');
	  } else {
	    return 1.0;
	  }

	};

	/**
	 * Store the current audio state
	 * @type {Boolean}
	 * @private
	 */
	vjs.Player.prototype.isAudio_ = false;

	/**
	 * Gets or sets the audio flag
	 *
	 * @param  {Boolean} bool    True signals that this is an audio player.
	 * @return {Boolean}         Returns true if player is audio, false if not when getting
	 * @return {vjs.Player}      Returns the player if setting
	 * @private
	 */
	vjs.Player.prototype.isAudio = function(bool) {
	  if (bool !== undefined) {
	    this.isAudio_ = !!bool;
	    return this;
	  }

	  return this.isAudio_;
	};

	/**
	 * Returns the current state of network activity for the element, from
	 * the codes in the list below.
	 * - NETWORK_EMPTY (numeric value 0)
	 *   The element has not yet been initialised. All attributes are in
	 *   their initial states.
	 * - NETWORK_IDLE (numeric value 1)
	 *   The element's resource selection algorithm is active and has
	 *   selected a resource, but it is not actually using the network at
	 *   this time.
	 * - NETWORK_LOADING (numeric value 2)
	 *   The user agent is actively trying to download data.
	 * - NETWORK_NO_SOURCE (numeric value 3)
	 *   The element's resource selection algorithm is active, but it has
	 *   not yet found a resource to use.
	 * @return {Number} the current network activity state
	 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#network-states
	 */
	vjs.Player.prototype.networkState = function(){
	  return this.techGet('networkState');
	};

	/**
	 * Returns a value that expresses the current state of the element
	 * with respect to rendering the current playback position, from the
	 * codes in the list below.
	 * - HAVE_NOTHING (numeric value 0)
	 *   No information regarding the media resource is available.
	 * - HAVE_METADATA (numeric value 1)
	 *   Enough of the resource has been obtained that the duration of the
	 *   resource is available.
	 * - HAVE_CURRENT_DATA (numeric value 2)
	 *   Data for the immediate current playback position is available.
	 * - HAVE_FUTURE_DATA (numeric value 3)
	 *   Data for the immediate current playback position is available, as
	 *   well as enough data for the user agent to advance the current
	 *   playback position in the direction of playback.
	 * - HAVE_ENOUGH_DATA (numeric value 4)
	 *   The user agent estimates that enough data is available for
	 *   playback to proceed uninterrupted.
	 * @return {Number} the current playback rendering state
	 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-readystate
	 */
	vjs.Player.prototype.readyState = function(){
	  return this.techGet('readyState');
	};

	/**
	 * Text tracks are tracks of timed text events.
	 * Captions - text displayed over the video for the hearing impaired
	 * Subtitles - text displayed over the video for those who don't understand language in the video
	 * Chapters - text displayed in a menu allowing the user to jump to particular points (chapters) in the video
	 * Descriptions (not supported yet) - audio descriptions that are read back to the user by a screen reading device
	 */

	/**
	 * Get an array of associated text tracks. captions, subtitles, chapters, descriptions
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-texttracks
	 * @return {Array}           Array of track objects
	 */
	vjs.Player.prototype.textTracks = function(){
	  // cannot use techGet directly because it checks to see whether the tech is ready.
	  // Flash is unlikely to be ready in time but textTracks should still work.
	  return this.tech && this.tech['textTracks']();
	};

	vjs.Player.prototype.remoteTextTracks = function() {
	  return this.tech && this.tech['remoteTextTracks']();
	};

	/**
	 * Add a text track
	 * In addition to the W3C settings we allow adding additional info through options.
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-addtexttrack
	 * @param {String}  kind        Captions, subtitles, chapters, descriptions, or metadata
	 * @param {String=} label       Optional label
	 * @param {String=} language    Optional language
	 */
	vjs.Player.prototype.addTextTrack = function(kind, label, language) {
	  return this.tech && this.tech['addTextTrack'](kind, label, language);
	};

	vjs.Player.prototype.addRemoteTextTrack = function(options) {
	  return this.tech && this.tech['addRemoteTextTrack'](options);
	};

	vjs.Player.prototype.removeRemoteTextTrack = function(track) {
	  this.tech && this.tech['removeRemoteTextTrack'](track);
	};

	// Methods to add support for
	// initialTime: function(){ return this.techCall('initialTime'); },
	// startOffsetTime: function(){ return this.techCall('startOffsetTime'); },
	// played: function(){ return this.techCall('played'); },
	// seekable: function(){ return this.techCall('seekable'); },
	// videoTracks: function(){ return this.techCall('videoTracks'); },
	// audioTracks: function(){ return this.techCall('audioTracks'); },
	// videoWidth: function(){ return this.techCall('videoWidth'); },
	// videoHeight: function(){ return this.techCall('videoHeight'); },
	// defaultPlaybackRate: function(){ return this.techCall('defaultPlaybackRate'); },
	// mediaGroup: function(){ return this.techCall('mediaGroup'); },
	// controller: function(){ return this.techCall('controller'); },
	// defaultMuted: function(){ return this.techCall('defaultMuted'); }

	// TODO
	// currentSrcList: the array of sources including other formats and bitrates
	// playList: array of source lists in order of playback
	/**
	 * Container of main controls
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @class
	 * @constructor
	 * @extends vjs.Component
	 */
	vjs.ControlBar = vjs.Component.extend();

	vjs.ControlBar.prototype.options_ = {
	  loadEvent: 'play',
	  children: {
	    'playToggle': {},
	    'currentTimeDisplay': {},
	    'timeDivider': {},
	    'durationDisplay': {},
	    'remainingTimeDisplay': {},
	    'liveDisplay': {},
	    'progressControl': {},
	    'fullscreenToggle': {},
	    'volumeControl': {},
	    'muteToggle': {},
	    // 'volumeMenuButton': {},
	    'playbackRateMenuButton': {},
	    'subtitlesButton': {},
	    'captionsButton': {},
	    'chaptersButton': {}
	  }
	};

	vjs.ControlBar.prototype.createEl = function(){
	  return vjs.createEl('div', {
	    className: 'vjs-control-bar'
	  });
	};
	/**
	 * Displays the live indicator
	 * TODO - Future make it click to snap to live
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.LiveDisplay = vjs.Component.extend({
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	  }
	});

	vjs.LiveDisplay.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-live-controls vjs-control'
	  });

	  this.contentEl_ = vjs.createEl('div', {
	    className: 'vjs-live-display',
	    innerHTML: '<span class="vjs-control-text">' + this.localize('Stream Type') + '</span>' + this.localize('LIVE'),
	    'aria-live': 'off'
	  });

	  el.appendChild(this.contentEl_);

	  return el;
	};
	/**
	 * Button to toggle between play and pause
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @class
	 * @constructor
	 */
	vjs.PlayToggle = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);

	    this.on(player, 'play', this.onPlay);
	    this.on(player, 'pause', this.onPause);
	  }
	});

	vjs.PlayToggle.prototype.buttonText = 'Play';

	vjs.PlayToggle.prototype.buildCSSClass = function(){
	  return 'vjs-play-control ' + vjs.Button.prototype.buildCSSClass.call(this);
	};

	// OnClick - Toggle between play and pause
	vjs.PlayToggle.prototype.onClick = function(){
	  if (this.player_.paused()) {
	    this.player_.play();
	  } else {
	    this.player_.pause();
	  }
	};

	  // OnPlay - Add the vjs-playing class to the element so it can change appearance
	vjs.PlayToggle.prototype.onPlay = function(){
	  this.removeClass('vjs-paused');
	  this.addClass('vjs-playing');
	  this.el_.children[0].children[0].innerHTML = this.localize('Pause'); // change the button text to "Pause"
	};

	  // OnPause - Add the vjs-paused class to the element so it can change appearance
	vjs.PlayToggle.prototype.onPause = function(){
	  this.removeClass('vjs-playing');
	  this.addClass('vjs-paused');
	  this.el_.children[0].children[0].innerHTML = this.localize('Play'); // change the button text to "Play"
	};
	/**
	 * Displays the current time
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.CurrentTimeDisplay = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    this.on(player, 'timeupdate', this.updateContent);
	  }
	});

	vjs.CurrentTimeDisplay.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-current-time vjs-time-controls vjs-control'
	  });

	  this.contentEl_ = vjs.createEl('div', {
	    className: 'vjs-current-time-display',
	    innerHTML: '<span class="vjs-control-text">Current Time </span>' + '0:00', // label the current time for screen reader users
	    'aria-live': 'off' // tell screen readers not to automatically read the time as it changes
	  });

	  el.appendChild(this.contentEl_);
	  return el;
	};

	vjs.CurrentTimeDisplay.prototype.updateContent = function(){
	  // Allows for smooth scrubbing, when player can't keep up.
	  var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
	  this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize('Current Time') + '</span> ' + vjs.formatTime(time, this.player_.duration());
	};

	/**
	 * Displays the duration
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.DurationDisplay = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    // this might need to be changed to 'durationchange' instead of 'timeupdate' eventually,
	    // however the durationchange event fires before this.player_.duration() is set,
	    // so the value cannot be written out using this method.
	    // Once the order of durationchange and this.player_.duration() being set is figured out,
	    // this can be updated.
	    this.on(player, 'timeupdate', this.updateContent);
	    this.on(player, 'loadedmetadata', this.updateContent);
	  }
	});

	vjs.DurationDisplay.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-duration vjs-time-controls vjs-control'
	  });

	  this.contentEl_ = vjs.createEl('div', {
	    className: 'vjs-duration-display',
	    innerHTML: '<span class="vjs-control-text">' + this.localize('Duration Time') + '</span> ' + '0:00', // label the duration time for screen reader users
	    'aria-live': 'off' // tell screen readers not to automatically read the time as it changes
	  });

	  el.appendChild(this.contentEl_);
	  return el;
	};

	vjs.DurationDisplay.prototype.updateContent = function(){
	  var duration = this.player_.duration();
	  if (duration) {
	      this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize('Duration Time') + '</span> ' + vjs.formatTime(duration); // label the duration time for screen reader users
	  }
	};

	/**
	 * The separator between the current time and duration
	 *
	 * Can be hidden if it's not needed in the design.
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.TimeDivider = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	  }
	});

	vjs.TimeDivider.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-time-divider',
	    innerHTML: '<div><span>/</span></div>'
	  });
	};

	/**
	 * Displays the time left in the video
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.RemainingTimeDisplay = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    this.on(player, 'timeupdate', this.updateContent);
	  }
	});

	vjs.RemainingTimeDisplay.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-remaining-time vjs-time-controls vjs-control'
	  });

	  this.contentEl_ = vjs.createEl('div', {
	    className: 'vjs-remaining-time-display',
	    innerHTML: '<span class="vjs-control-text">' + this.localize('Remaining Time') + '</span> ' + '-0:00', // label the remaining time for screen reader users
	    'aria-live': 'off' // tell screen readers not to automatically read the time as it changes
	  });

	  el.appendChild(this.contentEl_);
	  return el;
	};

	vjs.RemainingTimeDisplay.prototype.updateContent = function(){
	  if (this.player_.duration()) {
	    this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize('Remaining Time') + '</span> ' + '-'+ vjs.formatTime(this.player_.remainingTime());
	  }

	  // Allows for smooth scrubbing, when player can't keep up.
	  // var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
	  // this.contentEl_.innerHTML = vjs.formatTime(time, this.player_.duration());
	};
	/**
	 * Toggle fullscreen video
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @class
	 * @extends vjs.Button
	 */
	vjs.FullscreenToggle = vjs.Button.extend({
	  /**
	   * @constructor
	   * @memberof vjs.FullscreenToggle
	   * @instance
	   */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);
	  }
	});

	vjs.FullscreenToggle.prototype.buttonText = 'Fullscreen';

	vjs.FullscreenToggle.prototype.buildCSSClass = function(){
	  return 'vjs-fullscreen-control ' + vjs.Button.prototype.buildCSSClass.call(this);
	};

	vjs.FullscreenToggle.prototype.onClick = function(){
	  if (!this.player_.isFullscreen()) {
	    this.player_.requestFullscreen();
	    this.controlText_.innerHTML = this.localize('Non-Fullscreen');
	  } else {
	    this.player_.exitFullscreen();
	    this.controlText_.innerHTML = this.localize('Fullscreen');
	  }
	};
	/**
	 * The Progress Control component contains the seek bar, load progress,
	 * and play progress
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.ProgressControl = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	  }
	});

	vjs.ProgressControl.prototype.options_ = {
	  children: {
	    'seekBar': {}
	  }
	};

	vjs.ProgressControl.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-progress-control vjs-control'
	  });
	};

	/**
	 * Seek Bar and holder for the progress bars
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.SeekBar = vjs.Slider.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Slider.call(this, player, options);
	    this.on(player, 'timeupdate', this.updateARIAAttributes);
	    player.ready(vjs.bind(this, this.updateARIAAttributes));
	  }
	});

	vjs.SeekBar.prototype.options_ = {
	  children: {
	    'loadProgressBar': {},
	    'playProgressBar': {},
	    'seekHandle': {}
	  },
	  'barName': 'playProgressBar',
	  'handleName': 'seekHandle'
	};

	vjs.SeekBar.prototype.playerEvent = 'timeupdate';

	vjs.SeekBar.prototype.createEl = function(){
	  return vjs.Slider.prototype.createEl.call(this, 'div', {
	    className: 'vjs-progress-holder',
	    'aria-label': 'video progress bar'
	  });
	};

	vjs.SeekBar.prototype.updateARIAAttributes = function(){
	    // Allows for smooth scrubbing, when player can't keep up.
	    var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
	    this.el_.setAttribute('aria-valuenow',vjs.round(this.getPercent()*100, 2)); // machine readable value of progress bar (percentage complete)
	    this.el_.setAttribute('aria-valuetext',vjs.formatTime(time, this.player_.duration())); // human readable value of progress bar (time complete)
	};

	vjs.SeekBar.prototype.getPercent = function(){
	  return this.player_.currentTime() / this.player_.duration();
	};

	vjs.SeekBar.prototype.onMouseDown = function(event){
	  vjs.Slider.prototype.onMouseDown.call(this, event);

	  this.player_.scrubbing = true;
	  this.player_.addClass('vjs-scrubbing');

	  this.videoWasPlaying = !this.player_.paused();
	  this.player_.pause();
	};

	vjs.SeekBar.prototype.onMouseMove = function(event){
	  var newTime = this.calculateDistance(event) * this.player_.duration();

	  // Don't let video end while scrubbing.
	  if (newTime == this.player_.duration()) { newTime = newTime - 0.1; }

	  // Set new time (tell player to seek to new time)
	  this.player_.currentTime(newTime);
	};

	vjs.SeekBar.prototype.onMouseUp = function(event){
	  vjs.Slider.prototype.onMouseUp.call(this, event);

	  this.player_.scrubbing = false;
	  this.player_.removeClass('vjs-scrubbing');
	  if (this.videoWasPlaying) {
	    this.player_.play();
	  }
	};

	vjs.SeekBar.prototype.stepForward = function(){
	  this.player_.currentTime(this.player_.currentTime() + 5); // more quickly fast forward for keyboard-only users
	};

	vjs.SeekBar.prototype.stepBack = function(){
	  this.player_.currentTime(this.player_.currentTime() - 5); // more quickly rewind for keyboard-only users
	};

	/**
	 * Shows load progress
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.LoadProgressBar = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	    this.on(player, 'progress', this.update);
	  }
	});

	vjs.LoadProgressBar.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-load-progress',
	    innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Loaded') + '</span>: 0%</span>'
	  });
	};

	vjs.LoadProgressBar.prototype.update = function(){
	  var i, start, end, part,
	      buffered = this.player_.buffered(),
	      duration = this.player_.duration(),
	      bufferedEnd = this.player_.bufferedEnd(),
	      children = this.el_.children,
	      // get the percent width of a time compared to the total end
	      percentify = function (time, end){
	        var percent = (time / end) || 0; // no NaN
	        return (percent * 100) + '%';
	      };

	  // update the width of the progress bar
	  this.el_.style.width = percentify(bufferedEnd, duration);

	  // add child elements to represent the individual buffered time ranges
	  for (i = 0; i < buffered.length; i++) {
	    start = buffered.start(i),
	    end = buffered.end(i),
	    part = children[i];

	    if (!part) {
	      part = this.el_.appendChild(vjs.createEl());
	    }

	    // set the percent based on the width of the progress bar (bufferedEnd)
	    part.style.left = percentify(start, bufferedEnd);
	    part.style.width = percentify(end - start, bufferedEnd);
	  }

	  // remove unused buffered range elements
	  for (i = children.length; i > buffered.length; i--) {
	    this.el_.removeChild(children[i-1]);
	  }
	};

	/**
	 * Shows play progress
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.PlayProgressBar = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	  }
	});

	vjs.PlayProgressBar.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-play-progress',
	    innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
	  });
	};

	/**
	 * The Seek Handle shows the current position of the playhead during playback,
	 * and can be dragged to adjust the playhead.
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.SeekHandle = vjs.SliderHandle.extend({
	  init: function(player, options) {
	    vjs.SliderHandle.call(this, player, options);
	    this.on(player, 'timeupdate', this.updateContent);
	  }
	});

	/**
	 * The default value for the handle content, which may be read by screen readers
	 *
	 * @type {String}
	 * @private
	 */
	vjs.SeekHandle.prototype.defaultValue = '00:00';

	/** @inheritDoc */
	vjs.SeekHandle.prototype.createEl = function() {
	  return vjs.SliderHandle.prototype.createEl.call(this, 'div', {
	    className: 'vjs-seek-handle',
	    'aria-live': 'off'
	  });
	};

	vjs.SeekHandle.prototype.updateContent = function() {
	  var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
	  this.el_.innerHTML = '<span class="vjs-control-text">' + vjs.formatTime(time, this.player_.duration()) + '</span>';
	};
	/**
	 * The component for controlling the volume level
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.VolumeControl = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    // hide volume controls when they're not supported by the current tech
	    if (player.tech && player.tech['featuresVolumeControl'] === false) {
	      this.addClass('vjs-hidden');
	    }
	    this.on(player, 'loadstart', function(){
	      if (player.tech['featuresVolumeControl'] === false) {
	        this.addClass('vjs-hidden');
	      } else {
	        this.removeClass('vjs-hidden');
	      }
	    });
	  }
	});

	vjs.VolumeControl.prototype.options_ = {
	  children: {
	    'volumeBar': {}
	  }
	};

	vjs.VolumeControl.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-volume-control vjs-control'
	  });
	};

	/**
	 * The bar that contains the volume level and can be clicked on to adjust the level
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.VolumeBar = vjs.Slider.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Slider.call(this, player, options);
	    this.on(player, 'volumechange', this.updateARIAAttributes);
	    player.ready(vjs.bind(this, this.updateARIAAttributes));
	  }
	});

	vjs.VolumeBar.prototype.updateARIAAttributes = function(){
	  // Current value of volume bar as a percentage
	  this.el_.setAttribute('aria-valuenow',vjs.round(this.player_.volume()*100, 2));
	  this.el_.setAttribute('aria-valuetext',vjs.round(this.player_.volume()*100, 2)+'%');
	};

	vjs.VolumeBar.prototype.options_ = {
	  children: {
	    'volumeLevel': {},
	    'volumeHandle': {}
	  },
	  'barName': 'volumeLevel',
	  'handleName': 'volumeHandle'
	};

	vjs.VolumeBar.prototype.playerEvent = 'volumechange';

	vjs.VolumeBar.prototype.createEl = function(){
	  return vjs.Slider.prototype.createEl.call(this, 'div', {
	    className: 'vjs-volume-bar',
	    'aria-label': 'volume level'
	  });
	};

	vjs.VolumeBar.prototype.onMouseMove = function(event) {
	  if (this.player_.muted()) {
	    this.player_.muted(false);
	  }

	  this.player_.volume(this.calculateDistance(event));
	};

	vjs.VolumeBar.prototype.getPercent = function(){
	  if (this.player_.muted()) {
	    return 0;
	  } else {
	    return this.player_.volume();
	  }
	};

	vjs.VolumeBar.prototype.stepForward = function(){
	  this.player_.volume(this.player_.volume() + 0.1);
	};

	vjs.VolumeBar.prototype.stepBack = function(){
	  this.player_.volume(this.player_.volume() - 0.1);
	};

	/**
	 * Shows volume level
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.VolumeLevel = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	  }
	});

	vjs.VolumeLevel.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-volume-level',
	    innerHTML: '<span class="vjs-control-text"></span>'
	  });
	};

	/**
	 * The volume handle can be dragged to adjust the volume level
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	 vjs.VolumeHandle = vjs.SliderHandle.extend();

	 vjs.VolumeHandle.prototype.defaultValue = '00:00';

	 /** @inheritDoc */
	 vjs.VolumeHandle.prototype.createEl = function(){
	   return vjs.SliderHandle.prototype.createEl.call(this, 'div', {
	     className: 'vjs-volume-handle'
	   });
	 };
	/**
	 * A button component for muting the audio
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.MuteToggle = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);

	    this.on(player, 'volumechange', this.update);

	    // hide mute toggle if the current tech doesn't support volume control
	    if (player.tech && player.tech['featuresVolumeControl'] === false) {
	      this.addClass('vjs-hidden');
	    }

	    this.on(player, 'loadstart', function(){
	      if (player.tech['featuresVolumeControl'] === false) {
	        this.addClass('vjs-hidden');
	      } else {
	        this.removeClass('vjs-hidden');
	      }
	    });
	  }
	});

	vjs.MuteToggle.prototype.createEl = function(){
	  return vjs.Button.prototype.createEl.call(this, 'div', {
	    className: 'vjs-mute-control vjs-control',
	    innerHTML: '<div><span class="vjs-control-text">' + this.localize('Mute') + '</span></div>'
	  });
	};

	vjs.MuteToggle.prototype.onClick = function(){
	  this.player_.muted( this.player_.muted() ? false : true );
	};

	vjs.MuteToggle.prototype.update = function(){
	  var vol = this.player_.volume(),
	      level = 3;

	  if (vol === 0 || this.player_.muted()) {
	    level = 0;
	  } else if (vol < 0.33) {
	    level = 1;
	  } else if (vol < 0.67) {
	    level = 2;
	  }

	  // Don't rewrite the button text if the actual text doesn't change.
	  // This causes unnecessary and confusing information for screen reader users.
	  // This check is needed because this function gets called every time the volume level is changed.
	  if(this.player_.muted()){
	      if(this.el_.children[0].children[0].innerHTML!=this.localize('Unmute')){
	          this.el_.children[0].children[0].innerHTML = this.localize('Unmute'); // change the button text to "Unmute"
	      }
	  } else {
	      if(this.el_.children[0].children[0].innerHTML!=this.localize('Mute')){
	          this.el_.children[0].children[0].innerHTML = this.localize('Mute'); // change the button text to "Mute"
	      }
	  }

	  /* TODO improve muted icon classes */
	  for (var i = 0; i < 4; i++) {
	    vjs.removeClass(this.el_, 'vjs-vol-'+i);
	  }
	  vjs.addClass(this.el_, 'vjs-vol-'+level);
	};
	/**
	 * Menu button with a popup for showing the volume slider.
	 * @constructor
	 */
	vjs.VolumeMenuButton = vjs.MenuButton.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.MenuButton.call(this, player, options);

	    // Same listeners as MuteToggle
	    this.on(player, 'volumechange', this.volumeUpdate);

	    // hide mute toggle if the current tech doesn't support volume control
	    if (player.tech && player.tech['featuresVolumeControl'] === false) {
	      this.addClass('vjs-hidden');
	    }
	    this.on(player, 'loadstart', function(){
	      if (player.tech['featuresVolumeControl'] === false) {
	        this.addClass('vjs-hidden');
	      } else {
	        this.removeClass('vjs-hidden');
	      }
	    });
	    this.addClass('vjs-menu-button');
	  }
	});

	vjs.VolumeMenuButton.prototype.createMenu = function(){
	  var menu = new vjs.Menu(this.player_, {
	    contentElType: 'div'
	  });
	  var vc = new vjs.VolumeBar(this.player_, this.options_['volumeBar']);
	  vc.on('focus', function() {
	    menu.lockShowing();
	  });
	  vc.on('blur', function() {
	    menu.unlockShowing();
	  });
	  menu.addChild(vc);
	  return menu;
	};

	vjs.VolumeMenuButton.prototype.onClick = function(){
	  vjs.MuteToggle.prototype.onClick.call(this);
	  vjs.MenuButton.prototype.onClick.call(this);
	};

	vjs.VolumeMenuButton.prototype.createEl = function(){
	  return vjs.Button.prototype.createEl.call(this, 'div', {
	    className: 'vjs-volume-menu-button vjs-menu-button vjs-control',
	    innerHTML: '<div><span class="vjs-control-text">' + this.localize('Mute') + '</span></div>'
	  });
	};
	vjs.VolumeMenuButton.prototype.volumeUpdate = vjs.MuteToggle.prototype.update;
	/**
	 * The component for controlling the playback rate
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.MenuButton.call(this, player, options);

	    this.updateVisibility();
	    this.updateLabel();

	    this.on(player, 'loadstart', this.updateVisibility);
	    this.on(player, 'ratechange', this.updateLabel);
	  }
	});

	vjs.PlaybackRateMenuButton.prototype.buttonText = 'Playback Rate';
	vjs.PlaybackRateMenuButton.prototype.className = 'vjs-playback-rate';

	vjs.PlaybackRateMenuButton.prototype.createEl = function(){
	  var el = vjs.MenuButton.prototype.createEl.call(this);

	  this.labelEl_ = vjs.createEl('div', {
	    className: 'vjs-playback-rate-value',
	    innerHTML: 1.0
	  });

	  el.appendChild(this.labelEl_);

	  return el;
	};

	// Menu creation
	vjs.PlaybackRateMenuButton.prototype.createMenu = function(){
	  var menu = new vjs.Menu(this.player());
	  var rates = this.player().options()['playbackRates'];

	  if (rates) {
	    for (var i = rates.length - 1; i >= 0; i--) {
	      menu.addChild(
	        new vjs.PlaybackRateMenuItem(this.player(), { 'rate': rates[i] + 'x'})
	        );
	    }
	  }

	  return menu;
	};

	vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function(){
	  // Current playback rate
	  this.el().setAttribute('aria-valuenow', this.player().playbackRate());
	};

	vjs.PlaybackRateMenuButton.prototype.onClick = function(){
	  // select next rate option
	  var currentRate = this.player().playbackRate();
	  var rates = this.player().options()['playbackRates'];
	  // this will select first one if the last one currently selected
	  var newRate = rates[0];
	  for (var i = 0; i <rates.length ; i++) {
	    if (rates[i] > currentRate) {
	      newRate = rates[i];
	      break;
	    }
	  }
	  this.player().playbackRate(newRate);
	};

	vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function(){
	  return this.player().tech
	    && this.player().tech['featuresPlaybackRate']
	    && this.player().options()['playbackRates']
	    && this.player().options()['playbackRates'].length > 0
	  ;
	};

	/**
	 * Hide playback rate controls when they're no playback rate options to select
	 */
	vjs.PlaybackRateMenuButton.prototype.updateVisibility = function(){
	  if (this.playbackRateSupported()) {
	    this.removeClass('vjs-hidden');
	  } else {
	    this.addClass('vjs-hidden');
	  }
	};

	/**
	 * Update button label when rate changed
	 */
	vjs.PlaybackRateMenuButton.prototype.updateLabel = function(){
	  if (this.playbackRateSupported()) {
	    this.labelEl_.innerHTML = this.player().playbackRate() + 'x';
	  }
	};

	/**
	 * The specific menu item type for selecting a playback rate
	 *
	 * @constructor
	 */
	vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
	  contentElType: 'button',
	  /** @constructor */
	  init: function(player, options){
	    var label = this.label = options['rate'];
	    var rate = this.rate = parseFloat(label, 10);

	    // Modify options for parent MenuItem class's init.
	    options['label'] = label;
	    options['selected'] = rate === 1;
	    vjs.MenuItem.call(this, player, options);

	    this.on(player, 'ratechange', this.update);
	  }
	});

	vjs.PlaybackRateMenuItem.prototype.onClick = function(){
	  vjs.MenuItem.prototype.onClick.call(this);
	  this.player().playbackRate(this.rate);
	};

	vjs.PlaybackRateMenuItem.prototype.update = function(){
	  this.selected(this.player().playbackRate() == this.rate);
	};
	/* Poster Image
	================================================================================ */
	/**
	 * The component that handles showing the poster image.
	 *
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.PosterImage = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);

	    this.update();
	    player.on('posterchange', vjs.bind(this, this.update));
	  }
	});

	/**
	 * Clean up the poster image
	 */
	vjs.PosterImage.prototype.dispose = function(){
	  this.player().off('posterchange', this.update);
	  vjs.Button.prototype.dispose.call(this);
	};

	/**
	 * Create the poster image element
	 * @return {Element}
	 */
	vjs.PosterImage.prototype.createEl = function(){
	  var el = vjs.createEl('div', {
	    className: 'vjs-poster',

	    // Don't want poster to be tabbable.
	    tabIndex: -1
	  });

	  // To ensure the poster image resizes while maintaining its original aspect
	  // ratio, use a div with `background-size` when available. For browsers that
	  // do not support `background-size` (e.g. IE8), fall back on using a regular
	  // img element.
	  if (!vjs.BACKGROUND_SIZE_SUPPORTED) {
	    this.fallbackImg_ = vjs.createEl('img');
	    el.appendChild(this.fallbackImg_);
	  }

	  return el;
	};

	/**
	 * Event handler for updates to the player's poster source
	 */
	vjs.PosterImage.prototype.update = function(){
	  var url = this.player().poster();

	  this.setSrc(url);

	  // If there's no poster source we should display:none on this component
	  // so it's not still clickable or right-clickable
	  if (url) {
	    this.show();
	  } else {
	    this.hide();
	  }
	};

	/**
	 * Set the poster source depending on the display method
	 */
	vjs.PosterImage.prototype.setSrc = function(url){
	  var backgroundImage;

	  if (this.fallbackImg_) {
	    this.fallbackImg_.src = url;
	  } else {
	    backgroundImage = '';
	    // Any falsey values should stay as an empty string, otherwise
	    // this will throw an extra error
	    if (url) {
	      backgroundImage = 'url("' + url + '")';
	    }

	    this.el_.style.backgroundImage = backgroundImage;
	  }
	};

	/**
	 * Event handler for clicks on the poster image
	 */
	vjs.PosterImage.prototype.onClick = function(){
	  // We don't want a click to trigger playback when controls are disabled
	  // but CSS should be hiding the poster to prevent that from happening
	  this.player_.play();
	};
	/* Loading Spinner
	================================================================================ */
	/**
	 * Loading spinner for waiting events
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @class
	 * @constructor
	 */
	vjs.LoadingSpinner = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    // MOVING DISPLAY HANDLING TO CSS

	    // player.on('canplay', vjs.bind(this, this.hide));
	    // player.on('canplaythrough', vjs.bind(this, this.hide));
	    // player.on('playing', vjs.bind(this, this.hide));
	    // player.on('seeking', vjs.bind(this, this.show));

	    // in some browsers seeking does not trigger the 'playing' event,
	    // so we also need to trap 'seeked' if we are going to set a
	    // 'seeking' event
	    // player.on('seeked', vjs.bind(this, this.hide));

	    // player.on('ended', vjs.bind(this, this.hide));

	    // Not showing spinner on stalled any more. Browsers may stall and then not trigger any events that would remove the spinner.
	    // Checked in Chrome 16 and Safari 5.1.2. http://help.videojs.com/discussions/problems/883-why-is-the-download-progress-showing
	    // player.on('stalled', vjs.bind(this, this.show));

	    // player.on('waiting', vjs.bind(this, this.show));
	  }
	});

	vjs.LoadingSpinner.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-loading-spinner'
	  });
	};
	/* Big Play Button
	================================================================================ */
	/**
	 * Initial play button. Shows before the video has played. The hiding of the
	 * big play button is done via CSS and player states.
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @class
	 * @constructor
	 */
	vjs.BigPlayButton = vjs.Button.extend();

	vjs.BigPlayButton.prototype.createEl = function(){
	  return vjs.Button.prototype.createEl.call(this, 'div', {
	    className: 'vjs-big-play-button',
	    innerHTML: '<span aria-hidden="true"></span>',
	    'aria-label': 'play video'
	  });
	};

	vjs.BigPlayButton.prototype.onClick = function(){
	  this.player_.play();
	};
	/**
	 * Display that an error has occurred making the video unplayable
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.ErrorDisplay = vjs.Component.extend({
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    this.update();
	    this.on(player, 'error', this.update);
	  }
	});

	vjs.ErrorDisplay.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-error-display'
	  });

	  this.contentEl_ = vjs.createEl('div');
	  el.appendChild(this.contentEl_);

	  return el;
	};

	vjs.ErrorDisplay.prototype.update = function(){
	  if (this.player().error()) {
	    this.contentEl_.innerHTML = this.localize(this.player().error().message);
	  }
	};
	(function() {
	  var createTrackHelper;
	/**
	 * @fileoverview Media Technology Controller - Base class for media playback
	 * technology controllers like Flash and HTML5
	 */

	/**
	 * Base class for media (HTML5 Video, Flash) controllers
	 * @param {vjs.Player|Object} player  Central player instance
	 * @param {Object=} options Options object
	 * @constructor
	 */
	vjs.MediaTechController = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    options = options || {};
	    // we don't want the tech to report user activity automatically.
	    // This is done manually in addControlsListeners
	    options.reportTouchActivity = false;
	    vjs.Component.call(this, player, options, ready);

	    // Manually track progress in cases where the browser/flash player doesn't report it.
	    if (!this['featuresProgressEvents']) {
	      this.manualProgressOn();
	    }

	    // Manually track timeupdates in cases where the browser/flash player doesn't report it.
	    if (!this['featuresTimeupdateEvents']) {
	      this.manualTimeUpdatesOn();
	    }

	    this.initControlsListeners();

	    if (!this['featuresNativeTextTracks']) {
	      this.emulateTextTracks();
	    }

	    this.initTextTrackListeners();
	  }
	});

	/**
	 * Set up click and touch listeners for the playback element
	 * On desktops, a click on the video itself will toggle playback,
	 * on a mobile device a click on the video toggles controls.
	 * (toggling controls is done by toggling the user state between active and
	 * inactive)
	 *
	 * A tap can signal that a user has become active, or has become inactive
	 * e.g. a quick tap on an iPhone movie should reveal the controls. Another
	 * quick tap should hide them again (signaling the user is in an inactive
	 * viewing state)
	 *
	 * In addition to this, we still want the user to be considered inactive after
	 * a few seconds of inactivity.
	 *
	 * Note: the only part of iOS interaction we can't mimic with this setup
	 * is a touch and hold on the video element counting as activity in order to
	 * keep the controls showing, but that shouldn't be an issue. A touch and hold on
	 * any controls will still keep the user active
	 */
	vjs.MediaTechController.prototype.initControlsListeners = function(){
	  var player, activateControls;

	  player = this.player();

	  activateControls = function(){
	    if (player.controls() && !player.usingNativeControls()) {
	      this.addControlsListeners();
	    }
	  };

	  // Set up event listeners once the tech is ready and has an element to apply
	  // listeners to
	  this.ready(activateControls);
	  this.on(player, 'controlsenabled', activateControls);
	  this.on(player, 'controlsdisabled', this.removeControlsListeners);

	  // if we're loading the playback object after it has started loading or playing the
	  // video (often with autoplay on) then the loadstart event has already fired and we
	  // need to fire it manually because many things rely on it.
	  // Long term we might consider how we would do this for other events like 'canplay'
	  // that may also have fired.
	  this.ready(function(){
	    if (this.networkState && this.networkState() > 0) {
	      this.player().trigger('loadstart');
	    }
	  });
	};

	vjs.MediaTechController.prototype.addControlsListeners = function(){
	  var userWasActive;

	  // Some browsers (Chrome & IE) don't trigger a click on a flash swf, but do
	  // trigger mousedown/up.
	  // http://stackoverflow.com/questions/1444562/javascript-onclick-event-over-flash-object
	  // Any touch events are set to block the mousedown event from happening
	  this.on('mousedown', this.onClick);

	  // If the controls were hidden we don't want that to change without a tap event
	  // so we'll check if the controls were already showing before reporting user
	  // activity
	  this.on('touchstart', function(event) {
	    userWasActive = this.player_.userActive();
	  });

	  this.on('touchmove', function(event) {
	    if (userWasActive){
	      this.player().reportUserActivity();
	    }
	  });

	  this.on('touchend', function(event) {
	    // Stop the mouse events from also happening
	    event.preventDefault();
	  });

	  // Turn on component tap events
	  this.emitTapEvents();

	  // The tap listener needs to come after the touchend listener because the tap
	  // listener cancels out any reportedUserActivity when setting userActive(false)
	  this.on('tap', this.onTap);
	};

	/**
	 * Remove the listeners used for click and tap controls. This is needed for
	 * toggling to controls disabled, where a tap/touch should do nothing.
	 */
	vjs.MediaTechController.prototype.removeControlsListeners = function(){
	  // We don't want to just use `this.off()` because there might be other needed
	  // listeners added by techs that extend this.
	  this.off('tap');
	  this.off('touchstart');
	  this.off('touchmove');
	  this.off('touchleave');
	  this.off('touchcancel');
	  this.off('touchend');
	  this.off('click');
	  this.off('mousedown');
	};

	/**
	 * Handle a click on the media element. By default will play/pause the media.
	 */
	vjs.MediaTechController.prototype.onClick = function(event){
	  // We're using mousedown to detect clicks thanks to Flash, but mousedown
	  // will also be triggered with right-clicks, so we need to prevent that
	  if (event.button !== 0) return;

	  // When controls are disabled a click should not toggle playback because
	  // the click is considered a control
	  if (this.player().controls()) {
	    if (this.player().paused()) {
	      this.player().play();
	    } else {
	      this.player().pause();
	    }
	  }
	};

	/**
	 * Handle a tap on the media element. By default it will toggle the user
	 * activity state, which hides and shows the controls.
	 */
	vjs.MediaTechController.prototype.onTap = function(){
	  this.player().userActive(!this.player().userActive());
	};

	/* Fallbacks for unsupported event types
	================================================================================ */
	// Manually trigger progress events based on changes to the buffered amount
	// Many flash players and older HTML5 browsers don't send progress or progress-like events
	vjs.MediaTechController.prototype.manualProgressOn = function(){
	  this.manualProgress = true;

	  // Trigger progress watching when a source begins loading
	  this.trackProgress();
	};

	vjs.MediaTechController.prototype.manualProgressOff = function(){
	  this.manualProgress = false;
	  this.stopTrackingProgress();
	};

	vjs.MediaTechController.prototype.trackProgress = function(){
	  this.progressInterval = this.setInterval(function(){
	    // Don't trigger unless buffered amount is greater than last time

	    var bufferedPercent = this.player().bufferedPercent();

	    if (this.bufferedPercent_ != bufferedPercent) {
	      this.player().trigger('progress');
	    }

	    this.bufferedPercent_ = bufferedPercent;

	    if (bufferedPercent === 1) {
	      this.stopTrackingProgress();
	    }
	  }, 500);
	};
	vjs.MediaTechController.prototype.stopTrackingProgress = function(){ this.clearInterval(this.progressInterval); };

	/*! Time Tracking -------------------------------------------------------------- */
	vjs.MediaTechController.prototype.manualTimeUpdatesOn = function(){
	  var player = this.player_;

	  this.manualTimeUpdates = true;

	  this.on(player, 'play', this.trackCurrentTime);
	  this.on(player, 'pause', this.stopTrackingCurrentTime);
	  // timeupdate is also called by .currentTime whenever current time is set

	  // Watch for native timeupdate event
	  this.one('timeupdate', function(){
	    // Update known progress support for this playback technology
	    this['featuresTimeupdateEvents'] = true;
	    // Turn off manual progress tracking
	    this.manualTimeUpdatesOff();
	  });
	};

	vjs.MediaTechController.prototype.manualTimeUpdatesOff = function(){
	  var player = this.player_;

	  this.manualTimeUpdates = false;
	  this.stopTrackingCurrentTime();
	  this.off(player, 'play', this.trackCurrentTime);
	  this.off(player, 'pause', this.stopTrackingCurrentTime);
	};

	vjs.MediaTechController.prototype.trackCurrentTime = function(){
	  if (this.currentTimeInterval) { this.stopTrackingCurrentTime(); }
	  this.currentTimeInterval = this.setInterval(function(){
	    this.player().trigger('timeupdate');
	  }, 250); // 42 = 24 fps // 250 is what Webkit uses // FF uses 15
	};

	// Turn off play progress tracking (when paused or dragging)
	vjs.MediaTechController.prototype.stopTrackingCurrentTime = function(){
	  this.clearInterval(this.currentTimeInterval);

	  // #1002 - if the video ends right before the next timeupdate would happen,
	  // the progress bar won't make it all the way to the end
	  this.player().trigger('timeupdate');
	};

	vjs.MediaTechController.prototype.dispose = function() {
	  // Turn off any manual progress or timeupdate tracking
	  if (this.manualProgress) { this.manualProgressOff(); }

	  if (this.manualTimeUpdates) { this.manualTimeUpdatesOff(); }

	  vjs.Component.prototype.dispose.call(this);
	};

	vjs.MediaTechController.prototype.setCurrentTime = function() {
	  // improve the accuracy of manual timeupdates
	  if (this.manualTimeUpdates) { this.player().trigger('timeupdate'); }
	};

	// TODO: Consider looking at moving this into the text track display directly
	// https://github.com/videojs/video.js/issues/1863
	vjs.MediaTechController.prototype.initTextTrackListeners = function() {
	  var player = this.player_,
	      tracks,
	      textTrackListChanges = function() {
	        var textTrackDisplay = player.getChild('textTrackDisplay'),
	            controlBar;

	        if (textTrackDisplay) {
	          textTrackDisplay.updateDisplay();
	        }
	      };

	  tracks = this.textTracks();

	  if (!tracks) {
	    return;
	  }

	  tracks.addEventListener('removetrack', textTrackListChanges);
	  tracks.addEventListener('addtrack', textTrackListChanges);

	  this.on('dispose', vjs.bind(this, function() {
	    tracks.removeEventListener('removetrack', textTrackListChanges);
	    tracks.removeEventListener('addtrack', textTrackListChanges);
	  }));
	};

	vjs.MediaTechController.prototype.emulateTextTracks = function() {
	  var player = this.player_,
	      textTracksChanges,
	      tracks,
	      script;

	  if (!window['WebVTT']) {
	    script = document.createElement('script');
	    script.src = player.options()['vtt.js'] || '../node_modules/vtt.js/dist/vtt.js';
	    player.el().appendChild(script);
	    window['WebVTT'] = true;
	  }

	  tracks = this.textTracks();
	  if (!tracks) {
	    return;
	  }

	  textTracksChanges = function() {
	    var i, track, textTrackDisplay;

	    textTrackDisplay = player.getChild('textTrackDisplay'),

	    textTrackDisplay.updateDisplay();

	    for (i = 0; i < this.length; i++) {
	      track = this[i];
	      track.removeEventListener('cuechange', vjs.bind(textTrackDisplay, textTrackDisplay.updateDisplay));
	      if (track.mode === 'showing') {
	        track.addEventListener('cuechange', vjs.bind(textTrackDisplay, textTrackDisplay.updateDisplay));
	      }
	    }
	  };

	  tracks.addEventListener('change', textTracksChanges);

	  this.on('dispose', vjs.bind(this, function() {
	    tracks.removeEventListener('change', textTracksChanges);
	  }));
	};

	/**
	 * Provide default methods for text tracks.
	 *
	 * Html5 tech overrides these.
	 */

	/**
	 * List of associated text tracks
	 * @type {Array}
	 * @private
	 */
	vjs.MediaTechController.prototype.textTracks_;

	vjs.MediaTechController.prototype.textTracks = function() {
	  this.player_.textTracks_ = this.player_.textTracks_ || new vjs.TextTrackList();
	  return this.player_.textTracks_;
	};

	vjs.MediaTechController.prototype.remoteTextTracks = function() {
	  this.player_.remoteTextTracks_ = this.player_.remoteTextTracks_ || new vjs.TextTrackList();
	  return this.player_.remoteTextTracks_;
	};

	createTrackHelper = function(self, kind, label, language, options) {
	  var tracks = self.textTracks(),
	      track;

	  options = options || {};

	  options['kind'] = kind;
	  if (label) {
	    options['label'] = label;
	  }
	  if (language) {
	    options['language'] = language;
	  }
	  options['player'] = self.player_;

	  track = new vjs.TextTrack(options);
	  tracks.addTrack_(track);

	  return track;
	};

	vjs.MediaTechController.prototype.addTextTrack = function(kind, label, language) {
	  if (!kind) {
	    throw new Error('TextTrack kind is required but was not provided');
	  }

	  return createTrackHelper(this, kind, label, language);
	};

	vjs.MediaTechController.prototype.addRemoteTextTrack = function(options) {
	  var track = createTrackHelper(this, options['kind'], options['label'], options['language'], options);
	  this.remoteTextTracks().addTrack_(track);
	  return {
	    track: track
	  };
	};

	vjs.MediaTechController.prototype.removeRemoteTextTrack = function(track) {
	  this.textTracks().removeTrack_(track);
	  this.remoteTextTracks().removeTrack_(track);
	};

	/**
	 * Provide a default setPoster method for techs
	 *
	 * Poster support for techs should be optional, so we don't want techs to
	 * break if they don't have a way to set a poster.
	 */
	vjs.MediaTechController.prototype.setPoster = function(){};

	vjs.MediaTechController.prototype['featuresVolumeControl'] = true;

	// Resizing plugins using request fullscreen reloads the plugin
	vjs.MediaTechController.prototype['featuresFullscreenResize'] = false;
	vjs.MediaTechController.prototype['featuresPlaybackRate'] = false;

	// Optional events that we can manually mimic with timers
	// currently not triggered by video-js-swf
	vjs.MediaTechController.prototype['featuresProgressEvents'] = false;
	vjs.MediaTechController.prototype['featuresTimeupdateEvents'] = false;

	vjs.MediaTechController.prototype['featuresNativeTextTracks'] = false;

	/**
	 * A functional mixin for techs that want to use the Source Handler pattern.
	 *
	 * ##### EXAMPLE:
	 *
	 *   videojs.MediaTechController.withSourceHandlers.call(MyTech);
	 *
	 */
	vjs.MediaTechController.withSourceHandlers = function(Tech){
	  /**
	   * Register a source handler
	   * Source handlers are scripts for handling specific formats.
	   * The source handler pattern is used for adaptive formats (HLS, DASH) that
	   * manually load video data and feed it into a Source Buffer (Media Source Extensions)
	   * @param  {Function} handler  The source handler
	   * @param  {Boolean}  first    Register it before any existing handlers
	   */
	  Tech.registerSourceHandler = function(handler, index){
	    var handlers = Tech.sourceHandlers;

	    if (!handlers) {
	      handlers = Tech.sourceHandlers = [];
	    }

	    if (index === undefined) {
	      // add to the end of the list
	      index = handlers.length;
	    }

	    handlers.splice(index, 0, handler);
	  };

	  /**
	   * Return the first source handler that supports the source
	   * TODO: Answer question: should 'probably' be prioritized over 'maybe'
	   * @param  {Object} source The source object
	   * @returns {Object}       The first source handler that supports the source
	   * @returns {null}         Null if no source handler is found
	   */
	  Tech.selectSourceHandler = function(source){
	    var handlers = Tech.sourceHandlers || [],
	        can;

	    for (var i = 0; i < handlers.length; i++) {
	      can = handlers[i].canHandleSource(source);

	      if (can) {
	        return handlers[i];
	      }
	    }

	    return null;
	  };

	  /**
	  * Check if the tech can support the given source
	  * @param  {Object} srcObj  The source object
	  * @return {String}         'probably', 'maybe', or '' (empty string)
	  */
	  Tech.canPlaySource = function(srcObj){
	    var sh = Tech.selectSourceHandler(srcObj);

	    if (sh) {
	      return sh.canHandleSource(srcObj);
	    }

	    return '';
	  };

	  /**
	   * Create a function for setting the source using a source object
	   * and source handlers.
	   * Should never be called unless a source handler was found.
	   * @param {Object} source  A source object with src and type keys
	   * @return {vjs.MediaTechController} self
	   */
	  Tech.prototype.setSource = function(source){
	    var sh = Tech.selectSourceHandler(source);

	    if (!sh) {
	      // Fall back to a native source hander when unsupported sources are
	      // deliberately set
	      if (Tech.nativeSourceHandler) {
	        sh = Tech.nativeSourceHandler;
	      } else {
	        vjs.log.error('No source hander found for the current source.');
	      }
	    }

	    // Dispose any existing source handler
	    this.disposeSourceHandler();
	    this.off('dispose', this.disposeSourceHandler);

	    this.currentSource_ = source;
	    this.sourceHandler_ = sh.handleSource(source, this);
	    this.on('dispose', this.disposeSourceHandler);

	    return this;
	  };

	  /**
	   * Clean up any existing source handler
	   */
	  Tech.prototype.disposeSourceHandler = function(){
	    if (this.sourceHandler_ && this.sourceHandler_.dispose) {
	      this.sourceHandler_.dispose();
	    }
	  };

	};

	vjs.media = {};

	})();
	/**
	 * @fileoverview HTML5 Media Controller - Wrapper for HTML5 Media API
	 */

	/**
	 * HTML5 Media Controller - Wrapper for HTML5 Media API
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @param {Function=} ready
	 * @constructor
	 */
	vjs.Html5 = vjs.MediaTechController.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    var  nodes, nodesLength, i, node, nodeName, removeNodes;

	    if (options['nativeCaptions'] === false || options['nativeTextTracks'] === false) {
	      this['featuresNativeTextTracks'] = false;
	    }

	    vjs.MediaTechController.call(this, player, options, ready);

	    this.setupTriggers();

	    var source = options['source'];

	    // Set the source if one is provided
	    // 1) Check if the source is new (if not, we want to keep the original so playback isn't interrupted)
	    // 2) Check to see if the network state of the tag was failed at init, and if so, reset the source
	    // anyway so the error gets fired.
	    if (source && (this.el_.currentSrc !== source.src || (player.tag && player.tag.initNetworkState_ === 3))) {
	      this.setSource(source);
	    }

	    if (this.el_.hasChildNodes()) {

	      nodes = this.el_.childNodes;
	      nodesLength = nodes.length;
	      removeNodes = [];

	      while (nodesLength--) {
	        node = nodes[nodesLength];
	        nodeName = node.nodeName.toLowerCase();
	        if (nodeName === 'track') {
	          if (!this['featuresNativeTextTracks']) {
	            // Empty video tag tracks so the built-in player doesn't use them also.
	            // This may not be fast enough to stop HTML5 browsers from reading the tags
	            // so we'll need to turn off any default tracks if we're manually doing
	            // captions and subtitles. videoElement.textTracks
	            removeNodes.push(node);
	          } else {
	            this.remoteTextTracks().addTrack_(node['track']);
	          }
	        }
	      }

	      for (i=0; i<removeNodes.length; i++) {
	        this.el_.removeChild(removeNodes[i]);
	      }
	    }

	    if (this['featuresNativeTextTracks']) {
	      this.on('loadstart', vjs.bind(this, this.hideCaptions));
	    }

	    // Determine if native controls should be used
	    // Our goal should be to get the custom controls on mobile solid everywhere
	    // so we can remove this all together. Right now this will block custom
	    // controls on touch enabled laptops like the Chrome Pixel
	    if (vjs.TOUCH_ENABLED && player.options()['nativeControlsForTouch'] === true) {
	      this.useNativeControls();
	    }

	    // Chrome and Safari both have issues with autoplay.
	    // In Safari (5.1.1), when we move the video element into the container div, autoplay doesn't work.
	    // In Chrome (15), if you have autoplay + a poster + no controls, the video gets hidden (but audio plays)
	    // This fixes both issues. Need to wait for API, so it updates displays correctly
	    player.ready(function(){
	      if (this.src() && this.tag && this.options_['autoplay'] && this.paused()) {
	        delete this.tag['poster']; // Chrome Fix. Fixed in Chrome v16.
	        this.play();
	      }
	    });

	    this.triggerReady();
	  }
	});

	vjs.Html5.prototype.dispose = function(){
	  vjs.Html5.disposeMediaElement(this.el_);
	  vjs.MediaTechController.prototype.dispose.call(this);
	};

	vjs.Html5.prototype.createEl = function(){
	  var player = this.player_,
	      track,
	      trackEl,
	      i,
	      // If possible, reuse original tag for HTML5 playback technology element
	      el = player.tag,
	      attributes,
	      newEl,
	      clone;

	  // Check if this browser supports moving the element into the box.
	  // On the iPhone video will break if you move the element,
	  // So we have to create a brand new element.
	  if (!el || this['movingMediaElementInDOM'] === false) {

	    // If the original tag is still there, clone and remove it.
	    if (el) {
	      clone = el.cloneNode(false);
	      vjs.Html5.disposeMediaElement(el);
	      el = clone;
	      player.tag = null;
	    } else {
	      el = vjs.createEl('video');

	      // determine if native controls should be used
	      attributes = videojs.util.mergeOptions({}, player.tagAttributes);
	      if (!vjs.TOUCH_ENABLED || player.options()['nativeControlsForTouch'] !== true) {
	        delete attributes.controls;
	      }

	      vjs.setElementAttributes(el,
	        vjs.obj.merge(attributes, {
	          id:player.id() + '_html5_api',
	          'class':'vjs-tech'
	        })
	      );
	    }
	    // associate the player with the new tag
	    el['player'] = player;

	    if (player.options_.tracks) {
	      for (i = 0; i < player.options_.tracks.length; i++) {
	        track = player.options_.tracks[i];
	        trackEl = document.createElement('track');
	        trackEl.kind = track.kind;
	        trackEl.label = track.label;
	        trackEl.srclang = track.srclang;
	        trackEl.src = track.src;
	        if ('default' in track) {
	          trackEl.setAttribute('default', 'default');
	        }
	        el.appendChild(trackEl);
	      }
	    }

	    vjs.insertFirst(el, player.el());
	  }

	  // Update specific tag settings, in case they were overridden
	  var settingsAttrs = ['autoplay','preload','loop','muted'];
	  for (i = settingsAttrs.length - 1; i >= 0; i--) {
	    var attr = settingsAttrs[i];
	    var overwriteAttrs = {};
	    if (typeof player.options_[attr] !== 'undefined') {
	      overwriteAttrs[attr] = player.options_[attr];
	    }
	    vjs.setElementAttributes(el, overwriteAttrs);
	  }

	  return el;
	  // jenniisawesome = true;
	};


	vjs.Html5.prototype.hideCaptions = function() {
	  var tracks = this.el_.querySelectorAll('track'),
	      track,
	      i = tracks.length,
	      kinds = {
	        'captions': 1,
	        'subtitles': 1
	      };

	  while (i--) {
	    track = tracks[i].track;
	    if ((track && track['kind'] in kinds) &&
	        (!tracks[i]['default'])) {
	      track.mode = 'disabled';
	    }
	  }
	};

	// Make video events trigger player events
	// May seem verbose here, but makes other APIs possible.
	// Triggers removed using this.off when disposed
	vjs.Html5.prototype.setupTriggers = function(){
	  for (var i = vjs.Html5.Events.length - 1; i >= 0; i--) {
	    this.on(vjs.Html5.Events[i], this.eventHandler);
	  }
	};

	vjs.Html5.prototype.eventHandler = function(evt){
	  // In the case of an error on the video element, set the error prop
	  // on the player and let the player handle triggering the event. On
	  // some platforms, error events fire that do not cause the error
	  // property on the video element to be set. See #1465 for an example.
	  if (evt.type == 'error' && this.error()) {
	    this.player().error(this.error().code);

	  // in some cases we pass the event directly to the player
	  } else {
	    // No need for media events to bubble up.
	    evt.bubbles = false;

	    this.player().trigger(evt);
	  }
	};

	vjs.Html5.prototype.useNativeControls = function(){
	  var tech, player, controlsOn, controlsOff, cleanUp;

	  tech = this;
	  player = this.player();

	  // If the player controls are enabled turn on the native controls
	  tech.setControls(player.controls());

	  // Update the native controls when player controls state is updated
	  controlsOn = function(){
	    tech.setControls(true);
	  };
	  controlsOff = function(){
	    tech.setControls(false);
	  };
	  player.on('controlsenabled', controlsOn);
	  player.on('controlsdisabled', controlsOff);

	  // Clean up when not using native controls anymore
	  cleanUp = function(){
	    player.off('controlsenabled', controlsOn);
	    player.off('controlsdisabled', controlsOff);
	  };
	  tech.on('dispose', cleanUp);
	  player.on('usingcustomcontrols', cleanUp);

	  // Update the state of the player to using native controls
	  player.usingNativeControls(true);
	};


	vjs.Html5.prototype.play = function(){ this.el_.play(); };
	vjs.Html5.prototype.pause = function(){ this.el_.pause(); };
	vjs.Html5.prototype.paused = function(){ return this.el_.paused; };

	vjs.Html5.prototype.currentTime = function(){ return this.el_.currentTime; };
	vjs.Html5.prototype.setCurrentTime = function(seconds){
	  try {
	    this.el_.currentTime = seconds;
	  } catch(e) {
	    vjs.log(e, 'Video is not ready. (Video.js)');
	    // this.warning(VideoJS.warnings.videoNotReady);
	  }
	};

	vjs.Html5.prototype.duration = function(){ return this.el_.duration || 0; };
	vjs.Html5.prototype.buffered = function(){ return this.el_.buffered; };

	vjs.Html5.prototype.volume = function(){ return this.el_.volume; };
	vjs.Html5.prototype.setVolume = function(percentAsDecimal){ this.el_.volume = percentAsDecimal; };
	vjs.Html5.prototype.muted = function(){ return this.el_.muted; };
	vjs.Html5.prototype.setMuted = function(muted){ this.el_.muted = muted; };

	vjs.Html5.prototype.width = function(){ return this.el_.offsetWidth; };
	vjs.Html5.prototype.height = function(){ return this.el_.offsetHeight; };

	vjs.Html5.prototype.supportsFullScreen = function(){
	  if (typeof this.el_.webkitEnterFullScreen == 'function') {

	    // Seems to be broken in Chromium/Chrome && Safari in Leopard
	    if (/Android/.test(vjs.USER_AGENT) || !/Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT)) {
	      return true;
	    }
	  }
	  return false;
	};

	vjs.Html5.prototype.enterFullScreen = function(){
	  var video = this.el_;

	  if ('webkitDisplayingFullscreen' in video) {
	    this.one('webkitbeginfullscreen', function() {
	      this.player_.isFullscreen(true);

	      this.one('webkitendfullscreen', function() {
	        this.player_.isFullscreen(false);
	        this.player_.trigger('fullscreenchange');
	      });

	      this.player_.trigger('fullscreenchange');
	    });
	  }

	  if (video.paused && video.networkState <= video.HAVE_METADATA) {
	    // attempt to prime the video element for programmatic access
	    // this isn't necessary on the desktop but shouldn't hurt
	    this.el_.play();

	    // playing and pausing synchronously during the transition to fullscreen
	    // can get iOS ~6.1 devices into a play/pause loop
	    this.setTimeout(function(){
	      video.pause();
	      video.webkitEnterFullScreen();
	    }, 0);
	  } else {
	    video.webkitEnterFullScreen();
	  }
	};

	vjs.Html5.prototype.exitFullScreen = function(){
	  this.el_.webkitExitFullScreen();
	};


	vjs.Html5.prototype.src = function(src) {
	  if (src === undefined) {
	    return this.el_.src;
	  } else {
	    // Setting src through `src` instead of `setSrc` will be deprecated
	    this.setSrc(src);
	  }
	};

	vjs.Html5.prototype.setSrc = function(src) {
	  this.el_.src = src;
	};

	vjs.Html5.prototype.load = function(){ this.el_.load(); };
	vjs.Html5.prototype.currentSrc = function(){ return this.el_.currentSrc; };

	vjs.Html5.prototype.poster = function(){ return this.el_.poster; };
	vjs.Html5.prototype.setPoster = function(val){ this.el_.poster = val; };

	vjs.Html5.prototype.preload = function(){ return this.el_.preload; };
	vjs.Html5.prototype.setPreload = function(val){ this.el_.preload = val; };

	vjs.Html5.prototype.autoplay = function(){ return this.el_.autoplay; };
	vjs.Html5.prototype.setAutoplay = function(val){ this.el_.autoplay = val; };

	vjs.Html5.prototype.controls = function(){ return this.el_.controls; };
	vjs.Html5.prototype.setControls = function(val){ this.el_.controls = !!val; };

	vjs.Html5.prototype.loop = function(){ return this.el_.loop; };
	vjs.Html5.prototype.setLoop = function(val){ this.el_.loop = val; };

	vjs.Html5.prototype.error = function(){ return this.el_.error; };
	vjs.Html5.prototype.seeking = function(){ return this.el_.seeking; };
	vjs.Html5.prototype.ended = function(){ return this.el_.ended; };
	vjs.Html5.prototype.defaultMuted = function(){ return this.el_.defaultMuted; };

	vjs.Html5.prototype.playbackRate = function(){ return this.el_.playbackRate; };
	vjs.Html5.prototype.setPlaybackRate = function(val){ this.el_.playbackRate = val; };

	vjs.Html5.prototype.networkState = function(){ return this.el_.networkState; };
	vjs.Html5.prototype.readyState = function(){ return this.el_.readyState; };

	vjs.Html5.prototype.textTracks = function() {
	  if (!this['featuresNativeTextTracks']) {
	    return vjs.MediaTechController.prototype.textTracks.call(this);
	  }

	  return this.el_.textTracks;
	};
	vjs.Html5.prototype.addTextTrack = function(kind, label, language) {
	  if (!this['featuresNativeTextTracks']) {
	    return vjs.MediaTechController.prototype.addTextTrack.call(this, kind, label, language);
	  }

	  return this.el_.addTextTrack(kind, label, language);
	};

	vjs.Html5.prototype.addRemoteTextTrack = function(options) {
	  if (!this['featuresNativeTextTracks']) {
	    return vjs.MediaTechController.prototype.addRemoteTextTrack.call(this, options);
	  }

	  var track = document.createElement('track');
	  options = options || {};

	  if (options['kind']) {
	    track['kind'] = options['kind'];
	  }
	  if (options['label']) {
	    track['label'] = options['label'];
	  }
	  if (options['language'] || options['srclang']) {
	    track['srclang'] = options['language'] || options['srclang'];
	  }
	  if (options['default']) {
	    track['default'] = options['default'];
	  }
	  if (options['id']) {
	    track['id'] = options['id'];
	  }
	  if (options['src']) {
	    track['src'] = options['src'];
	  }

	  this.el().appendChild(track);

	  if (track.track['kind'] === 'metadata') {
	    track['track']['mode'] = 'hidden';
	  } else {
	    track['track']['mode'] = 'disabled';
	  }

	  track['onload'] = function() {
	    var tt = track['track'];
	    if (track.readyState >= 2) {
	      if (tt['kind'] === 'metadata' && tt['mode'] !== 'hidden') {
	        tt['mode'] = 'hidden';
	      } else if (tt['kind'] !== 'metadata' && tt['mode'] !== 'disabled') {
	        tt['mode'] = 'disabled';
	      }
	      track['onload'] = null;
	    }
	  };

	  this.remoteTextTracks().addTrack_(track.track);

	  return track;
	};

	vjs.Html5.prototype.removeRemoteTextTrack = function(track) {
	  if (!this['featuresNativeTextTracks']) {
	    return vjs.MediaTechController.prototype.removeRemoteTextTrack.call(this, track);
	  }

	  var tracks, i;

	  this.remoteTextTracks().removeTrack_(track);

	  tracks = this.el()['querySelectorAll']('track');

	  for (i = 0; i < tracks.length; i++) {
	    if (tracks[i] === track || tracks[i]['track'] === track) {
	      tracks[i]['parentNode']['removeChild'](tracks[i]);
	      break;
	    }
	  }
	};

	/* HTML5 Support Testing ---------------------------------------------------- */

	/**
	 * Check if HTML5 video is supported by this browser/device
	 * @return {Boolean}
	 */
	vjs.Html5.isSupported = function(){
	  // IE9 with no Media Player is a LIAR! (#984)
	  try {
	    vjs.TEST_VID['volume'] = 0.5;
	  } catch (e) {
	    return false;
	  }

	  return !!vjs.TEST_VID.canPlayType;
	};

	// Add Source Handler pattern functions to this tech
	vjs.MediaTechController.withSourceHandlers(vjs.Html5);

	/**
	 * The default native source handler.
	 * This simply passes the source to the video element. Nothing fancy.
	 * @param  {Object} source   The source object
	 * @param  {vjs.Html5} tech  The instance of the HTML5 tech
	 */
	vjs.Html5.nativeSourceHandler = {};

	/**
	 * Check if the video element can handle the source natively
	 * @param  {Object} source  The source object
	 * @return {String}         'probably', 'maybe', or '' (empty string)
	 */
	vjs.Html5.nativeSourceHandler.canHandleSource = function(source){
	  var match, ext;

	  function canPlayType(type){
	    // IE9 on Windows 7 without MediaPlayer throws an error here
	    // https://github.com/videojs/video.js/issues/519
	    try {
	      return vjs.TEST_VID.canPlayType(type);
	    } catch(e) {
	      return '';
	    }
	  }

	  // If a type was provided we should rely on that
	  if (source.type) {
	    return canPlayType(source.type);
	  } else if (source.src) {
	    // If no type, fall back to checking 'video/[EXTENSION]'
	    match = source.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i);
	    ext = match && match[1];

	    return canPlayType('video/'+ext);
	  }

	  return '';
	};

	/**
	 * Pass the source to the video element
	 * Adaptive source handlers will have more complicated workflows before passing
	 * video data to the video element
	 * @param  {Object} source    The source object
	 * @param  {vjs.Html5} tech   The instance of the Html5 tech
	 */
	vjs.Html5.nativeSourceHandler.handleSource = function(source, tech){
	  tech.setSrc(source.src);
	};

	/**
	 * Clean up the source handler when disposing the player or switching sources..
	 * (no cleanup is needed when supporting the format natively)
	 */
	vjs.Html5.nativeSourceHandler.dispose = function(){};

	// Register the native source handler
	vjs.Html5.registerSourceHandler(vjs.Html5.nativeSourceHandler);

	/**
	 * Check if the volume can be changed in this browser/device.
	 * Volume cannot be changed in a lot of mobile devices.
	 * Specifically, it can't be changed from 1 on iOS.
	 * @return {Boolean}
	 */
	vjs.Html5.canControlVolume = function(){
	  var volume =  vjs.TEST_VID.volume;
	  vjs.TEST_VID.volume = (volume / 2) + 0.1;
	  return volume !== vjs.TEST_VID.volume;
	};

	/**
	 * Check if playbackRate is supported in this browser/device.
	 * @return {[type]} [description]
	 */
	vjs.Html5.canControlPlaybackRate = function(){
	  var playbackRate =  vjs.TEST_VID.playbackRate;
	  vjs.TEST_VID.playbackRate = (playbackRate / 2) + 0.1;
	  return playbackRate !== vjs.TEST_VID.playbackRate;
	};

	/**
	 * Check to see if native text tracks are supported by this browser/device
	 * @return {Boolean}
	 */
	vjs.Html5.supportsNativeTextTracks = function() {
	  var supportsTextTracks;

	  // Figure out native text track support
	  // If mode is a number, we cannot change it because it'll disappear from view.
	  // Browsers with numeric modes include IE10 and older (<=2013) samsung android models.
	  // Firefox isn't playing nice either with modifying the mode
	  // TODO: Investigate firefox: https://github.com/videojs/video.js/issues/1862
	  supportsTextTracks = !!vjs.TEST_VID.textTracks;
	  if (supportsTextTracks && vjs.TEST_VID.textTracks.length > 0) {
	    supportsTextTracks = typeof vjs.TEST_VID.textTracks[0]['mode'] !== 'number';
	  }
	  if (supportsTextTracks && vjs.IS_FIREFOX) {
	    supportsTextTracks = false;
	  }

	  return supportsTextTracks;
	};

	/**
	 * Set the tech's volume control support status
	 * @type {Boolean}
	 */
	vjs.Html5.prototype['featuresVolumeControl'] = vjs.Html5.canControlVolume();

	/**
	 * Set the tech's playbackRate support status
	 * @type {Boolean}
	 */
	vjs.Html5.prototype['featuresPlaybackRate'] = vjs.Html5.canControlPlaybackRate();

	/**
	 * Set the tech's status on moving the video element.
	 * In iOS, if you move a video element in the DOM, it breaks video playback.
	 * @type {Boolean}
	 */
	vjs.Html5.prototype['movingMediaElementInDOM'] = !vjs.IS_IOS;

	/**
	 * Set the the tech's fullscreen resize support status.
	 * HTML video is able to automatically resize when going to fullscreen.
	 * (No longer appears to be used. Can probably be removed.)
	 */
	vjs.Html5.prototype['featuresFullscreenResize'] = true;

	/**
	 * Set the tech's progress event support status
	 * (this disables the manual progress events of the MediaTechController)
	 */
	vjs.Html5.prototype['featuresProgressEvents'] = true;

	/**
	 * Sets the tech's status on native text track support
	 * @type {Boolean}
	 */
	vjs.Html5.prototype['featuresNativeTextTracks'] = vjs.Html5.supportsNativeTextTracks();

	// HTML5 Feature detection and Device Fixes --------------------------------- //
	(function() {
	  var canPlayType,
	      mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
	      mp4RE = /^video\/mp4/i;

	  vjs.Html5.patchCanPlayType = function() {
	    // Android 4.0 and above can play HLS to some extent but it reports being unable to do so
	    if (vjs.ANDROID_VERSION >= 4.0) {
	      if (!canPlayType) {
	        canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType;
	      }

	      vjs.TEST_VID.constructor.prototype.canPlayType = function(type) {
	        if (type && mpegurlRE.test(type)) {
	          return 'maybe';
	        }
	        return canPlayType.call(this, type);
	      };
	    }

	    // Override Android 2.2 and less canPlayType method which is broken
	    if (vjs.IS_OLD_ANDROID) {
	      if (!canPlayType) {
	        canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType;
	      }

	      vjs.TEST_VID.constructor.prototype.canPlayType = function(type){
	        if (type && mp4RE.test(type)) {
	          return 'maybe';
	        }
	        return canPlayType.call(this, type);
	      };
	    }
	  };

	  vjs.Html5.unpatchCanPlayType = function() {
	    var r = vjs.TEST_VID.constructor.prototype.canPlayType;
	    vjs.TEST_VID.constructor.prototype.canPlayType = canPlayType;
	    canPlayType = null;
	    return r;
	  };

	  // by default, patch the video element
	  vjs.Html5.patchCanPlayType();
	})();

	// List of all HTML5 events (various uses).
	vjs.Html5.Events = 'loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange'.split(',');

	vjs.Html5.disposeMediaElement = function(el){
	  if (!el) { return; }

	  el['player'] = null;

	  if (el.parentNode) {
	    el.parentNode.removeChild(el);
	  }

	  // remove any child track or source nodes to prevent their loading
	  while(el.hasChildNodes()) {
	    el.removeChild(el.firstChild);
	  }

	  // remove any src reference. not setting `src=''` because that causes a warning
	  // in firefox
	  el.removeAttribute('src');

	  // force the media element to update its loading state by calling load()
	  // however IE on Windows 7N has a bug that throws an error so need a try/catch (#793)
	  if (typeof el.load === 'function') {
	    // wrapping in an iife so it's not deoptimized (#1060#discussion_r10324473)
	    (function() {
	      try {
	        el.load();
	      } catch (e) {
	        // not supported
	      }
	    })();
	  }
	};
	/**
	 * @fileoverview VideoJS-SWF - Custom Flash Player with HTML5-ish API
	 * https://github.com/zencoder/video-js-swf
	 * Not using setupTriggers. Using global onEvent func to distribute events
	 */

	/**
	 * Flash Media Controller - Wrapper for fallback SWF API
	 *
	 * @param {vjs.Player} player
	 * @param {Object=} options
	 * @param {Function=} ready
	 * @constructor
	 */
	vjs.Flash = vjs.MediaTechController.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.MediaTechController.call(this, player, options, ready);

	    var source = options['source'],

	        // Generate ID for swf object
	        objId = player.id()+'_flash_api',

	        // Store player options in local var for optimization
	        // TODO: switch to using player methods instead of options
	        // e.g. player.autoplay();
	        playerOptions = player.options_,

	        // Merge default flashvars with ones passed in to init
	        flashVars = vjs.obj.merge({

	          // SWF Callback Functions
	          'readyFunction': 'videojs.Flash.onReady',
	          'eventProxyFunction': 'videojs.Flash.onEvent',
	          'errorEventProxyFunction': 'videojs.Flash.onError',

	          // Player Settings
	          'autoplay': playerOptions.autoplay,
	          'preload': playerOptions.preload,
	          'loop': playerOptions.loop,
	          'muted': playerOptions.muted

	        }, options['flashVars']),

	        // Merge default parames with ones passed in
	        params = vjs.obj.merge({
	          'wmode': 'opaque', // Opaque is needed to overlay controls, but can affect playback performance
	          'bgcolor': '#000000' // Using bgcolor prevents a white flash when the object is loading
	        }, options['params']),

	        // Merge default attributes with ones passed in
	        attributes = vjs.obj.merge({
	          'id': objId,
	          'name': objId, // Both ID and Name needed or swf to identify itself
	          'class': 'vjs-tech'
	        }, options['attributes'])
	    ;

	    // If source was supplied pass as a flash var.
	    if (source) {
	      this.ready(function(){
	        this.setSource(source);
	      });
	    }

	    // Add placeholder to player div
	    vjs.insertFirst(this.el_, options['parentEl']);

	    // Having issues with Flash reloading on certain page actions (hide/resize/fullscreen) in certain browsers
	    // This allows resetting the playhead when we catch the reload
	    if (options['startTime']) {
	      this.ready(function(){
	        this.load();
	        this.play();
	        this['currentTime'](options['startTime']);
	      });
	    }

	    // firefox doesn't bubble mousemove events to parent. videojs/video-js-swf#37
	    // bugzilla bug: https://bugzilla.mozilla.org/show_bug.cgi?id=836786
	    if (vjs.IS_FIREFOX) {
	      this.ready(function(){
	        this.on('mousemove', function(){
	          // since it's a custom event, don't bubble higher than the player
	          this.player().trigger({ 'type':'mousemove', 'bubbles': false });
	        });
	      });
	    }

	    // native click events on the SWF aren't triggered on IE11, Win8.1RT
	    // use stageclick events triggered from inside the SWF instead
	    player.on('stageclick', player.reportUserActivity);

	    this.el_ = vjs.Flash.embed(options['swf'], this.el_, flashVars, params, attributes);
	  }
	});

	vjs.Flash.prototype.dispose = function(){
	  vjs.MediaTechController.prototype.dispose.call(this);
	};

	vjs.Flash.prototype.play = function(){
	  this.el_.vjs_play();
	};

	vjs.Flash.prototype.pause = function(){
	  this.el_.vjs_pause();
	};

	vjs.Flash.prototype.src = function(src){
	  if (src === undefined) {
	    return this['currentSrc']();
	  }

	  // Setting src through `src` not `setSrc` will be deprecated
	  return this.setSrc(src);
	};

	vjs.Flash.prototype.setSrc = function(src){
	  // Make sure source URL is absolute.
	  src = vjs.getAbsoluteURL(src);
	  this.el_.vjs_src(src);

	  // Currently the SWF doesn't autoplay if you load a source later.
	  // e.g. Load player w/ no source, wait 2s, set src.
	  if (this.player_.autoplay()) {
	    var tech = this;
	    this.setTimeout(function(){ tech.play(); }, 0);
	  }
	};

	vjs.Flash.prototype['setCurrentTime'] = function(time){
	  this.lastSeekTarget_ = time;
	  this.el_.vjs_setProperty('currentTime', time);
	  vjs.MediaTechController.prototype.setCurrentTime.call(this);
	};

	vjs.Flash.prototype['currentTime'] = function(time){
	  // when seeking make the reported time keep up with the requested time
	  // by reading the time we're seeking to
	  if (this.seeking()) {
	    return this.lastSeekTarget_ || 0;
	  }
	  return this.el_.vjs_getProperty('currentTime');
	};

	vjs.Flash.prototype['currentSrc'] = function(){
	  if (this.currentSource_) {
	    return this.currentSource_.src;
	  } else {
	    return this.el_.vjs_getProperty('currentSrc');
	  }
	};

	vjs.Flash.prototype.load = function(){
	  this.el_.vjs_load();
	};

	vjs.Flash.prototype.poster = function(){
	  this.el_.vjs_getProperty('poster');
	};
	vjs.Flash.prototype['setPoster'] = function(){
	  // poster images are not handled by the Flash tech so make this a no-op
	};

	vjs.Flash.prototype.buffered = function(){
	  return vjs.createTimeRange(0, this.el_.vjs_getProperty('buffered'));
	};

	vjs.Flash.prototype.supportsFullScreen = function(){
	  return false; // Flash does not allow fullscreen through javascript
	};

	vjs.Flash.prototype.enterFullScreen = function(){
	  return false;
	};

	(function(){
	  // Create setters and getters for attributes
	  var api = vjs.Flash.prototype,
	    readWrite = 'rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted'.split(','),
	    readOnly = 'error,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight'.split(','),
	    // Overridden: buffered, currentTime, currentSrc
	    i;

	  function createSetter(attr){
	    var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
	    api['set'+attrUpper] = function(val){ return this.el_.vjs_setProperty(attr, val); };
	  }
	  function createGetter(attr) {
	    api[attr] = function(){ return this.el_.vjs_getProperty(attr); };
	  }

	  // Create getter and setters for all read/write attributes
	  for (i = 0; i < readWrite.length; i++) {
	    createGetter(readWrite[i]);
	    createSetter(readWrite[i]);
	  }

	  // Create getters for read-only attributes
	  for (i = 0; i < readOnly.length; i++) {
	    createGetter(readOnly[i]);
	  }
	})();

	/* Flash Support Testing -------------------------------------------------------- */

	vjs.Flash.isSupported = function(){
	  return vjs.Flash.version()[0] >= 10;
	  // return swfobject.hasFlashPlayerVersion('10');
	};

	// Add Source Handler pattern functions to this tech
	vjs.MediaTechController.withSourceHandlers(vjs.Flash);

	/**
	 * The default native source handler.
	 * This simply passes the source to the video element. Nothing fancy.
	 * @param  {Object} source   The source object
	 * @param  {vjs.Flash} tech  The instance of the Flash tech
	 */
	vjs.Flash.nativeSourceHandler = {};

	/**
	 * Check Flash can handle the source natively
	 * @param  {Object} source  The source object
	 * @return {String}         'probably', 'maybe', or '' (empty string)
	 */
	vjs.Flash.nativeSourceHandler.canHandleSource = function(source){
	  var type;

	  if (!source.type) {
	    return '';
	  }

	  // Strip code information from the type because we don't get that specific
	  type = source.type.replace(/;.*/,'').toLowerCase();

	  if (type in vjs.Flash.formats) {
	    return 'maybe';
	  }

	  return '';
	};

	/**
	 * Pass the source to the flash object
	 * Adaptive source handlers will have more complicated workflows before passing
	 * video data to the video element
	 * @param  {Object} source    The source object
	 * @param  {vjs.Flash} tech   The instance of the Flash tech
	 */
	vjs.Flash.nativeSourceHandler.handleSource = function(source, tech){
	  tech.setSrc(source.src);
	};

	/**
	 * Clean up the source handler when disposing the player or switching sources..
	 * (no cleanup is needed when supporting the format natively)
	 */
	vjs.Flash.nativeSourceHandler.dispose = function(){};

	// Register the native source handler
	vjs.Flash.registerSourceHandler(vjs.Flash.nativeSourceHandler);

	vjs.Flash.formats = {
	  'video/flv': 'FLV',
	  'video/x-flv': 'FLV',
	  'video/mp4': 'MP4',
	  'video/m4v': 'MP4'
	};

	vjs.Flash['onReady'] = function(currSwf){
	  var el, player;

	  el = vjs.el(currSwf);

	  // get player from the player div property
	  player = el && el.parentNode && el.parentNode['player'];

	  // if there is no el or player then the tech has been disposed
	  // and the tech element was removed from the player div
	  if (player) {
	    // reference player on tech element
	    el['player'] = player;
	    // check that the flash object is really ready
	    vjs.Flash['checkReady'](player.tech);
	  }
	};

	// The SWF isn't always ready when it says it is. Sometimes the API functions still need to be added to the object.
	// If it's not ready, we set a timeout to check again shortly.
	vjs.Flash['checkReady'] = function(tech){
	  // stop worrying if the tech has been disposed
	  if (!tech.el()) {
	    return;
	  }

	  // check if API property exists
	  if (tech.el().vjs_getProperty) {
	    // tell tech it's ready
	    tech.triggerReady();
	  } else {
	    // wait longer
	    this.setTimeout(function(){
	      vjs.Flash['checkReady'](tech);
	    }, 50);
	  }
	};

	// Trigger events from the swf on the player
	vjs.Flash['onEvent'] = function(swfID, eventName){
	  var player = vjs.el(swfID)['player'];
	  player.trigger(eventName);
	};

	// Log errors from the swf
	vjs.Flash['onError'] = function(swfID, err){
	  var player = vjs.el(swfID)['player'];
	  var msg = 'FLASH: '+err;

	  if (err == 'srcnotfound') {
	    player.error({ code: 4, message: msg });

	  // errors we haven't categorized into the media errors
	  } else {
	    player.error(msg);
	  }
	};

	// Flash Version Check
	vjs.Flash.version = function(){
	  var version = '0,0,0';

	  // IE
	  try {
	    version = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];

	  // other browsers
	  } catch(e) {
	    try {
	      if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin){
	        version = (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
	      }
	    } catch(err) {}
	  }
	  return version.split(',');
	};

	// Flash embedding method. Only used in non-iframe mode
	vjs.Flash.embed = function(swf, placeHolder, flashVars, params, attributes){
	  var code = vjs.Flash.getEmbedCode(swf, flashVars, params, attributes),

	      // Get element by embedding code and retrieving created element
	      obj = vjs.createEl('div', { innerHTML: code }).childNodes[0],

	      par = placeHolder.parentNode
	  ;

	  placeHolder.parentNode.replaceChild(obj, placeHolder);
	  obj[vjs.expando] = placeHolder[vjs.expando];

	  // IE6 seems to have an issue where it won't initialize the swf object after injecting it.
	  // This is a dumb fix
	  var newObj = par.childNodes[0];
	  setTimeout(function(){
	    newObj.style.display = 'block';
	  }, 1000);

	  return obj;

	};

	vjs.Flash.getEmbedCode = function(swf, flashVars, params, attributes){

	  var objTag = '<object type="application/x-shockwave-flash" ',
	      flashVarsString = '',
	      paramsString = '',
	      attrsString = '';

	  // Convert flash vars to string
	  if (flashVars) {
	    vjs.obj.each(flashVars, function(key, val){
	      flashVarsString += (key + '=' + val + '&amp;');
	    });
	  }

	  // Add swf, flashVars, and other default params
	  params = vjs.obj.merge({
	    'movie': swf,
	    'flashvars': flashVarsString,
	    'allowScriptAccess': 'always', // Required to talk to swf
	    'allowNetworking': 'all' // All should be default, but having security issues.
	  }, params);

	  // Create param tags string
	  vjs.obj.each(params, function(key, val){
	    paramsString += '<param name="'+key+'" value="'+val+'" />';
	  });

	  attributes = vjs.obj.merge({
	    // Add swf to attributes (need both for IE and Others to work)
	    'data': swf,

	    // Default to 100% width/height
	    'width': '100%',
	    'height': '100%'

	  }, attributes);

	  // Create Attributes string
	  vjs.obj.each(attributes, function(key, val){
	    attrsString += (key + '="' + val + '" ');
	  });

	  return objTag + attrsString + '>' + paramsString + '</object>';
	};
	vjs.Flash.streamingFormats = {
	  'rtmp/mp4': 'MP4',
	  'rtmp/flv': 'FLV'
	};

	vjs.Flash.streamFromParts = function(connection, stream) {
	  return connection + '&' + stream;
	};

	vjs.Flash.streamToParts = function(src) {
	  var parts = {
	    connection: '',
	    stream: ''
	  };

	  if (! src) {
	    return parts;
	  }

	  // Look for the normal URL separator we expect, '&'.
	  // If found, we split the URL into two pieces around the
	  // first '&'.
	  var connEnd = src.indexOf('&');
	  var streamBegin;
	  if (connEnd !== -1) {
	    streamBegin = connEnd + 1;
	  }
	  else {
	    // If there's not a '&', we use the last '/' as the delimiter.
	    connEnd = streamBegin = src.lastIndexOf('/') + 1;
	    if (connEnd === 0) {
	      // really, there's not a '/'?
	      connEnd = streamBegin = src.length;
	    }
	  }
	  parts.connection = src.substring(0, connEnd);
	  parts.stream = src.substring(streamBegin, src.length);

	  return parts;
	};

	vjs.Flash.isStreamingType = function(srcType) {
	  return srcType in vjs.Flash.streamingFormats;
	};

	// RTMP has four variations, any string starting
	// with one of these protocols should be valid
	vjs.Flash.RTMP_RE = /^rtmp[set]?:\/\//i;

	vjs.Flash.isStreamingSrc = function(src) {
	  return vjs.Flash.RTMP_RE.test(src);
	};

	/**
	 * A source handler for RTMP urls
	 * @type {Object}
	 */
	vjs.Flash.rtmpSourceHandler = {};

	/**
	 * Check Flash can handle the source natively
	 * @param  {Object} source  The source object
	 * @return {String}         'probably', 'maybe', or '' (empty string)
	 */
	vjs.Flash.rtmpSourceHandler.canHandleSource = function(source){
	  if (vjs.Flash.isStreamingType(source.type) || vjs.Flash.isStreamingSrc(source.src)) {
	    return 'maybe';
	  }

	  return '';
	};

	/**
	 * Pass the source to the flash object
	 * Adaptive source handlers will have more complicated workflows before passing
	 * video data to the video element
	 * @param  {Object} source    The source object
	 * @param  {vjs.Flash} tech   The instance of the Flash tech
	 */
	vjs.Flash.rtmpSourceHandler.handleSource = function(source, tech){
	  var srcParts = vjs.Flash.streamToParts(source.src);

	  tech['setRtmpConnection'](srcParts.connection);
	  tech['setRtmpStream'](srcParts.stream);
	};

	// Register the native source handler
	vjs.Flash.registerSourceHandler(vjs.Flash.rtmpSourceHandler);
	/**
	 * The Media Loader is the component that decides which playback technology to load
	 * when the player is initialized.
	 *
	 * @constructor
	 */
	vjs.MediaLoader = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.Component.call(this, player, options, ready);

	    // If there are no sources when the player is initialized,
	    // load the first supported playback technology.
	    if (!player.options_['sources'] || player.options_['sources'].length === 0) {
	      for (var i=0,j=player.options_['techOrder']; i<j.length; i++) {
	        var techName = vjs.capitalize(j[i]),
	            tech = window['videojs'][techName];

	        // Check if the browser supports this technology
	        if (tech && tech.isSupported()) {
	          player.loadTech(techName);
	          break;
	        }
	      }
	    } else {
	      // // Loop through playback technologies (HTML5, Flash) and check for support.
	      // // Then load the best source.
	      // // A few assumptions here:
	      // //   All playback technologies respect preload false.
	      player.src(player.options_['sources']);
	    }
	  }
	});
	/*
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackmode
	 *
	 * enum TextTrackMode { "disabled",  "hidden",  "showing" };
	 */
	vjs.TextTrackMode = {
	  'disabled': 'disabled',
	  'hidden': 'hidden',
	  'showing': 'showing'
	};

	/*
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackkind
	 *
	 * enum TextTrackKind { "subtitles",  "captions",  "descriptions",  "chapters",  "metadata" };
	 */
	vjs.TextTrackKind = {
	  'subtitles': 'subtitles',
	  'captions': 'captions',
	  'descriptions': 'descriptions',
	  'chapters': 'chapters',
	  'metadata': 'metadata'
	};
	(function() {
	/*
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttrack
	 *
	 * interface TextTrack : EventTarget {
	 *   readonly attribute TextTrackKind kind;
	 *   readonly attribute DOMString label;
	 *   readonly attribute DOMString language;
	 *
	 *   readonly attribute DOMString id;
	 *   readonly attribute DOMString inBandMetadataTrackDispatchType;
	 *
	 *   attribute TextTrackMode mode;
	 *
	 *   readonly attribute TextTrackCueList? cues;
	 *   readonly attribute TextTrackCueList? activeCues;
	 *
	 *   void addCue(TextTrackCue cue);
	 *   void removeCue(TextTrackCue cue);
	 *
	 *   attribute EventHandler oncuechange;
	 * };
	 */

	vjs.TextTrack = function(options) {
	  var tt, id, mode, kind, label, language, cues, activeCues, timeupdateHandler, changed, prop;

	  options = options || {};

	  if (!options['player']) {
	    throw new Error('A player was not provided.');
	  }

	  tt = this;
	  if (vjs.IS_IE8) {
	    tt = document.createElement('custom');

	    for (prop in vjs.TextTrack.prototype) {
	      tt[prop] = vjs.TextTrack.prototype[prop];
	    }
	  }

	  tt.player_ = options['player'];

	  mode = vjs.TextTrackMode[options['mode']] || 'disabled';
	  kind = vjs.TextTrackKind[options['kind']] || 'subtitles';
	  label = options['label'] || '';
	  language = options['language'] || options['srclang'] || '';
	  id = options['id'] || 'vjs_text_track_' + vjs.guid++;

	  if (kind === 'metadata' || kind === 'chapters') {
	    mode = 'hidden';
	  }

	  tt.cues_ = [];
	  tt.activeCues_ = [];

	  cues = new vjs.TextTrackCueList(tt.cues_);
	  activeCues = new vjs.TextTrackCueList(tt.activeCues_);

	  changed = false;
	  timeupdateHandler = vjs.bind(tt, function() {
	    this['activeCues'];
	    if (changed) {
	      this['trigger']('cuechange');
	      changed = false;
	    }
	  });
	  if (mode !== 'disabled') {
	    tt.player_.on('timeupdate', timeupdateHandler);
	  }

	  Object.defineProperty(tt, 'kind', {
	    get: function() {
	      return kind;
	    },
	    set: Function.prototype
	  });

	  Object.defineProperty(tt, 'label', {
	    get: function() {
	      return label;
	    },
	    set: Function.prototype
	  });

	  Object.defineProperty(tt, 'language', {
	    get: function() {
	      return language;
	    },
	    set: Function.prototype
	  });

	  Object.defineProperty(tt, 'id', {
	    get: function() {
	      return id;
	    },
	    set: Function.prototype
	  });

	  Object.defineProperty(tt, 'mode', {
	    get: function() {
	      return mode;
	    },
	    set: function(newMode) {
	      if (!vjs.TextTrackMode[newMode]) {
	        return;
	      }
	      mode = newMode;
	      if (mode === 'showing') {
	        this.player_.on('timeupdate', timeupdateHandler);
	      }
	      this.trigger('modechange');
	    }
	  });

	  Object.defineProperty(tt, 'cues', {
	    get: function() {
	      if (!this.loaded_) {
	        return null;
	      }

	      return cues;
	    },
	    set: Function.prototype
	  });

	  Object.defineProperty(tt, 'activeCues', {
	    get: function() {
	      var i, l, active, ct, cue;

	      if (!this.loaded_) {
	        return null;
	      }

	      if (this['cues'].length === 0) {
	        return activeCues; // nothing to do
	      }

	      ct = this.player_.currentTime();
	      i = 0;
	      l = this['cues'].length;
	      active = [];

	      for (; i < l; i++) {
	        cue = this['cues'][i];
	        if (cue['startTime'] <= ct && cue['endTime'] >= ct) {
	          active.push(cue);
	        } else if (cue['startTime'] === cue['endTime'] && cue['startTime'] <= ct && cue['startTime'] + 0.5 >= ct) {
	          active.push(cue);
	        }
	      }

	      changed = false;

	      if (active.length !== this.activeCues_.length) {
	        changed = true;
	      } else {
	        for (i = 0; i < active.length; i++) {
	          if (indexOf.call(this.activeCues_, active[i]) === -1) {
	            changed = true;
	          }
	        }
	      }

	      this.activeCues_ = active;
	      activeCues.setCues_(this.activeCues_);

	      return activeCues;
	    },
	    set: Function.prototype
	  });

	  if (options.src) {
	    loadTrack(options.src, tt);
	  } else {
	    tt.loaded_ = true;
	  }

	  if (vjs.IS_IE8) {
	    return tt;
	  }
	};

	vjs.TextTrack.prototype = vjs.obj.create(vjs.EventEmitter.prototype);
	vjs.TextTrack.prototype.constructor = vjs.TextTrack;

	/*
	 * cuechange - One or more cues in the track have become active or stopped being active.
	 */
	vjs.TextTrack.prototype.allowedEvents_ = {
	  'cuechange': 'cuechange'
	};

	vjs.TextTrack.prototype.addCue = function(cue) {
	  var tracks = this.player_.textTracks(),
	      i = 0;

	  if (tracks) {
	    for (; i < tracks.length; i++) {
	      if (tracks[i] !== this) {
	        tracks[i].removeCue(cue);
	      }
	    }
	  }

	  this.cues_.push(cue);
	  this['cues'].setCues_(this.cues_);
	};

	vjs.TextTrack.prototype.removeCue = function(removeCue) {
	  var i = 0,
	      l = this.cues_.length,
	      cue,
	      removed = false;

	  for (; i < l; i++) {
	    cue = this.cues_[i];
	    if (cue === removeCue) {
	      this.cues_.splice(i, 1);
	      removed = true;
	    }
	  }

	  if (removed) {
	    this.cues.setCues_(this.cues_);
	  }
	};

	/*
	 * Downloading stuff happens below this point
	 */
	var loadTrack, parseCues, indexOf;

	loadTrack = function(src, track) {
	  vjs.xhr(src, vjs.bind(this, function(err, response, responseBody){
	    if (err) {
	      return vjs.log.error(err);
	    }


	    track.loaded_ = true;
	    parseCues(responseBody, track);
	  }));
	};

	parseCues = function(srcContent, track) {
	  if (typeof window['WebVTT'] !== 'function') {
	    //try again a bit later
	    return window.setTimeout(function() {
	      parseCues(srcContent, track);
	    }, 25);
	  }

	  var parser = new window['WebVTT']['Parser'](window, window['vttjs'], window['WebVTT']['StringDecoder']());

	  parser['oncue'] = function(cue) {
	    track.addCue(cue);
	  };
	  parser['onparsingerror'] = function(error) {
	    vjs.log.error(error);
	  };

	  parser['parse'](srcContent);
	  parser['flush']();
	};

	indexOf = function(searchElement, fromIndex) {

	  var k;

	  if (this == null) {
	    throw new TypeError('"this" is null or not defined');
	  }

	  var O = Object(this);

	  var len = O.length >>> 0;

	  if (len === 0) {
	    return -1;
	  }

	  var n = +fromIndex || 0;

	  if (Math.abs(n) === Infinity) {
	    n = 0;
	  }

	  if (n >= len) {
	    return -1;
	  }

	  k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

	  while (k < len) {
	    if (k in O && O[k] === searchElement) {
	      return k;
	    }
	    k++;
	  }
	  return -1;
	};

	})();
	/*
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttracklist
	 *
	 * interface TextTrackList : EventTarget {
	 *   readonly attribute unsigned long length;
	 *   getter TextTrack (unsigned long index);
	 *   TextTrack? getTrackById(DOMString id);
	 * 
	 *   attribute EventHandler onchange;
	 *   attribute EventHandler onaddtrack;
	 *   attribute EventHandler onremovetrack;
	 * };
	 */
	vjs.TextTrackList = function(tracks) {
	  var list = this,
	      prop,
	      i = 0;

	  if (vjs.IS_IE8) {
	    list = document.createElement('custom');

	    for (prop in vjs.TextTrackList.prototype) {
	      list[prop] = vjs.TextTrackList.prototype[prop];
	    }
	  }

	  tracks = tracks || [];
	  list.tracks_ = [];

	  Object.defineProperty(list, 'length', {
	    get: function() {
	      return this.tracks_.length;
	    }
	  });

	  for (; i < tracks.length; i++) {
	    list.addTrack_(tracks[i]);
	  }

	  if (vjs.IS_IE8) {
	    return list;
	  }
	};

	vjs.TextTrackList.prototype = vjs.obj.create(vjs.EventEmitter.prototype);
	vjs.TextTrackList.prototype.constructor = vjs.TextTrackList;

	/*
	 * change - One or more tracks in the track list have been enabled or disabled.
	 * addtrack - A track has been added to the track list.
	 * removetrack - A track has been removed from the track list.
	*/
	vjs.TextTrackList.prototype.allowedEvents_ = {
	  'change': 'change',
	  'addtrack': 'addtrack',
	  'removetrack': 'removetrack'
	};

	// emulate attribute EventHandler support to allow for feature detection
	(function() {
	  var event;

	  for (event in vjs.TextTrackList.prototype.allowedEvents_) {
	    vjs.TextTrackList.prototype['on' + event] = null;
	  }
	})();

	vjs.TextTrackList.prototype.addTrack_ = function(track) {
	  var index = this.tracks_.length;
	  if (!(''+index in this)) {
	    Object.defineProperty(this, index, {
	      get: function() {
	        return this.tracks_[index];
	      }
	    });
	  }

	  track.addEventListener('modechange', vjs.bind(this, function() {
	    this.trigger('change');
	  }));
	  this.tracks_.push(track);

	  this.trigger({
	    type: 'addtrack',
	    track: track
	  });
	};

	vjs.TextTrackList.prototype.removeTrack_ = function(rtrack) {
	  var i = 0,
	      l = this.length,
	      result = null,
	      track;

	  for (; i < l; i++) {
	    track = this[i];
	    if (track === rtrack) {
	      this.tracks_.splice(i, 1);
	      break;
	    }
	  }

	  this.trigger({
	    type: 'removetrack',
	    track: rtrack
	  });
	};

	vjs.TextTrackList.prototype.getTrackById = function(id) {
	  var i = 0,
	      l = this.length,
	      result = null,
	      track;

	  for (; i < l; i++) {
	    track = this[i];
	    if (track.id === id) {
	      result = track;
	      break;
	    }
	  }

	  return result;
	};
	/*
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcuelist
	 *
	 * interface TextTrackCueList {
	 *   readonly attribute unsigned long length;
	 *   getter TextTrackCue (unsigned long index);
	 *   TextTrackCue? getCueById(DOMString id);
	 * };
	 */

	vjs.TextTrackCueList = function(cues) {
	  var list = this,
	      prop;

	  if (vjs.IS_IE8) {
	    list = document.createElement('custom');

	    for (prop in vjs.TextTrackCueList.prototype) {
	      list[prop] = vjs.TextTrackCueList.prototype[prop];
	    }
	  }

	  vjs.TextTrackCueList.prototype.setCues_.call(list, cues);

	  Object.defineProperty(list, 'length', {
	    get: function() {
	      return this.length_;
	    }
	  });

	  if (vjs.IS_IE8) {
	    return list;
	  }
	};

	vjs.TextTrackCueList.prototype.setCues_ = function(cues) {
	  var oldLength = this.length || 0,
	      i = 0,
	      l = cues.length,
	      defineProp;

	  this.cues_ = cues;
	  this.length_ = cues.length;

	  defineProp = function(i) {
	    if (!(''+i in this)) {
	      Object.defineProperty(this, '' + i, {
	        get: function() {
	          return this.cues_[i];
	        }
	      });
	    }
	  };

	  if (oldLength < l) {
	    i = oldLength;
	    for(; i < l; i++) {
	      defineProp.call(this, i);
	    }
	  }
	};

	vjs.TextTrackCueList.prototype.getCueById = function(id) {
	  var i = 0,
	      l = this.length,
	      result = null,
	      cue;

	  for (; i < l; i++) {
	    cue = this[i];
	    if (cue.id === id) {
	      result = cue;
	      break;
	    }
	  }

	  return result;
	};
	(function() {
	'use strict';

	/* Text Track Display
	============================================================================= */
	// Global container for both subtitle and captions text. Simple div container.

	/**
	 * The component for displaying text track cues
	 *
	 * @constructor
	 */
	vjs.TextTrackDisplay = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.Component.call(this, player, options, ready);

	    player.on('loadstart', vjs.bind(this, this.toggleDisplay));

	    // This used to be called during player init, but was causing an error
	    // if a track should show by default and the display hadn't loaded yet.
	    // Should probably be moved to an external track loader when we support
	    // tracks that don't need a display.
	    player.ready(vjs.bind(this, function() {
	      if (player.tech && player.tech['featuresNativeTextTracks']) {
	        this.hide();
	        return;
	      }

	      var i, tracks, track;

	      player.on('fullscreenchange', vjs.bind(this, this.updateDisplay));

	      tracks = player.options_['tracks'] || [];
	      for (i = 0; i < tracks.length; i++) {
	        track = tracks[i];
	        this.player_.addRemoteTextTrack(track);
	      }
	    }));
	  }
	});

	vjs.TextTrackDisplay.prototype.toggleDisplay = function() {
	  if (this.player_.tech && this.player_.tech['featuresNativeTextTracks']) {
	    this.hide();
	  } else {
	    this.show();
	  }
	};

	vjs.TextTrackDisplay.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-text-track-display'
	  });
	};

	vjs.TextTrackDisplay.prototype.clearDisplay = function() {
	  if (typeof window['WebVTT'] === 'function') {
	    window['WebVTT']['processCues'](window, [], this.el_);
	  }
	};

	// Add cue HTML to display
	var constructColor = function(color, opacity) {
	  return 'rgba(' +
	    // color looks like "#f0e"
	    parseInt(color[1] + color[1], 16) + ',' +
	    parseInt(color[2] + color[2], 16) + ',' +
	    parseInt(color[3] + color[3], 16) + ',' +
	    opacity + ')';
	};
	var darkGray = '#222';
	var lightGray = '#ccc';
	var fontMap = {
	  monospace:             'monospace',
	  sansSerif:             'sans-serif',
	  serif:                 'serif',
	  monospaceSansSerif:    '"Andale Mono", "Lucida Console", monospace',
	  monospaceSerif:        '"Courier New", monospace',
	  proportionalSansSerif: 'sans-serif',
	  proportionalSerif:     'serif',
	  casual:                '"Comic Sans MS", Impact, fantasy',
	  script:                '"Monotype Corsiva", cursive',
	  smallcaps:             '"Andale Mono", "Lucida Console", monospace, sans-serif'
	};
	var tryUpdateStyle = function(el, style, rule) {
	  // some style changes will throw an error, particularly in IE8. Those should be noops.
	  try {
	    el.style[style] = rule;
	  } catch (e) {}
	};

	vjs.TextTrackDisplay.prototype.updateDisplay = function() {
	  var tracks = this.player_.textTracks(),
	      i = 0,
	      track;

	  this.clearDisplay();

	  if (!tracks) {
	    return;
	  }

	  for (; i < tracks.length; i++) {
	    track = tracks[i];
	    if (track['mode'] === 'showing') {
	      this.updateForTrack(track);
	    }
	  }
	};

	vjs.TextTrackDisplay.prototype.updateForTrack = function(track) {
	  if (typeof window['WebVTT'] !== 'function' || !track['activeCues']) {
	    return;
	  }

	  var i = 0,
	      property,
	      cueDiv,
	      overrides = this.player_['textTrackSettings'].getValues(),
	      fontSize,
	      cues = [];

	  for (; i < track['activeCues'].length; i++) {
	    cues.push(track['activeCues'][i]);
	  }

	  window['WebVTT']['processCues'](window, track['activeCues'], this.el_);

	  i = cues.length;
	  while (i--) {
	    cueDiv = cues[i].displayState;
	    if (overrides.color) {
	      cueDiv.firstChild.style.color = overrides.color;
	    }
	    if (overrides.textOpacity) {
	      tryUpdateStyle(cueDiv.firstChild,
	                     'color',
	                     constructColor(overrides.color || '#fff',
	                                    overrides.textOpacity));
	    }
	    if (overrides.backgroundColor) {
	      cueDiv.firstChild.style.backgroundColor = overrides.backgroundColor;
	    }
	    if (overrides.backgroundOpacity) {
	      tryUpdateStyle(cueDiv.firstChild,
	                     'backgroundColor',
	                     constructColor(overrides.backgroundColor || '#000',
	                                    overrides.backgroundOpacity));
	    }
	    if (overrides.windowColor) {
	      if (overrides.windowOpacity) {
	        tryUpdateStyle(cueDiv,
	                       'backgroundColor',
	                       constructColor(overrides.windowColor, overrides.windowOpacity));
	      } else {
	        cueDiv.style.backgroundColor = overrides.windowColor;
	      }
	    }
	    if (overrides.edgeStyle) {
	      if (overrides.edgeStyle === 'dropshadow') {
	        cueDiv.firstChild.style.textShadow = '2px 2px 3px ' + darkGray + ', 2px 2px 4px ' + darkGray + ', 2px 2px 5px ' + darkGray;
	      } else if (overrides.edgeStyle === 'raised') {
	        cueDiv.firstChild.style.textShadow = '1px 1px ' + darkGray + ', 2px 2px ' + darkGray + ', 3px 3px ' + darkGray;
	      } else if (overrides.edgeStyle === 'depressed') {
	        cueDiv.firstChild.style.textShadow = '1px 1px ' + lightGray + ', 0 1px ' + lightGray + ', -1px -1px ' + darkGray + ', 0 -1px ' + darkGray;
	      } else if (overrides.edgeStyle === 'uniform') {
	        cueDiv.firstChild.style.textShadow = '0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray;
	      }
	    }
	    if (overrides.fontPercent && overrides.fontPercent !== 1) {
	      fontSize = window.parseFloat(cueDiv.style.fontSize);
	      cueDiv.style.fontSize = (fontSize * overrides.fontPercent) + 'px';
	      cueDiv.style.height = 'auto';
	      cueDiv.style.top = 'auto';
	      cueDiv.style.bottom = '2px';
	    }
	    if (overrides.fontFamily && overrides.fontFamily !== 'default') {
	      if (overrides.fontFamily === 'small-caps') {
	        cueDiv.firstChild.style.fontVariant = 'small-caps';
	      } else {
	        cueDiv.firstChild.style.fontFamily = fontMap[overrides.fontFamily];
	      }
	    }
	  }
	};


	/**
	 * The specific menu item type for selecting a language within a text track kind
	 *
	 * @constructor
	 */
	vjs.TextTrackMenuItem = vjs.MenuItem.extend({
	  /** @constructor */
	  init: function(player, options){
	    var track = this.track = options['track'],
	        tracks = player.textTracks(),
	        changeHandler,
	        event;

	    if (tracks) {
	      changeHandler = vjs.bind(this, function() {
	        var selected = this.track['mode'] === 'showing',
	            track,
	            i,
	            l;

	        if (this instanceof vjs.OffTextTrackMenuItem) {
	          selected = true;

	          i = 0,
	          l = tracks.length;

	          for (; i < l; i++) {
	            track = tracks[i];
	            if (track['kind'] === this.track['kind'] && track['mode'] === 'showing') {
	              selected = false;
	              break;
	            }
	          }
	        }

	        this.selected(selected);
	      });
	      tracks.addEventListener('change', changeHandler);
	      player.on('dispose', function() {
	        tracks.removeEventListener('change', changeHandler);
	      });
	    }

	    // Modify options for parent MenuItem class's init.
	    options['label'] = track['label'] || track['language'] || 'Unknown';
	    options['selected'] = track['default'] || track['mode'] === 'showing';
	    vjs.MenuItem.call(this, player, options);

	    // iOS7 doesn't dispatch change events to TextTrackLists when an
	    // associated track's mode changes. Without something like
	    // Object.observe() (also not present on iOS7), it's not
	    // possible to detect changes to the mode attribute and polyfill
	    // the change event. As a poor substitute, we manually dispatch
	    // change events whenever the controls modify the mode.
	    if (tracks && tracks.onchange === undefined) {
	      this.on(['tap', 'click'], function() {
	        if (typeof window.Event !== 'object') {
	          // Android 2.3 throws an Illegal Constructor error for window.Event
	          try {
	            event = new window.Event('change');
	          } catch(err){}
	        }

	        if (!event) {
	          event = document.createEvent('Event');
	          event.initEvent('change', true, true);
	        }

	        tracks.dispatchEvent(event);
	      });
	    }
	  }
	});

	vjs.TextTrackMenuItem.prototype.onClick = function(){
	  var kind = this.track['kind'],
	      tracks = this.player_.textTracks(),
	      mode,
	      track,
	      i = 0;

	  vjs.MenuItem.prototype.onClick.call(this);

	  if (!tracks) {
	    return;
	  }

	  for (; i < tracks.length; i++) {
	    track = tracks[i];

	    if (track['kind'] !== kind) {
	      continue;
	    }

	    if (track === this.track) {
	      track['mode'] = 'showing';
	    } else {
	      track['mode'] = 'disabled';
	    }
	  }
	};

	/**
	 * A special menu item for turning of a specific type of text track
	 *
	 * @constructor
	 */
	vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
	  /** @constructor */
	  init: function(player, options){
	    // Create pseudo track info
	    // Requires options['kind']
	    options['track'] = {
	      'kind': options['kind'],
	      'player': player,
	      'label': options['kind'] + ' off',
	      'default': false,
	      'mode': 'disabled'
	    };
	    vjs.TextTrackMenuItem.call(this, player, options);
	    this.selected(true);
	  }
	});

	vjs.CaptionSettingsMenuItem = vjs.TextTrackMenuItem.extend({
	  init: function(player, options) {
	    options['track'] = {
	      'kind': options['kind'],
	      'player': player,
	      'label': options['kind'] + ' settings',
	      'default': false,
	      mode: 'disabled'
	    };

	    vjs.TextTrackMenuItem.call(this, player, options);
	    this.addClass('vjs-texttrack-settings');
	  }
	});

	vjs.CaptionSettingsMenuItem.prototype.onClick = function() {
	  this.player().getChild('textTrackSettings').show();
	};

	/**
	 * The base class for buttons that toggle specific text track types (e.g. subtitles)
	 *
	 * @constructor
	 */
	vjs.TextTrackButton = vjs.MenuButton.extend({
	  /** @constructor */
	  init: function(player, options){
	    var tracks, updateHandler;

	    vjs.MenuButton.call(this, player, options);

	    tracks = this.player_.textTracks();

	    if (this.items.length <= 1) {
	      this.hide();
	    }

	    if (!tracks) {
	      return;
	    }

	    updateHandler = vjs.bind(this, this.update);
	    tracks.addEventListener('removetrack', updateHandler);
	    tracks.addEventListener('addtrack', updateHandler);

	    this.player_.on('dispose', function() {
	      tracks.removeEventListener('removetrack', updateHandler);
	      tracks.removeEventListener('addtrack', updateHandler);
	    });
	  }
	});

	// Create a menu item for each text track
	vjs.TextTrackButton.prototype.createItems = function(){
	  var items = [], track, tracks;

	  if (this instanceof vjs.CaptionsButton && !(this.player().tech && this.player().tech['featuresNativeTextTracks'])) {
	    items.push(new vjs.CaptionSettingsMenuItem(this.player_, { 'kind': this.kind_ }));
	  }

	  // Add an OFF menu item to turn all tracks off
	  items.push(new vjs.OffTextTrackMenuItem(this.player_, { 'kind': this.kind_ }));

	  tracks = this.player_.textTracks();

	  if (!tracks) {
	    return items;
	  }

	  for (var i = 0; i < tracks.length; i++) {
	    track = tracks[i];

	    // only add tracks that are of the appropriate kind and have a label
	    if (track['kind'] === this.kind_) {
	      items.push(new vjs.TextTrackMenuItem(this.player_, {
	        'track': track
	      }));
	    }
	  }

	  return items;
	};

	/**
	 * The button component for toggling and selecting captions
	 *
	 * @constructor
	 */
	vjs.CaptionsButton = vjs.TextTrackButton.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.TextTrackButton.call(this, player, options, ready);
	    this.el_.setAttribute('aria-label','Captions Menu');
	  }
	});
	vjs.CaptionsButton.prototype.kind_ = 'captions';
	vjs.CaptionsButton.prototype.buttonText = 'Captions';
	vjs.CaptionsButton.prototype.className = 'vjs-captions-button';

	vjs.CaptionsButton.prototype.update = function() {
	  var threshold = 2;
	  vjs.TextTrackButton.prototype.update.call(this);

	  // if native, then threshold is 1 because no settings button
	  if (this.player().tech && this.player().tech['featuresNativeTextTracks']) {
	    threshold = 1;
	  }

	  if (this.items && this.items.length > threshold) {
	    this.show();
	  } else {
	    this.hide();
	  }
	};

	/**
	 * The button component for toggling and selecting subtitles
	 *
	 * @constructor
	 */
	vjs.SubtitlesButton = vjs.TextTrackButton.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.TextTrackButton.call(this, player, options, ready);
	    this.el_.setAttribute('aria-label','Subtitles Menu');
	  }
	});
	vjs.SubtitlesButton.prototype.kind_ = 'subtitles';
	vjs.SubtitlesButton.prototype.buttonText = 'Subtitles';
	vjs.SubtitlesButton.prototype.className = 'vjs-subtitles-button';

	// Chapters act much differently than other text tracks
	// Cues are navigation vs. other tracks of alternative languages
	/**
	 * The button component for toggling and selecting chapters
	 *
	 * @constructor
	 */
	vjs.ChaptersButton = vjs.TextTrackButton.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.TextTrackButton.call(this, player, options, ready);
	    this.el_.setAttribute('aria-label','Chapters Menu');
	  }
	});
	vjs.ChaptersButton.prototype.kind_ = 'chapters';
	vjs.ChaptersButton.prototype.buttonText = 'Chapters';
	vjs.ChaptersButton.prototype.className = 'vjs-chapters-button';

	// Create a menu item for each text track
	vjs.ChaptersButton.prototype.createItems = function(){
	  var items = [], track, tracks;

	  tracks = this.player_.textTracks();

	  if (!tracks) {
	    return items;
	  }

	  for (var i = 0; i < tracks.length; i++) {
	    track = tracks[i];
	    if (track['kind'] === this.kind_) {
	      items.push(new vjs.TextTrackMenuItem(this.player_, {
	        'track': track
	      }));
	    }
	  }

	  return items;
	};

	vjs.ChaptersButton.prototype.createMenu = function(){
	  var tracks = this.player_.textTracks() || [],
	      i = 0,
	      l = tracks.length,
	      track, chaptersTrack,
	      items = this.items = [];

	  for (; i < l; i++) {
	    track = tracks[i];
	    if (track['kind'] == this.kind_) {
	      if (!track.cues) {
	        track['mode'] = 'hidden';
	        /* jshint loopfunc:true */
	        // TODO see if we can figure out a better way of doing this https://github.com/videojs/video.js/issues/1864
	        window.setTimeout(vjs.bind(this, function() {
	          this.createMenu();
	        }), 100);
	        /* jshint loopfunc:false */
	      } else {
	        chaptersTrack = track;
	        break;
	      }
	    }
	  }

	  var menu = this.menu;
	  if (menu === undefined) {
	    menu = new vjs.Menu(this.player_);
	    menu.contentEl().appendChild(vjs.createEl('li', {
	      className: 'vjs-menu-title',
	      innerHTML: vjs.capitalize(this.kind_),
	      tabindex: -1
	    }));
	  }

	  if (chaptersTrack) {
	    var cues = chaptersTrack['cues'], cue, mi;
	    i = 0;
	    l = cues.length;

	    for (; i < l; i++) {
	      cue = cues[i];

	      mi = new vjs.ChaptersTrackMenuItem(this.player_, {
	        'track': chaptersTrack,
	        'cue': cue
	      });

	      items.push(mi);

	      menu.addChild(mi);
	    }
	    this.addChild(menu);
	  }

	  if (this.items.length > 0) {
	    this.show();
	  }

	  return menu;
	};


	/**
	 * @constructor
	 */
	vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
	  /** @constructor */
	  init: function(player, options){
	    var track = this.track = options['track'],
	        cue = this.cue = options['cue'],
	        currentTime = player.currentTime();

	    // Modify options for parent MenuItem class's init.
	    options['label'] = cue.text;
	    options['selected'] = (cue['startTime'] <= currentTime && currentTime < cue['endTime']);
	    vjs.MenuItem.call(this, player, options);

	    track.addEventListener('cuechange', vjs.bind(this, this.update));
	  }
	});

	vjs.ChaptersTrackMenuItem.prototype.onClick = function(){
	  vjs.MenuItem.prototype.onClick.call(this);
	  this.player_.currentTime(this.cue.startTime);
	  this.update(this.cue.startTime);
	};

	vjs.ChaptersTrackMenuItem.prototype.update = function(){
	  var cue = this.cue,
	      currentTime = this.player_.currentTime();

	  // vjs.log(currentTime, cue.startTime);
	  this.selected(cue['startTime'] <= currentTime && currentTime < cue['endTime']);
	};
	})();
	(function() {
	  'use strict';

	  vjs.TextTrackSettings = vjs.Component.extend({
	    init: function(player, options) {
	      vjs.Component.call(this, player, options);
	      this.hide();

	      vjs.on(this.el().querySelector('.vjs-done-button'), 'click', vjs.bind(this, function() {
	        this.saveSettings();
	        this.hide();
	      }));

	      vjs.on(this.el().querySelector('.vjs-default-button'), 'click', vjs.bind(this, function() {
	        this.el().querySelector('.vjs-fg-color > select').selectedIndex = 0;
	        this.el().querySelector('.vjs-bg-color > select').selectedIndex = 0;
	        this.el().querySelector('.window-color > select').selectedIndex = 0;
	        this.el().querySelector('.vjs-text-opacity > select').selectedIndex = 0;
	        this.el().querySelector('.vjs-bg-opacity > select').selectedIndex = 0;
	        this.el().querySelector('.vjs-window-opacity > select').selectedIndex = 0;
	        this.el().querySelector('.vjs-edge-style select').selectedIndex = 0;
	        this.el().querySelector('.vjs-font-family select').selectedIndex = 0;
	        this.el().querySelector('.vjs-font-percent select').selectedIndex = 2;
	        this.updateDisplay();
	      }));

	      vjs.on(this.el().querySelector('.vjs-fg-color > select'), 'change', vjs.bind(this, this.updateDisplay));
	      vjs.on(this.el().querySelector('.vjs-bg-color > select'), 'change', vjs.bind(this, this.updateDisplay));
	      vjs.on(this.el().querySelector('.window-color > select'), 'change', vjs.bind(this, this.updateDisplay));
	      vjs.on(this.el().querySelector('.vjs-text-opacity > select'), 'change', vjs.bind(this, this.updateDisplay));
	      vjs.on(this.el().querySelector('.vjs-bg-opacity > select'), 'change', vjs.bind(this, this.updateDisplay));
	      vjs.on(this.el().querySelector('.vjs-window-opacity > select'), 'change', vjs.bind(this, this.updateDisplay));
	      vjs.on(this.el().querySelector('.vjs-font-percent select'), 'change', vjs.bind(this, this.updateDisplay));
	      vjs.on(this.el().querySelector('.vjs-edge-style select'), 'change', vjs.bind(this, this.updateDisplay));
	      vjs.on(this.el().querySelector('.vjs-font-family select'), 'change', vjs.bind(this, this.updateDisplay));

	      if (player.options()['persistTextTrackSettings']) {
	        this.restoreSettings();
	      }
	    }
	  });

	  vjs.TextTrackSettings.prototype.createEl = function() {
	    return vjs.Component.prototype.createEl.call(this, 'div', {
	      className: 'vjs-caption-settings vjs-modal-overlay',
	      innerHTML: captionOptionsMenuTemplate()
	    });
	  };

	  vjs.TextTrackSettings.prototype.getValues = function() {
	    var el, bgOpacity, textOpacity, windowOpacity, textEdge, fontFamily, fgColor, bgColor, windowColor, result, name, fontPercent;

	    el = this.el();

	    textEdge = getSelectedOptionValue(el.querySelector('.vjs-edge-style select'));
	    fontFamily = getSelectedOptionValue(el.querySelector('.vjs-font-family select'));
	    fgColor = getSelectedOptionValue(el.querySelector('.vjs-fg-color > select'));
	    textOpacity = getSelectedOptionValue(el.querySelector('.vjs-text-opacity > select'));
	    bgColor = getSelectedOptionValue(el.querySelector('.vjs-bg-color > select'));
	    bgOpacity = getSelectedOptionValue(el.querySelector('.vjs-bg-opacity > select'));
	    windowColor = getSelectedOptionValue(el.querySelector('.window-color > select'));
	    windowOpacity = getSelectedOptionValue(el.querySelector('.vjs-window-opacity > select'));
	    fontPercent = window['parseFloat'](getSelectedOptionValue(el.querySelector('.vjs-font-percent > select')));

	    result = {
	      'backgroundOpacity': bgOpacity,
	      'textOpacity': textOpacity,
	      'windowOpacity': windowOpacity,
	      'edgeStyle': textEdge,
	      'fontFamily': fontFamily,
	      'color': fgColor,
	      'backgroundColor': bgColor,
	      'windowColor': windowColor,
	      'fontPercent': fontPercent
	    };
	    for (name in result) {
	      if (result[name] === '' || result[name] === 'none' || (name === 'fontPercent' && result[name] === 1.00)) {
	        delete result[name];
	      }
	    }
	    return result;
	  };

	  vjs.TextTrackSettings.prototype.setValues = function(values) {
	    var el = this.el(), fontPercent;

	    setSelectedOption(el.querySelector('.vjs-edge-style select'), values.edgeStyle);
	    setSelectedOption(el.querySelector('.vjs-font-family select'), values.fontFamily);
	    setSelectedOption(el.querySelector('.vjs-fg-color > select'), values.color);
	    setSelectedOption(el.querySelector('.vjs-text-opacity > select'), values.textOpacity);
	    setSelectedOption(el.querySelector('.vjs-bg-color > select'), values.backgroundColor);
	    setSelectedOption(el.querySelector('.vjs-bg-opacity > select'), values.backgroundOpacity);
	    setSelectedOption(el.querySelector('.window-color > select'), values.windowColor);
	    setSelectedOption(el.querySelector('.vjs-window-opacity > select'), values.windowOpacity);

	    fontPercent = values.fontPercent;

	    if (fontPercent) {
	      fontPercent = fontPercent.toFixed(2);
	    }

	    setSelectedOption(el.querySelector('.vjs-font-percent > select'), fontPercent);
	  };

	  vjs.TextTrackSettings.prototype.restoreSettings = function() {
	    var values;
	    try {
	      values = JSON.parse(window.localStorage.getItem('vjs-text-track-settings'));
	    } catch (e) {}

	    if (values) {
	      this.setValues(values);
	    }
	  };

	  vjs.TextTrackSettings.prototype.saveSettings = function() {
	    var values;

	    if (!this.player_.options()['persistTextTrackSettings']) {
	      return;
	    }

	    values = this.getValues();
	    try {
	      if (!vjs.isEmpty(values)) {
	        window.localStorage.setItem('vjs-text-track-settings', JSON.stringify(values));
	      } else {
	        window.localStorage.removeItem('vjs-text-track-settings');
	      }
	    } catch (e) {}
	  };

	  vjs.TextTrackSettings.prototype.updateDisplay = function() {
	    var ttDisplay = this.player_.getChild('textTrackDisplay');
	    if (ttDisplay) {
	      ttDisplay.updateDisplay();
	    }
	  };

	  function getSelectedOptionValue(target) {
	    var selectedOption;
	    // not all browsers support selectedOptions, so, fallback to options
	    if (target.selectedOptions) {
	      selectedOption = target.selectedOptions[0];
	    } else if (target.options) {
	      selectedOption = target.options[target.options.selectedIndex];
	    }

	    return selectedOption.value;
	  }

	  function setSelectedOption(target, value) {
	    var i, option;

	    if (!value) {
	      return;
	    }

	    for (i = 0; i < target.options.length; i++) {
	      option = target.options[i];
	      if (option.value === value) {
	        break;
	      }
	    }

	    target.selectedIndex = i;
	  }

	  function captionOptionsMenuTemplate() {
	    return '<div class="vjs-tracksettings">' +
	        '<div class="vjs-tracksettings-colors">' +
	          '<div class="vjs-fg-color vjs-tracksetting">' +
	              '<label class="vjs-label">Foreground</label>' +
	              '<select>' +
	                '<option value="">---</option>' +
	                '<option value="#FFF">White</option>' +
	                '<option value="#000">Black</option>' +
	                '<option value="#F00">Red</option>' +
	                '<option value="#0F0">Green</option>' +
	                '<option value="#00F">Blue</option>' +
	                '<option value="#FF0">Yellow</option>' +
	                '<option value="#F0F">Magenta</option>' +
	                '<option value="#0FF">Cyan</option>' +
	              '</select>' +
	              '<span class="vjs-text-opacity vjs-opacity">' +
	                '<select>' +
	                  '<option value="">---</option>' +
	                  '<option value="1">Opaque</option>' +
	                  '<option value="0.5">Semi-Opaque</option>' +
	                '</select>' +
	              '</span>' +
	          '</div>' + // vjs-fg-color
	          '<div class="vjs-bg-color vjs-tracksetting">' +
	              '<label class="vjs-label">Background</label>' +
	              '<select>' +
	                '<option value="">---</option>' +
	                '<option value="#FFF">White</option>' +
	                '<option value="#000">Black</option>' +
	                '<option value="#F00">Red</option>' +
	                '<option value="#0F0">Green</option>' +
	                '<option value="#00F">Blue</option>' +
	                '<option value="#FF0">Yellow</option>' +
	                '<option value="#F0F">Magenta</option>' +
	                '<option value="#0FF">Cyan</option>' +
	              '</select>' +
	              '<span class="vjs-bg-opacity vjs-opacity">' +
	                  '<select>' +
	                    '<option value="">---</option>' +
	                    '<option value="1">Opaque</option>' +
	                    '<option value="0.5">Semi-Transparent</option>' +
	                    '<option value="0">Transparent</option>' +
	                  '</select>' +
	              '</span>' +
	          '</div>' + // vjs-bg-color
	          '<div class="window-color vjs-tracksetting">' +
	              '<label class="vjs-label">Window</label>' +
	              '<select>' +
	                '<option value="">---</option>' +
	                '<option value="#FFF">White</option>' +
	                '<option value="#000">Black</option>' +
	                '<option value="#F00">Red</option>' +
	                '<option value="#0F0">Green</option>' +
	                '<option value="#00F">Blue</option>' +
	                '<option value="#FF0">Yellow</option>' +
	                '<option value="#F0F">Magenta</option>' +
	                '<option value="#0FF">Cyan</option>' +
	              '</select>' +
	              '<span class="vjs-window-opacity vjs-opacity">' +
	                  '<select>' +
	                    '<option value="">---</option>' +
	                    '<option value="1">Opaque</option>' +
	                    '<option value="0.5">Semi-Transparent</option>' +
	                    '<option value="0">Transparent</option>' +
	                  '</select>' +
	              '</span>' +
	          '</div>' + // vjs-window-color
	        '</div>' + // vjs-tracksettings
	        '<div class="vjs-tracksettings-font">' +
	          '<div class="vjs-font-percent vjs-tracksetting">' +
	            '<label class="vjs-label">Font Size</label>' +
	            '<select>' +
	              '<option value="0.50">50%</option>' +
	              '<option value="0.75">75%</option>' +
	              '<option value="1.00" selected>100%</option>' +
	              '<option value="1.25">125%</option>' +
	              '<option value="1.50">150%</option>' +
	              '<option value="1.75">175%</option>' +
	              '<option value="2.00">200%</option>' +
	              '<option value="3.00">300%</option>' +
	              '<option value="4.00">400%</option>' +
	            '</select>' +
	          '</div>' + // vjs-font-percent
	          '<div class="vjs-edge-style vjs-tracksetting">' +
	            '<label class="vjs-label">Text Edge Style</label>' +
	            '<select>' +
	              '<option value="none">None</option>' +
	              '<option value="raised">Raised</option>' +
	              '<option value="depressed">Depressed</option>' +
	              '<option value="uniform">Uniform</option>' +
	              '<option value="dropshadow">Dropshadow</option>' +
	            '</select>' +
	          '</div>' + // vjs-edge-style
	          '<div class="vjs-font-family vjs-tracksetting">' +
	            '<label class="vjs-label">Font Family</label>' +
	            '<select>' +
	              '<option value="">Default</option>' +
	              '<option value="monospaceSerif">Monospace Serif</option>' +
	              '<option value="proportionalSerif">Proportional Serif</option>' +
	              '<option value="monospaceSansSerif">Monospace Sans-Serif</option>' +
	              '<option value="proportionalSansSerif">Proportional Sans-Serif</option>' +
	              '<option value="casual">Casual</option>' +
	              '<option value="script">Script</option>' +
	              '<option value="small-caps">Small Caps</option>' +
	            '</select>' +
	          '</div>' + // vjs-font-family
	        '</div>' +
	      '</div>' +
	      '<div class="vjs-tracksettings-controls">' +
	        '<button class="vjs-default-button">Defaults</button>' +
	        '<button class="vjs-done-button">Done</button>' +
	      '</div>';
	  }

	})();
	/**
	 * @fileoverview Add JSON support
	 * @suppress {undefinedVars}
	 * (Compiler doesn't like JSON not being declared)
	 */

	/**
	 * Javascript JSON implementation
	 * (Parse Method Only)
	 * https://github.com/douglascrockford/JSON-js/blob/master/json2.js
	 * Only using for parse method when parsing data-setup attribute JSON.
	 * @suppress {undefinedVars}
	 * @namespace
	 * @private
	 */
	vjs.JSON;

	if (typeof window.JSON !== 'undefined' && typeof window.JSON.parse === 'function') {
	  vjs.JSON = window.JSON;

	} else {
	  vjs.JSON = {};

	  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

	  /**
	   * parse the json
	   *
	   * @memberof vjs.JSON
	   * @param {String} text The JSON string to parse
	   * @param {Function=} [reviver] Optional function that can transform the results
	   * @return {Object|Array} The parsed JSON
	   */
	  vjs.JSON.parse = function (text, reviver) {
	      var j;

	      function walk(holder, key) {
	          var k, v, value = holder[key];
	          if (value && typeof value === 'object') {
	              for (k in value) {
	                  if (Object.prototype.hasOwnProperty.call(value, k)) {
	                      v = walk(value, k);
	                      if (v !== undefined) {
	                          value[k] = v;
	                      } else {
	                          delete value[k];
	                      }
	                  }
	              }
	          }
	          return reviver.call(holder, key, value);
	      }
	      text = String(text);
	      cx.lastIndex = 0;
	      if (cx.test(text)) {
	          text = text.replace(cx, function (a) {
	              return '\\u' +
	                  ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	          });
	      }

	      if (/^[\],:{}\s]*$/
	              .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
	                  .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
	                  .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

	          j = eval('(' + text + ')');

	          return typeof reviver === 'function' ?
	              walk({'': j}, '') : j;
	      }

	      throw new SyntaxError('JSON.parse(): invalid or malformed JSON data');
	  };
	}
	/**
	 * @fileoverview Functions for automatically setting up a player
	 * based on the data-setup attribute of the video tag
	 */

	// Automatically set up any tags that have a data-setup attribute
	vjs.autoSetup = function(){
	  var options, mediaEl, player, i, e;

	  // One day, when we stop supporting IE8, go back to this, but in the meantime...*hack hack hack*
	  // var vids = Array.prototype.slice.call(document.getElementsByTagName('video'));
	  // var audios = Array.prototype.slice.call(document.getElementsByTagName('audio'));
	  // var mediaEls = vids.concat(audios);

	  // Because IE8 doesn't support calling slice on a node list, we need to loop through each list of elements
	  // to build up a new, combined list of elements.
	  var vids = document.getElementsByTagName('video');
	  var audios = document.getElementsByTagName('audio');
	  var mediaEls = [];
	  if (vids && vids.length > 0) {
	    for(i=0, e=vids.length; i<e; i++) {
	      mediaEls.push(vids[i]);
	    }
	  }
	  if (audios && audios.length > 0) {
	    for(i=0, e=audios.length; i<e; i++) {
	      mediaEls.push(audios[i]);
	    }
	  }

	  // Check if any media elements exist
	  if (mediaEls && mediaEls.length > 0) {

	    for (i=0,e=mediaEls.length; i<e; i++) {
	      mediaEl = mediaEls[i];

	      // Check if element exists, has getAttribute func.
	      // IE seems to consider typeof el.getAttribute == 'object' instead of 'function' like expected, at least when loading the player immediately.
	      if (mediaEl && mediaEl.getAttribute) {

	        // Make sure this player hasn't already been set up.
	        if (mediaEl['player'] === undefined) {
	          options = mediaEl.getAttribute('data-setup');

	          // Check if data-setup attr exists.
	          // We only auto-setup if they've added the data-setup attr.
	          if (options !== null) {
	            // Create new video.js instance.
	            player = videojs(mediaEl);
	          }
	        }

	      // If getAttribute isn't defined, we need to wait for the DOM.
	      } else {
	        vjs.autoSetupTimeout(1);
	        break;
	      }
	    }

	  // No videos were found, so keep looping unless page is finished loading.
	  } else if (!vjs.windowLoaded) {
	    vjs.autoSetupTimeout(1);
	  }
	};

	// Pause to let the DOM keep processing
	vjs.autoSetupTimeout = function(wait){
	  setTimeout(vjs.autoSetup, wait);
	};

	if (document.readyState === 'complete') {
	  vjs.windowLoaded = true;
	} else {
	  vjs.one(window, 'load', function(){
	    vjs.windowLoaded = true;
	  });
	}

	// Run Auto-load players
	// You have to wait at least once in case this script is loaded after your video in the DOM (weird behavior only with minified version)
	vjs.autoSetupTimeout(1);
	/**
	 * the method for registering a video.js plugin
	 *
	 * @param  {String} name The name of the plugin
	 * @param  {Function} init The function that is run when the player inits
	 */
	vjs.plugin = function(name, init){
	  vjs.Player.prototype[name] = init;
	};

	/* vtt.js - v0.11.11 (https://github.com/mozilla/vtt.js) built on 22-01-2015 */

	(function(root) {
	  var vttjs = root.vttjs = {};
	  var cueShim = vttjs.VTTCue;
	  var regionShim = vttjs.VTTRegion;
	  var oldVTTCue = root.VTTCue;
	  var oldVTTRegion = root.VTTRegion;

	  vttjs.shim = function() {
	    vttjs.VTTCue = cueShim;
	    vttjs.VTTRegion = regionShim;
	  };

	  vttjs.restore = function() {
	    vttjs.VTTCue = oldVTTCue;
	    vttjs.VTTRegion = oldVTTRegion;
	  };
	}(this));

	/**
	 * Copyright 2013 vtt.js Contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	(function(root, vttjs) {

	  var autoKeyword = "auto";
	  var directionSetting = {
	    "": true,
	    "lr": true,
	    "rl": true
	  };
	  var alignSetting = {
	    "start": true,
	    "middle": true,
	    "end": true,
	    "left": true,
	    "right": true
	  };

	  function findDirectionSetting(value) {
	    if (typeof value !== "string") {
	      return false;
	    }
	    var dir = directionSetting[value.toLowerCase()];
	    return dir ? value.toLowerCase() : false;
	  }

	  function findAlignSetting(value) {
	    if (typeof value !== "string") {
	      return false;
	    }
	    var align = alignSetting[value.toLowerCase()];
	    return align ? value.toLowerCase() : false;
	  }

	  function extend(obj) {
	    var i = 1;
	    for (; i < arguments.length; i++) {
	      var cobj = arguments[i];
	      for (var p in cobj) {
	        obj[p] = cobj[p];
	      }
	    }

	    return obj;
	  }

	  function VTTCue(startTime, endTime, text) {
	    var cue = this;
	    var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);
	    var baseObj = {};

	    if (isIE8) {
	      cue = document.createElement('custom');
	    } else {
	      baseObj.enumerable = true;
	    }

	    /**
	     * Shim implementation specific properties. These properties are not in
	     * the spec.
	     */

	    // Lets us know when the VTTCue's data has changed in such a way that we need
	    // to recompute its display state. This lets us compute its display state
	    // lazily.
	    cue.hasBeenReset = false;

	    /**
	     * VTTCue and TextTrackCue properties
	     * http://dev.w3.org/html5/webvtt/#vttcue-interface
	     */

	    var _id = "";
	    var _pauseOnExit = false;
	    var _startTime = startTime;
	    var _endTime = endTime;
	    var _text = text;
	    var _region = null;
	    var _vertical = "";
	    var _snapToLines = true;
	    var _line = "auto";
	    var _lineAlign = "start";
	    var _position = 50;
	    var _positionAlign = "middle";
	    var _size = 50;
	    var _align = "middle";

	    Object.defineProperty(cue,
	      "id", extend({}, baseObj, {
	        get: function() {
	          return _id;
	        },
	        set: function(value) {
	          _id = "" + value;
	        }
	      }));

	    Object.defineProperty(cue,
	      "pauseOnExit", extend({}, baseObj, {
	        get: function() {
	          return _pauseOnExit;
	        },
	        set: function(value) {
	          _pauseOnExit = !!value;
	        }
	      }));

	    Object.defineProperty(cue,
	      "startTime", extend({}, baseObj, {
	        get: function() {
	          return _startTime;
	        },
	        set: function(value) {
	          if (typeof value !== "number") {
	            throw new TypeError("Start time must be set to a number.");
	          }
	          _startTime = value;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "endTime", extend({}, baseObj, {
	        get: function() {
	          return _endTime;
	        },
	        set: function(value) {
	          if (typeof value !== "number") {
	            throw new TypeError("End time must be set to a number.");
	          }
	          _endTime = value;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "text", extend({}, baseObj, {
	        get: function() {
	          return _text;
	        },
	        set: function(value) {
	          _text = "" + value;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "region", extend({}, baseObj, {
	        get: function() {
	          return _region;
	        },
	        set: function(value) {
	          _region = value;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "vertical", extend({}, baseObj, {
	        get: function() {
	          return _vertical;
	        },
	        set: function(value) {
	          var setting = findDirectionSetting(value);
	          // Have to check for false because the setting an be an empty string.
	          if (setting === false) {
	            throw new SyntaxError("An invalid or illegal string was specified.");
	          }
	          _vertical = setting;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "snapToLines", extend({}, baseObj, {
	        get: function() {
	          return _snapToLines;
	        },
	        set: function(value) {
	          _snapToLines = !!value;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "line", extend({}, baseObj, {
	        get: function() {
	          return _line;
	        },
	        set: function(value) {
	          if (typeof value !== "number" && value !== autoKeyword) {
	            throw new SyntaxError("An invalid number or illegal string was specified.");
	          }
	          _line = value;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "lineAlign", extend({}, baseObj, {
	        get: function() {
	          return _lineAlign;
	        },
	        set: function(value) {
	          var setting = findAlignSetting(value);
	          if (!setting) {
	            throw new SyntaxError("An invalid or illegal string was specified.");
	          }
	          _lineAlign = setting;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "position", extend({}, baseObj, {
	        get: function() {
	          return _position;
	        },
	        set: function(value) {
	          if (value < 0 || value > 100) {
	            throw new Error("Position must be between 0 and 100.");
	          }
	          _position = value;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "positionAlign", extend({}, baseObj, {
	        get: function() {
	          return _positionAlign;
	        },
	        set: function(value) {
	          var setting = findAlignSetting(value);
	          if (!setting) {
	            throw new SyntaxError("An invalid or illegal string was specified.");
	          }
	          _positionAlign = setting;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "size", extend({}, baseObj, {
	        get: function() {
	          return _size;
	        },
	        set: function(value) {
	          if (value < 0 || value > 100) {
	            throw new Error("Size must be between 0 and 100.");
	          }
	          _size = value;
	          this.hasBeenReset = true;
	        }
	      }));

	    Object.defineProperty(cue,
	      "align", extend({}, baseObj, {
	        get: function() {
	          return _align;
	        },
	        set: function(value) {
	          var setting = findAlignSetting(value);
	          if (!setting) {
	            throw new SyntaxError("An invalid or illegal string was specified.");
	          }
	          _align = setting;
	          this.hasBeenReset = true;
	        }
	      }));

	    /**
	     * Other <track> spec defined properties
	     */

	    // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
	    cue.displayState = undefined;

	    if (isIE8) {
	      return cue;
	    }
	  }

	  /**
	   * VTTCue methods
	   */

	  VTTCue.prototype.getCueAsHTML = function() {
	    // Assume WebVTT.convertCueToDOMTree is on the global.
	    return WebVTT.convertCueToDOMTree(window, this.text);
	  };

	  root.VTTCue = root.VTTCue || VTTCue;
	  vttjs.VTTCue = VTTCue;
	}(this, (this.vttjs || {})));

	/**
	 * Copyright 2013 vtt.js Contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	(function(root, vttjs) {

	  var scrollSetting = {
	    "": true,
	    "up": true,
	  };

	  function findScrollSetting(value) {
	    if (typeof value !== "string") {
	      return false;
	    }
	    var scroll = scrollSetting[value.toLowerCase()];
	    return scroll ? value.toLowerCase() : false;
	  }

	  function isValidPercentValue(value) {
	    return typeof value === "number" && (value >= 0 && value <= 100);
	  }

	  // VTTRegion shim http://dev.w3.org/html5/webvtt/#vttregion-interface
	  function VTTRegion() {
	    var _width = 100;
	    var _lines = 3;
	    var _regionAnchorX = 0;
	    var _regionAnchorY = 100;
	    var _viewportAnchorX = 0;
	    var _viewportAnchorY = 100;
	    var _scroll = "";

	    Object.defineProperties(this, {
	      "width": {
	        enumerable: true,
	        get: function() {
	          return _width;
	        },
	        set: function(value) {
	          if (!isValidPercentValue(value)) {
	            throw new Error("Width must be between 0 and 100.");
	          }
	          _width = value;
	        }
	      },
	      "lines": {
	        enumerable: true,
	        get: function() {
	          return _lines;
	        },
	        set: function(value) {
	          if (typeof value !== "number") {
	            throw new TypeError("Lines must be set to a number.");
	          }
	          _lines = value;
	        }
	      },
	      "regionAnchorY": {
	        enumerable: true,
	        get: function() {
	          return _regionAnchorY;
	        },
	        set: function(value) {
	          if (!isValidPercentValue(value)) {
	            throw new Error("RegionAnchorX must be between 0 and 100.");
	          }
	          _regionAnchorY = value;
	        }
	      },
	      "regionAnchorX": {
	        enumerable: true,
	        get: function() {
	          return _regionAnchorX;
	        },
	        set: function(value) {
	          if(!isValidPercentValue(value)) {
	            throw new Error("RegionAnchorY must be between 0 and 100.");
	          }
	          _regionAnchorX = value;
	        }
	      },
	      "viewportAnchorY": {
	        enumerable: true,
	        get: function() {
	          return _viewportAnchorY;
	        },
	        set: function(value) {
	          if (!isValidPercentValue(value)) {
	            throw new Error("ViewportAnchorY must be between 0 and 100.");
	          }
	          _viewportAnchorY = value;
	        }
	      },
	      "viewportAnchorX": {
	        enumerable: true,
	        get: function() {
	          return _viewportAnchorX;
	        },
	        set: function(value) {
	          if (!isValidPercentValue(value)) {
	            throw new Error("ViewportAnchorX must be between 0 and 100.");
	          }
	          _viewportAnchorX = value;
	        }
	      },
	      "scroll": {
	        enumerable: true,
	        get: function() {
	          return _scroll;
	        },
	        set: function(value) {
	          var setting = findScrollSetting(value);
	          // Have to check for false as an empty string is a legal value.
	          if (setting === false) {
	            throw new SyntaxError("An invalid or illegal string was specified.");
	          }
	          _scroll = setting;
	        }
	      }
	    });
	  }

	  root.VTTRegion = root.VTTRegion || VTTRegion;
	  vttjs.VTTRegion = VTTRegion;
	}(this, (this.vttjs || {})));

	/**
	 * Copyright 2013 vtt.js Contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
	/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

	(function(global) {

	  var _objCreate = Object.create || (function() {
	    function F() {}
	    return function(o) {
	      if (arguments.length !== 1) {
	        throw new Error('Object.create shim only accepts one parameter.');
	      }
	      F.prototype = o;
	      return new F();
	    };
	  })();

	  // Creates a new ParserError object from an errorData object. The errorData
	  // object should have default code and message properties. The default message
	  // property can be overriden by passing in a message parameter.
	  // See ParsingError.Errors below for acceptable errors.
	  function ParsingError(errorData, message) {
	    this.name = "ParsingError";
	    this.code = errorData.code;
	    this.message = message || errorData.message;
	  }
	  ParsingError.prototype = _objCreate(Error.prototype);
	  ParsingError.prototype.constructor = ParsingError;

	  // ParsingError metadata for acceptable ParsingErrors.
	  ParsingError.Errors = {
	    BadSignature: {
	      code: 0,
	      message: "Malformed WebVTT signature."
	    },
	    BadTimeStamp: {
	      code: 1,
	      message: "Malformed time stamp."
	    }
	  };

	  // Try to parse input as a time stamp.
	  function parseTimeStamp(input) {

	    function computeSeconds(h, m, s, f) {
	      return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000;
	    }

	    var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
	    if (!m) {
	      return null;
	    }

	    if (m[3]) {
	      // Timestamp takes the form of [hours]:[minutes]:[seconds].[milliseconds]
	      return computeSeconds(m[1], m[2], m[3].replace(":", ""), m[4]);
	    } else if (m[1] > 59) {
	      // Timestamp takes the form of [hours]:[minutes].[milliseconds]
	      // First position is hours as it's over 59.
	      return computeSeconds(m[1], m[2], 0,  m[4]);
	    } else {
	      // Timestamp takes the form of [minutes]:[seconds].[milliseconds]
	      return computeSeconds(0, m[1], m[2], m[4]);
	    }
	  }

	  // A settings object holds key/value pairs and will ignore anything but the first
	  // assignment to a specific key.
	  function Settings() {
	    this.values = _objCreate(null);
	  }

	  Settings.prototype = {
	    // Only accept the first assignment to any key.
	    set: function(k, v) {
	      if (!this.get(k) && v !== "") {
	        this.values[k] = v;
	      }
	    },
	    // Return the value for a key, or a default value.
	    // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
	    // a number of possible default values as properties where 'defaultKey' is
	    // the key of the property that will be chosen; otherwise it's assumed to be
	    // a single value.
	    get: function(k, dflt, defaultKey) {
	      if (defaultKey) {
	        return this.has(k) ? this.values[k] : dflt[defaultKey];
	      }
	      return this.has(k) ? this.values[k] : dflt;
	    },
	    // Check whether we have a value for a key.
	    has: function(k) {
	      return k in this.values;
	    },
	    // Accept a setting if its one of the given alternatives.
	    alt: function(k, v, a) {
	      for (var n = 0; n < a.length; ++n) {
	        if (v === a[n]) {
	          this.set(k, v);
	          break;
	        }
	      }
	    },
	    // Accept a setting if its a valid (signed) integer.
	    integer: function(k, v) {
	      if (/^-?\d+$/.test(v)) { // integer
	        this.set(k, parseInt(v, 10));
	      }
	    },
	    // Accept a setting if its a valid percentage.
	    percent: function(k, v) {
	      var m;
	      if ((m = v.match(/^([\d]{1,3})(\.[\d]*)?%$/))) {
	        v = parseFloat(v);
	        if (v >= 0 && v <= 100) {
	          this.set(k, v);
	          return true;
	        }
	      }
	      return false;
	    }
	  };

	  // Helper function to parse input into groups separated by 'groupDelim', and
	  // interprete each group as a key/value pair separated by 'keyValueDelim'.
	  function parseOptions(input, callback, keyValueDelim, groupDelim) {
	    var groups = groupDelim ? input.split(groupDelim) : [input];
	    for (var i in groups) {
	      if (typeof groups[i] !== "string") {
	        continue;
	      }
	      var kv = groups[i].split(keyValueDelim);
	      if (kv.length !== 2) {
	        continue;
	      }
	      var k = kv[0];
	      var v = kv[1];
	      callback(k, v);
	    }
	  }

	  function parseCue(input, cue, regionList) {
	    // Remember the original input if we need to throw an error.
	    var oInput = input;
	    // 4.1 WebVTT timestamp
	    function consumeTimeStamp() {
	      var ts = parseTimeStamp(input);
	      if (ts === null) {
	        throw new ParsingError(ParsingError.Errors.BadTimeStamp,
	                              "Malformed timestamp: " + oInput);
	      }
	      // Remove time stamp from input.
	      input = input.replace(/^[^\sa-zA-Z-]+/, "");
	      return ts;
	    }

	    // 4.4.2 WebVTT cue settings
	    function consumeCueSettings(input, cue) {
	      var settings = new Settings();

	      parseOptions(input, function (k, v) {
	        switch (k) {
	        case "region":
	          // Find the last region we parsed with the same region id.
	          for (var i = regionList.length - 1; i >= 0; i--) {
	            if (regionList[i].id === v) {
	              settings.set(k, regionList[i].region);
	              break;
	            }
	          }
	          break;
	        case "vertical":
	          settings.alt(k, v, ["rl", "lr"]);
	          break;
	        case "line":
	          var vals = v.split(","),
	              vals0 = vals[0];
	          settings.integer(k, vals0);
	          settings.percent(k, vals0) ? settings.set("snapToLines", false) : null;
	          settings.alt(k, vals0, ["auto"]);
	          if (vals.length === 2) {
	            settings.alt("lineAlign", vals[1], ["start", "middle", "end"]);
	          }
	          break;
	        case "position":
	          vals = v.split(",");
	          settings.percent(k, vals[0]);
	          if (vals.length === 2) {
	            settings.alt("positionAlign", vals[1], ["start", "middle", "end"]);
	          }
	          break;
	        case "size":
	          settings.percent(k, v);
	          break;
	        case "align":
	          settings.alt(k, v, ["start", "middle", "end", "left", "right"]);
	          break;
	        }
	      }, /:/, /\s/);

	      // Apply default values for any missing fields.
	      cue.region = settings.get("region", null);
	      cue.vertical = settings.get("vertical", "");
	      cue.line = settings.get("line", "auto");
	      cue.lineAlign = settings.get("lineAlign", "start");
	      cue.snapToLines = settings.get("snapToLines", true);
	      cue.size = settings.get("size", 100);
	      cue.align = settings.get("align", "middle");
	      cue.position = settings.get("position", {
	        start: 0,
	        left: 0,
	        middle: 50,
	        end: 100,
	        right: 100
	      }, cue.align);
	      cue.positionAlign = settings.get("positionAlign", {
	        start: "start",
	        left: "start",
	        middle: "middle",
	        end: "end",
	        right: "end"
	      }, cue.align);
	    }

	    function skipWhitespace() {
	      input = input.replace(/^\s+/, "");
	    }

	    // 4.1 WebVTT cue timings.
	    skipWhitespace();
	    cue.startTime = consumeTimeStamp();   // (1) collect cue start time
	    skipWhitespace();
	    if (input.substr(0, 3) !== "-->") {     // (3) next characters must match "-->"
	      throw new ParsingError(ParsingError.Errors.BadTimeStamp,
	                             "Malformed time stamp (time stamps must be separated by '-->'): " +
	                             oInput);
	    }
	    input = input.substr(3);
	    skipWhitespace();
	    cue.endTime = consumeTimeStamp();     // (5) collect cue end time

	    // 4.1 WebVTT cue settings list.
	    skipWhitespace();
	    consumeCueSettings(input, cue);
	  }

	  var ESCAPE = {
	    "&amp;": "&",
	    "&lt;": "<",
	    "&gt;": ">",
	    "&lrm;": "\u200e",
	    "&rlm;": "\u200f",
	    "&nbsp;": "\u00a0"
	  };

	  var TAG_NAME = {
	    c: "span",
	    i: "i",
	    b: "b",
	    u: "u",
	    ruby: "ruby",
	    rt: "rt",
	    v: "span",
	    lang: "span"
	  };

	  var TAG_ANNOTATION = {
	    v: "title",
	    lang: "lang"
	  };

	  var NEEDS_PARENT = {
	    rt: "ruby"
	  };

	  // Parse content into a document fragment.
	  function parseContent(window, input) {
	    function nextToken() {
	      // Check for end-of-string.
	      if (!input) {
	        return null;
	      }

	      // Consume 'n' characters from the input.
	      function consume(result) {
	        input = input.substr(result.length);
	        return result;
	      }

	      var m = input.match(/^([^<]*)(<[^>]+>?)?/);
	      // If there is some text before the next tag, return it, otherwise return
	      // the tag.
	      return consume(m[1] ? m[1] : m[2]);
	    }

	    // Unescape a string 's'.
	    function unescape1(e) {
	      return ESCAPE[e];
	    }
	    function unescape(s) {
	      while ((m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/))) {
	        s = s.replace(m[0], unescape1);
	      }
	      return s;
	    }

	    function shouldAdd(current, element) {
	      return !NEEDS_PARENT[element.localName] ||
	             NEEDS_PARENT[element.localName] === current.localName;
	    }

	    // Create an element for this tag.
	    function createElement(type, annotation) {
	      var tagName = TAG_NAME[type];
	      if (!tagName) {
	        return null;
	      }
	      var element = window.document.createElement(tagName);
	      element.localName = tagName;
	      var name = TAG_ANNOTATION[type];
	      if (name && annotation) {
	        element[name] = annotation.trim();
	      }
	      return element;
	    }

	    var rootDiv = window.document.createElement("div"),
	        current = rootDiv,
	        t,
	        tagStack = [];

	    while ((t = nextToken()) !== null) {
	      if (t[0] === '<') {
	        if (t[1] === "/") {
	          // If the closing tag matches, move back up to the parent node.
	          if (tagStack.length &&
	              tagStack[tagStack.length - 1] === t.substr(2).replace(">", "")) {
	            tagStack.pop();
	            current = current.parentNode;
	          }
	          // Otherwise just ignore the end tag.
	          continue;
	        }
	        var ts = parseTimeStamp(t.substr(1, t.length - 2));
	        var node;
	        if (ts) {
	          // Timestamps are lead nodes as well.
	          node = window.document.createProcessingInstruction("timestamp", ts);
	          current.appendChild(node);
	          continue;
	        }
	        var m = t.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
	        // If we can't parse the tag, skip to the next tag.
	        if (!m) {
	          continue;
	        }
	        // Try to construct an element, and ignore the tag if we couldn't.
	        node = createElement(m[1], m[3]);
	        if (!node) {
	          continue;
	        }
	        // Determine if the tag should be added based on the context of where it
	        // is placed in the cuetext.
	        if (!shouldAdd(current, node)) {
	          continue;
	        }
	        // Set the class list (as a list of classes, separated by space).
	        if (m[2]) {
	          node.className = m[2].substr(1).replace('.', ' ');
	        }
	        // Append the node to the current node, and enter the scope of the new
	        // node.
	        tagStack.push(m[1]);
	        current.appendChild(node);
	        current = node;
	        continue;
	      }

	      // Text nodes are leaf nodes.
	      current.appendChild(window.document.createTextNode(unescape(t)));
	    }

	    return rootDiv;
	  }

	  // This is a list of all the Unicode characters that have a strong
	  // right-to-left category. What this means is that these characters are
	  // written right-to-left for sure. It was generated by pulling all the strong
	  // right-to-left characters out of the Unicode data table. That table can
	  // found at: http://www.unicode.org/Public/UNIDATA/UnicodeData.txt
	  var strongRTLChars = [0x05BE, 0x05C0, 0x05C3, 0x05C6, 0x05D0, 0x05D1,
	      0x05D2, 0x05D3, 0x05D4, 0x05D5, 0x05D6, 0x05D7, 0x05D8, 0x05D9, 0x05DA,
	      0x05DB, 0x05DC, 0x05DD, 0x05DE, 0x05DF, 0x05E0, 0x05E1, 0x05E2, 0x05E3,
	      0x05E4, 0x05E5, 0x05E6, 0x05E7, 0x05E8, 0x05E9, 0x05EA, 0x05F0, 0x05F1,
	      0x05F2, 0x05F3, 0x05F4, 0x0608, 0x060B, 0x060D, 0x061B, 0x061E, 0x061F,
	      0x0620, 0x0621, 0x0622, 0x0623, 0x0624, 0x0625, 0x0626, 0x0627, 0x0628,
	      0x0629, 0x062A, 0x062B, 0x062C, 0x062D, 0x062E, 0x062F, 0x0630, 0x0631,
	      0x0632, 0x0633, 0x0634, 0x0635, 0x0636, 0x0637, 0x0638, 0x0639, 0x063A,
	      0x063B, 0x063C, 0x063D, 0x063E, 0x063F, 0x0640, 0x0641, 0x0642, 0x0643,
	      0x0644, 0x0645, 0x0646, 0x0647, 0x0648, 0x0649, 0x064A, 0x066D, 0x066E,
	      0x066F, 0x0671, 0x0672, 0x0673, 0x0674, 0x0675, 0x0676, 0x0677, 0x0678,
	      0x0679, 0x067A, 0x067B, 0x067C, 0x067D, 0x067E, 0x067F, 0x0680, 0x0681,
	      0x0682, 0x0683, 0x0684, 0x0685, 0x0686, 0x0687, 0x0688, 0x0689, 0x068A,
	      0x068B, 0x068C, 0x068D, 0x068E, 0x068F, 0x0690, 0x0691, 0x0692, 0x0693,
	      0x0694, 0x0695, 0x0696, 0x0697, 0x0698, 0x0699, 0x069A, 0x069B, 0x069C,
	      0x069D, 0x069E, 0x069F, 0x06A0, 0x06A1, 0x06A2, 0x06A3, 0x06A4, 0x06A5,
	      0x06A6, 0x06A7, 0x06A8, 0x06A9, 0x06AA, 0x06AB, 0x06AC, 0x06AD, 0x06AE,
	      0x06AF, 0x06B0, 0x06B1, 0x06B2, 0x06B3, 0x06B4, 0x06B5, 0x06B6, 0x06B7,
	      0x06B8, 0x06B9, 0x06BA, 0x06BB, 0x06BC, 0x06BD, 0x06BE, 0x06BF, 0x06C0,
	      0x06C1, 0x06C2, 0x06C3, 0x06C4, 0x06C5, 0x06C6, 0x06C7, 0x06C8, 0x06C9,
	      0x06CA, 0x06CB, 0x06CC, 0x06CD, 0x06CE, 0x06CF, 0x06D0, 0x06D1, 0x06D2,
	      0x06D3, 0x06D4, 0x06D5, 0x06E5, 0x06E6, 0x06EE, 0x06EF, 0x06FA, 0x06FB,
	      0x06FC, 0x06FD, 0x06FE, 0x06FF, 0x0700, 0x0701, 0x0702, 0x0703, 0x0704,
	      0x0705, 0x0706, 0x0707, 0x0708, 0x0709, 0x070A, 0x070B, 0x070C, 0x070D,
	      0x070F, 0x0710, 0x0712, 0x0713, 0x0714, 0x0715, 0x0716, 0x0717, 0x0718,
	      0x0719, 0x071A, 0x071B, 0x071C, 0x071D, 0x071E, 0x071F, 0x0720, 0x0721,
	      0x0722, 0x0723, 0x0724, 0x0725, 0x0726, 0x0727, 0x0728, 0x0729, 0x072A,
	      0x072B, 0x072C, 0x072D, 0x072E, 0x072F, 0x074D, 0x074E, 0x074F, 0x0750,
	      0x0751, 0x0752, 0x0753, 0x0754, 0x0755, 0x0756, 0x0757, 0x0758, 0x0759,
	      0x075A, 0x075B, 0x075C, 0x075D, 0x075E, 0x075F, 0x0760, 0x0761, 0x0762,
	      0x0763, 0x0764, 0x0765, 0x0766, 0x0767, 0x0768, 0x0769, 0x076A, 0x076B,
	      0x076C, 0x076D, 0x076E, 0x076F, 0x0770, 0x0771, 0x0772, 0x0773, 0x0774,
	      0x0775, 0x0776, 0x0777, 0x0778, 0x0779, 0x077A, 0x077B, 0x077C, 0x077D,
	      0x077E, 0x077F, 0x0780, 0x0781, 0x0782, 0x0783, 0x0784, 0x0785, 0x0786,
	      0x0787, 0x0788, 0x0789, 0x078A, 0x078B, 0x078C, 0x078D, 0x078E, 0x078F,
	      0x0790, 0x0791, 0x0792, 0x0793, 0x0794, 0x0795, 0x0796, 0x0797, 0x0798,
	      0x0799, 0x079A, 0x079B, 0x079C, 0x079D, 0x079E, 0x079F, 0x07A0, 0x07A1,
	      0x07A2, 0x07A3, 0x07A4, 0x07A5, 0x07B1, 0x07C0, 0x07C1, 0x07C2, 0x07C3,
	      0x07C4, 0x07C5, 0x07C6, 0x07C7, 0x07C8, 0x07C9, 0x07CA, 0x07CB, 0x07CC,
	      0x07CD, 0x07CE, 0x07CF, 0x07D0, 0x07D1, 0x07D2, 0x07D3, 0x07D4, 0x07D5,
	      0x07D6, 0x07D7, 0x07D8, 0x07D9, 0x07DA, 0x07DB, 0x07DC, 0x07DD, 0x07DE,
	      0x07DF, 0x07E0, 0x07E1, 0x07E2, 0x07E3, 0x07E4, 0x07E5, 0x07E6, 0x07E7,
	      0x07E8, 0x07E9, 0x07EA, 0x07F4, 0x07F5, 0x07FA, 0x0800, 0x0801, 0x0802,
	      0x0803, 0x0804, 0x0805, 0x0806, 0x0807, 0x0808, 0x0809, 0x080A, 0x080B,
	      0x080C, 0x080D, 0x080E, 0x080F, 0x0810, 0x0811, 0x0812, 0x0813, 0x0814,
	      0x0815, 0x081A, 0x0824, 0x0828, 0x0830, 0x0831, 0x0832, 0x0833, 0x0834,
	      0x0835, 0x0836, 0x0837, 0x0838, 0x0839, 0x083A, 0x083B, 0x083C, 0x083D,
	      0x083E, 0x0840, 0x0841, 0x0842, 0x0843, 0x0844, 0x0845, 0x0846, 0x0847,
	      0x0848, 0x0849, 0x084A, 0x084B, 0x084C, 0x084D, 0x084E, 0x084F, 0x0850,
	      0x0851, 0x0852, 0x0853, 0x0854, 0x0855, 0x0856, 0x0857, 0x0858, 0x085E,
	      0x08A0, 0x08A2, 0x08A3, 0x08A4, 0x08A5, 0x08A6, 0x08A7, 0x08A8, 0x08A9,
	      0x08AA, 0x08AB, 0x08AC, 0x200F, 0xFB1D, 0xFB1F, 0xFB20, 0xFB21, 0xFB22,
	      0xFB23, 0xFB24, 0xFB25, 0xFB26, 0xFB27, 0xFB28, 0xFB2A, 0xFB2B, 0xFB2C,
	      0xFB2D, 0xFB2E, 0xFB2F, 0xFB30, 0xFB31, 0xFB32, 0xFB33, 0xFB34, 0xFB35,
	      0xFB36, 0xFB38, 0xFB39, 0xFB3A, 0xFB3B, 0xFB3C, 0xFB3E, 0xFB40, 0xFB41,
	      0xFB43, 0xFB44, 0xFB46, 0xFB47, 0xFB48, 0xFB49, 0xFB4A, 0xFB4B, 0xFB4C,
	      0xFB4D, 0xFB4E, 0xFB4F, 0xFB50, 0xFB51, 0xFB52, 0xFB53, 0xFB54, 0xFB55,
	      0xFB56, 0xFB57, 0xFB58, 0xFB59, 0xFB5A, 0xFB5B, 0xFB5C, 0xFB5D, 0xFB5E,
	      0xFB5F, 0xFB60, 0xFB61, 0xFB62, 0xFB63, 0xFB64, 0xFB65, 0xFB66, 0xFB67,
	      0xFB68, 0xFB69, 0xFB6A, 0xFB6B, 0xFB6C, 0xFB6D, 0xFB6E, 0xFB6F, 0xFB70,
	      0xFB71, 0xFB72, 0xFB73, 0xFB74, 0xFB75, 0xFB76, 0xFB77, 0xFB78, 0xFB79,
	      0xFB7A, 0xFB7B, 0xFB7C, 0xFB7D, 0xFB7E, 0xFB7F, 0xFB80, 0xFB81, 0xFB82,
	      0xFB83, 0xFB84, 0xFB85, 0xFB86, 0xFB87, 0xFB88, 0xFB89, 0xFB8A, 0xFB8B,
	      0xFB8C, 0xFB8D, 0xFB8E, 0xFB8F, 0xFB90, 0xFB91, 0xFB92, 0xFB93, 0xFB94,
	      0xFB95, 0xFB96, 0xFB97, 0xFB98, 0xFB99, 0xFB9A, 0xFB9B, 0xFB9C, 0xFB9D,
	      0xFB9E, 0xFB9F, 0xFBA0, 0xFBA1, 0xFBA2, 0xFBA3, 0xFBA4, 0xFBA5, 0xFBA6,
	      0xFBA7, 0xFBA8, 0xFBA9, 0xFBAA, 0xFBAB, 0xFBAC, 0xFBAD, 0xFBAE, 0xFBAF,
	      0xFBB0, 0xFBB1, 0xFBB2, 0xFBB3, 0xFBB4, 0xFBB5, 0xFBB6, 0xFBB7, 0xFBB8,
	      0xFBB9, 0xFBBA, 0xFBBB, 0xFBBC, 0xFBBD, 0xFBBE, 0xFBBF, 0xFBC0, 0xFBC1,
	      0xFBD3, 0xFBD4, 0xFBD5, 0xFBD6, 0xFBD7, 0xFBD8, 0xFBD9, 0xFBDA, 0xFBDB,
	      0xFBDC, 0xFBDD, 0xFBDE, 0xFBDF, 0xFBE0, 0xFBE1, 0xFBE2, 0xFBE3, 0xFBE4,
	      0xFBE5, 0xFBE6, 0xFBE7, 0xFBE8, 0xFBE9, 0xFBEA, 0xFBEB, 0xFBEC, 0xFBED,
	      0xFBEE, 0xFBEF, 0xFBF0, 0xFBF1, 0xFBF2, 0xFBF3, 0xFBF4, 0xFBF5, 0xFBF6,
	      0xFBF7, 0xFBF8, 0xFBF9, 0xFBFA, 0xFBFB, 0xFBFC, 0xFBFD, 0xFBFE, 0xFBFF,
	      0xFC00, 0xFC01, 0xFC02, 0xFC03, 0xFC04, 0xFC05, 0xFC06, 0xFC07, 0xFC08,
	      0xFC09, 0xFC0A, 0xFC0B, 0xFC0C, 0xFC0D, 0xFC0E, 0xFC0F, 0xFC10, 0xFC11,
	      0xFC12, 0xFC13, 0xFC14, 0xFC15, 0xFC16, 0xFC17, 0xFC18, 0xFC19, 0xFC1A,
	      0xFC1B, 0xFC1C, 0xFC1D, 0xFC1E, 0xFC1F, 0xFC20, 0xFC21, 0xFC22, 0xFC23,
	      0xFC24, 0xFC25, 0xFC26, 0xFC27, 0xFC28, 0xFC29, 0xFC2A, 0xFC2B, 0xFC2C,
	      0xFC2D, 0xFC2E, 0xFC2F, 0xFC30, 0xFC31, 0xFC32, 0xFC33, 0xFC34, 0xFC35,
	      0xFC36, 0xFC37, 0xFC38, 0xFC39, 0xFC3A, 0xFC3B, 0xFC3C, 0xFC3D, 0xFC3E,
	      0xFC3F, 0xFC40, 0xFC41, 0xFC42, 0xFC43, 0xFC44, 0xFC45, 0xFC46, 0xFC47,
	      0xFC48, 0xFC49, 0xFC4A, 0xFC4B, 0xFC4C, 0xFC4D, 0xFC4E, 0xFC4F, 0xFC50,
	      0xFC51, 0xFC52, 0xFC53, 0xFC54, 0xFC55, 0xFC56, 0xFC57, 0xFC58, 0xFC59,
	      0xFC5A, 0xFC5B, 0xFC5C, 0xFC5D, 0xFC5E, 0xFC5F, 0xFC60, 0xFC61, 0xFC62,
	      0xFC63, 0xFC64, 0xFC65, 0xFC66, 0xFC67, 0xFC68, 0xFC69, 0xFC6A, 0xFC6B,
	      0xFC6C, 0xFC6D, 0xFC6E, 0xFC6F, 0xFC70, 0xFC71, 0xFC72, 0xFC73, 0xFC74,
	      0xFC75, 0xFC76, 0xFC77, 0xFC78, 0xFC79, 0xFC7A, 0xFC7B, 0xFC7C, 0xFC7D,
	      0xFC7E, 0xFC7F, 0xFC80, 0xFC81, 0xFC82, 0xFC83, 0xFC84, 0xFC85, 0xFC86,
	      0xFC87, 0xFC88, 0xFC89, 0xFC8A, 0xFC8B, 0xFC8C, 0xFC8D, 0xFC8E, 0xFC8F,
	      0xFC90, 0xFC91, 0xFC92, 0xFC93, 0xFC94, 0xFC95, 0xFC96, 0xFC97, 0xFC98,
	      0xFC99, 0xFC9A, 0xFC9B, 0xFC9C, 0xFC9D, 0xFC9E, 0xFC9F, 0xFCA0, 0xFCA1,
	      0xFCA2, 0xFCA3, 0xFCA4, 0xFCA5, 0xFCA6, 0xFCA7, 0xFCA8, 0xFCA9, 0xFCAA,
	      0xFCAB, 0xFCAC, 0xFCAD, 0xFCAE, 0xFCAF, 0xFCB0, 0xFCB1, 0xFCB2, 0xFCB3,
	      0xFCB4, 0xFCB5, 0xFCB6, 0xFCB7, 0xFCB8, 0xFCB9, 0xFCBA, 0xFCBB, 0xFCBC,
	      0xFCBD, 0xFCBE, 0xFCBF, 0xFCC0, 0xFCC1, 0xFCC2, 0xFCC3, 0xFCC4, 0xFCC5,
	      0xFCC6, 0xFCC7, 0xFCC8, 0xFCC9, 0xFCCA, 0xFCCB, 0xFCCC, 0xFCCD, 0xFCCE,
	      0xFCCF, 0xFCD0, 0xFCD1, 0xFCD2, 0xFCD3, 0xFCD4, 0xFCD5, 0xFCD6, 0xFCD7,
	      0xFCD8, 0xFCD9, 0xFCDA, 0xFCDB, 0xFCDC, 0xFCDD, 0xFCDE, 0xFCDF, 0xFCE0,
	      0xFCE1, 0xFCE2, 0xFCE3, 0xFCE4, 0xFCE5, 0xFCE6, 0xFCE7, 0xFCE8, 0xFCE9,
	      0xFCEA, 0xFCEB, 0xFCEC, 0xFCED, 0xFCEE, 0xFCEF, 0xFCF0, 0xFCF1, 0xFCF2,
	      0xFCF3, 0xFCF4, 0xFCF5, 0xFCF6, 0xFCF7, 0xFCF8, 0xFCF9, 0xFCFA, 0xFCFB,
	      0xFCFC, 0xFCFD, 0xFCFE, 0xFCFF, 0xFD00, 0xFD01, 0xFD02, 0xFD03, 0xFD04,
	      0xFD05, 0xFD06, 0xFD07, 0xFD08, 0xFD09, 0xFD0A, 0xFD0B, 0xFD0C, 0xFD0D,
	      0xFD0E, 0xFD0F, 0xFD10, 0xFD11, 0xFD12, 0xFD13, 0xFD14, 0xFD15, 0xFD16,
	      0xFD17, 0xFD18, 0xFD19, 0xFD1A, 0xFD1B, 0xFD1C, 0xFD1D, 0xFD1E, 0xFD1F,
	      0xFD20, 0xFD21, 0xFD22, 0xFD23, 0xFD24, 0xFD25, 0xFD26, 0xFD27, 0xFD28,
	      0xFD29, 0xFD2A, 0xFD2B, 0xFD2C, 0xFD2D, 0xFD2E, 0xFD2F, 0xFD30, 0xFD31,
	      0xFD32, 0xFD33, 0xFD34, 0xFD35, 0xFD36, 0xFD37, 0xFD38, 0xFD39, 0xFD3A,
	      0xFD3B, 0xFD3C, 0xFD3D, 0xFD50, 0xFD51, 0xFD52, 0xFD53, 0xFD54, 0xFD55,
	      0xFD56, 0xFD57, 0xFD58, 0xFD59, 0xFD5A, 0xFD5B, 0xFD5C, 0xFD5D, 0xFD5E,
	      0xFD5F, 0xFD60, 0xFD61, 0xFD62, 0xFD63, 0xFD64, 0xFD65, 0xFD66, 0xFD67,
	      0xFD68, 0xFD69, 0xFD6A, 0xFD6B, 0xFD6C, 0xFD6D, 0xFD6E, 0xFD6F, 0xFD70,
	      0xFD71, 0xFD72, 0xFD73, 0xFD74, 0xFD75, 0xFD76, 0xFD77, 0xFD78, 0xFD79,
	      0xFD7A, 0xFD7B, 0xFD7C, 0xFD7D, 0xFD7E, 0xFD7F, 0xFD80, 0xFD81, 0xFD82,
	      0xFD83, 0xFD84, 0xFD85, 0xFD86, 0xFD87, 0xFD88, 0xFD89, 0xFD8A, 0xFD8B,
	      0xFD8C, 0xFD8D, 0xFD8E, 0xFD8F, 0xFD92, 0xFD93, 0xFD94, 0xFD95, 0xFD96,
	      0xFD97, 0xFD98, 0xFD99, 0xFD9A, 0xFD9B, 0xFD9C, 0xFD9D, 0xFD9E, 0xFD9F,
	      0xFDA0, 0xFDA1, 0xFDA2, 0xFDA3, 0xFDA4, 0xFDA5, 0xFDA6, 0xFDA7, 0xFDA8,
	      0xFDA9, 0xFDAA, 0xFDAB, 0xFDAC, 0xFDAD, 0xFDAE, 0xFDAF, 0xFDB0, 0xFDB1,
	      0xFDB2, 0xFDB3, 0xFDB4, 0xFDB5, 0xFDB6, 0xFDB7, 0xFDB8, 0xFDB9, 0xFDBA,
	      0xFDBB, 0xFDBC, 0xFDBD, 0xFDBE, 0xFDBF, 0xFDC0, 0xFDC1, 0xFDC2, 0xFDC3,
	      0xFDC4, 0xFDC5, 0xFDC6, 0xFDC7, 0xFDF0, 0xFDF1, 0xFDF2, 0xFDF3, 0xFDF4,
	      0xFDF5, 0xFDF6, 0xFDF7, 0xFDF8, 0xFDF9, 0xFDFA, 0xFDFB, 0xFDFC, 0xFE70,
	      0xFE71, 0xFE72, 0xFE73, 0xFE74, 0xFE76, 0xFE77, 0xFE78, 0xFE79, 0xFE7A,
	      0xFE7B, 0xFE7C, 0xFE7D, 0xFE7E, 0xFE7F, 0xFE80, 0xFE81, 0xFE82, 0xFE83,
	      0xFE84, 0xFE85, 0xFE86, 0xFE87, 0xFE88, 0xFE89, 0xFE8A, 0xFE8B, 0xFE8C,
	      0xFE8D, 0xFE8E, 0xFE8F, 0xFE90, 0xFE91, 0xFE92, 0xFE93, 0xFE94, 0xFE95,
	      0xFE96, 0xFE97, 0xFE98, 0xFE99, 0xFE9A, 0xFE9B, 0xFE9C, 0xFE9D, 0xFE9E,
	      0xFE9F, 0xFEA0, 0xFEA1, 0xFEA2, 0xFEA3, 0xFEA4, 0xFEA5, 0xFEA6, 0xFEA7,
	      0xFEA8, 0xFEA9, 0xFEAA, 0xFEAB, 0xFEAC, 0xFEAD, 0xFEAE, 0xFEAF, 0xFEB0,
	      0xFEB1, 0xFEB2, 0xFEB3, 0xFEB4, 0xFEB5, 0xFEB6, 0xFEB7, 0xFEB8, 0xFEB9,
	      0xFEBA, 0xFEBB, 0xFEBC, 0xFEBD, 0xFEBE, 0xFEBF, 0xFEC0, 0xFEC1, 0xFEC2,
	      0xFEC3, 0xFEC4, 0xFEC5, 0xFEC6, 0xFEC7, 0xFEC8, 0xFEC9, 0xFECA, 0xFECB,
	      0xFECC, 0xFECD, 0xFECE, 0xFECF, 0xFED0, 0xFED1, 0xFED2, 0xFED3, 0xFED4,
	      0xFED5, 0xFED6, 0xFED7, 0xFED8, 0xFED9, 0xFEDA, 0xFEDB, 0xFEDC, 0xFEDD,
	      0xFEDE, 0xFEDF, 0xFEE0, 0xFEE1, 0xFEE2, 0xFEE3, 0xFEE4, 0xFEE5, 0xFEE6,
	      0xFEE7, 0xFEE8, 0xFEE9, 0xFEEA, 0xFEEB, 0xFEEC, 0xFEED, 0xFEEE, 0xFEEF,
	      0xFEF0, 0xFEF1, 0xFEF2, 0xFEF3, 0xFEF4, 0xFEF5, 0xFEF6, 0xFEF7, 0xFEF8,
	      0xFEF9, 0xFEFA, 0xFEFB, 0xFEFC, 0x10800, 0x10801, 0x10802, 0x10803,
	      0x10804, 0x10805, 0x10808, 0x1080A, 0x1080B, 0x1080C, 0x1080D, 0x1080E,
	      0x1080F, 0x10810, 0x10811, 0x10812, 0x10813, 0x10814, 0x10815, 0x10816,
	      0x10817, 0x10818, 0x10819, 0x1081A, 0x1081B, 0x1081C, 0x1081D, 0x1081E,
	      0x1081F, 0x10820, 0x10821, 0x10822, 0x10823, 0x10824, 0x10825, 0x10826,
	      0x10827, 0x10828, 0x10829, 0x1082A, 0x1082B, 0x1082C, 0x1082D, 0x1082E,
	      0x1082F, 0x10830, 0x10831, 0x10832, 0x10833, 0x10834, 0x10835, 0x10837,
	      0x10838, 0x1083C, 0x1083F, 0x10840, 0x10841, 0x10842, 0x10843, 0x10844,
	      0x10845, 0x10846, 0x10847, 0x10848, 0x10849, 0x1084A, 0x1084B, 0x1084C,
	      0x1084D, 0x1084E, 0x1084F, 0x10850, 0x10851, 0x10852, 0x10853, 0x10854,
	      0x10855, 0x10857, 0x10858, 0x10859, 0x1085A, 0x1085B, 0x1085C, 0x1085D,
	      0x1085E, 0x1085F, 0x10900, 0x10901, 0x10902, 0x10903, 0x10904, 0x10905,
	      0x10906, 0x10907, 0x10908, 0x10909, 0x1090A, 0x1090B, 0x1090C, 0x1090D,
	      0x1090E, 0x1090F, 0x10910, 0x10911, 0x10912, 0x10913, 0x10914, 0x10915,
	      0x10916, 0x10917, 0x10918, 0x10919, 0x1091A, 0x1091B, 0x10920, 0x10921,
	      0x10922, 0x10923, 0x10924, 0x10925, 0x10926, 0x10927, 0x10928, 0x10929,
	      0x1092A, 0x1092B, 0x1092C, 0x1092D, 0x1092E, 0x1092F, 0x10930, 0x10931,
	      0x10932, 0x10933, 0x10934, 0x10935, 0x10936, 0x10937, 0x10938, 0x10939,
	      0x1093F, 0x10980, 0x10981, 0x10982, 0x10983, 0x10984, 0x10985, 0x10986,
	      0x10987, 0x10988, 0x10989, 0x1098A, 0x1098B, 0x1098C, 0x1098D, 0x1098E,
	      0x1098F, 0x10990, 0x10991, 0x10992, 0x10993, 0x10994, 0x10995, 0x10996,
	      0x10997, 0x10998, 0x10999, 0x1099A, 0x1099B, 0x1099C, 0x1099D, 0x1099E,
	      0x1099F, 0x109A0, 0x109A1, 0x109A2, 0x109A3, 0x109A4, 0x109A5, 0x109A6,
	      0x109A7, 0x109A8, 0x109A9, 0x109AA, 0x109AB, 0x109AC, 0x109AD, 0x109AE,
	      0x109AF, 0x109B0, 0x109B1, 0x109B2, 0x109B3, 0x109B4, 0x109B5, 0x109B6,
	      0x109B7, 0x109BE, 0x109BF, 0x10A00, 0x10A10, 0x10A11, 0x10A12, 0x10A13,
	      0x10A15, 0x10A16, 0x10A17, 0x10A19, 0x10A1A, 0x10A1B, 0x10A1C, 0x10A1D,
	      0x10A1E, 0x10A1F, 0x10A20, 0x10A21, 0x10A22, 0x10A23, 0x10A24, 0x10A25,
	      0x10A26, 0x10A27, 0x10A28, 0x10A29, 0x10A2A, 0x10A2B, 0x10A2C, 0x10A2D,
	      0x10A2E, 0x10A2F, 0x10A30, 0x10A31, 0x10A32, 0x10A33, 0x10A40, 0x10A41,
	      0x10A42, 0x10A43, 0x10A44, 0x10A45, 0x10A46, 0x10A47, 0x10A50, 0x10A51,
	      0x10A52, 0x10A53, 0x10A54, 0x10A55, 0x10A56, 0x10A57, 0x10A58, 0x10A60,
	      0x10A61, 0x10A62, 0x10A63, 0x10A64, 0x10A65, 0x10A66, 0x10A67, 0x10A68,
	      0x10A69, 0x10A6A, 0x10A6B, 0x10A6C, 0x10A6D, 0x10A6E, 0x10A6F, 0x10A70,
	      0x10A71, 0x10A72, 0x10A73, 0x10A74, 0x10A75, 0x10A76, 0x10A77, 0x10A78,
	      0x10A79, 0x10A7A, 0x10A7B, 0x10A7C, 0x10A7D, 0x10A7E, 0x10A7F, 0x10B00,
	      0x10B01, 0x10B02, 0x10B03, 0x10B04, 0x10B05, 0x10B06, 0x10B07, 0x10B08,
	      0x10B09, 0x10B0A, 0x10B0B, 0x10B0C, 0x10B0D, 0x10B0E, 0x10B0F, 0x10B10,
	      0x10B11, 0x10B12, 0x10B13, 0x10B14, 0x10B15, 0x10B16, 0x10B17, 0x10B18,
	      0x10B19, 0x10B1A, 0x10B1B, 0x10B1C, 0x10B1D, 0x10B1E, 0x10B1F, 0x10B20,
	      0x10B21, 0x10B22, 0x10B23, 0x10B24, 0x10B25, 0x10B26, 0x10B27, 0x10B28,
	      0x10B29, 0x10B2A, 0x10B2B, 0x10B2C, 0x10B2D, 0x10B2E, 0x10B2F, 0x10B30,
	      0x10B31, 0x10B32, 0x10B33, 0x10B34, 0x10B35, 0x10B40, 0x10B41, 0x10B42,
	      0x10B43, 0x10B44, 0x10B45, 0x10B46, 0x10B47, 0x10B48, 0x10B49, 0x10B4A,
	      0x10B4B, 0x10B4C, 0x10B4D, 0x10B4E, 0x10B4F, 0x10B50, 0x10B51, 0x10B52,
	      0x10B53, 0x10B54, 0x10B55, 0x10B58, 0x10B59, 0x10B5A, 0x10B5B, 0x10B5C,
	      0x10B5D, 0x10B5E, 0x10B5F, 0x10B60, 0x10B61, 0x10B62, 0x10B63, 0x10B64,
	      0x10B65, 0x10B66, 0x10B67, 0x10B68, 0x10B69, 0x10B6A, 0x10B6B, 0x10B6C,
	      0x10B6D, 0x10B6E, 0x10B6F, 0x10B70, 0x10B71, 0x10B72, 0x10B78, 0x10B79,
	      0x10B7A, 0x10B7B, 0x10B7C, 0x10B7D, 0x10B7E, 0x10B7F, 0x10C00, 0x10C01,
	      0x10C02, 0x10C03, 0x10C04, 0x10C05, 0x10C06, 0x10C07, 0x10C08, 0x10C09,
	      0x10C0A, 0x10C0B, 0x10C0C, 0x10C0D, 0x10C0E, 0x10C0F, 0x10C10, 0x10C11,
	      0x10C12, 0x10C13, 0x10C14, 0x10C15, 0x10C16, 0x10C17, 0x10C18, 0x10C19,
	      0x10C1A, 0x10C1B, 0x10C1C, 0x10C1D, 0x10C1E, 0x10C1F, 0x10C20, 0x10C21,
	      0x10C22, 0x10C23, 0x10C24, 0x10C25, 0x10C26, 0x10C27, 0x10C28, 0x10C29,
	      0x10C2A, 0x10C2B, 0x10C2C, 0x10C2D, 0x10C2E, 0x10C2F, 0x10C30, 0x10C31,
	      0x10C32, 0x10C33, 0x10C34, 0x10C35, 0x10C36, 0x10C37, 0x10C38, 0x10C39,
	      0x10C3A, 0x10C3B, 0x10C3C, 0x10C3D, 0x10C3E, 0x10C3F, 0x10C40, 0x10C41,
	      0x10C42, 0x10C43, 0x10C44, 0x10C45, 0x10C46, 0x10C47, 0x10C48, 0x1EE00,
	      0x1EE01, 0x1EE02, 0x1EE03, 0x1EE05, 0x1EE06, 0x1EE07, 0x1EE08, 0x1EE09,
	      0x1EE0A, 0x1EE0B, 0x1EE0C, 0x1EE0D, 0x1EE0E, 0x1EE0F, 0x1EE10, 0x1EE11,
	      0x1EE12, 0x1EE13, 0x1EE14, 0x1EE15, 0x1EE16, 0x1EE17, 0x1EE18, 0x1EE19,
	      0x1EE1A, 0x1EE1B, 0x1EE1C, 0x1EE1D, 0x1EE1E, 0x1EE1F, 0x1EE21, 0x1EE22,
	      0x1EE24, 0x1EE27, 0x1EE29, 0x1EE2A, 0x1EE2B, 0x1EE2C, 0x1EE2D, 0x1EE2E,
	      0x1EE2F, 0x1EE30, 0x1EE31, 0x1EE32, 0x1EE34, 0x1EE35, 0x1EE36, 0x1EE37,
	      0x1EE39, 0x1EE3B, 0x1EE42, 0x1EE47, 0x1EE49, 0x1EE4B, 0x1EE4D, 0x1EE4E,
	      0x1EE4F, 0x1EE51, 0x1EE52, 0x1EE54, 0x1EE57, 0x1EE59, 0x1EE5B, 0x1EE5D,
	      0x1EE5F, 0x1EE61, 0x1EE62, 0x1EE64, 0x1EE67, 0x1EE68, 0x1EE69, 0x1EE6A,
	      0x1EE6C, 0x1EE6D, 0x1EE6E, 0x1EE6F, 0x1EE70, 0x1EE71, 0x1EE72, 0x1EE74,
	      0x1EE75, 0x1EE76, 0x1EE77, 0x1EE79, 0x1EE7A, 0x1EE7B, 0x1EE7C, 0x1EE7E,
	      0x1EE80, 0x1EE81, 0x1EE82, 0x1EE83, 0x1EE84, 0x1EE85, 0x1EE86, 0x1EE87,
	      0x1EE88, 0x1EE89, 0x1EE8B, 0x1EE8C, 0x1EE8D, 0x1EE8E, 0x1EE8F, 0x1EE90,
	      0x1EE91, 0x1EE92, 0x1EE93, 0x1EE94, 0x1EE95, 0x1EE96, 0x1EE97, 0x1EE98,
	      0x1EE99, 0x1EE9A, 0x1EE9B, 0x1EEA1, 0x1EEA2, 0x1EEA3, 0x1EEA5, 0x1EEA6,
	      0x1EEA7, 0x1EEA8, 0x1EEA9, 0x1EEAB, 0x1EEAC, 0x1EEAD, 0x1EEAE, 0x1EEAF,
	      0x1EEB0, 0x1EEB1, 0x1EEB2, 0x1EEB3, 0x1EEB4, 0x1EEB5, 0x1EEB6, 0x1EEB7,
	      0x1EEB8, 0x1EEB9, 0x1EEBA, 0x1EEBB, 0x10FFFD];

	  function determineBidi(cueDiv) {
	    var nodeStack = [],
	        text = "",
	        charCode;

	    if (!cueDiv || !cueDiv.childNodes) {
	      return "ltr";
	    }

	    function pushNodes(nodeStack, node) {
	      for (var i = node.childNodes.length - 1; i >= 0; i--) {
	        nodeStack.push(node.childNodes[i]);
	      }
	    }

	    function nextTextNode(nodeStack) {
	      if (!nodeStack || !nodeStack.length) {
	        return null;
	      }

	      var node = nodeStack.pop(),
	          text = node.textContent || node.innerText;
	      if (text) {
	        // TODO: This should match all unicode type B characters (paragraph
	        // separator characters). See issue #115.
	        var m = text.match(/^.*(\n|\r)/);
	        if (m) {
	          nodeStack.length = 0;
	          return m[0];
	        }
	        return text;
	      }
	      if (node.tagName === "ruby") {
	        return nextTextNode(nodeStack);
	      }
	      if (node.childNodes) {
	        pushNodes(nodeStack, node);
	        return nextTextNode(nodeStack);
	      }
	    }

	    pushNodes(nodeStack, cueDiv);
	    while ((text = nextTextNode(nodeStack))) {
	      for (var i = 0; i < text.length; i++) {
	        charCode = text.charCodeAt(i);
	        for (var j = 0; j < strongRTLChars.length; j++) {
	          if (strongRTLChars[j] === charCode) {
	            return "rtl";
	          }
	        }
	      }
	    }
	    return "ltr";
	  }

	  function computeLinePos(cue) {
	    if (typeof cue.line === "number" &&
	        (cue.snapToLines || (cue.line >= 0 && cue.line <= 100))) {
	      return cue.line;
	    }
	    if (!cue.track || !cue.track.textTrackList ||
	        !cue.track.textTrackList.mediaElement) {
	      return -1;
	    }
	    var track = cue.track,
	        trackList = track.textTrackList,
	        count = 0;
	    for (var i = 0; i < trackList.length && trackList[i] !== track; i++) {
	      if (trackList[i].mode === "showing") {
	        count++;
	      }
	    }
	    return ++count * -1;
	  }

	  function StyleBox() {
	  }

	  // Apply styles to a div. If there is no div passed then it defaults to the
	  // div on 'this'.
	  StyleBox.prototype.applyStyles = function(styles, div) {
	    div = div || this.div;
	    for (var prop in styles) {
	      if (styles.hasOwnProperty(prop)) {
	        div.style[prop] = styles[prop];
	      }
	    }
	  };

	  StyleBox.prototype.formatStyle = function(val, unit) {
	    return val === 0 ? 0 : val + unit;
	  };

	  // Constructs the computed display state of the cue (a div). Places the div
	  // into the overlay which should be a block level element (usually a div).
	  function CueStyleBox(window, cue, styleOptions) {
	    var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);
	    var color = "rgba(255, 255, 255, 1)";
	    var backgroundColor = "rgba(0, 0, 0, 0.8)";

	    if (isIE8) {
	      color = "rgb(255, 255, 255)";
	      backgroundColor = "rgb(0, 0, 0)";
	    }

	    StyleBox.call(this);
	    this.cue = cue;

	    // Parse our cue's text into a DOM tree rooted at 'cueDiv'. This div will
	    // have inline positioning and will function as the cue background box.
	    this.cueDiv = parseContent(window, cue.text);
	    var styles = {
	      color: color,
	      backgroundColor: backgroundColor,
	      position: "relative",
	      left: 0,
	      right: 0,
	      top: 0,
	      bottom: 0,
	      display: "inline"
	    };

	    if (!isIE8) {
	      styles.writingMode = cue.vertical === "" ? "horizontal-tb"
	                                               : cue.vertical === "lr" ? "vertical-lr"
	                                                                       : "vertical-rl";
	      styles.unicodeBidi = "plaintext";
	    }
	    this.applyStyles(styles, this.cueDiv);

	    // Create an absolutely positioned div that will be used to position the cue
	    // div. Note, all WebVTT cue-setting alignments are equivalent to the CSS
	    // mirrors of them except "middle" which is "center" in CSS.
	    this.div = window.document.createElement("div");
	    styles = {
	      textAlign: cue.align === "middle" ? "center" : cue.align,
	      font: styleOptions.font,
	      whiteSpace: "pre-line",
	      position: "absolute"
	    };

	    if (!isIE8) {
	      styles.direction = determineBidi(this.cueDiv);
	      styles.writingMode = cue.vertical === "" ? "horizontal-tb"
	                                               : cue.vertical === "lr" ? "vertical-lr"
	                                                                       : "vertical-rl".
	      stylesunicodeBidi =  "plaintext";
	    }

	    this.applyStyles(styles);

	    this.div.appendChild(this.cueDiv);

	    // Calculate the distance from the reference edge of the viewport to the text
	    // position of the cue box. The reference edge will be resolved later when
	    // the box orientation styles are applied.
	    var textPos = 0;
	    switch (cue.positionAlign) {
	    case "start":
	      textPos = cue.position;
	      break;
	    case "middle":
	      textPos = cue.position - (cue.size / 2);
	      break;
	    case "end":
	      textPos = cue.position - cue.size;
	      break;
	    }

	    // Horizontal box orientation; textPos is the distance from the left edge of the
	    // area to the left edge of the box and cue.size is the distance extending to
	    // the right from there.
	    if (cue.vertical === "") {
	      this.applyStyles({
	        left:  this.formatStyle(textPos, "%"),
	        width: this.formatStyle(cue.size, "%"),
	      });
	    // Vertical box orientation; textPos is the distance from the top edge of the
	    // area to the top edge of the box and cue.size is the height extending
	    // downwards from there.
	    } else {
	      this.applyStyles({
	        top: this.formatStyle(textPos, "%"),
	        height: this.formatStyle(cue.size, "%")
	      });
	    }

	    this.move = function(box) {
	      this.applyStyles({
	        top: this.formatStyle(box.top, "px"),
	        bottom: this.formatStyle(box.bottom, "px"),
	        left: this.formatStyle(box.left, "px"),
	        right: this.formatStyle(box.right, "px"),
	        height: this.formatStyle(box.height, "px"),
	        width: this.formatStyle(box.width, "px"),
	      });
	    };
	  }
	  CueStyleBox.prototype = _objCreate(StyleBox.prototype);
	  CueStyleBox.prototype.constructor = CueStyleBox;

	  // Represents the co-ordinates of an Element in a way that we can easily
	  // compute things with such as if it overlaps or intersects with another Element.
	  // Can initialize it with either a StyleBox or another BoxPosition.
	  function BoxPosition(obj) {
	    var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);

	    // Either a BoxPosition was passed in and we need to copy it, or a StyleBox
	    // was passed in and we need to copy the results of 'getBoundingClientRect'
	    // as the object returned is readonly. All co-ordinate values are in reference
	    // to the viewport origin (top left).
	    var lh, height, width, top;
	    if (obj.div) {
	      height = obj.div.offsetHeight;
	      width = obj.div.offsetWidth;
	      top = obj.div.offsetTop;

	      var rects = (rects = obj.div.childNodes) && (rects = rects[0]) &&
	                  rects.getClientRects && rects.getClientRects();
	      obj = obj.div.getBoundingClientRect();
	      // In certain cases the outter div will be slightly larger then the sum of
	      // the inner div's lines. This could be due to bold text, etc, on some platforms.
	      // In this case we should get the average line height and use that. This will
	      // result in the desired behaviour.
	      lh = rects ? Math.max((rects[0] && rects[0].height) || 0, obj.height / rects.length)
	                 : 0;

	    }
	    this.left = obj.left;
	    this.right = obj.right;
	    this.top = obj.top || top;
	    this.height = obj.height || height;
	    this.bottom = obj.bottom || (top + (obj.height || height));
	    this.width = obj.width || width;
	    this.lineHeight = lh !== undefined ? lh : obj.lineHeight;

	    if (isIE8 && !this.lineHeight) {
	      this.lineHeight = 13;
	    }
	  }

	  // Move the box along a particular axis. Optionally pass in an amount to move
	  // the box. If no amount is passed then the default is the line height of the
	  // box.
	  BoxPosition.prototype.move = function(axis, toMove) {
	    toMove = toMove !== undefined ? toMove : this.lineHeight;
	    switch (axis) {
	    case "+x":
	      this.left += toMove;
	      this.right += toMove;
	      break;
	    case "-x":
	      this.left -= toMove;
	      this.right -= toMove;
	      break;
	    case "+y":
	      this.top += toMove;
	      this.bottom += toMove;
	      break;
	    case "-y":
	      this.top -= toMove;
	      this.bottom -= toMove;
	      break;
	    }
	  };

	  // Check if this box overlaps another box, b2.
	  BoxPosition.prototype.overlaps = function(b2) {
	    return this.left < b2.right &&
	           this.right > b2.left &&
	           this.top < b2.bottom &&
	           this.bottom > b2.top;
	  };

	  // Check if this box overlaps any other boxes in boxes.
	  BoxPosition.prototype.overlapsAny = function(boxes) {
	    for (var i = 0; i < boxes.length; i++) {
	      if (this.overlaps(boxes[i])) {
	        return true;
	      }
	    }
	    return false;
	  };

	  // Check if this box is within another box.
	  BoxPosition.prototype.within = function(container) {
	    return this.top >= container.top &&
	           this.bottom <= container.bottom &&
	           this.left >= container.left &&
	           this.right <= container.right;
	  };

	  // Check if this box is entirely within the container or it is overlapping
	  // on the edge opposite of the axis direction passed. For example, if "+x" is
	  // passed and the box is overlapping on the left edge of the container, then
	  // return true.
	  BoxPosition.prototype.overlapsOppositeAxis = function(container, axis) {
	    switch (axis) {
	    case "+x":
	      return this.left < container.left;
	    case "-x":
	      return this.right > container.right;
	    case "+y":
	      return this.top < container.top;
	    case "-y":
	      return this.bottom > container.bottom;
	    }
	  };

	  // Find the percentage of the area that this box is overlapping with another
	  // box.
	  BoxPosition.prototype.intersectPercentage = function(b2) {
	    var x = Math.max(0, Math.min(this.right, b2.right) - Math.max(this.left, b2.left)),
	        y = Math.max(0, Math.min(this.bottom, b2.bottom) - Math.max(this.top, b2.top)),
	        intersectArea = x * y;
	    return intersectArea / (this.height * this.width);
	  };

	  // Convert the positions from this box to CSS compatible positions using
	  // the reference container's positions. This has to be done because this
	  // box's positions are in reference to the viewport origin, whereas, CSS
	  // values are in referecne to their respective edges.
	  BoxPosition.prototype.toCSSCompatValues = function(reference) {
	    return {
	      top: this.top - reference.top,
	      bottom: reference.bottom - this.bottom,
	      left: this.left - reference.left,
	      right: reference.right - this.right,
	      height: this.height,
	      width: this.width
	    };
	  };

	  // Get an object that represents the box's position without anything extra.
	  // Can pass a StyleBox, HTMLElement, or another BoxPositon.
	  BoxPosition.getSimpleBoxPosition = function(obj) {
	    var height = obj.div ? obj.div.offsetHeight : obj.tagName ? obj.offsetHeight : 0;
	    var width = obj.div ? obj.div.offsetWidth : obj.tagName ? obj.offsetWidth : 0;
	    var top = obj.div ? obj.div.offsetTop : obj.tagName ? obj.offsetTop : 0;

	    obj = obj.div ? obj.div.getBoundingClientRect() :
	                  obj.tagName ? obj.getBoundingClientRect() : obj;
	    var ret = {
	      left: obj.left,
	      right: obj.right,
	      top: obj.top || top,
	      height: obj.height || height,
	      bottom: obj.bottom || (top + (obj.height || height)),
	      width: obj.width || width
	    };
	    return ret;
	  };

	  // Move a StyleBox to its specified, or next best, position. The containerBox
	  // is the box that contains the StyleBox, such as a div. boxPositions are
	  // a list of other boxes that the styleBox can't overlap with.
	  function moveBoxToLinePosition(window, styleBox, containerBox, boxPositions) {

	    // Find the best position for a cue box, b, on the video. The axis parameter
	    // is a list of axis, the order of which, it will move the box along. For example:
	    // Passing ["+x", "-x"] will move the box first along the x axis in the positive
	    // direction. If it doesn't find a good position for it there it will then move
	    // it along the x axis in the negative direction.
	    function findBestPosition(b, axis) {
	      var bestPosition,
	          specifiedPosition = new BoxPosition(b),
	          percentage = 1; // Highest possible so the first thing we get is better.

	      for (var i = 0; i < axis.length; i++) {
	        while (b.overlapsOppositeAxis(containerBox, axis[i]) ||
	               (b.within(containerBox) && b.overlapsAny(boxPositions))) {
	          b.move(axis[i]);
	        }
	        // We found a spot where we aren't overlapping anything. This is our
	        // best position.
	        if (b.within(containerBox)) {
	          return b;
	        }
	        var p = b.intersectPercentage(containerBox);
	        // If we're outside the container box less then we were on our last try
	        // then remember this position as the best position.
	        if (percentage > p) {
	          bestPosition = new BoxPosition(b);
	          percentage = p;
	        }
	        // Reset the box position to the specified position.
	        b = new BoxPosition(specifiedPosition);
	      }
	      return bestPosition || specifiedPosition;
	    }

	    var boxPosition = new BoxPosition(styleBox),
	        cue = styleBox.cue,
	        linePos = computeLinePos(cue),
	        axis = [];

	    // If we have a line number to align the cue to.
	    if (cue.snapToLines) {
	      var size;
	      switch (cue.vertical) {
	      case "":
	        axis = [ "+y", "-y" ];
	        size = "height";
	        break;
	      case "rl":
	        axis = [ "+x", "-x" ];
	        size = "width";
	        break;
	      case "lr":
	        axis = [ "-x", "+x" ];
	        size = "width";
	        break;
	      }

	      var step = boxPosition.lineHeight,
	          position = step * Math.round(linePos),
	          maxPosition = containerBox[size] + step,
	          initialAxis = axis[0];

	      // If the specified intial position is greater then the max position then
	      // clamp the box to the amount of steps it would take for the box to
	      // reach the max position.
	      if (Math.abs(position) > maxPosition) {
	        position = position < 0 ? -1 : 1;
	        position *= Math.ceil(maxPosition / step) * step;
	      }

	      // If computed line position returns negative then line numbers are
	      // relative to the bottom of the video instead of the top. Therefore, we
	      // need to increase our initial position by the length or width of the
	      // video, depending on the writing direction, and reverse our axis directions.
	      if (linePos < 0) {
	        position += cue.vertical === "" ? containerBox.height : containerBox.width;
	        axis = axis.reverse();
	      }

	      // Move the box to the specified position. This may not be its best
	      // position.
	      boxPosition.move(initialAxis, position);

	    } else {
	      // If we have a percentage line value for the cue.
	      var calculatedPercentage = (boxPosition.lineHeight / containerBox.height) * 100;

	      switch (cue.lineAlign) {
	      case "middle":
	        linePos -= (calculatedPercentage / 2);
	        break;
	      case "end":
	        linePos -= calculatedPercentage;
	        break;
	      }

	      // Apply initial line position to the cue box.
	      switch (cue.vertical) {
	      case "":
	        styleBox.applyStyles({
	          top: styleBox.formatStyle(linePos, "%")
	        });
	        break;
	      case "rl":
	        styleBox.applyStyles({
	          left: styleBox.formatStyle(linePos, "%")
	        });
	        break;
	      case "lr":
	        styleBox.applyStyles({
	          right: styleBox.formatStyle(linePos, "%")
	        });
	        break;
	      }

	      axis = [ "+y", "-x", "+x", "-y" ];

	      // Get the box position again after we've applied the specified positioning
	      // to it.
	      boxPosition = new BoxPosition(styleBox);
	    }

	    var bestPosition = findBestPosition(boxPosition, axis);
	    styleBox.move(bestPosition.toCSSCompatValues(containerBox));
	  }

	  function WebVTT() {
	    // Nothing
	  }

	  // Helper to allow strings to be decoded instead of the default binary utf8 data.
	  WebVTT.StringDecoder = function() {
	    return {
	      decode: function(data) {
	        if (!data) {
	          return "";
	        }
	        if (typeof data !== "string") {
	          throw new Error("Error - expected string data.");
	        }
	        return decodeURIComponent(encodeURIComponent(data));
	      }
	    };
	  };

	  WebVTT.convertCueToDOMTree = function(window, cuetext) {
	    if (!window || !cuetext) {
	      return null;
	    }
	    return parseContent(window, cuetext);
	  };

	  var FONT_SIZE_PERCENT = 0.05;
	  var FONT_STYLE = "sans-serif";
	  var CUE_BACKGROUND_PADDING = "1.5%";

	  // Runs the processing model over the cues and regions passed to it.
	  // @param overlay A block level element (usually a div) that the computed cues
	  //                and regions will be placed into.
	  WebVTT.processCues = function(window, cues, overlay) {
	    if (!window || !cues || !overlay) {
	      return null;
	    }

	    // Remove all previous children.
	    while (overlay.firstChild) {
	      overlay.removeChild(overlay.firstChild);
	    }

	    var paddedOverlay = window.document.createElement("div");
	    paddedOverlay.style.position = "absolute";
	    paddedOverlay.style.left = "0";
	    paddedOverlay.style.right = "0";
	    paddedOverlay.style.top = "0";
	    paddedOverlay.style.bottom = "0";
	    paddedOverlay.style.margin = CUE_BACKGROUND_PADDING;
	    overlay.appendChild(paddedOverlay);

	    // Determine if we need to compute the display states of the cues. This could
	    // be the case if a cue's state has been changed since the last computation or
	    // if it has not been computed yet.
	    function shouldCompute(cues) {
	      for (var i = 0; i < cues.length; i++) {
	        if (cues[i].hasBeenReset || !cues[i].displayState) {
	          return true;
	        }
	      }
	      return false;
	    }

	    // We don't need to recompute the cues' display states. Just reuse them.
	    if (!shouldCompute(cues)) {
	      for (var i = 0; i < cues.length; i++) {
	        paddedOverlay.appendChild(cues[i].displayState);
	      }
	      return;
	    }

	    var boxPositions = [],
	        containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay),
	        fontSize = Math.round(containerBox.height * FONT_SIZE_PERCENT * 100) / 100;
	    var styleOptions = {
	      font: fontSize + "px " + FONT_STYLE
	    };

	    (function() {
	      var styleBox, cue;

	      for (var i = 0; i < cues.length; i++) {
	        cue = cues[i];

	        // Compute the intial position and styles of the cue div.
	        styleBox = new CueStyleBox(window, cue, styleOptions);
	        paddedOverlay.appendChild(styleBox.div);

	        // Move the cue div to it's correct line position.
	        moveBoxToLinePosition(window, styleBox, containerBox, boxPositions);

	        // Remember the computed div so that we don't have to recompute it later
	        // if we don't have too.
	        cue.displayState = styleBox.div;

	        boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
	      }
	    })();
	  };

	  WebVTT.Parser = function(window, vttjs, decoder) {
	    if (!decoder) {
	      decoder = vttjs;
	      vttjs = {};
	    }
	    if (!vttjs) {
	      vttjs = {};
	    }

	    this.window = window;
	    this.vttjs = vttjs;
	    this.state = "INITIAL";
	    this.buffer = "";
	    this.decoder = decoder || new TextDecoder("utf8");
	    this.regionList = [];
	  };

	  WebVTT.Parser.prototype = {
	    // If the error is a ParsingError then report it to the consumer if
	    // possible. If it's not a ParsingError then throw it like normal.
	    reportOrThrowError: function(e) {
	      if (e instanceof ParsingError) {
	        this.onparsingerror && this.onparsingerror(e);
	      } else {
	        throw e;
	      }
	    },
	    parse: function (data) {
	      var self = this;

	      // If there is no data then we won't decode it, but will just try to parse
	      // whatever is in buffer already. This may occur in circumstances, for
	      // example when flush() is called.
	      if (data) {
	        // Try to decode the data that we received.
	        self.buffer += self.decoder.decode(data, {stream: true});
	      }

	      function collectNextLine() {
	        var buffer = self.buffer;
	        var pos = 0;
	        while (pos < buffer.length && buffer[pos] !== '\r' && buffer[pos] !== '\n') {
	          ++pos;
	        }
	        var line = buffer.substr(0, pos);
	        // Advance the buffer early in case we fail below.
	        if (buffer[pos] === '\r') {
	          ++pos;
	        }
	        if (buffer[pos] === '\n') {
	          ++pos;
	        }
	        self.buffer = buffer.substr(pos);
	        return line;
	      }

	      // 3.4 WebVTT region and WebVTT region settings syntax
	      function parseRegion(input) {
	        var settings = new Settings();

	        parseOptions(input, function (k, v) {
	          switch (k) {
	          case "id":
	            settings.set(k, v);
	            break;
	          case "width":
	            settings.percent(k, v);
	            break;
	          case "lines":
	            settings.integer(k, v);
	            break;
	          case "regionanchor":
	          case "viewportanchor":
	            var xy = v.split(',');
	            if (xy.length !== 2) {
	              break;
	            }
	            // We have to make sure both x and y parse, so use a temporary
	            // settings object here.
	            var anchor = new Settings();
	            anchor.percent("x", xy[0]);
	            anchor.percent("y", xy[1]);
	            if (!anchor.has("x") || !anchor.has("y")) {
	              break;
	            }
	            settings.set(k + "X", anchor.get("x"));
	            settings.set(k + "Y", anchor.get("y"));
	            break;
	          case "scroll":
	            settings.alt(k, v, ["up"]);
	            break;
	          }
	        }, /=/, /\s/);

	        // Create the region, using default values for any values that were not
	        // specified.
	        if (settings.has("id")) {
	          var region = new (self.vttjs.VTTRegion || self.window.VTTRegion)();
	          region.width = settings.get("width", 100);
	          region.lines = settings.get("lines", 3);
	          region.regionAnchorX = settings.get("regionanchorX", 0);
	          region.regionAnchorY = settings.get("regionanchorY", 100);
	          region.viewportAnchorX = settings.get("viewportanchorX", 0);
	          region.viewportAnchorY = settings.get("viewportanchorY", 100);
	          region.scroll = settings.get("scroll", "");
	          // Register the region.
	          self.onregion && self.onregion(region);
	          // Remember the VTTRegion for later in case we parse any VTTCues that
	          // reference it.
	          self.regionList.push({
	            id: settings.get("id"),
	            region: region
	          });
	        }
	      }

	      // 3.2 WebVTT metadata header syntax
	      function parseHeader(input) {
	        parseOptions(input, function (k, v) {
	          switch (k) {
	          case "Region":
	            // 3.3 WebVTT region metadata header syntax
	            parseRegion(v);
	            break;
	          }
	        }, /:/);
	      }

	      // 5.1 WebVTT file parsing.
	      try {
	        var line;
	        if (self.state === "INITIAL") {
	          // We can't start parsing until we have the first line.
	          if (!/\r\n|\n/.test(self.buffer)) {
	            return this;
	          }

	          line = collectNextLine();

	          var m = line.match(/^WEBVTT([ \t].*)?$/);
	          if (!m || !m[0]) {
	            throw new ParsingError(ParsingError.Errors.BadSignature);
	          }

	          self.state = "HEADER";
	        }

	        var alreadyCollectedLine = false;
	        while (self.buffer) {
	          // We can't parse a line until we have the full line.
	          if (!/\r\n|\n/.test(self.buffer)) {
	            return this;
	          }

	          if (!alreadyCollectedLine) {
	            line = collectNextLine();
	          } else {
	            alreadyCollectedLine = false;
	          }

	          switch (self.state) {
	          case "HEADER":
	            // 13-18 - Allow a header (metadata) under the WEBVTT line.
	            if (/:/.test(line)) {
	              parseHeader(line);
	            } else if (!line) {
	              // An empty line terminates the header and starts the body (cues).
	              self.state = "ID";
	            }
	            continue;
	          case "NOTE":
	            // Ignore NOTE blocks.
	            if (!line) {
	              self.state = "ID";
	            }
	            continue;
	          case "ID":
	            // Check for the start of NOTE blocks.
	            if (/^NOTE($|[ \t])/.test(line)) {
	              self.state = "NOTE";
	              break;
	            }
	            // 19-29 - Allow any number of line terminators, then initialize new cue values.
	            if (!line) {
	              continue;
	            }
	            self.cue = new (self.vttjs.VTTCue || self.window.VTTCue)(0, 0, "");
	            self.state = "CUE";
	            // 30-39 - Check if self line contains an optional identifier or timing data.
	            if (line.indexOf("-->") === -1) {
	              self.cue.id = line;
	              continue;
	            }
	            // Process line as start of a cue.
	            /*falls through*/
	          case "CUE":
	            // 40 - Collect cue timings and settings.
	            try {
	              parseCue(line, self.cue, self.regionList);
	            } catch (e) {
	              self.reportOrThrowError(e);
	              // In case of an error ignore rest of the cue.
	              self.cue = null;
	              self.state = "BADCUE";
	              continue;
	            }
	            self.state = "CUETEXT";
	            continue;
	          case "CUETEXT":
	            var hasSubstring = line.indexOf("-->") !== -1;
	            // 34 - If we have an empty line then report the cue.
	            // 35 - If we have the special substring '-->' then report the cue,
	            // but do not collect the line as we need to process the current
	            // one as a new cue.
	            if (!line || hasSubstring && (alreadyCollectedLine = true)) {
	              // We are done parsing self cue.
	              self.oncue && self.oncue(self.cue);
	              self.cue = null;
	              self.state = "ID";
	              continue;
	            }
	            if (self.cue.text) {
	              self.cue.text += "\n";
	            }
	            self.cue.text += line;
	            continue;
	          case "BADCUE": // BADCUE
	            // 54-62 - Collect and discard the remaining cue.
	            if (!line) {
	              self.state = "ID";
	            }
	            continue;
	          }
	        }
	      } catch (e) {
	        self.reportOrThrowError(e);

	        // If we are currently parsing a cue, report what we have.
	        if (self.state === "CUETEXT" && self.cue && self.oncue) {
	          self.oncue(self.cue);
	        }
	        self.cue = null;
	        // Enter BADWEBVTT state if header was not parsed correctly otherwise
	        // another exception occurred so enter BADCUE state.
	        self.state = self.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
	      }
	      return this;
	    },
	    flush: function () {
	      var self = this;
	      try {
	        // Finish decoding the stream.
	        self.buffer += self.decoder.decode();
	        // Synthesize the end of the current cue or region.
	        if (self.cue || self.state === "HEADER") {
	          self.buffer += "\n\n";
	          self.parse();
	        }
	        // If we've flushed, parsed, and we're still on the INITIAL state then
	        // that means we don't have enough of the stream to parse the first
	        // line.
	        if (self.state === "INITIAL") {
	          throw new ParsingError(ParsingError.Errors.BadSignature);
	        }
	      } catch(e) {
	        self.reportOrThrowError(e);
	      }
	      self.onflush && self.onflush();
	      return this;
	    }
	  };

	  global.WebVTT = WebVTT;

	}(this, (this.vttjs || {})));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_videojs) {/*** IMPORTS FROM imports-loader ***/
	(function() {

	/*! videojs-contrib-hls - v0.17.1 - 2015-06-08
	* Copyright (c) 2015 Brightcove; Licensed  */
	(function(window, videojs, document, undefined) {
	'use strict';

	var
	  // a fudge factor to apply to advertised playlist bitrates to account for
	  // temporary flucations in client bandwidth
	  bandwidthVariance = 1.1,

	  // the amount of time to wait between checking the state of the buffer
	  bufferCheckInterval = 500,
	  keyXhr,
	  keyFailed,
	  resolveUrl;

	// returns true if a key has failed to download within a certain amount of retries
	keyFailed = function(key) {
	  return key.retries && key.retries >= 2;
	};

	videojs.Hls = videojs.Flash.extend({
	  init: function(player, options, ready) {
	    var
	      source = options.source,
	      settings = player.options();

	    player.hls = this;
	    delete options.source;
	    options.swf = settings.flash.swf;
	    videojs.Flash.call(this, player, options, ready);
	    options.source = source;
	    this.bytesReceived = 0;

	    // TODO: After video.js#1347 is pulled in remove these lines
	    this.currentTime = videojs.Hls.prototype.currentTime;
	    this.setCurrentTime = videojs.Hls.prototype.setCurrentTime;

	    // a queue of segments that need to be transmuxed and processed,
	    // and then fed to the source buffer
	    this.segmentBuffer_ = [];
	    // periodically check if new data needs to be downloaded or
	    // buffered data should be appended to the source buffer
	    this.startCheckingBuffer_();

	    videojs.Hls.prototype.src.call(this, options.source && options.source.src);
	  }
	});

	// Add HLS to the standard tech order
	videojs.options.techOrder.unshift('hls');

	// the desired length of video to maintain in the buffer, in seconds
	videojs.Hls.GOAL_BUFFER_LENGTH = 30;

	videojs.Hls.prototype.src = function(src) {
	  var
	    tech = this,
	    player = this.player(),
	    settings = player.options().hls || {},
	    mediaSource,
	    oldMediaPlaylist,
	    source;

	  // do nothing if the src is falsey
	  if (!src) {
	    return;
	  }

	  // if there is already a source loaded, clean it up
	  if (this.src_) {
	    this.resetSrc_();
	  }

	  this.src_ = src;

	  mediaSource = new videojs.MediaSource();
	  source = {
	    src: videojs.URL.createObjectURL(mediaSource),
	    type: "video/flv"
	  };
	  this.mediaSource = mediaSource;

	  this.segmentBuffer_ = [];
	  this.segmentParser_ = new videojs.Hls.SegmentParser();

	  // if the stream contains ID3 metadata, expose that as a metadata
	  // text track
	  this.setupMetadataCueTranslation_();

	  // load the MediaSource into the player
	  this.mediaSource.addEventListener('sourceopen', videojs.bind(this, this.handleSourceOpen));

	  // cleanup the old playlist loader, if necessary
	  if (this.playlists) {
	    this.playlists.dispose();
	  }

	  this.mediaIndex = 0;

	  this.playlists = new videojs.Hls.PlaylistLoader(this.src_, settings.withCredentials);

	  this.playlists.on('loadedmetadata', videojs.bind(this, function() {
	    var selectedPlaylist, loaderHandler, oldBitrate, newBitrate, segmentDuration,
	        segmentDlTime, setupEvents, threshold;

	    setupEvents = function() {
	      this.fillBuffer();
	      player.trigger('loadedmetadata');
	    };

	    oldMediaPlaylist = this.playlists.media();

	    // the bandwidth estimate for the first segment is based on round
	    // trip time for the master playlist. the master playlist is
	    // almost always tiny so the round-trip time is dominated by
	    // latency and the computed bandwidth is much lower than
	    // steady-state. if the the downstream developer has a better way
	    // of detecting bandwidth and provided a number, use that instead.
	    if (this.bandwidth === undefined) {
	      // we're going to have to estimate initial bandwidth
	      // ourselves. scale the bandwidth estimate to account for the
	      // relatively high round-trip time from the master playlist.
	      this.setBandwidth({
	        bandwidth: this.playlists.bandwidth * 5
	      });
	    }

	    selectedPlaylist = this.selectPlaylist();
	    oldBitrate = oldMediaPlaylist.attributes &&
	                 oldMediaPlaylist.attributes.BANDWIDTH || 0;
	    newBitrate = selectedPlaylist.attributes &&
	                 selectedPlaylist.attributes.BANDWIDTH || 0;
	    segmentDuration = oldMediaPlaylist.segments &&
	                      oldMediaPlaylist.segments[this.mediaIndex].duration ||
	                      oldMediaPlaylist.targetDuration;

	    segmentDlTime = (segmentDuration * newBitrate) / this.bandwidth;

	    if (!segmentDlTime) {
	      segmentDlTime = Infinity;
	    }

	    // this threshold is to account for having a high latency on the manifest
	    // request which is a somewhat small file.
	    threshold = 10;

	    if (newBitrate > oldBitrate && segmentDlTime <= threshold) {
	      this.playlists.media(selectedPlaylist);
	      loaderHandler = videojs.bind(this, function() {
	        setupEvents.call(this);
	        this.playlists.off('loadedplaylist', loaderHandler);
	      });
	      this.playlists.on('loadedplaylist', loaderHandler);
	    } else {
	      setupEvents.call(this);
	    }
	  }));

	  this.playlists.on('error', videojs.bind(this, function() {
	    player.error(this.playlists.error);
	  }));

	  this.playlists.on('loadedplaylist', videojs.bind(this, function() {
	    var updatedPlaylist = this.playlists.media();

	    if (!updatedPlaylist) {
	      // do nothing before an initial media playlist has been activated
	      return;
	    }

	    this.updateDuration(this.playlists.media());
	    this.mediaIndex = videojs.Hls.translateMediaIndex(this.mediaIndex, oldMediaPlaylist, updatedPlaylist);
	    oldMediaPlaylist = updatedPlaylist;

	    this.fetchKeys_();
	  }));

	  this.playlists.on('mediachange', videojs.bind(this, function() {
	    // abort outstanding key requests and check if new keys need to be retrieved
	    if (keyXhr) {
	      this.cancelKeyXhr();
	    }

	    player.trigger('mediachange');
	  }));

	  this.player().ready(function() {
	    // do nothing if the tech has been disposed already
	    // this can occur if someone sets the src in player.ready(), for instance
	    if (!tech.el()) {
	      return;
	    }
	    tech.el().vjs_src(source.src);
	  });
	};

	/* Returns the media index for the live point in the current playlist, and updates
	   the current time to go along with it.
	 */
	videojs.Hls.getMediaIndexForLive_ = function(selectedPlaylist) {
	  if (!selectedPlaylist.segments) {
	    return 0;
	  }

	  var tailIterator = selectedPlaylist.segments.length,
	      tailDuration = 0,
	      targetTail = (selectedPlaylist.targetDuration || 10) * 3;

	  while (tailDuration < targetTail && tailIterator > 0) {
	    tailDuration += selectedPlaylist.segments[tailIterator - 1].duration;
	    tailIterator--;
	  }

	  return tailIterator;
	};

	videojs.Hls.prototype.handleSourceOpen = function() {
	  // construct the video data buffer and set the appropriate MIME type
	  var
	    player = this.player(),
	    sourceBuffer = this.mediaSource.addSourceBuffer('video/flv; codecs="vp6,aac"');

	  this.sourceBuffer = sourceBuffer;

	  // if autoplay is enabled, begin playback. This is duplicative of
	  // code in video.js but is required because play() must be invoked
	  // *after* the media source has opened.
	  // NOTE: moving this invocation of play() after
	  // sourceBuffer.appendBuffer() below caused live streams with
	  // autoplay to stall
	  if (player.options().autoplay) {
	    player.play();
	  }

	  sourceBuffer.appendBuffer(this.segmentParser_.getFlvHeader());
	};

	// register event listeners to transform in-band metadata events into
	// VTTCues on a text track
	videojs.Hls.prototype.setupMetadataCueTranslation_ = function() {
	  var
	    tech = this,
	    metadataStream = tech.segmentParser_.metadataStream,
	    textTrack;

	  // only expose metadata tracks to video.js versions that support
	  // dynamic text tracks (4.12+)
	  if (!tech.player().addTextTrack) {
	    return;
	  }

	  // add a metadata cue whenever a metadata event is triggered during
	  // segment parsing
	  metadataStream.on('data', function(metadata) {
	    var i, cue, frame, time, media, segmentOffset, hexDigit;

	    // create the metadata track if this is the first ID3 tag we've
	    // seen
	    if (!textTrack) {
	      textTrack = tech.player().addTextTrack('metadata', 'Timed Metadata');

	      // build the dispatch type from the stream descriptor
	      // https://html.spec.whatwg.org/multipage/embedded-content.html#steps-to-expose-a-media-resource-specific-text-track
	      textTrack.inBandMetadataTrackDispatchType = videojs.Hls.SegmentParser.STREAM_TYPES.metadata.toString(16).toUpperCase();
	      for (i = 0; i < metadataStream.descriptor.length; i++) {
	        hexDigit = ('00' + metadataStream.descriptor[i].toString(16).toUpperCase()).slice(-2);
	        textTrack.inBandMetadataTrackDispatchType += hexDigit;
	      }
	    }

	    // calculate the start time for the segment that is currently being parsed
	    media = tech.playlists.media();
	    segmentOffset = tech.playlists.expiredPreDiscontinuity_ + tech.playlists.expiredPostDiscontinuity_;
	    segmentOffset += videojs.Hls.Playlist.duration(media, media.mediaSequence, media.mediaSequence + tech.mediaIndex);

	    // create cue points for all the ID3 frames in this metadata event
	    for (i = 0; i < metadata.frames.length; i++) {
	      frame = metadata.frames[i];
	      time = tech.segmentParser_.mediaTimelineOffset + ((metadata.pts - tech.segmentParser_.timestampOffset) * 0.001);
	      cue = new window.VTTCue(time, time, frame.value || frame.url || '');
	      cue.frame = frame;
	      textTrack.addCue(cue);
	    }
	  });

	  // when seeking, clear out all cues ahead of the earliest position
	  // in the new segment. keep earlier cues around so they can still be
	  // programmatically inspected even though they've already fired
	  tech.on(tech.player(), 'seeking', function() {
	    var media, startTime, i;
	    if (!textTrack) {
	      return;
	    }
	    media = tech.playlists.media();
	    startTime = tech.playlists.expiredPreDiscontinuity_ + tech.playlists.expiredPostDiscontinuity_;
	    startTime += videojs.Hls.Playlist.duration(media, media.mediaSequence, media.mediaSequence + tech.mediaIndex);

	    i = textTrack.cues.length;
	    while (i--) {
	      if (textTrack.cues[i].startTime >= startTime) {
	        textTrack.removeCue(textTrack.cues[i]);
	      }
	    }
	  });
	};

	/**
	 * Reset the mediaIndex if play() is called after the video has
	 * ended.
	 */
	videojs.Hls.prototype.play = function() {
	  var media;
	  if (this.ended()) {
	    this.mediaIndex = 0;
	  }

	  // seek to the latest safe point in the media timeline when first
	  // playing live streams
	  if (this.duration() === Infinity &&
	      this.playlists.media() &&
	      !this.player().hasClass('vjs-has-started')) {
	    media = this.playlists.media();
	    this.mediaIndex = videojs.Hls.getMediaIndexForLive_(media);
	    this.setCurrentTime(videojs.Hls.Playlist.seekable(media).end(0));
	  }

	  // delegate back to the Flash implementation
	  return videojs.Flash.prototype.play.apply(this, arguments);
	};

	videojs.Hls.prototype.currentTime = function() {
	  if (this.lastSeekedTime_) {
	    return this.lastSeekedTime_;
	  }
	  // currentTime is zero while the tech is initializing
	  if (!this.el() || !this.el().vjs_getProperty) {
	    return 0;
	  }
	  return this.el().vjs_getProperty('currentTime');
	};

	videojs.Hls.prototype.setCurrentTime = function(currentTime) {
	  if (!(this.playlists && this.playlists.media())) {
	    // return immediately if the metadata is not ready yet
	    return 0;
	  }

	  // it's clearly an edge-case but don't thrown an error if asked to
	  // seek within an empty playlist
	  if (!this.playlists.media().segments) {
	    return 0;
	  }

	  // save the seek target so currentTime can report it correctly
	  // while the seek is pending
	  this.lastSeekedTime_ = currentTime;

	  // determine the requested segment
	  this.mediaIndex = videojs.Hls.getMediaIndexByTime(this.playlists.media(), currentTime);

	  // abort any segments still being decoded
	  this.sourceBuffer.abort();

	  // cancel outstanding requests and buffer appends
	  this.cancelSegmentXhr();

	  // abort outstanding key requests, if necessary
	  if (keyXhr) {
	    keyXhr.aborted = true;
	    this.cancelKeyXhr();
	  }

	  // clear out any buffered segments
	  this.segmentBuffer_ = [];

	  // begin filling the buffer at the new position
	  this.fillBuffer(currentTime * 1000);
	};

	videojs.Hls.prototype.duration = function() {
	  var playlists = this.playlists;
	  if (playlists) {
	    return videojs.Hls.Playlist.duration(playlists.media());
	  }
	  return 0;
	};

	videojs.Hls.prototype.seekable = function() {
	  var absoluteSeekable, startOffset, media;

	  if (!this.playlists) {
	    return videojs.createTimeRange();
	  }
	  media = this.playlists.media();
	  if (!media) {
	    return videojs.createTimeRange();
	  }

	  // report the seekable range relative to the earliest possible
	  // position when the stream was first loaded
	  absoluteSeekable = videojs.Hls.Playlist.seekable(media);
	  startOffset = this.playlists.expiredPostDiscontinuity_ - this.playlists.expiredPreDiscontinuity_;
	  return videojs.createTimeRange(startOffset,
	                                 startOffset + (absoluteSeekable.end(0) - absoluteSeekable.start(0)));
	};

	/**
	 * Update the player duration
	 */
	videojs.Hls.prototype.updateDuration = function(playlist) {
	  var player = this.player(),
	      oldDuration = player.duration(),
	      newDuration = videojs.Hls.Playlist.duration(playlist);

	  // if the duration has changed, invalidate the cached value
	  if (oldDuration !== newDuration) {
	    player.trigger('durationchange');
	  }
	};

	/**
	 * Clear all buffers and reset any state relevant to the current
	 * source. After this function is called, the tech should be in a
	 * state suitable for switching to a different video.
	 */
	videojs.Hls.prototype.resetSrc_ = function() {
	  this.cancelSegmentXhr();
	  this.cancelKeyXhr();

	  if (this.sourceBuffer) {
	    this.sourceBuffer.abort();
	  }
	};

	videojs.Hls.prototype.cancelKeyXhr = function() {
	  if (keyXhr) {
	    keyXhr.onreadystatechange = null;
	    keyXhr.abort();
	    keyXhr = null;
	  }
	};

	videojs.Hls.prototype.cancelSegmentXhr = function() {
	  if (this.segmentXhr_) {
	    // Prevent error handler from running.
	    this.segmentXhr_.onreadystatechange = null;
	    this.segmentXhr_.abort();
	    this.segmentXhr_ = null;
	  }
	};

	/**
	 * Abort all outstanding work and cleanup.
	 */
	videojs.Hls.prototype.dispose = function() {
	  this.stopCheckingBuffer_();

	  if (this.playlists) {
	    this.playlists.dispose();
	  }

	  this.resetSrc_();

	  videojs.Flash.prototype.dispose.call(this);
	};

	/**
	 * Chooses the appropriate media playlist based on the current
	 * bandwidth estimate and the player size.
	 * @return the highest bitrate playlist less than the currently detected
	 * bandwidth, accounting for some amount of bandwidth variance
	 */
	videojs.Hls.prototype.selectPlaylist = function () {
	  var
	    player = this.player(),
	    effectiveBitrate,
	    sortedPlaylists = this.playlists.master.playlists.slice(),
	    bandwidthPlaylists = [],
	    i = sortedPlaylists.length,
	    variant,
	    oldvariant,
	    bandwidthBestVariant,
	    resolutionPlusOne,
	    resolutionBestVariant;

	  sortedPlaylists.sort(videojs.Hls.comparePlaylistBandwidth);

	  // filter out any variant that has greater effective bitrate
	  // than the current estimated bandwidth
	  while (i--) {
	    variant = sortedPlaylists[i];

	    // ignore playlists without bandwidth information
	    if (!variant.attributes || !variant.attributes.BANDWIDTH) {
	      continue;
	    }

	    effectiveBitrate = variant.attributes.BANDWIDTH * bandwidthVariance;

	    if (effectiveBitrate < player.hls.bandwidth) {
	      bandwidthPlaylists.push(variant);

	      // since the playlists are sorted in ascending order by
	      // bandwidth, the first viable variant is the best
	      if (!bandwidthBestVariant) {
	        bandwidthBestVariant = variant;
	      }
	    }
	  }

	  i = bandwidthPlaylists.length;

	  // sort variants by resolution
	  bandwidthPlaylists.sort(videojs.Hls.comparePlaylistResolution);

	  // forget our old variant from above, or we might choose that in high-bandwidth scenarios
	  // (this could be the lowest bitrate rendition as  we go through all of them above)
	  variant = null;

	  // iterate through the bandwidth-filtered playlists and find
	  // best rendition by player dimension
	  while (i--) {
	    oldvariant = variant;
	    variant = bandwidthPlaylists[i];

	    // ignore playlists without resolution information
	    if (!variant.attributes ||
	        !variant.attributes.RESOLUTION ||
	        !variant.attributes.RESOLUTION.width ||
	        !variant.attributes.RESOLUTION.height) {
	      continue;
	    }


	    // since the playlists are sorted, the first variant that has
	    // dimensions less than or equal to the player size is the best
	    if (variant.attributes.RESOLUTION.width === player.width() &&
	        variant.attributes.RESOLUTION.height === player.height()) {
	      // if we have the exact resolution as the player use it
	      resolutionPlusOne = null;
	      resolutionBestVariant = variant;
	      break;
	    } else if (variant.attributes.RESOLUTION.width < player.width() &&
	        variant.attributes.RESOLUTION.height < player.height()) {
	      // if we don't have an exact match, see if we have a good higher quality variant to use
	      if (oldvariant && oldvariant.attributes && oldvariant.attributes.RESOLUTION &&
	          oldvariant.attributes.RESOLUTION.width && oldvariant.attributes.RESOLUTION.height) {
	        resolutionPlusOne = oldvariant;
	      }
	      resolutionBestVariant = variant;
	      break;
	    }
	  }

	  // fallback chain of variants
	  return resolutionPlusOne || resolutionBestVariant || bandwidthBestVariant || sortedPlaylists[0];
	};

	/**
	 * Periodically request new segments and append video data.
	 */
	videojs.Hls.prototype.checkBuffer_ = function() {
	  // calling this method directly resets any outstanding buffer checks
	  if (this.checkBufferTimeout_) {
	    window.clearTimeout(this.checkBufferTimeout_);
	    this.checkBufferTimeout_ = null;
	  }

	  this.fillBuffer();
	  this.drainBuffer();

	  // wait awhile and try again
	  this.checkBufferTimeout_ = window.setTimeout(videojs.bind(this, this.checkBuffer_),
	                                               bufferCheckInterval);
	};

	/**
	 * Setup a periodic task to request new segments if necessary and
	 * append bytes into the SourceBuffer.
	 */
	videojs.Hls.prototype.startCheckingBuffer_ = function() {
	  // if the player ever stalls, check if there is video data available
	  // to append immediately
	  this.player().on('waiting', videojs.bind(this, this.drainBuffer));

	  this.checkBuffer_();
	};

	/**
	 * Stop the periodic task requesting new segments and feeding the
	 * SourceBuffer.
	 */
	videojs.Hls.prototype.stopCheckingBuffer_ = function() {
	  window.clearTimeout(this.checkBufferTimeout_);
	  this.checkBufferTimeout_ = null;
	  this.player().off('waiting', this.drainBuffer);
	};

	/**
	 * Determines whether there is enough video data currently in the buffer
	 * and downloads a new segment if the buffered time is less than the goal.
	 * @param offset (optional) {number} the offset into the downloaded segment
	 * to seek to, in milliseconds
	 */
	videojs.Hls.prototype.fillBuffer = function(offset) {
	  var
	    player = this.player(),
	    buffered = player.buffered(),
	    bufferedTime = 0,
	    segment,
	    segmentUri;

	  // if preload is set to "none", do not download segments until playback is requested
	  if (!player.hasClass('vjs-has-started') &&
	      player.options().preload === 'none') {
	    return;
	  }

	  // if a video has not been specified, do nothing
	  if (!player.currentSrc() || !this.playlists) {
	    return;
	  }

	  // if there is a request already in flight, do nothing
	  if (this.segmentXhr_) {
	    return;
	  }

	  // if no segments are available, do nothing
	  if (this.playlists.state === "HAVE_NOTHING" ||
	      !this.playlists.media() ||
	      !this.playlists.media().segments) {
	    return;
	  }

	  // if this is a live video wait until playback has been requested to
	  // being buffering so we don't preload data that will never be
	  // played
	  if (!this.playlists.media().endList &&
	      !this.player().hasClass('vjs-has-started')) {
	    return;
	  }

	  // if a playlist switch is in progress, wait for it to finish
	  if (this.playlists.state === 'SWITCHING_MEDIA') {
	    return;
	  }

	  // if the video has finished downloading, stop trying to buffer
	  segment = this.playlists.media().segments[this.mediaIndex];
	  if (!segment) {
	    return;
	  }

	  if (buffered) {
	    // assuming a single, contiguous buffer region
	    bufferedTime = player.buffered().end(0) - player.currentTime();
	  }

	  // if there is plenty of content in the buffer and we're not
	  // seeking, relax for awhile
	  if (typeof offset !== 'number' && bufferedTime >= videojs.Hls.GOAL_BUFFER_LENGTH) {
	    return;
	  }

	  // resolve the segment URL relative to the playlist
	  segmentUri = this.playlistUriToUrl(segment.uri);

	  this.loadSegment(segmentUri, offset);
	};

	videojs.Hls.prototype.playlistUriToUrl = function(segmentRelativeUrl) {
	  var playListUrl;
	    // resolve the segment URL relative to the playlist
	  if (this.playlists.media().uri === this.src_) {
	    playListUrl = resolveUrl(this.src_, segmentRelativeUrl);
	  } else {
	    playListUrl = resolveUrl(resolveUrl(this.src_, this.playlists.media().uri || ''), segmentRelativeUrl);
	  }
	  return playListUrl;
	};

	/*
	 * Sets `bandwidth`, `segmentXhrTime`, and appends to the `bytesReceived.
	 * Expects an object with:
	 *  * `roundTripTime` - the round trip time for the request we're setting the time for
	 *  * `bandwidth` - the bandwidth we want to set
	 *  * `bytesReceived` - amount of bytes downloaded
	 * `bandwidth` is the only required property.
	 */
	videojs.Hls.prototype.setBandwidth = function(xhr) {
	  var tech = this;
	  // calculate the download bandwidth
	  tech.segmentXhrTime = xhr.roundTripTime;
	  tech.bandwidth = xhr.bandwidth;
	  tech.bytesReceived += xhr.bytesReceived || 0;

	  tech.trigger('bandwidthupdate');
	};

	videojs.Hls.prototype.loadSegment = function(segmentUri, offset) {
	  var
	    tech = this,
	    player = this.player(),
	    settings = player.options().hls || {};

	  // request the next segment
	  this.segmentXhr_ = videojs.Hls.xhr({
	    url: segmentUri,
	    responseType: 'arraybuffer',
	    withCredentials: settings.withCredentials
	  }, function(error, url) {
	    var segmentInfo;

	    // the segment request is no longer outstanding
	    tech.segmentXhr_ = null;

	    if (error) {
	      // if a segment request times out, we may have better luck with another playlist
	      if (error === 'timeout') {
	        tech.bandwidth = 1;
	        return tech.playlists.media(tech.selectPlaylist());
	      }
	      // otherwise, try jumping ahead to the next segment
	      tech.error = {
	        status: this.status,
	        message: 'HLS segment request error at URL: ' + url,
	        code: (this.status >= 500) ? 4 : 2
	      };

	      // try moving on to the next segment
	      tech.mediaIndex++;
	      return;
	    }

	    // stop processing if the request was aborted
	    if (!this.response) {
	      return;
	    }

	    tech.setBandwidth(this);

	    // package up all the work to append the segment
	    segmentInfo = {
	      // the segment's mediaIndex at the time it was received
	      mediaIndex: tech.mediaIndex,
	      // the segment's playlist
	      playlist: tech.playlists.media(),
	      // optionally, a time offset to seek to within the segment
	      offset: offset,
	      // unencrypted bytes of the segment
	      bytes: null,
	      // when a key is defined for this segment, the encrypted bytes
	      encryptedBytes: null,
	      // optionally, the decrypter that is unencrypting the segment
	      decrypter: null
	    };
	    if (segmentInfo.playlist.segments[segmentInfo.mediaIndex].key) {
	      segmentInfo.encryptedBytes = new Uint8Array(this.response);
	    } else {
	      segmentInfo.bytes = new Uint8Array(this.response);
	    }
	    tech.segmentBuffer_.push(segmentInfo);
	    player.trigger('progress');
	    tech.drainBuffer();

	    tech.mediaIndex++;

	    // figure out what stream the next segment should be downloaded from
	    // with the updated bandwidth information
	    tech.playlists.media(tech.selectPlaylist());
	  });
	};

	videojs.Hls.prototype.drainBuffer = function(event) {
	  var
	    i = 0,
	    segmentInfo,
	    mediaIndex,
	    playlist,
	    offset,
	    tags,
	    bytes,
	    segment,
	    decrypter,
	    segIv,
	    ptsTime,
	    segmentOffset = 0,
	    segmentBuffer = this.segmentBuffer_;

	  // if the buffer is empty or the source buffer hasn't been created
	  // yet, do nothing
	  if (!segmentBuffer.length || !this.sourceBuffer) {
	    return;
	  }

	  // we can't append more data if the source buffer is busy processing
	  // what we've already sent
	  if (this.sourceBuffer.updating) {
	    return;
	  }

	  segmentInfo = segmentBuffer[0];

	  mediaIndex = segmentInfo.mediaIndex;
	  playlist = segmentInfo.playlist;
	  offset = segmentInfo.offset;
	  bytes = segmentInfo.bytes;
	  segment = playlist.segments[mediaIndex];

	  if (segment.key && !bytes) {

	    // this is an encrypted segment
	    // if the key download failed, we want to skip this segment
	    // but if the key hasn't downloaded yet, we want to try again later
	    if (keyFailed(segment.key)) {
	      return segmentBuffer.shift();
	    } else if (!segment.key.bytes) {

	      // trigger a key request if one is not already in-flight
	      return this.fetchKeys_();

	    } else if (segmentInfo.decrypter) {

	      // decryption is in progress, try again later
	      return;

	    } else {
	      // if the media sequence is greater than 2^32, the IV will be incorrect
	      // assuming 10s segments, that would be about 1300 years
	      segIv = segment.key.iv || new Uint32Array([0, 0, 0, mediaIndex + playlist.mediaSequence]);

	      // create a decrypter to incrementally decrypt the segment
	      decrypter = new videojs.Hls.Decrypter(segmentInfo.encryptedBytes,
	                                            segment.key.bytes,
	                                            segIv,
	                                            function(err, bytes) {
	                                              segmentInfo.bytes = bytes;
	                                            });
	      segmentInfo.decrypter = decrypter;
	      return;
	    }
	  }

	  event = event || {};
	  segmentOffset = this.playlists.expiredPreDiscontinuity_;
	  segmentOffset += this.playlists.expiredPostDiscontinuity_;
	  segmentOffset += videojs.Hls.Playlist.duration(playlist, playlist.mediaSequence, playlist.mediaSequence + mediaIndex);
	  segmentOffset *= 1000;

	  // if this segment starts is the start of a new discontinuity
	  // sequence, the segment parser's timestamp offset must be
	  // re-calculated
	  if (segment.discontinuity) {
	    this.segmentParser_.mediaTimelineOffset = segmentOffset * 0.001;
	    this.segmentParser_.timestampOffset = null;
	  } else if (this.segmentParser_.mediaTimelineOffset === null) {
	    this.segmentParser_.mediaTimelineOffset = segmentOffset * 0.001;
	  }

	  // transmux the segment data from MP2T to FLV
	  this.segmentParser_.parseSegmentBinaryData(bytes);
	  this.segmentParser_.flushTags();

	  tags = [];

	  while (this.segmentParser_.tagsAvailable()) {
	    tags.push(this.segmentParser_.getNextTag());
	  }

	  if (tags.length > 0) {
	    // Use the presentation timestamp of the ts segment to calculate its
	    // exact duration, since this may differ by fractions of a second
	    // from what is reported in the playlist
	    segment.preciseDuration = videojs.Hls.FlvTag.durationFromTags(tags) * 0.001;
	  }

	  this.updateDuration(this.playlists.media());

	  // if we're refilling the buffer after a seek, scan through the muxed
	  // FLV tags until we find the one that is closest to the desired
	  // playback time
	  if (typeof offset === 'number') {
	    ptsTime = offset - segmentOffset + tags[0].pts;

	    while (tags[i].pts < ptsTime) {
	      i++;
	    }

	    // tell the SWF where we will be seeking to
	    this.el().vjs_setProperty('currentTime', (tags[i].pts - tags[0].pts + segmentOffset) * 0.001);

	    tags = tags.slice(i);

	    this.lastSeekedTime_ = null;
	  }

	  // when we're crossing a discontinuity, inject metadata to indicate
	  // that the decoder should be reset appropriately
	  if (segment.discontinuity && tags.length) {
	    this.el().vjs_discontinuity();
	  }

	  (function() {
	    var segmentByteLength = 0, j, segment;
	    for (i = 0; i < tags.length; i++) {
	      segmentByteLength += tags[i].bytes.byteLength;
	    }
	    segment = new Uint8Array(segmentByteLength);
	    for (i = 0, j = 0; i < tags.length; i++) {
	      segment.set(tags[i].bytes, j);
	      j += tags[i].bytes.byteLength;
	    }
	    this.sourceBuffer.appendBuffer(segment);
	  }).call(this);

	  // we're done processing this segment
	  segmentBuffer.shift();

	  // transition the sourcebuffer to the ended state if we've hit the end of
	  // the playlist
	  if (this.duration() !== Infinity && mediaIndex + 1 === playlist.segments.length) {
	    this.mediaSource.endOfStream();
	  }
	};

	/**
	 * Attempt to retrieve keys starting at a particular media
	 * segment. This method has no effect if segments are not yet
	 * available or a key request is already in progress.
	 *
	 * @param playlist {object} the media playlist to fetch keys for
	 * @param index {number} the media segment index to start from
	 */
	videojs.Hls.prototype.fetchKeys_ = function() {
	  var i, key, tech, player, settings, segment, view, receiveKey;

	  // if there is a pending XHR or no segments, don't do anything
	  if (keyXhr || !this.segmentBuffer_.length) {
	    return;
	  }

	  tech = this;
	  player = this.player();
	  settings = player.options().hls || {};

	  /**
	   * Handle a key XHR response. This function needs to lookup the
	   */
	  receiveKey = function(key) {
	    return function(error) {
	      keyXhr = null;

	      if (error || !this.response || this.response.byteLength !== 16) {
	        key.retries = key.retries || 0;
	        key.retries++;
	        if (!this.aborted) {
	          // try fetching again
	          tech.fetchKeys_();
	        }
	        return;
	      }

	      view = new DataView(this.response);
	      key.bytes = new Uint32Array([
	        view.getUint32(0),
	        view.getUint32(4),
	        view.getUint32(8),
	        view.getUint32(12)
	      ]);

	      // check to see if this allows us to make progress buffering now
	      tech.checkBuffer_();
	    };
	  };

	  for (i = 0; i < tech.segmentBuffer_.length; i++) {
	    segment = tech.segmentBuffer_[i].playlist.segments[tech.segmentBuffer_[i].mediaIndex];
	    key = segment.key;

	    // continue looking if this segment is unencrypted
	    if (!key) {
	      continue;
	    }

	    // request the key if the retry limit hasn't been reached
	    if (!key.bytes && !keyFailed(key)) {
	      keyXhr = videojs.Hls.xhr({
	        url: this.playlistUriToUrl(key.uri),
	        responseType: 'arraybuffer',
	        withCredentials: settings.withCredentials
	      }, receiveKey(key));
	      break;
	    }
	  }
	};

	/**
	 * Whether the browser has built-in HLS support.
	 */
	videojs.Hls.supportsNativeHls = (function() {
	  var
	    video = document.createElement('video'),
	    xMpegUrl,
	    vndMpeg;

	  // native HLS is definitely not supported if HTML5 video isn't
	  if (!videojs.Html5.isSupported()) {
	    return false;
	  }

	  xMpegUrl = video.canPlayType('application/x-mpegURL');
	  vndMpeg = video.canPlayType('application/vnd.apple.mpegURL');
	  return (/probably|maybe/).test(xMpegUrl) ||
	    (/probably|maybe/).test(vndMpeg);
	})();

	videojs.Hls.isSupported = function() {

	  // Only use the HLS tech if native HLS isn't available
	  return !videojs.Hls.supportsNativeHls &&
	    // Flash must be supported for the fallback to work
	    videojs.Flash.isSupported() &&
	    // Media sources must be available to stream bytes to Flash
	    videojs.MediaSource &&
	    // Typed arrays are used to repackage the segments
	    window.Uint8Array;
	};

	videojs.Hls.canPlaySource = function(srcObj) {
	  var mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
	  return mpegurlRE.test(srcObj.type);
	};

	/**
	 * Calculate the duration of a playlist from a given start index to a given
	 * end index.
	 * @param playlist {object} a media playlist object
	 * @param startIndex {number} an inclusive lower boundary for the playlist.
	 * Defaults to 0.
	 * @param endIndex {number} an exclusive upper boundary for the playlist.
	 * Defaults to playlist length.
	 * @return {number} the duration between the start index and end index.
	 */
	videojs.Hls.getPlaylistDuration = function(playlist, startIndex, endIndex) {
	  videojs.log.warn('videojs.Hls.getPlaylistDuration is deprecated. ' +
	                   'Use videojs.Hls.Playlist.duration instead');
	  return videojs.Hls.Playlist.duration(playlist, startIndex, endIndex);
	};

	/**
	 * Calculate the total duration for a playlist based on segment metadata.
	 * @param playlist {object} a media playlist object
	 * @return {number} the currently known duration, in seconds
	 */
	videojs.Hls.getPlaylistTotalDuration = function(playlist) {
	  videojs.log.warn('videojs.Hls.getPlaylistTotalDuration is deprecated. ' +
	                   'Use videojs.Hls.Playlist.duration instead');
	  return videojs.Hls.Playlist.duration(playlist);
	};

	/**
	 * Determine the media index in one playlist that corresponds to a
	 * specified media index in another. This function can be used to
	 * calculate a new segment position when a playlist is reloaded or a
	 * variant playlist is becoming active.
	 * @param mediaIndex {number} the index into the original playlist
	 * to translate
	 * @param original {object} the playlist to translate the media
	 * index from
	 * @param update {object} the playlist to translate the media index
	 * to
	 * @param {number} the corresponding media index in the updated
	 * playlist
	 */
	videojs.Hls.translateMediaIndex = function(mediaIndex, original, update) {
	  var translatedMediaIndex;

	  // no segments have been loaded from the original playlist
	  if (mediaIndex === 0) {
	    return 0;
	  }

	  if (!(update && update.segments)) {
	    // let the media index be zero when there are no segments defined
	    return 0;
	  }

	  // translate based on media sequence numbers. syncing up across
	  // bitrate switches should be happening here.
	  translatedMediaIndex = (mediaIndex + (original.mediaSequence - update.mediaSequence));

	  if (translatedMediaIndex > update.segments.length || translatedMediaIndex < 0) {
	    // recalculate the live point if the streams are too far out of sync
	    return videojs.Hls.getMediaIndexForLive_(update) + 1;
	  }

	  return translatedMediaIndex;
	};

	/**
	 * Determine the media index in one playlist by a time in seconds. This
	 * function iterates through the segments of a playlist and creates TimeRange
	 * objects for each and then returns the most appropriate segment index by
	 * checking the time value versus each range.
	 *
	 * @param playlist {object} The playlist of the segments being searched.
	 * @param time {number} The time in seconds of what segment you want.
	 * @returns {number} The media index, or -1 if none appropriate.
	 */
	videojs.Hls.getMediaIndexByTime = function(playlist, time) {
	  var index, counter, timeRanges, currentSegmentRange;

	  timeRanges = [];
	  for (index = 0; index < playlist.segments.length; index++) {
	    currentSegmentRange = {};
	    currentSegmentRange.start = (index === 0) ? 0 : timeRanges[index - 1].end;
	    currentSegmentRange.end = currentSegmentRange.start + playlist.segments[index].duration;
	    timeRanges.push(currentSegmentRange);
	  }

	  for (counter = 0; counter < timeRanges.length; counter++) {
	    if (time >= timeRanges[counter].start && time < timeRanges[counter].end) {
	      return counter;
	    }
	  }

	  return -1;
	};

	/**
	 * Determine the current time in seconds in one playlist by a media index. This
	 * function iterates through the segments of a playlist up to the specified index
	 * and then returns the time up to that point.
	 *
	 * @param playlist {object} The playlist of the segments being searched.
	 * @param mediaIndex {number} The index of the target segment in the playlist.
	 * @returns {number} The current time to that point, or 0 if none appropriate.
	 */
	videojs.Hls.prototype.getCurrentTimeByMediaIndex_ = function(playlist, mediaIndex) {
	  var index, time = 0;

	  if (!playlist.segments || mediaIndex === 0) {
	    return 0;
	  }

	  for (index = 0; index < mediaIndex; index++) {
	    time += playlist.segments[index].duration;
	  }

	  return time;
	};

	/**
	 * A comparator function to sort two playlist object by bandwidth.
	 * @param left {object} a media playlist object
	 * @param right {object} a media playlist object
	 * @return {number} Greater than zero if the bandwidth attribute of
	 * left is greater than the corresponding attribute of right. Less
	 * than zero if the bandwidth of right is greater than left and
	 * exactly zero if the two are equal.
	 */
	videojs.Hls.comparePlaylistBandwidth = function(left, right) {
	  var leftBandwidth, rightBandwidth;
	  if (left.attributes && left.attributes.BANDWIDTH) {
	    leftBandwidth = left.attributes.BANDWIDTH;
	  }
	  leftBandwidth = leftBandwidth || window.Number.MAX_VALUE;
	  if (right.attributes && right.attributes.BANDWIDTH) {
	    rightBandwidth = right.attributes.BANDWIDTH;
	  }
	  rightBandwidth = rightBandwidth || window.Number.MAX_VALUE;

	  return leftBandwidth - rightBandwidth;
	};

	/**
	 * A comparator function to sort two playlist object by resolution (width).
	 * @param left {object} a media playlist object
	 * @param right {object} a media playlist object
	 * @return {number} Greater than zero if the resolution.width attribute of
	 * left is greater than the corresponding attribute of right. Less
	 * than zero if the resolution.width of right is greater than left and
	 * exactly zero if the two are equal.
	 */
	videojs.Hls.comparePlaylistResolution = function(left, right) {
	  var leftWidth, rightWidth;

	  if (left.attributes && left.attributes.RESOLUTION && left.attributes.RESOLUTION.width) {
	    leftWidth = left.attributes.RESOLUTION.width;
	  }

	  leftWidth = leftWidth || window.Number.MAX_VALUE;

	  if (right.attributes && right.attributes.RESOLUTION && right.attributes.RESOLUTION.width) {
	    rightWidth = right.attributes.RESOLUTION.width;
	  }

	  rightWidth = rightWidth || window.Number.MAX_VALUE;

	  // NOTE - Fallback to bandwidth sort as appropriate in cases where multiple renditions
	  // have the same media dimensions/ resolution
	  if (leftWidth === rightWidth && left.attributes.BANDWIDTH && right.attributes.BANDWIDTH) {
	    return left.attributes.BANDWIDTH - right.attributes.BANDWIDTH;
	  } else {
	    return leftWidth - rightWidth;
	  }
	};

	/**
	 * Constructs a new URI by interpreting a path relative to another
	 * URI.
	 * @param basePath {string} a relative or absolute URI
	 * @param path {string} a path part to combine with the base
	 * @return {string} a URI that is equivalent to composing `base`
	 * with `path`
	 * @see http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
	 */
	resolveUrl = videojs.Hls.resolveUrl = function(basePath, path) {
	  // use the base element to get the browser to handle URI resolution
	  var
	    oldBase = document.querySelector('base'),
	    docHead = document.querySelector('head'),
	    a = document.createElement('a'),
	    base = oldBase,
	    oldHref,
	    result;

	  // prep the document
	  if (oldBase) {
	    oldHref = oldBase.href;
	  } else {
	    base = docHead.appendChild(document.createElement('base'));
	  }

	  base.href = basePath;
	  a.href = path;
	  result = a.href;

	  // clean up
	  if (oldBase) {
	    oldBase.href = oldHref;
	  } else {
	    docHead.removeChild(base);
	  }
	  return result;
	};

	})(window, __webpack_provided_window_dot_videojs, document);

	(function(videojs, undefined) {
	  var Stream = function() {
	    this.init = function() {
	      var listeners = {};
	      /**
	       * Add a listener for a specified event type.
	       * @param type {string} the event name
	       * @param listener {function} the callback to be invoked when an event of
	       * the specified type occurs
	       */
	      this.on = function(type, listener) {
	        if (!listeners[type]) {
	          listeners[type] = [];
	        }
	        listeners[type].push(listener);
	      };
	      /**
	       * Remove a listener for a specified event type.
	       * @param type {string} the event name
	       * @param listener {function} a function previously registered for this
	       * type of event through `on`
	       */
	      this.off = function(type, listener) {
	        var index;
	        if (!listeners[type]) {
	          return false;
	        }
	        index = listeners[type].indexOf(listener);
	        listeners[type].splice(index, 1);
	        return index > -1;
	      };
	      /**
	       * Trigger an event of the specified type on this stream. Any additional
	       * arguments to this function are passed as parameters to event listeners.
	       * @param type {string} the event name
	       */
	      this.trigger = function(type) {
	        var callbacks, i, length, args;
	        callbacks = listeners[type];
	        if (!callbacks) {
	          return;
	        }
	        args = Array.prototype.slice.call(arguments, 1);
	        length = callbacks.length;
	        for (i = 0; i < length; ++i) {
	          callbacks[i].apply(this, args);
	        }
	      };
	      /**
	       * Destroys the stream and cleans up.
	       */
	      this.dispose = function() {
	        listeners = {};
	      };
	    };
	  };
	  /**
	   * Forwards all `data` events on this stream to the destination stream. The
	   * destination stream should provide a method `push` to receive the data
	   * events as they arrive.
	   * @param destination {stream} the stream that will receive all `data` events
	   * @see http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
	   */
	  Stream.prototype.pipe = function(destination) {
	    this.on('data', function(data) {
	      destination.push(data);
	    });
	  };

	  videojs.Hls.Stream = Stream;
	})(__webpack_provided_window_dot_videojs);

	(function(window) {

	window.videojs = window.videojs || {};
	window.videojs.Hls = window.videojs.Hls || {};

	var hls = window.videojs.Hls;

	// (type:uint, extraData:Boolean = false) extends ByteArray
	hls.FlvTag = function(type, extraData) {
	  var
	    // Counter if this is a metadata tag, nal start marker if this is a video
	    // tag. unused if this is an audio tag
	    adHoc = 0, // :uint

	    // checks whether the FLV tag has enough capacity to accept the proposed
	    // write and re-allocates the internal buffers if necessary
	    prepareWrite = function(flv, count) {
	      var
	        bytes,
	        minLength = flv.position + count;
	      if (minLength < flv.bytes.byteLength) {
	        // there's enough capacity so do nothing
	        return;
	      }

	      // allocate a new buffer and copy over the data that will not be modified
	      bytes = new Uint8Array(minLength * 2);
	      bytes.set(flv.bytes.subarray(0, flv.position), 0);
	      flv.bytes = bytes;
	      flv.view = new DataView(flv.bytes.buffer);
	    },

	    // commonly used metadata properties
	    widthBytes = hls.FlvTag.widthBytes || new Uint8Array('width'.length),
	    heightBytes = hls.FlvTag.heightBytes || new Uint8Array('height'.length),
	    videocodecidBytes = hls.FlvTag.videocodecidBytes || new Uint8Array('videocodecid'.length),
	    i;

	  if (!hls.FlvTag.widthBytes) {
	    // calculating the bytes of common metadata names ahead of time makes the
	    // corresponding writes faster because we don't have to loop over the
	    // characters
	    // re-test with test/perf.html if you're planning on changing this
	    for (i = 0; i < 'width'.length; i++) {
	      widthBytes[i] = 'width'.charCodeAt(i);
	    }
	    for (i = 0; i < 'height'.length; i++) {
	      heightBytes[i] = 'height'.charCodeAt(i);
	    }
	    for (i = 0; i < 'videocodecid'.length; i++) {
	      videocodecidBytes[i] = 'videocodecid'.charCodeAt(i);
	    }

	    hls.FlvTag.widthBytes = widthBytes;
	    hls.FlvTag.heightBytes = heightBytes;
	    hls.FlvTag.videocodecidBytes = videocodecidBytes;
	  }

	  this.keyFrame = false; // :Boolean

	  switch(type) {
	  case hls.FlvTag.VIDEO_TAG:
	    this.length = 16;
	    break;
	  case hls.FlvTag.AUDIO_TAG:
	    this.length = 13;
	    this.keyFrame = true;
	    break;
	  case hls.FlvTag.METADATA_TAG:
	    this.length = 29;
	    this.keyFrame = true;
	    break;
	  default:
	    throw("Error Unknown TagType");
	  }

	  this.bytes = new Uint8Array(16384);
	  this.view = new DataView(this.bytes.buffer);
	  this.bytes[0] = type;
	  this.position = this.length;
	  this.keyFrame = extraData; // Defaults to false

	  // presentation timestamp
	  this.pts = 0;
	  // decoder timestamp
	  this.dts = 0;

	  // ByteArray#writeBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0)
	  this.writeBytes = function(bytes, offset, length) {
	    var
	      start = offset || 0,
	      end;
	    length = length || bytes.byteLength;
	    end = start + length;

	    prepareWrite(this, length);
	    this.bytes.set(bytes.subarray(start, end), this.position);

	    this.position += length;
	    this.length = Math.max(this.length, this.position);
	  };

	  // ByteArray#writeByte(value:int):void
	  this.writeByte = function(byte) {
	    prepareWrite(this, 1);
	    this.bytes[this.position] = byte;
	    this.position++;
	    this.length = Math.max(this.length, this.position);
	  };

	  // ByteArray#writeShort(value:int):void
	  this.writeShort = function(short) {
	    prepareWrite(this, 2);
	    this.view.setUint16(this.position, short);
	    this.position += 2;
	    this.length = Math.max(this.length, this.position);
	  };

	  // Negative index into array
	  // (pos:uint):int
	  this.negIndex = function(pos) {
	    return this.bytes[this.length - pos];
	  };

	  // The functions below ONLY work when this[0] == VIDEO_TAG.
	  // We are not going to check for that because we dont want the overhead
	  // (nal:ByteArray = null):int
	  this.nalUnitSize = function() {
	    if (adHoc === 0) {
	      return 0;
	    }

	    return this.length - (adHoc + 4);
	  };

	  this.startNalUnit = function() {
	    // remember position and add 4 bytes
	    if (adHoc > 0) {
	      throw new Error("Attempted to create new NAL wihout closing the old one");
	    }

	    // reserve 4 bytes for nal unit size
	    adHoc = this.length;
	    this.length += 4;
	    this.position = this.length;
	  };

	  // (nal:ByteArray = null):void
	  this.endNalUnit = function(nalContainer) {
	    var
	      nalStart, // :uint
	      nalLength; // :uint

	    // Rewind to the marker and write the size
	    if (this.length === adHoc + 4) {
	      // we started a nal unit, but didnt write one, so roll back the 4 byte size value
	      this.length -= 4;
	    } else if (adHoc > 0) {
	      nalStart = adHoc + 4;
	      nalLength = this.length - nalStart;

	      this.position = adHoc;
	      this.view.setUint32(this.position, nalLength);
	      this.position = this.length;

	      if (nalContainer) {
	        // Add the tag to the NAL unit
	        nalContainer.push(this.bytes.subarray(nalStart, nalStart + nalLength));
	      }
	    }

	    adHoc = 0;
	  };

	  /**
	   * Write out a 64-bit floating point valued metadata property. This method is
	   * called frequently during a typical parse and needs to be fast.
	   */
	  // (key:String, val:Number):void
	  this.writeMetaDataDouble = function(key, val) {
	    var i;
	    prepareWrite(this, 2 + key.length + 9);

	    // write size of property name
	    this.view.setUint16(this.position, key.length);
	    this.position += 2;

	    // this next part looks terrible but it improves parser throughput by
	    // 10kB/s in my testing

	    // write property name
	    if (key === 'width') {
	      this.bytes.set(widthBytes, this.position);
	      this.position += 5;
	    } else if (key === 'height') {
	      this.bytes.set(heightBytes, this.position);
	      this.position += 6;
	    } else if (key === 'videocodecid') {
	      this.bytes.set(videocodecidBytes, this.position);
	      this.position += 12;
	    } else {
	      for (i = 0; i < key.length; i++) {
	        this.bytes[this.position] = key.charCodeAt(i);
	        this.position++;
	      }
	    }

	    // skip null byte
	    this.position++;

	    // write property value
	    this.view.setFloat64(this.position, val);
	    this.position += 8;

	    // update flv tag length
	    this.length = Math.max(this.length, this.position);
	    ++adHoc;
	  };

	  // (key:String, val:Boolean):void
	  this.writeMetaDataBoolean = function(key, val) {
	    var i;
	    prepareWrite(this, 2);
	    this.view.setUint16(this.position, key.length);
	    this.position += 2;
	    for (i = 0; i < key.length; i++) {
	      console.assert(key.charCodeAt(i) < 255);
	      prepareWrite(this, 1);
	      this.bytes[this.position] = key.charCodeAt(i);
	      this.position++;
	    }
	    prepareWrite(this, 2);
	    this.view.setUint8(this.position, 0x01);
	    this.position++;
	    this.view.setUint8(this.position, val ? 0x01 : 0x00);
	    this.position++;
	    this.length = Math.max(this.length, this.position);
	    ++adHoc;
	  };

	  // ():ByteArray
	  this.finalize = function() {
	    var
	      dtsDelta, // :int
	      len; // :int

	    switch(this.bytes[0]) {
	      // Video Data
	    case hls.FlvTag.VIDEO_TAG:
	      this.bytes[11] = ((this.keyFrame || extraData) ? 0x10 : 0x20 ) | 0x07; // We only support AVC, 1 = key frame (for AVC, a seekable frame), 2 = inter frame (for AVC, a non-seekable frame)
	      this.bytes[12] = extraData ?  0x00 : 0x01;

	      dtsDelta = this.pts - this.dts;
	      this.bytes[13] = (dtsDelta & 0x00FF0000) >>> 16;
	      this.bytes[14] = (dtsDelta & 0x0000FF00) >>>  8;
	      this.bytes[15] = (dtsDelta & 0x000000FF) >>>  0;
	      break;

	    case hls.FlvTag.AUDIO_TAG:
	      this.bytes[11] = 0xAF; // 44 kHz, 16-bit stereo
	      this.bytes[12] = extraData ? 0x00 : 0x01;
	      break;

	    case hls.FlvTag.METADATA_TAG:
	      this.position = 11;
	      this.view.setUint8(this.position, 0x02); // String type
	      this.position++;
	      this.view.setUint16(this.position, 0x0A); // 10 Bytes
	      this.position += 2;
	      // set "onMetaData"
	      this.bytes.set([0x6f, 0x6e, 0x4d, 0x65,
	                      0x74, 0x61, 0x44, 0x61,
	                      0x74, 0x61], this.position);
	      this.position += 10;
	      this.bytes[this.position] = 0x08; // Array type
	      this.position++;
	      this.view.setUint32(this.position, adHoc);
	      this.position = this.length;
	      this.bytes.set([0, 0, 9], this.position);
	      this.position += 3; // End Data Tag
	      this.length = this.position;
	      break;
	    }

	    len = this.length - 11;

	    // write the DataSize field
	    this.bytes[ 1] = (len & 0x00FF0000) >>> 16;
	    this.bytes[ 2] = (len & 0x0000FF00) >>>  8;
	    this.bytes[ 3] = (len & 0x000000FF) >>>  0;
	    // write the Timestamp
	    this.bytes[ 4] = (this.dts & 0x00FF0000) >>> 16;
	    this.bytes[ 5] = (this.dts & 0x0000FF00) >>>  8;
	    this.bytes[ 6] = (this.dts & 0x000000FF) >>>  0;
	    this.bytes[ 7] = (this.dts & 0xFF000000) >>> 24;
	    // write the StreamID
	    this.bytes[ 8] = 0;
	    this.bytes[ 9] = 0;
	    this.bytes[10] = 0;

	    // Sometimes we're at the end of the view and have one slot to write a
	    // uint32, so, prepareWrite of count 4, since, view is uint8
	    prepareWrite(this, 4);
	    this.view.setUint32(this.length, this.length);
	    this.length += 4;
	    this.position += 4;

	    // trim down the byte buffer to what is actually being used
	    this.bytes = this.bytes.subarray(0, this.length);
	    this.frameTime = hls.FlvTag.frameTime(this.bytes);
	    console.assert(this.bytes.byteLength === this.length);
	    return this;
	  };
	};

	hls.FlvTag.AUDIO_TAG = 0x08; // == 8, :uint
	hls.FlvTag.VIDEO_TAG = 0x09; // == 9, :uint
	hls.FlvTag.METADATA_TAG = 0x12; // == 18, :uint

	// (tag:ByteArray):Boolean {
	hls.FlvTag.isAudioFrame = function(tag) {
	  return hls.FlvTag.AUDIO_TAG === tag[0];
	};

	// (tag:ByteArray):Boolean {
	hls.FlvTag.isVideoFrame = function(tag) {
	  return hls.FlvTag.VIDEO_TAG === tag[0];
	};

	// (tag:ByteArray):Boolean {
	hls.FlvTag.isMetaData = function(tag) {
	  return hls.FlvTag.METADATA_TAG === tag[0];
	};

	// (tag:ByteArray):Boolean {
	hls.FlvTag.isKeyFrame = function(tag) {
	  if (hls.FlvTag.isVideoFrame(tag)) {
	    return tag[11] === 0x17;
	  }

	  if (hls.FlvTag.isAudioFrame(tag)) {
	    return true;
	  }

	  if (hls.FlvTag.isMetaData(tag)) {
	    return true;
	  }

	  return false;
	};

	// (tag:ByteArray):uint {
	hls.FlvTag.frameTime = function(tag) {
	  var pts = tag[ 4] << 16; // :uint
	  pts |= tag[ 5] <<  8;
	  pts |= tag[ 6] <<  0;
	  pts |= tag[ 7] << 24;
	  return pts;
	};

	/**
	 * Calculate the media timeline duration represented by an array of
	 * tags. This function assumes the tags are already pre-sorted by
	 * presentation timestamp (PTS), in ascending order. Returns zero if
	 * there are less than two FLV tags to inspect.
	 * @param tags {array} the FlvTag objects to query
	 * @return the number of milliseconds between the display time of the
	 * first tag and the last tag.
	 */
	hls.FlvTag.durationFromTags = function(tags) {
	  if (tags.length < 2) {
	    return 0;
	  }

	  var
	    first = tags[0],
	    last = tags[tags.length - 1],
	    frameDuration;

	  // use the interval between the last two tags or assume 24 fps
	  frameDuration = last.pts - tags[tags.length - 2].pts || (1/24);

	  return (last.pts - first.pts) + frameDuration;
	};

	})(this);

	(function(window) {

	/**
	 * Parser for exponential Golomb codes, a variable-bitwidth number encoding
	 * scheme used by h264.
	 */
	window.videojs.Hls.ExpGolomb = function(workingData) {
	  var
	    // the number of bytes left to examine in workingData
	    workingBytesAvailable = workingData.byteLength,

	    // the current word being examined
	    workingWord = 0, // :uint

	    // the number of bits left to examine in the current word
	    workingBitsAvailable = 0; // :uint;

	  // ():uint
	  this.length = function() {
	    return (8 * workingBytesAvailable);
	  };

	  // ():uint
	  this.bitsAvailable = function() {
	    return (8 * workingBytesAvailable) + workingBitsAvailable;
	  };

	  // ():void
	  this.loadWord = function() {
	    var
	      position = workingData.byteLength - workingBytesAvailable,
	      workingBytes = new Uint8Array(4),
	      availableBytes = Math.min(4, workingBytesAvailable);

	    if (availableBytes === 0) {
	      throw new Error('no bytes available');
	    }

	    workingBytes.set(workingData.subarray(position,
	                                          position + availableBytes));
	    workingWord = new DataView(workingBytes.buffer).getUint32(0);

	    // track the amount of workingData that has been processed
	    workingBitsAvailable = availableBytes * 8;
	    workingBytesAvailable -= availableBytes;
	  };

	  // (count:int):void
	  this.skipBits = function(count) {
	    var skipBytes; // :int
	    if (workingBitsAvailable > count) {
	      workingWord          <<= count;
	      workingBitsAvailable -= count;
	    } else {
	      count -= workingBitsAvailable;
	      skipBytes = count / 8;

	      count -= (skipBytes * 8);
	      workingBytesAvailable -= skipBytes;

	      this.loadWord();

	      workingWord <<= count;
	      workingBitsAvailable -= count;
	    }
	  };

	  // (size:int):uint
	  this.readBits = function(size) {
	    var
	      bits = Math.min(workingBitsAvailable, size), // :uint
	      valu = workingWord >>> (32 - bits); // :uint

	    console.assert(size < 32, 'Cannot read more than 32 bits at a time');

	    workingBitsAvailable -= bits;
	    if (workingBitsAvailable > 0) {
	      workingWord <<= bits;
	    } else if (workingBytesAvailable > 0) {
	      this.loadWord();
	    }

	    bits = size - bits;
	    if (bits > 0) {
	      return valu << bits | this.readBits(bits);
	    } else {
	      return valu;
	    }
	  };

	  // ():uint
	  this.skipLeadingZeros = function() {
	    var leadingZeroCount; // :uint
	    for (leadingZeroCount = 0 ; leadingZeroCount < workingBitsAvailable ; ++leadingZeroCount) {
	      if (0 !== (workingWord & (0x80000000 >>> leadingZeroCount))) {
	        // the first bit of working word is 1
	        workingWord <<= leadingZeroCount;
	        workingBitsAvailable -= leadingZeroCount;
	        return leadingZeroCount;
	      }
	    }

	    // we exhausted workingWord and still have not found a 1
	    this.loadWord();
	    return leadingZeroCount + this.skipLeadingZeros();
	  };

	  // ():void
	  this.skipUnsignedExpGolomb = function() {
	    this.skipBits(1 + this.skipLeadingZeros());
	  };

	  // ():void
	  this.skipExpGolomb = function() {
	    this.skipBits(1 + this.skipLeadingZeros());
	  };

	  // ():uint
	  this.readUnsignedExpGolomb = function() {
	    var clz = this.skipLeadingZeros(); // :uint
	    return this.readBits(clz + 1) - 1;
	  };

	  // ():int
	  this.readExpGolomb = function() {
	    var valu = this.readUnsignedExpGolomb(); // :int
	    if (0x01 & valu) {
	      // the number is odd if the low order bit is set
	      return (1 + valu) >>> 1; // add 1 to make it even, and divide by 2
	    } else {
	      return -1 * (valu >>> 1); // divide by two then make it negative
	    }
	  };

	  // Some convenience functions
	  // :Boolean
	  this.readBoolean = function() {
	    return 1 === this.readBits(1);
	  };

	  // ():int
	  this.readUnsignedByte = function() {
	    return this.readBits(8);
	  };

	  this.loadWord();

	};
	})(this);

	(function() {
	  var
	    H264ExtraData,
	    ExpGolomb = __webpack_provided_window_dot_videojs.Hls.ExpGolomb,
	    FlvTag = __webpack_provided_window_dot_videojs.Hls.FlvTag;

	  __webpack_provided_window_dot_videojs.Hls.H264ExtraData = H264ExtraData = function() {
	    this.sps = []; // :Array
	    this.pps = []; // :Array
	  };

	  H264ExtraData.prototype.extraDataExists = function() { // :Boolean
	    return this.sps.length > 0;
	  };

	  // (sizeOfScalingList:int, expGolomb:ExpGolomb):void
	  H264ExtraData.prototype.scaling_list = function(sizeOfScalingList, expGolomb) {
	    var
	      lastScale = 8, // :int
	      nextScale = 8, // :int
	      j,
	      delta_scale; // :int

	    for (j = 0; j < sizeOfScalingList; ++j) {
	      if (0 !== nextScale) {
	        delta_scale = expGolomb.readExpGolomb();
	        nextScale = (lastScale + delta_scale + 256) % 256;
	        //useDefaultScalingMatrixFlag = ( j = = 0 && nextScale = = 0 )
	      }

	      lastScale = (nextScale === 0) ? lastScale : nextScale;
	      // scalingList[ j ] = ( nextScale == 0 ) ? lastScale : nextScale;
	      // lastScale = scalingList[ j ]
	    }
	  };

	  /**
	   * RBSP: raw bit-stream payload. The actual encoded video data.
	   *
	   * SPS: sequence parameter set. Part of the RBSP. Metadata to be applied
	   * to a complete video sequence, like width and height.
	   */
	  H264ExtraData.prototype.getSps0Rbsp = function() { // :ByteArray
	    var
	      sps = this.sps[0],
	      offset = 1,
	      start = 1,
	      written = 0,
	      end = sps.byteLength - 2,
	      result = new Uint8Array(sps.byteLength);

	    // In order to prevent 0x0000 01 from being interpreted as a
	    // NAL start code, occurences of that byte sequence in the
	    // RBSP are escaped with an "emulation byte". That turns
	    // sequences of 0x0000 01 into 0x0000 0301. When interpreting
	    // a NAL payload, they must be filtered back out.
	    while (offset < end) {
	      if (sps[offset]     === 0x00 &&
	          sps[offset + 1] === 0x00 &&
	          sps[offset + 2] === 0x03) {
	        result.set(sps.subarray(start, offset + 1), written);
	        written += offset + 1 - start;
	        start = offset + 3;
	      }
	      offset++;
	    }
	    result.set(sps.subarray(start), written);
	    return result.subarray(0, written + (sps.byteLength - start));
	  };

	  // (pts:uint):FlvTag
	  H264ExtraData.prototype.metaDataTag = function(pts) {
	    var
	      tag = new FlvTag(FlvTag.METADATA_TAG), // :FlvTag
	      expGolomb, // :ExpGolomb
	      profile_idc, // :int
	      chroma_format_idc, // :int
	      imax, // :int
	      i, // :int

	      pic_order_cnt_type, // :int
	      num_ref_frames_in_pic_order_cnt_cycle, // :uint

	      pic_width_in_mbs_minus1, // :int
	      pic_height_in_map_units_minus1, // :int

	      frame_mbs_only_flag, // :int
	      frame_cropping_flag, // :Boolean

	      frame_crop_left_offset = 0, // :int
	      frame_crop_right_offset = 0, // :int
	      frame_crop_top_offset = 0, // :int
	      frame_crop_bottom_offset = 0, // :int

	      width,
	      height;

	      tag.dts = pts;
	      tag.pts = pts;
	      expGolomb = new ExpGolomb(this.getSps0Rbsp());

	    // :int = expGolomb.readUnsignedByte(); // profile_idc u(8)
	    profile_idc = expGolomb.readUnsignedByte();

	    // constraint_set[0-5]_flag, u(1), reserved_zero_2bits u(2), level_idc u(8)
	    expGolomb.skipBits(16);

	    // seq_parameter_set_id
	    expGolomb.skipUnsignedExpGolomb();

	    if (profile_idc === 100 ||
	        profile_idc === 110 ||
	        profile_idc === 122 ||
	        profile_idc === 244 ||
	        profile_idc === 44 ||
	        profile_idc === 83 ||
	        profile_idc === 86 ||
	        profile_idc === 118 ||
	        profile_idc === 128) {
	      chroma_format_idc = expGolomb.readUnsignedExpGolomb();
	      if (3 === chroma_format_idc) {
	        expGolomb.skipBits(1); // separate_colour_plane_flag
	      }
	      expGolomb.skipUnsignedExpGolomb(); // bit_depth_luma_minus8
	      expGolomb.skipUnsignedExpGolomb(); // bit_depth_chroma_minus8
	      expGolomb.skipBits(1); // qpprime_y_zero_transform_bypass_flag
	      if (expGolomb.readBoolean()) { // seq_scaling_matrix_present_flag
	        imax = (chroma_format_idc !== 3) ? 8 : 12;
	        for (i = 0 ; i < imax ; ++i) {
	          if (expGolomb.readBoolean()) { // seq_scaling_list_present_flag[ i ]
	            if (i < 6) {
	              this.scaling_list(16, expGolomb);
	            } else {
	              this.scaling_list(64, expGolomb);
	            }
	          }
	        }
	      }
	    }

	    expGolomb.skipUnsignedExpGolomb(); // log2_max_frame_num_minus4
	    pic_order_cnt_type = expGolomb.readUnsignedExpGolomb();

	    if ( 0 === pic_order_cnt_type ) {
	      expGolomb.readUnsignedExpGolomb(); //log2_max_pic_order_cnt_lsb_minus4
	    } else if ( 1 === pic_order_cnt_type ) {
	      expGolomb.skipBits(1); // delta_pic_order_always_zero_flag
	      expGolomb.skipExpGolomb(); // offset_for_non_ref_pic
	      expGolomb.skipExpGolomb(); // offset_for_top_to_bottom_field
	      num_ref_frames_in_pic_order_cnt_cycle = expGolomb.readUnsignedExpGolomb();
	      for(i = 0 ; i < num_ref_frames_in_pic_order_cnt_cycle ; ++i) {
	        expGolomb.skipExpGolomb(); // offset_for_ref_frame[ i ]
	      }
	    }

	    expGolomb.skipUnsignedExpGolomb(); // max_num_ref_frames
	    expGolomb.skipBits(1); // gaps_in_frame_num_value_allowed_flag
	    pic_width_in_mbs_minus1 = expGolomb.readUnsignedExpGolomb();
	    pic_height_in_map_units_minus1 = expGolomb.readUnsignedExpGolomb();

	    frame_mbs_only_flag = expGolomb.readBits(1);
	    if (0 === frame_mbs_only_flag) {
	      expGolomb.skipBits(1); // mb_adaptive_frame_field_flag
	    }

	    expGolomb.skipBits(1); // direct_8x8_inference_flag
	    frame_cropping_flag = expGolomb.readBoolean();
	    if (frame_cropping_flag) {
	      frame_crop_left_offset = expGolomb.readUnsignedExpGolomb();
	      frame_crop_right_offset = expGolomb.readUnsignedExpGolomb();
	      frame_crop_top_offset = expGolomb.readUnsignedExpGolomb();
	      frame_crop_bottom_offset = expGolomb.readUnsignedExpGolomb();
	    }

	    width = ((pic_width_in_mbs_minus1 + 1) * 16) - frame_crop_left_offset * 2 - frame_crop_right_offset * 2;
	    height = ((2 - frame_mbs_only_flag) * (pic_height_in_map_units_minus1 + 1) * 16) - (frame_crop_top_offset * 2) - (frame_crop_bottom_offset * 2);

	    tag.writeMetaDataDouble("videocodecid", 7);
	    tag.writeMetaDataDouble("width", width);
	    tag.writeMetaDataDouble("height", height);
	    // tag.writeMetaDataDouble("videodatarate", 0 );
	    // tag.writeMetaDataDouble("framerate", 0);

	    return tag;
	  };

	  // (pts:uint):FlvTag
	  H264ExtraData.prototype.extraDataTag = function(pts) {
	    var
	      i,
	      tag = new FlvTag(FlvTag.VIDEO_TAG, true);

	    tag.dts = pts;
	    tag.pts = pts;

	    tag.writeByte(0x01);// version
	    tag.writeByte(this.sps[0][1]);// profile
	    tag.writeByte(this.sps[0][2]);// compatibility
	    tag.writeByte(this.sps[0][3]);// level
	    tag.writeByte(0xFC | 0x03); // reserved (6 bits), NULA length size - 1 (2 bits)
	    tag.writeByte(0xE0 | 0x01 ); // reserved (3 bits), num of SPS (5 bits)
	    tag.writeShort( this.sps[0].length ); // data of SPS
	    tag.writeBytes( this.sps[0] ); // SPS

	    tag.writeByte( this.pps.length ); // num of PPS (will there ever be more that 1 PPS?)
	    for (i = 0 ; i < this.pps.length ; ++i) {
	      tag.writeShort(this.pps[i].length); // 2 bytes for length of PPS
	      tag.writeBytes(this.pps[i]); // data of PPS
	    }

	    return tag;
	  };
	})();

	(function(window) {
	  var
	    FlvTag = window.videojs.Hls.FlvTag,
	    H264ExtraData = window.videojs.Hls.H264ExtraData,
	    H264Stream,
	    NALUnitType;

	  /**
	   * Network Abstraction Layer (NAL) units are the packets of an H264
	   * stream. NAL units are divided into types based on their payload
	   * data. Each type has a unique numeric identifier.
	   *
	   *              NAL unit
	   * |- NAL header -|------ RBSP ------|
	   *
	   * NAL unit: Network abstraction layer unit. The combination of a NAL
	   * header and an RBSP.
	   * NAL header: the encapsulation unit for transport-specific metadata in
	   * an h264 stream. Exactly one byte.
	   */
	  // incomplete, see Table 7.1 of ITU-T H.264 for 12-32
	  window.videojs.Hls.NALUnitType = NALUnitType = {
	    unspecified: 0,
	    slice_layer_without_partitioning_rbsp_non_idr: 1,
	    slice_data_partition_a_layer_rbsp: 2,
	    slice_data_partition_b_layer_rbsp: 3,
	    slice_data_partition_c_layer_rbsp: 4,
	    slice_layer_without_partitioning_rbsp_idr: 5,
	    sei_rbsp: 6,
	    seq_parameter_set_rbsp: 7,
	    pic_parameter_set_rbsp: 8,
	    access_unit_delimiter_rbsp: 9,
	    end_of_seq_rbsp: 10,
	    end_of_stream_rbsp: 11
	  };

	  window.videojs.Hls.H264Stream = H264Stream = function() {
	    this._next_pts = 0; // :uint;
	    this._next_dts = 0; // :uint;

	    this._h264Frame = null; // :FlvTag

	    this._oldExtraData = new H264ExtraData(); // :H264ExtraData
	    this._newExtraData = new H264ExtraData(); // :H264ExtraData

	    this._nalUnitType = -1; // :int

	    this._state = 0; // :uint;

	    this.tags = [];
	  };

	  //(pts:uint):void
	  H264Stream.prototype.setTimeStampOffset = function() {};

	  //(pts:uint, dts:uint, dataAligned:Boolean):void
	  H264Stream.prototype.setNextTimeStamp = function(pts, dts, dataAligned) {
	    // We could end up with a DTS less than 0 here. We need to deal with that!
	    this._next_pts = pts;
	    this._next_dts = dts;

	    // If data is aligned, flush all internal buffers
	    if (dataAligned) {
	      this.finishFrame();
	    }
	  };

	  H264Stream.prototype.finishFrame = function() {
	    if (this._h264Frame) {
	      // Push SPS before EVERY IDR frame for seeking
	      if (this._newExtraData.extraDataExists()) {
	        this._oldExtraData = this._newExtraData;
	        this._newExtraData = new H264ExtraData();
	      }

	      // Check if keyframe and the length of tags.
	      // This makes sure we write metadata on the first frame of a segment.
	      if (this._oldExtraData.extraDataExists() &&
	          (this._h264Frame.keyFrame || this.tags.length === 0)) {
	        // Push extra data on every IDR frame in case we did a stream change + seek
	        this.tags.push(this._oldExtraData.metaDataTag(this._h264Frame.pts));
	        this.tags.push(this._oldExtraData.extraDataTag(this._h264Frame.pts));
	      }

	      this._h264Frame.endNalUnit();
	      this.tags.push(this._h264Frame);

	    }

	    this._h264Frame = null;
	    this._nalUnitType = -1;
	    this._state = 0;
	  };

	  // (data:ByteArray, o:int, l:int):void
	  H264Stream.prototype.writeBytes = function(data, offset, length) {
	    var
	      nalUnitSize, // :uint
	      start, // :uint
	      end, // :uint
	      t; // :int

	    // default argument values
	    offset = offset || 0;
	    length = length || 0;

	    if (length <= 0) {
	      // data is empty so there's nothing to write
	      return;
	    }

	    // scan through the bytes until we find the start code (0x000001) for a
	    // NAL unit and then begin writing it out
	    // strip NAL start codes as we go
	    switch (this._state) {
	    default:
	      /* falls through */
	    case 0:
	      this._state = 1;
	      /* falls through */
	    case 1:
	      // A NAL unit may be split across two TS packets. Look back a bit to
	      // make sure the prefix of the start code wasn't already written out.
	      if (data[offset] <= 1) {
	        nalUnitSize = this._h264Frame ? this._h264Frame.nalUnitSize() : 0;
	        if (nalUnitSize >= 1 && this._h264Frame.negIndex(1) === 0) {
	          // ?? ?? 00 | O[01] ?? ??
	          if (data[offset] === 1 &&
	              nalUnitSize >= 2 &&
	              this._h264Frame.negIndex(2) === 0) {
	            // ?? 00 00 : 01
	            if (3 <= nalUnitSize && 0 === this._h264Frame.negIndex(3)) {
	              this._h264Frame.length -= 3; // 00 00 00 : 01
	            } else {
	              this._h264Frame.length -= 2; // 00 00 : 01
	            }

	            this._state = 3;
	            return this.writeBytes(data, offset + 1, length - 1);
	          }

	          if (length > 1 && data[offset] === 0 && data[offset + 1] === 1) {
	            // ?? 00 | 00 01
	            if (nalUnitSize >= 2 && this._h264Frame.negIndex(2) === 0) {
	              this._h264Frame.length -= 2; // 00 00 : 00 01
	            } else {
	              this._h264Frame.length -= 1; // 00 : 00 01
	            }

	            this._state = 3;
	            return this.writeBytes(data, offset + 2, length - 2);
	          }

	          if (length > 2 &&
	              data[offset] === 0 &&
	              data[offset + 1] === 0 &&
	              data[offset + 2] === 1) {
	            // 00 : 00 00 01
	            // this._h264Frame.length -= 1;
	            this._state = 3;
	            return this.writeBytes(data, offset + 3, length - 3);
	          }
	        }
	      }
	      // allow fall through if the above fails, we may end up checking a few
	      // bytes a second time. But that case will be VERY rare
	      this._state = 2;
	      /* falls through */
	    case 2:
	      // Look for start codes in the data from the current offset forward
	      start = offset;
	      end = start + length;
	      for (t = end - 3; offset < t;) {
	        if (data[offset + 2] > 1) {
	          // if data[offset + 2] is greater than 1, there is no way a start
	          // code can begin before offset + 3
	          offset += 3;
	        } else if (data[offset + 1] !== 0) {
	            offset += 2;
	        } else if (data[offset] !== 0) {
	            offset += 1;
	        } else {
	          // If we get here we have 00 00 00 or 00 00 01
	          if (data[offset + 2] === 1) {
	            if (offset > start) {
	              this._h264Frame.writeBytes(data, start, offset - start);
	            }
	            this._state = 3;
	            offset += 3;
	            return this.writeBytes(data, offset, end - offset);
	          }

	          if (end - offset >= 4 &&
	              data[offset + 2] === 0 &&
	              data[offset + 3] === 1) {
	            if (offset > start) {
	              this._h264Frame.writeBytes(data, start, offset - start);
	            }
	            this._state = 3;
	            offset += 4;
	            return this.writeBytes(data, offset, end - offset);
	          }

	          // We are at the end of the buffer, or we have 3 NULLS followed by
	          // something that is not a 1, either way we can step forward by at
	          // least 3
	          offset += 3;
	        }
	      }

	      // We did not find any start codes. Try again next packet
	      this._state = 1;
	      if (this._h264Frame) {
	        this._h264Frame.writeBytes(data, start, length);
	      }
	      return;
	    case 3:
	      // The next byte is the first byte of a NAL Unit

	      if (this._h264Frame) {
	        // we've come to a new NAL unit so finish up the one we've been
	        // working on

	        switch (this._nalUnitType) {
	        case NALUnitType.seq_parameter_set_rbsp:
	          this._h264Frame.endNalUnit(this._newExtraData.sps);
	          break;
	        case NALUnitType.pic_parameter_set_rbsp:
	          this._h264Frame.endNalUnit(this._newExtraData.pps);
	          break;
	        case NALUnitType.slice_layer_without_partitioning_rbsp_idr:
	          this._h264Frame.endNalUnit();
	          break;
	        default:
	          this._h264Frame.endNalUnit();
	          break;
	        }
	      }

	      // setup to begin processing the new NAL unit
	      this._nalUnitType = data[offset] & 0x1F;
	      if (this._h264Frame) {
	          if (this._nalUnitType === NALUnitType.access_unit_delimiter_rbsp) {
	            // starting a new access unit, flush the previous one
	            this.finishFrame();
	          } else if (this._nalUnitType === NALUnitType.slice_layer_without_partitioning_rbsp_idr) {
	            this._h264Frame.keyFrame = true;
	          }
	      }

	      // finishFrame may render this._h264Frame null, so we must test again
	      if (!this._h264Frame) {
	        this._h264Frame = new FlvTag(FlvTag.VIDEO_TAG);
	        this._h264Frame.pts = this._next_pts;
	        this._h264Frame.dts = this._next_dts;
	      }

	      this._h264Frame.startNalUnit();
	      // We know there will not be an overlapping start code, so we can skip
	      // that test
	      this._state = 2;
	      return this.writeBytes(data, offset, length);
	    } // switch
	  };
	})(this);

	(function(window) {
	var
	  FlvTag = window.videojs.Hls.FlvTag,
	  adtsSampleingRates = [
	    96000, 88200,
	    64000, 48000,
	    44100, 32000,
	    24000, 22050,
	    16000, 12000
	  ];

	window.videojs.Hls.AacStream = function() {
	  var
	    next_pts, // :uint
	    state, // :uint
	    pes_length, // :int
	    lastMetaPts,

	    adtsProtectionAbsent, // :Boolean
	    adtsObjectType, // :int
	    adtsSampleingIndex, // :int
	    adtsChanelConfig, // :int
	    adtsFrameSize, // :int
	    adtsSampleCount, // :int
	    adtsDuration, // :int

	    aacFrame, // :FlvTag = null;
	    extraData; // :uint;

	  this.tags = [];

	  // (pts:uint):void
	  this.setTimeStampOffset = function(pts) {

	    // keep track of the last time a metadata tag was written out
	    // set the initial value so metadata will be generated before any
	    // payload data
	    lastMetaPts = pts - 1000;
	  };

	  // (pts:uint, pes_size:int, dataAligned:Boolean):void
	  this.setNextTimeStamp = function(pts, pes_size, dataAligned) {
	    next_pts = pts;
	    pes_length = pes_size;

	    // If data is aligned, flush all internal buffers
	    if (dataAligned) {
	      state = 0;
	    }
	  };

	  // (data:ByteArray, o:int = 0, l:int = 0):void
	  this.writeBytes = function(data, offset, length) {
	    var
	      end, // :int
	      newExtraData, // :uint
	      bytesToCopy; // :int

	    // default arguments
	    offset = offset || 0;
	    length = length || 0;

	    // Do not allow more than 'pes_length' bytes to be written
	    length = (pes_length < length ? pes_length : length);
	    pes_length -= length;
	    end = offset + length;
	    while (offset < end) {
	      switch (state) {
	      default:
	        state = 0;
	        break;
	      case 0:
	        if (offset >= end) {
	          return;
	        }
	        if (0xFF !== data[offset]) {
	          console.assert(false, 'Error no ATDS header found');
	          offset += 1;
	          state = 0;
	          return;
	        }

	        offset += 1;
	        state = 1;
	        break;
	      case 1:
	        if (offset >= end) {
	          return;
	        }
	        if (0xF0 !== (data[offset] & 0xF0)) {
	          console.assert(false, 'Error no ATDS header found');
	          offset +=1;
	          state = 0;
	          return;
	        }

	        adtsProtectionAbsent = !!(data[offset] & 0x01);

	        offset += 1;
	        state = 2;
	        break;
	      case 2:
	        if (offset >= end) {
	          return;
	        }
	        adtsObjectType = ((data[offset] & 0xC0) >>> 6) + 1;
	        adtsSampleingIndex = ((data[offset] & 0x3C) >>> 2);
	        adtsChanelConfig = ((data[offset] & 0x01) << 2);

	        offset += 1;
	        state = 3;
	        break;
	      case 3:
	        if (offset >= end) {
	          return;
	        }
	        adtsChanelConfig |= ((data[offset] & 0xC0) >>> 6);
	        adtsFrameSize = ((data[offset] & 0x03) << 11);

	        offset += 1;
	        state = 4;
	        break;
	      case 4:
	        if (offset >= end) {
	          return;
	        }
	        adtsFrameSize |= (data[offset] << 3);

	        offset += 1;
	        state = 5;
	        break;
	      case 5:
	        if(offset >= end) {
	          return;
	        }
	        adtsFrameSize |= ((data[offset] & 0xE0) >>> 5);
	        adtsFrameSize -= (adtsProtectionAbsent ? 7 : 9);

	        offset += 1;
	        state = 6;
	        break;
	      case 6:
	        if (offset >= end) {
	          return;
	        }
	        adtsSampleCount = ((data[offset] & 0x03) + 1) * 1024;
	        adtsDuration = (adtsSampleCount * 1000) / adtsSampleingRates[adtsSampleingIndex];

	        newExtraData = (adtsObjectType << 11) |
	                       (adtsSampleingIndex << 7) |
	                       (adtsChanelConfig << 3);

	        // write out metadata tags every 1 second so that the decoder
	        // is re-initialized quickly after seeking into a different
	        // audio configuration
	        if (newExtraData !== extraData || next_pts - lastMetaPts >= 1000) {
	          aacFrame = new FlvTag(FlvTag.METADATA_TAG);
	          aacFrame.pts = next_pts;
	          aacFrame.dts = next_pts;

	          // AAC is always 10
	          aacFrame.writeMetaDataDouble("audiocodecid", 10);
	          aacFrame.writeMetaDataBoolean("stereo", 2 === adtsChanelConfig);
	          aacFrame.writeMetaDataDouble ("audiosamplerate", adtsSampleingRates[adtsSampleingIndex]);
	          // Is AAC always 16 bit?
	          aacFrame.writeMetaDataDouble ("audiosamplesize", 16);

	          this.tags.push(aacFrame);

	          extraData = newExtraData;
	          aacFrame = new FlvTag(FlvTag.AUDIO_TAG, true);
	          // For audio, DTS is always the same as PTS. We want to set the DTS
	          // however so we can compare with video DTS to determine approximate
	          // packet order
	          aacFrame.pts = next_pts;
	          aacFrame.dts = aacFrame.pts;

	          aacFrame.view.setUint16(aacFrame.position, newExtraData);
	          aacFrame.position += 2;
	          aacFrame.length = Math.max(aacFrame.length, aacFrame.position);

	          this.tags.push(aacFrame);

	          lastMetaPts = next_pts;
	        }

	        // Skip the checksum if there is one
	        offset += 1;
	        state = 7;
	        break;
	      case 7:
	        if (!adtsProtectionAbsent) {
	          if (2 > (end - offset)) {
	            return;
	          } else {
	            offset += 2;
	          }
	        }

	        aacFrame = new FlvTag(FlvTag.AUDIO_TAG);
	        aacFrame.pts = next_pts;
	        aacFrame.dts = next_pts;
	        state = 8;
	        break;
	      case 8:
	        while (adtsFrameSize) {
	          if (offset >= end) {
	            return;
	          }
	          bytesToCopy = (end - offset) < adtsFrameSize ? (end - offset) : adtsFrameSize;
	          aacFrame.writeBytes(data, offset, bytesToCopy);
	          offset += bytesToCopy;
	          adtsFrameSize -= bytesToCopy;
	        }

	        this.tags.push(aacFrame);

	        // finished with this frame
	        state = 0;
	        next_pts += adtsDuration;
	      }
	    }
	  };
	};

	})(this);

	(function(window, videojs, undefined) {
	  'use strict';
	  var
	    // return a percent-encoded representation of the specified byte range
	    // @see http://en.wikipedia.org/wiki/Percent-encoding
	    percentEncode = function(bytes, start, end) {
	      var i, result = '';
	      for (i = start; i < end; i++) {
	        result += '%' + ('00' + bytes[i].toString(16)).slice(-2);
	      }
	      return result;
	    },
	    // return the string representation of the specified byte range,
	    // interpreted as UTf-8.
	    parseUtf8 = function(bytes, start, end) {
	      return window.decodeURIComponent(percentEncode(bytes, start, end));
	    },
	    // return the string representation of the specified byte range,
	    // interpreted as ISO-8859-1.
	    parseIso88591 = function(bytes, start, end) {
	      return window.unescape(percentEncode(bytes, start, end));
	    },
	    tagParsers = {
	      'TXXX': function(tag) {
	        var i;
	        if (tag.data[0] !== 3) {
	          // ignore frames with unrecognized character encodings
	          return;
	        }

	        for (i = 1; i < tag.data.length; i++) {
	          if (tag.data[i] === 0) {
	            // parse the text fields
	            tag.description = parseUtf8(tag.data, 1, i);
	            // do not include the null terminator in the tag value
	            tag.value = parseUtf8(tag.data, i + 1, tag.data.length - 1);
	            break;
	          }
	        }
	      },
	      'WXXX': function(tag) {
	        var i;
	        if (tag.data[0] !== 3) {
	          // ignore frames with unrecognized character encodings
	          return;
	        }

	        for (i = 1; i < tag.data.length; i++) {
	          if (tag.data[i] === 0) {
	            // parse the description and URL fields
	            tag.description = parseUtf8(tag.data, 1, i);
	            tag.url = parseUtf8(tag.data, i + 1, tag.data.length);
	            break;
	          }
	        }
	      },
	      'PRIV': function(tag) {
	        var i;

	        for (i = 0; i < tag.data.length; i++) {
	          if (tag.data[i] === 0) {
	            // parse the description and URL fields
	            tag.owner = parseIso88591(tag.data, 0, i);
	            break;
	          }
	        }
	        tag.privateData = tag.data.subarray(i + 1);
	      }
	    },
	    MetadataStream;

	  MetadataStream = function(options) {
	    var
	      settings = {
	        debug: !!(options && options.debug),

	        // the bytes of the program-level descriptor field in MP2T
	        // see ISO/IEC 13818-1:2013 (E), section 2.6 "Program and
	        // program element descriptors"
	        descriptor: options && options.descriptor
	      },
	      // the total size in bytes of the ID3 tag being parsed
	      tagSize = 0,
	      // tag data that is not complete enough to be parsed
	      buffer = [],
	      // the total number of bytes currently in the buffer
	      bufferSize = 0,
	      i;

	    MetadataStream.prototype.init.call(this);

	    // calculate the text track in-band metadata track dispatch type
	    // https://html.spec.whatwg.org/multipage/embedded-content.html#steps-to-expose-a-media-resource-specific-text-track
	    this.dispatchType = videojs.Hls.SegmentParser.STREAM_TYPES.metadata.toString(16);
	    if (settings.descriptor) {
	      for (i = 0; i < settings.descriptor.length; i++) {
	        this.dispatchType += ('00' + settings.descriptor[i].toString(16)).slice(-2);
	      }
	    }

	    this.push = function(chunk) {
	      var tag, frameStart, frameSize, frame, i;

	      // ignore events that don't look like ID3 data
	      if (buffer.length === 0 &&
	          (chunk.data.length < 10 ||
	           chunk.data[0] !== 'I'.charCodeAt(0) ||
	           chunk.data[1] !== 'D'.charCodeAt(0) ||
	           chunk.data[2] !== '3'.charCodeAt(0))) {
	        if (settings.debug) {
	          videojs.log('Skipping unrecognized metadata packet');
	        }
	        return;
	      }

	      // add this chunk to the data we've collected so far
	      buffer.push(chunk);
	      bufferSize += chunk.data.byteLength;

	      // grab the size of the entire frame from the ID3 header
	      if (buffer.length === 1) {
	        // the frame size is transmitted as a 28-bit integer in the
	        // last four bytes of the ID3 header.
	        // The most significant bit of each byte is dropped and the
	        // results concatenated to recover the actual value.
	        tagSize = (chunk.data[6] << 21) |
	                  (chunk.data[7] << 14) |
	                  (chunk.data[8] << 7) |
	                  (chunk.data[9]);

	        // ID3 reports the tag size excluding the header but it's more
	        // convenient for our comparisons to include it
	        tagSize += 10;
	      }

	      // if the entire frame has not arrived, wait for more data
	      if (bufferSize < tagSize) {
	        return;
	      }

	      // collect the entire frame so it can be parsed
	      tag = {
	        data: new Uint8Array(tagSize),
	        frames: [],
	        pts: buffer[0].pts,
	        dts: buffer[0].dts
	      };
	      for (i = 0; i < tagSize;) {
	        tag.data.set(buffer[0].data, i);
	        i += buffer[0].data.byteLength;
	        bufferSize -= buffer[0].data.byteLength;
	        buffer.shift();
	      }

	      // find the start of the first frame and the end of the tag
	      frameStart = 10;
	      if (tag.data[5] & 0x40) {
	        // advance the frame start past the extended header
	        frameStart += 4; // header size field
	        frameStart += (tag.data[10] << 24) |
	                      (tag.data[11] << 16) |
	                      (tag.data[12] << 8)  |
	                      (tag.data[13]);

	        // clip any padding off the end
	        tagSize -= (tag.data[16] << 24) |
	                   (tag.data[17] << 16) |
	                   (tag.data[18] << 8)  |
	                   (tag.data[19]);
	      }

	      // parse one or more ID3 frames
	      // http://id3.org/id3v2.3.0#ID3v2_frame_overview
	      do {
	        // determine the number of bytes in this frame
	        frameSize = (tag.data[frameStart + 4] << 24) |
	                    (tag.data[frameStart + 5] << 16) |
	                    (tag.data[frameStart + 6] <<  8) |
	                    (tag.data[frameStart + 7]);
	        if (frameSize < 1) {
	          return videojs.log('Malformed ID3 frame encountered. Skipping metadata parsing.');
	        }

	        frame = {
	          id: String.fromCharCode(tag.data[frameStart],
	                                  tag.data[frameStart + 1],
	                                  tag.data[frameStart + 2],
	                                  tag.data[frameStart + 3]),
	          data: tag.data.subarray(frameStart + 10, frameStart + frameSize + 10)
	        };
	        if (tagParsers[frame.id]) {
	          tagParsers[frame.id](frame);
	        }
	        tag.frames.push(frame);

	        frameStart += 10; // advance past the frame header
	        frameStart += frameSize; // advance past the frame body
	      } while (frameStart < tagSize);
	      this.trigger('data', tag);
	    };
	  };
	  MetadataStream.prototype = new videojs.Hls.Stream();

	  videojs.Hls.MetadataStream = MetadataStream;
	})(window, __webpack_provided_window_dot_videojs);

	(function(window) {
	  var
	    videojs = __webpack_provided_window_dot_videojs,
	    FlvTag = videojs.Hls.FlvTag,
	    H264Stream = videojs.Hls.H264Stream,
	    AacStream = videojs.Hls.AacStream,
	    MetadataStream = videojs.Hls.MetadataStream,
	    MP2T_PACKET_LENGTH,
	    STREAM_TYPES;

	  /**
	   * An object that incrementally transmuxes MPEG2 Trasport Stream
	   * chunks into an FLV.
	   */
	  videojs.Hls.SegmentParser = function() {
	    var
	      self = this,
	      parseTSPacket,
	      streamBuffer = new Uint8Array(MP2T_PACKET_LENGTH),
	      streamBufferByteCount = 0,
	      h264Stream = new H264Stream(),
	      aacStream = new AacStream();

	    // expose the stream metadata
	    self.stream = {
	      // the mapping between transport stream programs and the PIDs
	      // that form their elementary streams
	      programMapTable: {}
	    };

	    // allow in-band metadata to be observed
	    self.metadataStream = new MetadataStream();

	    this.mediaTimelineOffset = null;

	    // The first timestamp value encountered during parsing. This
	    // value can be used to determine the relative timing between
	    // frames and the start of the current timestamp sequence. It
	    // should be reset to null before parsing a segment with
	    // discontinuous timestamp values from previous segments.
	    self.timestampOffset = null;

	    // For information on the FLV format, see
	    // http://download.macromedia.com/f4v/video_file_format_spec_v10_1.pdf.
	    // Technically, this function returns the header and a metadata FLV tag
	    // if duration is greater than zero
	    // duration in seconds
	    // @return {object} the bytes of the FLV header as a Uint8Array
	    self.getFlvHeader = function(duration, audio, video) { // :ByteArray {
	      var
	        headBytes = new Uint8Array(3 + 1 + 1 + 4),
	        head = new DataView(headBytes.buffer),
	        metadata,
	        result,
	        metadataLength;

	      // default arguments
	      duration = duration || 0;
	      audio = audio === undefined? true : audio;
	      video = video === undefined? true : video;

	      // signature
	      head.setUint8(0, 0x46); // 'F'
	      head.setUint8(1, 0x4c); // 'L'
	      head.setUint8(2, 0x56); // 'V'

	      // version
	      head.setUint8(3, 0x01);

	      // flags
	      head.setUint8(4, (audio ? 0x04 : 0x00) | (video ? 0x01 : 0x00));

	      // data offset, should be 9 for FLV v1
	      head.setUint32(5, headBytes.byteLength);

	      // init the first FLV tag
	      if (duration <= 0) {
	        // no duration available so just write the first field of the first
	        // FLV tag
	        result = new Uint8Array(headBytes.byteLength + 4);
	        result.set(headBytes);
	        result.set([0, 0, 0, 0], headBytes.byteLength);
	        return result;
	      }

	      // write out the duration metadata tag
	      metadata = new FlvTag(FlvTag.METADATA_TAG);
	      metadata.pts = metadata.dts = 0;
	      metadata.writeMetaDataDouble("duration", duration);
	      metadataLength = metadata.finalize().length;
	      result = new Uint8Array(headBytes.byteLength + metadataLength);
	      result.set(headBytes);
	      result.set(head.byteLength, metadataLength);

	      return result;
	    };

	    self.flushTags = function() {
	      h264Stream.finishFrame();
	    };

	    /**
	     * Returns whether a call to `getNextTag()` will be successful.
	     * @return {boolean} whether there is at least one transmuxed FLV
	     * tag ready
	     */
	    self.tagsAvailable = function() { // :int {
	      return h264Stream.tags.length + aacStream.tags.length;
	    };

	    /**
	     * Returns the next tag in decoder-timestamp (DTS) order.
	     * @returns {object} the next tag to decoded.
	     */
	    self.getNextTag = function() {
	      var tag;

	      if (!h264Stream.tags.length) {
	        // only audio tags remain
	        tag = aacStream.tags.shift();
	      } else if (!aacStream.tags.length) {
	        // only video tags remain
	        tag = h264Stream.tags.shift();
	      } else if (aacStream.tags[0].dts < h264Stream.tags[0].dts) {
	        // audio should be decoded next
	        tag = aacStream.tags.shift();
	      } else {
	        // video should be decoded next
	        tag = h264Stream.tags.shift();
	      }

	      return tag.finalize();
	    };

	    self.parseSegmentBinaryData = function(data) { // :ByteArray) {
	      var
	        dataPosition = 0,
	        dataSlice;

	      // To avoid an extra copy, we will stash overflow data, and only
	      // reconstruct the first packet. The rest of the packets will be
	      // parsed directly from data
	      if (streamBufferByteCount > 0) {
	        if (data.byteLength + streamBufferByteCount < MP2T_PACKET_LENGTH) {
	          // the current data is less than a single m2ts packet, so stash it
	          // until we receive more

	          // ?? this seems to append streamBuffer onto data and then just give up. I'm not sure why that would be interesting.
	          videojs.log('data.length + streamBuffer.length < MP2T_PACKET_LENGTH ??');
	          streamBuffer.readBytes(data, data.length, streamBuffer.length);
	          return;
	        } else {
	          // we have enough data for an m2ts packet
	          // process it immediately
	          dataSlice = data.subarray(0, MP2T_PACKET_LENGTH - streamBufferByteCount);
	          streamBuffer.set(dataSlice, streamBufferByteCount);

	          parseTSPacket(streamBuffer);

	          // reset the buffer
	          streamBuffer = new Uint8Array(MP2T_PACKET_LENGTH);
	          streamBufferByteCount = 0;
	        }
	      }

	      while (true) {
	        // Make sure we are TS aligned
	        while(dataPosition < data.byteLength  && data[dataPosition] !== 0x47) {
	          // If there is no sync byte skip forward until we find one
	          // TODO if we find a sync byte, look 188 bytes in the future (if
	          // possible). If there is not a sync byte there, keep looking
	          dataPosition++;
	        }

	        // base case: not enough data to parse a m2ts packet
	        if (data.byteLength - dataPosition < MP2T_PACKET_LENGTH) {
	          if (data.byteLength - dataPosition > 0) {
	            // there are bytes remaining, save them for next time
	            streamBuffer.set(data.subarray(dataPosition),
	                             streamBufferByteCount);
	            streamBufferByteCount += data.byteLength - dataPosition;
	          }
	          return;
	        }

	        // attempt to parse a m2ts packet
	        if (parseTSPacket(data.subarray(dataPosition, dataPosition + MP2T_PACKET_LENGTH))) {
	          dataPosition += MP2T_PACKET_LENGTH;
	        } else {
	          // If there was an error parsing a TS packet. it could be
	          // because we are not TS packet aligned. Step one forward by
	          // one byte and allow the code above to find the next
	          videojs.log('error parsing m2ts packet, attempting to re-align');
	          dataPosition++;
	        }
	      }
	    };

	    /**
	     * Parses a video/mp2t packet and appends the underlying video and
	     * audio data onto h264stream and aacStream, respectively.
	     * @param data {Uint8Array} the bytes of an MPEG2-TS packet,
	     * including the sync byte.
	     * @return {boolean} whether a valid packet was encountered
	     */
	    // TODO add more testing to make sure we dont walk past the end of a TS
	    // packet!
	    parseTSPacket = function(data) { // :ByteArray):Boolean {
	      var
	        offset = 0, // :uint
	        end = offset + MP2T_PACKET_LENGTH, // :uint

	        // Payload Unit Start Indicator
	        pusi = !!(data[offset + 1] & 0x40), // mask: 0100 0000

	        // packet identifier (PID), a unique identifier for the elementary
	        // stream this packet describes
	        pid = (data[offset + 1] & 0x1F) << 8 | data[offset + 2], // mask: 0001 1111

	        // adaptation_field_control, whether this header is followed by an
	        // adaptation field, a payload, or both
	        afflag = (data[offset + 3] & 0x30 ) >>> 4,

	        patTableId, // :int
	        patCurrentNextIndicator, // Boolean
	        patSectionLength, // :uint
	        programNumber, // :uint
	        programPid, // :uint
	        patEntriesEnd, // :uint

	        pesPacketSize, // :int,
	        dataAlignmentIndicator, // :Boolean,
	        ptsDtsIndicator, // :int
	        pesHeaderLength, // :int

	        pts, // :uint
	        dts, // :uint

	        pmtCurrentNextIndicator, // :Boolean
	        pmtProgramDescriptorsLength,
	        pmtSectionLength, // :uint

	        streamType, // :int
	        elementaryPID, // :int
	        ESInfolength; // :int

	      // Continuity Counter we could use this for sanity check, and
	      // corrupt stream detection
	      // cc = (data[offset + 3] & 0x0F);

	      // move past the header
	      offset += 4;

	      // if an adaption field is present, its length is specified by
	      // the fifth byte of the PES header. The adaptation field is
	      // used to specify some forms of timing and control data that we
	      // do not currently use.
	      if (afflag > 0x01) {
	        offset += data[offset] + 1;
	      }

	      // Handle a Program Association Table (PAT). PATs map PIDs to
	      // individual programs. If this transport stream was being used
	      // for television broadcast, a program would probably be
	      // equivalent to a channel. In HLS, it would be very unusual to
	      // create an mp2t stream with multiple programs.
	      if (0x0000 === pid) {
	        // The PAT may be split into multiple sections and those
	        // sections may be split into multiple packets. If a PAT
	        // section starts in this packet, PUSI will be true and the
	        // first byte of the playload will indicate the offset from
	        // the current position to the start of the section.
	        if (pusi) {
	          offset += 1 + data[offset];
	        }
	        patTableId = data[offset];

	        if (patTableId !== 0x00) {
	          videojs.log('the table_id of the PAT should be 0x00 but was' +
	                      patTableId.toString(16));
	        }

	        // the current_next_indicator specifies whether this PAT is
	        // currently applicable or is part of the next table to become
	        // active
	        patCurrentNextIndicator = !!(data[offset + 5] & 0x01);
	        if (patCurrentNextIndicator) {
	          // section_length specifies the number of bytes following
	          // its position to the end of this section
	          // section_length = rest of header + (n * entry length) + CRC
	          // = 5 + (n * 4) + 4
	          patSectionLength =  (data[offset + 1] & 0x0F) << 8 | data[offset + 2];
	          // move past the rest of the PSI header to the first program
	          // map table entry
	          offset += 8;

	          // we don't handle streams with more than one program, so
	          // raise an exception if we encounter one
	          patEntriesEnd = offset + (patSectionLength - 5 - 4);
	          for (; offset < patEntriesEnd; offset += 4) {
	            programNumber = (data[offset] << 8 | data[offset + 1]);
	            programPid = (data[offset + 2] & 0x1F) << 8 | data[offset + 3];
	            // network PID program number equals 0
	            // this is primarily an artifact of EBU DVB and can be ignored
	            if (programNumber === 0) {
	              self.stream.networkPid = programPid;
	            } else if (self.stream.pmtPid === undefined) {
	              // the Program Map Table (PMT) associates the underlying
	              // video and audio streams with a unique PID
	              self.stream.pmtPid = programPid;
	            } else if (self.stream.pmtPid !== programPid) {
	              throw new Error("TS has more that 1 program");
	            }
	          }
	        }
	      } else if (pid === self.stream.programMapTable[STREAM_TYPES.h264] ||
	                 pid === self.stream.programMapTable[STREAM_TYPES.adts] ||
	                 pid === self.stream.programMapTable[STREAM_TYPES.metadata]) {
	        if (pusi) {
	          // comment out for speed
	          if (0x00 !== data[offset + 0] || 0x00 !== data[offset + 1] || 0x01 !== data[offset + 2]) {
	            // look for PES start code
	             throw new Error("PES did not begin with start code");
	           }

	          // var sid:int  = data[offset+3]; // StreamID
	          pesPacketSize = (data[offset + 4] << 8) | data[offset + 5];
	          dataAlignmentIndicator = (data[offset + 6] & 0x04) !== 0;
	          ptsDtsIndicator = data[offset + 7];
	          pesHeaderLength = data[offset + 8]; // TODO sanity check header length
	          offset += 9; // Skip past PES header

	          // PTS and DTS are normially stored as a 33 bit number.
	          // JavaScript does not have a integer type larger than 32 bit
	          // BUT, we need to convert from 90ns to 1ms time scale anyway.
	          // so what we are going to do instead, is drop the least
	          // significant bit (the same as dividing by two) then we can
	          // divide by 45 (45 * 2 = 90) to get ms.
	          if (ptsDtsIndicator & 0xC0) {
	            // the PTS and DTS are not written out directly. For information on
	            // how they are encoded, see
	            // http://dvd.sourceforge.net/dvdinfo/pes-hdr.html
	            pts = (data[offset + 0] & 0x0E) << 28
	              | (data[offset + 1] & 0xFF) << 21
	              | (data[offset + 2] & 0xFE) << 13
	              | (data[offset + 3] & 0xFF) <<  6
	              | (data[offset + 4] & 0xFE) >>>  2;
	            pts /= 45;
	            dts = pts;
	            if (ptsDtsIndicator & 0x40) {// DTS
	              dts = (data[offset + 5] & 0x0E ) << 28
	                | (data[offset + 6] & 0xFF ) << 21
	                | (data[offset + 7] & 0xFE ) << 13
	                | (data[offset + 8] & 0xFF ) << 6
	                | (data[offset + 9] & 0xFE ) >>> 2;
	              dts /= 45;
	            }
	          }

	          // Skip past "optional" portion of PTS header
	          offset += pesHeaderLength;

	          // keep track of the earliest encounted PTS value so
	          // external parties can align timestamps across
	          // discontinuities
	          if (self.timestampOffset === null) {
	            self.timestampOffset = pts;
	          }

	          if (pid === self.stream.programMapTable[STREAM_TYPES.h264]) {
	            h264Stream.setNextTimeStamp(pts,
	                                        dts,
	                                        dataAlignmentIndicator);
	          } else if (pid === self.stream.programMapTable[STREAM_TYPES.adts]) {
	            aacStream.setNextTimeStamp(pts,
	                                       pesPacketSize,
	                                       dataAlignmentIndicator);
	          }
	        }

	        if (pid === self.stream.programMapTable[STREAM_TYPES.adts]) {
	          aacStream.writeBytes(data, offset, end - offset);
	        } else if (pid === self.stream.programMapTable[STREAM_TYPES.h264]) {
	          h264Stream.writeBytes(data, offset, end - offset);
	        } else if (pid === self.stream.programMapTable[STREAM_TYPES.metadata]) {
	          self.metadataStream.push({
	            pts: pts,
	            dts: dts,
	            data: data.subarray(offset)
	          });
	        }
	      } else if (self.stream.pmtPid === pid) {
	        // similarly to the PAT, jump to the first byte of the section
	        if (pusi) {
	          offset += 1 + data[offset];
	        }
	        if (data[offset] !== 0x02) {
	          videojs.log('The table_id of a PMT should be 0x02 but was ' +
	                      data[offset].toString(16));
	        }

	        // whether this PMT is currently applicable or is part of the
	        // next table to become active
	        pmtCurrentNextIndicator = !!(data[offset + 5] & 0x01);
	        if (pmtCurrentNextIndicator) {
	          // overwrite any existing program map table
	          self.stream.programMapTable = {};
	          // section_length specifies the number of bytes following
	          // its position to the end of this section
	          pmtSectionLength  = (data[offset + 1] & 0x0f) << 8 | data[offset + 2];
	          // subtract the length of the program info descriptors
	          pmtProgramDescriptorsLength = (data[offset + 10] & 0x0f) << 8 | data[offset + 11];
	          pmtSectionLength -= pmtProgramDescriptorsLength;
	          // skip CRC and PSI data we dont care about
	          // rest of header + CRC = 9 + 4
	          pmtSectionLength -= 13;

	          // capture the PID of PCR packets so we can ignore them if we see any
	          self.stream.programMapTable.pcrPid = (data[offset + 8] & 0x1f) << 8 | data[offset + 9];

	          // align offset to the first entry in the PMT
	          offset += 12 + pmtProgramDescriptorsLength;

	          // iterate through the entries
	          while (0 < pmtSectionLength) {
	            // the type of data carried in the PID this entry describes
	            streamType = data[offset + 0];
	            // the PID for this entry
	            elementaryPID = (data[offset + 1] & 0x1F) << 8 | data[offset + 2];

	            if (streamType === STREAM_TYPES.h264 &&
	                self.stream.programMapTable[streamType] &&
	                self.stream.programMapTable[streamType] !== elementaryPID) {
	              throw new Error("Program has more than 1 video stream");
	            } else if (streamType === STREAM_TYPES.adts &&
	                       self.stream.programMapTable[streamType] &&
	                       self.stream.programMapTable[streamType] !== elementaryPID) {
	              throw new Error("Program has more than 1 audio Stream");
	            }
	            // add the stream type entry to the map
	            self.stream.programMapTable[streamType] = elementaryPID;

	            // TODO add support for MP3 audio

	            // the length of the entry descriptor
	            ESInfolength = (data[offset + 3] & 0x0F) << 8 | data[offset + 4];
	            // capture the stream descriptor for metadata streams
	            if (streamType === STREAM_TYPES.metadata) {
	              self.metadataStream.descriptor = new Uint8Array(data.subarray(offset + 5, offset + 5 + ESInfolength));
	            }
	            // move to the first byte after the end of this entry
	            offset += 5 + ESInfolength;
	            pmtSectionLength -=  5 + ESInfolength;
	          }
	        }
	        // We could test the CRC here to detect corruption with extra CPU cost
	      } else if (self.stream.networkPid === pid) {
	        // network information specific data (NIT) packet
	      } else if (0x0011 === pid) {
	        // Service Description Table
	      } else if (0x1FFF === pid) {
	        // NULL packet
	      } else if (self.stream.programMapTable.pcrPid) {
	        // program clock reference (PCR) PID for the primary program
	        // PTS values are sufficient to synchronize playback for us so
	        // we can safely ignore these
	      } else {
	        videojs.log("Unknown PID parsing TS packet: " + pid);
	      }

	      return true;
	    };

	    self.getTags = function() {
	      return h264Stream.tags;
	    };

	    self.stats = {
	      h264Tags: function() {
	        return h264Stream.tags.length;
	      },
	      aacTags: function() {
	        return aacStream.tags.length;
	      }
	    };
	  };

	  // MPEG2-TS constants
	  videojs.Hls.SegmentParser.MP2T_PACKET_LENGTH = MP2T_PACKET_LENGTH = 188;
	  videojs.Hls.SegmentParser.STREAM_TYPES = STREAM_TYPES = {
	    h264: 0x1b,
	    adts: 0x0f,
	    metadata: 0x15
	  };

	})(window);

	(function(videojs, parseInt, isFinite, mergeOptions, undefined) {
	  var
	    noop = function() {},

	    // "forgiving" attribute list psuedo-grammar:
	    // attributes -> keyvalue (',' keyvalue)*
	    // keyvalue   -> key '=' value
	    // key        -> [^=]*
	    // value      -> '"' [^"]* '"' | [^,]*
	    attributeSeparator = (function() {
	      var
	        key = '[^=]*',
	        value = '"[^"]*"|[^,]*',
	        keyvalue = '(?:' + key + ')=(?:' + value + ')';

	      return new RegExp('(?:^|,)(' + keyvalue + ')');
	    })(),
	    parseAttributes = function(attributes) {
	      var
	        // split the string using attributes as the separator
	        attrs = attributes.split(attributeSeparator),
	        i = attrs.length,
	        result = {},
	        attr;

	      while (i--) {
	        // filter out unmatched portions of the string
	        if (attrs[i] === '') {
	          continue;
	        }

	        // split the key and value
	        attr = /([^=]*)=(.*)/.exec(attrs[i]).slice(1);
	        // trim whitespace and remove optional quotes around the value
	        attr[0] = attr[0].replace(/^\s+|\s+$/g, '');
	        attr[1] = attr[1].replace(/^\s+|\s+$/g, '');
	        attr[1] = attr[1].replace(/^['"](.*)['"]$/g, '$1');
	        result[attr[0]] = attr[1];
	      }
	      return result;
	    },
	    Stream = videojs.Hls.Stream,
	    LineStream,
	    ParseStream,
	    Parser;

	  /**
	   * A stream that buffers string input and generates a `data` event for each
	   * line.
	   */
	  LineStream = function() {
	    var buffer = '';
	    LineStream.prototype.init.call(this);

	    /**
	     * Add new data to be parsed.
	     * @param data {string} the text to process
	     */
	    this.push = function(data) {
	      var nextNewline;

	      buffer += data;
	      nextNewline = buffer.indexOf('\n');

	      for (; nextNewline > -1; nextNewline = buffer.indexOf('\n')) {
	        this.trigger('data', buffer.substring(0, nextNewline));
	        buffer = buffer.substring(nextNewline + 1);
	      }
	    };
	  };
	  LineStream.prototype = new Stream();

	  /**
	   * A line-level M3U8 parser event stream. It expects to receive input one
	   * line at a time and performs a context-free parse of its contents. A stream
	   * interpretation of a manifest can be useful if the manifest is expected to
	   * be too large to fit comfortably into memory or the entirety of the input
	   * is not immediately available. Otherwise, it's probably much easier to work
	   * with a regular `Parser` object.
	   *
	   * Produces `data` events with an object that captures the parser's
	   * interpretation of the input. That object has a property `tag` that is one
	   * of `uri`, `comment`, or `tag`. URIs only have a single additional
	   * property, `line`, which captures the entirety of the input without
	   * interpretation. Comments similarly have a single additional property
	   * `text` which is the input without the leading `#`.
	   *
	   * Tags always have a property `tagType` which is the lower-cased version of
	   * the M3U8 directive without the `#EXT` or `#EXT-X-` prefix. For instance,
	   * `#EXT-X-MEDIA-SEQUENCE` becomes `media-sequence` when parsed. Unrecognized
	   * tags are given the tag type `unknown` and a single additional property
	   * `data` with the remainder of the input.
	   */
	  ParseStream = function() {
	    ParseStream.prototype.init.call(this);
	  };
	  ParseStream.prototype = new Stream();
	  /**
	   * Parses an additional line of input.
	   * @param line {string} a single line of an M3U8 file to parse
	   */
	  ParseStream.prototype.push = function(line) {
	    var match, event;

	    //strip whitespace
	    line = line.replace(/^\s+|\s+$/g, '');
	    if (line.length === 0) {
	      // ignore empty lines
	      return;
	    }

	    // URIs
	    if (line[0] !== '#') {
	      this.trigger('data', {
	        type: 'uri',
	        uri: line
	      });
	      return;
	    }

	    // Comments
	    if (line.indexOf('#EXT') !== 0) {
	      this.trigger('data', {
	        type: 'comment',
	        text: line.slice(1)
	      });
	      return;
	    }

	    //strip off any carriage returns here so the regex matching
	    //doesn't have to account for them.
	    line = line.replace('\r','');

	    // Tags
	    match = /^#EXTM3U/.exec(line);
	    if (match) {
	      this.trigger('data', {
	        type: 'tag',
	        tagType: 'm3u'
	      });
	      return;
	    }
	    match = (/^#EXTINF:?([0-9\.]*)?,?(.*)?$/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'inf'
	      };
	      if (match[1]) {
	        event.duration = parseFloat(match[1]);
	      }
	      if (match[2]) {
	        event.title = match[2];
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#EXT-X-TARGETDURATION:?([0-9.]*)?/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'targetduration'
	      };
	      if (match[1]) {
	        event.duration = parseInt(match[1], 10);
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'totalduration'
	      };
	      if (match[1]) {
	        event.duration = parseInt(match[1], 10);
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#EXT-X-VERSION:?([0-9.]*)?/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'version'
	      };
	      if (match[1]) {
	        event.version = parseInt(match[1], 10);
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'media-sequence'
	      };
	      if (match[1]) {
	        event.number = parseInt(match[1], 10);
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'discontinuity-sequence'
	      };
	      if (match[1]) {
	        event.number = parseInt(match[1], 10);
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'playlist-type'
	      };
	      if (match[1]) {
	        event.playlistType = match[1];
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'byterange'
	      };
	      if (match[1]) {
	        event.length = parseInt(match[1], 10);
	      }
	      if (match[2]) {
	        event.offset = parseInt(match[2], 10);
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'allow-cache'
	      };
	      if (match[1]) {
	        event.allowed = !(/NO/).test(match[1]);
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#EXT-X-STREAM-INF:?(.*)$/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'stream-inf'
	      };
	      if (match[1]) {
	        event.attributes = parseAttributes(match[1]);

	        if (event.attributes.RESOLUTION) {
	          (function() {
	            var
	              split = event.attributes.RESOLUTION.split('x'),
	              resolution = {};
	            if (split[0]) {
	              resolution.width = parseInt(split[0], 10);
	            }
	            if (split[1]) {
	              resolution.height = parseInt(split[1], 10);
	            }
	            event.attributes.RESOLUTION = resolution;
	          })();
	        }
	        if (event.attributes.BANDWIDTH) {
	          event.attributes.BANDWIDTH = parseInt(event.attributes.BANDWIDTH, 10);
	        }
	        if (event.attributes['PROGRAM-ID']) {
	          event.attributes['PROGRAM-ID'] = parseInt(event.attributes['PROGRAM-ID'], 10);
	        }
	      }
	      this.trigger('data', event);
	      return;
	    }
	    match = (/^#EXT-X-ENDLIST/).exec(line);
	    if (match) {
	      this.trigger('data', {
	        type: 'tag',
	        tagType: 'endlist'
	      });
	      return;
	    }
	    match = (/^#EXT-X-DISCONTINUITY/).exec(line);
	    if (match) {
	      this.trigger('data', {
	        type: 'tag',
	        tagType: 'discontinuity'
	      });
	      return;
	    }
	    match = (/^#EXT-X-KEY:?(.*)$/).exec(line);
	    if (match) {
	      event = {
	        type: 'tag',
	        tagType: 'key'
	      };
	      if (match[1]) {
	        event.attributes = parseAttributes(match[1]);
	        // parse the IV string into a Uint32Array
	        if (event.attributes.IV) {
	          if (event.attributes.IV.substring(0,2) === '0x') {
	            event.attributes.IV = event.attributes.IV.substring(2);
	          }

	          event.attributes.IV = event.attributes.IV.match(/.{8}/g);
	          event.attributes.IV[0] = parseInt(event.attributes.IV[0], 16);
	          event.attributes.IV[1] = parseInt(event.attributes.IV[1], 16);
	          event.attributes.IV[2] = parseInt(event.attributes.IV[2], 16);
	          event.attributes.IV[3] = parseInt(event.attributes.IV[3], 16);
	          event.attributes.IV = new Uint32Array(event.attributes.IV);
	        }
	      }
	      this.trigger('data', event);
	      return;
	    }

	    // unknown tag type
	    this.trigger('data', {
	      type: 'tag',
	      data: line.slice(4, line.length)
	    });
	  };

	  /**
	   * A parser for M3U8 files. The current interpretation of the input is
	   * exposed as a property `manifest` on parser objects. It's just two lines to
	   * create and parse a manifest once you have the contents available as a string:
	   *
	   * ```js
	   * var parser = new videojs.m3u8.Parser();
	   * parser.push(xhr.responseText);
	   * ```
	   *
	   * New input can later be applied to update the manifest object by calling
	   * `push` again.
	   *
	   * The parser attempts to create a usable manifest object even if the
	   * underlying input is somewhat nonsensical. It emits `info` and `warning`
	   * events during the parse if it encounters input that seems invalid or
	   * requires some property of the manifest object to be defaulted.
	   */
	  Parser = function() {
	    var
	      self = this,
	      uris = [],
	      currentUri = {},
	      key;
	    Parser.prototype.init.call(this);

	    this.lineStream = new LineStream();
	    this.parseStream = new ParseStream();
	    this.lineStream.pipe(this.parseStream);

	    // the manifest is empty until the parse stream begins delivering data
	    this.manifest = {
	      allowCache: true
	    };

	    // update the manifest with the m3u8 entry from the parse stream
	    this.parseStream.on('data', function(entry) {
	      ({
	        tag: function() {
	          // switch based on the tag type
	          (({
	            'allow-cache': function() {
	              this.manifest.allowCache = entry.allowed;
	              if (!('allowed' in entry)) {
	                this.trigger('info', {
	                  message: 'defaulting allowCache to YES'
	                });
	                this.manifest.allowCache = true;
	              }
	            },
	            'byterange': function() {
	              var byterange = {};
	              if ('length' in entry) {
	                currentUri.byterange = byterange;
	                byterange.length = entry.length;

	                if (!('offset' in entry)) {
	                  this.trigger('info', {
	                    message: 'defaulting offset to zero'
	                  });
	                  entry.offset = 0;
	                }
	              }
	              if ('offset' in entry) {
	                currentUri.byterange = byterange;
	                byterange.offset = entry.offset;
	              }
	            },
	            'endlist': function() {
	              this.manifest.endList = true;
	            },
	            'inf': function() {
	              if (!('mediaSequence' in this.manifest)) {
	                this.manifest.mediaSequence = 0;
	                this.trigger('info', {
	                  message: 'defaulting media sequence to zero'
	                });
	              }
	              if (!('discontinuitySequence' in this.manifest)) {
	                this.manifest.discontinuitySequence = 0;
	                this.trigger('info', {
	                  message: 'defaulting discontinuity sequence to zero'
	                });
	              }
	              if (entry.duration >= 0) {
	                currentUri.duration = entry.duration;
	              }

	              this.manifest.segments = uris;

	            },
	            'key': function() {
	              if (!entry.attributes) {
	                this.trigger('warn', {
	                  message: 'ignoring key declaration without attribute list'
	                });
	                return;
	              }
	              // clear the active encryption key
	              if (entry.attributes.METHOD === 'NONE') {
	                key = null;
	                return;
	              }
	              if (!entry.attributes.URI) {
	                this.trigger('warn', {
	                  message: 'ignoring key declaration without URI'
	                });
	                return;
	              }
	              if (!entry.attributes.METHOD) {
	                this.trigger('warn', {
	                  message: 'defaulting key method to AES-128'
	                });
	              }

	              // setup an encryption key for upcoming segments
	              key = {
	                method: entry.attributes.METHOD || 'AES-128',
	                uri: entry.attributes.URI
	              };

	              if (entry.attributes.IV !== undefined) {
	                key.iv = entry.attributes.IV;
	              }
	            },
	            'media-sequence': function() {
	              if (!isFinite(entry.number)) {
	                this.trigger('warn', {
	                  message: 'ignoring invalid media sequence: ' + entry.number
	                });
	                return;
	              }
	              this.manifest.mediaSequence = entry.number;
	            },
	            'discontinuity-sequence': function() {
	              if (!isFinite(entry.number)) {
	                this.trigger('warn', {
	                  message: 'ignoring invalid discontinuity sequence: ' + entry.number
	                });
	                return;
	              }
	              this.manifest.discontinuitySequence = entry.number;
	            },
	            'playlist-type': function() {
	              if (!(/VOD|EVENT/).test(entry.playlistType)) {
	                this.trigger('warn', {
	                  message: 'ignoring unknown playlist type: ' + entry.playlist
	                });
	                return;
	              }
	              this.manifest.playlistType = entry.playlistType;
	            },
	            'stream-inf': function() {
	              this.manifest.playlists = uris;

	              if (!entry.attributes) {
	                this.trigger('warn', {
	                  message: 'ignoring empty stream-inf attributes'
	                });
	                return;
	              }

	              if (!currentUri.attributes) {
	                currentUri.attributes = {};
	              }
	              currentUri.attributes = mergeOptions(currentUri.attributes,
	                                                   entry.attributes);
	            },
	            'discontinuity': function() {
	              currentUri.discontinuity = true;
	            },
	            'targetduration': function() {
	              if (!isFinite(entry.duration) || entry.duration < 0) {
	                this.trigger('warn', {
	                  message: 'ignoring invalid target duration: ' + entry.duration
	                });
	                return;
	              }
	              this.manifest.targetDuration = entry.duration;
	            },
	            'totalduration': function() {
	              if (!isFinite(entry.duration) || entry.duration < 0) {
	                this.trigger('warn', {
	                  message: 'ignoring invalid total duration: ' + entry.duration
	                });
	                return;
	              }
	              this.manifest.totalDuration = entry.duration;
	            }
	          })[entry.tagType] || noop).call(self);
	        },
	        uri: function() {
	          currentUri.uri = entry.uri;
	          uris.push(currentUri);

	          // if no explicit duration was declared, use the target duration
	          if (this.manifest.targetDuration &&
	              !('duration' in currentUri)) {
	            this.trigger('warn', {
	              message: 'defaulting segment duration to the target duration'
	            });
	            currentUri.duration = this.manifest.targetDuration;
	          }
	          // annotate with encryption information, if necessary
	          if (key) {
	            currentUri.key = key;
	          }

	          // prepare for the next URI
	          currentUri = {};
	        },
	        comment: function() {
	          // comments are not important for playback
	        }
	      })[entry.type].call(self);
	    });
	  };
	  Parser.prototype = new Stream();
	  /**
	   * Parse the input string and update the manifest object.
	   * @param chunk {string} a potentially incomplete portion of the manifest
	   */
	  Parser.prototype.push = function(chunk) {
	    this.lineStream.push(chunk);
	  };
	  /**
	   * Flush any remaining input. This can be handy if the last line of an M3U8
	   * manifest did not contain a trailing newline but the file has been
	   * completely received.
	   */
	  Parser.prototype.end = function() {
	    // flush any buffered input
	    this.lineStream.push('\n');
	  };

	  __webpack_provided_window_dot_videojs.m3u8 = {
	    LineStream: LineStream,
	    ParseStream: ParseStream,
	    Parser: Parser
	  };
	})(__webpack_provided_window_dot_videojs, window.parseInt, window.isFinite, __webpack_provided_window_dot_videojs.util.mergeOptions);

	(function(videojs){
	  /**
	   * Creates and sends an XMLHttpRequest.
	   * TODO - expose video.js core's XHR and use that instead
	   *
	   * @param options {string | object} if this argument is a string, it
	   * is intrepreted as a URL and a simple GET request is
	   * inititated. If it is an object, it should contain a `url`
	   * property that indicates the URL to request and optionally a
	   * `method` which is the type of HTTP request to send.
	   * @param callback (optional) {function} a function to call when the
	   * request completes. If the request was not successful, the first
	   * argument will be falsey.
	   * @return {object} the XMLHttpRequest that was initiated.
	   */
	   videojs.Hls.xhr = function(url, callback) {
	    var
	      options = {
	        method: 'GET',
	        timeout: 45 * 1000
	      },
	      request,
	      abortTimeout;

	    if (typeof callback !== 'function') {
	      callback = function() {};
	    }

	    if (typeof url === 'object') {
	      options = videojs.util.mergeOptions(options, url);
	      url = options.url;
	    }

	    request = new window.XMLHttpRequest();
	    request.open(options.method, url);
	    request.url = url;
	    request.requestTime = new Date().getTime();

	    if (options.responseType) {
	      request.responseType = options.responseType;
	    }
	    if (options.withCredentials) {
	      request.withCredentials = true;
	    }
	    if (options.timeout) {
	      abortTimeout = window.setTimeout(function() {
	        if (request.readyState !== 4) {
	          request.timedout = true;
	          request.abort();
	        }
	      }, options.timeout);
	    }

	    request.onreadystatechange = function() {
	      // wait until the request completes
	      if (this.readyState !== 4) {
	        return;
	      }

	      // clear outstanding timeouts
	      window.clearTimeout(abortTimeout);

	      // request timeout
	      if (request.timedout) {
	        return callback.call(this, 'timeout', url);
	      }

	      // request aborted or errored
	      if (this.status >= 400 || this.status === 0) {
	        return callback.call(this, true, url);
	      }

	      if (this.response) {
	        this.responseTime = new Date().getTime();
	        this.roundTripTime = this.responseTime - this.requestTime;
	        this.bytesReceived = this.response.byteLength || this.response.length;
	        this.bandwidth = Math.floor((this.bytesReceived / this.roundTripTime) * 8 * 1000);
	      }

	      return callback.call(this, false, url);
	    };
	    request.send(null);
	    return request;
	  };

	})(__webpack_provided_window_dot_videojs);

	(function(window, videojs) {
	  'use strict';

	  var DEFAULT_TARGET_DURATION = 10;
	  var duration, seekable, segmentsDuration;

	  /**
	   * Calculate the media duration from the segments associated with a
	   * playlist. The duration of a subinterval of the available segments
	   * may be calculated by specifying a start and end index.
	   *
	   * @param playlist {object} a media playlist object
	   * @param startSequence {number} (optional) an inclusive lower
	   * boundary for the playlist.  Defaults to 0.
	   * @param endSequence {number} (optional) an exclusive upper boundary
	   * for the playlist.  Defaults to playlist length.
	   * @return {number} the duration between the start index and end
	   * index.
	   */
	  segmentsDuration = function(playlist, startSequence, endSequence) {
	    var targetDuration, i, segment, expiredSegmentCount, result = 0;

	    startSequence = startSequence || 0;
	    i = startSequence;
	    endSequence = endSequence !== undefined ? endSequence : (playlist.segments || []).length;
	    targetDuration = playlist.targetDuration || DEFAULT_TARGET_DURATION;

	    // estimate expired segment duration using the target duration
	    expiredSegmentCount = Math.max(playlist.mediaSequence - startSequence, 0);
	    result += expiredSegmentCount * targetDuration;
	    i += expiredSegmentCount;

	    // accumulate the segment durations into the result
	    for (; i < endSequence; i++) {
	      segment = playlist.segments[i - playlist.mediaSequence];
	      result += segment.preciseDuration ||
	                segment.duration ||
	                targetDuration;
	    }

	    return result;
	  };

	  /**
	   * Calculates the duration of a playlist. If a start and end index
	   * are specified, the duration will be for the subset of the media
	   * timeline between those two indices. The total duration for live
	   * playlists is always Infinity.
	   * @param playlist {object} a media playlist object
	   * @param startSequence {number} (optional) an inclusive lower
	   * boundary for the playlist.  Defaults to 0.
	   * @param endSequence {number} (optional) an exclusive upper boundary
	   * for the playlist.  Defaults to playlist length.
	   * @return {number} the duration between the start index and end
	   * index.
	   */
	  duration = function(playlist, startSequence, endSequence) {
	    if (!playlist) {
	      return 0;
	    }

	    // if a slice of the total duration is not requested, use
	    // playlist-level duration indicators when they're present
	    if (startSequence === undefined && endSequence === undefined) {
	      // if present, use the duration specified in the playlist
	      if (playlist.totalDuration) {
	        return playlist.totalDuration;
	      }

	      // duration should be Infinity for live playlists
	      if (!playlist.endList) {
	        return window.Infinity;
	      }
	    }

	    // calculate the total duration based on the segment durations
	    return segmentsDuration(playlist,
	                            startSequence,
	                            endSequence);
	  };

	  /**
	   * Calculates the interval of time that is currently seekable in a
	   * playlist.
	   * @param playlist {object} a media playlist object
	   * @return {TimeRanges} the periods of time that are valid targets
	   * for seeking
	   */
	  seekable = function(playlist) {
	    var start, end, liveBuffer, targetDuration, segment, pending, i;

	    // without segments, there are no seekable ranges
	    if (!playlist.segments) {
	      return videojs.createTimeRange();
	    }
	    // when the playlist is complete, the entire duration is seekable
	    if (playlist.endList) {
	      return videojs.createTimeRange(0, duration(playlist));
	    }

	    start = segmentsDuration(playlist, 0, playlist.mediaSequence);
	    end = start + segmentsDuration(playlist,
	                                   playlist.mediaSequence,
	                                   playlist.mediaSequence + playlist.segments.length);
	    targetDuration = playlist.targetDuration || DEFAULT_TARGET_DURATION;

	    // live playlists should not expose three segment durations worth
	    // of content from the end of the playlist
	    // https://tools.ietf.org/html/draft-pantos-http-live-streaming-16#section-6.3.3
	    if (!playlist.endList) {
	      liveBuffer = targetDuration * 3;
	      // walk backward from the last available segment and track how
	      // much media time has elapsed until three target durations have
	      // been traversed. if a segment is part of the interval being
	      // reported, subtract the overlapping portion of its duration
	      // from the result.
	      for (i = playlist.segments.length - 1; i >= 0 && liveBuffer > 0; i--) {
	        segment = playlist.segments[i];
	        pending = Math.min(segment.preciseDuration ||
	                           segment.duration ||
	                           targetDuration,
	                           liveBuffer);
	        liveBuffer -= pending;
	        end -= pending;
	      }
	    }

	    return videojs.createTimeRange(start, end);
	  };

	  // exports
	  videojs.Hls.Playlist = {
	    duration: duration,
	    seekable: seekable
	  };
	})(window, __webpack_provided_window_dot_videojs);

	(function(window, videojs) {
	  'use strict';
	  var
	    resolveUrl = videojs.Hls.resolveUrl,
	    xhr = videojs.Hls.xhr,
	    Playlist = videojs.Hls.Playlist,

	    /**
	     * Returns a new master playlist that is the result of merging an
	     * updated media playlist into the original version. If the
	     * updated media playlist does not match any of the playlist
	     * entries in the original master playlist, null is returned.
	     * @param master {object} a parsed master M3U8 object
	     * @param media {object} a parsed media M3U8 object
	     * @return {object} a new object that represents the original
	     * master playlist with the updated media playlist merged in, or
	     * null if the merge produced no change.
	     */
	    updateMaster = function(master, media) {
	      var
	        changed = false,
	        result = videojs.util.mergeOptions(master, {}),
	        i,
	        playlist;

	      i = master.playlists.length;
	      while (i--) {
	        playlist = result.playlists[i];
	        if (playlist.uri === media.uri) {
	          // consider the playlist unchanged if the number of segments
	          // are equal and the media sequence number is unchanged
	          if (playlist.segments &&
	              media.segments &&
	              playlist.segments.length === media.segments.length &&
	              playlist.mediaSequence === media.mediaSequence) {
	            continue;
	          }

	          result.playlists[i] = videojs.util.mergeOptions(playlist, media);
	          result.playlists[media.uri] = result.playlists[i];
	          changed = true;
	        }
	      }
	      return changed ? result : null;
	    },

	    PlaylistLoader = function(srcUrl, withCredentials) {
	      var
	        loader = this,
	        dispose,
	        mediaUpdateTimeout,
	        request,
	        haveMetadata;

	      PlaylistLoader.prototype.init.call(this);

	      if (!srcUrl) {
	        throw new Error('A non-empty playlist URL is required');
	      }

	      // update the playlist loader's state in response to a new or
	      // updated playlist.
	      haveMetadata = function(error, xhr, url) {
	        var parser, refreshDelay, update;

	        loader.setBandwidth(request || xhr);

	        // any in-flight request is now finished
	        request = null;

	        if (error) {
	          loader.error = {
	            status: xhr.status,
	            message: 'HLS playlist request error at URL: ' + url,
	            responseText: xhr.responseText,
	            code: (xhr.status >= 500) ? 4 : 2
	          };
	          return loader.trigger('error');
	        }

	        loader.state = 'HAVE_METADATA';

	        parser = new videojs.m3u8.Parser();
	        parser.push(xhr.responseText);
	        parser.end();
	        parser.manifest.uri = url;

	        // merge this playlist into the master
	        update = updateMaster(loader.master, parser.manifest);
	        refreshDelay = (parser.manifest.targetDuration || 10) * 1000;
	        if (update) {
	          loader.master = update;
	          loader.updateMediaPlaylist_(parser.manifest);
	        } else {
	          // if the playlist is unchanged since the last reload,
	          // try again after half the target duration
	          refreshDelay /= 2;
	        }

	        // refresh live playlists after a target duration passes
	        if (!loader.media().endList) {
	          window.clearTimeout(mediaUpdateTimeout);
	          mediaUpdateTimeout = window.setTimeout(function() {
	            loader.trigger('mediaupdatetimeout');
	          }, refreshDelay);
	        }

	        loader.trigger('loadedplaylist');
	      };

	      // initialize the loader state
	      loader.state = 'HAVE_NOTHING';

	      // the total duration of all segments that expired and have been
	      // removed from the current playlist after the last
	      // #EXT-X-DISCONTINUITY. In a live playlist without
	      // discontinuities, this is the total amount of time that has
	      // been removed from the stream since the playlist loader began
	      // tracking it.
	      loader.expiredPostDiscontinuity_ = 0;

	      // the total duration of all segments that expired and have been
	      // removed from the current playlist before the last
	      // #EXT-X-DISCONTINUITY. The total amount of time that has
	      // expired is always the sum of expiredPreDiscontinuity_ and
	      // expiredPostDiscontinuity_.
	      loader.expiredPreDiscontinuity_ = 0;

	      // capture the prototype dispose function
	      dispose = this.dispose;

	      /**
	       * Abort any outstanding work and clean up.
	       */
	      loader.dispose = function() {
	        if (request) {
	          request.onreadystatechange = null;
	          request.abort();
	          request = null;
	        }
	        window.clearTimeout(mediaUpdateTimeout);
	        dispose.call(this);
	      };

	      /**
	       * When called without any arguments, returns the currently
	       * active media playlist. When called with a single argument,
	       * triggers the playlist loader to asynchronously switch to the
	       * specified media playlist. Calling this method while the
	       * loader is in the HAVE_NOTHING or HAVE_MASTER states causes an
	       * error to be emitted but otherwise has no effect.
	       * @param playlist (optional) {object} the parsed media playlist
	       * object to switch to
	       */
	      loader.media = function(playlist) {
	        var mediaChange = false;
	        // getter
	        if (!playlist) {
	          return loader.media_;
	        }

	        // setter
	        if (loader.state === 'HAVE_NOTHING' || loader.state === 'HAVE_MASTER') {
	          throw new Error('Cannot switch media playlist from ' + loader.state);
	        }

	        // find the playlist object if the target playlist has been
	        // specified by URI
	        if (typeof playlist === 'string') {
	          if (!loader.master.playlists[playlist]) {
	            throw new Error('Unknown playlist URI: ' + playlist);
	          }
	          playlist = loader.master.playlists[playlist];
	        }

	        mediaChange = playlist.uri !== loader.media_.uri;

	        // switch to fully loaded playlists immediately
	        if (loader.master.playlists[playlist.uri].endList) {
	          // abort outstanding playlist requests
	          if (request) {
	            request.onreadystatechange = null;
	            request.abort();
	            request = null;
	          }
	          loader.state = 'HAVE_METADATA';
	          loader.media_ = playlist;

	          // trigger media change if the active media has been updated
	          if (mediaChange) {
	            loader.trigger('mediachange');
	          }
	          return;
	        }

	        // switching to the active playlist is a no-op
	        if (!mediaChange) {
	          return;
	        }

	        loader.state = 'SWITCHING_MEDIA';

	        // there is already an outstanding playlist request
	        if (request) {
	          if (resolveUrl(loader.master.uri, playlist.uri) === request.url) {
	            // requesting to switch to the same playlist multiple times
	            // has no effect after the first
	            return;
	          }
	          request.onreadystatechange = null;
	          request.abort();
	          request = null;
	        }

	        // request the new playlist
	        request = xhr({
	          url: resolveUrl(loader.master.uri, playlist.uri),
	          withCredentials: withCredentials
	        }, function(error) {
	          haveMetadata(error, this, playlist.uri);
	          loader.trigger('mediachange');
	        });
	      };

	      loader.setBandwidth = function(xhr) {
	        loader.bandwidth = xhr.bandwidth;
	      };

	      // live playlist staleness timeout
	      loader.on('mediaupdatetimeout', function() {
	        if (loader.state !== 'HAVE_METADATA') {
	          // only refresh the media playlist if no other activity is going on
	          return;
	        }

	        loader.state = 'HAVE_CURRENT_METADATA';
	        request = xhr({
	          url: resolveUrl(loader.master.uri, loader.media().uri),
	          withCredentials: withCredentials
	        }, function(error) {
	          haveMetadata(error, this, loader.media().uri);
	        });
	      });

	      // request the specified URL
	      xhr({
	        url: srcUrl,
	        withCredentials: withCredentials
	      }, function(error) {
	        var parser, i;

	        if (error) {
	          loader.error = {
	            status: this.status,
	            message: 'HLS playlist request error at URL: ' + srcUrl,
	            responseText: this.responseText,
	            code: 2 // MEDIA_ERR_NETWORK
	          };
	          return loader.trigger('error');
	        }

	        parser = new videojs.m3u8.Parser();
	        parser.push(this.responseText);
	        parser.end();

	        loader.state = 'HAVE_MASTER';

	        parser.manifest.uri = srcUrl;

	        // loaded a master playlist
	        if (parser.manifest.playlists) {
	          loader.master = parser.manifest;

	          // setup by-URI lookups
	          i = loader.master.playlists.length;
	          while (i--) {
	            loader.master.playlists[loader.master.playlists[i].uri] = loader.master.playlists[i];
	          }

	          request = xhr({
	            url: resolveUrl(srcUrl, parser.manifest.playlists[0].uri),
	            withCredentials: withCredentials
	          }, function(error) {
	            // pass along the URL specified in the master playlist
	            haveMetadata(error,
	                         this,
	                         parser.manifest.playlists[0].uri);
	            if (!error) {
	              loader.trigger('loadedmetadata');
	            }
	          });
	          return loader.trigger('loadedplaylist');
	        }

	        // loaded a media playlist
	        // infer a master playlist if none was previously requested
	        loader.master = {
	          uri: window.location.href,
	          playlists: [{
	            uri: srcUrl
	          }]
	        };
	        loader.master.playlists[srcUrl] = loader.master.playlists[0];
	        haveMetadata(null, this, srcUrl);
	        return loader.trigger('loadedmetadata');
	      });
	    };
	  PlaylistLoader.prototype = new videojs.Hls.Stream();

	  /**
	   * Update the PlaylistLoader state to reflect the changes in an
	   * update to the current media playlist.
	   * @param update {object} the updated media playlist object
	   */
	  PlaylistLoader.prototype.updateMediaPlaylist_ = function(update) {
	    var lastDiscontinuity, expiredCount, i;

	    if (this.media_) {
	      expiredCount = update.mediaSequence - this.media_.mediaSequence;

	      // setup the index for duration calculations so that the newly
	      // expired time will be accumulated after the last
	      // discontinuity, unless we discover otherwise
	      lastDiscontinuity = this.media_.mediaSequence;

	      if (this.media_.discontinuitySequence !== update.discontinuitySequence) {
	        i = expiredCount;
	        while (i--) {
	          if (this.media_.segments[i].discontinuity) {
	            // a segment that begins a new discontinuity sequence has expired
	            lastDiscontinuity = i + this.media_.mediaSequence;
	            this.expiredPreDiscontinuity_ += this.expiredPostDiscontinuity_;
	            this.expiredPostDiscontinuity_ = 0;
	            break;
	          }
	        }
	      }

	      // update the expirated durations
	      this.expiredPreDiscontinuity_ += Playlist.duration(this.media_,
	                                                         this.media_.mediaSequence,
	                                                         lastDiscontinuity);
	      this.expiredPostDiscontinuity_ += Playlist.duration(this.media_,
	                                                         lastDiscontinuity,
	                                                         this.media_.mediaSequence + expiredCount);
	    }

	    this.media_ = this.master.playlists[update.uri];
	  };

	  videojs.Hls.PlaylistLoader = PlaylistLoader;
	})(window, __webpack_provided_window_dot_videojs);

	(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	(function (global){
	global.window.pkcs7 = {
	  unpad: require('./unpad')
	};

	}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./unpad":2}],2:[function(require,module,exports){
	/*
	 * pkcs7.unpad
	 * https://github.com/brightcove/pkcs7
	 *
	 * Copyright (c) 2014 Brightcove
	 * Licensed under the apache2 license.
	 */

	'use strict';

	/**
	 * Returns the subarray of a Uint8Array without PKCS#7 padding.
	 * @param padded {Uint8Array} unencrypted bytes that have been padded
	 * @return {Uint8Array} the unpadded bytes
	 * @see http://tools.ietf.org/html/rfc5652
	 */
	module.exports = function unpad(padded) {
	  return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
	};

	},{}]},{},[1]);
	(function(window, videojs, unpad) {
	'use strict';

	var AES, AsyncStream, Decrypter, decrypt, ntoh;

	/**
	 * Convert network-order (big-endian) bytes into their little-endian
	 * representation.
	 */
	ntoh = function(word) {
	  return (word << 24) |
	    ((word & 0xff00) << 8) |
	    ((word & 0xff0000) >> 8) |
	    (word >>> 24);
	};

	/**
	 * Schedule out an AES key for both encryption and decryption. This
	 * is a low-level class. Use a cipher mode to do bulk encryption.
	 *
	 * @constructor
	 * @param key {Array} The key as an array of 4, 6 or 8 words.
	 */
	AES = function (key) {
	  this._precompute();

	  var i, j, tmp,
	    encKey, decKey,
	    sbox = this._tables[0][4], decTable = this._tables[1],
	    keyLen = key.length, rcon = 1;

	  if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
	    throw new Error("Invalid aes key size");
	  }

	  encKey = key.slice(0);
	  decKey = [];
	  this._key = [encKey, decKey];

	  // schedule encryption keys
	  for (i = keyLen; i < 4 * keyLen + 28; i++) {
	    tmp = encKey[i-1];

	    // apply sbox
	    if (i%keyLen === 0 || (keyLen === 8 && i%keyLen === 4)) {
	      tmp = sbox[tmp>>>24]<<24 ^ sbox[tmp>>16&255]<<16 ^ sbox[tmp>>8&255]<<8 ^ sbox[tmp&255];

	      // shift rows and add rcon
	      if (i%keyLen === 0) {
	        tmp = tmp<<8 ^ tmp>>>24 ^ rcon<<24;
	        rcon = rcon<<1 ^ (rcon>>7)*283;
	      }
	    }

	    encKey[i] = encKey[i-keyLen] ^ tmp;
	  }

	  // schedule decryption keys
	  for (j = 0; i; j++, i--) {
	    tmp = encKey[j&3 ? i : i - 4];
	    if (i<=4 || j<4) {
	      decKey[j] = tmp;
	    } else {
	      decKey[j] = decTable[0][sbox[tmp>>>24      ]] ^
	                  decTable[1][sbox[tmp>>16  & 255]] ^
	                  decTable[2][sbox[tmp>>8   & 255]] ^
	                  decTable[3][sbox[tmp      & 255]];
	    }
	  }
	};

	AES.prototype = {
	  /**
	   * The expanded S-box and inverse S-box tables. These will be computed
	   * on the client so that we don't have to send them down the wire.
	   *
	   * There are two tables, _tables[0] is for encryption and
	   * _tables[1] is for decryption.
	   *
	   * The first 4 sub-tables are the expanded S-box with MixColumns. The
	   * last (_tables[01][4]) is the S-box itself.
	   *
	   * @private
	   */
	  _tables: [[[],[],[],[],[]],[[],[],[],[],[]]],

	  /**
	   * Expand the S-box tables.
	   *
	   * @private
	   */
	  _precompute: function () {
	   var encTable = this._tables[0], decTable = this._tables[1],
	       sbox = encTable[4], sboxInv = decTable[4],
	       i, x, xInv, d=[], th=[], x2, x4, x8, s, tEnc, tDec;

	    // Compute double and third tables
	   for (i = 0; i < 256; i++) {
	     th[( d[i] = i<<1 ^ (i>>7)*283 )^i]=i;
	   }

	   for (x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
	     // Compute sbox
	     s = xInv ^ xInv<<1 ^ xInv<<2 ^ xInv<<3 ^ xInv<<4;
	     s = s>>8 ^ s&255 ^ 99;
	     sbox[x] = s;
	     sboxInv[s] = x;

	     // Compute MixColumns
	     x8 = d[x4 = d[x2 = d[x]]];
	     tDec = x8*0x1010101 ^ x4*0x10001 ^ x2*0x101 ^ x*0x1010100;
	     tEnc = d[s]*0x101 ^ s*0x1010100;

	     for (i = 0; i < 4; i++) {
	       encTable[i][x] = tEnc = tEnc<<24 ^ tEnc>>>8;
	       decTable[i][s] = tDec = tDec<<24 ^ tDec>>>8;
	     }
	   }

	   // Compactify. Considerable speedup on Firefox.
	   for (i = 0; i < 5; i++) {
	     encTable[i] = encTable[i].slice(0);
	     decTable[i] = decTable[i].slice(0);
	   }
	  },

	  /**
	   * Decrypt 16 bytes, specified as four 32-bit words.
	   * @param encrypted0 {number} the first word to decrypt
	   * @param encrypted1 {number} the second word to decrypt
	   * @param encrypted2 {number} the third word to decrypt
	   * @param encrypted3 {number} the fourth word to decrypt
	   * @param out {Int32Array} the array to write the decrypted words
	   * into
	   * @param offset {number} the offset into the output array to start
	   * writing results
	   * @return {Array} The plaintext.
	   */
	  decrypt:function (encrypted0, encrypted1, encrypted2, encrypted3, out, offset) {
	    var key = this._key[1],
	        // state variables a,b,c,d are loaded with pre-whitened data
	        a = encrypted0 ^ key[0],
	        b = encrypted3 ^ key[1],
	        c = encrypted2 ^ key[2],
	        d = encrypted1 ^ key[3],
	        a2, b2, c2,

	        nInnerRounds = key.length / 4 - 2, // key.length === 2 ?
	        i,
	        kIndex = 4,
	        table = this._tables[1],

	        // load up the tables
	        table0    = table[0],
	        table1    = table[1],
	        table2    = table[2],
	        table3    = table[3],
	        sbox  = table[4];

	    // Inner rounds. Cribbed from OpenSSL.
	    for (i = 0; i < nInnerRounds; i++) {
	      a2 = table0[a>>>24] ^ table1[b>>16 & 255] ^ table2[c>>8 & 255] ^ table3[d & 255] ^ key[kIndex];
	      b2 = table0[b>>>24] ^ table1[c>>16 & 255] ^ table2[d>>8 & 255] ^ table3[a & 255] ^ key[kIndex + 1];
	      c2 = table0[c>>>24] ^ table1[d>>16 & 255] ^ table2[a>>8 & 255] ^ table3[b & 255] ^ key[kIndex + 2];
	      d  = table0[d>>>24] ^ table1[a>>16 & 255] ^ table2[b>>8 & 255] ^ table3[c & 255] ^ key[kIndex + 3];
	      kIndex += 4;
	      a=a2; b=b2; c=c2;
	    }

	    // Last round.
	    for (i = 0; i < 4; i++) {
	      out[(3 & -i) + offset] =
	        sbox[a>>>24      ]<<24 ^
	        sbox[b>>16  & 255]<<16 ^
	        sbox[c>>8   & 255]<<8  ^
	        sbox[d      & 255]     ^
	        key[kIndex++];
	      a2=a; a=b; b=c; c=d; d=a2;
	    }
	  }
	};

	/**
	 * Decrypt bytes using AES-128 with CBC and PKCS#7 padding.
	 * @param encrypted {Uint8Array} the encrypted bytes
	 * @param key {Uint32Array} the bytes of the decryption key
	 * @param initVector {Uint32Array} the initialization vector (IV) to
	 * use for the first round of CBC.
	 * @return {Uint8Array} the decrypted bytes
	 *
	 * @see http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
	 * @see http://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_Block_Chaining_.28CBC.29
	 * @see https://tools.ietf.org/html/rfc2315
	 */
	decrypt = function(encrypted, key, initVector) {
	  var
	    // word-level access to the encrypted bytes
	    encrypted32 = new Int32Array(encrypted.buffer, encrypted.byteOffset, encrypted.byteLength >> 2),

	    decipher = new AES(Array.prototype.slice.call(key)),

	    // byte and word-level access for the decrypted output
	    decrypted = new Uint8Array(encrypted.byteLength),
	    decrypted32 = new Int32Array(decrypted.buffer),

	    // temporary variables for working with the IV, encrypted, and
	    // decrypted data
	    init0, init1, init2, init3,
	    encrypted0, encrypted1, encrypted2, encrypted3,

	    // iteration variable
	    wordIx;

	  // pull out the words of the IV to ensure we don't modify the
	  // passed-in reference and easier access
	  init0 = initVector[0];
	  init1 = initVector[1];
	  init2 = initVector[2];
	  init3 = initVector[3];

	  // decrypt four word sequences, applying cipher-block chaining (CBC)
	  // to each decrypted block
	  for (wordIx = 0; wordIx < encrypted32.length; wordIx += 4) {
	    // convert big-endian (network order) words into little-endian
	    // (javascript order)
	    encrypted0 = ntoh(encrypted32[wordIx]);
	    encrypted1 = ntoh(encrypted32[wordIx + 1]);
	    encrypted2 = ntoh(encrypted32[wordIx + 2]);
	    encrypted3 = ntoh(encrypted32[wordIx + 3]);

	    // decrypt the block
	    decipher.decrypt(encrypted0,
	                     encrypted1,
	                     encrypted2,
	                     encrypted3,
	                     decrypted32,
	                     wordIx);

	    // XOR with the IV, and restore network byte-order to obtain the
	    // plaintext
	    decrypted32[wordIx]     = ntoh(decrypted32[wordIx] ^ init0);
	    decrypted32[wordIx + 1] = ntoh(decrypted32[wordIx + 1] ^ init1);
	    decrypted32[wordIx + 2] = ntoh(decrypted32[wordIx + 2] ^ init2);
	    decrypted32[wordIx + 3] = ntoh(decrypted32[wordIx + 3] ^ init3);

	    // setup the IV for the next round
	    init0 = encrypted0;
	    init1 = encrypted1;
	    init2 = encrypted2;
	    init3 = encrypted3;
	  }

	  return decrypted;
	};

	AsyncStream = function() {
	  this.jobs = [];
	  this.delay = 1;
	  this.timeout_ = null;
	};
	AsyncStream.prototype = new videojs.Hls.Stream();
	AsyncStream.prototype.processJob_ = function() {
	  this.jobs.shift()();
	  if (this.jobs.length) {
	    this.timeout_ = setTimeout(videojs.bind(this, this.processJob_),
	                               this.delay);
	  } else {
	    this.timeout_ = null;
	  }
	};
	AsyncStream.prototype.push = function(job) {
	  this.jobs.push(job);
	  if (!this.timeout_) {
	    this.timeout_ = setTimeout(videojs.bind(this, this.processJob_),
	                               this.delay);
	  }
	};

	Decrypter = function(encrypted, key, initVector, done) {
	  var
	    step = Decrypter.STEP,
	    encrypted32 = new Int32Array(encrypted.buffer),
	    decrypted = new Uint8Array(encrypted.byteLength),
	    i = 0;
	  this.asyncStream_ = new AsyncStream();

	  // split up the encryption job and do the individual chunks asynchronously
	  this.asyncStream_.push(this.decryptChunk_(encrypted32.subarray(i, i + step),
	                                            key,
	                                            initVector,
	                                            decrypted,
	                                            i));
	  for (i = step; i < encrypted32.length; i += step) {
	    initVector = new Uint32Array([
	      ntoh(encrypted32[i - 4]),
	      ntoh(encrypted32[i - 3]),
	      ntoh(encrypted32[i - 2]),
	      ntoh(encrypted32[i - 1])
	    ]);
	    this.asyncStream_.push(this.decryptChunk_(encrypted32.subarray(i, i + step),
	                                              key,
	                                              initVector,
	                                              decrypted));
	  }
	  // invoke the done() callback when everything is finished
	  this.asyncStream_.push(function() {
	    // remove pkcs#7 padding from the decrypted bytes
	    done(null, unpad(decrypted));
	  });
	};
	Decrypter.prototype = new videojs.Hls.Stream();
	Decrypter.prototype.decryptChunk_ = function(encrypted, key, initVector, decrypted) {
	  return function() {
	    var bytes = decrypt(encrypted,
	                        key,
	                        initVector);
	    decrypted.set(bytes, encrypted.byteOffset);
	  };
	};
	// the maximum number of bytes to process at one time
	Decrypter.STEP = 4 * 8000;

	// exports
	videojs.Hls.decrypt = decrypt;
	videojs.Hls.Decrypter = Decrypter;
	videojs.Hls.AsyncStream = AsyncStream;

	})(window, __webpack_provided_window_dot_videojs, window.pkcs7.unpad);
	}.call(window));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(11);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(13);
	var parser = __webpack_require__(15);
	var Manager = __webpack_require__(22);
	var debug = __webpack_require__(12)('socket.io-client');

	/**
	 * Module exports.
	 */

	module.exports = exports = lookup;

	/**
	 * Managers cache.
	 */

	var cache = exports.managers = {};

	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */

	function lookup(uri, opts) {
	  if (typeof uri == 'object') {
	    opts = uri;
	    uri = undefined;
	  }

	  opts = opts || {};

	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var io;

	  if (opts.forceNew || opts['force new connection'] || false === opts.multiplex) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }

	  return io.socket(parsed.path);
	}

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = parser.protocol;

	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */

	exports.connect = lookup;

	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */

	exports.Manager = __webpack_require__(22);
	exports.Socket = __webpack_require__(54);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `debug()` as the module.
	 */

	module.exports = debug;

	/**
	 * Create a debugger with the given `name`.
	 *
	 * @param {String} name
	 * @return {Type}
	 * @api public
	 */

	function debug(name) {
	  if (!debug.enabled(name)) return function(){};

	  return function(fmt){
	    fmt = coerce(fmt);

	    var curr = new Date;
	    var ms = curr - (debug[name] || curr);
	    debug[name] = curr;

	    fmt = name
	      + ' '
	      + fmt
	      + ' +' + debug.humanize(ms);

	    // This hackery is required for IE8
	    // where `console.log` doesn't have 'apply'
	    window.console
	      && console.log
	      && Function.prototype.apply.call(console.log, console, arguments);
	  }
	}

	/**
	 * The currently active debug mode names.
	 */

	debug.names = [];
	debug.skips = [];

	/**
	 * Enables a debug mode by name. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} name
	 * @api public
	 */

	debug.enable = function(name) {
	  try {
	    localStorage.debug = name;
	  } catch(e){}

	  var split = (name || '').split(/[\s,]+/)
	    , len = split.length;

	  for (var i = 0; i < len; i++) {
	    name = split[i].replace('*', '.*?');
	    if (name[0] === '-') {
	      debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
	    }
	    else {
	      debug.names.push(new RegExp('^' + name + '$'));
	    }
	  }
	};

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	debug.disable = function(){
	  debug.enable('');
	};

	/**
	 * Humanize the given `ms`.
	 *
	 * @param {Number} m
	 * @return {String}
	 * @api private
	 */

	debug.humanize = function(ms) {
	  var sec = 1000
	    , min = 60 * 1000
	    , hour = 60 * min;

	  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
	  if (ms >= min) return (ms / min).toFixed(1) + 'm';
	  if (ms >= sec) return (ms / sec | 0) + 's';
	  return ms + 'ms';
	};

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	debug.enabled = function(name) {
	  for (var i = 0, len = debug.skips.length; i < len; i++) {
	    if (debug.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (var i = 0, len = debug.names.length; i < len; i++) {
	    if (debug.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	};

	/**
	 * Coerce `val`.
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}

	// persist

	try {
	  if (window.localStorage) debug.enable(localStorage.debug);
	} catch(e){}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */

	var parseuri = __webpack_require__(14);
	var debug = __webpack_require__(12)('socket.io-client:url');

	/**
	 * Module exports.
	 */

	module.exports = url;

	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */

	function url(uri, loc){
	  var obj = uri;

	  // default to window.location
	  var loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;

	  // relative path support
	  if ('string' == typeof uri) {
	    if ('/' == uri.charAt(0)) {
	      if ('/' == uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.hostname + uri;
	      }
	    }

	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' != typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }

	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }

	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    }
	    else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }

	  obj.path = obj.path || '/';

	  // define unique id
	  obj.id = obj.protocol + '://' + obj.host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + obj.host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

	  return obj;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host'
	  , 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	  var m = re.exec(str || '')
	    , uri = {}
	    , i = 14;

	  while (i--) {
	    uri[parts[i]] = m[i] || '';
	  }

	  return uri;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var debug = __webpack_require__(12)('socket.io-parser');
	var json = __webpack_require__(17);
	var isArray = __webpack_require__(19);
	var Emitter = __webpack_require__(16);
	var binary = __webpack_require__(20);
	var isBuf = __webpack_require__(21);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = 4;

	/**
	 * Packet types.
	 *
	 * @api public
	 */

	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'BINARY_EVENT',
	  'ACK',
	  'BINARY_ACK',
	  'ERROR'
	];

	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */

	exports.CONNECT = 0;

	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */

	exports.DISCONNECT = 1;

	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */

	exports.EVENT = 2;

	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */

	exports.ACK = 3;

	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */

	exports.ERROR = 4;

	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */

	exports.BINARY_EVENT = 5;

	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */

	exports.BINARY_ACK = 6;

	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */

	exports.Encoder = Encoder;

	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */

	exports.Decoder = Decoder;

	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */

	function Encoder() {}

	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */

	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);

	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};

	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */

	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;

	  // first is type
	  str += obj.type;

	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }

	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }

	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }

	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }

	  debug('encoded %j as %s', obj, str);
	  return str;
	}

	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */

	function encodeAsBinary(obj, callback) {

	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;

	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }

	  binary.removeBlobs(obj, writeEncoding);
	}

	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */

	function Decoder() {
	  this.reconstructor = null;
	}

	/**
	 * Mix in `Emitter` with Decoder.
	 */

	Emitter(Decoder.prototype);

	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */

	Decoder.prototype.add = function(obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);

	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};

	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */

	function decodeString(str) {
	  var p = {};
	  var i = 0;

	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();

	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }

	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }

	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }

	  // look up json data
	  if (str.charAt(++i)) {
	    try {
	      p.data = json.parse(str.substr(i));
	    } catch(e){
	      return error();
	    }
	  }

	  debug('decoded %s as %j', str, p);
	  return p;
	}

	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */

	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};

	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */

	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}

	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */

	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};

	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */

	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};

	function error(data){
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */
	;(function (window) {
	  // Convenience aliases.
	  var getClass = {}.toString, isProperty, forEach, undef;

	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(18);

	  // Detect native implementations.
	  var nativeJSON = typeof JSON == "object" && JSON;

	  // Set up the JSON 3 namespace, preferring the CommonJS `exports` object if
	  // available.
	  var JSON3 = typeof exports == "object" && exports && !exports.nodeType && exports;

	  if (JSON3 && nativeJSON) {
	    // Explicitly delegate to the native `stringify` and `parse`
	    // implementations in CommonJS environments.
	    JSON3.stringify = nativeJSON.stringify;
	    JSON3.parse = nativeJSON.parse;
	  } else {
	    // Export for web browsers, JavaScript engines, and asynchronous module
	    // loaders, using the global `JSON` object if available.
	    JSON3 = window.JSON = nativeJSON || {};
	  }

	  // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	  var isExtended = new Date(-3509827334573292);
	  try {
	    // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	    // results for certain dates in Opera >= 10.53.
	    isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	      // Safari < 2.0.2 stores the internal millisecond time value correctly,
	      // but clips the values returned by the date methods to the range of
	      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	  } catch (exception) {}

	  // Internal: Determines whether the native `JSON.stringify` and `parse`
	  // implementations are spec-compliant. Based on work by Ken Snyder.
	  function has(name) {
	    if (has[name] !== undef) {
	      // Return cached feature test result.
	      return has[name];
	    }

	    var isSupported;
	    if (name == "bug-string-char-index") {
	      // IE <= 7 doesn't support accessing string characters using square
	      // bracket notation. IE 8 only supports this for primitives.
	      isSupported = "a"[0] != "a";
	    } else if (name == "json") {
	      // Indicates whether both `JSON.stringify` and `JSON.parse` are
	      // supported.
	      isSupported = has("json-stringify") && has("json-parse");
	    } else {
	      var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	      // Test `JSON.stringify`.
	      if (name == "json-stringify") {
	        var stringify = JSON3.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	        if (stringifySupported) {
	          // A test function object with a custom `toJSON` method.
	          (value = function () {
	            return 1;
	          }).toJSON = value;
	          try {
	            stringifySupported =
	              // Firefox 3.1b1 and b2 serialize string, number, and boolean
	              // primitives as object literals.
	              stringify(0) === "0" &&
	              // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	              // literals.
	              stringify(new Number()) === "0" &&
	              stringify(new String()) == '""' &&
	              // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	              // does not define a canonical JSON representation (this applies to
	              // objects with `toJSON` properties as well, *unless* they are nested
	              // within an object or array).
	              stringify(getClass) === undef &&
	              // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	              // FF 3.1b3 pass this test.
	              stringify(undef) === undef &&
	              // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	              // respectively, if the value is omitted entirely.
	              stringify() === undef &&
	              // FF 3.1b1, 2 throw an error if the given value is not a number,
	              // string, array, object, Boolean, or `null` literal. This applies to
	              // objects with custom `toJSON` methods as well, unless they are nested
	              // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	              // methods entirely.
	              stringify(value) === "1" &&
	              stringify([value]) == "[1]" &&
	              // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	              // `"[null]"`.
	              stringify([undef]) == "[null]" &&
	              // YUI 3.0.0b1 fails to serialize `null` literals.
	              stringify(null) == "null" &&
	              // FF 3.1b1, 2 halts serialization if an array contains a function:
	              // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	              // elides non-JSON values from objects and arrays, unless they
	              // define custom `toJSON` methods.
	              stringify([undef, getClass, null]) == "[null,null,null]" &&
	              // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	              // where character escape codes are expected (e.g., `\b` => `\u0008`).
	              stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	              // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	              stringify(null, value) === "1" &&
	              stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	              // serialize extended years.
	              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	              // The milliseconds are optional in ES 5, but required in 5.1.
	              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	              // four-digit years instead of six-digit years. Credits: @Yaffle.
	              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	              // values less than 1000. Credits: @Yaffle.
	              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	          } catch (exception) {
	            stringifySupported = false;
	          }
	        }
	        isSupported = stringifySupported;
	      }
	      // Test `JSON.parse`.
	      if (name == "json-parse") {
	        var parse = JSON3.parse;
	        if (typeof parse == "function") {
	          try {
	            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	            // Conforming implementations should also coerce the initial argument to
	            // a string prior to parsing.
	            if (parse("0") === 0 && !parse(false)) {
	              // Simple parsing test.
	              value = parse(serialized);
	              var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	              if (parseSupported) {
	                try {
	                  // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                  parseSupported = !parse('"\t"');
	                } catch (exception) {}
	                if (parseSupported) {
	                  try {
	                    // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                    // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                    // certain octal literals.
	                    parseSupported = parse("01") !== 1;
	                  } catch (exception) {}
	                }
	                if (parseSupported) {
	                  try {
	                    // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                    // points. These environments, along with FF 3.1b1 and 2,
	                    // also allow trailing commas in JSON objects and arrays.
	                    parseSupported = parse("1.") !== 1;
	                  } catch (exception) {}
	                }
	              }
	            }
	          } catch (exception) {
	            parseSupported = false;
	          }
	        }
	        isSupported = parseSupported;
	      }
	    }
	    return has[name] = !!isSupported;
	  }

	  if (!has("json")) {
	    // Common `[[Class]]` name aliases.
	    var functionClass = "[object Function]";
	    var dateClass = "[object Date]";
	    var numberClass = "[object Number]";
	    var stringClass = "[object String]";
	    var arrayClass = "[object Array]";
	    var booleanClass = "[object Boolean]";

	    // Detect incomplete support for accessing string characters by index.
	    var charIndexBuggy = has("bug-string-char-index");

	    // Define additional utility methods if the `Date` methods are buggy.
	    if (!isExtended) {
	      var floor = Math.floor;
	      // A mapping between the months of the year and the number of days between
	      // January 1st and the first of the respective month.
	      var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	      // Internal: Calculates the number of days between the Unix epoch and the
	      // first day of the given month.
	      var getDay = function (year, month) {
	        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	      };
	    }

	    // Internal: Determines if a property is a direct property of the given
	    // object. Delegates to the native `Object#hasOwnProperty` method.
	    if (!(isProperty = {}.hasOwnProperty)) {
	      isProperty = function (property) {
	        var members = {}, constructor;
	        if ((members.__proto__ = null, members.__proto__ = {
	          // The *proto* property cannot be set multiple times in recent
	          // versions of Firefox and SeaMonkey.
	          "toString": 1
	        }, members).toString != getClass) {
	          // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	          // supports the mutable *proto* property.
	          isProperty = function (property) {
	            // Capture and break the object's prototype chain (see section 8.6.2
	            // of the ES 5.1 spec). The parenthesized expression prevents an
	            // unsafe transformation by the Closure Compiler.
	            var original = this.__proto__, result = property in (this.__proto__ = null, this);
	            // Restore the original prototype chain.
	            this.__proto__ = original;
	            return result;
	          };
	        } else {
	          // Capture a reference to the top-level `Object` constructor.
	          constructor = members.constructor;
	          // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	          // other environments.
	          isProperty = function (property) {
	            var parent = (this.constructor || constructor).prototype;
	            return property in this && !(property in parent && this[property] === parent[property]);
	          };
	        }
	        members = null;
	        return isProperty.call(this, property);
	      };
	    }

	    // Internal: A set of primitive types used by `isHostType`.
	    var PrimitiveTypes = {
	      'boolean': 1,
	      'number': 1,
	      'string': 1,
	      'undefined': 1
	    };

	    // Internal: Determines if the given object `property` value is a
	    // non-primitive.
	    var isHostType = function (object, property) {
	      var type = typeof object[property];
	      return type == 'object' ? !!object[property] : !PrimitiveTypes[type];
	    };

	    // Internal: Normalizes the `for...in` iteration algorithm across
	    // environments. Each enumerated key is yielded to a `callback` function.
	    forEach = function (object, callback) {
	      var size = 0, Properties, members, property;

	      // Tests for bugs in the current environment's `for...in` algorithm. The
	      // `valueOf` property inherits the non-enumerable flag from
	      // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	      (Properties = function () {
	        this.valueOf = 0;
	      }).prototype.valueOf = 0;

	      // Iterate over a new instance of the `Properties` class.
	      members = new Properties();
	      for (property in members) {
	        // Ignore all properties inherited from `Object.prototype`.
	        if (isProperty.call(members, property)) {
	          size++;
	        }
	      }
	      Properties = members = null;

	      // Normalize the iteration algorithm.
	      if (!size) {
	        // A list of non-enumerable properties inherited from `Object.prototype`.
	        members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	        // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	        // properties.
	        forEach = function (object, callback) {
	          var isFunction = getClass.call(object) == functionClass, property, length;
	          var hasProperty = !isFunction && typeof object.constructor != 'function' && isHostType(object, 'hasOwnProperty') ? object.hasOwnProperty : isProperty;
	          for (property in object) {
	            // Gecko <= 1.0 enumerates the `prototype` property of functions under
	            // certain conditions; IE does not.
	            if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	              callback(property);
	            }
	          }
	          // Manually invoke the callback for each non-enumerable property.
	          for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	        };
	      } else if (size == 2) {
	        // Safari <= 2.0.4 enumerates shadowed properties twice.
	        forEach = function (object, callback) {
	          // Create a set of iterated properties.
	          var members = {}, isFunction = getClass.call(object) == functionClass, property;
	          for (property in object) {
	            // Store each property name to prevent double enumeration. The
	            // `prototype` property of functions is not enumerated due to cross-
	            // environment inconsistencies.
	            if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	              callback(property);
	            }
	          }
	        };
	      } else {
	        // No bugs detected; use the standard `for...in` algorithm.
	        forEach = function (object, callback) {
	          var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	          for (property in object) {
	            if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	              callback(property);
	            }
	          }
	          // Manually invoke the callback for the `constructor` property due to
	          // cross-environment inconsistencies.
	          if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	            callback(property);
	          }
	        };
	      }
	      return forEach(object, callback);
	    };

	    // Public: Serializes a JavaScript `value` as a JSON string. The optional
	    // `filter` argument may specify either a function that alters how object and
	    // array members are serialized, or an array of strings and numbers that
	    // indicates which properties should be serialized. The optional `width`
	    // argument may be either a string or number that specifies the indentation
	    // level of the output.
	    if (!has("json-stringify")) {
	      // Internal: A map of control characters and their escaped equivalents.
	      var Escapes = {
	        92: "\\\\",
	        34: '\\"',
	        8: "\\b",
	        12: "\\f",
	        10: "\\n",
	        13: "\\r",
	        9: "\\t"
	      };

	      // Internal: Converts `value` into a zero-padded string such that its
	      // length is at least equal to `width`. The `width` must be <= 6.
	      var leadingZeroes = "000000";
	      var toPaddedString = function (width, value) {
	        // The `|| 0` expression is necessary to work around a bug in
	        // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	        return (leadingZeroes + (value || 0)).slice(-width);
	      };

	      // Internal: Double-quotes a string `value`, replacing all ASCII control
	      // characters (characters with code unit values between 0 and 31) with
	      // their escaped equivalents. This is an implementation of the
	      // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	      var unicodePrefix = "\\u00";
	      var quote = function (value) {
	        var result = '"', index = 0, length = value.length, isLarge = length > 10 && charIndexBuggy, symbols;
	        if (isLarge) {
	          symbols = value.split("");
	        }
	        for (; index < length; index++) {
	          var charCode = value.charCodeAt(index);
	          // If the character is a control character, append its Unicode or
	          // shorthand escape sequence; otherwise, append the character as-is.
	          switch (charCode) {
	            case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	              result += Escapes[charCode];
	              break;
	            default:
	              if (charCode < 32) {
	                result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                break;
	              }
	              result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
	          }
	        }
	        return result + '"';
	      };

	      // Internal: Recursively serializes an object. Implements the
	      // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	      var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	        var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	        try {
	          // Necessary for host object support.
	          value = object[property];
	        } catch (exception) {}
	        if (typeof value == "object" && value) {
	          className = getClass.call(value);
	          if (className == dateClass && !isProperty.call(value, "toJSON")) {
	            if (value > -1 / 0 && value < 1 / 0) {
	              // Dates are serialized according to the `Date#toJSON` method
	              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	              // for the ISO 8601 date time string format.
	              if (getDay) {
	                // Manually compute the year, month, date, hours, minutes,
	                // seconds, and milliseconds if the `getUTC*` methods are
	                // buggy. Adapted from @Yaffle's `date-shim` project.
	                date = floor(value / 864e5);
	                for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                date = 1 + date - getDay(year, month);
	                // The `time` value specifies the time within the day (see ES
	                // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                // to compute `A modulo B`, as the `%` operator does not
	                // correspond to the `modulo` operation for negative numbers.
	                time = (value % 864e5 + 864e5) % 864e5;
	                // The hours, minutes, seconds, and milliseconds are obtained by
	                // decomposing the time within the day. See section 15.9.1.10.
	                hours = floor(time / 36e5) % 24;
	                minutes = floor(time / 6e4) % 60;
	                seconds = floor(time / 1e3) % 60;
	                milliseconds = time % 1e3;
	              } else {
	                year = value.getUTCFullYear();
	                month = value.getUTCMonth();
	                date = value.getUTCDate();
	                hours = value.getUTCHours();
	                minutes = value.getUTCMinutes();
	                seconds = value.getUTCSeconds();
	                milliseconds = value.getUTCMilliseconds();
	              }
	              // Serialize extended years correctly.
	              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                // Months, dates, hours, minutes, and seconds should have two
	                // digits; milliseconds should have three.
	                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                // Milliseconds are optional in ES 5.0, but required in 5.1.
	                "." + toPaddedString(3, milliseconds) + "Z";
	            } else {
	              value = null;
	            }
	          } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	            // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	            // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	            // ignores all `toJSON` methods on these objects unless they are
	            // defined directly on an instance.
	            value = value.toJSON(property);
	          }
	        }
	        if (callback) {
	          // If a replacement function was provided, call it to obtain the value
	          // for serialization.
	          value = callback.call(object, property, value);
	        }
	        if (value === null) {
	          return "null";
	        }
	        className = getClass.call(value);
	        if (className == booleanClass) {
	          // Booleans are represented literally.
	          return "" + value;
	        } else if (className == numberClass) {
	          // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	          // `"null"`.
	          return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	        } else if (className == stringClass) {
	          // Strings are double-quoted and escaped.
	          return quote("" + value);
	        }
	        // Recursively serialize objects and arrays.
	        if (typeof value == "object") {
	          // Check for cyclic structures. This is a linear search; performance
	          // is inversely proportional to the number of unique nested objects.
	          for (length = stack.length; length--;) {
	            if (stack[length] === value) {
	              // Cyclic structures cannot be serialized by `JSON.stringify`.
	              throw TypeError();
	            }
	          }
	          // Add the object to the stack of traversed objects.
	          stack.push(value);
	          results = [];
	          // Save the current indentation level and indent one additional level.
	          prefix = indentation;
	          indentation += whitespace;
	          if (className == arrayClass) {
	            // Recursively serialize array elements.
	            for (index = 0, length = value.length; index < length; index++) {
	              element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	              results.push(element === undef ? "null" : element);
	            }
	            result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	          } else {
	            // Recursively serialize object members. Members are selected from
	            // either a user-specified list of property names, or the object
	            // itself.
	            forEach(properties || value, function (property) {
	              var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	              if (element !== undef) {
	                // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                // is not the empty string, let `member` {quote(property) + ":"}
	                // be the concatenation of `member` and the `space` character."
	                // The "`space` character" refers to the literal space
	                // character, not the `space` {width} argument provided to
	                // `JSON.stringify`.
	                results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	              }
	            });
	            result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	          }
	          // Remove the object from the traversed object stack.
	          stack.pop();
	          return result;
	        }
	      };

	      // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	      JSON3.stringify = function (source, filter, width) {
	        var whitespace, callback, properties, className;
	        if (typeof filter == "function" || typeof filter == "object" && filter) {
	          if ((className = getClass.call(filter)) == functionClass) {
	            callback = filter;
	          } else if (className == arrayClass) {
	            // Convert the property names array into a makeshift set.
	            properties = {};
	            for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	          }
	        }
	        if (width) {
	          if ((className = getClass.call(width)) == numberClass) {
	            // Convert the `width` to an integer and create a string containing
	            // `width` number of space characters.
	            if ((width -= width % 1) > 0) {
	              for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	            }
	          } else if (className == stringClass) {
	            whitespace = width.length <= 10 ? width : width.slice(0, 10);
	          }
	        }
	        // Opera <= 7.54u2 discards the values associated with empty string keys
	        // (`""`) only if they are used directly within an object member list
	        // (e.g., `!("" in { "": 1})`).
	        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	      };
	    }

	    // Public: Parses a JSON source string.
	    if (!has("json-parse")) {
	      var fromCharCode = String.fromCharCode;

	      // Internal: A map of escaped control characters and their unescaped
	      // equivalents.
	      var Unescapes = {
	        92: "\\",
	        34: '"',
	        47: "/",
	        98: "\b",
	        116: "\t",
	        110: "\n",
	        102: "\f",
	        114: "\r"
	      };

	      // Internal: Stores the parser state.
	      var Index, Source;

	      // Internal: Resets the parser state and throws a `SyntaxError`.
	      var abort = function() {
	        Index = Source = null;
	        throw SyntaxError();
	      };

	      // Internal: Returns the next token, or `"$"` if the parser has reached
	      // the end of the source string. A token may be a string, number, `null`
	      // literal, or Boolean literal.
	      var lex = function () {
	        var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	        while (Index < length) {
	          charCode = source.charCodeAt(Index);
	          switch (charCode) {
	            case 9: case 10: case 13: case 32:
	              // Skip whitespace tokens, including tabs, carriage returns, line
	              // feeds, and space characters.
	              Index++;
	              break;
	            case 123: case 125: case 91: case 93: case 58: case 44:
	              // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	              // the current position.
	              value = charIndexBuggy ? source.charAt(Index) : source[Index];
	              Index++;
	              return value;
	            case 34:
	              // `"` delimits a JSON string; advance to the next character and
	              // begin parsing the string. String tokens are prefixed with the
	              // sentinel `@` character to distinguish them from punctuators and
	              // end-of-string tokens.
	              for (value = "@", Index++; Index < length;) {
	                charCode = source.charCodeAt(Index);
	                if (charCode < 32) {
	                  // Unescaped ASCII control characters (those with a code unit
	                  // less than the space character) are not permitted.
	                  abort();
	                } else if (charCode == 92) {
	                  // A reverse solidus (`\`) marks the beginning of an escaped
	                  // control character (including `"`, `\`, and `/`) or Unicode
	                  // escape sequence.
	                  charCode = source.charCodeAt(++Index);
	                  switch (charCode) {
	                    case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                      // Revive escaped control characters.
	                      value += Unescapes[charCode];
	                      Index++;
	                      break;
	                    case 117:
	                      // `\u` marks the beginning of a Unicode escape sequence.
	                      // Advance to the first character and validate the
	                      // four-digit code point.
	                      begin = ++Index;
	                      for (position = Index + 4; Index < position; Index++) {
	                        charCode = source.charCodeAt(Index);
	                        // A valid sequence comprises four hexdigits (case-
	                        // insensitive) that form a single hexadecimal value.
	                        if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                          // Invalid Unicode escape sequence.
	                          abort();
	                        }
	                      }
	                      // Revive the escaped character.
	                      value += fromCharCode("0x" + source.slice(begin, Index));
	                      break;
	                    default:
	                      // Invalid escape sequence.
	                      abort();
	                  }
	                } else {
	                  if (charCode == 34) {
	                    // An unescaped double-quote character marks the end of the
	                    // string.
	                    break;
	                  }
	                  charCode = source.charCodeAt(Index);
	                  begin = Index;
	                  // Optimize for the common case where a string is valid.
	                  while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                    charCode = source.charCodeAt(++Index);
	                  }
	                  // Append the string as-is.
	                  value += source.slice(begin, Index);
	                }
	              }
	              if (source.charCodeAt(Index) == 34) {
	                // Advance to the next character and return the revived string.
	                Index++;
	                return value;
	              }
	              // Unterminated string.
	              abort();
	            default:
	              // Parse numbers and literals.
	              begin = Index;
	              // Advance past the negative sign, if one is specified.
	              if (charCode == 45) {
	                isSigned = true;
	                charCode = source.charCodeAt(++Index);
	              }
	              // Parse an integer or floating-point value.
	              if (charCode >= 48 && charCode <= 57) {
	                // Leading zeroes are interpreted as octal literals.
	                if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                  // Illegal octal literal.
	                  abort();
	                }
	                isSigned = false;
	                // Parse the integer component.
	                for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                // Floats cannot contain a leading decimal point; however, this
	                // case is already accounted for by the parser.
	                if (source.charCodeAt(Index) == 46) {
	                  position = ++Index;
	                  // Parse the decimal component.
	                  for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                  if (position == Index) {
	                    // Illegal trailing decimal.
	                    abort();
	                  }
	                  Index = position;
	                }
	                // Parse exponents. The `e` denoting the exponent is
	                // case-insensitive.
	                charCode = source.charCodeAt(Index);
	                if (charCode == 101 || charCode == 69) {
	                  charCode = source.charCodeAt(++Index);
	                  // Skip past the sign following the exponent, if one is
	                  // specified.
	                  if (charCode == 43 || charCode == 45) {
	                    Index++;
	                  }
	                  // Parse the exponential component.
	                  for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                  if (position == Index) {
	                    // Illegal empty exponent.
	                    abort();
	                  }
	                  Index = position;
	                }
	                // Coerce the parsed value to a JavaScript number.
	                return +source.slice(begin, Index);
	              }
	              // A negative sign may only precede numbers.
	              if (isSigned) {
	                abort();
	              }
	              // `true`, `false`, and `null` literals.
	              if (source.slice(Index, Index + 4) == "true") {
	                Index += 4;
	                return true;
	              } else if (source.slice(Index, Index + 5) == "false") {
	                Index += 5;
	                return false;
	              } else if (source.slice(Index, Index + 4) == "null") {
	                Index += 4;
	                return null;
	              }
	              // Unrecognized token.
	              abort();
	          }
	        }
	        // Return the sentinel `$` character if the parser has reached the end
	        // of the source string.
	        return "$";
	      };

	      // Internal: Parses a JSON `value` token.
	      var get = function (value) {
	        var results, hasMembers;
	        if (value == "$") {
	          // Unexpected end of input.
	          abort();
	        }
	        if (typeof value == "string") {
	          if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	            // Remove the sentinel `@` character.
	            return value.slice(1);
	          }
	          // Parse object and array literals.
	          if (value == "[") {
	            // Parses a JSON array, returning a new JavaScript array.
	            results = [];
	            for (;; hasMembers || (hasMembers = true)) {
	              value = lex();
	              // A closing square bracket marks the end of the array literal.
	              if (value == "]") {
	                break;
	              }
	              // If the array literal contains elements, the current token
	              // should be a comma separating the previous element from the
	              // next.
	              if (hasMembers) {
	                if (value == ",") {
	                  value = lex();
	                  if (value == "]") {
	                    // Unexpected trailing `,` in array literal.
	                    abort();
	                  }
	                } else {
	                  // A `,` must separate each array element.
	                  abort();
	                }
	              }
	              // Elisions and leading commas are not permitted.
	              if (value == ",") {
	                abort();
	              }
	              results.push(get(value));
	            }
	            return results;
	          } else if (value == "{") {
	            // Parses a JSON object, returning a new JavaScript object.
	            results = {};
	            for (;; hasMembers || (hasMembers = true)) {
	              value = lex();
	              // A closing curly brace marks the end of the object literal.
	              if (value == "}") {
	                break;
	              }
	              // If the object literal contains members, the current token
	              // should be a comma separator.
	              if (hasMembers) {
	                if (value == ",") {
	                  value = lex();
	                  if (value == "}") {
	                    // Unexpected trailing `,` in object literal.
	                    abort();
	                  }
	                } else {
	                  // A `,` must separate each object member.
	                  abort();
	                }
	              }
	              // Leading commas are not permitted, object property names must be
	              // double-quoted strings, and a `:` must separate each property
	              // name and value.
	              if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                abort();
	              }
	              results[value.slice(1)] = get(lex());
	            }
	            return results;
	          }
	          // Unexpected token encountered.
	          abort();
	        }
	        return value;
	      };

	      // Internal: Updates a traversed object member.
	      var update = function(source, property, callback) {
	        var element = walk(source, property, callback);
	        if (element === undef) {
	          delete source[property];
	        } else {
	          source[property] = element;
	        }
	      };

	      // Internal: Recursively traverses a parsed JSON object, invoking the
	      // `callback` function for each value. This is an implementation of the
	      // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	      var walk = function (source, property, callback) {
	        var value = source[property], length;
	        if (typeof value == "object" && value) {
	          // `forEach` can't be used to traverse an array in Opera <= 8.54
	          // because its `Object#hasOwnProperty` implementation returns `false`
	          // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	          if (getClass.call(value) == arrayClass) {
	            for (length = value.length; length--;) {
	              update(value, length, callback);
	            }
	          } else {
	            forEach(value, function (property) {
	              update(value, property, callback);
	            });
	          }
	        }
	        return callback.call(source, property, value);
	      };

	      // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	      JSON3.parse = function (source, callback) {
	        var result, value;
	        Index = 0;
	        Source = "" + source;
	        result = get(lex());
	        // If a JSON string contains multiple tokens, it is invalid.
	        if (lex() != "$") {
	          abort();
	        }
	        // Reset the parser state.
	        Index = Source = null;
	        return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	      };
	    }
	  }

	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}(this));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

	/**
	 * Module requirements
	 */

	var isArray = __webpack_require__(19);
	var isBuf = __webpack_require__(21);

	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */

	exports.deconstructPacket = function(packet){
	  var buffers = [];
	  var packetData = packet.data;

	  function _deconstructPacket(data) {
	    if (!data) return data;

	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }

	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};

	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */

	exports.reconstructPacket = function(packet, buffers) {
	  var curPlaceHolder = 0;

	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }

	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};

	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */

	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;

	    // convert any blob
	    if ((global.Blob && obj instanceof Blob) ||
	        (global.File && obj instanceof File)) {
	      pendingBlobs++;

	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }

	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };

	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }

	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;

	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */

	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(13);
	var eio = __webpack_require__(23);
	var Socket = __webpack_require__(54);
	var Emitter = __webpack_require__(16);
	var parser = __webpack_require__(15);
	var on = __webpack_require__(56);
	var bind = __webpack_require__(57);
	var object = __webpack_require__(60);
	var debug = __webpack_require__(12)('socket.io-client:manager');
	var indexOf = __webpack_require__(51);
	var Backoff = __webpack_require__(61);

	/**
	 * Module exports
	 */

	module.exports = Manager;

	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */

	function Manager(uri, opts){
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' == typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};

	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connected = [];
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}

	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */

	Manager.prototype.emitAll = function() {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	  }
	};

	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */

	Manager.prototype.updateSocketIds = function(){
	  for (var nsp in this.nsps) {
	    this.nsps[nsp].id = this.engine.id;
	  }
	};

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Manager.prototype);

	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnection = function(v){
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};

	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionAttempts = function(v){
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};

	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelay = function(v){
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};

	Manager.prototype.randomizationFactor = function(v){
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};

	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelayMax = function(v){
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};

	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.timeout = function(v){
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};

	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */

	Manager.prototype.maybeReconnectOnOpen = function() {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};


	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */

	Manager.prototype.open =
	Manager.prototype.connect = function(fn){
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;

	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;

	  // emit `open`
	  var openSub = on(socket, 'open', function() {
	    self.onopen();
	    fn && fn();
	  });

	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function(data){
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });

	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);

	    // set timer
	    var timer = setTimeout(function(){
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);

	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }

	  this.subs.push(openSub);
	  this.subs.push(errorSub);

	  return this;
	};

	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */

	Manager.prototype.onopen = function(){
	  debug('open');

	  // clear old subs
	  this.cleanup();

	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');

	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	};

	/**
	 * Called with data.
	 *
	 * @api private
	 */

	Manager.prototype.ondata = function(data){
	  this.decoder.add(data);
	};

	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */

	Manager.prototype.ondecoded = function(packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */

	Manager.prototype.onerror = function(err){
	  debug('error', err);
	  this.emitAll('error', err);
	};

	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */

	Manager.prototype.socket = function(nsp){
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connect', function(){
	      socket.id = self.engine.id;
	      if (!~indexOf(self.connected, socket)) {
	        self.connected.push(socket);
	      }
	    });
	  }
	  return socket;
	};

	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */

	Manager.prototype.destroy = function(socket){
	  var index = indexOf(this.connected, socket);
	  if (~index) this.connected.splice(index, 1);
	  if (this.connected.length) return;

	  this.close();
	};

	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Manager.prototype.packet = function(packet){
	  debug('writing packet %j', packet);
	  var self = this;

	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function(encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i]);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};

	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */

	Manager.prototype.processPacketQueue = function() {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};

	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */

	Manager.prototype.cleanup = function(){
	  var sub;
	  while (sub = this.subs.shift()) sub.destroy();

	  this.packetBuffer = [];
	  this.encoding = false;

	  this.decoder.destroy();
	};

	/**
	 * Close the current socket.
	 *
	 * @api private
	 */

	Manager.prototype.close =
	Manager.prototype.disconnect = function(){
	  this.skipReconnect = true;
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.engine && this.engine.close();
	};

	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */

	Manager.prototype.onclose = function(reason){
	  debug('close');
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};

	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */

	Manager.prototype.reconnect = function(){
	  if (this.reconnecting || this.skipReconnect) return this;

	  var self = this;

	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);

	    this.reconnecting = true;
	    var timer = setTimeout(function(){
	      if (self.skipReconnect) return;

	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);

	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;

	      self.open(function(err){
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);

	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }
	};

	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */

	Manager.prototype.onreconnect = function(){
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports =  __webpack_require__(24);


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(25);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(35);


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(26);
	var Emitter = __webpack_require__(16);
	var debug = __webpack_require__(45)('engine.io-client:socket');
	var index = __webpack_require__(51);
	var parser = __webpack_require__(35);
	var parseuri = __webpack_require__(52);
	var parsejson = __webpack_require__(53);
	var parseqs = __webpack_require__(44);

	/**
	 * Module exports.
	 */

	module.exports = Socket;

	/**
	 * Noop function.
	 *
	 * @api private
	 */

	function noop(){}

	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */

	function Socket(uri, opts){
	  if (!(this instanceof Socket)) return new Socket(uri, opts);

	  opts = opts || {};

	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = null;
	  }

	  if (uri) {
	    uri = parseuri(uri);
	    opts.host = uri.host;
	    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  }

	  this.secure = null != opts.secure ? opts.secure :
	    (global.location && 'https:' == location.protocol);

	  if (opts.host) {
	    var pieces = opts.host.split(':');
	    opts.hostname = pieces.shift();
	    if (pieces.length) {
	      opts.port = pieces.pop();
	    } else if (!opts.port) {
	      // if no port is specified manually, use the protocol default
	      opts.port = this.secure ? '443' : '80';
	    }
	  }

	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ?
	       location.port :
	       (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.callbackBuffer = [];
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized || null;

	  this.open();
	}

	Socket.priorWebsocketSuccess = false;

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	Socket.protocol = parser.protocol; // this is an int

	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */

	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(34);
	Socket.transports = __webpack_require__(26);
	Socket.parser = __webpack_require__(35);

	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */

	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);

	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;

	  // transport name
	  query.transport = name;

	  // session id if we already have one
	  if (this.id) query.sid = this.id;

	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized
	  });

	  return transport;
	};

	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}

	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
	    transport = 'websocket';
	  } else if (0 == this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function() {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';

	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  var transport;
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }

	  transport.open();
	  this.setTransport(transport);
	};

	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */

	Socket.prototype.setTransport = function(transport){
	  debug('setting transport %s', transport.name);
	  var self = this;

	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }

	  // set up transport
	  this.transport = transport;

	  // set up transport listeners
	  transport
	  .on('drain', function(){
	    self.onDrain();
	  })
	  .on('packet', function(packet){
	    self.onPacket(packet);
	  })
	  .on('error', function(e){
	    self.onError(e);
	  })
	  .on('close', function(){
	    self.onClose('transport close');
	  });
	};

	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */

	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 })
	    , failed = false
	    , self = this;

	  Socket.priorWebsocketSuccess = false;

	  function onTransportOpen(){
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;

	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' == msg.type && 'probe' == msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' == self.readyState) return;
	          debug('changing transport and sending upgrade packet');

	          cleanup();

	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }

	  function freezeTransport() {
	    if (failed) return;

	    // Any callback called by transport should be ignored since now
	    failed = true;

	    cleanup();

	    transport.close();
	    transport = null;
	  }

	  //Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;

	    freezeTransport();

	    debug('probe transport "%s" failed because of error: %s', name, err);

	    self.emit('upgradeError', error);
	  }

	  function onTransportClose(){
	    onerror("transport closed");
	  }

	  //When the socket is closed while we're probing
	  function onclose(){
	    onerror("socket closed");
	  }

	  //When the socket is upgraded while we're probing
	  function onupgrade(to){
	    if (transport && to.name != transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }

	  //Remove all listeners on the transport and on self
	  function cleanup(){
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }

	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);

	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);

	  transport.open();

	};

	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */

	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
	  this.emit('open');
	  this.flush();

	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};

	/**
	 * Handles a packet.
	 *
	 * @api private
	 */

	Socket.prototype.onPacket = function (packet) {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

	    this.emit('packet', packet);

	    // Socket is live - any packet counts
	    this.emit('heartbeat');

	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;

	      case 'pong':
	        this.setPing();
	        break;

	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.emit('error', err);
	        break;

	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};

	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */

	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if  ('closed' == this.readyState) return;
	  this.setPing();

	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};

	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */

	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' == self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};

	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */

	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};

	/**
	* Sends a ping packet.
	*
	* @api public
	*/

	Socket.prototype.ping = function () {
	  this.sendPacket('ping');
	};

	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */

	Socket.prototype.onDrain = function() {
	  for (var i = 0; i < this.prevBufferLen; i++) {
	    if (this.callbackBuffer[i]) {
	      this.callbackBuffer[i]();
	    }
	  }

	  this.writeBuffer.splice(0, this.prevBufferLen);
	  this.callbackBuffer.splice(0, this.prevBufferLen);

	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;

	  if (this.writeBuffer.length == 0) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};

	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */

	Socket.prototype.flush = function () {
	  if ('closed' != this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};

	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @return {Socket} for chaining.
	 * @api public
	 */

	Socket.prototype.write =
	Socket.prototype.send = function (msg, fn) {
	  this.sendPacket('message', msg, fn);
	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Function} callback function.
	 * @api private
	 */

	Socket.prototype.sendPacket = function (type, data, fn) {
	  if ('closing' == this.readyState || 'closed' == this.readyState) {
	    return;
	  }

	  var packet = { type: type, data: data };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  this.callbackBuffer.push(fn);
	  this.flush();
	};

	/**
	 * Closes the connection.
	 *
	 * @api private
	 */

	Socket.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.readyState = 'closing';

	    var self = this;

	    function close() {
	      self.onClose('forced close');
	      debug('socket closing - telling transport to close');
	      self.transport.close();
	    }

	    function cleanupAndClose() {
	      self.removeListener('upgrade', cleanupAndClose);
	      self.removeListener('upgradeError', cleanupAndClose);
	      close();
	    }

	    function waitForUpgrade() {
	      // wait for upgrade to finish since we can't send packets while pausing a transport
	      self.once('upgrade', cleanupAndClose);
	      self.once('upgradeError', cleanupAndClose);
	    }

	    if (this.writeBuffer.length) {
	      this.once('drain', function() {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }

	  return this;
	};

	/**
	 * Called upon transport error
	 *
	 * @api private
	 */

	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};

	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */

	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;

	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);

	    // clean buffers in next tick, so developers can still
	    // grab the buffers on `close` event
	    setTimeout(function() {
	      self.writeBuffer = [];
	      self.callbackBuffer = [];
	      self.prevBufferLen = 0;
	    }, 0);

	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');

	    // ensure transport won't stay open
	    this.transport.close();

	    // ignore further transport communication
	    this.transport.removeAllListeners();

	    // set ready state
	    this.readyState = 'closed';

	    // clear session id
	    this.id = null;

	    // emit close event
	    this.emit('close', reason, desc);
	  }
	};

	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */

	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i<j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(27);
	var XHR = __webpack_require__(31);
	var JSONP = __webpack_require__(48);
	var websocket = __webpack_require__(49);

	/**
	 * Export transports.
	 */

	exports.polling = polling;
	exports.websocket = websocket;

	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */

	function polling(opts){
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    xd = opts.hostname != location.hostname || port != opts.port;
	    xs = opts.secure != isSSL;
	  }

	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);

	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	var hasCORS = __webpack_require__(28);

	module.exports = function(opts) {
	  var xdomain = opts.xdomain;

	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;

	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;

	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }

	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }

	  if (!xdomain) {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch(e) { }
	  }
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var global = __webpack_require__(30);

	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */

	try {
	  module.exports = 'XMLHttpRequest' in global &&
	    'withCredentials' in new global.XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Returns `this`. Execute this without a "context" (i.e. without it being
	 * attached to an object of the left-hand side), and `this` points to the
	 * "global" scope of the current JS execution.
	 */

	module.exports = (function () { return this; })();


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(27);
	var Polling = __webpack_require__(32);
	var Emitter = __webpack_require__(16);
	var inherit = __webpack_require__(33);
	var debug = __webpack_require__(45)('engine.io-client:polling-xhr');

	/**
	 * Module exports.
	 */

	module.exports = XHR;
	module.exports.Request = Request;

	/**
	 * Empty function
	 */

	function empty(){}

	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function XHR(opts){
	  Polling.call(this, opts);

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    this.xd = opts.hostname != global.location.hostname ||
	      port != opts.port;
	    this.xs = opts.secure != isSSL;
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(XHR, Polling);

	/**
	 * XHR supports binary
	 */

	XHR.prototype.supportsBinary = true;

	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */

	XHR.prototype.request = function(opts){
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  return new Request(opts);
	};

	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */

	XHR.prototype.doWrite = function(data, fn){
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function(err){
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	XHR.prototype.doPoll = function(){
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function(data){
	    self.onData(data);
	  });
	  req.on('error', function(err){
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};

	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Request(opts){
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined != opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  this.create();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */

	Request.prototype.create = function(){
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;

	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }

	    if ('POST' == this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }

	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }

	    if (this.hasXDR()) {
	      xhr.onload = function(){
	        self.onLoad();
	      };
	      xhr.onerror = function(){
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function(){
	        if (4 != xhr.readyState) return;
	        if (200 == xhr.status || 1223 == xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function(){
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }

	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function() {
	      self.onError(e);
	    }, 0);
	    return;
	  }

	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};

	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */

	Request.prototype.onSuccess = function(){
	  this.emit('success');
	  this.cleanup();
	};

	/**
	 * Called if we have data.
	 *
	 * @api private
	 */

	Request.prototype.onData = function(data){
	  this.emit('data', data);
	  this.onSuccess();
	};

	/**
	 * Called upon error.
	 *
	 * @api private
	 */

	Request.prototype.onError = function(err){
	  this.emit('error', err);
	  this.cleanup(true);
	};

	/**
	 * Cleans up house.
	 *
	 * @api private
	 */

	Request.prototype.cleanup = function(fromError){
	  if ('undefined' == typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }

	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch(e) {}
	  }

	  if (global.document) {
	    delete Request.requests[this.index];
	  }

	  this.xhr = null;
	};

	/**
	 * Called upon load.
	 *
	 * @api private
	 */

	Request.prototype.onLoad = function(){
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        data = 'ok';
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};

	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */

	Request.prototype.hasXDR = function(){
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};

	/**
	 * Aborts the request.
	 *
	 * @api public
	 */

	Request.prototype.abort = function(){
	  this.cleanup();
	};

	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */

	if (global.document) {
	  Request.requestsCount = 0;
	  Request.requests = {};
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}

	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(34);
	var parseqs = __webpack_require__(44);
	var parser = __webpack_require__(35);
	var inherit = __webpack_require__(33);
	var debug = __webpack_require__(45)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = (function() {
	  var XMLHttpRequest = __webpack_require__(27);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();

	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */

	function Polling(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(Polling, Transport);

	/**
	 * Transport name.
	 */

	Polling.prototype.name = 'polling';

	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */

	Polling.prototype.doOpen = function(){
	  this.poll();
	};

	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */

	Polling.prototype.pause = function(onPause){
	  var pending = 0;
	  var self = this;

	  this.readyState = 'pausing';

	  function pause(){
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }

	  if (this.polling || !this.writable) {
	    var total = 0;

	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function(){
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }

	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function(){
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};

	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */

	Polling.prototype.poll = function(){
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};

	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */

	Polling.prototype.onData = function(data){
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' == self.readyState) {
	      self.onOpen();
	    }

	    // if its a close packet, we close the ongoing requests
	    if ('close' == packet.type) {
	      self.onClose();
	      return false;
	    }

	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };

	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);

	  // if an event did not trigger closing
	  if ('closed' != this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');

	    if ('open' == this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};

	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */

	Polling.prototype.doClose = function(){
	  var self = this;

	  function close(){
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }

	  if ('open' == this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};

	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */

	Polling.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  var callbackfn = function() {
	    self.writable = true;
	    self.emit('drain');
	  };

	  var self = this;
	  parser.encodePayload(packets, this.supportsBinary, function(data) {
	    self.doWrite(data, callbackfn);
	  });
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	Polling.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';

	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = +new Date + '-' + Transport.timestamps++;
	  }

	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // avoid port if default for schema
	  if (this.port && (('https' == schema && this.port != 443) ||
	     ('http' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  return schema + '://' + this.hostname + port + this.path + query;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(35);
	var Emitter = __webpack_require__(16);

	/**
	 * Module exports.
	 */

	module.exports = Transport;

	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */

	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Transport.prototype);

	/**
	 * A counter used to prevent collisions in the timestamps used
	 * for cache busting.
	 */

	Transport.timestamps = 0;

	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */

	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};

	/**
	 * Opens the transport.
	 *
	 * @api public
	 */

	Transport.prototype.open = function () {
	  if ('closed' == this.readyState || '' == this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }

	  return this;
	};

	/**
	 * Closes the transport.
	 *
	 * @api private
	 */

	Transport.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.doClose();
	    this.onClose();
	  }

	  return this;
	};

	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */

	Transport.prototype.send = function(packets){
	  if ('open' == this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};

	/**
	 * Called upon open
	 *
	 * @api private
	 */

	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};

	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */

	Transport.prototype.onData = function(data){
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};

	/**
	 * Called with a decoded packet.
	 */

	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon close.
	 *
	 * @api private
	 */

	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var keys = __webpack_require__(36);
	var hasBinary = __webpack_require__(37);
	var sliceBuffer = __webpack_require__(39);
	var base64encoder = __webpack_require__(40);
	var after = __webpack_require__(41);
	var utf8 = __webpack_require__(42);

	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */

	var isAndroid = navigator.userAgent.match(/Android/i);

	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;

	/**
	 * Current protocol version.
	 */

	exports.protocol = 3;

	/**
	 * Packet types.
	 */

	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};

	var packetslist = keys(packets);

	/**
	 * Premade error packet.
	 */

	var err = { type: 'error', data: 'parser error' };

	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */

	var Blob = __webpack_require__(43);

	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */

	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }

	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }

	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;

	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }

	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }

	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];

	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }

	  return callback('' + encoded);

	};

	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}

	/**
	 * Encode packet helpers for binary types
	 */

	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);

	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }

	  return callback(resultBuffer.buffer);
	}

	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}

	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }

	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);

	  return callback(blob);
	}

	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */

	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }

	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};

	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */

	exports.decodePacket = function (data, binaryType, utf8decode) {
	  // String data
	  if (typeof data == 'string' || data === undefined) {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }

	    if (utf8decode) {
	      try {
	        data = utf8.decode(data);
	      } catch (e) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);

	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }

	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }

	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};

	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */

	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!global.ArrayBuffer) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }

	  var data = base64encoder.decode(msg.substr(1));

	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }

	  return { type: type, data: data };
	};

	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */

	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  var isBinary = hasBinary(packets);

	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }

	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }

	  if (!packets.length) {
	    return callback('0:');
	  }

	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};

	/**
	 * Async array map using after
	 */

	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);

	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };

	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}

	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */

	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }

	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	  var length = ''
	    , n, msg;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);

	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      msg = data.substr(i + 1, n);

	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);

	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }

	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }

	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }

	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	};

	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */

	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }

	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);

	    var resultArray = new Uint8Array(totalLength);

	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }

	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }

	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;

	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });

	    return callback(resultArray.buffer);
	  });
	};

	/**
	 * Encode as Blob
	 */

	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }

	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;

	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;

	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};

	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */

	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var bufferTail = data;
	  var buffers = [];

	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';

	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;

	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }

	      msgLength += tailArray[i];
	    }

	    if(numberTooLong) return callback(err, 0, 1);

	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);

	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }

	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }

	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */

	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;

	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(38);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (obj.hasOwnProperty(key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */

	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;

	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }

	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }

	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(chars){
	  "use strict";

	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";

	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }

	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }

	    return base64;
	  };

	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;

	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }

	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);

	    for (i = 0; i < len; i+=4) {
	      encoded1 = chars.indexOf(base64[i]);
	      encoded2 = chars.indexOf(base64[i+1]);
	      encoded3 = chars.indexOf(base64[i+2]);
	      encoded4 = chars.indexOf(base64[i+3]);

	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }

	    return arraybuffer;
	  };
	})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = after

	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count

	    return (count === 0) ? callback() : proxy

	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count

	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}

	function noop() {}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! http://mths.be/utf8js v2.0.0 by @mathias */
	;(function(root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from http://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from http://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}

		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}

		function utf8encode(string) {
			var codePoints = ucs2decode(string);

			// console.log(JSON.stringify(codePoints.map(function(x) {
			// 	return 'U+' + x.toString(16).toUpperCase();
			// })));

			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid UTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), (function() { return this; }())))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */

	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;

	/**
	 * Check if Blob constructor is supported
	 */

	var blobSupported = (function() {
	  try {
	    var b = new Blob(['hi']);
	    return b.size == 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if BlobBuilder is supported
	 */

	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;

	function BlobBuilderConstructor(ary, options) {
	  options = options || {};

	  var bb = new BlobBuilder();
	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }
	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};

	module.exports = (function() {
	  if (blobSupported) {
	    return global.Blob;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */

	exports.encode = function (obj) {
	  var str = '';

	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }

	  return str;
	};

	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */

	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(46);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // This hackery is required for IE8,
	  // where the `console.log` function doesn't have 'apply'
	  return 'object' == typeof console
	    && 'function' == typeof console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      localStorage.removeItem('debug');
	    } else {
	      localStorage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = localStorage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(47);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 's':
	      return n * s;
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(32);
	var inherit = __webpack_require__(33);

	/**
	 * Module exports.
	 */

	module.exports = JSONPPolling;

	/**
	 * Cached regular expressions.
	 */

	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;

	/**
	 * Global JSONP callbacks.
	 */

	var callbacks;

	/**
	 * Callbacks count.
	 */

	var index = 0;

	/**
	 * Noop.
	 */

	function empty () { }

	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */

	function JSONPPolling (opts) {
	  Polling.call(this, opts);

	  this.query = this.query || {};

	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }

	  // callback identifier
	  this.index = callbacks.length;

	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });

	  // append to query string
	  this.query.j = this.index;

	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(JSONPPolling, Polling);

	/*
	 * JSONP only supports binary as base64 encoded strings
	 */

	JSONPPolling.prototype.supportsBinary = false;

	/**
	 * Closes the socket.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }

	  Polling.prototype.doClose.call(this);
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');

	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function(e){
	    self.onError('jsonp poll error',e);
	  };

	  var insertAt = document.getElementsByTagName('script')[0];
	  insertAt.parentNode.insertBefore(script, insertAt);
	  this.script = script;

	  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
	  
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};

	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */

	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;

	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;

	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);

	    this.form = form;
	    this.area = area;
	  }

	  this.form.action = this.uri();

	  function complete () {
	    initIframe();
	    fn();
	  }

	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }

	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }

	    iframe.id = self.iframeId;

	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }

	  initIframe();

	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');

	  try {
	    this.form.submit();
	  } catch(e) {}

	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function(){
	      if (self.iframe.readyState == 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(34);
	var parser = __webpack_require__(35);
	var parseqs = __webpack_require__(44);
	var inherit = __webpack_require__(33);
	var debug = __webpack_require__(45)('engine.io-client:websocket');

	/**
	 * `ws` exposes a WebSocket-compatible interface in
	 * Node, or the `WebSocket` or `MozWebSocket` globals
	 * in the browser.
	 */

	var WebSocket = __webpack_require__(50);

	/**
	 * Module exports.
	 */

	module.exports = WS;

	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */

	function WS(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(WS, Transport);

	/**
	 * Transport name.
	 *
	 * @api public
	 */

	WS.prototype.name = 'websocket';

	/*
	 * WebSockets support binary
	 */

	WS.prototype.supportsBinary = true;

	/**
	 * Opens socket.
	 *
	 * @api private
	 */

	WS.prototype.doOpen = function(){
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }

	  var self = this;
	  var uri = this.uri();
	  var protocols = void(0);
	  var opts = { agent: this.agent };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  this.ws = new WebSocket(uri, protocols, opts);

	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }

	  this.ws.binaryType = 'arraybuffer';
	  this.addEventListeners();
	};

	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */

	WS.prototype.addEventListeners = function(){
	  var self = this;

	  this.ws.onopen = function(){
	    self.onOpen();
	  };
	  this.ws.onclose = function(){
	    self.onClose();
	  };
	  this.ws.onmessage = function(ev){
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function(e){
	    self.onError('websocket error', e);
	  };
	};

	/**
	 * Override `onData` to use a timer on iOS.
	 * See: https://gist.github.com/mloughran/2052006
	 *
	 * @api private
	 */

	if ('undefined' != typeof navigator
	  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
	  WS.prototype.onData = function(data){
	    var self = this;
	    setTimeout(function(){
	      Transport.prototype.onData.call(self, data);
	    }, 0);
	  };
	}

	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */

	WS.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  for (var i = 0, l = packets.length; i < l; i++) {
	    parser.encodePacket(packets[i], this.supportsBinary, function(data) {
	      //Sometimes the websocket has already been closed but the browser didn't
	      //have a chance of informing us about it yet, in that case send will
	      //throw an error
	      try {
	        self.ws.send(data);
	      } catch (e){
	        debug('websocket closed before onclose event');
	      }
	    });
	  }

	  function ondrain() {
	    self.writable = true;
	    self.emit('drain');
	  }
	  // fake drain
	  // defer to next tick to allow Socket to clear writeBuffer
	  setTimeout(ondrain, 0);
	};

	/**
	 * Called upon close
	 *
	 * @api private
	 */

	WS.prototype.onClose = function(){
	  Transport.prototype.onClose.call(this);
	};

	/**
	 * Closes socket.
	 *
	 * @api private
	 */

	WS.prototype.doClose = function(){
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	WS.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';

	  // avoid port if default for schema
	  if (this.port && (('wss' == schema && this.port != 443)
	    || ('ws' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = +new Date;
	  }

	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  return schema + '://' + this.hostname + port + this.path + query;
	};

	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */

	WS.prototype.check = function(){
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var global = (function() { return this; })();

	/**
	 * WebSocket constructor.
	 */

	var WebSocket = global.WebSocket || global.MozWebSocket;

	/**
	 * Module exports.
	 */

	module.exports = WebSocket ? ws : null;

	/**
	 * WebSocket constructor.
	 *
	 * The third `opts` options object gets ignored in web browsers, since it's
	 * non-standard, and throws a TypeError if passed to the constructor.
	 * See: https://github.com/einaros/ws/issues/227
	 *
	 * @param {String} uri
	 * @param {Array} protocols (optional)
	 * @param {Object) opts (optional)
	 * @api public
	 */

	function ws(uri, protocols, opts) {
	  var instance;
	  if (protocols) {
	    instance = new WebSocket(uri, protocols);
	  } else {
	    instance = new WebSocket(uri);
	  }
	  return instance;
	}

	if (WebSocket) ws.prototype = WebSocket.prototype;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	
	var indexOf = [].indexOf;

	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');

	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }

	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;

	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }

	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }

	    return uri;
	};


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */

	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;

	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }

	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }

	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(15);
	var Emitter = __webpack_require__(16);
	var toArray = __webpack_require__(55);
	var on = __webpack_require__(56);
	var bind = __webpack_require__(57);
	var debug = __webpack_require__(12)('socket.io-client:socket');
	var hasBin = __webpack_require__(58);

	/**
	 * Module exports.
	 */

	module.exports = exports = Socket;

	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */

	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1
	};

	/**
	 * Shortcut to `Emitter#emit`.
	 */

	var emit = Emitter.prototype.emit;

	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */

	function Socket(io, nsp){
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  if (this.io.autoConnect) this.open();
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */

	Socket.prototype.subEvents = function() {
	  if (this.subs) return;

	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};

	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */

	Socket.prototype.open =
	Socket.prototype.connect = function(){
	  if (this.connected) return this;

	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' == this.io.readyState) this.onopen();
	  return this;
	};

	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.send = function(){
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};

	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.emit = function(ev){
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }

	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
	  var packet = { type: parserType, data: args };

	  // event ack callback
	  if ('function' == typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }

	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }

	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.packet = function(packet){
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};

	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */

	Socket.prototype.onopen = function(){
	  debug('transport is open - connecting');

	  // write connect packet if necessary
	  if ('/' != this.nsp) {
	    this.packet({ type: parser.CONNECT });
	  }
	};

	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */

	Socket.prototype.onclose = function(reason){
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};

	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onpacket = function(packet){
	  if (packet.nsp != this.nsp) return;

	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;

	    case parser.EVENT:
	      this.onevent(packet);
	      break;

	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;

	    case parser.ACK:
	      this.onack(packet);
	      break;

	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;

	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;

	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};

	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onevent = function(packet){
	  var args = packet.data || [];
	  debug('emitting event %j', args);

	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }

	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};

	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */

	Socket.prototype.ack = function(id){
	  var self = this;
	  var sent = false;
	  return function(){
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);

	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};

	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onack = function(packet){
	  debug('calling ack %s with %j', packet.id, packet.data);
	  var fn = this.acks[packet.id];
	  fn.apply(this, packet.data);
	  delete this.acks[packet.id];
	};

	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */

	Socket.prototype.onconnect = function(){
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};

	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */

	Socket.prototype.emitBuffered = function(){
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];

	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};

	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */

	Socket.prototype.ondisconnect = function(){
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};

	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */

	Socket.prototype.destroy = function(){
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }

	  this.io.destroy(this);
	};

	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.close =
	Socket.prototype.disconnect = function(){
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }

	  // remove socket from pool
	  this.destroy();

	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = toArray

	function toArray(list, index) {
	    var array = []

	    index = index || 0

	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }

	    return array
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module exports.
	 */

	module.exports = on;

	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */

	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function(){
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Slice reference.
	 */

	var slice = [].slice;

	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */

	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(59);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * HOP ref.
	 */

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Return own keys in `obj`.
	 *
	 * @param {Object} obj
	 * @return {Array}
	 * @api public
	 */

	exports.keys = Object.keys || function(obj){
	  var keys = [];
	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      keys.push(key);
	    }
	  }
	  return keys;
	};

	/**
	 * Return own values in `obj`.
	 *
	 * @param {Object} obj
	 * @return {Array}
	 * @api public
	 */

	exports.values = function(obj){
	  var vals = [];
	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      vals.push(obj[key]);
	    }
	  }
	  return vals;
	};

	/**
	 * Merge `b` into `a`.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api public
	 */

	exports.merge = function(a, b){
	  for (var key in b) {
	    if (has.call(b, key)) {
	      a[key] = b[key];
	    }
	  }
	  return a;
	};

	/**
	 * Return length of `obj`.
	 *
	 * @param {Object} obj
	 * @return {Number}
	 * @api public
	 */

	exports.length = function(obj){
	  return exports.keys(obj).length;
	};

	/**
	 * Check if `obj` is empty.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api public
	 */

	exports.isEmpty = function(obj){
	  return 0 == exports.length(obj);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Backoff`.
	 */

	module.exports = Backoff;

	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}

	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */

	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};

	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */

	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};

	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};

	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};

	/**
	 * Set the jitter
	 *
	 * @api public
	 */

	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};



/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Chart.js
	 * http://chartjs.org/
	 * Version: 1.0.2
	 *
	 * Copyright 2015 Nick Downie
	 * Released under the MIT license
	 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
	 */


	(function(){

		"use strict";

		//Declare root variable - window in the browser, global on the server
		var root = this,
			previous = root.Chart;

		//Occupy the global variable of Chart, and create a simple base class
		var Chart = function(context){
			var chart = this;
			this.canvas = context.canvas;

			this.ctx = context;

			//Variables global to the chart
			var computeDimension = function(element,dimension)
			{
				if (element['offset'+dimension])
				{
					return element['offset'+dimension];
				}
				else
				{
					return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
				}
			}

			var width = this.width = computeDimension(context.canvas,'Width');
			var height = this.height = computeDimension(context.canvas,'Height');

			// Firefox requires this to work correctly
			context.canvas.width  = width;
			context.canvas.height = height;

			var width = this.width = context.canvas.width;
			var height = this.height = context.canvas.height;
			this.aspectRatio = this.width / this.height;
			//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
			helpers.retinaScale(this);

			return this;
		};
		//Globally expose the defaults to allow for user updating/changing
		Chart.defaults = {
			global: {
				// Boolean - Whether to animate the chart
				animation: true,

				// Number - Number of animation steps
				animationSteps: 60,

				// String - Animation easing effect
				animationEasing: "easeOutQuart",

				// Boolean - If we should show the scale at all
				showScale: true,

				// Boolean - If we want to override with a hard coded scale
				scaleOverride: false,

				// ** Required if scaleOverride is true **
				// Number - The number of steps in a hard coded scale
				scaleSteps: null,
				// Number - The value jump in the hard coded scale
				scaleStepWidth: null,
				// Number - The scale starting value
				scaleStartValue: null,

				// String - Colour of the scale line
				scaleLineColor: "rgba(0,0,0,.1)",

				// Number - Pixel width of the scale line
				scaleLineWidth: 1,

				// Boolean - Whether to show labels on the scale
				scaleShowLabels: true,

				// Interpolated JS string - can access value
				scaleLabel: "<%=value%>",

				// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
				scaleIntegersOnly: true,

				// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
				scaleBeginAtZero: false,

				// String - Scale label font declaration for the scale label
				scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

				// Number - Scale label font size in pixels
				scaleFontSize: 12,

				// String - Scale label font weight style
				scaleFontStyle: "normal",

				// String - Scale label font colour
				scaleFontColor: "#666",

				// Boolean - whether or not the chart should be responsive and resize when the browser does.
				responsive: false,

				// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
				maintainAspectRatio: true,

				// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
				showTooltips: true,

				// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
				customTooltips: false,

				// Array - Array of string names to attach tooltip events
				tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

				// String - Tooltip background colour
				tooltipFillColor: "rgba(0,0,0,0.8)",

				// String - Tooltip label font declaration for the scale label
				tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

				// Number - Tooltip label font size in pixels
				tooltipFontSize: 14,

				// String - Tooltip font weight style
				tooltipFontStyle: "normal",

				// String - Tooltip label font colour
				tooltipFontColor: "#fff",

				// String - Tooltip title font declaration for the scale label
				tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

				// Number - Tooltip title font size in pixels
				tooltipTitleFontSize: 14,

				// String - Tooltip title font weight style
				tooltipTitleFontStyle: "bold",

				// String - Tooltip title font colour
				tooltipTitleFontColor: "#fff",

				// Number - pixel width of padding around tooltip text
				tooltipYPadding: 6,

				// Number - pixel width of padding around tooltip text
				tooltipXPadding: 6,

				// Number - Size of the caret on the tooltip
				tooltipCaretSize: 8,

				// Number - Pixel radius of the tooltip border
				tooltipCornerRadius: 6,

				// Number - Pixel offset from point x to tooltip edge
				tooltipXOffset: 10,

				// String - Template string for single tooltips
				tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

				// String - Template string for single tooltips
				multiTooltipTemplate: "<%= value %>",

				// String - Colour behind the legend colour block
				multiTooltipKeyBackground: '#fff',

				// Function - Will fire on animation progression.
				onAnimationProgress: function(){},

				// Function - Will fire on animation completion.
				onAnimationComplete: function(){}

			}
		};

		//Create a dictionary of chart types, to allow for extension of existing types
		Chart.types = {};

		//Global Chart helpers object for utility methods and classes
		var helpers = Chart.helpers = {};

			//-- Basic js utility methods
		var each = helpers.each = function(loopable,callback,self){
				var additionalArgs = Array.prototype.slice.call(arguments, 3);
				// Check to see if null or undefined firstly.
				if (loopable){
					if (loopable.length === +loopable.length){
						var i;
						for (i=0; i<loopable.length; i++){
							callback.apply(self,[loopable[i], i].concat(additionalArgs));
						}
					}
					else{
						for (var item in loopable){
							callback.apply(self,[loopable[item],item].concat(additionalArgs));
						}
					}
				}
			},
			clone = helpers.clone = function(obj){
				var objClone = {};
				each(obj,function(value,key){
					if (obj.hasOwnProperty(key)) objClone[key] = value;
				});
				return objClone;
			},
			extend = helpers.extend = function(base){
				each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
					each(extensionObject,function(value,key){
						if (extensionObject.hasOwnProperty(key)) base[key] = value;
					});
				});
				return base;
			},
			merge = helpers.merge = function(base,master){
				//Merge properties in left object over to a shallow clone of object right.
				var args = Array.prototype.slice.call(arguments,0);
				args.unshift({});
				return extend.apply(null, args);
			},
			indexOf = helpers.indexOf = function(arrayToSearch, item){
				if (Array.prototype.indexOf) {
					return arrayToSearch.indexOf(item);
				}
				else{
					for (var i = 0; i < arrayToSearch.length; i++) {
						if (arrayToSearch[i] === item) return i;
					}
					return -1;
				}
			},
			where = helpers.where = function(collection, filterCallback){
				var filtered = [];

				helpers.each(collection, function(item){
					if (filterCallback(item)){
						filtered.push(item);
					}
				});

				return filtered;
			},
			findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
				// Default to start of the array
				if (!startIndex){
					startIndex = -1;
				}
				for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
					var currentItem = arrayToSearch[i];
					if (filterCallback(currentItem)){
						return currentItem;
					}
				}
			},
			findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
				// Default to end of the array
				if (!startIndex){
					startIndex = arrayToSearch.length;
				}
				for (var i = startIndex - 1; i >= 0; i--) {
					var currentItem = arrayToSearch[i];
					if (filterCallback(currentItem)){
						return currentItem;
					}
				}
			},
			inherits = helpers.inherits = function(extensions){
				//Basic javascript inheritance based on the model created in Backbone.js
				var parent = this;
				var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

				var Surrogate = function(){ this.constructor = ChartElement;};
				Surrogate.prototype = parent.prototype;
				ChartElement.prototype = new Surrogate();

				ChartElement.extend = inherits;

				if (extensions) extend(ChartElement.prototype, extensions);

				ChartElement.__super__ = parent.prototype;

				return ChartElement;
			},
			noop = helpers.noop = function(){},
			uid = helpers.uid = (function(){
				var id=0;
				return function(){
					return "chart-" + id++;
				};
			})(),
			warn = helpers.warn = function(str){
				//Method for warning of errors
				if (window.console && typeof window.console.warn == "function") console.warn(str);
			},
			amd = helpers.amd = ("function" == 'function' && __webpack_require__(18)),
			//-- Math methods
			isNumber = helpers.isNumber = function(n){
				return !isNaN(parseFloat(n)) && isFinite(n);
			},
			max = helpers.max = function(array){
				return Math.max.apply( Math, array );
			},
			min = helpers.min = function(array){
				return Math.min.apply( Math, array );
			},
			cap = helpers.cap = function(valueToCap,maxValue,minValue){
				if(isNumber(maxValue)) {
					if( valueToCap > maxValue ) {
						return maxValue;
					}
				}
				else if(isNumber(minValue)){
					if ( valueToCap < minValue ){
						return minValue;
					}
				}
				return valueToCap;
			},
			getDecimalPlaces = helpers.getDecimalPlaces = function(num){
				if (num%1!==0 && isNumber(num)){
					return num.toString().split(".")[1].length;
				}
				else {
					return 0;
				}
			},
			toRadians = helpers.radians = function(degrees){
				return degrees * (Math.PI/180);
			},
			// Gets the angle from vertical upright to the point about a centre.
			getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
				var distanceFromXCenter = anglePoint.x - centrePoint.x,
					distanceFromYCenter = anglePoint.y - centrePoint.y,
					radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


				var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

				//If the segment is in the top left quadrant, we need to add another rotation to the angle
				if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
					angle += Math.PI*2;
				}

				return {
					angle: angle,
					distance: radialDistanceFromCenter
				};
			},
			aliasPixel = helpers.aliasPixel = function(pixelWidth){
				return (pixelWidth % 2 === 0) ? 0 : 0.5;
			},
			splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
				//Props to Rob Spencer at scaled innovation for his post on splining between points
				//http://scaledinnovation.com/analytics/splines/aboutSplines.html
				var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
					d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
					fa=t*d01/(d01+d12),// scaling factor for triangle Ta
					fb=t*d12/(d01+d12);
				return {
					inner : {
						x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
						y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
					},
					outer : {
						x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
						y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
					}
				};
			},
			calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
				return Math.floor(Math.log(val) / Math.LN10);
			},
			calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

				//Set a minimum step of two - a point at the top of the graph, and a point at the base
				var minSteps = 2,
					maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
					skipFitting = (minSteps >= maxSteps);

				var maxValue = max(valuesArray),
					minValue = min(valuesArray);

				// We need some degree of seperation here to calculate the scales if all the values are the same
				// Adding/minusing 0.5 will give us a range of 1.
				if (maxValue === minValue){
					maxValue += 0.5;
					// So we don't end up with a graph with a negative start value if we've said always start from zero
					if (minValue >= 0.5 && !startFromZero){
						minValue -= 0.5;
					}
					else{
						// Make up a whole number above the values
						maxValue += 0.5;
					}
				}

				var	valueRange = Math.abs(maxValue - minValue),
					rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
					graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
					graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
					graphRange = graphMax - graphMin,
					stepValue = Math.pow(10, rangeOrderOfMagnitude),
					numberOfSteps = Math.round(graphRange / stepValue);

				//If we have more space on the graph we'll use it to give more definition to the data
				while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
					if(numberOfSteps > maxSteps){
						stepValue *=2;
						numberOfSteps = Math.round(graphRange/stepValue);
						// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
						if (numberOfSteps % 1 !== 0){
							skipFitting = true;
						}
					}
					//We can fit in double the amount of scale points on the scale
					else{
						//If user has declared ints only, and the step value isn't a decimal
						if (integersOnly && rangeOrderOfMagnitude >= 0){
							//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
							if(stepValue/2 % 1 === 0){
								stepValue /=2;
								numberOfSteps = Math.round(graphRange/stepValue);
							}
							//If it would make it a float break out of the loop
							else{
								break;
							}
						}
						//If the scale doesn't have to be an int, make the scale more granular anyway.
						else{
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}

					}
				}

				if (skipFitting){
					numberOfSteps = minSteps;
					stepValue = graphRange / numberOfSteps;
				}

				return {
					steps : numberOfSteps,
					stepValue : stepValue,
					min : graphMin,
					max	: graphMin + (numberOfSteps * stepValue)
				};

			},
			/* jshint ignore:start */
			// Blows up jshint errors based on the new Function constructor
			//Templating methods
			//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
			template = helpers.template = function(templateString, valuesObject){

				// If templateString is function rather than string-template - call the function for valuesObject

				if(templateString instanceof Function){
				 	return templateString(valuesObject);
			 	}

				var cache = {};
				function tmpl(str, data){
					// Figure out if we're getting a template, or if we need to
					// load the template - and be sure to cache the result.
					var fn = !/\W/.test(str) ?
					cache[str] = cache[str] :

					// Generate a reusable function that will serve as a template
					// generator (and which will be cached).
					new Function("obj",
						"var p=[],print=function(){p.push.apply(p,arguments);};" +

						// Introduce the data as local variables using with(){}
						"with(obj){p.push('" +

						// Convert the template into pure JavaScript
						str
							.replace(/[\r\t\n]/g, " ")
							.split("<%").join("\t")
							.replace(/((^|%>)[^\t]*)'/g, "$1\r")
							.replace(/\t=(.*?)%>/g, "',$1,'")
							.split("\t").join("');")
							.split("%>").join("p.push('")
							.split("\r").join("\\'") +
						"');}return p.join('');"
					);

					// Provide some basic currying to the user
					return data ? fn( data ) : fn;
				}
				return tmpl(templateString,valuesObject);
			},
			/* jshint ignore:end */
			generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
				var labelsArray = new Array(numberOfSteps);
				if (labelTemplateString){
					each(labelsArray,function(val,index){
						labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
					});
				}
				return labelsArray;
			},
			//--Animation methods
			//Easing functions adapted from Robert Penner's easing equations
			//http://www.robertpenner.com/easing/
			easingEffects = helpers.easingEffects = {
				linear: function (t) {
					return t;
				},
				easeInQuad: function (t) {
					return t * t;
				},
				easeOutQuad: function (t) {
					return -1 * t * (t - 2);
				},
				easeInOutQuad: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
					return -1 / 2 * ((--t) * (t - 2) - 1);
				},
				easeInCubic: function (t) {
					return t * t * t;
				},
				easeOutCubic: function (t) {
					return 1 * ((t = t / 1 - 1) * t * t + 1);
				},
				easeInOutCubic: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
					return 1 / 2 * ((t -= 2) * t * t + 2);
				},
				easeInQuart: function (t) {
					return t * t * t * t;
				},
				easeOutQuart: function (t) {
					return -1 * ((t = t / 1 - 1) * t * t * t - 1);
				},
				easeInOutQuart: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
					return -1 / 2 * ((t -= 2) * t * t * t - 2);
				},
				easeInQuint: function (t) {
					return 1 * (t /= 1) * t * t * t * t;
				},
				easeOutQuint: function (t) {
					return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
				},
				easeInOutQuint: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
					return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
				},
				easeInSine: function (t) {
					return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
				},
				easeOutSine: function (t) {
					return 1 * Math.sin(t / 1 * (Math.PI / 2));
				},
				easeInOutSine: function (t) {
					return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
				},
				easeInExpo: function (t) {
					return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
				},
				easeOutExpo: function (t) {
					return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
				},
				easeInOutExpo: function (t) {
					if (t === 0) return 0;
					if (t === 1) return 1;
					if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
					return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
				},
				easeInCirc: function (t) {
					if (t >= 1) return t;
					return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
				},
				easeOutCirc: function (t) {
					return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
				},
				easeInOutCirc: function (t) {
					if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
					return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
				},
				easeInElastic: function (t) {
					var s = 1.70158;
					var p = 0;
					var a = 1;
					if (t === 0) return 0;
					if ((t /= 1) == 1) return 1;
					if (!p) p = 1 * 0.3;
					if (a < Math.abs(1)) {
						a = 1;
						s = p / 4;
					} else s = p / (2 * Math.PI) * Math.asin(1 / a);
					return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
				},
				easeOutElastic: function (t) {
					var s = 1.70158;
					var p = 0;
					var a = 1;
					if (t === 0) return 0;
					if ((t /= 1) == 1) return 1;
					if (!p) p = 1 * 0.3;
					if (a < Math.abs(1)) {
						a = 1;
						s = p / 4;
					} else s = p / (2 * Math.PI) * Math.asin(1 / a);
					return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
				},
				easeInOutElastic: function (t) {
					var s = 1.70158;
					var p = 0;
					var a = 1;
					if (t === 0) return 0;
					if ((t /= 1 / 2) == 2) return 1;
					if (!p) p = 1 * (0.3 * 1.5);
					if (a < Math.abs(1)) {
						a = 1;
						s = p / 4;
					} else s = p / (2 * Math.PI) * Math.asin(1 / a);
					if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
					return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
				},
				easeInBack: function (t) {
					var s = 1.70158;
					return 1 * (t /= 1) * t * ((s + 1) * t - s);
				},
				easeOutBack: function (t) {
					var s = 1.70158;
					return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
				},
				easeInOutBack: function (t) {
					var s = 1.70158;
					if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
					return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
				},
				easeInBounce: function (t) {
					return 1 - easingEffects.easeOutBounce(1 - t);
				},
				easeOutBounce: function (t) {
					if ((t /= 1) < (1 / 2.75)) {
						return 1 * (7.5625 * t * t);
					} else if (t < (2 / 2.75)) {
						return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
					} else if (t < (2.5 / 2.75)) {
						return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
					} else {
						return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
					}
				},
				easeInOutBounce: function (t) {
					if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
					return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
				}
			},
			//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
			requestAnimFrame = helpers.requestAnimFrame = (function(){
				return window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					function(callback) {
						return window.setTimeout(callback, 1000 / 60);
					};
			})(),
			cancelAnimFrame = helpers.cancelAnimFrame = (function(){
				return window.cancelAnimationFrame ||
					window.webkitCancelAnimationFrame ||
					window.mozCancelAnimationFrame ||
					window.oCancelAnimationFrame ||
					window.msCancelAnimationFrame ||
					function(callback) {
						return window.clearTimeout(callback, 1000 / 60);
					};
			})(),
			animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

				var currentStep = 0,
					easingFunction = easingEffects[easingString] || easingEffects.linear;

				var animationFrame = function(){
					currentStep++;
					var stepDecimal = currentStep/totalSteps;
					var easeDecimal = easingFunction(stepDecimal);

					callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
					onProgress.call(chartInstance,easeDecimal,stepDecimal);
					if (currentStep < totalSteps){
						chartInstance.animationFrame = requestAnimFrame(animationFrame);
					} else{
						onComplete.apply(chartInstance);
					}
				};
				requestAnimFrame(animationFrame);
			},
			//-- DOM methods
			getRelativePosition = helpers.getRelativePosition = function(evt){
				var mouseX, mouseY;
				var e = evt.originalEvent || evt,
					canvas = evt.currentTarget || evt.srcElement,
					boundingRect = canvas.getBoundingClientRect();

				if (e.touches){
					mouseX = e.touches[0].clientX - boundingRect.left;
					mouseY = e.touches[0].clientY - boundingRect.top;

				}
				else{
					mouseX = e.clientX - boundingRect.left;
					mouseY = e.clientY - boundingRect.top;
				}

				return {
					x : mouseX,
					y : mouseY
				};

			},
			addEvent = helpers.addEvent = function(node,eventType,method){
				if (node.addEventListener){
					node.addEventListener(eventType,method);
				} else if (node.attachEvent){
					node.attachEvent("on"+eventType, method);
				} else {
					node["on"+eventType] = method;
				}
			},
			removeEvent = helpers.removeEvent = function(node, eventType, handler){
				if (node.removeEventListener){
					node.removeEventListener(eventType, handler, false);
				} else if (node.detachEvent){
					node.detachEvent("on"+eventType,handler);
				} else{
					node["on" + eventType] = noop;
				}
			},
			bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
				// Create the events object if it's not already present
				if (!chartInstance.events) chartInstance.events = {};

				each(arrayOfEvents,function(eventName){
					chartInstance.events[eventName] = function(){
						handler.apply(chartInstance, arguments);
					};
					addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
				});
			},
			unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
				each(arrayOfEvents, function(handler,eventName){
					removeEvent(chartInstance.chart.canvas, eventName, handler);
				});
			},
			getMaximumWidth = helpers.getMaximumWidth = function(domNode){
				var container = domNode.parentNode;
				// TODO = check cross browser stuff with this.
				return container.clientWidth;
			},
			getMaximumHeight = helpers.getMaximumHeight = function(domNode){
				var container = domNode.parentNode;
				// TODO = check cross browser stuff with this.
				return container.clientHeight;
			},
			getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
			retinaScale = helpers.retinaScale = function(chart){
				var ctx = chart.ctx,
					width = chart.canvas.width,
					height = chart.canvas.height;

				if (window.devicePixelRatio) {
					ctx.canvas.style.width = width + "px";
					ctx.canvas.style.height = height + "px";
					ctx.canvas.height = height * window.devicePixelRatio;
					ctx.canvas.width = width * window.devicePixelRatio;
					ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
				}
			},
			//-- Canvas methods
			clear = helpers.clear = function(chart){
				chart.ctx.clearRect(0,0,chart.width,chart.height);
			},
			fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
				return fontStyle + " " + pixelSize+"px " + fontFamily;
			},
			longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
				ctx.font = font;
				var longest = 0;
				each(arrayOfStrings,function(string){
					var textWidth = ctx.measureText(string).width;
					longest = (textWidth > longest) ? textWidth : longest;
				});
				return longest;
			},
			drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
				ctx.beginPath();
				ctx.moveTo(x + radius, y);
				ctx.lineTo(x + width - radius, y);
				ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
				ctx.lineTo(x + width, y + height - radius);
				ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
				ctx.lineTo(x + radius, y + height);
				ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
				ctx.lineTo(x, y + radius);
				ctx.quadraticCurveTo(x, y, x + radius, y);
				ctx.closePath();
			};


		//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
		//Destroy method on the chart will remove the instance of the chart from this reference.
		Chart.instances = {};

		Chart.Type = function(data,options,chart){
			this.options = options;
			this.chart = chart;
			this.id = uid();
			//Add the chart instance to the global namespace
			Chart.instances[this.id] = this;

			// Initialize is always called when a chart type is created
			// By default it is a no op, but it should be extended
			if (options.responsive){
				this.resize();
			}
			this.initialize.call(this,data);
		};

		//Core methods that'll be a part of every chart type
		extend(Chart.Type.prototype,{
			initialize : function(){return this;},
			clear : function(){
				clear(this.chart);
				return this;
			},
			stop : function(){
				// Stops any current animation loop occuring
				cancelAnimFrame(this.animationFrame);
				return this;
			},
			resize : function(callback){
				this.stop();
				var canvas = this.chart.canvas,
					newWidth = getMaximumWidth(this.chart.canvas),
					newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

				canvas.width = this.chart.width = newWidth;
				canvas.height = this.chart.height = newHeight;

				retinaScale(this.chart);

				if (typeof callback === "function"){
					callback.apply(this, Array.prototype.slice.call(arguments, 1));
				}
				return this;
			},
			reflow : noop,
			render : function(reflow){
				if (reflow){
					this.reflow();
				}
				if (this.options.animation && !reflow){
					helpers.animationLoop(
						this.draw,
						this.options.animationSteps,
						this.options.animationEasing,
						this.options.onAnimationProgress,
						this.options.onAnimationComplete,
						this
					);
				}
				else{
					this.draw();
					this.options.onAnimationComplete.call(this);
				}
				return this;
			},
			generateLegend : function(){
				return template(this.options.legendTemplate,this);
			},
			destroy : function(){
				this.clear();
				unbindEvents(this, this.events);
				var canvas = this.chart.canvas;

				// Reset canvas height/width attributes starts a fresh with the canvas context
				canvas.width = this.chart.width;
				canvas.height = this.chart.height;

				// < IE9 doesn't support removeProperty
				if (canvas.style.removeProperty) {
					canvas.style.removeProperty('width');
					canvas.style.removeProperty('height');
				} else {
					canvas.style.removeAttribute('width');
					canvas.style.removeAttribute('height');
				}

				delete Chart.instances[this.id];
			},
			showTooltip : function(ChartElements, forceRedraw){
				// Only redraw the chart if we've actually changed what we're hovering on.
				if (typeof this.activeElements === 'undefined') this.activeElements = [];

				var isChanged = (function(Elements){
					var changed = false;

					if (Elements.length !== this.activeElements.length){
						changed = true;
						return changed;
					}

					each(Elements, function(element, index){
						if (element !== this.activeElements[index]){
							changed = true;
						}
					}, this);
					return changed;
				}).call(this, ChartElements);

				if (!isChanged && !forceRedraw){
					return;
				}
				else{
					this.activeElements = ChartElements;
				}
				this.draw();
				if(this.options.customTooltips){
					this.options.customTooltips(false);
				}
				if (ChartElements.length > 0){
					// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
					if (this.datasets && this.datasets.length > 1) {
						var dataArray,
							dataIndex;

						for (var i = this.datasets.length - 1; i >= 0; i--) {
							dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
							dataIndex = indexOf(dataArray, ChartElements[0]);
							if (dataIndex !== -1){
								break;
							}
						}
						var tooltipLabels = [],
							tooltipColors = [],
							medianPosition = (function(index) {

								// Get all the points at that particular index
								var Elements = [],
									dataCollection,
									xPositions = [],
									yPositions = [],
									xMax,
									yMax,
									xMin,
									yMin;
								helpers.each(this.datasets, function(dataset){
									dataCollection = dataset.points || dataset.bars || dataset.segments;
									if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
										Elements.push(dataCollection[dataIndex]);
									}
								});

								helpers.each(Elements, function(element) {
									xPositions.push(element.x);
									yPositions.push(element.y);


									//Include any colour information about the element
									tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
									tooltipColors.push({
										fill: element._saved.fillColor || element.fillColor,
										stroke: element._saved.strokeColor || element.strokeColor
									});

								}, this);

								yMin = min(yPositions);
								yMax = max(yPositions);

								xMin = min(xPositions);
								xMax = max(xPositions);

								return {
									x: (xMin > this.chart.width/2) ? xMin : xMax,
									y: (yMin + yMax)/2
								};
							}).call(this, dataIndex);

						new Chart.MultiTooltip({
							x: medianPosition.x,
							y: medianPosition.y,
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							xOffset: this.options.tooltipXOffset,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							titleTextColor: this.options.tooltipTitleFontColor,
							titleFontFamily: this.options.tooltipTitleFontFamily,
							titleFontStyle: this.options.tooltipTitleFontStyle,
							titleFontSize: this.options.tooltipTitleFontSize,
							cornerRadius: this.options.tooltipCornerRadius,
							labels: tooltipLabels,
							legendColors: tooltipColors,
							legendColorBackground : this.options.multiTooltipKeyBackground,
							title: ChartElements[0].label,
							chart: this.chart,
							ctx: this.chart.ctx,
							custom: this.options.customTooltips
						}).draw();

					} else {
						each(ChartElements, function(Element) {
							var tooltipPosition = Element.tooltipPosition();
							new Chart.Tooltip({
								x: Math.round(tooltipPosition.x),
								y: Math.round(tooltipPosition.y),
								xPadding: this.options.tooltipXPadding,
								yPadding: this.options.tooltipYPadding,
								fillColor: this.options.tooltipFillColor,
								textColor: this.options.tooltipFontColor,
								fontFamily: this.options.tooltipFontFamily,
								fontStyle: this.options.tooltipFontStyle,
								fontSize: this.options.tooltipFontSize,
								caretHeight: this.options.tooltipCaretSize,
								cornerRadius: this.options.tooltipCornerRadius,
								text: template(this.options.tooltipTemplate, Element),
								chart: this.chart,
								custom: this.options.customTooltips
							}).draw();
						}, this);
					}
				}
				return this;
			},
			toBase64Image : function(){
				return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
			}
		});

		Chart.Type.extend = function(extensions){

			var parent = this;

			var ChartType = function(){
				return parent.apply(this,arguments);
			};

			//Copy the prototype object of the this class
			ChartType.prototype = clone(parent.prototype);
			//Now overwrite some of the properties in the base class with the new extensions
			extend(ChartType.prototype, extensions);

			ChartType.extend = Chart.Type.extend;

			if (extensions.name || parent.prototype.name){

				var chartName = extensions.name || parent.prototype.name;
				//Assign any potential default values of the new chart type

				//If none are defined, we'll use a clone of the chart type this is being extended from.
				//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
				//doesn't define some defaults of their own.

				var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

				Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

				Chart.types[chartName] = ChartType;

				//Register this new chart type in the Chart prototype
				Chart.prototype[chartName] = function(data,options){
					var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
					return new ChartType(data,config,this);
				};
			} else{
				warn("Name not provided for this chart, so it hasn't been registered");
			}
			return parent;
		};

		Chart.Element = function(configuration){
			extend(this,configuration);
			this.initialize.apply(this,arguments);
			this.save();
		};
		extend(Chart.Element.prototype,{
			initialize : function(){},
			restore : function(props){
				if (!props){
					extend(this,this._saved);
				} else {
					each(props,function(key){
						this[key] = this._saved[key];
					},this);
				}
				return this;
			},
			save : function(){
				this._saved = clone(this);
				delete this._saved._saved;
				return this;
			},
			update : function(newProps){
				each(newProps,function(value,key){
					this._saved[key] = this[key];
					this[key] = value;
				},this);
				return this;
			},
			transition : function(props,ease){
				each(props,function(value,key){
					this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
				},this);
				return this;
			},
			tooltipPosition : function(){
				return {
					x : this.x,
					y : this.y
				};
			},
			hasValue: function(){
				return isNumber(this.value);
			}
		});

		Chart.Element.extend = inherits;


		Chart.Point = Chart.Element.extend({
			display: true,
			inRange: function(chartX,chartY){
				var hitDetectionRange = this.hitDetectionRadius + this.radius;
				return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
			},
			draw : function(){
				if (this.display){
					var ctx = this.ctx;
					ctx.beginPath();

					ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
					ctx.closePath();

					ctx.strokeStyle = this.strokeColor;
					ctx.lineWidth = this.strokeWidth;

					ctx.fillStyle = this.fillColor;

					ctx.fill();
					ctx.stroke();
				}


				//Quick debug for bezier curve splining
				//Highlights control points and the line between them.
				//Handy for dev - stripped in the min version.

				// ctx.save();
				// ctx.fillStyle = "black";
				// ctx.strokeStyle = "black"
				// ctx.beginPath();
				// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
				// ctx.fill();

				// ctx.beginPath();
				// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
				// ctx.fill();

				// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
				// ctx.lineTo(this.x, this.y);
				// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
				// ctx.stroke();

				// ctx.restore();



			}
		});

		Chart.Arc = Chart.Element.extend({
			inRange : function(chartX,chartY){

				var pointRelativePosition = helpers.getAngleFromPoint(this, {
					x: chartX,
					y: chartY
				});

				//Check if within the range of the open/close angle
				var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
					withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

				return (betweenAngles && withinRadius);
				//Ensure within the outside of the arc centre, but inside arc outer
			},
			tooltipPosition : function(){
				var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
					rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
				return {
					x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
					y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
				};
			},
			draw : function(animationPercent){

				var easingDecimal = animationPercent || 1;

				var ctx = this.ctx;

				ctx.beginPath();

				ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);

				ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);

				ctx.closePath();
				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.lineJoin = 'bevel';

				if (this.showStroke){
					ctx.stroke();
				}
			}
		});

		Chart.Rectangle = Chart.Element.extend({
			draw : function(){
				var ctx = this.ctx,
					halfWidth = this.width/2,
					leftX = this.x - halfWidth,
					rightX = this.x + halfWidth,
					top = this.base - (this.base - this.y),
					halfStroke = this.strokeWidth / 2;

				// Canvas doesn't allow us to stroke inside the width so we can
				// adjust the sizes to fit if we're setting a stroke on the line
				if (this.showStroke){
					leftX += halfStroke;
					rightX -= halfStroke;
					top += halfStroke;
				}

				ctx.beginPath();

				ctx.fillStyle = this.fillColor;
				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				// It'd be nice to keep this class totally generic to any rectangle
				// and simply specify which border to miss out.
				ctx.moveTo(leftX, this.base);
				ctx.lineTo(leftX, top);
				ctx.lineTo(rightX, top);
				ctx.lineTo(rightX, this.base);
				ctx.fill();
				if (this.showStroke){
					ctx.stroke();
				}
			},
			height : function(){
				return this.base - this.y;
			},
			inRange : function(chartX,chartY){
				return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
			}
		});

		Chart.Tooltip = Chart.Element.extend({
			draw : function(){

				var ctx = this.chart.ctx;

				ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

				this.xAlign = "center";
				this.yAlign = "above";

				//Distance between the actual element.y position and the start of the tooltip caret
				var caretPadding = this.caretPadding = 2;

				var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
					tooltipRectHeight = this.fontSize + 2*this.yPadding,
					tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

				if (this.x + tooltipWidth/2 >this.chart.width){
					this.xAlign = "left";
				} else if (this.x - tooltipWidth/2 < 0){
					this.xAlign = "right";
				}

				if (this.y - tooltipHeight < 0){
					this.yAlign = "below";
				}


				var tooltipX = this.x - tooltipWidth/2,
					tooltipY = this.y - tooltipHeight;

				ctx.fillStyle = this.fillColor;

				// Custom Tooltips
				if(this.custom){
					this.custom(this);
				}
				else{
					switch(this.yAlign)
					{
					case "above":
						//Draw a caret above the x/y
						ctx.beginPath();
						ctx.moveTo(this.x,this.y - caretPadding);
						ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
						ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
						ctx.closePath();
						ctx.fill();
						break;
					case "below":
						tooltipY = this.y + caretPadding + this.caretHeight;
						//Draw a caret below the x/y
						ctx.beginPath();
						ctx.moveTo(this.x, this.y + caretPadding);
						ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
						ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
						ctx.closePath();
						ctx.fill();
						break;
					}

					switch(this.xAlign)
					{
					case "left":
						tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
						break;
					case "right":
						tooltipX = this.x - (this.cornerRadius + this.caretHeight);
						break;
					}

					drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

					ctx.fill();

					ctx.fillStyle = this.textColor;
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";
					ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
				}
			}
		});

		Chart.MultiTooltip = Chart.Element.extend({
			initialize : function(){
				this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

				this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

				this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;

				this.ctx.font = this.titleFont;

				var titleWidth = this.ctx.measureText(this.title).width,
					//Label has a legend square as well so account for this.
					labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
					longestTextWidth = max([labelWidth,titleWidth]);

				this.width = longestTextWidth + (this.xPadding*2);


				var halfHeight = this.height/2;

				//Check to ensure the height will fit on the canvas
				if (this.y - halfHeight < 0 ){
					this.y = halfHeight;
				} else if (this.y + halfHeight > this.chart.height){
					this.y = this.chart.height - halfHeight;
				}

				//Decide whether to align left or right based on position on canvas
				if (this.x > this.chart.width/2){
					this.x -= this.xOffset + this.width;
				} else {
					this.x += this.xOffset;
				}


			},
			getLineHeight : function(index){
				var baseLineHeight = this.y - (this.height/2) + this.yPadding,
					afterTitleIndex = index-1;

				//If the index is zero, we're getting the title
				if (index === 0){
					return baseLineHeight + this.titleFontSize/2;
				} else{
					return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;
				}

			},
			draw : function(){
				// Custom Tooltips
				if(this.custom){
					this.custom(this);
				}
				else{
					drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
					var ctx = this.ctx;
					ctx.fillStyle = this.fillColor;
					ctx.fill();
					ctx.closePath();

					ctx.textAlign = "left";
					ctx.textBaseline = "middle";
					ctx.fillStyle = this.titleTextColor;
					ctx.font = this.titleFont;

					ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

					ctx.font = this.font;
					helpers.each(this.labels,function(label,index){
						ctx.fillStyle = this.textColor;
						ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

						//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
						//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
						//Instead we'll make a white filled block to put the legendColour palette over.

						ctx.fillStyle = this.legendColorBackground;
						ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

						ctx.fillStyle = this.legendColors[index].fill;
						ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


					},this);
				}
			}
		});

		Chart.Scale = Chart.Element.extend({
			initialize : function(){
				this.fit();
			},
			buildYLabels : function(){
				this.yLabels = [];

				var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

				for (var i=0; i<=this.steps; i++){
					this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
				}
				this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;
			},
			addXLabel : function(label){
				this.xLabels.push(label);
				this.valuesCount++;
				this.fit();
			},
			removeXLabel : function(){
				this.xLabels.shift();
				this.valuesCount--;
				this.fit();
			},
			// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
			fit: function(){
				// First we need the width of the yLabels, assuming the xLabels aren't rotated

				// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
				this.startPoint = (this.display) ? this.fontSize : 0;
				this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

				// Apply padding settings to the start and end point.
				this.startPoint += this.padding;
				this.endPoint -= this.padding;

				// Cache the starting height, so can determine if we need to recalculate the scale yAxis
				var cachedHeight = this.endPoint - this.startPoint,
					cachedYLabelWidth;

				// Build the current yLabels so we have an idea of what size they'll be to start
				/*
				 *	This sets what is returned from calculateScaleRange as static properties of this class:
				 *
					this.steps;
					this.stepValue;
					this.min;
					this.max;
				 *
				 */
				this.calculateYRange(cachedHeight);

				// With these properties set we can now build the array of yLabels
				// and also the width of the largest yLabel
				this.buildYLabels();

				this.calculateXLabelRotation();

				while((cachedHeight > this.endPoint - this.startPoint)){
					cachedHeight = this.endPoint - this.startPoint;
					cachedYLabelWidth = this.yLabelWidth;

					this.calculateYRange(cachedHeight);
					this.buildYLabels();

					// Only go through the xLabel loop again if the yLabel width has changed
					if (cachedYLabelWidth < this.yLabelWidth){
						this.calculateXLabelRotation();
					}
				}

			},
			calculateXLabelRotation : function(){
				//Get the width of each grid by calculating the difference
				//between x offsets between 0 and 1.

				this.ctx.font = this.font;

				var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
					lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
					firstRotated,
					lastRotated;


				this.xScalePaddingRight = lastWidth/2 + 3;
				this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

				this.xLabelRotation = 0;
				if (this.display){
					var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
						cosRotation,
						firstRotatedWidth;
					this.xLabelWidth = originalLabelWidth;
					//Allow 3 pixels x2 padding either side for label readability
					var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

					//Max label rotate should be 90 - also act as a loop counter
					while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
						cosRotation = Math.cos(toRadians(this.xLabelRotation));

						firstRotated = cosRotation * firstWidth;
						lastRotated = cosRotation * lastWidth;

						// We're right aligning the text now.
						if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
							this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
						}
						this.xScalePaddingRight = this.fontSize/2;


						this.xLabelRotation++;
						this.xLabelWidth = cosRotation * originalLabelWidth;

					}
					if (this.xLabelRotation > 0){
						this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
					}
				}
				else{
					this.xLabelWidth = 0;
					this.xScalePaddingRight = this.padding;
					this.xScalePaddingLeft = this.padding;
				}

			},
			// Needs to be overidden in each Chart type
			// Otherwise we need to pass all the data into the scale class
			calculateYRange: noop,
			drawingArea: function(){
				return this.startPoint - this.endPoint;
			},
			calculateY : function(value){
				var scalingFactor = this.drawingArea() / (this.min - this.max);
				return this.endPoint - (scalingFactor * (value - this.min));
			},
			calculateX : function(index){
				var isRotated = (this.xLabelRotation > 0),
					// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
					innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
					valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
					valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

				if (this.offsetGridLines){
					valueOffset += (valueWidth/2);
				}

				return Math.round(valueOffset);
			},
			update : function(newProps){
				helpers.extend(this, newProps);
				this.fit();
			},
			draw : function(){
				var ctx = this.ctx,
					yLabelGap = (this.endPoint - this.startPoint) / this.steps,
					xStart = Math.round(this.xScalePaddingLeft);
				if (this.display){
					ctx.fillStyle = this.textColor;
					ctx.font = this.font;
					each(this.yLabels,function(labelString,index){
						var yLabelCenter = this.endPoint - (yLabelGap * index),
							linePositionY = Math.round(yLabelCenter),
							drawHorizontalLine = this.showHorizontalLines;

						ctx.textAlign = "right";
						ctx.textBaseline = "middle";
						if (this.showLabels){
							ctx.fillText(labelString,xStart - 10,yLabelCenter);
						}

						// This is X axis, so draw it
						if (index === 0 && !drawHorizontalLine){
							drawHorizontalLine = true;
						}

						if (drawHorizontalLine){
							ctx.beginPath();
						}

						if (index > 0){
							// This is a grid line in the centre, so drop that
							ctx.lineWidth = this.gridLineWidth;
							ctx.strokeStyle = this.gridLineColor;
						} else {
							// This is the first line on the scale
							ctx.lineWidth = this.lineWidth;
							ctx.strokeStyle = this.lineColor;
						}

						linePositionY += helpers.aliasPixel(ctx.lineWidth);

						if(drawHorizontalLine){
							ctx.moveTo(xStart, linePositionY);
							ctx.lineTo(this.width, linePositionY);
							ctx.stroke();
							ctx.closePath();
						}

						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
						ctx.beginPath();
						ctx.moveTo(xStart - 5, linePositionY);
						ctx.lineTo(xStart, linePositionY);
						ctx.stroke();
						ctx.closePath();

					},this);

					each(this.xLabels,function(label,index){
						var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
							// Check to see if line/bar here and decide where to place the line
							linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
							isRotated = (this.xLabelRotation > 0),
							drawVerticalLine = this.showVerticalLines;

						// This is Y axis, so draw it
						if (index === 0 && !drawVerticalLine){
							drawVerticalLine = true;
						}

						if (drawVerticalLine){
							ctx.beginPath();
						}

						if (index > 0){
							// This is a grid line in the centre, so drop that
							ctx.lineWidth = this.gridLineWidth;
							ctx.strokeStyle = this.gridLineColor;
						} else {
							// This is the first line on the scale
							ctx.lineWidth = this.lineWidth;
							ctx.strokeStyle = this.lineColor;
						}

						if (drawVerticalLine){
							ctx.moveTo(linePos,this.endPoint);
							ctx.lineTo(linePos,this.startPoint - 3);
							ctx.stroke();
							ctx.closePath();
						}


						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;


						// Small lines at the bottom of the base grid line
						ctx.beginPath();
						ctx.moveTo(linePos,this.endPoint);
						ctx.lineTo(linePos,this.endPoint + 5);
						ctx.stroke();
						ctx.closePath();

						ctx.save();
						ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
						ctx.rotate(toRadians(this.xLabelRotation)*-1);
						ctx.font = this.font;
						ctx.textAlign = (isRotated) ? "right" : "center";
						ctx.textBaseline = (isRotated) ? "middle" : "top";
						ctx.fillText(label, 0, 0);
						ctx.restore();
					},this);

				}
			}

		});

		Chart.RadialScale = Chart.Element.extend({
			initialize: function(){
				this.size = min([this.height, this.width]);
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			},
			calculateCenterOffset: function(value){
				// Take into account half font size + the yPadding of the top value
				var scalingFactor = this.drawingArea / (this.max - this.min);

				return (value - this.min) * scalingFactor;
			},
			update : function(){
				if (!this.lineArc){
					this.setScaleSize();
				} else {
					this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
				}
				this.buildYLabels();
			},
			buildYLabels: function(){
				this.yLabels = [];

				var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

				for (var i=0; i<=this.steps; i++){
					this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
				}
			},
			getCircumference : function(){
				return ((Math.PI*2) / this.valuesCount);
			},
			setScaleSize: function(){
				/*
				 * Right, this is really confusing and there is a lot of maths going on here
				 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
				 *
				 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
				 *
				 * Solution:
				 *
				 * We assume the radius of the polygon is half the size of the canvas at first
				 * at each index we check if the text overlaps.
				 *
				 * Where it does, we store that angle and that index.
				 *
				 * After finding the largest index and angle we calculate how much we need to remove
				 * from the shape radius to move the point inwards by that x.
				 *
				 * We average the left and right distances to get the maximum shape radius that can fit in the box
				 * along with labels.
				 *
				 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
				 * on each side, removing that from the size, halving it and adding the left x protrusion width.
				 *
				 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
				 * and position it in the most space efficient manner
				 *
				 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
				 */


				// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
				// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
				var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
					pointPosition,
					i,
					textWidth,
					halfTextWidth,
					furthestRight = this.width,
					furthestRightIndex,
					furthestRightAngle,
					furthestLeft = 0,
					furthestLeftIndex,
					furthestLeftAngle,
					xProtrusionLeft,
					xProtrusionRight,
					radiusReductionRight,
					radiusReductionLeft,
					maxWidthRadius;
				this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
				for (i=0;i<this.valuesCount;i++){
					// 5px to space the text slightly out - similar to what we do in the draw function.
					pointPosition = this.getPointPosition(i, largestPossibleRadius);
					textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
					if (i === 0 || i === this.valuesCount/2){
						// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
						// of the radar chart, so text will be aligned centrally, so we'll half it and compare
						// w/left and right text sizes
						halfTextWidth = textWidth/2;
						if (pointPosition.x + halfTextWidth > furthestRight) {
							furthestRight = pointPosition.x + halfTextWidth;
							furthestRightIndex = i;
						}
						if (pointPosition.x - halfTextWidth < furthestLeft) {
							furthestLeft = pointPosition.x - halfTextWidth;
							furthestLeftIndex = i;
						}
					}
					else if (i < this.valuesCount/2) {
						// Less than half the values means we'll left align the text
						if (pointPosition.x + textWidth > furthestRight) {
							furthestRight = pointPosition.x + textWidth;
							furthestRightIndex = i;
						}
					}
					else if (i > this.valuesCount/2){
						// More than half the values means we'll right align the text
						if (pointPosition.x - textWidth < furthestLeft) {
							furthestLeft = pointPosition.x - textWidth;
							furthestLeftIndex = i;
						}
					}
				}

				xProtrusionLeft = furthestLeft;

				xProtrusionRight = Math.ceil(furthestRight - this.width);

				furthestRightAngle = this.getIndexAngle(furthestRightIndex);

				furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

				radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

				radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

				// Ensure we actually need to reduce the size of the chart
				radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
				radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

				this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

				//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
				this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

			},
			setCenterPoint: function(leftMovement, rightMovement){

				var maxRight = this.width - rightMovement - this.drawingArea,
					maxLeft = leftMovement + this.drawingArea;

				this.xCenter = (maxLeft + maxRight)/2;
				// Always vertically in the centre as the text height doesn't change
				this.yCenter = (this.height/2);
			},

			getIndexAngle : function(index){
				var angleMultiplier = (Math.PI * 2) / this.valuesCount;
				// Start from the top instead of right, so remove a quarter of the circle

				return index * angleMultiplier - (Math.PI/2);
			},
			getPointPosition : function(index, distanceFromCenter){
				var thisAngle = this.getIndexAngle(index);
				return {
					x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
					y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
				};
			},
			draw: function(){
				if (this.display){
					var ctx = this.ctx;
					each(this.yLabels, function(label, index){
						// Don't draw a centre value
						if (index > 0){
							var yCenterOffset = index * (this.drawingArea/this.steps),
								yHeight = this.yCenter - yCenterOffset,
								pointPosition;

							// Draw circular lines around the scale
							if (this.lineWidth > 0){
								ctx.strokeStyle = this.lineColor;
								ctx.lineWidth = this.lineWidth;

								if(this.lineArc){
									ctx.beginPath();
									ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
									ctx.closePath();
									ctx.stroke();
								} else{
									ctx.beginPath();
									for (var i=0;i<this.valuesCount;i++)
									{
										pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
										if (i === 0){
											ctx.moveTo(pointPosition.x, pointPosition.y);
										} else {
											ctx.lineTo(pointPosition.x, pointPosition.y);
										}
									}
									ctx.closePath();
									ctx.stroke();
								}
							}
							if(this.showLabels){
								ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
								if (this.showLabelBackdrop){
									var labelWidth = ctx.measureText(label).width;
									ctx.fillStyle = this.backdropColor;
									ctx.fillRect(
										this.xCenter - labelWidth/2 - this.backdropPaddingX,
										yHeight - this.fontSize/2 - this.backdropPaddingY,
										labelWidth + this.backdropPaddingX*2,
										this.fontSize + this.backdropPaddingY*2
									);
								}
								ctx.textAlign = 'center';
								ctx.textBaseline = "middle";
								ctx.fillStyle = this.fontColor;
								ctx.fillText(label, this.xCenter, yHeight);
							}
						}
					}, this);

					if (!this.lineArc){
						ctx.lineWidth = this.angleLineWidth;
						ctx.strokeStyle = this.angleLineColor;
						for (var i = this.valuesCount - 1; i >= 0; i--) {
							if (this.angleLineWidth > 0){
								var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
								ctx.beginPath();
								ctx.moveTo(this.xCenter, this.yCenter);
								ctx.lineTo(outerPosition.x, outerPosition.y);
								ctx.stroke();
								ctx.closePath();
							}
							// Extra 3px out for some label spacing
							var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
							ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
							ctx.fillStyle = this.pointLabelFontColor;

							var labelsCount = this.labels.length,
								halfLabelsCount = this.labels.length/2,
								quarterLabelsCount = halfLabelsCount/2,
								upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
								exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
							if (i === 0){
								ctx.textAlign = 'center';
							} else if(i === halfLabelsCount){
								ctx.textAlign = 'center';
							} else if (i < halfLabelsCount){
								ctx.textAlign = 'left';
							} else {
								ctx.textAlign = 'right';
							}

							// Set the correct text baseline based on outer positioning
							if (exactQuarter){
								ctx.textBaseline = 'middle';
							} else if (upperHalf){
								ctx.textBaseline = 'bottom';
							} else {
								ctx.textBaseline = 'top';
							}

							ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
						}
					}
				}
			}
		});

		// Attach global event to resize each chart instance when the browser resizes
		helpers.addEvent(window, "resize", (function(){
			// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
			var timeout;
			return function(){
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					each(Chart.instances,function(instance){
						// If the responsive flag is set in the chart instance config
						// Cascade the resize event down to the chart.
						if (instance.options.responsive){
							instance.resize(instance.render, true);
						}
					});
				}, 50);
			};
		})());


		if (amd) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
				return Chart;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module === 'object' && module.exports) {
			module.exports = Chart;
		}

		root.Chart = Chart;

		Chart.noConflict = function(){
			root.Chart = previous;
			return Chart;
		};

	}).call(this);

	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			helpers = Chart.helpers;


		var defaultConfig = {
			//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero : true,

			//Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,

			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",

			//Number - Width of the grid lines
			scaleGridLineWidth : 1,

			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,

			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,

			//Boolean - If there is a stroke on each bar
			barShowStroke : true,

			//Number - Pixel width of the bar stroke
			barStrokeWidth : 2,

			//Number - Spacing between each of the X value sets
			barValueSpacing : 5,

			//Number - Spacing between data sets within X values
			barDatasetSpacing : 1,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		};


		Chart.Type.extend({
			name: "Bar",
			defaults : defaultConfig,
			initialize:  function(data){

				//Expose options as a scope variable here so we can access it in the ScaleClass
				var options = this.options;

				this.ScaleClass = Chart.Scale.extend({
					offsetGridLines : true,
					calculateBarX : function(datasetCount, datasetIndex, barIndex){
						//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
						var xWidth = this.calculateBaseWidth(),
							xAbsolute = this.calculateX(barIndex) - (xWidth/2),
							barWidth = this.calculateBarWidth(datasetCount);

						return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
					},
					calculateBaseWidth : function(){
						return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
					},
					calculateBarWidth : function(datasetCount){
						//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
						var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

						return (baseWidth / datasetCount);
					}
				});

				this.datasets = [];

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

						this.eachBars(function(bar){
							bar.restore(['fillColor', 'strokeColor']);
						});
						helpers.each(activeBars, function(activeBar){
							activeBar.fillColor = activeBar.highlightFill;
							activeBar.strokeColor = activeBar.highlightStroke;
						});
						this.showTooltip(activeBars);
					});
				}

				//Declare the extension of the default point, to cater for the options passed in to the constructor
				this.BarClass = Chart.Rectangle.extend({
					strokeWidth : this.options.barStrokeWidth,
					showStroke : this.options.barShowStroke,
					ctx : this.chart.ctx
				});

				//Iterate through each of the datasets, and build this into a property of the chart
				helpers.each(data.datasets,function(dataset,datasetIndex){

					var datasetObject = {
						label : dataset.label || null,
						fillColor : dataset.fillColor,
						strokeColor : dataset.strokeColor,
						bars : []
					};

					this.datasets.push(datasetObject);

					helpers.each(dataset.data,function(dataPoint,index){
						//Add a new point for each piece of data, passing any required data to draw.
						datasetObject.bars.push(new this.BarClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							strokeColor : dataset.strokeColor,
							fillColor : dataset.fillColor,
							highlightFill : dataset.highlightFill || dataset.fillColor,
							highlightStroke : dataset.highlightStroke || dataset.strokeColor
						}));
					},this);

				},this);

				this.buildScale(data.labels);

				this.BarClass.prototype.base = this.scale.endPoint;

				this.eachBars(function(bar, index, datasetIndex){
					helpers.extend(bar, {
						width : this.scale.calculateBarWidth(this.datasets.length),
						x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
						y: this.scale.endPoint
					});
					bar.save();
				}, this);

				this.render();
			},
			update : function(){
				this.scale.update();
				// Reset any highlight colours before updating.
				helpers.each(this.activeElements, function(activeElement){
					activeElement.restore(['fillColor', 'strokeColor']);
				});

				this.eachBars(function(bar){
					bar.save();
				});
				this.render();
			},
			eachBars : function(callback){
				helpers.each(this.datasets,function(dataset, datasetIndex){
					helpers.each(dataset.bars, callback, this, datasetIndex);
				},this);
			},
			getBarsAtEvent : function(e){
				var barsArray = [],
					eventPosition = helpers.getRelativePosition(e),
					datasetIterator = function(dataset){
						barsArray.push(dataset.bars[barIndex]);
					},
					barIndex;

				for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
					for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
						if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
							helpers.each(this.datasets, datasetIterator);
							return barsArray;
						}
					}
				}

				return barsArray;
			},
			buildScale : function(labels){
				var self = this;

				var dataTotal = function(){
					var values = [];
					self.eachBars(function(bar){
						values.push(bar.value);
					});
					return values;
				};

				var scaleOptions = {
					templateString : this.options.scaleLabel,
					height : this.chart.height,
					width : this.chart.width,
					ctx : this.chart.ctx,
					textColor : this.options.scaleFontColor,
					fontSize : this.options.scaleFontSize,
					fontStyle : this.options.scaleFontStyle,
					fontFamily : this.options.scaleFontFamily,
					valuesCount : labels.length,
					beginAtZero : this.options.scaleBeginAtZero,
					integersOnly : this.options.scaleIntegersOnly,
					calculateYRange: function(currentHeight){
						var updatedRanges = helpers.calculateScaleRange(
							dataTotal(),
							currentHeight,
							this.fontSize,
							this.beginAtZero,
							this.integersOnly
						);
						helpers.extend(this, updatedRanges);
					},
					xLabels : labels,
					font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
					lineWidth : this.options.scaleLineWidth,
					lineColor : this.options.scaleLineColor,
					showHorizontalLines : this.options.scaleShowHorizontalLines,
					showVerticalLines : this.options.scaleShowVerticalLines,
					gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
					gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
					padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
					showLabels : this.options.scaleShowLabels,
					display : this.options.showScale
				};

				if (this.options.scaleOverride){
					helpers.extend(scaleOptions, {
						calculateYRange: helpers.noop,
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					});
				}

				this.scale = new this.ScaleClass(scaleOptions);
			},
			addData : function(valuesArray,label){
				//Map the values array for each of the datasets
				helpers.each(valuesArray,function(value,datasetIndex){
					//Add a new point for each piece of data, passing any required data to draw.
					this.datasets[datasetIndex].bars.push(new this.BarClass({
						value : value,
						label : label,
						x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
						y: this.scale.endPoint,
						width : this.scale.calculateBarWidth(this.datasets.length),
						base : this.scale.endPoint,
						strokeColor : this.datasets[datasetIndex].strokeColor,
						fillColor : this.datasets[datasetIndex].fillColor
					}));
				},this);

				this.scale.addXLabel(label);
				//Then re-render the chart.
				this.update();
			},
			removeData : function(){
				this.scale.removeXLabel();
				//Then re-render the chart.
				helpers.each(this.datasets,function(dataset){
					dataset.bars.shift();
				},this);
				this.update();
			},
			reflow : function(){
				helpers.extend(this.BarClass.prototype,{
					y: this.scale.endPoint,
					base : this.scale.endPoint
				});
				var newScaleProps = helpers.extend({
					height : this.chart.height,
					width : this.chart.width
				});
				this.scale.update(newScaleProps);
			},
			draw : function(ease){
				var easingDecimal = ease || 1;
				this.clear();

				var ctx = this.chart.ctx;

				this.scale.draw(easingDecimal);

				//Draw all the bars for each dataset
				helpers.each(this.datasets,function(dataset,datasetIndex){
					helpers.each(dataset.bars,function(bar,index){
						if (bar.hasValue()){
							bar.base = this.scale.endPoint;
							//Transition then draw
							bar.transition({
								x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
								y : this.scale.calculateY(bar.value),
								width : this.scale.calculateBarWidth(this.datasets.length)
							}, easingDecimal).draw();
						}
					},this);

				},this);
			}
		});


	}).call(this);

	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			//Cache a local reference to Chart.helpers
			helpers = Chart.helpers;

		var defaultConfig = {
			//Boolean - Whether we should show a stroke on each segment
			segmentShowStroke : true,

			//String - The colour of each segment stroke
			segmentStrokeColor : "#fff",

			//Number - The width of each segment stroke
			segmentStrokeWidth : 2,

			//The percentage of the chart that we cut out of the middle.
			percentageInnerCutout : 50,

			//Number - Amount of animation steps
			animationSteps : 100,

			//String - Animation easing effect
			animationEasing : "easeOutBounce",

			//Boolean - Whether we animate the rotation of the Doughnut
			animateRotate : true,

			//Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale : false,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

		};


		Chart.Type.extend({
			//Passing in a name registers this chart in the Chart namespace
			name: "Doughnut",
			//Providing a defaults will also register the deafults in the chart namespace
			defaults : defaultConfig,
			//Initialize is fired when the chart is initialized - Data is passed in as a parameter
			//Config is automatically merged by the core of Chart.js, and is available at this.options
			initialize:  function(data){

				//Declare segments as a static property to prevent inheriting across the Chart type prototype
				this.segments = [];
				this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

				this.SegmentArc = Chart.Arc.extend({
					ctx : this.chart.ctx,
					x : this.chart.width/2,
					y : this.chart.height/2
				});

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

						helpers.each(this.segments,function(segment){
							segment.restore(["fillColor"]);
						});
						helpers.each(activeSegments,function(activeSegment){
							activeSegment.fillColor = activeSegment.highlightColor;
						});
						this.showTooltip(activeSegments);
					});
				}
				this.calculateTotal(data);

				helpers.each(data,function(datapoint, index){
					this.addData(datapoint, index, true);
				},this);

				this.render();
			},
			getSegmentsAtEvent : function(e){
				var segmentsArray = [];

				var location = helpers.getRelativePosition(e);

				helpers.each(this.segments,function(segment){
					if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
				},this);
				return segmentsArray;
			},
			addData : function(segment, atIndex, silent){
				var index = atIndex || this.segments.length;
				this.segments.splice(index, 0, new this.SegmentArc({
					value : segment.value,
					outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
					innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
					fillColor : segment.color,
					highlightColor : segment.highlight || segment.color,
					showStroke : this.options.segmentShowStroke,
					strokeWidth : this.options.segmentStrokeWidth,
					strokeColor : this.options.segmentStrokeColor,
					startAngle : Math.PI * 1.5,
					circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
					label : segment.label
				}));
				if (!silent){
					this.reflow();
					this.update();
				}
			},
			calculateCircumference : function(value){
				return (Math.PI*2)*(Math.abs(value) / this.total);
			},
			calculateTotal : function(data){
				this.total = 0;
				helpers.each(data,function(segment){
					this.total += Math.abs(segment.value);
				},this);
			},
			update : function(){
				this.calculateTotal(this.segments);

				// Reset any highlight colours before updating.
				helpers.each(this.activeElements, function(activeElement){
					activeElement.restore(['fillColor']);
				});

				helpers.each(this.segments,function(segment){
					segment.save();
				});
				this.render();
			},

			removeData: function(atIndex){
				var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
				this.segments.splice(indexToDelete, 1);
				this.reflow();
				this.update();
			},

			reflow : function(){
				helpers.extend(this.SegmentArc.prototype,{
					x : this.chart.width/2,
					y : this.chart.height/2
				});
				this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
				helpers.each(this.segments, function(segment){
					segment.update({
						outerRadius : this.outerRadius,
						innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
					});
				}, this);
			},
			draw : function(easeDecimal){
				var animDecimal = (easeDecimal) ? easeDecimal : 1;
				this.clear();
				helpers.each(this.segments,function(segment,index){
					segment.transition({
						circumference : this.calculateCircumference(segment.value),
						outerRadius : this.outerRadius,
						innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
					},animDecimal);

					segment.endAngle = segment.startAngle + segment.circumference;

					segment.draw();
					if (index === 0){
						segment.startAngle = Math.PI * 1.5;
					}
					//Check to see if it's the last segment, if not get the next and update the start angle
					if (index < this.segments.length-1){
						this.segments[index+1].startAngle = segment.endAngle;
					}
				},this);

			}
		});

		Chart.types.Doughnut.extend({
			name : "Pie",
			defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
		});

	}).call(this);
	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			helpers = Chart.helpers;

		var defaultConfig = {

			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,

			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",

			//Number - Width of the grid lines
			scaleGridLineWidth : 1,

			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,

			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,

			//Boolean - Whether the line is curved between points
			bezierCurve : true,

			//Number - Tension of the bezier curve between points
			bezierCurveTension : 0.4,

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 4,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		};


		Chart.Type.extend({
			name: "Line",
			defaults : defaultConfig,
			initialize:  function(data){
				//Declare the extension of the default point, to cater for the options passed in to the constructor
				this.PointClass = Chart.Point.extend({
					strokeWidth : this.options.pointDotStrokeWidth,
					radius : this.options.pointDotRadius,
					display: this.options.pointDot,
					hitDetectionRadius : this.options.pointHitDetectionRadius,
					ctx : this.chart.ctx,
					inRange : function(mouseX){
						return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
					}
				});

				this.datasets = [];

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
						this.eachPoints(function(point){
							point.restore(['fillColor', 'strokeColor']);
						});
						helpers.each(activePoints, function(activePoint){
							activePoint.fillColor = activePoint.highlightFill;
							activePoint.strokeColor = activePoint.highlightStroke;
						});
						this.showTooltip(activePoints);
					});
				}

				//Iterate through each of the datasets, and build this into a property of the chart
				helpers.each(data.datasets,function(dataset){

					var datasetObject = {
						label : dataset.label || null,
						fillColor : dataset.fillColor,
						strokeColor : dataset.strokeColor,
						pointColor : dataset.pointColor,
						pointStrokeColor : dataset.pointStrokeColor,
						points : []
					};

					this.datasets.push(datasetObject);


					helpers.each(dataset.data,function(dataPoint,index){
						//Add a new point for each piece of data, passing any required data to draw.
						datasetObject.points.push(new this.PointClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							strokeColor : dataset.pointStrokeColor,
							fillColor : dataset.pointColor,
							highlightFill : dataset.pointHighlightFill || dataset.pointColor,
							highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
						}));
					},this);

					this.buildScale(data.labels);


					this.eachPoints(function(point, index){
						helpers.extend(point, {
							x: this.scale.calculateX(index),
							y: this.scale.endPoint
						});
						point.save();
					}, this);

				},this);


				this.render();
			},
			update : function(){
				this.scale.update();
				// Reset any highlight colours before updating.
				helpers.each(this.activeElements, function(activeElement){
					activeElement.restore(['fillColor', 'strokeColor']);
				});
				this.eachPoints(function(point){
					point.save();
				});
				this.render();
			},
			eachPoints : function(callback){
				helpers.each(this.datasets,function(dataset){
					helpers.each(dataset.points,callback,this);
				},this);
			},
			getPointsAtEvent : function(e){
				var pointsArray = [],
					eventPosition = helpers.getRelativePosition(e);
				helpers.each(this.datasets,function(dataset){
					helpers.each(dataset.points,function(point){
						if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
					});
				},this);
				return pointsArray;
			},
			buildScale : function(labels){
				var self = this;

				var dataTotal = function(){
					var values = [];
					self.eachPoints(function(point){
						values.push(point.value);
					});

					return values;
				};

				var scaleOptions = {
					templateString : this.options.scaleLabel,
					height : this.chart.height,
					width : this.chart.width,
					ctx : this.chart.ctx,
					textColor : this.options.scaleFontColor,
					fontSize : this.options.scaleFontSize,
					fontStyle : this.options.scaleFontStyle,
					fontFamily : this.options.scaleFontFamily,
					valuesCount : labels.length,
					beginAtZero : this.options.scaleBeginAtZero,
					integersOnly : this.options.scaleIntegersOnly,
					calculateYRange : function(currentHeight){
						var updatedRanges = helpers.calculateScaleRange(
							dataTotal(),
							currentHeight,
							this.fontSize,
							this.beginAtZero,
							this.integersOnly
						);
						helpers.extend(this, updatedRanges);
					},
					xLabels : labels,
					font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
					lineWidth : this.options.scaleLineWidth,
					lineColor : this.options.scaleLineColor,
					showHorizontalLines : this.options.scaleShowHorizontalLines,
					showVerticalLines : this.options.scaleShowVerticalLines,
					gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
					gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
					padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
					showLabels : this.options.scaleShowLabels,
					display : this.options.showScale
				};

				if (this.options.scaleOverride){
					helpers.extend(scaleOptions, {
						calculateYRange: helpers.noop,
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					});
				}


				this.scale = new Chart.Scale(scaleOptions);
			},
			addData : function(valuesArray,label){
				//Map the values array for each of the datasets

				helpers.each(valuesArray,function(value,datasetIndex){
					//Add a new point for each piece of data, passing any required data to draw.
					this.datasets[datasetIndex].points.push(new this.PointClass({
						value : value,
						label : label,
						x: this.scale.calculateX(this.scale.valuesCount+1),
						y: this.scale.endPoint,
						strokeColor : this.datasets[datasetIndex].pointStrokeColor,
						fillColor : this.datasets[datasetIndex].pointColor
					}));
				},this);

				this.scale.addXLabel(label);
				//Then re-render the chart.
				this.update();
			},
			removeData : function(){
				this.scale.removeXLabel();
				//Then re-render the chart.
				helpers.each(this.datasets,function(dataset){
					dataset.points.shift();
				},this);
				this.update();
			},
			reflow : function(){
				var newScaleProps = helpers.extend({
					height : this.chart.height,
					width : this.chart.width
				});
				this.scale.update(newScaleProps);
			},
			draw : function(ease){
				var easingDecimal = ease || 1;
				this.clear();

				var ctx = this.chart.ctx;

				// Some helper methods for getting the next/prev points
				var hasValue = function(item){
					return item.value !== null;
				},
				nextPoint = function(point, collection, index){
					return helpers.findNextWhere(collection, hasValue, index) || point;
				},
				previousPoint = function(point, collection, index){
					return helpers.findPreviousWhere(collection, hasValue, index) || point;
				};

				this.scale.draw(easingDecimal);


				helpers.each(this.datasets,function(dataset){
					var pointsWithValues = helpers.where(dataset.points, hasValue);

					//Transition each point first so that the line and point drawing isn't out of sync
					//We can use this extra loop to calculate the control points of this dataset also in this loop

					helpers.each(dataset.points, function(point, index){
						if (point.hasValue()){
							point.transition({
								y : this.scale.calculateY(point.value),
								x : this.scale.calculateX(index)
							}, easingDecimal);
						}
					},this);


					// Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
					// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
					if (this.options.bezierCurve){
						helpers.each(pointsWithValues, function(point, index){
							var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
							point.controlPoints = helpers.splineCurve(
								previousPoint(point, pointsWithValues, index),
								point,
								nextPoint(point, pointsWithValues, index),
								tension
							);

							// Prevent the bezier going outside of the bounds of the graph

							// Cap puter bezier handles to the upper/lower scale bounds
							if (point.controlPoints.outer.y > this.scale.endPoint){
								point.controlPoints.outer.y = this.scale.endPoint;
							}
							else if (point.controlPoints.outer.y < this.scale.startPoint){
								point.controlPoints.outer.y = this.scale.startPoint;
							}

							// Cap inner bezier handles to the upper/lower scale bounds
							if (point.controlPoints.inner.y > this.scale.endPoint){
								point.controlPoints.inner.y = this.scale.endPoint;
							}
							else if (point.controlPoints.inner.y < this.scale.startPoint){
								point.controlPoints.inner.y = this.scale.startPoint;
							}
						},this);
					}


					//Draw the line between all the points
					ctx.lineWidth = this.options.datasetStrokeWidth;
					ctx.strokeStyle = dataset.strokeColor;
					ctx.beginPath();

					helpers.each(pointsWithValues, function(point, index){
						if (index === 0){
							ctx.moveTo(point.x, point.y);
						}
						else{
							if(this.options.bezierCurve){
								var previous = previousPoint(point, pointsWithValues, index);

								ctx.bezierCurveTo(
									previous.controlPoints.outer.x,
									previous.controlPoints.outer.y,
									point.controlPoints.inner.x,
									point.controlPoints.inner.y,
									point.x,
									point.y
								);
							}
							else{
								ctx.lineTo(point.x,point.y);
							}
						}
					}, this);

					ctx.stroke();

					if (this.options.datasetFill && pointsWithValues.length > 0){
						//Round off the line by going to the base of the chart, back to the start, then fill.
						ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
						ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
						ctx.fillStyle = dataset.fillColor;
						ctx.closePath();
						ctx.fill();
					}

					//Now draw the points over the line
					//A little inefficient double looping, but better than the line
					//lagging behind the point positions
					helpers.each(pointsWithValues,function(point){
						point.draw();
					});
				},this);
			}
		});


	}).call(this);

	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			//Cache a local reference to Chart.helpers
			helpers = Chart.helpers;

		var defaultConfig = {
			//Boolean - Show a backdrop to the scale label
			scaleShowLabelBackdrop : true,

			//String - The colour of the label backdrop
			scaleBackdropColor : "rgba(255,255,255,0.75)",

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//Number - The backdrop padding above & below the label in pixels
			scaleBackdropPaddingY : 2,

			//Number - The backdrop padding to the side of the label in pixels
			scaleBackdropPaddingX : 2,

			//Boolean - Show line for each value in the scale
			scaleShowLine : true,

			//Boolean - Stroke a line around each segment in the chart
			segmentShowStroke : true,

			//String - The colour of the stroke on each segement.
			segmentStrokeColor : "#fff",

			//Number - The width of the stroke value in pixels
			segmentStrokeWidth : 2,

			//Number - Amount of animation steps
			animationSteps : 100,

			//String - Animation easing effect.
			animationEasing : "easeOutBounce",

			//Boolean - Whether to animate the rotation of the chart
			animateRotate : true,

			//Boolean - Whether to animate scaling the chart from the centre
			animateScale : false,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
		};


		Chart.Type.extend({
			//Passing in a name registers this chart in the Chart namespace
			name: "PolarArea",
			//Providing a defaults will also register the deafults in the chart namespace
			defaults : defaultConfig,
			//Initialize is fired when the chart is initialized - Data is passed in as a parameter
			//Config is automatically merged by the core of Chart.js, and is available at this.options
			initialize:  function(data){
				this.segments = [];
				//Declare segment class as a chart instance specific class, so it can share props for this instance
				this.SegmentArc = Chart.Arc.extend({
					showStroke : this.options.segmentShowStroke,
					strokeWidth : this.options.segmentStrokeWidth,
					strokeColor : this.options.segmentStrokeColor,
					ctx : this.chart.ctx,
					innerRadius : 0,
					x : this.chart.width/2,
					y : this.chart.height/2
				});
				this.scale = new Chart.RadialScale({
					display: this.options.showScale,
					fontStyle: this.options.scaleFontStyle,
					fontSize: this.options.scaleFontSize,
					fontFamily: this.options.scaleFontFamily,
					fontColor: this.options.scaleFontColor,
					showLabels: this.options.scaleShowLabels,
					showLabelBackdrop: this.options.scaleShowLabelBackdrop,
					backdropColor: this.options.scaleBackdropColor,
					backdropPaddingY : this.options.scaleBackdropPaddingY,
					backdropPaddingX: this.options.scaleBackdropPaddingX,
					lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
					lineColor: this.options.scaleLineColor,
					lineArc: true,
					width: this.chart.width,
					height: this.chart.height,
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2,
					ctx : this.chart.ctx,
					templateString: this.options.scaleLabel,
					valuesCount: data.length
				});

				this.updateScaleRange(data);

				this.scale.update();

				helpers.each(data,function(segment,index){
					this.addData(segment,index,true);
				},this);

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
						helpers.each(this.segments,function(segment){
							segment.restore(["fillColor"]);
						});
						helpers.each(activeSegments,function(activeSegment){
							activeSegment.fillColor = activeSegment.highlightColor;
						});
						this.showTooltip(activeSegments);
					});
				}

				this.render();
			},
			getSegmentsAtEvent : function(e){
				var segmentsArray = [];

				var location = helpers.getRelativePosition(e);

				helpers.each(this.segments,function(segment){
					if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
				},this);
				return segmentsArray;
			},
			addData : function(segment, atIndex, silent){
				var index = atIndex || this.segments.length;

				this.segments.splice(index, 0, new this.SegmentArc({
					fillColor: segment.color,
					highlightColor: segment.highlight || segment.color,
					label: segment.label,
					value: segment.value,
					outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
					circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
					startAngle: Math.PI * 1.5
				}));
				if (!silent){
					this.reflow();
					this.update();
				}
			},
			removeData: function(atIndex){
				var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
				this.segments.splice(indexToDelete, 1);
				this.reflow();
				this.update();
			},
			calculateTotal: function(data){
				this.total = 0;
				helpers.each(data,function(segment){
					this.total += segment.value;
				},this);
				this.scale.valuesCount = this.segments.length;
			},
			updateScaleRange: function(datapoints){
				var valuesArray = [];
				helpers.each(datapoints,function(segment){
					valuesArray.push(segment.value);
				});

				var scaleSizes = (this.options.scaleOverride) ?
					{
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					} :
					helpers.calculateScaleRange(
						valuesArray,
						helpers.min([this.chart.width, this.chart.height])/2,
						this.options.scaleFontSize,
						this.options.scaleBeginAtZero,
						this.options.scaleIntegersOnly
					);

				helpers.extend(
					this.scale,
					scaleSizes,
					{
						size: helpers.min([this.chart.width, this.chart.height]),
						xCenter: this.chart.width/2,
						yCenter: this.chart.height/2
					}
				);

			},
			update : function(){
				this.calculateTotal(this.segments);

				helpers.each(this.segments,function(segment){
					segment.save();
				});
				
				this.reflow();
				this.render();
			},
			reflow : function(){
				helpers.extend(this.SegmentArc.prototype,{
					x : this.chart.width/2,
					y : this.chart.height/2
				});
				this.updateScaleRange(this.segments);
				this.scale.update();

				helpers.extend(this.scale,{
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				});

				helpers.each(this.segments, function(segment){
					segment.update({
						outerRadius : this.scale.calculateCenterOffset(segment.value)
					});
				}, this);

			},
			draw : function(ease){
				var easingDecimal = ease || 1;
				//Clear & draw the canvas
				this.clear();
				helpers.each(this.segments,function(segment, index){
					segment.transition({
						circumference : this.scale.getCircumference(),
						outerRadius : this.scale.calculateCenterOffset(segment.value)
					},easingDecimal);

					segment.endAngle = segment.startAngle + segment.circumference;

					// If we've removed the first segment we need to set the first one to
					// start at the top.
					if (index === 0){
						segment.startAngle = Math.PI * 1.5;
					}

					//Check to see if it's the last segment, if not get the next and update the start angle
					if (index < this.segments.length - 1){
						this.segments[index+1].startAngle = segment.endAngle;
					}
					segment.draw();
				}, this);
				this.scale.draw();
			}
		});

	}).call(this);
	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			helpers = Chart.helpers;



		Chart.Type.extend({
			name: "Radar",
			defaults:{
				//Boolean - Whether to show lines for each scale point
				scaleShowLine : true,

				//Boolean - Whether we show the angle lines out of the radar
				angleShowLineOut : true,

				//Boolean - Whether to show labels on the scale
				scaleShowLabels : false,

				// Boolean - Whether the scale should begin at zero
				scaleBeginAtZero : true,

				//String - Colour of the angle line
				angleLineColor : "rgba(0,0,0,.1)",

				//Number - Pixel width of the angle line
				angleLineWidth : 1,

				//String - Point label font declaration
				pointLabelFontFamily : "'Arial'",

				//String - Point label font weight
				pointLabelFontStyle : "normal",

				//Number - Point label font size in pixels
				pointLabelFontSize : 10,

				//String - Point label font colour
				pointLabelFontColor : "#666",

				//Boolean - Whether to show a dot for each point
				pointDot : true,

				//Number - Radius of each point dot in pixels
				pointDotRadius : 3,

				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth : 1,

				//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
				pointHitDetectionRadius : 20,

				//Boolean - Whether to show a stroke for datasets
				datasetStroke : true,

				//Number - Pixel width of dataset stroke
				datasetStrokeWidth : 2,

				//Boolean - Whether to fill the dataset with a colour
				datasetFill : true,

				//String - A legend template
				legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

			},

			initialize: function(data){
				this.PointClass = Chart.Point.extend({
					strokeWidth : this.options.pointDotStrokeWidth,
					radius : this.options.pointDotRadius,
					display: this.options.pointDot,
					hitDetectionRadius : this.options.pointHitDetectionRadius,
					ctx : this.chart.ctx
				});

				this.datasets = [];

				this.buildScale(data);

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

						this.eachPoints(function(point){
							point.restore(['fillColor', 'strokeColor']);
						});
						helpers.each(activePointsCollection, function(activePoint){
							activePoint.fillColor = activePoint.highlightFill;
							activePoint.strokeColor = activePoint.highlightStroke;
						});

						this.showTooltip(activePointsCollection);
					});
				}

				//Iterate through each of the datasets, and build this into a property of the chart
				helpers.each(data.datasets,function(dataset){

					var datasetObject = {
						label: dataset.label || null,
						fillColor : dataset.fillColor,
						strokeColor : dataset.strokeColor,
						pointColor : dataset.pointColor,
						pointStrokeColor : dataset.pointStrokeColor,
						points : []
					};

					this.datasets.push(datasetObject);

					helpers.each(dataset.data,function(dataPoint,index){
						//Add a new point for each piece of data, passing any required data to draw.
						var pointPosition;
						if (!this.scale.animation){
							pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
						}
						datasetObject.points.push(new this.PointClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
							y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
							strokeColor : dataset.pointStrokeColor,
							fillColor : dataset.pointColor,
							highlightFill : dataset.pointHighlightFill || dataset.pointColor,
							highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
						}));
					},this);

				},this);

				this.render();
			},
			eachPoints : function(callback){
				helpers.each(this.datasets,function(dataset){
					helpers.each(dataset.points,callback,this);
				},this);
			},

			getPointsAtEvent : function(evt){
				var mousePosition = helpers.getRelativePosition(evt),
					fromCenter = helpers.getAngleFromPoint({
						x: this.scale.xCenter,
						y: this.scale.yCenter
					}, mousePosition);

				var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
					pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
					activePointsCollection = [];

				// If we're at the top, make the pointIndex 0 to get the first of the array.
				if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
					pointIndex = 0;
				}

				if (fromCenter.distance <= this.scale.drawingArea){
					helpers.each(this.datasets, function(dataset){
						activePointsCollection.push(dataset.points[pointIndex]);
					});
				}

				return activePointsCollection;
			},

			buildScale : function(data){
				this.scale = new Chart.RadialScale({
					display: this.options.showScale,
					fontStyle: this.options.scaleFontStyle,
					fontSize: this.options.scaleFontSize,
					fontFamily: this.options.scaleFontFamily,
					fontColor: this.options.scaleFontColor,
					showLabels: this.options.scaleShowLabels,
					showLabelBackdrop: this.options.scaleShowLabelBackdrop,
					backdropColor: this.options.scaleBackdropColor,
					backdropPaddingY : this.options.scaleBackdropPaddingY,
					backdropPaddingX: this.options.scaleBackdropPaddingX,
					lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
					lineColor: this.options.scaleLineColor,
					angleLineColor : this.options.angleLineColor,
					angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
					// Point labels at the edge of each line
					pointLabelFontColor : this.options.pointLabelFontColor,
					pointLabelFontSize : this.options.pointLabelFontSize,
					pointLabelFontFamily : this.options.pointLabelFontFamily,
					pointLabelFontStyle : this.options.pointLabelFontStyle,
					height : this.chart.height,
					width: this.chart.width,
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2,
					ctx : this.chart.ctx,
					templateString: this.options.scaleLabel,
					labels: data.labels,
					valuesCount: data.datasets[0].data.length
				});

				this.scale.setScaleSize();
				this.updateScaleRange(data.datasets);
				this.scale.buildYLabels();
			},
			updateScaleRange: function(datasets){
				var valuesArray = (function(){
					var totalDataArray = [];
					helpers.each(datasets,function(dataset){
						if (dataset.data){
							totalDataArray = totalDataArray.concat(dataset.data);
						}
						else {
							helpers.each(dataset.points, function(point){
								totalDataArray.push(point.value);
							});
						}
					});
					return totalDataArray;
				})();


				var scaleSizes = (this.options.scaleOverride) ?
					{
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					} :
					helpers.calculateScaleRange(
						valuesArray,
						helpers.min([this.chart.width, this.chart.height])/2,
						this.options.scaleFontSize,
						this.options.scaleBeginAtZero,
						this.options.scaleIntegersOnly
					);

				helpers.extend(
					this.scale,
					scaleSizes
				);

			},
			addData : function(valuesArray,label){
				//Map the values array for each of the datasets
				this.scale.valuesCount++;
				helpers.each(valuesArray,function(value,datasetIndex){
					var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
					this.datasets[datasetIndex].points.push(new this.PointClass({
						value : value,
						label : label,
						x: pointPosition.x,
						y: pointPosition.y,
						strokeColor : this.datasets[datasetIndex].pointStrokeColor,
						fillColor : this.datasets[datasetIndex].pointColor
					}));
				},this);

				this.scale.labels.push(label);

				this.reflow();

				this.update();
			},
			removeData : function(){
				this.scale.valuesCount--;
				this.scale.labels.shift();
				helpers.each(this.datasets,function(dataset){
					dataset.points.shift();
				},this);
				this.reflow();
				this.update();
			},
			update : function(){
				this.eachPoints(function(point){
					point.save();
				});
				this.reflow();
				this.render();
			},
			reflow: function(){
				helpers.extend(this.scale, {
					width : this.chart.width,
					height: this.chart.height,
					size : helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				});
				this.updateScaleRange(this.datasets);
				this.scale.setScaleSize();
				this.scale.buildYLabels();
			},
			draw : function(ease){
				var easeDecimal = ease || 1,
					ctx = this.chart.ctx;
				this.clear();
				this.scale.draw();

				helpers.each(this.datasets,function(dataset){

					//Transition each point first so that the line and point drawing isn't out of sync
					helpers.each(dataset.points,function(point,index){
						if (point.hasValue()){
							point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
						}
					},this);



					//Draw the line between all the points
					ctx.lineWidth = this.options.datasetStrokeWidth;
					ctx.strokeStyle = dataset.strokeColor;
					ctx.beginPath();
					helpers.each(dataset.points,function(point,index){
						if (index === 0){
							ctx.moveTo(point.x,point.y);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}
					},this);
					ctx.closePath();
					ctx.stroke();

					ctx.fillStyle = dataset.fillColor;
					ctx.fill();

					//Now draw the points over the line
					//A little inefficient double looping, but better than the line
					//lagging behind the point positions
					helpers.each(dataset.points,function(point){
						if (point.hasValue()){
							point.draw();
						}
					});

				},this);

			}

		});





	}).call(this);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(videojs) {/*** IMPORTS FROM imports-loader ***/
	(function() {

	(function(window){
	  var urlCount = 0,
	      NativeMediaSource = window.MediaSource || window.WebKitMediaSource || {},
	      nativeUrl = window.URL || {},
	      EventEmitter,
	      flvCodec = /video\/flv(;\s*codecs=["']vp6,aac["'])?$/,
	      objectUrlPrefix = 'blob:vjs-media-source/';

	  EventEmitter = function(){};
	  EventEmitter.prototype.init = function(){
	    this.listeners = [];
	  };
	  EventEmitter.prototype.addEventListener = function(type, listener){
	    if (!this.listeners[type]){
	      this.listeners[type] = [];
	    }
	    this.listeners[type].unshift(listener);
	  };
	  EventEmitter.prototype.removeEventListener = function(type, listener){
	    var listeners = this.listeners[type],
	        i = listeners.length;
	    while (i--) {
	      if (listeners[i] === listener) {
	        return listeners.splice(i, 1);
	      }
	    }
	  };
	  EventEmitter.prototype.trigger = function(event){
	    var listeners = this.listeners[event.type] || [],
	        i = listeners.length;
	    while (i--) {
	      listeners[i](event);
	    }
	  };

	  // extend the media source APIs

	  // Media Source
	  videojs.MediaSource = function(){
	    var self = this;
	    videojs.MediaSource.prototype.init.call(this);

	    this.sourceBuffers = [];
	    this.readyState = 'closed';
	    this.listeners = {
	      sourceopen: [function(event){
	        // find the swf where we will push media data
	        self.swfObj = document.getElementById(event.swfId);
	        self.readyState = 'open';

	        // trigger load events
	        if (self.swfObj) {
	          self.swfObj.vjs_load();
	        }
	      }],
	      webkitsourceopen: [function(event){
	        self.trigger({
	          type: 'sourceopen'
	        });
	      }]
	    };
	  };
	  videojs.MediaSource.prototype = new EventEmitter();

	  /**
	   * The maximum size in bytes for append operations to the video.js
	   * SWF. Calling through to Flash blocks and can be expensive so
	   * tuning this parameter may improve playback on slower
	   * systems. There are two factors to consider:
	   * - Each interaction with the SWF must be quick or you risk dropping
	   * video frames. To maintain 60fps for the rest of the page, each append
	   * cannot take longer than 16ms. Given the likelihood that the page will
	   * be executing more javascript than just playback, you probably want to
	   * aim for ~8ms.
	   * - Bigger appends significantly increase throughput. The total number of
	   * bytes over time delivered to the SWF must exceed the video bitrate or
	   * playback will stall.
	   *
	   * The default is set so that a 4MB/s stream should playback
	   * without stuttering.
	   */
	  videojs.MediaSource.BYTES_PER_SECOND_GOAL = 4 * 1024 * 1024;
	  videojs.MediaSource.TICKS_PER_SECOND = 60;

	  // create a new source buffer to receive a type of media data
	  videojs.MediaSource.prototype.addSourceBuffer = function(type){
	    var sourceBuffer;

	    // if this is an FLV type, we'll push data to flash
	    if (flvCodec.test(type)) {
	      // Flash source buffers
	      sourceBuffer = new videojs.SourceBuffer(this);
	    } else if (this.nativeSource) {
	      // native source buffers
	      sourceBuffer = this.nativeSource.addSourceBuffer.apply(this.nativeSource, arguments);
	    } else {
	      throw new Error('NotSupportedError (Video.js)');
	    }

	    this.sourceBuffers.push(sourceBuffer);
	    return sourceBuffer;
	  };
	  videojs.MediaSource.prototype.endOfStream = function(){
	    this.readyState = 'ended';
	  };

	  // store references to the media sources so they can be connected
	  // to a video element (a swf object)
	  videojs.mediaSources = {};
	  // provide a method for a swf object to notify JS that a media source is now open
	  videojs.MediaSource.open = function(msObjectURL, swfId){
	    var mediaSource = videojs.mediaSources[msObjectURL];

	    if (mediaSource) {
	      mediaSource.trigger({
	        type: 'sourceopen',
	        swfId: swfId
	      });
	    } else {
	      throw new Error('Media Source not found (Video.js)');
	    }
	  };

	  // Source Buffer
	  videojs.SourceBuffer = function(source){
	    var self = this,

	        // byte arrays queued to be appended
	        buffer = [],

	        // the total number of queued bytes
	        bufferSize = 0,
	        scheduleTick = function(func) {
	          // Chrome doesn't invoke requestAnimationFrame callbacks
	          // in background tabs, so use setTimeout.
	          window.setTimeout(func,
	                            Math.ceil(1000 / videojs.MediaSource.TICKS_PER_SECOND));
	        },
	        append = function() {
	          var chunk, i, length, payload, maxSize,
	              binary = '';

	          if (!buffer.length) {
	            // do nothing if the buffer is empty
	            return;
	          }

	          if (document.hidden) {
	            // When the document is hidden, the browser will likely
	            // invoke callbacks less frequently than we want. Just
	            // append a whole second's worth of data. It doesn't
	            // matter if the video janks, since the user can't see it.
	            maxSize = videojs.MediaSource.BYTES_PER_SECOND_GOAL;
	          } else {
	            maxSize = Math.ceil(videojs.MediaSource.BYTES_PER_SECOND_GOAL/
	                                videojs.MediaSource.TICKS_PER_SECOND);
	          }

	          // concatenate appends up to the max append size
	          payload = new Uint8Array(Math.min(maxSize, bufferSize));
	          i = payload.byteLength;
	          while (i) {
	            chunk = buffer[0].subarray(0, i);

	            payload.set(chunk, payload.byteLength - i);

	            // requeue any bytes that won't make it this round
	            if (chunk.byteLength < buffer[0].byteLength) {
	              buffer[0] = buffer[0].subarray(i);
	            } else {
	              buffer.shift();
	            }

	            i -= chunk.byteLength;
	          }
	          bufferSize -= payload.byteLength;

	          // base64 encode the bytes
	          for (i = 0, length = payload.byteLength; i < length; i++) {
	            binary += String.fromCharCode(payload[i]);
	          }
	          b64str = window.btoa(binary);

	          // bypass normal ExternalInterface calls and pass xml directly
	          // IE can be slow by default
	          self.source.swfObj.CallFunction('<invoke name="vjs_appendBuffer"' +
	                                          'returntype="javascript"><arguments><string>' +
	                                          b64str +
	                                          '</string></arguments></invoke>');

	          // schedule another append if necessary
	          if (bufferSize !== 0) {
	            scheduleTick(append);
	          } else {
	            self.updating = false;
	            self.trigger({ type: 'updateend' });

	            if (self.source.readyState === 'ended') {
	              self.source.swfObj.vjs_endOfStream();
	            }
	          }
	        };

	    videojs.SourceBuffer.prototype.init.call(this);
	    this.source = source;

	    // indicates whether the asynchronous continuation of an operation
	    // is still being processed
	    // see https://w3c.github.io/media-source/#widl-SourceBuffer-updating
	    this.updating = false;

	    // accept video data and pass to the video (swf) object
	    this.appendBuffer = function(uint8Array){
	      var error;

	      if (this.updating) {
	        error = new Error('SourceBuffer.append() cannot be called ' +
	                          'while an update is in progress');
	        error.name = 'InvalidStateError';
	        error.code = 11;
	        throw error;
	      }
	      if (buffer.length === 0) {
	        scheduleTick(append);
	      }

	      this.updating = true;
	      this.source.readyState = 'open';
	      this.trigger({ type: 'update' });

	      buffer.push(uint8Array);
	      bufferSize += uint8Array.byteLength;
	    };

	    // reset the parser and remove any data queued to be sent to the swf
	    this.abort = function() {
	      buffer = [];
	      bufferSize = 0;
	      this.source.swfObj.vjs_abort();

	      // report any outstanding updates have ended
	      if (this.updating) {
	        this.updating = false;
	        this.trigger({ type: 'updateend' });
	      }

	    };
	  };
	  videojs.SourceBuffer.prototype = new EventEmitter();

	  // URL
	  videojs.URL = {
	    createObjectURL: function(object){
	      var url = objectUrlPrefix + urlCount;

	      urlCount++;

	      // setup the mapping back to object
	      videojs.mediaSources[url] = object;

	      return url;
	    }
	  };

	  // plugin
	  videojs.plugin('mediaSource', function(options){
	    var player = this;

	    player.on('loadstart', function(){
	      var url = player.currentSrc(),
	          trigger = function(event){
	            mediaSource.trigger(event);
	          },
	          mediaSource;

	      if (player.techName === 'Html5' && url.indexOf(objectUrlPrefix) === 0) {
	        // use the native media source implementation
	        mediaSource = videojs.mediaSources[url];

	        if (!mediaSource.nativeUrl) {
	          // initialize the native source
	          mediaSource.nativeSource = new NativeMediaSource();
	          mediaSource.nativeSource.addEventListener('sourceopen', trigger, false);
	          mediaSource.nativeSource.addEventListener('webkitsourceopen', trigger, false);
	          mediaSource.nativeUrl = nativeUrl.createObjectURL(mediaSource.nativeSource);
	        }
	        player.src(mediaSource.nativeUrl);
	      }
	    });
	  });

	})(this);
	}.call(window));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(71)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./../node_modules/less-loader/index.js!./vpoll-player.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./../node_modules/less-loader/index.js!./vpoll-player.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(67)();
	exports.push([module.id, "/*!\nVideo.js Default Styles (http://videojs.com)\nVersion GENERATED_AT_BUILD\nCreate your own skin at http://designer.videojs.com\n*/\n/* SKIN\n================================================================================\nThe main class name for all skin-specific styles. To make your own skin,\nreplace all occurrences of 'vjs-default-skin' with a new name. Then add your new\nskin name to your video tag instead of the default skin.\ne.g. <video class=\"video-js my-skin-name\">\n*/\n.vjs-default-skin {\n  color: #cccccc;\n}\n/* Custom Icon Font\n--------------------------------------------------------------------------------\nThe control icons are from a custom font. Each icon corresponds to a character\n(e.g. \"\\e001\"). Font icons allow for easy scaling and coloring of icons.\n*/\n@font-face {\n  font-family: 'VideoJS';\n  src: url("+__webpack_require__(68)+");\n  src: url("+__webpack_require__(68)+"?#iefix) format('embedded-opentype'), url("+__webpack_require__(66)+") format('woff'), url("+__webpack_require__(69)+") format('truetype'), url("+__webpack_require__(70)+"#icomoon) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Base UI Component Classes\n--------------------------------------------------------------------------------\n*/\n/* Slider - used for Volume bar and Seek bar */\n.vjs-default-skin .vjs-slider {\n  /* Replace browser focus highlight with handle highlight */\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  /* background-color-with-alpha */\n  background-color: #333333;\n  background-color: rgba(51, 51, 51, 0.9);\n}\n.vjs-default-skin .vjs-slider:focus {\n  /* box-shadow */\n  box-shadow: 0 0 2em #ffffff;\n}\n.vjs-default-skin .vjs-slider-handle {\n  position: absolute;\n  /* Needed for IE6 */\n  left: 0;\n  top: 0;\n}\n.vjs-default-skin .vjs-slider-handle:before {\n  content: \"\\e009\";\n  font-family: VideoJS;\n  font-size: 1em;\n  line-height: 1;\n  text-align: center;\n  text-shadow: 0em 0em 1em #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* Rotate the square icon to make a diamond */\n  /* transform */\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n/* Control Bar\n--------------------------------------------------------------------------------\nThe default control bar that is a container for most of the controls.\n*/\n.vjs-default-skin .vjs-control-bar {\n  /* Start hidden */\n  display: none;\n  position: absolute;\n  /* Place control bar at the bottom of the player box/video.\n     If you want more margin below the control bar, add more height. */\n  bottom: 0;\n  /* Use left/right to stretch to 100% width of player div */\n  left: 0;\n  right: 0;\n  /* Height includes any margin you want above or below control items */\n  height: 3.0em;\n  /* background-color-with-alpha */\n  background-color: #07141e;\n  background-color: rgba(7, 20, 30, 0.7);\n}\n/* Show the control bar only once the video has started playing */\n.vjs-default-skin.vjs-has-started .vjs-control-bar {\n  display: block;\n  /* Visibility needed to make sure things hide in older browsers too. */\n  visibility: visible;\n  opacity: 1;\n  /* transition */\n  -webkit-transition: visibility 0.1s, opacity 0.1s;\n  transition: visibility 0.1s, opacity 0.1s;\n}\n/* Hide the control bar when the video is playing and the user is inactive  */\n.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  /* transition */\n  -webkit-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s;\n}\n.vjs-default-skin.vjs-controls-disabled .vjs-control-bar {\n  display: none;\n}\n.vjs-default-skin.vjs-using-native-controls .vjs-control-bar {\n  display: none;\n}\n/* The control bar shouldn't show after an error */\n.vjs-default-skin.vjs-error .vjs-control-bar {\n  display: none;\n}\n/* Don't hide the control bar if it's audio */\n.vjs-audio.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible;\n}\n/* IE8 is flakey with fonts, and you have to change the actual content to force\nfonts to show/hide properly.\n  - \"\\9\" IE8 hack didn't work for this\n  - Found in XP IE8 from http://modern.ie. Does not show up in \"IE8 mode\" in IE9\n*/\n@media \\0screen {\n  .vjs-default-skin.vjs-user-inactive.vjs-playing .vjs-control-bar :before {\n    content: \"\";\n  }\n}\n/* General styles for individual controls. */\n.vjs-default-skin .vjs-control {\n  outline: none;\n  position: relative;\n  float: left;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 3.0em;\n  width: 4em;\n}\n/* Font button icons */\n.vjs-default-skin .vjs-control:before {\n  font-family: VideoJS;\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n/* Replacement for focus outline */\n.vjs-default-skin .vjs-control:focus:before,\n.vjs-default-skin .vjs-control:hover:before {\n  text-shadow: 0em 0em 1em #ffffff;\n}\n.vjs-default-skin .vjs-control:focus {\n  /*  outline: 0; */\n  /* keyboard-only users cannot see the focus on several of the UI elements when\n  this is set to 0 */\n}\n/* Hide control text visually, but have it available for screenreaders */\n.vjs-default-skin .vjs-control-text {\n  /* hide-visually */\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n/* Play/Pause\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-play-control {\n  width: 5em;\n  cursor: pointer;\n}\n.vjs-default-skin .vjs-play-control:before {\n  content: \"\\e001\";\n}\n.vjs-default-skin.vjs-playing .vjs-play-control:before {\n  content: \"\\e002\";\n}\n/* Playback toggle\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-playback-rate .vjs-playback-rate-value {\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n.vjs-default-skin .vjs-playback-rate.vjs-menu-button .vjs-menu .vjs-menu-content {\n  width: 4em;\n  left: -2em;\n  list-style: none;\n}\n/* Volume/Mute\n-------------------------------------------------------------------------------- */\n.vjs-default-skin .vjs-mute-control,\n.vjs-default-skin .vjs-volume-menu-button {\n  cursor: pointer;\n  float: right;\n}\n.vjs-default-skin .vjs-mute-control:before,\n.vjs-default-skin .vjs-volume-menu-button:before {\n  content: \"\\e006\";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-0:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-0:before {\n  content: \"\\e003\";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-1:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-1:before {\n  content: \"\\e004\";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-2:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-2:before {\n  content: \"\\e005\";\n}\n.vjs-default-skin .vjs-volume-control {\n  width: 5em;\n  float: right;\n}\n.vjs-default-skin .vjs-volume-bar {\n  width: 5em;\n  height: 0.6em;\n  margin: 1.1em auto 0;\n}\n.vjs-default-skin .vjs-volume-level {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0.5em;\n  /* assuming volume starts at 1.0 */\n  width: 100%;\n  background: #66a8cc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat;\n}\n.vjs-default-skin .vjs-volume-bar .vjs-volume-handle {\n  width: 0.5em;\n  height: 0.5em;\n  /* Assumes volume starts at 1.0. If you change the size of the\n     handle relative to the volume bar, you'll need to update this value\n     too. */\n  left: 4.5em;\n}\n.vjs-default-skin .vjs-volume-handle:before {\n  font-size: 0.9em;\n  top: -0.2em;\n  left: -0.2em;\n  width: 1em;\n  height: 1em;\n}\n/* The volume menu button is like menu buttons (captions/subtitles) but works\n    a little differently. It needs to be possible to tab to the volume slider\n    without hitting space bar on the menu button. To do this we're not using\n    display:none to hide the slider menu by default, and instead setting the\n    width and height to zero. */\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu {\n  display: block;\n  width: 0;\n  height: 0;\n  border-top-color: transparent;\n}\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu .vjs-menu-content {\n  height: 0;\n  width: 0;\n}\n.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu,\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing {\n  border-top-color: rgba(7, 40, 50, 0.5);\n  /* Same as ul background */\n}\n.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content,\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing .vjs-menu-content {\n  height: 2.9em;\n  width: 10em;\n}\n/* Progress\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-progress-control {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: auto;\n  font-size: 0.3em;\n  height: 1em;\n  /* Set above the rest of the controls. */\n  top: -1em;\n  /* Shrink the bar slower than it grows. */\n  /* transition */\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n/* On hover, make the progress bar grow to something that's more clickable.\n    This simply changes the overall font for the progress bar, and this\n    updates both the em-based widths and heights, as wells as the icon font */\n.vjs-default-skin:hover .vjs-progress-control {\n  font-size: .9em;\n  /* Even though we're not changing the top/height, we need to include them in\n      the transition so they're handled correctly. */\n  /* transition */\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n/* Box containing play and load progresses. Also acts as seek scrubber. */\n.vjs-default-skin .vjs-progress-holder {\n  height: 100%;\n}\n/* Progress Bars */\n.vjs-default-skin .vjs-progress-holder .vjs-play-progress,\n.vjs-default-skin .vjs-progress-holder .vjs-load-progress,\n.vjs-default-skin .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  /* updated by javascript during playback */\n  width: 0;\n  /* Needed for IE6 */\n  left: 0;\n  top: 0;\n}\n.vjs-default-skin .vjs-play-progress {\n  /*\n    Using a data URI to create the white diagonal lines with a transparent\n      background. Surprisingly works in IE8.\n      Created using http://www.patternify.com\n    Changing the first color value will change the bar color.\n    Also using a paralax effect to make the lines move backwards.\n      The -50% left position makes that happen.\n  */\n  background: #66a8cc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat;\n}\n.vjs-default-skin .vjs-load-progress {\n  background: #646464 /* IE8- Fallback */;\n  background: rgba(255, 255, 255, 0.2);\n}\n/* there are child elements of the load progress bar that represent the\n   specific time ranges that have been buffered */\n.vjs-default-skin .vjs-load-progress div {\n  background: #787878 /* IE8- Fallback */;\n  background: rgba(255, 255, 255, 0.1);\n}\n.vjs-default-skin .vjs-seek-handle {\n  width: 1.5em;\n  height: 100%;\n}\n.vjs-default-skin .vjs-seek-handle:before {\n  padding-top: 0.1em /* Minor adjustment */;\n}\n/* Live Mode\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin.vjs-live .vjs-time-controls,\n.vjs-default-skin.vjs-live .vjs-time-divider,\n.vjs-default-skin.vjs-live .vjs-progress-control {\n  display: none;\n}\n.vjs-default-skin.vjs-live .vjs-live-display {\n  display: block;\n}\n/* Live Display\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-live-display {\n  display: none;\n  font-size: 1em;\n  line-height: 3em;\n}\n/* Time Display\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-time-controls {\n  font-size: 1em;\n  /* Align vertically by making the line height the same as the control bar */\n  line-height: 3em;\n}\n.vjs-default-skin .vjs-current-time {\n  float: left;\n}\n.vjs-default-skin .vjs-duration {\n  float: left;\n}\n/* Remaining time is in the HTML, but not included in default design */\n.vjs-default-skin .vjs-remaining-time {\n  display: none;\n  float: left;\n}\n.vjs-time-divider {\n  float: left;\n  line-height: 3em;\n}\n/* Fullscreen\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-fullscreen-control {\n  width: 3.8em;\n  cursor: pointer;\n  float: right;\n}\n.vjs-default-skin .vjs-fullscreen-control:before {\n  content: \"\\e000\";\n}\n/* Switch to the exit icon when the player is in fullscreen */\n.vjs-default-skin.vjs-fullscreen .vjs-fullscreen-control:before {\n  content: \"\\e00b\";\n}\n/* Big Play Button (play button at start)\n--------------------------------------------------------------------------------\nPositioning of the play button in the center or other corners can be done more\neasily in the skin designer. http://designer.videojs.com/\n*/\n.vjs-default-skin .vjs-big-play-button {\n  left: 0.5em;\n  top: 0.5em;\n  font-size: 3em;\n  display: block;\n  z-index: 2;\n  position: absolute;\n  width: 4em;\n  height: 2.6em;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  opacity: 1;\n  /* Need a slightly gray bg so it can be seen on black backgrounds */\n  /* background-color-with-alpha */\n  background-color: #07141e;\n  background-color: rgba(7, 20, 30, 0.7);\n  border: 0.1em solid #3b4249;\n  /* border-radius */\n  border-radius: 0.8em;\n  /* box-shadow */\n  box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.25);\n  /* transition */\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n/* Optionally center */\n.vjs-default-skin.vjs-big-play-centered .vjs-big-play-button {\n  /* Center it horizontally */\n  left: 50%;\n  margin-left: -2.1em;\n  /* Center it vertically */\n  top: 50%;\n  margin-top: -1.4em;\n}\n/* Hide if controls are disabled */\n.vjs-default-skin.vjs-controls-disabled .vjs-big-play-button {\n  display: none;\n}\n/* Hide when video starts playing */\n.vjs-default-skin.vjs-has-started .vjs-big-play-button {\n  display: none;\n}\n/* Hide on mobile devices. Remove when we stop using native controls\n    by default on mobile  */\n.vjs-default-skin.vjs-using-native-controls .vjs-big-play-button {\n  display: none;\n}\n.vjs-default-skin:hover .vjs-big-play-button,\n.vjs-default-skin .vjs-big-play-button:focus {\n  outline: 0;\n  border-color: #fff;\n  /* IE8 needs a non-glow hover state */\n  background-color: #505050;\n  background-color: rgba(50, 50, 50, 0.75);\n  /* box-shadow */\n  box-shadow: 0 0 3em #ffffff;\n  /* transition */\n  -webkit-transition: all 0s;\n  transition: all 0s;\n}\n.vjs-default-skin .vjs-big-play-button:before {\n  content: \"\\e001\";\n  font-family: VideoJS;\n  /* In order to center the play icon vertically we need to set the line height\n     to the same as the button height */\n  line-height: 2.6em;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center /* Needed for IE8 */;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vjs-error .vjs-big-play-button {\n  display: none;\n}\n/* Error Display\n--------------------------------------------------------------------------------\n*/\n.vjs-error-display {\n  display: none;\n}\n.vjs-error .vjs-error-display {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.vjs-error .vjs-error-display:before {\n  content: 'X';\n  font-family: Arial;\n  font-size: 4em;\n  color: #666666;\n  /* In order to center the play icon vertically we need to set the line height\n     to the same as the button height */\n  line-height: 1;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center /* Needed for IE8 */;\n  vertical-align: middle;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -0.5em;\n  width: 100%;\n}\n.vjs-error-display div {\n  position: absolute;\n  bottom: 1em;\n  right: 0;\n  left: 0;\n  font-size: 1.4em;\n  text-align: center;\n  padding: 3px;\n  background: #000000;\n  background: rgba(0, 0, 0, 0.5);\n}\n.vjs-error-display a,\n.vjs-error-display a:visited {\n  color: #F4A460;\n}\n/* Loading Spinner\n--------------------------------------------------------------------------------\n*/\n.vjs-loading-spinner {\n  /* Should be hidden by default */\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 4em;\n  line-height: 1;\n  width: 1em;\n  height: 1em;\n  margin-left: -0.5em;\n  margin-top: -0.5em;\n  opacity: 0.75;\n}\n/* Show the spinner when waiting for data and seeking to a new time */\n.vjs-waiting .vjs-loading-spinner,\n.vjs-seeking .vjs-loading-spinner {\n  display: block;\n  /* only animate when showing because it can be processor heavy */\n  /* animation */\n  -webkit-animation: spin 1.5s infinite linear;\n  animation: spin 1.5s infinite linear;\n}\n/* Errors are unrecoverable without user interaction so hide the spinner */\n.vjs-error .vjs-loading-spinner {\n  display: none;\n  /* ensure animation doesn't continue while hidden */\n  /* animation */\n  -webkit-animation: none;\n  animation: none;\n}\n.vjs-default-skin .vjs-loading-spinner:before {\n  content: \"\\e01e\";\n  font-family: VideoJS;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  text-shadow: 0em 0em 0.1em #000;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n/* Menu Buttons (Captions/Subtitles/etc.)\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-menu-button {\n  float: right;\n  cursor: pointer;\n}\n.vjs-default-skin .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0em;\n  /* (Width of vjs-menu - width of button) / 2 */\n  width: 0em;\n  height: 0em;\n  margin-bottom: 3em;\n  border-left: 2em solid transparent;\n  border-right: 2em solid transparent;\n  border-top: 1.55em solid #000000;\n  /* Same width top as ul bottom */\n  border-top-color: rgba(7, 40, 50, 0.5);\n  /* Same as ul background */\n}\n/* Button Pop-up Menu */\n.vjs-default-skin .vjs-menu-button .vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  width: 10em;\n  bottom: 1.5em;\n  /* Same bottom as vjs-menu border-top */\n  max-height: 15em;\n  overflow: auto;\n  left: -5em;\n  /* Width of menu - width of button / 2 */\n  /* background-color-with-alpha */\n  background-color: #07141e;\n  background-color: rgba(7, 20, 30, 0.7);\n  /* box-shadow */\n  box-shadow: -0.2em -0.2em 0.3em rgba(255, 255, 255, 0.2);\n}\n.vjs-default-skin .vjs-menu-button:hover .vjs-control-content .vjs-menu,\n.vjs-default-skin .vjs-control-content .vjs-menu.vjs-lock-showing {\n  display: block;\n}\n/* prevent menus from opening while scrubbing (FF, IE) */\n.vjs-default-skin.vjs-scrubbing .vjs-menu-button:hover .vjs-control-content .vjs-menu {\n  display: none;\n}\n.vjs-default-skin .vjs-menu-button ul li {\n  list-style: none;\n  margin: 0;\n  padding: 0.3em 0 0.3em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase;\n}\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected {\n  background-color: #000;\n}\n.vjs-default-skin .vjs-menu-button ul li:focus,\n.vjs-default-skin .vjs-menu-button ul li:hover,\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected:focus,\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected:hover {\n  outline: 0;\n  color: #111;\n  /* background-color-with-alpha */\n  background-color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.75);\n  /* box-shadow */\n  box-shadow: 0 0 1em #ffffff;\n}\n.vjs-default-skin .vjs-menu-button ul li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default;\n}\n/* Subtitles Button */\n.vjs-default-skin .vjs-subtitles-button:before {\n  content: \"\\e00c\";\n}\n/* Captions Button */\n.vjs-default-skin .vjs-captions-button:before {\n  content: \"\\e008\";\n}\n/* Chapters Button */\n.vjs-default-skin .vjs-chapters-button:before {\n  content: \"\\e00c\";\n}\n.vjs-default-skin .vjs-chapters-button.vjs-menu-button .vjs-menu .vjs-menu-content {\n  width: 24em;\n  left: -12em;\n}\n/* Replacement for focus outline */\n.vjs-default-skin .vjs-captions-button:focus .vjs-control-content:before,\n.vjs-default-skin .vjs-captions-button:hover .vjs-control-content:before {\n  /* box-shadow */\n  box-shadow: 0 0 1em #ffffff;\n}\n/*\nREQUIRED STYLES (be careful overriding)\n================================================================================\nWhen loading the player, the video tag is replaced with a DIV,\nthat will hold the video tag or object tag for other playback methods.\nThe div contains the video playback element (Flash or HTML5) and controls,\nand sets the width and height of the video.\n\n** If you want to add some kind of border/padding (e.g. a frame), or special\npositioning, use another containing element. Otherwise you risk messing up\ncontrol positioning and full window mode. **\n*/\n.video-js {\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  /* Start with 10px for base font size so other dimensions can be em based and\n     easily calculable. */\n  font-size: 10px;\n  /* Allow poster to be vertically aligned. */\n  vertical-align: middle;\n  /*  display: table-cell; */\n  /*This works in Safari but not Firefox.*/\n  /* Provide some basic defaults for fonts */\n  font-weight: normal;\n  font-style: normal;\n  /* Avoiding helvetica: issue #376 */\n  font-family: Arial, sans-serif;\n  /* Turn off user selection (text highlighting) by default.\n     The majority of player components will not be text blocks.\n     Text areas will need to turn user selection back on. */\n  /* user-select */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Playback technology elements expand to the width/height of the containing div\n    <video> or <object> */\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/* Fix for Firefox 9 fullscreen (only if it is enabled). Not needed when\n   checking fullScreenEnabled. */\n.video-js:-moz-full-screen {\n  position: absolute;\n}\n/* Fullscreen Styles */\nbody.vjs-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  /* Fix for IE6 full-window. http://www.cssplay.co.uk/layouts/fixed.html */\n  overflow-y: auto;\n}\n.video-js.vjs-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100% !important;\n  height: 100% !important;\n  /* IE6 full-window (underscore hack) */\n  _position: absolute;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none;\n}\n/* Poster Styles */\n.vjs-poster {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vjs-poster img {\n  display: block;\n  margin: 0 auto;\n  max-height: 100%;\n  padding: 0;\n  width: 100%;\n}\n/* Hide the poster after the video has started playing */\n.video-js.vjs-has-started .vjs-poster {\n  display: none;\n}\n/* Don't hide the poster if we're playing audio */\n.video-js.vjs-audio.vjs-has-started .vjs-poster {\n  display: block;\n}\n/* Hide the poster when controls are disabled because it's clickable\n    and the native poster can take over */\n.video-js.vjs-controls-disabled .vjs-poster {\n  display: none;\n}\n/* Hide the poster when native controls are used otherwise it covers them */\n.video-js.vjs-using-native-controls .vjs-poster {\n  display: none;\n}\n/* Text Track Styles */\n/* Overall track holder for both captions and subtitles */\n.video-js .vjs-text-track-display {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 3em;\n  right: 0;\n  pointer-events: none;\n}\n/* Captions Settings Dialog */\n.vjs-caption-settings {\n  position: relative;\n  top: 1em;\n  background-color: #000;\n  opacity: 0.75;\n  color: #FFF;\n  margin: 0 auto;\n  padding: 0.5em;\n  height: 15em;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  width: 40em;\n}\n.vjs-caption-settings .vjs-tracksettings {\n  top: 0;\n  bottom: 2em;\n  left: 0;\n  right: 0;\n  position: absolute;\n  overflow: auto;\n}\n.vjs-caption-settings .vjs-tracksettings-colors,\n.vjs-caption-settings .vjs-tracksettings-font {\n  float: left;\n}\n.vjs-caption-settings .vjs-tracksettings-colors:after,\n.vjs-caption-settings .vjs-tracksettings-font:after,\n.vjs-caption-settings .vjs-tracksettings-controls:after {\n  clear: both;\n}\n.vjs-caption-settings .vjs-tracksettings-controls {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n}\n.vjs-caption-settings .vjs-tracksetting {\n  margin: 5px;\n  padding: 3px;\n  min-height: 40px;\n}\n.vjs-caption-settings .vjs-tracksetting label {\n  display: block;\n  width: 100px;\n  margin-bottom: 5px;\n}\n.vjs-caption-settings .vjs-tracksetting span {\n  display: inline;\n  margin-left: 5px;\n}\n.vjs-caption-settings .vjs-tracksetting > div {\n  margin-bottom: 5px;\n  min-height: 20px;\n}\n.vjs-caption-settings .vjs-tracksetting > div:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  min-height: 0;\n}\n.vjs-caption-settings label > input {\n  margin-right: 10px;\n}\n.vjs-caption-settings input[type=\"button\"] {\n  width: 40px;\n  height: 40px;\n}\n/* Hide disabled or unsupported controls */\n.vjs-hidden {\n  display: none !important;\n}\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1;\n  visibility: visible;\n}\n/*  In IE8 w/ no JavaScript (no HTML5 shim), the video tag doesn't register.\n    The .video-js classname on the video tag also isn't considered.\n    This optional paragraph inside the video tag can provide a message to users\n    about what's required to play video. */\n.vjs-no-js {\n  padding: 2em;\n  color: #ccc;\n  background-color: #333;\n  font-size: 1.8em;\n  font-family: Arial, sans-serif;\n  text-align: center;\n  width: 30em;\n  height: 15em;\n  margin: 0 auto;\n}\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #F4A460;\n}\n/* -----------------------------------------------------------------------------\nThe original source of this file lives at\nhttps://github.com/videojs/video.js/blob/master/src/css/video-js.less */\n.vpoll-form-overlay {\n  position: relative;\n  background-color: #9ba9b3;\n  width: 30%;\n  height: 30%;\n  color: #000;\n  font-size: 12px;\n}\n.vpoll-form-overlay form {\n  display: table;\n}\n.vpoll-form-overlay p {\n  display: table-row;\n}\n.vpoll-form-overlay label {\n  display: table-cell;\n  padding-right: 12px;\n}\n.vpoll-form-overlay input {\n  display: table-cell;\n}\n.hide-el {\n  display: none;\n}\n", ""]);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:application/font-woff;base64,d09GRk9UVE8AAAnMAAsAAAAADWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABCAAABokAAAgsXGkfVUZGVE0AAAeUAAAAHAAAABxxb8IrR0RFRgAAB7AAAAAiAAAAJgAnADxPUy8yAAAH1AAAAEMAAABgVDdTq2NtYXAAAAgYAAAAVgAAAWr6rrHraGVhZAAACHAAAAAsAAAANgaEyq9oaGVhAAAInAAAABwAAAAkCSAFLWhtdHgAAAi4AAAAJwAAAEgr1gKfbWF4cAAACOAAAAAGAAAABgAWUABuYW1lAAAI6AAAANUAAAGk8SNjJXBvc3QAAAnAAAAADAAAACAAAwAAeJxlVX9MW9cVvhf88K0Bt2txSTfLxNsSqkZaITjdgrZ2KaZiWYaI47lkCYTgphB+mFB+xFgZJDamqa+TAH4EkoDVNKRA3eF2UEqaJqHENKiVUAJI2zrSLkWZNO2P/dPqPnyg2r2A00zTue87737nfee943vuNUYqFcIYk8P2muqaGgfCcQijXCUDKZlY2RqnZMUrG1Q0KZ4mqQwa9Eij7VlKH9wkqWmuXiqOWiU9TnhUj9Bjepz5Az1K0qv3Po6eEqnikYQISkaPo1SkR0a0GW1BGWgbykYvIDP6DcpHe1AhKkKl6BC3KlTXkNGQ2bA1oyE3I2MVMgVsFZAlwCRgm4DnBPxcwC8EbBewQ8CLAnIEmAXkcshchZcacp/jCX+WsV5srGaE8Ov4JH4D+zDFfnwKn8ZncDvuwJ04gGXchc/ibtyDz+Hz+AJ6MlaVGmnQU+hptINXUYiq0S30Bb6Jb8d1xL0Z96/4syqN6j+SVVKoVpgia6Ny1KrbqAHTikln1GiZdWlet5SynLLCL0nLUviUza/IMJ+gWJfk2L1W2RSVdD/WaJUrrEb3Ew08vfSMmC69wlJ0P9XAC/98iIzOR7Xv61poc7tbdgbpUDC4uHiVEcoe42MfI1mLa2wwOESDTvKtcQo2UniGj92w0Wh0u5vbWiiB5+//X2ZFfDzML8ts9VJkSbu68CqO353XR99K0KvuKhd0PpbX+kXJZGv3sc4W+eAQ7D0LTRScFOzHS6tb3Mda3S2lVu8vT0IeOQ15Hb8a3SM3n/d2e0Yrmf0Ec77Bmk6xvV0fhLoD5zs6e8Zudv7Nz/LI8t8/0h1nxl9/CT/kn/foFoiHXHhpEeLZpjRe3sI/upmRgCGh7eUG+35KXmye++u3Q59cTxungxVnLESJPtnCjDu+hB9xtXZd/fX36p41tZeri/5HPVDRbiFrS7Mkr3DjyyEm5ohldjYSmZ21RMxmi8VsYP2gWmXvTEVm7+yeyjVbducamBn6deWDjuHhwcHhYcdgebnDUW4AlWAHHGHBhh0D5WU1NWUGEBmoOva0gVL194p+FouFB9Zi4ZqBsnIH11UqozxkGyuZmBgbmxChiZIxm62kxGbI4u+xhypHRkKhkZHKkN1eWWk3aBWrksLbMFqv1Is25AubomNh1gT54OImfDjtCD1yqvY0xHFLPQpPnCRvq2//6dNpeod2+WRfF5C/7BBtlUqYizWxfBY2rHdImCdo4igSNvG03LNVz2ecTwNZxYxMDWowcnvgmZqznBc+jU0tT+mytwMuBjUVA49n392+UMwwZWo+xhm+u0Bm8iiVIBVSKVQw7j7f9VX5fXqffjX8+WcslaVSVgHckZkZ6W72OODVTOpiwNuziXbpGybrimmp01FNlnNYleQP+ANUprIv4AsQRTCD1aPOcUoW5+YWF3PmsrJycrLSqNvv8Xu4Aqokx1BpsJgSwWfN5SzybhkNDg5xLY/5PD4PdRPBx/QGvv8Vq843c2zmyK3a6Vdu7hvff8USzr+Uf2nn2Z2+nb7f/rGgtqD294cOFJEDReXW+oL6guO7/NzO/a7f0m957+UPS8ZLJioiDZH66RPTfjLtv3Vu8tLkpWvDox9+MBa6fnGy5115+EyYnEkYHhwIp7WrN8Hzunrb4X0H7Qftf6iyNdoaLW6L3+Lf01N4sfCt/e8eGjk0Un316HVy9Ib7E/+kf7J74uK1ix+Hxv/83vvhK4MfB68FJ+Qbvgnf9ZarjeSjxrGq4VfDr759ILivb3+g0LeXUErbJFrRXxM66S0/cfhYJVnvghCFRqhrhaEO1sZ2MRtrpKJT8qEIaKxVH7TEd7wlQpQ1srpONuSFNtgFNuAC3oz5rIjRWD/HeiqN/5LsGx1lVkjvl7x9rb2eXnKPJYOe6SF5m+QKuALODlLHNoOV1sFmyel1eVweAsn3QA/6e5AseVytLm8TgfTXKFhZ+mtSR1OnS3YREyTzHHqm/Vq64On19HlJP6QzK+1n6VJfR2/gQoAwrYnxF5lYsiT3dvZ29JFl3KozWyJrB0LEsnogiG9MoTqapOF/hk8gCeMNGQWeG3TZBCZmAitYt/ybWXkFfCYlijlnTcsmShURN4mYlHj58ptuWkZWbqtpWaO79jIBL/OCeCiFmaiU+PBBv7BA2YbshYfPd6aBRF4fcEfWj/bEZtrS7u5y9tF3gn0P7ZI1oi/4Du1zxnYLiW0X94mWVe1/AVE82XMAAAAAAAABAAAAANDR138AAAAAz5mnxQAAAADRBELmeJxjYGRgYOABYjEGOQYmBkYgFAViFqAIExAzQjAACdkAZAAAeJxjYGb+xTiBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKIHEC0lxTGBwYGJ8xMB/4f4ABSAJ5QDVwBQpAyAgAobYMfwB4nGNgYGBmgGAZBkYGEEgB8hjBfBYGDyDNx8DBwMTABhRTeMD3QP4Zw/+///+DVSo8YHggB+Uz/n+swCL/VUoUqhsFMLIBMRO6KCpgxi895AEAetoSOQAAeJxjYGQAg2MiZgnx/DZfGbhZwPyLLM4yCPr/LtY45gNALgcDE0gUAOkeCHF4nGNgZGBgPvD/AAMDaxwDA5hkZEAFfABctgNZeJxjYEAAJiBmgeADQNzAguAzsDhAxFnjwHQDgwVcmzyIAABxXQOhAAAAUAAAFgAAeJx1zT0KwjAcBfDXL8UKIiguLh0FoVg8goMU6eLg4tTWIAVtIOpQPIBHcPQ2grfy1f4dG0j6y0tfAmCINyz8hy220MVIbNNzsUOvxC69F3vo4y7uMH+KfYzxYctye/JCYwsDqrFNT8UOvRS79EbsYYJc3GH+EPuY4VVfW/BY48ypUXKb67PWxBYKR9xwQgrDrTreTqlp/78t3/EegwvP6zxAhBALxspcCl0GUbho767ZLX/9FFd+D+xnqLjGv0byb6xVqUx6VYcgq4I410ld/wJ2ozpzAAAAeJxjYGbACwAAfQAE"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "062f06670a3b82ffb0732701c9d1e098.eot"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0bfbb17e6e700d4815bc405d9fb8d65a.ttf"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "17371a8f614b03b01b31a94d43cab2c4.svg"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var vjs=__webpack_require__(6);vjs.Chart=vjs.Button.extend({init:function(t,o){vjs.Button.call(this,t,o)},buildCSSClass:function(){return"vpoll-chart "+vjs.Button.prototype.buildCSSClass.call(this)},onClick:function(t){alert("a")}}),vjs.Chart.prototype.buttonText="button text",vjs.Chart.prototype.options_={};
	//# sourceMappingURL=out.map.js

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var vjs=__webpack_require__(6);vjs.FormPoll=vjs.Component.extend({init:function(e,t){vjs.Component.call(this,e,t)},createEl:function(e,t){var l=vjs.createEl("div",{className:"vpoll-form-overlay hide-el"}),n='<fieldset><legend> Question to ask </legend>\n      <p><label for="question">Question: </label>\n      <input type="text" name="question" id="question" value=""></p></fieldset>\n      <fieldset><legend> Possible answers </legend>\n      <p><label for="alt_1">Alternative 1: </label>\n      <input type="text" name="question" id="alt_1" value=""></p>\n      <p><label for="alt_2">Alternative 2: </label>\n      <input type="text" name="question" id="alt_2" value=""></p></fieldset>\n      <p><input type="button" value="Submit" onClick="sendPoll()"></p>',i=vjs.createEl("form",{className:"vjs-form",innerHTML:n});return l.appendChild(i),l}}),vjs.FormPoll.prototype.options_={};
	//# sourceMappingURL=out.map.js

/***/ }
/******/ ]);