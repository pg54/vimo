"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClickBlock=void 0;var _createClass=function(){function e(e,t){for(var l=0;l<t.length;l++){var i=t[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,l,i){return l&&e(t.prototype,l),i&&e(t,i),t}}(),_util=require("../../util/util"),CLICK_BLOCK_POSITION=".ion-app > .click-block",ClickBlock=exports.ClickBlock=function(){function e(){_classCallCheck(this,e),this._tmr=0,this._showing=!1,this.clickBlockElement=this._getClickBlockElement()}return _createClass(e,[{key:"activate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;this.clickBlockElement||(this.clickBlockElement=this._getClickBlockElement()),window.clearTimeout(this._tmr),e&&this._activate(!0),this._tmr=setTimeout(this._activate.bind(this,!1),t)}},{key:"_activate",value:function(e){this._showing!==e&&(this._setElementClass("click-block-active",e),this._showing=e)}},{key:"_getClickBlockElement",value:function(){var e=document.querySelectorAll(CLICK_BLOCK_POSITION);return e&&0!==e.length?e[0]:null}},{key:"_setElementClass",value:function(e,t){!!this.clickBlockElement&&(0,_util.setElementClass)(this.clickBlockElement,e,t)}}]),e}();