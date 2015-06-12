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

	"use strict";function vPollPlayer(e,r){if(!r.socketUrl)throw new Error("options.socketUrl needs to be specified");var o=window.socket=_socketIoClient2["default"](r.socketUrl);return o.on("message",function(e){return console.log(e)}),_videoJs2["default"](e,r)}var _Object$defineProperty=__webpack_require__(1)["default"],_interopRequireDefault=__webpack_require__(5)["default"];_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=vPollPlayer;var _videoJs=__webpack_require__(6),_videoJs2=_interopRequireDefault(_videoJs),_socketIoClient=__webpack_require__(7),_socketIoClient2=_interopRequireDefault(_socketIoClient);__webpack_require__(60),__webpack_require__(61),__webpack_require__(62),window.vPollPlayer=vPollPlayer,module.exports=exports["default"];
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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_videojs) {/*! Video.js v4.12.7 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
	(function() {var b=void 0,f=!0,j=null,l=!1;function m(){return function(){}}function n(a){return function(){return this[a]}}function q(a){return function(){return a}}var s;document.createElement("video");document.createElement("audio");document.createElement("track");
	function t(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(t.Aa[a])return c&&t.log.warn('Player "'+a+'" is already initialised. Options will not be applied.'),d&&t.Aa[a].I(d),t.Aa[a];a=t.m(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new t.Player(a,c,d)}var videojs=__webpack_provided_window_dot_videojs=t;t.ic="4.12";t.vd="https:"==document.location.protocol?"https://":"http://";t.VERSION="4.12.7";
	t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2E3,children:{mediaLoader:{},posterImage:{},loadingSpinner:{},textTrackDisplay:{},bigPlayButton:{},controlBar:{},errorDisplay:{},textTrackSettings:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.If||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."};
	"GENERATED_CDN_VSN"!==t.ic&&(videojs.options.flash.swf=t.vd+"vjs.zencdn.net/"+t.ic+"/video-js.swf");t.Jd=function(a,c){t.options.languages[a]=t.options.languages[a]!==b?t.$.ya(t.options.languages[a],c):c;return t.options.languages};t.Aa={};true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return videojs}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);t.Ea=t.CoreObject=m();
	t.Ea.extend=function(a){var c,d;a=a||{};c=a.init||a.l||this.prototype.init||this.prototype.l||m();d=function(){c.apply(this,arguments)};d.prototype=t.i.create(this.prototype);d.prototype.constructor=d;d.extend=t.Ea.extend;d.create=t.Ea.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};t.Ea.create=function(){var a=t.i.create(this.prototype);this.apply(a,arguments);return a};
	t.b=function(a,c,d){if(t.i.isArray(c))return v(t.b,a,c,d);var e=t.getData(a);e.G||(e.G={});e.G[c]||(e.G[c]=[]);d.s||(d.s=t.s++);e.G[c].push(d);e.ca||(e.disabled=l,e.ca=function(c){if(!e.disabled){c=t.Pb(c);var d=e.G[c.type];if(d)for(var d=d.slice(0),k=0,p=d.length;k<p&&!c.Rc();k++)d[k].call(a,c)}});1==e.G[c].length&&(a.addEventListener?a.addEventListener(c,e.ca,l):a.attachEvent&&a.attachEvent("on"+c,e.ca))};
	t.n=function(a,c,d){if(t.Mc(a)){var e=t.getData(a);if(e.G){if(t.i.isArray(c))return v(t.n,a,c,d);if(c){var g=e.G[c];if(g){if(d){if(d.s)for(e=0;e<g.length;e++)g[e].s===d.s&&g.splice(e--,1)}else e.G[c]=[];t.Ac(a,c)}}else for(g in e.G)c=g,e.G[c]=[],t.Ac(a,c)}}};t.Ac=function(a,c){var d=t.getData(a);0===d.G[c].length&&(delete d.G[c],a.removeEventListener?a.removeEventListener(c,d.ca,l):a.detachEvent&&a.detachEvent("on"+c,d.ca));t.ib(d.G)&&(delete d.G,delete d.ca,delete d.disabled);t.ib(d)&&t.cd(a)};
	t.Pb=function(a){function c(){return f}function d(){return l}if(!a||!a.Vb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.ie=c;a.defaultPrevented=f};a.ie=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
	e.stopPropagation();a.cancelBubble=f;a.Vb=c};a.Vb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.Rc=c;a.stopPropagation()};a.Rc=d;if(a.clientX!=j){g=document.documentElement;var h=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=j&&(a.button=a.button&1?0:a.button&
	4?1:a.button&2?2:0)}return a};t.o=function(a,c){var d=t.Mc(a)?t.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=t.Pb(c);d.ca&&d.ca.call(a,c);if(e&&!c.Vb()&&c.bubbles!==l)t.o(e,c);else if(!e&&!c.defaultPrevented&&(d=t.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
	t.N=function(a,c,d){function e(){t.n(a,c,e);d.apply(this,arguments)}if(t.i.isArray(c))return v(t.N,a,c,d);e.s=d.s=d.s||t.s++;t.b(a,c,e)};function v(a,c,d,e){t.wc.forEach(d,function(d){a(c,d,e)})}var w=Object.prototype.hasOwnProperty;t.e=function(a,c){var d;c=c||{};d=document.createElement(a||"div");t.i.da(c,function(a,c){-1!==a.indexOf("aria-")||"role"==a?d.setAttribute(a,c):d[a]=c});return d};t.ua=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};t.i={};
	t.i.create=Object.create||function(a){function c(){}c.prototype=a;return new c};t.i.da=function(a,c,d){for(var e in a)w.call(a,e)&&c.call(d||this,e,a[e])};t.i.D=function(a,c){if(!c)return a;for(var d in c)w.call(c,d)&&(a[d]=c[d]);return a};t.i.Rd=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)w.call(c,d)&&(e=a[d],g=c[d],a[d]=t.i.jb(e)&&t.i.jb(g)?t.i.Rd(e,g):c[d]);return a};t.i.copy=function(a){return t.i.D({},a)};
	t.i.jb=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};t.i.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};t.ke=function(a){return a!==a};t.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.s||(c.s=t.s++);e.s=d?d+"_"+c.s:c.s;return e};t.ta={};t.s=1;t.expando="vdata"+(new Date).getTime();t.getData=function(a){var c=a[t.expando];c||(c=a[t.expando]=t.s++);t.ta[c]||(t.ta[c]={});return t.ta[c]};
	t.Mc=function(a){a=a[t.expando];return!(!a||t.ib(t.ta[a]))};t.cd=function(a){var c=a[t.expando];if(c){delete t.ta[c];try{delete a[t.expando]}catch(d){a.removeAttribute?a.removeAttribute(t.expando):a[t.expando]=j}}};t.ib=function(a){for(var c in a)if(a[c]!==j)return l;return f};t.Oa=function(a,c){return-1!==(" "+a.className+" ").indexOf(" "+c+" ")};t.p=function(a,c){t.Oa(a,c)||(a.className=""===a.className?c:a.className+" "+c)};
	t.r=function(a,c){var d,e;if(t.Oa(a,c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};t.A=t.e("video");var x=document.createElement("track");x.Wb="captions";x.hd="en";x.label="English";t.A.appendChild(x);t.P=navigator.userAgent;t.Cd=/iPhone/i.test(t.P);t.Bd=/iPad/i.test(t.P);t.Dd=/iPod/i.test(t.P);t.Ad=t.Cd||t.Bd||t.Dd;var aa=t,y;var z=t.P.match(/OS (\d+)_/i);y=z&&z[1]?z[1]:b;aa.kf=y;t.zd=/Android/i.test(t.P);var ba=t,B;
	var C=t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),D,E;C?(D=C[1]&&parseFloat(C[1]),E=C[2]&&parseFloat(C[2]),B=D&&E?parseFloat(C[1]+"."+C[2]):D?D:j):B=j;ba.hc=B;t.Ed=t.zd&&/webkit/i.test(t.P)&&2.3>t.hc;t.jc=/Firefox/i.test(t.P);t.lf=/Chrome/i.test(t.P);t.oa=/MSIE\s8\.0/.test(t.P);t.Eb=!!("ontouchstart"in window||window.xd&&document instanceof window.xd);t.wd="backgroundSize"in t.A.style;
	t.ed=function(a,c){t.i.da(c,function(c,e){e===j||"undefined"===typeof e||e===l?a.removeAttribute(c):a.setAttribute(c,e===f?"":e)})};t.Na=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var h=d.length-1;0<=h;h--){e=d[h].name;g=d[h].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==j?f:l;c[e]=g}}return c};
	t.vf=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};t.Ub=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};t.cb={};t.m=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
	t.Ma=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};t.Ld=function(){document.body.focus();document.onselectstart=q(l)};t.af=function(){document.onselectstart=q(f)};t.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};t.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
	t.Lb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};t.Me=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?t.log("LocalStorage Full (VideoJS)",d):18==d.code?t.log("LocalStorage not allowed (VideoJS)",d):t.log("LocalStorage Error (VideoJS)",d)}};t.$d=function(a){a.match(/^https?:\/\//)||(a=t.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
	t.Ee=function(a){var c,d,e,g;g="protocol hostname port pathname search hash host".split(" ");d=t.e("a",{href:a});if(e=""===d.host&&"file:"!==d.protocol)c=t.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c);a={};for(var h=0;h<g.length;h++)a[g[h]]=d[g[h]];"http:"===a.protocol&&(a.host=a.host.replace(/:80$/,""));"https:"===a.protocol&&(a.host=a.host.replace(/:443$/,""));e&&document.body.removeChild(c);return a};
	function F(a,c){var d,e;d=Array.prototype.slice.call(c);e=m();e=window.console||{log:e,warn:e,error:e};a?d.unshift(a.toUpperCase()+":"):a="log";t.log.history.push(d);d.unshift("VIDEOJS:");if(e[a].apply)e[a].apply(e,d);else e[a](d.join(" "))}t.log=function(){F(j,arguments)};t.log.history=[];t.log.error=function(){F("error",arguments)};t.log.warn=function(){F("warn",arguments)};
	t.Yd=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:t.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:t.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};t.wc={};t.wc.forEach=function(a,c,d){if(t.i.isArray(a)&&c instanceof Function)for(var e=0,g=a.length;e<g;++e)c.call(d||t,a[e],e,a);return a};
	t.ff=function(a,c){var d,e,g,h,k,p,r;"string"===typeof a&&(a={uri:a});videojs.$.ya({method:"GET",timeout:45E3},a);c=c||m();p=function(){window.clearTimeout(k);c(j,e,e.response||e.responseText)};r=function(a){window.clearTimeout(k);if(!a||"string"===typeof a)a=Error(a);c(a,e)};d=window.XMLHttpRequest;"undefined"===typeof d&&(d=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
	});e=new d;e.uri=a.uri;d=t.Ee(a.uri);g=window.location;d.protocol+d.host!==g.protocol+g.host&&window.XDomainRequest&&!("withCredentials"in e)?(e=new window.XDomainRequest,e.onload=p,e.onerror=r,e.onprogress=m(),e.ontimeout=m()):(h="file:"==d.protocol||"file:"==g.protocol,e.onreadystatechange=function(){if(4===e.readyState){if(e.Ye)return r("timeout");200===e.status||h&&0===e.status?p():r()}},a.timeout&&(k=window.setTimeout(function(){4!==e.readyState&&(e.Ye=f,e.abort())},a.timeout)));try{e.open(a.method||
	"GET",a.uri,f)}catch(u){r(u);return}a.withCredentials&&(e.withCredentials=f);a.responseType&&(e.responseType=a.responseType);try{e.send()}catch(A){r(A)}};t.$={};t.$.ya=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=t.i.jb(e)&&t.i.jb(g)?t.$.ya(e,g):c[d]);return a};t.z=m();s=t.z.prototype;s.bb={};s.b=function(a,c){var d=this.addEventListener;this.addEventListener=Function.prototype;t.b(this,a,c);this.addEventListener=d};s.addEventListener=t.z.prototype.b;
	s.n=function(a,c){t.n(this,a,c)};s.removeEventListener=t.z.prototype.n;s.N=function(a,c){t.N(this,a,c)};s.o=function(a){var c=a.type||a;"string"===typeof a&&(a={type:c});a=t.Pb(a);if(this.bb[c]&&this["on"+c])this["on"+c](a);t.o(this,a)};s.dispatchEvent=t.z.prototype.o;
	t.a=t.Ea.extend({l:function(a,c,d){this.d=a;this.q=t.i.copy(this.q);c=this.options(c);this.Pa=c.id||c.el&&c.el.id;this.Pa||(this.Pa=(a.id&&a.id()||"no_player")+"_component_"+t.s++);this.te=c.name||j;this.c=c.el||this.e();this.R=[];this.fb={};this.gb={};this.Oc();this.I(d);if(c.dd!==l){var e,g;this.k().reportUserActivity&&(e=t.bind(this.k(),this.k().reportUserActivity),this.b("touchstart",function(){e();this.clearInterval(g);g=this.setInterval(e,250)}),a=function(){e();this.clearInterval(g)},this.b("touchmove",
	e),this.b("touchend",a),this.b("touchcancel",a))}}});s=t.a.prototype;s.dispose=function(){this.o({type:"dispose",bubbles:l});if(this.R)for(var a=this.R.length-1;0<=a;a--)this.R[a].dispose&&this.R[a].dispose();this.gb=this.fb=this.R=j;this.n();this.c.parentNode&&this.c.parentNode.removeChild(this.c);t.cd(this.c);this.c=j};s.d=f;s.k=n("d");s.options=function(a){return a===b?this.q:this.q=t.$.ya(this.q,a)};s.e=function(a,c){return t.e(a,c)};
	s.v=function(a){var c=this.d.language(),d=this.d.languages();return d&&d[c]&&d[c][a]?d[c][a]:a};s.m=n("c");s.va=function(){return this.B||this.c};s.id=n("Pa");s.name=n("te");s.children=n("R");s.ae=function(a){return this.fb[a]};s.ea=function(a){return this.gb[a]};
	s.ba=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||t.ua(e),c.name=e,d=new __webpack_provided_window_dot_videojs[d](this.d||this,c)):d=a;this.R.push(d);"function"===typeof d.id&&(this.fb[d.id()]=d);(e=e||d.name&&d.name())&&(this.gb[e]=d);"function"===typeof d.el&&d.el()&&this.va().appendChild(d.el());return d};
	s.removeChild=function(a){"string"===typeof a&&(a=this.ea(a));if(a&&this.R){for(var c=l,d=this.R.length-1;0<=d;d--)if(this.R[d]===a){c=f;this.R.splice(d,1);break}c&&(this.fb[a.id()]=j,this.gb[a.name()]=j,(c=a.m())&&c.parentNode===this.va()&&this.va().removeChild(a.m()))}};
	s.Oc=function(){var a,c,d,e,g,h;a=this;c=a.options();if(d=c.children)if(h=function(d,e){c[d]!==b&&(e=c[d]);e!==l&&(a[d]=a.ba(d,e))},t.i.isArray(d))for(var k=0;k<d.length;k++)e=d[k],"string"==typeof e?(g=e,e={}):g=e.name,h(g,e);else t.i.da(d,h)};s.V=q("");
	s.b=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.b(this.c,a,t.bind(this,c)):(e=t.bind(this,d),h=this,g=function(){h.n(a,c,e)},g.s=e.s,this.b("dispose",g),d=function(){h.n("dispose",g)},d.s=e.s,a.nodeName?(t.b(a,c,e),t.b(a,"dispose",d)):"function"===typeof a.b&&(a.b(c,e),a.b("dispose",d)));return this};
	s.n=function(a,c,d){!a||"string"===typeof a||t.i.isArray(a)?t.n(this.c,a,c):(d=t.bind(this,d),this.n("dispose",d),a.nodeName?(t.n(a,c,d),t.n(a,"dispose",d)):(a.n(c,d),a.n("dispose",d)));return this};s.N=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.N(this.c,a,t.bind(this,c)):(e=t.bind(this,d),g=this,h=function(){g.n(a,c,h);e.apply(this,arguments)},h.s=e.s,this.b(a,c,h));return this};s.o=function(a){t.o(this.c,a);return this};
	s.I=function(a){a&&(this.wa?a.call(this):(this.nb===b&&(this.nb=[]),this.nb.push(a)));return this};s.Wa=function(){this.wa=f;var a=this.nb;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.nb=[];this.o("ready")}};s.Oa=function(a){return t.Oa(this.c,a)};s.p=function(a){t.p(this.c,a);return this};s.r=function(a){t.r(this.c,a);return this};s.show=function(){this.r("vjs-hidden");return this};s.Y=function(){this.p("vjs-hidden");return this};function G(a){a.r("vjs-lock-showing")}
	s.width=function(a,c){return ca(this,"width",a,c)};s.height=function(a,c){return ca(this,"height",a,c)};s.Td=function(a,c){return this.width(a,f).height(c)};function ca(a,c,d,e){if(d!==b){if(d===j||t.ke(d))d=0;a.c.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px";e||a.o("resize");return a}if(!a.c)return 0;d=a.c.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.c["offset"+t.ua(c)],10)}
	function da(a){var c,d,e,g,h,k,p,r;c=0;d=j;a.b("touchstart",function(a){1===a.touches.length&&(d=t.i.copy(a.touches[0]),c=(new Date).getTime(),g=f)});a.b("touchmove",function(a){1<a.touches.length?g=l:d&&(k=a.touches[0].pageX-d.pageX,p=a.touches[0].pageY-d.pageY,r=Math.sqrt(k*k+p*p),10<r&&(g=l))});h=function(){g=l};a.b("touchleave",h);a.b("touchcancel",h);a.b("touchend",function(a){d=j;g===f&&(e=(new Date).getTime()-c,200>e&&(a.preventDefault(),this.o("tap")))})}
	s.setTimeout=function(a,c){function d(){this.clearTimeout(e)}a=t.bind(this,a);var e=setTimeout(a,c);d.s="vjs-timeout-"+e;this.b("dispose",d);return e};s.clearTimeout=function(a){function c(){}clearTimeout(a);c.s="vjs-timeout-"+a;this.n("dispose",c);return a};s.setInterval=function(a,c){function d(){this.clearInterval(e)}a=t.bind(this,a);var e=setInterval(a,c);d.s="vjs-interval-"+e;this.b("dispose",d);return e};
	s.clearInterval=function(a){function c(){}clearInterval(a);c.s="vjs-interval-"+a;this.n("dispose",c);return a};t.w=t.a.extend({l:function(a,c){t.a.call(this,a,c);da(this);this.b("tap",this.u);this.b("click",this.u);this.b("focus",this.lb);this.b("blur",this.kb)}});s=t.w.prototype;
	s.e=function(a,c){var d;c=t.i.D({className:this.V(),role:"button","aria-live":"polite",tabIndex:0},c);d=t.a.prototype.e.call(this,a,c);c.innerHTML||(this.B=t.e("div",{className:"vjs-control-content"}),this.Jb=t.e("span",{className:"vjs-control-text",innerHTML:this.v(this.sa)||"Need Text"}),this.B.appendChild(this.Jb),d.appendChild(this.B));return d};s.V=function(){return"vjs-control "+t.a.prototype.V.call(this)};s.u=m();s.lb=function(){t.b(document,"keydown",t.bind(this,this.ka))};
	s.ka=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.u()};s.kb=function(){t.n(document,"keydown",t.bind(this,this.ka))};t.U=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.Kd=this.ea(this.q.barName);this.handle=this.ea(this.q.handleName);this.b("mousedown",this.mb);this.b("touchstart",this.mb);this.b("focus",this.lb);this.b("blur",this.kb);this.b("click",this.u);this.b(a,"controlsvisible",this.update);this.b(a,this.Yc,this.update)}});s=t.U.prototype;
	s.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=t.i.D({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return t.a.prototype.e.call(this,a,c)};s.mb=function(a){a.preventDefault();t.Ld();this.p("vjs-sliding");this.b(document,"mousemove",this.la);this.b(document,"mouseup",this.za);this.b(document,"touchmove",this.la);this.b(document,"touchend",this.za);this.la(a)};s.la=m();
	s.za=function(){t.af();this.r("vjs-sliding");this.n(document,"mousemove",this.la);this.n(document,"mouseup",this.za);this.n(document,"touchmove",this.la);this.n(document,"touchend",this.za);this.update()};s.update=function(){if(this.c){var a,c=this.Sb(),d=this.handle,e=this.Kd;if("number"!==typeof c||c!==c||0>c||Infinity===c)c=0;a=c;if(d){a=this.c.offsetWidth;var g=d.m().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.m().style.left=t.round(100*c,2)+"%"}e&&(e.m().style.width=t.round(100*a,2)+"%")}};
	function ea(a,c){var d,e,g,h;d=a.c;e=t.Yd(d);h=g=d.offsetWidth;d=a.handle;if(a.options().vertical)return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.m().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.m().offsetWidth,g+=d/2,h-=d);return Math.max(0,Math.min(1,(e-g)/h))}s.lb=function(){this.b(document,"keydown",this.ka)};
	s.ka=function(a){if(37==a.which||40==a.which)a.preventDefault(),this.jd();else if(38==a.which||39==a.which)a.preventDefault(),this.kd()};s.kb=function(){this.n(document,"keydown",this.ka)};s.u=function(a){a.stopImmediatePropagation();a.preventDefault()};t.ha=t.a.extend();t.ha.prototype.defaultValue=0;t.ha.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=t.i.D({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return t.a.prototype.e.call(this,"div",c)};
	t.pa=t.a.extend();function fa(a,c){a.ba(c);c.b("click",t.bind(a,function(){G(this)}))}t.pa.prototype.e=function(){var a=this.options().Cc||"ul";this.B=t.e(a,{className:"vjs-menu-content"});a=t.a.prototype.e.call(this,"div",{append:this.B,className:"vjs-menu"});a.appendChild(this.B);t.b(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};t.M=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.selected(c.selected)}});
	t.M.prototype.e=function(a,c){return t.w.prototype.e.call(this,"li",t.i.D({className:"vjs-menu-item",innerHTML:this.v(this.q.label)},c))};t.M.prototype.u=function(){this.selected(f)};t.M.prototype.selected=function(a){a?(this.p("vjs-selected"),this.c.setAttribute("aria-selected",f)):(this.r("vjs-selected"),this.c.setAttribute("aria-selected",l))};
	t.O=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.update();this.b("keydown",this.ka);this.c.setAttribute("aria-haspopup",f);this.c.setAttribute("role","button")}});s=t.O.prototype;s.update=function(){var a=this.Ja();this.xa&&this.removeChild(this.xa);this.xa=a;this.ba(a);this.H&&0===this.H.length?this.Y():this.H&&1<this.H.length&&this.show()};s.Ha=l;
	s.Ja=function(){var a=new t.pa(this.d);this.options().title&&a.va().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.ua(this.options().title),We:-1}));if(this.H=this.createItems())for(var c=0;c<this.H.length;c++)fa(a,this.H[c]);return a};s.Ia=m();s.V=function(){return this.className+" vjs-menu-button "+t.w.prototype.V.call(this)};s.lb=m();s.kb=m();s.u=function(){this.N("mouseout",t.bind(this,function(){G(this.xa);this.c.blur()}));this.Ha?H(this):ga(this)};
	s.ka=function(a){32==a.which||13==a.which?(this.Ha?H(this):ga(this),a.preventDefault()):27==a.which&&(this.Ha&&H(this),a.preventDefault())};function ga(a){a.Ha=f;a.xa.p("vjs-lock-showing");a.c.setAttribute("aria-pressed",f);a.H&&0<a.H.length&&a.H[0].m().focus()}function H(a){a.Ha=l;G(a.xa);a.c.setAttribute("aria-pressed",l)}t.J=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&t.i.D(this,a);this.message||(this.message=t.J.Sd[this.code]||"")};
	t.J.prototype.code=0;t.J.prototype.message="";t.J.prototype.status=j;t.J.hb="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
	t.J.Sd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};for(var I=0;I<t.J.hb.length;I++)t.J[t.J.hb[I]]=I,t.J.prototype[t.J.hb[I]]=I;
	var J,ha,K,L;
	J=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
	ha=J[0];for(L=0;L<J.length;L++)if(J[L][1]in document){K=J[L];break}if(K){t.cb.Rb={};for(L=0;L<K.length;L++)t.cb.Rb[ha[L]]=K[L]}
	t.Player=t.a.extend({l:function(a,c,d){this.L=a;a.id=a.id||"vjs_video_"+t.s++;this.Xe=a&&t.Na(a);c=t.i.D(ia(a),c);this.Tc=c.language||t.options.language;this.ne=c.languages||t.options.languages;this.K={};this.Zc=c.poster||"";this.Kb=!!c.controls;a.controls=l;c.dd=l;ja(this,"audio"===this.L.nodeName.toLowerCase());t.a.call(this,this,c,d);this.controls()?this.p("vjs-controls-enabled"):this.p("vjs-controls-disabled");ja(this)&&this.p("vjs-audio");t.Aa[this.Pa]=this;c.plugins&&t.i.da(c.plugins,function(a,
	c){this[a](c)},this);var e,g,h,k,p;e=t.bind(this,this.reportUserActivity);this.b("mousedown",function(){e();this.clearInterval(g);g=this.setInterval(e,250)});this.b("mousemove",function(a){if(a.screenX!=k||a.screenY!=p)k=a.screenX,p=a.screenY,e()});this.b("mouseup",function(){e();this.clearInterval(g)});this.b("keydown",e);this.b("keyup",e);this.setInterval(function(){if(this.Da){this.Da=l;this.userActive(f);this.clearTimeout(h);var a=this.options().inactivityTimeout;0<a&&(h=this.setTimeout(function(){this.Da||
	this.userActive(l)},a))}},250)}});s=t.Player.prototype;s.language=function(a){if(a===b)return this.Tc;this.Tc=a;return this};s.languages=n("ne");s.q=t.options;s.dispose=function(){this.o("dispose");this.n("dispose");t.Aa[this.Pa]=j;this.L&&this.L.player&&(this.L.player=j);this.c&&this.c.player&&(this.c.player=j);this.h&&this.h.dispose();t.a.prototype.dispose.call(this)};
	function ia(a){var c,d,e={sources:[],tracks:[]};c=t.Na(a);d=c["data-setup"];d!==j&&t.i.D(c,t.JSON.parse(d||"{}"));t.i.D(e,c);if(a.hasChildNodes()){var g,h;a=a.childNodes;g=0;for(h=a.length;g<h;g++)c=a[g],d=c.nodeName.toLowerCase(),"source"===d?e.sources.push(t.Na(c)):"track"===d&&e.tracks.push(t.Na(c))}return e}
	s.e=function(){var a=this.c=t.a.prototype.e.call(this,"div"),c=this.L,d;c.removeAttribute("width");c.removeAttribute("height");d=t.Na(c);t.i.da(d,function(c){"class"==c?a.className=d[c]:a.setAttribute(c,d[c])});c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.p("vjs-paused");this.width(this.q.width,f);this.height(this.q.height,f);c.ge=c.networkState;c.parentNode&&c.parentNode.insertBefore(a,c);t.Ub(c,a);this.c=a;this.b("loadstart",this.xe);this.b("waiting",this.De);this.b(["canplay",
	"canplaythrough","playing","ended"],this.Ce);this.b("seeking",this.Ae);this.b("seeked",this.ze);this.b("ended",this.ue);this.b("play",this.$b);this.b("firstplay",this.ve);this.b("pause",this.Zb);this.b("progress",this.ye);this.b("durationchange",this.Wc);this.b("fullscreenchange",this.we);return a};
	function ka(a,c,d){a.h&&(a.wa=l,a.h.dispose(),a.h=l);"Html5"!==c&&a.L&&(t.f.Mb(a.L),a.L=j);a.Ua=c;a.wa=l;var e=t.i.D({source:d,parentEl:a.c},a.q[c.toLowerCase()]);d&&(a.Gc=d.type,d.src==a.K.src&&0<a.K.currentTime&&(e.startTime=a.K.currentTime),a.K.src=d.src);a.h=new __webpack_provided_window_dot_videojs[c](a,e);a.h.I(function(){this.d.Wa()})}s.xe=function(){this.r("vjs-ended");this.error(j);this.paused()?la(this,l):this.o("firstplay")};s.Nc=l;
	function la(a,c){c!==b&&a.Nc!==c&&((a.Nc=c)?(a.p("vjs-has-started"),a.o("firstplay")):a.r("vjs-has-started"))}s.$b=function(){this.r("vjs-ended");this.r("vjs-paused");this.p("vjs-playing");la(this,f)};s.De=function(){this.p("vjs-waiting")};s.Ce=function(){this.r("vjs-waiting")};s.Ae=function(){this.p("vjs-seeking")};s.ze=function(){this.r("vjs-seeking")};s.ve=function(){this.q.starttime&&this.currentTime(this.q.starttime);this.p("vjs-has-started")};s.Zb=function(){this.r("vjs-playing");this.p("vjs-paused")};
	s.ye=function(){1==this.bufferedPercent()&&this.o("loadedalldata")};s.ue=function(){this.p("vjs-ended");this.q.loop?(this.currentTime(0),this.play()):this.paused()||this.pause()};s.Wc=function(){var a=M(this,"duration");a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.p("vjs-live"):this.r("vjs-live"))};s.we=function(){this.isFullscreen()?this.p("vjs-fullscreen"):this.r("vjs-fullscreen")};
	function N(a,c,d){if(a.h&&!a.h.wa)a.h.I(function(){this[c](d)});else try{a.h[c](d)}catch(e){throw t.log(e),e;}}function M(a,c){if(a.h&&a.h.wa)try{return a.h[c]()}catch(d){throw a.h[c]===b?t.log("Video.js: "+c+" method not defined for "+a.Ua+" playback technology.",d):"TypeError"==d.name?(t.log("Video.js: "+c+" unavailable on "+a.Ua+" playback technology element.",d),a.h.wa=l):t.log(d),d;}}s.play=function(){N(this,"play");return this};s.pause=function(){N(this,"pause");return this};
	s.paused=function(){return M(this,"paused")===l?l:f};s.currentTime=function(a){return a!==b?(N(this,"setCurrentTime",a),this):this.K.currentTime=M(this,"currentTime")||0};s.duration=function(a){if(a!==b)return this.K.duration=parseFloat(a),this;this.K.duration===b&&this.Wc();return this.K.duration||0};s.remainingTime=function(){return this.duration()-this.currentTime()};s.buffered=function(){var a=M(this,"buffered");if(!a||!a.length)a=t.Lb(0,0);return a};
	s.bufferedPercent=function(){var a=this.duration(),c=this.buffered(),d=0,e,g;if(!a)return 0;for(var h=0;h<c.length;h++)e=c.start(h),g=c.end(h),g>a&&(g=a),d+=g-e;return d/a};s.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.K.volume=a,N(this,"setVolume",a),t.Me(a),this;a=parseFloat(M(this,"volume"));return isNaN(a)?1:a};s.muted=function(a){return a!==b?(N(this,"setMuted",a),this):M(this,"muted")||l};s.Ta=function(){return M(this,"supportsFullScreen")||l};s.Qc=l;
	s.isFullscreen=function(a){return a!==b?(this.Qc=!!a,this):this.Qc};s.isFullScreen=function(a){t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');return this.isFullscreen(a)};
	s.requestFullscreen=function(){var a=t.cb.Rb;this.isFullscreen(f);a?(t.b(document,a.fullscreenchange,t.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);this.isFullscreen()===l&&t.n(document,a.fullscreenchange,arguments.callee);this.o("fullscreenchange")})),this.c[a.requestFullscreen]()):this.h.Ta()?N(this,"enterFullScreen"):(this.Jc(),this.o("fullscreenchange"));return this};
	s.requestFullScreen=function(){t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');return this.requestFullscreen()};s.exitFullscreen=function(){var a=t.cb.Rb;this.isFullscreen(l);if(a)document[a.exitFullscreen]();else this.h.Ta()?N(this,"exitFullScreen"):(this.Nb(),this.o("fullscreenchange"));return this};s.cancelFullScreen=function(){t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");return this.exitFullscreen()};
	s.Jc=function(){this.je=f;this.Ud=document.documentElement.style.overflow;t.b(document,"keydown",t.bind(this,this.Kc));document.documentElement.style.overflow="hidden";t.p(document.body,"vjs-full-window");this.o("enterFullWindow")};s.Kc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Nb())};s.Nb=function(){this.je=l;t.n(document,"keydown",this.Kc);document.documentElement.style.overflow=this.Ud;t.r(document.body,"vjs-full-window");this.o("exitFullWindow")};
	s.selectSource=function(a){for(var c=0,d=this.q.techOrder;c<d.length;c++){var e=t.ua(d[c]),g=__webpack_provided_window_dot_videojs[e];if(g){if(g.isSupported())for(var h=0,k=a;h<k.length;h++){var p=k[h];if(g.canPlaySource(p))return{source:p,h:e}}}else t.log.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return l};
	s.src=function(a){if(a===b)return M(this,"src");t.i.isArray(a)?ma(this,a):"string"===typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!__webpack_provided_window_dot_videojs[this.Ua].canPlaySource(a)?ma(this,[a]):(this.K.src=a.src,this.Gc=a.type||"",this.I(function(){__webpack_provided_window_dot_videojs[this.Ua].prototype.hasOwnProperty("setSource")?N(this,"setSource",a):N(this,"src",a.src);"auto"==this.q.preload&&this.load();this.q.autoplay&&this.play()})));return this};
	function ma(a,c){var d=a.selectSource(c);d?d.h===a.Ua?a.src(d.source):ka(a,d.h,d.source):(a.setTimeout(function(){this.error({code:4,message:this.v(this.options().notSupportedMessage)})},0),a.Wa())}s.load=function(){N(this,"load");return this};s.currentSrc=function(){return M(this,"currentSrc")||this.K.src||""};s.Qd=function(){return this.Gc||""};s.Qa=function(a){return a!==b?(N(this,"setPreload",a),this.q.preload=a,this):M(this,"preload")};
	s.autoplay=function(a){return a!==b?(N(this,"setAutoplay",a),this.q.autoplay=a,this):M(this,"autoplay")};s.loop=function(a){return a!==b?(N(this,"setLoop",a),this.q.loop=a,this):M(this,"loop")};s.poster=function(a){if(a===b)return this.Zc;a||(a="");this.Zc=a;N(this,"setPoster",a);this.o("posterchange");return this};
	s.controls=function(a){return a!==b?(a=!!a,this.Kb!==a&&((this.Kb=a)?(this.r("vjs-controls-disabled"),this.p("vjs-controls-enabled"),this.o("controlsenabled")):(this.r("vjs-controls-enabled"),this.p("vjs-controls-disabled"),this.o("controlsdisabled"))),this):this.Kb};t.Player.prototype.ec;s=t.Player.prototype;
	s.usingNativeControls=function(a){return a!==b?(a=!!a,this.ec!==a&&((this.ec=a)?(this.p("vjs-using-native-controls"),this.o("usingnativecontrols")):(this.r("vjs-using-native-controls"),this.o("usingcustomcontrols"))),this):this.ec};s.ja=j;s.error=function(a){if(a===b)return this.ja;if(a===j)return this.ja=a,this.r("vjs-error"),this;this.ja=a instanceof t.J?a:new t.J(a);this.o("error");this.p("vjs-error");t.log.error("(CODE:"+this.ja.code+" "+t.J.hb[this.ja.code]+")",this.ja.message,this.ja);return this};
	s.ended=function(){return M(this,"ended")};s.seeking=function(){return M(this,"seeking")};s.Da=f;s.reportUserActivity=function(){this.Da=f};s.dc=f;s.userActive=function(a){return a!==b?(a=!!a,a!==this.dc&&((this.dc=a)?(this.Da=f,this.r("vjs-user-inactive"),this.p("vjs-user-active"),this.o("useractive")):(this.Da=l,this.h&&this.h.N("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.r("vjs-user-active"),this.p("vjs-user-inactive"),this.o("userinactive"))),this):this.dc};
	s.playbackRate=function(a){return a!==b?(N(this,"setPlaybackRate",a),this):this.h&&this.h.featuresPlaybackRate?M(this,"playbackRate"):1};s.Pc=l;function ja(a,c){return c!==b?(a.Pc=!!c,a):a.Pc}s.networkState=function(){return M(this,"networkState")};s.readyState=function(){return M(this,"readyState")};s.textTracks=function(){return this.h&&this.h.textTracks()};s.Z=function(){return this.h&&this.h.remoteTextTracks()};s.addTextTrack=function(a,c,d){return this.h&&this.h.addTextTrack(a,c,d)};
	s.ia=function(a){return this.h&&this.h.addRemoteTextTrack(a)};s.Ba=function(a){this.h&&this.h.removeRemoteTextTrack(a)};t.ub=t.a.extend();t.ub.prototype.q={wf:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{},subtitlesButton:{},captionsButton:{},chaptersButton:{}}};t.ub.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})};
	t.kc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});t.kc.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});this.B=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.v("Stream Type")+"</span>"+this.v("LIVE"),"aria-live":"off"});a.appendChild(this.B);return a};t.nc=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.b(a,"play",this.$b);this.b(a,"pause",this.Zb)}});s=t.nc.prototype;s.sa="Play";
	s.V=function(){return"vjs-play-control "+t.w.prototype.V.call(this)};s.u=function(){this.d.paused()?this.d.play():this.d.pause()};s.$b=function(){this.r("vjs-paused");this.p("vjs-playing");this.c.children[0].children[0].innerHTML=this.v("Pause")};s.Zb=function(){this.r("vjs-playing");this.p("vjs-paused");this.c.children[0].children[0].innerHTML=this.v("Play")};t.vb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.ga)}});
	t.vb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.B);return a};t.vb.prototype.ga=function(){var a=this.d.ob?this.d.K.currentTime:this.d.currentTime();this.B.innerHTML='<span class="vjs-control-text">'+this.v("Current Time")+"</span> "+t.Ma(a,this.d.duration())};
	t.wb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.ga);this.b(a,"loadedmetadata",this.ga)}});t.wb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.v("Duration Time")+"</span> 0:00","aria-live":"off"});a.appendChild(this.B);return a};
	t.wb.prototype.ga=function(){var a=this.d.duration();a&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Duration Time")+"</span> "+t.Ma(a))};t.tc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});t.tc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};t.Db=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.ga)}});
	t.Db.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -0:00","aria-live":"off"});a.appendChild(this.B);return a};t.Db.prototype.ga=function(){this.d.duration()&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -"+t.Ma(this.d.remainingTime()))};
	t.Za=t.w.extend({l:function(a,c){t.w.call(this,a,c)}});t.Za.prototype.sa="Fullscreen";t.Za.prototype.V=function(){return"vjs-fullscreen-control "+t.w.prototype.V.call(this)};t.Za.prototype.u=function(){this.d.isFullscreen()?(this.d.exitFullscreen(),this.Jb.innerHTML=this.v("Fullscreen")):(this.d.requestFullscreen(),this.Jb.innerHTML=this.v("Non-Fullscreen"))};t.Cb=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});t.Cb.prototype.q={children:{seekBar:{}}};
	t.Cb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};t.qc=t.U.extend({l:function(a,c){t.U.call(this,a,c);this.b(a,"timeupdate",this.Ca);a.I(t.bind(this,this.Ca))}});s=t.qc.prototype;s.q={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};s.Yc="timeupdate";s.e=function(){return t.U.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
	s.Ca=function(){var a=this.d.ob?this.d.K.currentTime:this.d.currentTime();this.c.setAttribute("aria-valuenow",t.round(100*this.Sb(),2));this.c.setAttribute("aria-valuetext",t.Ma(a,this.d.duration()))};s.Sb=function(){return this.d.currentTime()/this.d.duration()};s.mb=function(a){t.U.prototype.mb.call(this,a);this.d.ob=f;this.d.p("vjs-scrubbing");this.df=!this.d.paused();this.d.pause()};s.la=function(a){a=ea(this,a)*this.d.duration();a==this.d.duration()&&(a-=0.1);this.d.currentTime(a)};
	s.za=function(a){t.U.prototype.za.call(this,a);this.d.ob=l;this.d.r("vjs-scrubbing");this.df&&this.d.play()};s.kd=function(){this.d.currentTime(this.d.currentTime()+5)};s.jd=function(){this.d.currentTime(this.d.currentTime()-5)};t.zb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"progress",this.update)}});t.zb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Loaded")+"</span>: 0%</span>"})};
	t.zb.prototype.update=function(){var a,c,d,e,g=this.d.buffered();a=this.d.duration();var h,k=this.d;h=k.buffered();k=k.duration();h=h.end(h.length-1);h>k&&(h=k);k=this.c.children;this.c.style.width=100*(h/a||0)+"%";for(a=0;a<g.length;a++)c=g.start(a),d=g.end(a),(e=k[a])||(e=this.c.appendChild(t.e())),e.style.left=100*(c/h||0)+"%",e.style.width=100*((d-c)/h||0)+"%";for(a=k.length;a>g.length;a--)this.c.removeChild(k[a-1])};t.mc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
	t.mc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Progress")+"</span>: 0%</span>"})};t.$a=t.ha.extend({l:function(a,c){t.ha.call(this,a,c);this.b(a,"timeupdate",this.ga)}});t.$a.prototype.defaultValue="00:00";t.$a.prototype.e=function(){return t.ha.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};
	t.$a.prototype.ga=function(){var a=this.d.ob?this.d.K.currentTime:this.d.currentTime();this.c.innerHTML='<span class="vjs-control-text">'+t.Ma(a,this.d.duration())+"</span>"};t.Gb=t.a.extend({l:function(a,c){t.a.call(this,a,c);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.Gb.prototype.q={children:{volumeBar:{}}};
	t.Gb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};t.Fb=t.U.extend({l:function(a,c){t.U.call(this,a,c);this.b(a,"volumechange",this.Ca);a.I(t.bind(this,this.Ca))}});s=t.Fb.prototype;s.Ca=function(){this.c.setAttribute("aria-valuenow",t.round(100*this.d.volume(),2));this.c.setAttribute("aria-valuetext",t.round(100*this.d.volume(),2)+"%")};s.q={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
	s.Yc="volumechange";s.e=function(){return t.U.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};s.la=function(a){this.d.muted()&&this.d.muted(l);this.d.volume(ea(this,a))};s.Sb=function(){return this.d.muted()?0:this.d.volume()};s.kd=function(){this.d.volume(this.d.volume()+0.1)};s.jd=function(){this.d.volume(this.d.volume()-0.1)};t.uc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
	t.uc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};t.Hb=t.ha.extend();t.Hb.prototype.defaultValue="00:00";t.Hb.prototype.e=function(){return t.ha.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
	t.qa=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.b(a,"volumechange",this.update);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.qa.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};
	t.qa.prototype.u=function(){this.d.muted(this.d.muted()?l:f)};t.qa.prototype.update=function(){var a=this.d.volume(),c=3;0===a||this.d.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.d.muted()?this.c.children[0].children[0].innerHTML!=this.v("Unmute")&&(this.c.children[0].children[0].innerHTML=this.v("Unmute")):this.c.children[0].children[0].innerHTML!=this.v("Mute")&&(this.c.children[0].children[0].innerHTML=this.v("Mute"));for(a=0;4>a;a++)t.r(this.c,"vjs-vol-"+a);t.p(this.c,"vjs-vol-"+c)};
	t.Fa=t.O.extend({l:function(a,c){t.O.call(this,a,c);this.b(a,"volumechange",this.ef);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")});this.p("vjs-menu-button")}});t.Fa.prototype.Ja=function(){var a=new t.pa(this.d,{Cc:"div"}),c=new t.Fb(this.d,this.q.volumeBar);c.b("focus",function(){a.p("vjs-lock-showing")});c.b("blur",function(){G(a)});a.ba(c);return a};
	t.Fa.prototype.u=function(){t.qa.prototype.u.call(this);t.O.prototype.u.call(this)};t.Fa.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};t.Fa.prototype.ef=t.qa.prototype.update;t.oc=t.O.extend({l:function(a,c){t.O.call(this,a,c);this.sd();this.rd();this.b(a,"loadstart",this.sd);this.b(a,"ratechange",this.rd)}});s=t.oc.prototype;s.sa="Playback Rate";
	s.className="vjs-playback-rate";s.e=function(){var a=t.O.prototype.e.call(this);this.Sc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1});a.appendChild(this.Sc);return a};s.Ja=function(){var a=new t.pa(this.k()),c=this.k().options().playbackRates;if(c)for(var d=c.length-1;0<=d;d--)a.ba(new t.Bb(this.k(),{rate:c[d]+"x"}));return a};s.Ca=function(){this.m().setAttribute("aria-valuenow",this.k().playbackRate())};
	s.u=function(){for(var a=this.k().playbackRate(),c=this.k().options().playbackRates,d=c[0],e=0;e<c.length;e++)if(c[e]>a){d=c[e];break}this.k().playbackRate(d)};function na(a){return a.k().h&&a.k().h.featuresPlaybackRate&&a.k().options().playbackRates&&0<a.k().options().playbackRates.length}s.sd=function(){na(this)?this.r("vjs-hidden"):this.p("vjs-hidden")};s.rd=function(){na(this)&&(this.Sc.innerHTML=this.k().playbackRate()+"x")};
	t.Bb=t.M.extend({Cc:"button",l:function(a,c){var d=this.label=c.rate,e=this.$c=parseFloat(d,10);c.label=d;c.selected=1===e;t.M.call(this,a,c);this.b(a,"ratechange",this.update)}});t.Bb.prototype.u=function(){t.M.prototype.u.call(this);this.k().playbackRate(this.$c)};t.Bb.prototype.update=function(){this.selected(this.k().playbackRate()==this.$c)};t.pc=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.update();a.b("posterchange",t.bind(this,this.update))}});s=t.pc.prototype;
	s.dispose=function(){this.k().n("posterchange",this.update);t.w.prototype.dispose.call(this)};s.e=function(){var a=t.e("div",{className:"vjs-poster",tabIndex:-1});t.wd||(this.Ob=t.e("img"),a.appendChild(this.Ob));return a};s.update=function(){var a=this.k().poster();this.ma(a);a?this.show():this.Y()};s.ma=function(a){var c;this.Ob?this.Ob.src=a:(c="",a&&(c='url("'+a+'")'),this.c.style.backgroundImage=c)};s.u=function(){this.d.play()};t.lc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
	t.lc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};t.sb=t.w.extend();t.sb.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};t.sb.prototype.u=function(){this.d.play()};t.xb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.update();this.b(a,"error",this.update)}});
	t.xb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});this.B=t.e("div");a.appendChild(this.B);return a};t.xb.prototype.update=function(){this.k().error()&&(this.B.innerHTML=this.v(this.k().error().message))};var O;t.j=t.a.extend({l:function(a,c,d){c=c||{};c.dd=l;t.a.call(this,a,c,d);this.featuresProgressEvents||this.re();this.featuresTimeupdateEvents||this.se();this.fe();this.featuresNativeTextTracks||this.Vd();this.he()}});s=t.j.prototype;
	s.fe=function(){var a,c;a=this.k();c=function(){a.controls()&&!a.usingNativeControls()&&this.Id()};this.I(c);this.b(a,"controlsenabled",c);this.b(a,"controlsdisabled",this.He);this.I(function(){this.networkState&&0<this.networkState()&&this.k().o("loadstart")})};
	s.Id=function(){var a;this.b("mousedown",this.u);this.b("touchstart",function(){a=this.d.userActive()});this.b("touchmove",function(){a&&this.k().reportUserActivity()});this.b("touchend",function(a){a.preventDefault()});da(this);this.b("tap",this.Be)};s.He=function(){this.n("tap");this.n("touchstart");this.n("touchmove");this.n("touchleave");this.n("touchcancel");this.n("touchend");this.n("click");this.n("mousedown")};
	s.u=function(a){0===a.button&&this.k().controls()&&(this.k().paused()?this.k().play():this.k().pause())};s.Be=function(){this.k().userActive(!this.k().userActive())};s.re=function(){this.Uc=f;this.$e()};s.qe=function(){this.Uc=l;this.ld()};s.$e=function(){this.Ge=this.setInterval(function(){var a=this.k().bufferedPercent();this.Md!=a&&this.k().o("progress");this.Md=a;1===a&&this.ld()},500)};s.ld=function(){this.clearInterval(this.Ge)};
	s.se=function(){var a=this.d;this.Yb=f;this.b(a,"play",this.pd);this.b(a,"pause",this.rb);this.N("timeupdate",function(){this.featuresTimeupdateEvents=f;this.Vc()})};s.Vc=function(){var a=this.d;this.Yb=l;this.rb();this.n(a,"play",this.pd);this.n(a,"pause",this.rb)};s.pd=function(){this.Fc&&this.rb();this.Fc=this.setInterval(function(){this.k().o("timeupdate")},250)};s.rb=function(){this.clearInterval(this.Fc);this.k().o("timeupdate")};s.dispose=function(){this.Uc&&this.qe();this.Yb&&this.Vc();t.a.prototype.dispose.call(this)};
	s.bc=function(){this.Yb&&this.k().o("timeupdate")};s.he=function(){function a(){var a=c.ea("textTrackDisplay");a&&a.C()}var c=this.d,d;if(d=this.textTracks())d.addEventListener("removetrack",a),d.addEventListener("addtrack",a),this.b("dispose",t.bind(this,function(){d.removeEventListener("removetrack",a);d.removeEventListener("addtrack",a)}))};
	s.Vd=function(){var a=this.d,c,d,e;window.WebVTT||(e=document.createElement("script"),e.src=a.options()["vtt.js"]||"../node_modules/vtt.js/dist/vtt.js",a.m().appendChild(e),window.WebVTT=f);if(d=this.textTracks())c=function(){var c,d,e;e=a.ea("textTrackDisplay");e.C();for(c=0;c<this.length;c++)d=this[c],d.removeEventListener("cuechange",t.bind(e,e.C)),"showing"===d.mode&&d.addEventListener("cuechange",t.bind(e,e.C))},d.addEventListener("change",c),this.b("dispose",t.bind(this,function(){d.removeEventListener("change",
	c)}))};s.textTracks=function(){this.d.od=this.d.od||new t.F;return this.d.od};s.Z=function(){this.d.ad=this.d.ad||new t.F;return this.d.ad};O=function(a,c,d,e,g){var h=a.textTracks();g=g||{};g.kind=c;d&&(g.label=d);e&&(g.language=e);g.player=a.d;a=new t.t(g);P(h,a);return a};t.j.prototype.addTextTrack=function(a,c,d){if(!a)throw Error("TextTrack kind is required but was not provided");return O(this,a,c,d)};t.j.prototype.ia=function(a){a=O(this,a.kind,a.label,a.language,a);P(this.Z(),a);return{T:a}};
	t.j.prototype.Ba=function(a){Q(this.textTracks(),a);Q(this.Z(),a)};t.j.prototype.fd=m();t.j.prototype.featuresVolumeControl=f;t.j.prototype.featuresFullscreenResize=l;t.j.prototype.featuresPlaybackRate=l;t.j.prototype.featuresProgressEvents=l;t.j.prototype.featuresTimeupdateEvents=l;t.j.prototype.featuresNativeTextTracks=l;
	t.j.gc=function(a){a.Ra=function(c,d){var e=a.gd;e||(e=a.gd=[]);d===b&&(d=e.length);e.splice(d,0,c)};a.pb=function(c){for(var d=a.gd||[],e,g=0;g<d.length;g++)if(e=d[g].eb(c))return d[g];return j};a.zc=function(c){var d=a.pb(c);return d?d.eb(c):""};a.prototype.Sa=function(c){var d=a.pb(c);d||(a.S?d=a.S:t.log.error("No source hander found for the current source."));this.Ka();this.n("dispose",this.Ka);this.Ec=c;this.cc=d.Tb(c,this);this.b("dispose",this.Ka);return this};a.prototype.Ka=function(){this.cc&&
	this.cc.dispose&&this.cc.dispose()}};t.media={};
	t.f=t.j.extend({l:function(a,c,d){var e,g,h;if(c.nativeCaptions===l||c.nativeTextTracks===l)this.featuresNativeTextTracks=l;t.j.call(this,a,c,d);for(d=t.f.yb.length-1;0<=d;d--)this.b(t.f.yb[d],this.Wd);(c=c.source)&&(this.c.currentSrc!==c.src||a.L&&3===a.L.ge)&&this.Sa(c);if(this.c.hasChildNodes()){d=this.c.childNodes;e=d.length;for(c=[];e--;)g=d[e],h=g.nodeName.toLowerCase(),"track"===h&&(this.featuresNativeTextTracks?P(this.Z(),g.track):c.push(g));for(d=0;d<c.length;d++)this.c.removeChild(c[d])}this.featuresNativeTextTracks&&
	this.b("loadstart",t.bind(this,this.ee));if(t.Eb&&a.options().nativeControlsForTouch===f){var k,p,r,u;k=this;p=this.k();c=p.controls();k.c.controls=!!c;r=function(){k.c.controls=f};u=function(){k.c.controls=l};p.b("controlsenabled",r);p.b("controlsdisabled",u);c=function(){p.n("controlsenabled",r);p.n("controlsdisabled",u)};k.b("dispose",c);p.b("usingcustomcontrols",c);p.usingNativeControls(f)}a.I(function(){this.src()&&(this.L&&this.q.autoplay&&this.paused())&&(delete this.L.poster,this.play())});
	this.Wa()}});s=t.f.prototype;s.dispose=function(){t.f.Mb(this.c);t.j.prototype.dispose.call(this)};
	s.e=function(){var a=this.d,c,d,e,g=a.L;if(!g||this.movingMediaElementInDOM===l){g?(e=g.cloneNode(l),t.f.Mb(g),g=e,a.L=j):(g=t.e("video"),e=videojs.$.ya({},a.Xe),(!t.Eb||a.options().nativeControlsForTouch!==f)&&delete e.controls,t.ed(g,t.i.D(e,{id:a.id()+"_html5_api","class":"vjs-tech"})));g.player=a;if(a.q.qd)for(e=0;e<a.q.qd.length;e++)c=a.q.qd[e],d=document.createElement("track"),d.Wb=c.Wb,d.label=c.label,d.hd=c.hd,d.src=c.src,"default"in c&&d.setAttribute("default","default"),g.appendChild(d);
	t.Ub(g,a.m())}c=["autoplay","preload","loop","muted"];for(e=c.length-1;0<=e;e--){d=c[e];var h={};"undefined"!==typeof a.q[d]&&(h[d]=a.q[d]);t.ed(g,h)}return g};s.ee=function(){for(var a=this.c.querySelectorAll("track"),c,d=a.length,e={captions:1,subtitles:1};d--;)if((c=a[d].T)&&c.kind in e&&!a[d]["default"])c.mode="disabled"};s.Wd=function(a){"error"==a.type&&this.error()?this.k().error(this.error().code):(a.bubbles=l,this.k().o(a))};s.play=function(){this.c.play()};s.pause=function(){this.c.pause()};
	s.paused=function(){return this.c.paused};s.currentTime=function(){return this.c.currentTime};s.bc=function(a){try{this.c.currentTime=a}catch(c){t.log(c,"Video is not ready. (Video.js)")}};s.duration=function(){return this.c.duration||0};s.buffered=function(){return this.c.buffered};s.volume=function(){return this.c.volume};s.Se=function(a){this.c.volume=a};s.muted=function(){return this.c.muted};s.Oe=function(a){this.c.muted=a};s.width=function(){return this.c.offsetWidth};s.height=function(){return this.c.offsetHeight};
	s.Ta=function(){return"function"==typeof this.c.webkitEnterFullScreen&&(/Android/.test(t.P)||!/Chrome|Mac OS X 10.5/.test(t.P))?f:l};s.Ic=function(){var a=this.c;"webkitDisplayingFullscreen"in a&&this.N("webkitbeginfullscreen",function(){this.d.isFullscreen(f);this.N("webkitendfullscreen",function(){this.d.isFullscreen(l);this.d.o("fullscreenchange")});this.d.o("fullscreenchange")});a.paused&&a.networkState<=a.jf?(this.c.play(),this.setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};
	s.Xd=function(){this.c.webkitExitFullScreen()};s.src=function(a){if(a===b)return this.c.src;this.ma(a)};s.ma=function(a){this.c.src=a};s.load=function(){this.c.load()};s.currentSrc=function(){return this.c.currentSrc};s.poster=function(){return this.c.poster};s.fd=function(a){this.c.poster=a};s.Qa=function(){return this.c.Qa};s.Qe=function(a){this.c.Qa=a};s.autoplay=function(){return this.c.autoplay};s.Le=function(a){this.c.autoplay=a};s.controls=function(){return this.c.controls};s.loop=function(){return this.c.loop};
	s.Ne=function(a){this.c.loop=a};s.error=function(){return this.c.error};s.seeking=function(){return this.c.seeking};s.ended=function(){return this.c.ended};s.playbackRate=function(){return this.c.playbackRate};s.Pe=function(a){this.c.playbackRate=a};s.networkState=function(){return this.c.networkState};s.readyState=function(){return this.c.readyState};s.textTracks=function(){return!this.featuresNativeTextTracks?t.j.prototype.textTracks.call(this):this.c.textTracks};
	s.addTextTrack=function(a,c,d){return!this.featuresNativeTextTracks?t.j.prototype.addTextTrack.call(this,a,c,d):this.c.addTextTrack(a,c,d)};
	s.ia=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.ia.call(this,a);var c=document.createElement("track");a=a||{};a.kind&&(c.kind=a.kind);a.label&&(c.label=a.label);if(a.language||a.srclang)c.srclang=a.language||a.srclang;a["default"]&&(c["default"]=a["default"]);a.id&&(c.id=a.id);a.src&&(c.src=a.src);this.m().appendChild(c);c.track.mode="metadata"===c.T.kind?"hidden":"disabled";c.onload=function(){var a=c.track;2<=c.readyState&&("metadata"===a.kind&&"hidden"!==a.mode?a.mode="hidden":
	"metadata"!==a.kind&&"disabled"!==a.mode&&(a.mode="disabled"),c.onload=j)};P(this.Z(),c.T);return c};s.Ba=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.Ba.call(this,a);var c,d;Q(this.Z(),a);c=this.m().querySelectorAll("track");for(d=0;d<c.length;d++)if(c[d]===a||c[d].track===a){c[d].parentNode.removeChild(c[d]);break}};t.f.isSupported=function(){try{t.A.volume=0.5}catch(a){return l}return!!t.A.canPlayType};t.j.gc(t.f);t.f.S={};
	t.f.S.eb=function(a){function c(a){try{return t.A.canPlayType(a)}catch(c){return""}}return a.type?c(a.type):a.src?(a=(a=a.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i))&&a[1],c("video/"+a)):""};t.f.S.Tb=function(a,c){c.ma(a.src)};t.f.S.dispose=m();t.f.Ra(t.f.S);t.f.Od=function(){var a=t.A.volume;t.A.volume=a/2+0.1;return a!==t.A.volume};t.f.Nd=function(){var a=t.A.playbackRate;t.A.playbackRate=a/2+0.1;return a!==t.A.playbackRate};
	t.f.Ve=function(){var a;(a=!!t.A.textTracks)&&0<t.A.textTracks.length&&(a="number"!==typeof t.A.textTracks[0].mode);a&&t.jc&&(a=l);return a};t.f.prototype.featuresVolumeControl=t.f.Od();t.f.prototype.featuresPlaybackRate=t.f.Nd();t.f.prototype.movingMediaElementInDOM=!t.Ad;t.f.prototype.featuresFullscreenResize=f;t.f.prototype.featuresProgressEvents=f;t.f.prototype.featuresNativeTextTracks=t.f.Ve();var S,oa=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,pa=/^video\/mp4/i;
	t.f.Xc=function(){4<=t.hc&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&oa.test(a)?"maybe":S.call(this,a)});t.Ed&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&pa.test(a)?"maybe":S.call(this,a)})};t.f.bf=function(){var a=t.A.constructor.prototype.canPlayType;t.A.constructor.prototype.canPlayType=S;S=j;return a};t.f.Xc();t.f.yb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
	t.f.Mb=function(a){if(a){a.player=j;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
	t.g=t.j.extend({l:function(a,c,d){t.j.call(this,a,c,d);var e=c.source;d=a.id()+"_flash_api";var g=a.q,g=t.i.D({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:g.autoplay,preload:g.Qa,loop:g.loop,muted:g.muted},c.flashVars),h=t.i.D({wmode:"opaque",bgcolor:"#000000"},c.params);d=t.i.D({id:d,name:d,"class":"vjs-tech"},c.attributes);e&&this.I(function(){this.Sa(e)});t.Ub(this.c,c.parentEl);c.startTime&&this.I(function(){this.load();
	this.play();this.currentTime(c.startTime)});t.jc&&this.I(function(){this.b("mousemove",function(){this.k().o({type:"mousemove",bubbles:l})})});a.b("stageclick",a.reportUserActivity);this.c=t.g.Hc(c.swf,this.c,g,h,d)}});s=t.g.prototype;s.dispose=function(){t.j.prototype.dispose.call(this)};s.play=function(){this.c.vjs_play()};s.pause=function(){this.c.vjs_pause()};s.src=function(a){return a===b?this.currentSrc():this.ma(a)};
	s.ma=function(a){a=t.$d(a);this.c.vjs_src(a);if(this.d.autoplay()){var c=this;this.setTimeout(function(){c.play()},0)}};t.g.prototype.setCurrentTime=function(a){this.oe=a;this.c.vjs_setProperty("currentTime",a);t.j.prototype.bc.call(this)};t.g.prototype.currentTime=function(){return this.seeking()?this.oe||0:this.c.vjs_getProperty("currentTime")};t.g.prototype.currentSrc=function(){return this.Ec?this.Ec.src:this.c.vjs_getProperty("currentSrc")};t.g.prototype.load=function(){this.c.vjs_load()};
	t.g.prototype.poster=function(){this.c.vjs_getProperty("poster")};t.g.prototype.setPoster=m();t.g.prototype.buffered=function(){return t.Lb(0,this.c.vjs_getProperty("buffered"))};t.g.prototype.Ta=q(l);t.g.prototype.Ic=q(l);function qa(){var a=T[U],c=a.charAt(0).toUpperCase()+a.slice(1);ra["set"+c]=function(c){return this.c.vjs_setProperty(a,c)}}function sa(a){ra[a]=function(){return this.c.vjs_getProperty(a)}}
	var ra=t.g.prototype,T="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),ta="error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight".split(" "),U;for(U=0;U<T.length;U++)sa(T[U]),qa();for(U=0;U<ta.length;U++)sa(ta[U]);t.g.isSupported=function(){return 10<=t.g.version()[0]};t.j.gc(t.g);t.g.S={};
	t.g.S.eb=function(a){return!a.type?"":a.type.replace(/;.*/,"").toLowerCase()in t.g.Zd?"maybe":""};t.g.S.Tb=function(a,c){c.ma(a.src)};t.g.S.dispose=m();t.g.Ra(t.g.S);t.g.Zd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};t.g.onReady=function(a){var c;if(c=(a=t.m(a))&&a.parentNode&&a.parentNode.player)a.player=c,t.g.checkReady(c.h)};t.g.checkReady=function(a){a.m()&&(a.m().vjs_getProperty?a.Wa():this.setTimeout(function(){t.g.checkReady(a)},50))};
	t.g.onEvent=function(a,c){t.m(a).player.o(c)};t.g.onError=function(a,c){var d=t.m(a).player,e="FLASH: "+c;"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)};
	t.g.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
	t.g.Hc=function(a,c,d,e,g){a=t.g.ce(a,d,e,g);a=t.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);a[t.expando]=c[t.expando];var h=d.childNodes[0];setTimeout(function(){h.style.display="block"},1E3);return a};
	t.g.ce=function(a,c,d,e){var g="",h="",k="";c&&t.i.da(c,function(a,c){g+=a+"="+c+"&amp;"});d=t.i.D({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);t.i.da(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'});e=t.i.D({data:a,width:"100%",height:"100%"},e);t.i.da(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash" '+k+">"+h+"</object>"};t.g.Ue={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};t.g.Hf=function(a,c){return a+"&"+c};
	t.g.Te=function(a){var c={Bc:"",md:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.Bc=a.substring(0,d);c.md=a.substring(e,a.length);return c};t.g.me=function(a){return a in t.g.Ue};t.g.Gd=/^rtmp[set]?:\/\//i;t.g.le=function(a){return t.g.Gd.test(a)};t.g.ac={};t.g.ac.eb=function(a){return t.g.me(a.type)||t.g.le(a.src)?"maybe":""};t.g.ac.Tb=function(a,c){var d=t.g.Te(a.src);c.setRtmpConnection(d.Bc);c.setRtmpStream(d.md)};t.g.Ra(t.g.ac);
	t.Fd=t.a.extend({l:function(a,c,d){t.a.call(this,a,c,d);if(!a.q.sources||0===a.q.sources.length){c=0;for(d=a.q.techOrder;c<d.length;c++){var e=t.ua(d[c]),g=__webpack_provided_window_dot_videojs[e];if(g&&g.isSupported()){ka(a,e);break}}}else a.src(a.q.sources)}});t.rc={disabled:"disabled",hidden:"hidden",showing:"showing"};t.Hd={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"};
	t.t=function(a){var c,d,e,g,h,k,p,r,u,A,R;a=a||{};if(!a.player)throw Error("A player was not provided.");c=this;if(t.oa)for(R in c=document.createElement("custom"),t.t.prototype)c[R]=t.t.prototype[R];c.d=a.player;e=t.rc[a.mode]||"disabled";g=t.Hd[a.kind]||"subtitles";h=a.label||"";k=a.language||a.srclang||"";d=a.id||"vjs_text_track_"+t.s++;if("metadata"===g||"chapters"===g)e="hidden";c.X=[];c.Ga=[];p=new t.W(c.X);r=new t.W(c.Ga);A=l;u=t.bind(c,function(){this.activeCues;A&&(this.trigger("cuechange"),
	A=l)});"disabled"!==e&&c.d.b("timeupdate",u);Object.defineProperty(c,"kind",{get:function(){return g},set:Function.prototype});Object.defineProperty(c,"label",{get:function(){return h},set:Function.prototype});Object.defineProperty(c,"language",{get:function(){return k},set:Function.prototype});Object.defineProperty(c,"id",{get:function(){return d},set:Function.prototype});Object.defineProperty(c,"mode",{get:function(){return e},set:function(a){t.rc[a]&&(e=a,"showing"===e&&this.d.b("timeupdate",u),
	this.o("modechange"))}});Object.defineProperty(c,"cues",{get:function(){return!this.Xb?j:p},set:Function.prototype});Object.defineProperty(c,"activeCues",{get:function(){var a,c,d,e,g;if(!this.Xb)return j;if(0===this.cues.length)return r;e=this.d.currentTime();a=0;c=this.cues.length;for(d=[];a<c;a++)g=this.cues[a],g.startTime<=e&&g.endTime>=e?d.push(g):g.startTime===g.endTime&&(g.startTime<=e&&g.startTime+0.5>=e)&&d.push(g);A=l;if(d.length!==this.Ga.length)A=f;else for(a=0;a<d.length;a++)-1===ua.call(this.Ga,
	d[a])&&(A=f);this.Ga=d;r.qb(this.Ga);return r},set:Function.prototype});a.src?va(a.src,c):c.Xb=f;if(t.oa)return c};t.t.prototype=t.i.create(t.z.prototype);t.t.prototype.constructor=t.t;t.t.prototype.bb={cuechange:"cuechange"};t.t.prototype.vc=function(a){var c=this.d.textTracks(),d=0;if(c)for(;d<c.length;d++)c[d]!==this&&c[d].bd(a);this.X.push(a);this.cues.qb(this.X)};t.t.prototype.bd=function(a){for(var c=0,d=this.X.length,e,g=l;c<d;c++)e=this.X[c],e===a&&(this.X.splice(c,1),g=f);g&&this.Dc.qb(this.X)};
	var va,V,ua;va=function(a,c){t.ff(a,t.bind(this,function(a,e,g){if(a)return t.log.error(a);c.Xb=f;V(g,c)}))};V=function(a,c){if("function"!==typeof window.WebVTT)window.setTimeout(function(){V(a,c)},25);else{var d=new window.WebVTT.Parser(window,window.vttjs,window.WebVTT.StringDecoder());d.oncue=function(a){c.vc(a)};d.onparsingerror=function(a){t.log.error(a)};d.parse(a);d.flush()}};
	ua=function(a,c){var d;if(this==j)throw new TypeError('"this" is null or not defined');var e=Object(this),g=e.length>>>0;if(0===g)return-1;d=+c||0;Infinity===Math.abs(d)&&(d=0);if(d>=g)return-1;for(d=Math.max(0<=d?d:g-Math.abs(d),0);d<g;){if(d in e&&e[d]===a)return d;d++}return-1};
	t.F=function(a){var c=this,d,e=0;if(t.oa)for(d in c=document.createElement("custom"),t.F.prototype)c[d]=t.F.prototype[d];a=a||[];c.Va=[];for(Object.defineProperty(c,"length",{get:function(){return this.Va.length}});e<a.length;e++)P(c,a[e]);if(t.oa)return c};t.F.prototype=t.i.create(t.z.prototype);t.F.prototype.constructor=t.F;t.F.prototype.bb={change:"change",addtrack:"addtrack",removetrack:"removetrack"};for(var wa in t.F.prototype.bb)t.F.prototype["on"+wa]=j;
	function P(a,c){var d=a.Va.length;""+d in a||Object.defineProperty(a,d,{get:function(){return this.Va[d]}});c.addEventListener("modechange",t.bind(a,function(){this.o("change")}));a.Va.push(c);a.o({type:"addtrack",T:c})}function Q(a,c){for(var d=0,e=a.length,g;d<e;d++)if(g=a[d],g===c){a.Va.splice(d,1);break}a.o({type:"removetrack",T:c})}t.F.prototype.de=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};
	t.W=function(a){var c=this,d;if(t.oa)for(d in c=document.createElement("custom"),t.W.prototype)c[d]=t.W.prototype[d];t.W.prototype.qb.call(c,a);Object.defineProperty(c,"length",{get:n("pe")});if(t.oa)return c};t.W.prototype.qb=function(a){var c=this.length||0,d=0,e=a.length;this.X=a;this.pe=a.length;a=function(a){""+a in this||Object.defineProperty(this,""+a,{get:function(){return this.X[a]}})};if(c<e)for(d=c;d<e;d++)a.call(this,d)};
	t.W.prototype.be=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};t.ra=t.a.extend({l:function(a,c,d){t.a.call(this,a,c,d);a.b("loadstart",t.bind(this,this.Ze));a.I(t.bind(this,function(){if(a.h&&a.h.featuresNativeTextTracks)this.Y();else{var c,d,h;a.b("fullscreenchange",t.bind(this,this.C));d=a.q.tracks||[];for(c=0;c<d.length;c++)h=d[c],this.d.ia(h)}}))}});t.ra.prototype.Ze=function(){this.d.h&&this.d.h.featuresNativeTextTracks?this.Y():this.show()};
	t.ra.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};t.ra.prototype.Pd=function(){"function"===typeof window.WebVTT&&window.WebVTT.processCues(window,[],this.c)};function W(a,c){return"rgba("+parseInt(a[1]+a[1],16)+","+parseInt(a[2]+a[2],16)+","+parseInt(a[3]+a[3],16)+","+c+")"}
	var xa={xf:"monospace",Df:"sans-serif",Ff:"serif",yf:'"Andale Mono", "Lucida Console", monospace',zf:'"Courier New", monospace',Bf:"sans-serif",Cf:"serif",of:'"Comic Sans MS", Impact, fantasy',Ef:'"Monotype Corsiva", cursive',Gf:'"Andale Mono", "Lucida Console", monospace, sans-serif'};t.ra.prototype.C=function(){var a=this.d.textTracks(),c=0,d;this.Pd();if(a)for(;c<a.length;c++)d=a[c],"showing"===d.mode&&this.cf(d)};
	t.ra.prototype.cf=function(a){if("function"===typeof window.WebVTT&&a.activeCues){for(var c=0,d=this.d.textTrackSettings.Lc(),e,g=[];c<a.activeCues.length;c++)g.push(a.activeCues[c]);window.WebVTT.processCues(window,a.activeCues,this.c);for(c=g.length;c--;){a=g[c].pf;d.color&&(a.firstChild.style.color=d.color);if(d.nd)try{a.firstChild.style.color=W(d.color||"#fff",d.nd)}catch(h){}d.backgroundColor&&(a.firstChild.style.backgroundColor=d.backgroundColor);if(d.yc)try{a.firstChild.style.backgroundColor=
	W(d.backgroundColor||"#000",d.yc)}catch(k){}if(d.fc)if(d.ud)try{a.style.backgroundColor=W(d.fc,d.ud)}catch(p){}else a.style.backgroundColor=d.fc;d.La&&("dropshadow"===d.La?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===d.La?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===d.La?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===d.La&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"));
	d.Qb&&1!==d.Qb&&(e=window.Af(a.style.fontSize),a.style.fontSize=e*d.Qb+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px");d.fontFamily&&"default"!==d.fontFamily&&("small-caps"===d.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=xa[d.fontFamily])}}};
	t.aa=t.M.extend({l:function(a,c){var d=this.T=c.track,e=a.textTracks(),g,h;e&&(g=t.bind(this,function(){var a="showing"===this.T.mode,c,d,g;if(this instanceof t.Ab){a=f;d=0;for(g=e.length;d<g;d++)if(c=e[d],c.kind===this.T.kind&&"showing"===c.mode){a=l;break}}this.selected(a)}),e.addEventListener("change",g),a.b("dispose",function(){e.removeEventListener("change",g)}));c.label=d.label||d.language||"Unknown";c.selected=d["default"]||"showing"===d.mode;t.M.call(this,a,c);e&&e.onchange===b&&this.b(["tap",
	"click"],function(){if("object"!==typeof window.yd)try{h=new window.yd("change")}catch(a){}h||(h=document.createEvent("Event"),h.initEvent("change",f,f));e.dispatchEvent(h)})}});t.aa.prototype.u=function(){var a=this.T.kind,c=this.d.textTracks(),d,e=0;t.M.prototype.u.call(this);if(c)for(;e<c.length;e++)d=c[e],d.kind===a&&(d.mode=d===this.T?"showing":"disabled")};t.Ab=t.aa.extend({l:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" off","default":l,mode:"disabled"};t.aa.call(this,a,c);this.selected(f)}});
	t.tb=t.aa.extend({l:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" settings","default":l,mode:"disabled"};t.aa.call(this,a,c);this.p("vjs-texttrack-settings")}});t.tb.prototype.u=function(){this.k().ea("textTrackSettings").show()};
	t.Q=t.O.extend({l:function(a,c){var d,e;t.O.call(this,a,c);d=this.d.textTracks();1>=this.H.length&&this.Y();d&&(e=t.bind(this,this.update),d.addEventListener("removetrack",e),d.addEventListener("addtrack",e),this.d.b("dispose",function(){d.removeEventListener("removetrack",e);d.removeEventListener("addtrack",e)}))}});
	t.Q.prototype.Ia=function(){var a=[],c,d;this instanceof t.na&&(!this.k().h||!this.k().h.featuresNativeTextTracks)&&a.push(new t.tb(this.d,{kind:this.fa}));a.push(new t.Ab(this.d,{kind:this.fa}));d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.fa&&a.push(new t.aa(this.d,{track:c}));return a};t.na=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Captions Menu")}});t.na.prototype.fa="captions";t.na.prototype.sa="Captions";
	t.na.prototype.className="vjs-captions-button";t.na.prototype.update=function(){var a=2;t.Q.prototype.update.call(this);this.k().h&&this.k().h.featuresNativeTextTracks&&(a=1);this.H&&this.H.length>a?this.show():this.Y()};t.ab=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Subtitles Menu")}});t.ab.prototype.fa="subtitles";t.ab.prototype.sa="Subtitles";t.ab.prototype.className="vjs-subtitles-button";
	t.Xa=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Chapters Menu")}});s=t.Xa.prototype;s.fa="chapters";s.sa="Chapters";s.className="vjs-chapters-button";s.Ia=function(){var a=[],c,d;d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.fa&&a.push(new t.aa(this.d,{track:c}));return a};
	s.Ja=function(){for(var a=this.d.textTracks()||[],c=0,d=a.length,e,g,h=this.H=[];c<d;c++)if(e=a[c],e.kind==this.fa)if(e.Dc){g=e;break}else e.mode="hidden",window.setTimeout(t.bind(this,function(){this.Ja()}),100);a=this.xa;a===b&&(a=new t.pa(this.d),a.va().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.ua(this.fa),We:-1})));if(g){e=g.cues;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new t.Ya(this.d,{track:g,cue:k}),h.push(k),a.ba(k);this.ba(a)}0<this.H.length&&this.show();return a};
	t.Ya=t.M.extend({l:function(a,c){var d=this.T=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.endTime;t.M.call(this,a,c);d.addEventListener("cuechange",t.bind(this,this.update))}});t.Ya.prototype.u=function(){t.M.prototype.u.call(this);this.d.currentTime(this.cue.startTime);this.update(this.cue.startTime)};t.Ya.prototype.update=function(){var a=this.cue,c=this.d.currentTime();this.selected(a.startTime<=c&&c<a.endTime)};
	function X(a){var c;a.Ke?c=a.Ke[0]:a.options&&(c=a.options[a.options.selectedIndex]);return c.value}function Y(a,c){var d,e;if(c){for(d=0;d<a.options.length&&!(e=a.options[d],e.value===c);d++);a.selectedIndex=d}}
	t.sc=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.Y();t.b(this.m().querySelector(".vjs-done-button"),"click",t.bind(this,function(){this.Je();this.Y()}));t.b(this.m().querySelector(".vjs-default-button"),"click",t.bind(this,function(){this.m().querySelector(".vjs-fg-color > select").selectedIndex=0;this.m().querySelector(".vjs-bg-color > select").selectedIndex=0;this.m().querySelector(".window-color > select").selectedIndex=0;this.m().querySelector(".vjs-text-opacity > select").selectedIndex=
	0;this.m().querySelector(".vjs-bg-opacity > select").selectedIndex=0;this.m().querySelector(".vjs-window-opacity > select").selectedIndex=0;this.m().querySelector(".vjs-edge-style select").selectedIndex=0;this.m().querySelector(".vjs-font-family select").selectedIndex=0;this.m().querySelector(".vjs-font-percent select").selectedIndex=2;this.C()}));t.b(this.m().querySelector(".vjs-fg-color > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-bg-color > select"),"change",t.bind(this,
	this.C));t.b(this.m().querySelector(".window-color > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-text-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-bg-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-window-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-font-percent select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-edge-style select"),"change",t.bind(this,
	this.C));t.b(this.m().querySelector(".vjs-font-family select"),"change",t.bind(this,this.C));a.options().persistTextTrackSettings&&this.Ie()}});s=t.sc.prototype;s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-caption-settings vjs-modal-overlay",innerHTML:'<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'})};
	s.Lc=function(){var a,c,d,e,g,h,k,p,r,u;a=this.m();g=X(a.querySelector(".vjs-edge-style select"));h=X(a.querySelector(".vjs-font-family select"));k=X(a.querySelector(".vjs-fg-color > select"));d=X(a.querySelector(".vjs-text-opacity > select"));p=X(a.querySelector(".vjs-bg-color > select"));c=X(a.querySelector(".vjs-bg-opacity > select"));r=X(a.querySelector(".window-color > select"));e=X(a.querySelector(".vjs-window-opacity > select"));a=window.parseFloat(X(a.querySelector(".vjs-font-percent > select")));
	c={backgroundOpacity:c,textOpacity:d,windowOpacity:e,edgeStyle:g,fontFamily:h,color:k,backgroundColor:p,windowColor:r,fontPercent:a};for(u in c)(""===c[u]||"none"===c[u]||"fontPercent"===u&&1===c[u])&&delete c[u];return c};
	s.Re=function(a){var c=this.m();Y(c.querySelector(".vjs-edge-style select"),a.La);Y(c.querySelector(".vjs-font-family select"),a.fontFamily);Y(c.querySelector(".vjs-fg-color > select"),a.color);Y(c.querySelector(".vjs-text-opacity > select"),a.nd);Y(c.querySelector(".vjs-bg-color > select"),a.backgroundColor);Y(c.querySelector(".vjs-bg-opacity > select"),a.yc);Y(c.querySelector(".window-color > select"),a.fc);Y(c.querySelector(".vjs-window-opacity > select"),a.ud);(a=a.Qb)&&(a=a.toFixed(2));Y(c.querySelector(".vjs-font-percent > select"),
	a)};s.Ie=function(){var a;try{a=JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))}catch(c){}a&&this.Re(a)};s.Je=function(){var a;if(this.d.options().persistTextTrackSettings){a=this.Lc();try{t.ib(a)?window.localStorage.removeItem("vjs-text-track-settings"):window.localStorage.setItem("vjs-text-track-settings",JSON.stringify(a))}catch(c){}}};s.C=function(){var a=this.d.ea("textTrackDisplay");a&&a.C()};
	if("undefined"!==typeof window.JSON&&"function"===typeof window.JSON.parse)t.JSON=window.JSON;else{t.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;t.JSON.parse=function(a,c){function d(a,e){var k,p,r=a[e];if(r&&"object"===typeof r)for(k in r)Object.prototype.hasOwnProperty.call(r,k)&&(p=d(r,k),p!==b?r[k]=p:delete r[k]);return c.call(a,e,r)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+
	a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
	t.xc=function(){var a,c,d,e;a=document.getElementsByTagName("video");c=document.getElementsByTagName("audio");var g=[];if(a&&0<a.length){d=0;for(e=a.length;d<e;d++)g.push(a[d])}if(c&&0<c.length){d=0;for(e=c.length;d<e;d++)g.push(c[d])}if(g&&0<g.length){d=0;for(e=g.length;d<e;d++)if((c=g[d])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==j&&videojs(c));else{t.Ib();break}}else t.td||t.Ib()};t.Ib=function(){setTimeout(t.xc,1)};
	"complete"===document.readyState?t.td=f:t.N(window,"load",function(){t.td=f});t.Ib();t.Fe=function(a,c){t.Player.prototype[a]=c};var ya=this;function $(a,c){var d=a.split("."),e=ya;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",t);$("_V_",t);$("videojs.options",t.options);$("videojs.players",t.Aa);$("videojs.TOUCH_ENABLED",t.Eb);$("videojs.cache",t.ta);$("videojs.Component",t.a);t.a.prototype.player=t.a.prototype.k;t.a.prototype.options=t.a.prototype.options;t.a.prototype.init=t.a.prototype.l;t.a.prototype.dispose=t.a.prototype.dispose;t.a.prototype.createEl=t.a.prototype.e;t.a.prototype.contentEl=t.a.prototype.va;t.a.prototype.el=t.a.prototype.m;t.a.prototype.addChild=t.a.prototype.ba;
	t.a.prototype.getChild=t.a.prototype.ea;t.a.prototype.getChildById=t.a.prototype.ae;t.a.prototype.children=t.a.prototype.children;t.a.prototype.initChildren=t.a.prototype.Oc;t.a.prototype.removeChild=t.a.prototype.removeChild;t.a.prototype.on=t.a.prototype.b;t.a.prototype.off=t.a.prototype.n;t.a.prototype.one=t.a.prototype.N;t.a.prototype.trigger=t.a.prototype.o;t.a.prototype.triggerReady=t.a.prototype.Wa;t.a.prototype.show=t.a.prototype.show;t.a.prototype.hide=t.a.prototype.Y;
	t.a.prototype.width=t.a.prototype.width;t.a.prototype.height=t.a.prototype.height;t.a.prototype.dimensions=t.a.prototype.Td;t.a.prototype.ready=t.a.prototype.I;t.a.prototype.addClass=t.a.prototype.p;t.a.prototype.removeClass=t.a.prototype.r;t.a.prototype.hasClass=t.a.prototype.Oa;t.a.prototype.buildCSSClass=t.a.prototype.V;t.a.prototype.localize=t.a.prototype.v;t.a.prototype.setInterval=t.a.prototype.setInterval;t.a.prototype.setTimeout=t.a.prototype.setTimeout;$("videojs.EventEmitter",t.z);
	t.z.prototype.on=t.z.prototype.b;t.z.prototype.addEventListener=t.z.prototype.addEventListener;t.z.prototype.off=t.z.prototype.n;t.z.prototype.removeEventListener=t.z.prototype.removeEventListener;t.z.prototype.one=t.z.prototype.N;t.z.prototype.trigger=t.z.prototype.o;t.z.prototype.dispatchEvent=t.z.prototype.dispatchEvent;t.Player.prototype.ended=t.Player.prototype.ended;t.Player.prototype.enterFullWindow=t.Player.prototype.Jc;t.Player.prototype.exitFullWindow=t.Player.prototype.Nb;
	t.Player.prototype.preload=t.Player.prototype.Qa;t.Player.prototype.remainingTime=t.Player.prototype.remainingTime;t.Player.prototype.supportsFullScreen=t.Player.prototype.Ta;t.Player.prototype.currentType=t.Player.prototype.Qd;t.Player.prototype.requestFullScreen=t.Player.prototype.requestFullScreen;t.Player.prototype.requestFullscreen=t.Player.prototype.requestFullscreen;t.Player.prototype.cancelFullScreen=t.Player.prototype.cancelFullScreen;t.Player.prototype.exitFullscreen=t.Player.prototype.exitFullscreen;
	t.Player.prototype.isFullScreen=t.Player.prototype.isFullScreen;t.Player.prototype.isFullscreen=t.Player.prototype.isFullscreen;t.Player.prototype.textTracks=t.Player.prototype.textTracks;t.Player.prototype.remoteTextTracks=t.Player.prototype.Z;t.Player.prototype.addTextTrack=t.Player.prototype.addTextTrack;t.Player.prototype.addRemoteTextTrack=t.Player.prototype.ia;t.Player.prototype.removeRemoteTextTrack=t.Player.prototype.Ba;$("videojs.MediaLoader",t.Fd);$("videojs.TextTrackDisplay",t.ra);
	$("videojs.ControlBar",t.ub);$("videojs.Button",t.w);$("videojs.PlayToggle",t.nc);$("videojs.FullscreenToggle",t.Za);$("videojs.BigPlayButton",t.sb);$("videojs.LoadingSpinner",t.lc);$("videojs.CurrentTimeDisplay",t.vb);$("videojs.DurationDisplay",t.wb);$("videojs.TimeDivider",t.tc);$("videojs.RemainingTimeDisplay",t.Db);$("videojs.LiveDisplay",t.kc);$("videojs.ErrorDisplay",t.xb);$("videojs.Slider",t.U);$("videojs.ProgressControl",t.Cb);$("videojs.SeekBar",t.qc);$("videojs.LoadProgressBar",t.zb);
	$("videojs.PlayProgressBar",t.mc);$("videojs.SeekHandle",t.$a);$("videojs.VolumeControl",t.Gb);$("videojs.VolumeBar",t.Fb);$("videojs.VolumeLevel",t.uc);$("videojs.VolumeMenuButton",t.Fa);$("videojs.VolumeHandle",t.Hb);$("videojs.MuteToggle",t.qa);$("videojs.PosterImage",t.pc);$("videojs.Menu",t.pa);$("videojs.MenuItem",t.M);$("videojs.MenuButton",t.O);$("videojs.PlaybackRateMenuButton",t.oc);$("videojs.ChaptersTrackMenuItem",t.Ya);$("videojs.TextTrackButton",t.Q);$("videojs.TextTrackMenuItem",t.aa);
	$("videojs.OffTextTrackMenuItem",t.Ab);$("videojs.CaptionSettingsMenuItem",t.tb);t.O.prototype.createItems=t.O.prototype.Ia;t.Q.prototype.createItems=t.Q.prototype.Ia;t.Xa.prototype.createItems=t.Xa.prototype.Ia;$("videojs.SubtitlesButton",t.ab);$("videojs.CaptionsButton",t.na);$("videojs.ChaptersButton",t.Xa);$("videojs.MediaTechController",t.j);t.j.withSourceHandlers=t.j.gc;t.j.prototype.featuresVolumeControl=t.j.prototype.uf;t.j.prototype.featuresFullscreenResize=t.j.prototype.qf;
	t.j.prototype.featuresPlaybackRate=t.j.prototype.rf;t.j.prototype.featuresProgressEvents=t.j.prototype.sf;t.j.prototype.featuresTimeupdateEvents=t.j.prototype.tf;t.j.prototype.setPoster=t.j.prototype.fd;t.j.prototype.textTracks=t.j.prototype.textTracks;t.j.prototype.remoteTextTracks=t.j.prototype.Z;t.j.prototype.addTextTrack=t.j.prototype.addTextTrack;t.j.prototype.addRemoteTextTrack=t.j.prototype.ia;t.j.prototype.removeRemoteTextTrack=t.j.prototype.Ba;$("videojs.Html5",t.f);t.f.Events=t.f.yb;
	t.f.isSupported=t.f.isSupported;t.f.canPlaySource=t.f.zc;t.f.patchCanPlayType=t.f.Xc;t.f.unpatchCanPlayType=t.f.bf;t.f.prototype.setCurrentTime=t.f.prototype.bc;t.f.prototype.setVolume=t.f.prototype.Se;t.f.prototype.setMuted=t.f.prototype.Oe;t.f.prototype.setPreload=t.f.prototype.Qe;t.f.prototype.setAutoplay=t.f.prototype.Le;t.f.prototype.setLoop=t.f.prototype.Ne;t.f.prototype.enterFullScreen=t.f.prototype.Ic;t.f.prototype.exitFullScreen=t.f.prototype.Xd;t.f.prototype.playbackRate=t.f.prototype.playbackRate;
	t.f.prototype.setPlaybackRate=t.f.prototype.Pe;t.f.registerSourceHandler=t.f.Ra;t.f.selectSourceHandler=t.f.pb;t.f.prototype.setSource=t.f.prototype.Sa;t.f.prototype.disposeSourceHandler=t.f.prototype.Ka;t.f.prototype.textTracks=t.f.prototype.textTracks;t.f.prototype.remoteTextTracks=t.f.prototype.Z;t.f.prototype.addTextTrack=t.f.prototype.addTextTrack;t.f.prototype.addRemoteTextTrack=t.f.prototype.ia;t.f.prototype.removeRemoteTextTrack=t.f.prototype.Ba;$("videojs.Flash",t.g);t.g.isSupported=t.g.isSupported;
	t.g.canPlaySource=t.g.zc;t.g.onReady=t.g.onReady;t.g.embed=t.g.Hc;t.g.version=t.g.version;t.g.prototype.setSource=t.g.prototype.Sa;t.g.registerSourceHandler=t.g.Ra;t.g.selectSourceHandler=t.g.pb;t.g.prototype.setSource=t.g.prototype.Sa;t.g.prototype.disposeSourceHandler=t.g.prototype.Ka;$("videojs.TextTrack",t.t);$("videojs.TextTrackList",t.F);$("videojs.TextTrackCueList",t.W);$("videojs.TextTrackSettings",t.sc);t.t.prototype.id=t.t.prototype.id;t.t.prototype.label=t.t.prototype.label;
	t.t.prototype.kind=t.t.prototype.Wb;t.t.prototype.mode=t.t.prototype.mode;t.t.prototype.cues=t.t.prototype.Dc;t.t.prototype.activeCues=t.t.prototype.nf;t.t.prototype.addCue=t.t.prototype.vc;t.t.prototype.removeCue=t.t.prototype.bd;t.F.prototype.getTrackById=t.F.prototype.de;t.W.prototype.getCueById=t.F.prototype.be;$("videojs.CaptionsTrack",t.gf);$("videojs.SubtitlesTrack",t.mf);$("videojs.ChaptersTrack",t.hf);$("videojs.autoSetup",t.xc);$("videojs.plugin",t.Fe);$("videojs.createTimeRange",t.Lb);
	$("videojs.util",t.$);t.$.mergeOptions=t.$.ya;t.addLanguage=t.Jd;})();

	/* vtt.js - v0.11.11 (https://github.com/mozilla/vtt.js) built on 22-01-2015 */
	!function(a){var b=a.vttjs={},c=b.VTTCue,d=b.VTTRegion,e=a.VTTCue,f=a.VTTRegion;b.shim=function(){b.VTTCue=c,b.VTTRegion=d},b.restore=function(){b.VTTCue=e,b.VTTRegion=f}}(this),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=h[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){if("string"!=typeof a)return!1;var b=i[a.toLowerCase()];return b?a.toLowerCase():!1}function e(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]=c[d]}return a}function f(a,b,f){var h=this,i=/MSIE\s8\.0/.test(navigator.userAgent),j={};i?h=document.createElement("custom"):j.enumerable=!0,h.hasBeenReset=!1;var k="",l=!1,m=a,n=b,o=f,p=null,q="",r=!0,s="auto",t="start",u=50,v="middle",w=50,x="middle";return Object.defineProperty(h,"id",e({},j,{get:function(){return k},set:function(a){k=""+a}})),Object.defineProperty(h,"pauseOnExit",e({},j,{get:function(){return l},set:function(a){l=!!a}})),Object.defineProperty(h,"startTime",e({},j,{get:function(){return m},set:function(a){if("number"!=typeof a)throw new TypeError("Start time must be set to a number.");m=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"endTime",e({},j,{get:function(){return n},set:function(a){if("number"!=typeof a)throw new TypeError("End time must be set to a number.");n=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"text",e({},j,{get:function(){return o},set:function(a){o=""+a,this.hasBeenReset=!0}})),Object.defineProperty(h,"region",e({},j,{get:function(){return p},set:function(a){p=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"vertical",e({},j,{get:function(){return q},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");q=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"snapToLines",e({},j,{get:function(){return r},set:function(a){r=!!a,this.hasBeenReset=!0}})),Object.defineProperty(h,"line",e({},j,{get:function(){return s},set:function(a){if("number"!=typeof a&&a!==g)throw new SyntaxError("An invalid number or illegal string was specified.");s=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"lineAlign",e({},j,{get:function(){return t},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");t=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"position",e({},j,{get:function(){return u},set:function(a){if(0>a||a>100)throw new Error("Position must be between 0 and 100.");u=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"positionAlign",e({},j,{get:function(){return v},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");v=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"size",e({},j,{get:function(){return w},set:function(a){if(0>a||a>100)throw new Error("Size must be between 0 and 100.");w=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"align",e({},j,{get:function(){return x},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");x=b,this.hasBeenReset=!0}})),h.displayState=void 0,i?h:void 0}var g="auto",h={"":!0,lr:!0,rl:!0},i={start:!0,middle:!0,end:!0,left:!0,right:!0};f.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},a.VTTCue=a.VTTCue||f,b.VTTCue=f}(this,this.vttjs||{}),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=f[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){return"number"==typeof a&&a>=0&&100>=a}function e(){var a=100,b=3,e=0,f=100,g=0,h=100,i="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return a},set:function(b){if(!d(b))throw new Error("Width must be between 0 and 100.");a=b}},lines:{enumerable:!0,get:function(){return b},set:function(a){if("number"!=typeof a)throw new TypeError("Lines must be set to a number.");b=a}},regionAnchorY:{enumerable:!0,get:function(){return f},set:function(a){if(!d(a))throw new Error("RegionAnchorX must be between 0 and 100.");f=a}},regionAnchorX:{enumerable:!0,get:function(){return e},set:function(a){if(!d(a))throw new Error("RegionAnchorY must be between 0 and 100.");e=a}},viewportAnchorY:{enumerable:!0,get:function(){return h},set:function(a){if(!d(a))throw new Error("ViewportAnchorY must be between 0 and 100.");h=a}},viewportAnchorX:{enumerable:!0,get:function(){return g},set:function(a){if(!d(a))throw new Error("ViewportAnchorX must be between 0 and 100.");g=a}},scroll:{enumerable:!0,get:function(){return i},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");i=b}}})}var f={"":!0,up:!0};a.VTTRegion=a.VTTRegion||e,b.VTTRegion=e}(this,this.vttjs||{}),function(a){function b(a,b){this.name="ParsingError",this.code=a.code,this.message=b||a.message}function c(a){function b(a,b,c,d){return 3600*(0|a)+60*(0|b)+(0|c)+(0|d)/1e3}var c=a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return c?c[3]?b(c[1],c[2],c[3].replace(":",""),c[4]):c[1]>59?b(c[1],c[2],0,c[4]):b(0,c[1],c[2],c[4]):null}function d(){this.values=o(null)}function e(a,b,c,d){var e=d?a.split(d):[a];for(var f in e)if("string"==typeof e[f]){var g=e[f].split(c);if(2===g.length){var h=g[0],i=g[1];b(h,i)}}}function f(a,f,g){function h(){var d=c(a);if(null===d)throw new b(b.Errors.BadTimeStamp,"Malformed timestamp: "+k);return a=a.replace(/^[^\sa-zA-Z-]+/,""),d}function i(a,b){var c=new d;e(a,function(a,b){switch(a){case"region":for(var d=g.length-1;d>=0;d--)if(g[d].id===b){c.set(a,g[d].region);break}break;case"vertical":c.alt(a,b,["rl","lr"]);break;case"line":var e=b.split(","),f=e[0];c.integer(a,f),c.percent(a,f)?c.set("snapToLines",!1):null,c.alt(a,f,["auto"]),2===e.length&&c.alt("lineAlign",e[1],["start","middle","end"]);break;case"position":e=b.split(","),c.percent(a,e[0]),2===e.length&&c.alt("positionAlign",e[1],["start","middle","end"]);break;case"size":c.percent(a,b);break;case"align":c.alt(a,b,["start","middle","end","left","right"])}},/:/,/\s/),b.region=c.get("region",null),b.vertical=c.get("vertical",""),b.line=c.get("line","auto"),b.lineAlign=c.get("lineAlign","start"),b.snapToLines=c.get("snapToLines",!0),b.size=c.get("size",100),b.align=c.get("align","middle"),b.position=c.get("position",{start:0,left:0,middle:50,end:100,right:100},b.align),b.positionAlign=c.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},b.align)}function j(){a=a.replace(/^\s+/,"")}var k=a;if(j(),f.startTime=h(),j(),"-->"!==a.substr(0,3))throw new b(b.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+k);a=a.substr(3),j(),f.endTime=h(),j(),i(a,f)}function g(a,b){function d(){function a(a){return b=b.substr(a.length),a}if(!b)return null;var c=b.match(/^([^<]*)(<[^>]+>?)?/);return a(c[1]?c[1]:c[2])}function e(a){return p[a]}function f(a){for(;o=a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)a=a.replace(o[0],e);return a}function g(a,b){return!s[b.localName]||s[b.localName]===a.localName}function h(b,c){var d=q[b];if(!d)return null;var e=a.document.createElement(d);e.localName=d;var f=r[b];return f&&c&&(e[f]=c.trim()),e}for(var i,j=a.document.createElement("div"),k=j,l=[];null!==(i=d());)if("<"!==i[0])k.appendChild(a.document.createTextNode(f(i)));else{if("/"===i[1]){l.length&&l[l.length-1]===i.substr(2).replace(">","")&&(l.pop(),k=k.parentNode);continue}var m,n=c(i.substr(1,i.length-2));if(n){m=a.document.createProcessingInstruction("timestamp",n),k.appendChild(m);continue}var o=i.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!o)continue;if(m=h(o[1],o[3]),!m)continue;if(!g(k,m))continue;o[2]&&(m.className=o[2].substr(1).replace("."," ")),l.push(o[1]),k.appendChild(m),k=m}return j}function h(a){function b(a,b){for(var c=b.childNodes.length-1;c>=0;c--)a.push(b.childNodes[c])}function c(a){if(!a||!a.length)return null;var d=a.pop(),e=d.textContent||d.innerText;if(e){var f=e.match(/^.*(\n|\r)/);return f?(a.length=0,f[0]):e}return"ruby"===d.tagName?c(a):d.childNodes?(b(a,d),c(a)):void 0}var d,e=[],f="";if(!a||!a.childNodes)return"ltr";for(b(e,a);f=c(e);)for(var g=0;g<f.length;g++){d=f.charCodeAt(g);for(var h=0;h<t.length;h++)if(t[h]===d)return"rtl"}return"ltr"}function i(a){if("number"==typeof a.line&&(a.snapToLines||a.line>=0&&a.line<=100))return a.line;if(!a.track||!a.track.textTrackList||!a.track.textTrackList.mediaElement)return-1;for(var b=a.track,c=b.textTrackList,d=0,e=0;e<c.length&&c[e]!==b;e++)"showing"===c[e].mode&&d++;return-1*++d}function j(){}function k(a,b,c){var d=/MSIE\s8\.0/.test(navigator.userAgent),e="rgba(255, 255, 255, 1)",f="rgba(0, 0, 0, 0.8)";d&&(e="rgb(255, 255, 255)",f="rgb(0, 0, 0)"),j.call(this),this.cue=b,this.cueDiv=g(a,b.text);var i={color:e,backgroundColor:f,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};d||(i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl",i.unicodeBidi="plaintext"),this.applyStyles(i,this.cueDiv),this.div=a.document.createElement("div"),i={textAlign:"middle"===b.align?"center":b.align,font:c.font,whiteSpace:"pre-line",position:"absolute"},d||(i.direction=h(this.cueDiv),i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"),this.applyStyles(i),this.div.appendChild(this.cueDiv);var k=0;switch(b.positionAlign){case"start":k=b.position;break;case"middle":k=b.position-b.size/2;break;case"end":k=b.position-b.size}this.applyStyles(""===b.vertical?{left:this.formatStyle(k,"%"),width:this.formatStyle(b.size,"%")}:{top:this.formatStyle(k,"%"),height:this.formatStyle(b.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}function l(a){var b,c,d,e,f=/MSIE\s8\.0/.test(navigator.userAgent);if(a.div){c=a.div.offsetHeight,d=a.div.offsetWidth,e=a.div.offsetTop;var g=(g=a.div.childNodes)&&(g=g[0])&&g.getClientRects&&g.getClientRects();a=a.div.getBoundingClientRect(),b=g?Math.max(g[0]&&g[0].height||0,a.height/g.length):0}this.left=a.left,this.right=a.right,this.top=a.top||e,this.height=a.height||c,this.bottom=a.bottom||e+(a.height||c),this.width=a.width||d,this.lineHeight=void 0!==b?b:a.lineHeight,f&&!this.lineHeight&&(this.lineHeight=13)}function m(a,b,c,d){function e(a,b){for(var e,f=new l(a),g=1,h=0;h<b.length;h++){for(;a.overlapsOppositeAxis(c,b[h])||a.within(c)&&a.overlapsAny(d);)a.move(b[h]);if(a.within(c))return a;var i=a.intersectPercentage(c);g>i&&(e=new l(a),g=i),a=new l(f)}return e||f}var f=new l(b),g=b.cue,h=i(g),j=[];if(g.snapToLines){var k;switch(g.vertical){case"":j=["+y","-y"],k="height";break;case"rl":j=["+x","-x"],k="width";break;case"lr":j=["-x","+x"],k="width"}var m=f.lineHeight,n=m*Math.round(h),o=c[k]+m,p=j[0];Math.abs(n)>o&&(n=0>n?-1:1,n*=Math.ceil(o/m)*m),0>h&&(n+=""===g.vertical?c.height:c.width,j=j.reverse()),f.move(p,n)}else{var q=f.lineHeight/c.height*100;switch(g.lineAlign){case"middle":h-=q/2;break;case"end":h-=q}switch(g.vertical){case"":b.applyStyles({top:b.formatStyle(h,"%")});break;case"rl":b.applyStyles({left:b.formatStyle(h,"%")});break;case"lr":b.applyStyles({right:b.formatStyle(h,"%")})}j=["+y","-x","+x","-y"],f=new l(b)}var r=e(f,j);b.move(r.toCSSCompatValues(c))}function n(){}var o=Object.create||function(){function a(){}return function(b){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return a.prototype=b,new a}}();b.prototype=o(Error.prototype),b.prototype.constructor=b,b.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},d.prototype={set:function(a,b){this.get(a)||""===b||(this.values[a]=b)},get:function(a,b,c){return c?this.has(a)?this.values[a]:b[c]:this.has(a)?this.values[a]:b},has:function(a){return a in this.values},alt:function(a,b,c){for(var d=0;d<c.length;++d)if(b===c[d]){this.set(a,b);break}},integer:function(a,b){/^-?\d+$/.test(b)&&this.set(a,parseInt(b,10))},percent:function(a,b){var c;return(c=b.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(b=parseFloat(b),b>=0&&100>=b)?(this.set(a,b),!0):!1}};var p={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},q={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},r={v:"title",lang:"lang"},s={rt:"ruby"},t=[1470,1472,1475,1478,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1520,1521,1522,1523,1524,1544,1547,1549,1563,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1645,1646,1647,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1765,1766,1774,1775,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1807,1808,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1969,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2036,2037,2042,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2074,2084,2088,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2142,2208,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,8207,64285,64287,64288,64289,64290,64291,64292,64293,64294,64295,64296,64298,64299,64300,64301,64302,64303,64304,64305,64306,64307,64308,64309,64310,64312,64313,64314,64315,64316,64318,64320,64321,64323,64324,64326,64327,64328,64329,64330,64331,64332,64333,64334,64335,64336,64337,64338,64339,64340,64341,64342,64343,64344,64345,64346,64347,64348,64349,64350,64351,64352,64353,64354,64355,64356,64357,64358,64359,64360,64361,64362,64363,64364,64365,64366,64367,64368,64369,64370,64371,64372,64373,64374,64375,64376,64377,64378,64379,64380,64381,64382,64383,64384,64385,64386,64387,64388,64389,64390,64391,64392,64393,64394,64395,64396,64397,64398,64399,64400,64401,64402,64403,64404,64405,64406,64407,64408,64409,64410,64411,64412,64413,64414,64415,64416,64417,64418,64419,64420,64421,64422,64423,64424,64425,64426,64427,64428,64429,64430,64431,64432,64433,64434,64435,64436,64437,64438,64439,64440,64441,64442,64443,64444,64445,64446,64447,64448,64449,64467,64468,64469,64470,64471,64472,64473,64474,64475,64476,64477,64478,64479,64480,64481,64482,64483,64484,64485,64486,64487,64488,64489,64490,64491,64492,64493,64494,64495,64496,64497,64498,64499,64500,64501,64502,64503,64504,64505,64506,64507,64508,64509,64510,64511,64512,64513,64514,64515,64516,64517,64518,64519,64520,64521,64522,64523,64524,64525,64526,64527,64528,64529,64530,64531,64532,64533,64534,64535,64536,64537,64538,64539,64540,64541,64542,64543,64544,64545,64546,64547,64548,64549,64550,64551,64552,64553,64554,64555,64556,64557,64558,64559,64560,64561,64562,64563,64564,64565,64566,64567,64568,64569,64570,64571,64572,64573,64574,64575,64576,64577,64578,64579,64580,64581,64582,64583,64584,64585,64586,64587,64588,64589,64590,64591,64592,64593,64594,64595,64596,64597,64598,64599,64600,64601,64602,64603,64604,64605,64606,64607,64608,64609,64610,64611,64612,64613,64614,64615,64616,64617,64618,64619,64620,64621,64622,64623,64624,64625,64626,64627,64628,64629,64630,64631,64632,64633,64634,64635,64636,64637,64638,64639,64640,64641,64642,64643,64644,64645,64646,64647,64648,64649,64650,64651,64652,64653,64654,64655,64656,64657,64658,64659,64660,64661,64662,64663,64664,64665,64666,64667,64668,64669,64670,64671,64672,64673,64674,64675,64676,64677,64678,64679,64680,64681,64682,64683,64684,64685,64686,64687,64688,64689,64690,64691,64692,64693,64694,64695,64696,64697,64698,64699,64700,64701,64702,64703,64704,64705,64706,64707,64708,64709,64710,64711,64712,64713,64714,64715,64716,64717,64718,64719,64720,64721,64722,64723,64724,64725,64726,64727,64728,64729,64730,64731,64732,64733,64734,64735,64736,64737,64738,64739,64740,64741,64742,64743,64744,64745,64746,64747,64748,64749,64750,64751,64752,64753,64754,64755,64756,64757,64758,64759,64760,64761,64762,64763,64764,64765,64766,64767,64768,64769,64770,64771,64772,64773,64774,64775,64776,64777,64778,64779,64780,64781,64782,64783,64784,64785,64786,64787,64788,64789,64790,64791,64792,64793,64794,64795,64796,64797,64798,64799,64800,64801,64802,64803,64804,64805,64806,64807,64808,64809,64810,64811,64812,64813,64814,64815,64816,64817,64818,64819,64820,64821,64822,64823,64824,64825,64826,64827,64828,64829,64848,64849,64850,64851,64852,64853,64854,64855,64856,64857,64858,64859,64860,64861,64862,64863,64864,64865,64866,64867,64868,64869,64870,64871,64872,64873,64874,64875,64876,64877,64878,64879,64880,64881,64882,64883,64884,64885,64886,64887,64888,64889,64890,64891,64892,64893,64894,64895,64896,64897,64898,64899,64900,64901,64902,64903,64904,64905,64906,64907,64908,64909,64910,64911,64914,64915,64916,64917,64918,64919,64920,64921,64922,64923,64924,64925,64926,64927,64928,64929,64930,64931,64932,64933,64934,64935,64936,64937,64938,64939,64940,64941,64942,64943,64944,64945,64946,64947,64948,64949,64950,64951,64952,64953,64954,64955,64956,64957,64958,64959,64960,64961,64962,64963,64964,64965,64966,64967,65008,65009,65010,65011,65012,65013,65014,65015,65016,65017,65018,65019,65020,65136,65137,65138,65139,65140,65142,65143,65144,65145,65146,65147,65148,65149,65150,65151,65152,65153,65154,65155,65156,65157,65158,65159,65160,65161,65162,65163,65164,65165,65166,65167,65168,65169,65170,65171,65172,65173,65174,65175,65176,65177,65178,65179,65180,65181,65182,65183,65184,65185,65186,65187,65188,65189,65190,65191,65192,65193,65194,65195,65196,65197,65198,65199,65200,65201,65202,65203,65204,65205,65206,65207,65208,65209,65210,65211,65212,65213,65214,65215,65216,65217,65218,65219,65220,65221,65222,65223,65224,65225,65226,65227,65228,65229,65230,65231,65232,65233,65234,65235,65236,65237,65238,65239,65240,65241,65242,65243,65244,65245,65246,65247,65248,65249,65250,65251,65252,65253,65254,65255,65256,65257,65258,65259,65260,65261,65262,65263,65264,65265,65266,65267,65268,65269,65270,65271,65272,65273,65274,65275,65276,67584,67585,67586,67587,67588,67589,67592,67594,67595,67596,67597,67598,67599,67600,67601,67602,67603,67604,67605,67606,67607,67608,67609,67610,67611,67612,67613,67614,67615,67616,67617,67618,67619,67620,67621,67622,67623,67624,67625,67626,67627,67628,67629,67630,67631,67632,67633,67634,67635,67636,67637,67639,67640,67644,67647,67648,67649,67650,67651,67652,67653,67654,67655,67656,67657,67658,67659,67660,67661,67662,67663,67664,67665,67666,67667,67668,67669,67671,67672,67673,67674,67675,67676,67677,67678,67679,67840,67841,67842,67843,67844,67845,67846,67847,67848,67849,67850,67851,67852,67853,67854,67855,67856,67857,67858,67859,67860,67861,67862,67863,67864,67865,67866,67867,67872,67873,67874,67875,67876,67877,67878,67879,67880,67881,67882,67883,67884,67885,67886,67887,67888,67889,67890,67891,67892,67893,67894,67895,67896,67897,67903,67968,67969,67970,67971,67972,67973,67974,67975,67976,67977,67978,67979,67980,67981,67982,67983,67984,67985,67986,67987,67988,67989,67990,67991,67992,67993,67994,67995,67996,67997,67998,67999,68e3,68001,68002,68003,68004,68005,68006,68007,68008,68009,68010,68011,68012,68013,68014,68015,68016,68017,68018,68019,68020,68021,68022,68023,68030,68031,68096,68112,68113,68114,68115,68117,68118,68119,68121,68122,68123,68124,68125,68126,68127,68128,68129,68130,68131,68132,68133,68134,68135,68136,68137,68138,68139,68140,68141,68142,68143,68144,68145,68146,68147,68160,68161,68162,68163,68164,68165,68166,68167,68176,68177,68178,68179,68180,68181,68182,68183,68184,68192,68193,68194,68195,68196,68197,68198,68199,68200,68201,68202,68203,68204,68205,68206,68207,68208,68209,68210,68211,68212,68213,68214,68215,68216,68217,68218,68219,68220,68221,68222,68223,68352,68353,68354,68355,68356,68357,68358,68359,68360,68361,68362,68363,68364,68365,68366,68367,68368,68369,68370,68371,68372,68373,68374,68375,68376,68377,68378,68379,68380,68381,68382,68383,68384,68385,68386,68387,68388,68389,68390,68391,68392,68393,68394,68395,68396,68397,68398,68399,68400,68401,68402,68403,68404,68405,68416,68417,68418,68419,68420,68421,68422,68423,68424,68425,68426,68427,68428,68429,68430,68431,68432,68433,68434,68435,68436,68437,68440,68441,68442,68443,68444,68445,68446,68447,68448,68449,68450,68451,68452,68453,68454,68455,68456,68457,68458,68459,68460,68461,68462,68463,68464,68465,68466,68472,68473,68474,68475,68476,68477,68478,68479,68608,68609,68610,68611,68612,68613,68614,68615,68616,68617,68618,68619,68620,68621,68622,68623,68624,68625,68626,68627,68628,68629,68630,68631,68632,68633,68634,68635,68636,68637,68638,68639,68640,68641,68642,68643,68644,68645,68646,68647,68648,68649,68650,68651,68652,68653,68654,68655,68656,68657,68658,68659,68660,68661,68662,68663,68664,68665,68666,68667,68668,68669,68670,68671,68672,68673,68674,68675,68676,68677,68678,68679,68680,126464,126465,126466,126467,126469,126470,126471,126472,126473,126474,126475,126476,126477,126478,126479,126480,126481,126482,126483,126484,126485,126486,126487,126488,126489,126490,126491,126492,126493,126494,126495,126497,126498,126500,126503,126505,126506,126507,126508,126509,126510,126511,126512,126513,126514,126516,126517,126518,126519,126521,126523,126530,126535,126537,126539,126541,126542,126543,126545,126546,126548,126551,126553,126555,126557,126559,126561,126562,126564,126567,126568,126569,126570,126572,126573,126574,126575,126576,126577,126578,126580,126581,126582,126583,126585,126586,126587,126588,126590,126592,126593,126594,126595,126596,126597,126598,126599,126600,126601,126603,126604,126605,126606,126607,126608,126609,126610,126611,126612,126613,126614,126615,126616,126617,126618,126619,126625,126626,126627,126629,126630,126631,126632,126633,126635,126636,126637,126638,126639,126640,126641,126642,126643,126644,126645,126646,126647,126648,126649,126650,126651,1114109];j.prototype.applyStyles=function(a,b){b=b||this.div;for(var c in a)a.hasOwnProperty(c)&&(b.style[c]=a[c])},j.prototype.formatStyle=function(a,b){return 0===a?0:a+b},k.prototype=o(j.prototype),k.prototype.constructor=k,l.prototype.move=function(a,b){switch(b=void 0!==b?b:this.lineHeight,a){case"+x":this.left+=b,this.right+=b;break;case"-x":this.left-=b,this.right-=b;break;case"+y":this.top+=b,this.bottom+=b;break;case"-y":this.top-=b,this.bottom-=b}},l.prototype.overlaps=function(a){return this.left<a.right&&this.right>a.left&&this.top<a.bottom&&this.bottom>a.top},l.prototype.overlapsAny=function(a){for(var b=0;b<a.length;b++)if(this.overlaps(a[b]))return!0;return!1},l.prototype.within=function(a){return this.top>=a.top&&this.bottom<=a.bottom&&this.left>=a.left&&this.right<=a.right},l.prototype.overlapsOppositeAxis=function(a,b){switch(b){case"+x":return this.left<a.left;case"-x":return this.right>a.right;case"+y":return this.top<a.top;case"-y":return this.bottom>a.bottom}},l.prototype.intersectPercentage=function(a){var b=Math.max(0,Math.min(this.right,a.right)-Math.max(this.left,a.left)),c=Math.max(0,Math.min(this.bottom,a.bottom)-Math.max(this.top,a.top)),d=b*c;return d/(this.height*this.width)},l.prototype.toCSSCompatValues=function(a){return{top:this.top-a.top,bottom:a.bottom-this.bottom,left:this.left-a.left,right:a.right-this.right,height:this.height,width:this.width}},l.getSimpleBoxPosition=function(a){var b=a.div?a.div.offsetHeight:a.tagName?a.offsetHeight:0,c=a.div?a.div.offsetWidth:a.tagName?a.offsetWidth:0,d=a.div?a.div.offsetTop:a.tagName?a.offsetTop:0;a=a.div?a.div.getBoundingClientRect():a.tagName?a.getBoundingClientRect():a;var e={left:a.left,right:a.right,top:a.top||d,height:a.height||b,bottom:a.bottom||d+(a.height||b),width:a.width||c};return e},n.StringDecoder=function(){return{decode:function(a){if(!a)return"";if("string"!=typeof a)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(a))}}},n.convertCueToDOMTree=function(a,b){return a&&b?g(a,b):null};var u=.05,v="sans-serif",w="1.5%";n.processCues=function(a,b,c){function d(a){for(var b=0;b<a.length;b++)if(a[b].hasBeenReset||!a[b].displayState)return!0;return!1}if(!a||!b||!c)return null;for(;c.firstChild;)c.removeChild(c.firstChild);var e=a.document.createElement("div");if(e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.margin=w,c.appendChild(e),d(b)){var f=[],g=l.getSimpleBoxPosition(e),h=Math.round(g.height*u*100)/100,i={font:h+"px "+v};!function(){for(var c,d,h=0;h<b.length;h++)d=b[h],c=new k(a,d,i),e.appendChild(c.div),m(a,c,g,f),d.displayState=c.div,f.push(l.getSimpleBoxPosition(c))}()}else for(var j=0;j<b.length;j++)e.appendChild(b[j].displayState)},n.Parser=function(a,b,c){c||(c=b,b={}),b||(b={}),this.window=a,this.vttjs=b,this.state="INITIAL",this.buffer="",this.decoder=c||new TextDecoder("utf8"),this.regionList=[]},n.Parser.prototype={reportOrThrowError:function(a){if(!(a instanceof b))throw a;this.onparsingerror&&this.onparsingerror(a)},parse:function(a){function c(){for(var a=i.buffer,b=0;b<a.length&&"\r"!==a[b]&&"\n"!==a[b];)++b;var c=a.substr(0,b);return"\r"===a[b]&&++b,"\n"===a[b]&&++b,i.buffer=a.substr(b),c}function g(a){var b=new d;if(e(a,function(a,c){switch(a){case"id":b.set(a,c);break;case"width":b.percent(a,c);break;case"lines":b.integer(a,c);break;case"regionanchor":case"viewportanchor":var e=c.split(",");if(2!==e.length)break;var f=new d;if(f.percent("x",e[0]),f.percent("y",e[1]),!f.has("x")||!f.has("y"))break;b.set(a+"X",f.get("x")),b.set(a+"Y",f.get("y"));break;case"scroll":b.alt(a,c,["up"])}},/=/,/\s/),b.has("id")){var c=new(i.vttjs.VTTRegion||i.window.VTTRegion);c.width=b.get("width",100),c.lines=b.get("lines",3),c.regionAnchorX=b.get("regionanchorX",0),c.regionAnchorY=b.get("regionanchorY",100),c.viewportAnchorX=b.get("viewportanchorX",0),c.viewportAnchorY=b.get("viewportanchorY",100),c.scroll=b.get("scroll",""),i.onregion&&i.onregion(c),i.regionList.push({id:b.get("id"),region:c})}}function h(a){e(a,function(a,b){switch(a){case"Region":g(b)}},/:/)}var i=this;a&&(i.buffer+=i.decoder.decode(a,{stream:!0}));try{var j;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;j=c();var k=j.match(/^WEBVTT([ \t].*)?$/);if(!k||!k[0])throw new b(b.Errors.BadSignature);i.state="HEADER"}for(var l=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(l?l=!1:j=c(),i.state){case"HEADER":/:/.test(j)?h(j):j||(i.state="ID");continue;case"NOTE":j||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(j)){i.state="NOTE";break}if(!j)continue;if(i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0,0,""),i.state="CUE",-1===j.indexOf("-->")){i.cue.id=j;continue}case"CUE":try{f(j,i.cue,i.regionList)}catch(m){i.reportOrThrowError(m),i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var n=-1!==j.indexOf("-->");if(!j||n&&(l=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=j;continue;case"BADCUE":j||(i.state="ID");continue}}}catch(m){i.reportOrThrowError(m),"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var a=this;try{if(a.buffer+=a.decoder.decode(),(a.cue||"HEADER"===a.state)&&(a.buffer+="\n\n",a.parse()),"INITIAL"===a.state)throw new b(b.Errors.BadSignature)}catch(c){a.reportOrThrowError(c)}return a.onflush&&a.onflush(),this}},a.WebVTT=n}(this,this.vttjs||{});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(8);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(10);
	var parser = __webpack_require__(12);
	var Manager = __webpack_require__(20);
	var debug = __webpack_require__(9)('socket.io-client');

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

	exports.Manager = __webpack_require__(20);
	exports.Socket = __webpack_require__(52);


/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */

	var parseuri = __webpack_require__(11);
	var debug = __webpack_require__(9)('socket.io-client:url');

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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var debug = __webpack_require__(9)('socket.io-parser');
	var json = __webpack_require__(14);
	var isArray = __webpack_require__(16);
	var Emitter = __webpack_require__(13);
	var binary = __webpack_require__(17);
	var isBuf = __webpack_require__(18);

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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */
	;(function (window) {
	  // Convenience aliases.
	  var getClass = {}.toString, isProperty, forEach, undef;

	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(15);

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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

	/**
	 * Module requirements
	 */

	var isArray = __webpack_require__(16);
	var isBuf = __webpack_require__(18);

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
/* 18 */
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
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(10);
	var eio = __webpack_require__(21);
	var Socket = __webpack_require__(52);
	var Emitter = __webpack_require__(13);
	var parser = __webpack_require__(12);
	var on = __webpack_require__(54);
	var bind = __webpack_require__(55);
	var object = __webpack_require__(58);
	var debug = __webpack_require__(9)('socket.io-client:manager');
	var indexOf = __webpack_require__(49);
	var Backoff = __webpack_require__(59);

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports =  __webpack_require__(22);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(23);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(32);


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(24);
	var Emitter = __webpack_require__(13);
	var debug = __webpack_require__(43)('engine.io-client:socket');
	var index = __webpack_require__(49);
	var parser = __webpack_require__(32);
	var parseuri = __webpack_require__(50);
	var parsejson = __webpack_require__(51);
	var parseqs = __webpack_require__(42);

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
	Socket.Transport = __webpack_require__(31);
	Socket.transports = __webpack_require__(24);
	Socket.parser = __webpack_require__(32);

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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(25);
	var XHR = __webpack_require__(28);
	var JSONP = __webpack_require__(46);
	var websocket = __webpack_require__(47);

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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	var hasCORS = __webpack_require__(26);

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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var global = __webpack_require__(27);

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Returns `this`. Execute this without a "context" (i.e. without it being
	 * attached to an object of the left-hand side), and `this` points to the
	 * "global" scope of the current JS execution.
	 */

	module.exports = (function () { return this; })();


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(25);
	var Polling = __webpack_require__(29);
	var Emitter = __webpack_require__(13);
	var inherit = __webpack_require__(30);
	var debug = __webpack_require__(43)('engine.io-client:polling-xhr');

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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(31);
	var parseqs = __webpack_require__(42);
	var parser = __webpack_require__(32);
	var inherit = __webpack_require__(30);
	var debug = __webpack_require__(43)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = (function() {
	  var XMLHttpRequest = __webpack_require__(25);
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(32);
	var Emitter = __webpack_require__(13);

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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var keys = __webpack_require__(33);
	var hasBinary = __webpack_require__(34);
	var sliceBuffer = __webpack_require__(36);
	var base64encoder = __webpack_require__(37);
	var after = __webpack_require__(38);
	var utf8 = __webpack_require__(39);

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

	var Blob = __webpack_require__(41);

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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(35);

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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)(module), (function() { return this; }())))

/***/ },
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(44);
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
/* 44 */
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
	exports.humanize = __webpack_require__(45);

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
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(29);
	var inherit = __webpack_require__(30);

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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(31);
	var parser = __webpack_require__(32);
	var parseqs = __webpack_require__(42);
	var inherit = __webpack_require__(30);
	var debug = __webpack_require__(43)('engine.io-client:websocket');

	/**
	 * `ws` exposes a WebSocket-compatible interface in
	 * Node, or the `WebSocket` or `MozWebSocket` globals
	 * in the browser.
	 */

	var WebSocket = __webpack_require__(48);

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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(12);
	var Emitter = __webpack_require__(13);
	var toArray = __webpack_require__(53);
	var on = __webpack_require__(54);
	var bind = __webpack_require__(55);
	var debug = __webpack_require__(9)('socket.io-client:socket');
	var hasBin = __webpack_require__(56);

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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(57);

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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(69)(content, {});
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(65)();
	exports.push([module.id, "/*!\nVideo.js Default Styles (http://videojs.com)\nVersion GENERATED_AT_BUILD\nCreate your own skin at http://designer.videojs.com\n*/\n/* SKIN\n================================================================================\nThe main class name for all skin-specific styles. To make your own skin,\nreplace all occurrences of 'vjs-default-skin' with a new name. Then add your new\nskin name to your video tag instead of the default skin.\ne.g. <video class=\"video-js my-skin-name\">\n*/\n.vjs-default-skin {\n  color: #cccccc;\n}\n/* Custom Icon Font\n--------------------------------------------------------------------------------\nThe control icons are from a custom font. Each icon corresponds to a character\n(e.g. \"\\e001\"). Font icons allow for easy scaling and coloring of icons.\n*/\n@font-face {\n  font-family: 'VideoJS';\n  src: url("+__webpack_require__(66)+");\n  src: url("+__webpack_require__(66)+"?#iefix) format('embedded-opentype'), url("+__webpack_require__(64)+") format('woff'), url("+__webpack_require__(67)+") format('truetype'), url("+__webpack_require__(68)+"#icomoon) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Base UI Component Classes\n--------------------------------------------------------------------------------\n*/\n/* Slider - used for Volume bar and Seek bar */\n.vjs-default-skin .vjs-slider {\n  /* Replace browser focus highlight with handle highlight */\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  /* background-color-with-alpha */\n  background-color: #333333;\n  background-color: rgba(51, 51, 51, 0.9);\n}\n.vjs-default-skin .vjs-slider:focus {\n  /* box-shadow */\n  box-shadow: 0 0 2em #ffffff;\n}\n.vjs-default-skin .vjs-slider-handle {\n  position: absolute;\n  /* Needed for IE6 */\n  left: 0;\n  top: 0;\n}\n.vjs-default-skin .vjs-slider-handle:before {\n  content: \"\\e009\";\n  font-family: VideoJS;\n  font-size: 1em;\n  line-height: 1;\n  text-align: center;\n  text-shadow: 0em 0em 1em #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* Rotate the square icon to make a diamond */\n  /* transform */\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n/* Control Bar\n--------------------------------------------------------------------------------\nThe default control bar that is a container for most of the controls.\n*/\n.vjs-default-skin .vjs-control-bar {\n  /* Start hidden */\n  display: none;\n  position: absolute;\n  /* Place control bar at the bottom of the player box/video.\n     If you want more margin below the control bar, add more height. */\n  bottom: 0;\n  /* Use left/right to stretch to 100% width of player div */\n  left: 0;\n  right: 0;\n  /* Height includes any margin you want above or below control items */\n  height: 3.0em;\n  /* background-color-with-alpha */\n  background-color: #07141e;\n  background-color: rgba(7, 20, 30, 0.7);\n}\n/* Show the control bar only once the video has started playing */\n.vjs-default-skin.vjs-has-started .vjs-control-bar {\n  display: block;\n  /* Visibility needed to make sure things hide in older browsers too. */\n  visibility: visible;\n  opacity: 1;\n  /* transition */\n  -webkit-transition: visibility 0.1s, opacity 0.1s;\n  transition: visibility 0.1s, opacity 0.1s;\n}\n/* Hide the control bar when the video is playing and the user is inactive  */\n.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  /* transition */\n  -webkit-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s;\n}\n.vjs-default-skin.vjs-controls-disabled .vjs-control-bar {\n  display: none;\n}\n.vjs-default-skin.vjs-using-native-controls .vjs-control-bar {\n  display: none;\n}\n/* The control bar shouldn't show after an error */\n.vjs-default-skin.vjs-error .vjs-control-bar {\n  display: none;\n}\n/* Don't hide the control bar if it's audio */\n.vjs-audio.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible;\n}\n/* IE8 is flakey with fonts, and you have to change the actual content to force\nfonts to show/hide properly.\n  - \"\\9\" IE8 hack didn't work for this\n  - Found in XP IE8 from http://modern.ie. Does not show up in \"IE8 mode\" in IE9\n*/\n@media \\0screen {\n  .vjs-default-skin.vjs-user-inactive.vjs-playing .vjs-control-bar :before {\n    content: \"\";\n  }\n}\n/* General styles for individual controls. */\n.vjs-default-skin .vjs-control {\n  outline: none;\n  position: relative;\n  float: left;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 3.0em;\n  width: 4em;\n}\n/* Font button icons */\n.vjs-default-skin .vjs-control:before {\n  font-family: VideoJS;\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n/* Replacement for focus outline */\n.vjs-default-skin .vjs-control:focus:before,\n.vjs-default-skin .vjs-control:hover:before {\n  text-shadow: 0em 0em 1em #ffffff;\n}\n.vjs-default-skin .vjs-control:focus {\n  /*  outline: 0; */\n  /* keyboard-only users cannot see the focus on several of the UI elements when\n  this is set to 0 */\n}\n/* Hide control text visually, but have it available for screenreaders */\n.vjs-default-skin .vjs-control-text {\n  /* hide-visually */\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n/* Play/Pause\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-play-control {\n  width: 5em;\n  cursor: pointer;\n}\n.vjs-default-skin .vjs-play-control:before {\n  content: \"\\e001\";\n}\n.vjs-default-skin.vjs-playing .vjs-play-control:before {\n  content: \"\\e002\";\n}\n/* Playback toggle\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-playback-rate .vjs-playback-rate-value {\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n.vjs-default-skin .vjs-playback-rate.vjs-menu-button .vjs-menu .vjs-menu-content {\n  width: 4em;\n  left: -2em;\n  list-style: none;\n}\n/* Volume/Mute\n-------------------------------------------------------------------------------- */\n.vjs-default-skin .vjs-mute-control,\n.vjs-default-skin .vjs-volume-menu-button {\n  cursor: pointer;\n  float: right;\n}\n.vjs-default-skin .vjs-mute-control:before,\n.vjs-default-skin .vjs-volume-menu-button:before {\n  content: \"\\e006\";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-0:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-0:before {\n  content: \"\\e003\";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-1:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-1:before {\n  content: \"\\e004\";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-2:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-2:before {\n  content: \"\\e005\";\n}\n.vjs-default-skin .vjs-volume-control {\n  width: 5em;\n  float: right;\n}\n.vjs-default-skin .vjs-volume-bar {\n  width: 5em;\n  height: 0.6em;\n  margin: 1.1em auto 0;\n}\n.vjs-default-skin .vjs-volume-level {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0.5em;\n  /* assuming volume starts at 1.0 */\n  width: 100%;\n  background: #66a8cc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat;\n}\n.vjs-default-skin .vjs-volume-bar .vjs-volume-handle {\n  width: 0.5em;\n  height: 0.5em;\n  /* Assumes volume starts at 1.0. If you change the size of the\n     handle relative to the volume bar, you'll need to update this value\n     too. */\n  left: 4.5em;\n}\n.vjs-default-skin .vjs-volume-handle:before {\n  font-size: 0.9em;\n  top: -0.2em;\n  left: -0.2em;\n  width: 1em;\n  height: 1em;\n}\n/* The volume menu button is like menu buttons (captions/subtitles) but works\n    a little differently. It needs to be possible to tab to the volume slider\n    without hitting space bar on the menu button. To do this we're not using\n    display:none to hide the slider menu by default, and instead setting the\n    width and height to zero. */\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu {\n  display: block;\n  width: 0;\n  height: 0;\n  border-top-color: transparent;\n}\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu .vjs-menu-content {\n  height: 0;\n  width: 0;\n}\n.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu,\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing {\n  border-top-color: rgba(7, 40, 50, 0.5);\n  /* Same as ul background */\n}\n.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content,\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing .vjs-menu-content {\n  height: 2.9em;\n  width: 10em;\n}\n/* Progress\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-progress-control {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: auto;\n  font-size: 0.3em;\n  height: 1em;\n  /* Set above the rest of the controls. */\n  top: -1em;\n  /* Shrink the bar slower than it grows. */\n  /* transition */\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n/* On hover, make the progress bar grow to something that's more clickable.\n    This simply changes the overall font for the progress bar, and this\n    updates both the em-based widths and heights, as wells as the icon font */\n.vjs-default-skin:hover .vjs-progress-control {\n  font-size: .9em;\n  /* Even though we're not changing the top/height, we need to include them in\n      the transition so they're handled correctly. */\n  /* transition */\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n/* Box containing play and load progresses. Also acts as seek scrubber. */\n.vjs-default-skin .vjs-progress-holder {\n  height: 100%;\n}\n/* Progress Bars */\n.vjs-default-skin .vjs-progress-holder .vjs-play-progress,\n.vjs-default-skin .vjs-progress-holder .vjs-load-progress,\n.vjs-default-skin .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  /* updated by javascript during playback */\n  width: 0;\n  /* Needed for IE6 */\n  left: 0;\n  top: 0;\n}\n.vjs-default-skin .vjs-play-progress {\n  /*\n    Using a data URI to create the white diagonal lines with a transparent\n      background. Surprisingly works in IE8.\n      Created using http://www.patternify.com\n    Changing the first color value will change the bar color.\n    Also using a paralax effect to make the lines move backwards.\n      The -50% left position makes that happen.\n  */\n  background: #66a8cc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat;\n}\n.vjs-default-skin .vjs-load-progress {\n  background: #646464 /* IE8- Fallback */;\n  background: rgba(255, 255, 255, 0.2);\n}\n/* there are child elements of the load progress bar that represent the\n   specific time ranges that have been buffered */\n.vjs-default-skin .vjs-load-progress div {\n  background: #787878 /* IE8- Fallback */;\n  background: rgba(255, 255, 255, 0.1);\n}\n.vjs-default-skin .vjs-seek-handle {\n  width: 1.5em;\n  height: 100%;\n}\n.vjs-default-skin .vjs-seek-handle:before {\n  padding-top: 0.1em /* Minor adjustment */;\n}\n/* Live Mode\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin.vjs-live .vjs-time-controls,\n.vjs-default-skin.vjs-live .vjs-time-divider,\n.vjs-default-skin.vjs-live .vjs-progress-control {\n  display: none;\n}\n.vjs-default-skin.vjs-live .vjs-live-display {\n  display: block;\n}\n/* Live Display\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-live-display {\n  display: none;\n  font-size: 1em;\n  line-height: 3em;\n}\n/* Time Display\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-time-controls {\n  font-size: 1em;\n  /* Align vertically by making the line height the same as the control bar */\n  line-height: 3em;\n}\n.vjs-default-skin .vjs-current-time {\n  float: left;\n}\n.vjs-default-skin .vjs-duration {\n  float: left;\n}\n/* Remaining time is in the HTML, but not included in default design */\n.vjs-default-skin .vjs-remaining-time {\n  display: none;\n  float: left;\n}\n.vjs-time-divider {\n  float: left;\n  line-height: 3em;\n}\n/* Fullscreen\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-fullscreen-control {\n  width: 3.8em;\n  cursor: pointer;\n  float: right;\n}\n.vjs-default-skin .vjs-fullscreen-control:before {\n  content: \"\\e000\";\n}\n/* Switch to the exit icon when the player is in fullscreen */\n.vjs-default-skin.vjs-fullscreen .vjs-fullscreen-control:before {\n  content: \"\\e00b\";\n}\n/* Big Play Button (play button at start)\n--------------------------------------------------------------------------------\nPositioning of the play button in the center or other corners can be done more\neasily in the skin designer. http://designer.videojs.com/\n*/\n.vjs-default-skin .vjs-big-play-button {\n  left: 0.5em;\n  top: 0.5em;\n  font-size: 3em;\n  display: block;\n  z-index: 2;\n  position: absolute;\n  width: 4em;\n  height: 2.6em;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  opacity: 1;\n  /* Need a slightly gray bg so it can be seen on black backgrounds */\n  /* background-color-with-alpha */\n  background-color: #07141e;\n  background-color: rgba(7, 20, 30, 0.7);\n  border: 0.1em solid #3b4249;\n  /* border-radius */\n  border-radius: 0.8em;\n  /* box-shadow */\n  box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.25);\n  /* transition */\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n/* Optionally center */\n.vjs-default-skin.vjs-big-play-centered .vjs-big-play-button {\n  /* Center it horizontally */\n  left: 50%;\n  margin-left: -2.1em;\n  /* Center it vertically */\n  top: 50%;\n  margin-top: -1.4em;\n}\n/* Hide if controls are disabled */\n.vjs-default-skin.vjs-controls-disabled .vjs-big-play-button {\n  display: none;\n}\n/* Hide when video starts playing */\n.vjs-default-skin.vjs-has-started .vjs-big-play-button {\n  display: none;\n}\n/* Hide on mobile devices. Remove when we stop using native controls\n    by default on mobile  */\n.vjs-default-skin.vjs-using-native-controls .vjs-big-play-button {\n  display: none;\n}\n.vjs-default-skin:hover .vjs-big-play-button,\n.vjs-default-skin .vjs-big-play-button:focus {\n  outline: 0;\n  border-color: #fff;\n  /* IE8 needs a non-glow hover state */\n  background-color: #505050;\n  background-color: rgba(50, 50, 50, 0.75);\n  /* box-shadow */\n  box-shadow: 0 0 3em #ffffff;\n  /* transition */\n  -webkit-transition: all 0s;\n  transition: all 0s;\n}\n.vjs-default-skin .vjs-big-play-button:before {\n  content: \"\\e001\";\n  font-family: VideoJS;\n  /* In order to center the play icon vertically we need to set the line height\n     to the same as the button height */\n  line-height: 2.6em;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center /* Needed for IE8 */;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vjs-error .vjs-big-play-button {\n  display: none;\n}\n/* Error Display\n--------------------------------------------------------------------------------\n*/\n.vjs-error-display {\n  display: none;\n}\n.vjs-error .vjs-error-display {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.vjs-error .vjs-error-display:before {\n  content: 'X';\n  font-family: Arial;\n  font-size: 4em;\n  color: #666666;\n  /* In order to center the play icon vertically we need to set the line height\n     to the same as the button height */\n  line-height: 1;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center /* Needed for IE8 */;\n  vertical-align: middle;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -0.5em;\n  width: 100%;\n}\n.vjs-error-display div {\n  position: absolute;\n  bottom: 1em;\n  right: 0;\n  left: 0;\n  font-size: 1.4em;\n  text-align: center;\n  padding: 3px;\n  background: #000000;\n  background: rgba(0, 0, 0, 0.5);\n}\n.vjs-error-display a,\n.vjs-error-display a:visited {\n  color: #F4A460;\n}\n/* Loading Spinner\n--------------------------------------------------------------------------------\n*/\n.vjs-loading-spinner {\n  /* Should be hidden by default */\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 4em;\n  line-height: 1;\n  width: 1em;\n  height: 1em;\n  margin-left: -0.5em;\n  margin-top: -0.5em;\n  opacity: 0.75;\n}\n/* Show the spinner when waiting for data and seeking to a new time */\n.vjs-waiting .vjs-loading-spinner,\n.vjs-seeking .vjs-loading-spinner {\n  display: block;\n  /* only animate when showing because it can be processor heavy */\n  /* animation */\n  -webkit-animation: spin 1.5s infinite linear;\n  animation: spin 1.5s infinite linear;\n}\n/* Errors are unrecoverable without user interaction so hide the spinner */\n.vjs-error .vjs-loading-spinner {\n  display: none;\n  /* ensure animation doesn't continue while hidden */\n  /* animation */\n  -webkit-animation: none;\n  animation: none;\n}\n.vjs-default-skin .vjs-loading-spinner:before {\n  content: \"\\e01e\";\n  font-family: VideoJS;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  text-shadow: 0em 0em 0.1em #000;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n/* Menu Buttons (Captions/Subtitles/etc.)\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-menu-button {\n  float: right;\n  cursor: pointer;\n}\n.vjs-default-skin .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0em;\n  /* (Width of vjs-menu - width of button) / 2 */\n  width: 0em;\n  height: 0em;\n  margin-bottom: 3em;\n  border-left: 2em solid transparent;\n  border-right: 2em solid transparent;\n  border-top: 1.55em solid #000000;\n  /* Same width top as ul bottom */\n  border-top-color: rgba(7, 40, 50, 0.5);\n  /* Same as ul background */\n}\n/* Button Pop-up Menu */\n.vjs-default-skin .vjs-menu-button .vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  width: 10em;\n  bottom: 1.5em;\n  /* Same bottom as vjs-menu border-top */\n  max-height: 15em;\n  overflow: auto;\n  left: -5em;\n  /* Width of menu - width of button / 2 */\n  /* background-color-with-alpha */\n  background-color: #07141e;\n  background-color: rgba(7, 20, 30, 0.7);\n  /* box-shadow */\n  box-shadow: -0.2em -0.2em 0.3em rgba(255, 255, 255, 0.2);\n}\n.vjs-default-skin .vjs-menu-button:hover .vjs-control-content .vjs-menu,\n.vjs-default-skin .vjs-control-content .vjs-menu.vjs-lock-showing {\n  display: block;\n}\n/* prevent menus from opening while scrubbing (FF, IE) */\n.vjs-default-skin.vjs-scrubbing .vjs-menu-button:hover .vjs-control-content .vjs-menu {\n  display: none;\n}\n.vjs-default-skin .vjs-menu-button ul li {\n  list-style: none;\n  margin: 0;\n  padding: 0.3em 0 0.3em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase;\n}\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected {\n  background-color: #000;\n}\n.vjs-default-skin .vjs-menu-button ul li:focus,\n.vjs-default-skin .vjs-menu-button ul li:hover,\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected:focus,\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected:hover {\n  outline: 0;\n  color: #111;\n  /* background-color-with-alpha */\n  background-color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.75);\n  /* box-shadow */\n  box-shadow: 0 0 1em #ffffff;\n}\n.vjs-default-skin .vjs-menu-button ul li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default;\n}\n/* Subtitles Button */\n.vjs-default-skin .vjs-subtitles-button:before {\n  content: \"\\e00c\";\n}\n/* Captions Button */\n.vjs-default-skin .vjs-captions-button:before {\n  content: \"\\e008\";\n}\n/* Chapters Button */\n.vjs-default-skin .vjs-chapters-button:before {\n  content: \"\\e00c\";\n}\n.vjs-default-skin .vjs-chapters-button.vjs-menu-button .vjs-menu .vjs-menu-content {\n  width: 24em;\n  left: -12em;\n}\n/* Replacement for focus outline */\n.vjs-default-skin .vjs-captions-button:focus .vjs-control-content:before,\n.vjs-default-skin .vjs-captions-button:hover .vjs-control-content:before {\n  /* box-shadow */\n  box-shadow: 0 0 1em #ffffff;\n}\n/*\nREQUIRED STYLES (be careful overriding)\n================================================================================\nWhen loading the player, the video tag is replaced with a DIV,\nthat will hold the video tag or object tag for other playback methods.\nThe div contains the video playback element (Flash or HTML5) and controls,\nand sets the width and height of the video.\n\n** If you want to add some kind of border/padding (e.g. a frame), or special\npositioning, use another containing element. Otherwise you risk messing up\ncontrol positioning and full window mode. **\n*/\n.video-js {\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  /* Start with 10px for base font size so other dimensions can be em based and\n     easily calculable. */\n  font-size: 10px;\n  /* Allow poster to be vertically aligned. */\n  vertical-align: middle;\n  /*  display: table-cell; */\n  /*This works in Safari but not Firefox.*/\n  /* Provide some basic defaults for fonts */\n  font-weight: normal;\n  font-style: normal;\n  /* Avoiding helvetica: issue #376 */\n  font-family: Arial, sans-serif;\n  /* Turn off user selection (text highlighting) by default.\n     The majority of player components will not be text blocks.\n     Text areas will need to turn user selection back on. */\n  /* user-select */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Playback technology elements expand to the width/height of the containing div\n    <video> or <object> */\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/* Fix for Firefox 9 fullscreen (only if it is enabled). Not needed when\n   checking fullScreenEnabled. */\n.video-js:-moz-full-screen {\n  position: absolute;\n}\n/* Fullscreen Styles */\nbody.vjs-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  /* Fix for IE6 full-window. http://www.cssplay.co.uk/layouts/fixed.html */\n  overflow-y: auto;\n}\n.video-js.vjs-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100% !important;\n  height: 100% !important;\n  /* IE6 full-window (underscore hack) */\n  _position: absolute;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none;\n}\n/* Poster Styles */\n.vjs-poster {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vjs-poster img {\n  display: block;\n  margin: 0 auto;\n  max-height: 100%;\n  padding: 0;\n  width: 100%;\n}\n/* Hide the poster after the video has started playing */\n.video-js.vjs-has-started .vjs-poster {\n  display: none;\n}\n/* Don't hide the poster if we're playing audio */\n.video-js.vjs-audio.vjs-has-started .vjs-poster {\n  display: block;\n}\n/* Hide the poster when controls are disabled because it's clickable\n    and the native poster can take over */\n.video-js.vjs-controls-disabled .vjs-poster {\n  display: none;\n}\n/* Hide the poster when native controls are used otherwise it covers them */\n.video-js.vjs-using-native-controls .vjs-poster {\n  display: none;\n}\n/* Text Track Styles */\n/* Overall track holder for both captions and subtitles */\n.video-js .vjs-text-track-display {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 3em;\n  right: 0;\n  pointer-events: none;\n}\n/* Captions Settings Dialog */\n.vjs-caption-settings {\n  position: relative;\n  top: 1em;\n  background-color: #000;\n  opacity: 0.75;\n  color: #FFF;\n  margin: 0 auto;\n  padding: 0.5em;\n  height: 15em;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  width: 40em;\n}\n.vjs-caption-settings .vjs-tracksettings {\n  top: 0;\n  bottom: 2em;\n  left: 0;\n  right: 0;\n  position: absolute;\n  overflow: auto;\n}\n.vjs-caption-settings .vjs-tracksettings-colors,\n.vjs-caption-settings .vjs-tracksettings-font {\n  float: left;\n}\n.vjs-caption-settings .vjs-tracksettings-colors:after,\n.vjs-caption-settings .vjs-tracksettings-font:after,\n.vjs-caption-settings .vjs-tracksettings-controls:after {\n  clear: both;\n}\n.vjs-caption-settings .vjs-tracksettings-controls {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n}\n.vjs-caption-settings .vjs-tracksetting {\n  margin: 5px;\n  padding: 3px;\n  min-height: 40px;\n}\n.vjs-caption-settings .vjs-tracksetting label {\n  display: block;\n  width: 100px;\n  margin-bottom: 5px;\n}\n.vjs-caption-settings .vjs-tracksetting span {\n  display: inline;\n  margin-left: 5px;\n}\n.vjs-caption-settings .vjs-tracksetting > div {\n  margin-bottom: 5px;\n  min-height: 20px;\n}\n.vjs-caption-settings .vjs-tracksetting > div:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  min-height: 0;\n}\n.vjs-caption-settings label > input {\n  margin-right: 10px;\n}\n.vjs-caption-settings input[type=\"button\"] {\n  width: 40px;\n  height: 40px;\n}\n/* Hide disabled or unsupported controls */\n.vjs-hidden {\n  display: none !important;\n}\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1;\n  visibility: visible;\n}\n/*  In IE8 w/ no JavaScript (no HTML5 shim), the video tag doesn't register.\n    The .video-js classname on the video tag also isn't considered.\n    This optional paragraph inside the video tag can provide a message to users\n    about what's required to play video. */\n.vjs-no-js {\n  padding: 2em;\n  color: #ccc;\n  background-color: #333;\n  font-size: 1.8em;\n  font-family: Arial, sans-serif;\n  text-align: center;\n  width: 30em;\n  height: 15em;\n  margin: 0 auto;\n}\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #F4A460;\n}\n/* -----------------------------------------------------------------------------\nThe original source of this file lives at\nhttps://github.com/videojs/video.js/blob/master/src/css/video-js.less */\n.player {\n  background-color: red;\n  border: 2px solid red;\n}\n", ""]);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:application/font-woff;base64,d09GRk9UVE8AAAnMAAsAAAAADWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABCAAABokAAAgsXGkfVUZGVE0AAAeUAAAAHAAAABxxb8IrR0RFRgAAB7AAAAAiAAAAJgAnADxPUy8yAAAH1AAAAEMAAABgVDdTq2NtYXAAAAgYAAAAVgAAAWr6rrHraGVhZAAACHAAAAAsAAAANgaEyq9oaGVhAAAInAAAABwAAAAkCSAFLWhtdHgAAAi4AAAAJwAAAEgr1gKfbWF4cAAACOAAAAAGAAAABgAWUABuYW1lAAAI6AAAANUAAAGk8SNjJXBvc3QAAAnAAAAADAAAACAAAwAAeJxlVX9MW9cVvhf88K0Bt2txSTfLxNsSqkZaITjdgrZ2KaZiWYaI47lkCYTgphB+mFB+xFgZJDamqa+TAH4EkoDVNKRA3eF2UEqaJqHENKiVUAJI2zrSLkWZNO2P/dPqPnyg2r2A00zTue87737nfee943vuNUYqFcIYk8P2muqaGgfCcQijXCUDKZlY2RqnZMUrG1Q0KZ4mqQwa9Eij7VlKH9wkqWmuXiqOWiU9TnhUj9Bjepz5Az1K0qv3Po6eEqnikYQISkaPo1SkR0a0GW1BGWgbykYvIDP6DcpHe1AhKkKl6BC3KlTXkNGQ2bA1oyE3I2MVMgVsFZAlwCRgm4DnBPxcwC8EbBewQ8CLAnIEmAXkcshchZcacp/jCX+WsV5srGaE8Ov4JH4D+zDFfnwKn8ZncDvuwJ04gGXchc/ibtyDz+Hz+AJ6MlaVGmnQU+hptINXUYiq0S30Bb6Jb8d1xL0Z96/4syqN6j+SVVKoVpgia6Ny1KrbqAHTikln1GiZdWlet5SynLLCL0nLUviUza/IMJ+gWJfk2L1W2RSVdD/WaJUrrEb3Ew08vfSMmC69wlJ0P9XAC/98iIzOR7Xv61poc7tbdgbpUDC4uHiVEcoe42MfI1mLa2wwOESDTvKtcQo2UniGj92w0Wh0u5vbWiiB5+//X2ZFfDzML8ts9VJkSbu68CqO353XR99K0KvuKhd0PpbX+kXJZGv3sc4W+eAQ7D0LTRScFOzHS6tb3Mda3S2lVu8vT0IeOQ15Hb8a3SM3n/d2e0Yrmf0Ec77Bmk6xvV0fhLoD5zs6e8Zudv7Nz/LI8t8/0h1nxl9/CT/kn/foFoiHXHhpEeLZpjRe3sI/upmRgCGh7eUG+35KXmye++u3Q59cTxungxVnLESJPtnCjDu+hB9xtXZd/fX36p41tZeri/5HPVDRbiFrS7Mkr3DjyyEm5ohldjYSmZ21RMxmi8VsYP2gWmXvTEVm7+yeyjVbducamBn6deWDjuHhwcHhYcdgebnDUW4AlWAHHGHBhh0D5WU1NWUGEBmoOva0gVL194p+FouFB9Zi4ZqBsnIH11UqozxkGyuZmBgbmxChiZIxm62kxGbI4u+xhypHRkKhkZHKkN1eWWk3aBWrksLbMFqv1Is25AubomNh1gT54OImfDjtCD1yqvY0xHFLPQpPnCRvq2//6dNpeod2+WRfF5C/7BBtlUqYizWxfBY2rHdImCdo4igSNvG03LNVz2ecTwNZxYxMDWowcnvgmZqznBc+jU0tT+mytwMuBjUVA49n392+UMwwZWo+xhm+u0Bm8iiVIBVSKVQw7j7f9VX5fXqffjX8+WcslaVSVgHckZkZ6W72OODVTOpiwNuziXbpGybrimmp01FNlnNYleQP+ANUprIv4AsQRTCD1aPOcUoW5+YWF3PmsrJycrLSqNvv8Xu4Aqokx1BpsJgSwWfN5SzybhkNDg5xLY/5PD4PdRPBx/QGvv8Vq843c2zmyK3a6Vdu7hvff8USzr+Uf2nn2Z2+nb7f/rGgtqD294cOFJEDReXW+oL6guO7/NzO/a7f0m957+UPS8ZLJioiDZH66RPTfjLtv3Vu8tLkpWvDox9+MBa6fnGy5115+EyYnEkYHhwIp7WrN8Hzunrb4X0H7Qftf6iyNdoaLW6L3+Lf01N4sfCt/e8eGjk0Un316HVy9Ib7E/+kf7J74uK1ix+Hxv/83vvhK4MfB68FJ+Qbvgnf9ZarjeSjxrGq4VfDr759ILivb3+g0LeXUErbJFrRXxM66S0/cfhYJVnvghCFRqhrhaEO1sZ2MRtrpKJT8qEIaKxVH7TEd7wlQpQ1srpONuSFNtgFNuAC3oz5rIjRWD/HeiqN/5LsGx1lVkjvl7x9rb2eXnKPJYOe6SF5m+QKuALODlLHNoOV1sFmyel1eVweAsn3QA/6e5AseVytLm8TgfTXKFhZ+mtSR1OnS3YREyTzHHqm/Vq64On19HlJP6QzK+1n6VJfR2/gQoAwrYnxF5lYsiT3dvZ29JFl3KozWyJrB0LEsnogiG9MoTqapOF/hk8gCeMNGQWeG3TZBCZmAitYt/ybWXkFfCYlijlnTcsmShURN4mYlHj58ptuWkZWbqtpWaO79jIBL/OCeCiFmaiU+PBBv7BA2YbshYfPd6aBRF4fcEfWj/bEZtrS7u5y9tF3gn0P7ZI1oi/4Du1zxnYLiW0X94mWVe1/AVE82XMAAAAAAAABAAAAANDR138AAAAAz5mnxQAAAADRBELmeJxjYGRgYOABYjEGOQYmBkYgFAViFqAIExAzQjAACdkAZAAAeJxjYGb+xTiBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKIHEC0lxTGBwYGJ8xMB/4f4ABSAJ5QDVwBQpAyAgAobYMfwB4nGNgYGBmgGAZBkYGEEgB8hjBfBYGDyDNx8DBwMTABhRTeMD3QP4Zw/+///+DVSo8YHggB+Uz/n+swCL/VUoUqhsFMLIBMRO6KCpgxi895AEAetoSOQAAeJxjYGQAg2MiZgnx/DZfGbhZwPyLLM4yCPr/LtY45gNALgcDE0gUAOkeCHF4nGNgZGBgPvD/AAMDaxwDA5hkZEAFfABctgNZeJxjYEAAJiBmgeADQNzAguAzsDhAxFnjwHQDgwVcmzyIAABxXQOhAAAAUAAAFgAAeJx1zT0KwjAcBfDXL8UKIiguLh0FoVg8goMU6eLg4tTWIAVtIOpQPIBHcPQ2grfy1f4dG0j6y0tfAmCINyz8hy220MVIbNNzsUOvxC69F3vo4y7uMH+KfYzxYctye/JCYwsDqrFNT8UOvRS79EbsYYJc3GH+EPuY4VVfW/BY48ypUXKb67PWxBYKR9xwQgrDrTreTqlp/78t3/EegwvP6zxAhBALxspcCl0GUbho767ZLX/9FFd+D+xnqLjGv0byb6xVqUx6VYcgq4I410ld/wJ2ozpzAAAAeJxjYGbACwAAfQAE"

/***/ },
/* 65 */
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "062f06670a3b82ffb0732701c9d1e098.eot"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0bfbb17e6e700d4815bc405d9fb8d65a.ttf"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "17371a8f614b03b01b31a94d43cab2c4.svg"

/***/ },
/* 69 */
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


/***/ }
/******/ ]);