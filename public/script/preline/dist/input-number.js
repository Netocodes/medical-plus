!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(self,(()=>(()=>{"use strict";var t={737:(t,e)=>{
/*
 * HSBasePlugin
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},371:function(t,e,n){
/*
 * HSInputNumber
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
var i,r=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=this&&this.__assign||function(){return s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},s.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(969),a=function(t){function e(e,n){var i=t.call(this,e,n)||this;i.input=i.el.querySelector("[data-hs-input-number-input]")||null,i.increment=i.el.querySelector("[data-hs-input-number-increment]")||null,i.decrement=i.el.querySelector("[data-hs-input-number-decrement]")||null,i.input&&(i.inputValue=isNaN(parseInt(i.input.value))?0:parseInt(i.input.value));var r=i.el.dataset.hsInputNumber,o=r?JSON.parse(r):{step:1},a=s(s({},o),n);return i.minInputValue="min"in a?a.min:0,i.maxInputValue="max"in a?a.max:null,i.step="step"in a&&a.step>0?a.step:1,i.init(),i}return r(e,t),e.prototype.init=function(){this.createCollection(window.$hsInputNumberCollection,this),this.input&&this.increment&&this.build()},e.prototype.build=function(){this.input&&this.buildInput(),this.increment&&this.buildIncrement(),this.decrement&&this.buildDecrement(),this.inputValue<=0&&0===this.minInputValue&&(this.inputValue=0,this.input.value="0"),(this.inputValue<=0||this.minInputValue<0)&&this.changeValue(),this.input.hasAttribute("disabled")&&this.disableButtons()},e.prototype.buildInput=function(){var t=this;this.input.addEventListener("input",(function(){return t.changeValue()}))},e.prototype.buildIncrement=function(){var t=this;this.increment.addEventListener("click",(function(){t.changeValue("increment")}))},e.prototype.buildDecrement=function(){var t=this;this.decrement.addEventListener("click",(function(){t.changeValue("decrement")}))},e.prototype.changeValue=function(t){var e,n;void 0===t&&(t="none");var i={inputValue:this.inputValue},r=null!==(e=this.minInputValue)&&void 0!==e?e:Number.MIN_SAFE_INTEGER,s=null!==(n=this.maxInputValue)&&void 0!==n?n:Number.MAX_SAFE_INTEGER;switch(this.inputValue=isNaN(this.inputValue)?0:this.inputValue,t){case"increment":var a=this.inputValue+this.step;this.inputValue=a>=r&&a<=s?a:s,this.input.value=this.inputValue.toString();break;case"decrement":var u=this.inputValue-this.step;this.inputValue=u>=r&&u<=s?u:r,this.input.value=this.inputValue.toString();break;default:var l=isNaN(parseInt(this.input.value))?0:parseInt(this.input.value);this.inputValue=l>=s?s:l<=r?r:l,this.inputValue<=r&&(this.input.value=this.inputValue.toString())}i.inputValue=this.inputValue,this.inputValue===r?(this.el.classList.add("disabled"),this.decrement&&this.disableButtons("decrement")):(this.el.classList.remove("disabled"),this.decrement&&this.enableButtons("decrement")),this.inputValue===s?(this.el.classList.add("disabled"),this.increment&&this.disableButtons("increment")):(this.el.classList.remove("disabled"),this.increment&&this.enableButtons("increment")),this.fireEvent("change",i),(0,o.dispatch)("change.hs.inputNumber",this.el,i)},e.prototype.disableButtons=function(t){void 0===t&&(t="all"),"all"===t?("BUTTON"!==this.increment.tagName&&"INPUT"!==this.increment.tagName||this.increment.setAttribute("disabled","disabled"),"BUTTON"!==this.decrement.tagName&&"INPUT"!==this.decrement.tagName||this.decrement.setAttribute("disabled","disabled")):"increment"===t?"BUTTON"!==this.increment.tagName&&"INPUT"!==this.increment.tagName||this.increment.setAttribute("disabled","disabled"):"decrement"===t&&("BUTTON"!==this.decrement.tagName&&"INPUT"!==this.decrement.tagName||this.decrement.setAttribute("disabled","disabled"))},e.prototype.enableButtons=function(t){void 0===t&&(t="all"),"all"===t?("BUTTON"!==this.increment.tagName&&"INPUT"!==this.increment.tagName||this.increment.removeAttribute("disabled"),"BUTTON"!==this.decrement.tagName&&"INPUT"!==this.decrement.tagName||this.decrement.removeAttribute("disabled")):"increment"===t?"BUTTON"!==this.increment.tagName&&"INPUT"!==this.increment.tagName||this.increment.removeAttribute("disabled"):"decrement"===t&&("BUTTON"!==this.decrement.tagName&&"INPUT"!==this.decrement.tagName||this.decrement.removeAttribute("disabled"))},e.getInstance=function(t,e){var n=window.$hsInputNumberCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element:null},e.autoInit=function(){window.$hsInputNumberCollection||(window.$hsInputNumberCollection=[]),document.querySelectorAll("[data-hs-input-number]:not(.--prevent-on-load-init)").forEach((function(t){window.$hsInputNumberCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))||new e(t)}))},e}(n(737).default);window.addEventListener("load",(function(){a.autoInit()})),"undefined"!=typeof window&&(window.HSInputNumber=a),e.default=a},969:function(t,e){var n=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0;e.stringToBoolean=function(t){return"true"===t};e.getClassProperty=function(t,e,n){return void 0===n&&(n=""),(window.getComputedStyle(t).getPropertyValue(e)||n).replace(" ","")};e.getClassPropertyAlt=function(t,e,n){void 0===n&&(n="");var i="";return t.classList.forEach((function(t){t.includes(e)&&(i=t)})),i.match(/:(.*)]/)?i.match(/:(.*)]/)[1]:n};e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isEnoughSpace=function(t,e,n,i,r){void 0===n&&(n="auto"),void 0===i&&(i=10),void 0===r&&(r=null);var s=e.getBoundingClientRect(),o=r?r.getBoundingClientRect():null,a=window.innerHeight,u=o?s.top-o.top:s.top,l=(r?o.bottom:a)-s.bottom,c=t.clientHeight+i;return"bottom"===n?l>=c:"top"===n?u>=c:u>=c||l>=c};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var i=function(t){return!!t&&("none"===window.getComputedStyle(t).display||i(t.parentElement))};e.isParentOrElementHidden=i;e.debounce=function(t,e){var i;return void 0===e&&(e=200),function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];clearTimeout(i),i=setTimeout((function(){t.apply(n,r)}),e)}};e.dispatch=function(t,e,n){void 0===n&&(n=null);var i=new CustomEvent(t,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(i)};e.afterTransition=function(t,e){var n=function(){e(),t.removeEventListener("transitionend",n,!0)};window.getComputedStyle(t,null).getPropertyValue("transition")!==(navigator.userAgent.includes("Firefox")?"all":"all 0s ease 0s")?t.addEventListener("transitionend",n,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,n,i){void 0===n&&(n=" "),void 0===i&&(i="add"),t.split(n).forEach((function(t){return"add"===i?e.classList.add(t):e.classList.remove(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var n=function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}(371);return n})()));