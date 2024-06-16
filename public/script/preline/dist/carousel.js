!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s=e();for(var i in s)("object"==typeof exports?exports:t)[i]=s[i]}}(self,(()=>(()=>{"use strict";var t={737:(t,e)=>{
/*
 * HSBasePlugin
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e,s){this.el=t,this.options=e,this.events=s,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var s;t.push({id:(null===(s=null==e?void 0:e.el)||void 0===s?void 0:s.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=s},629:function(t,e,s){
/*
 * HSCarousel
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
var i,n=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function s(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}),o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var e,s=1,i=arguments.length;s<i;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},o.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e,s){var i,n,r,l=t.call(this,e,s)||this,a=e.getAttribute("data-hs-carousel"),d=a?JSON.parse(a):{},c=o(o({},d),s);return l.currentIndex=c.currentIndex||0,l.loadingClasses=c.loadingClasses?"".concat(c.loadingClasses).split(","):null,l.loadingClassesRemove=(null===(i=l.loadingClasses)||void 0===i?void 0:i[0])?l.loadingClasses[0].split(" "):"opacity-0",l.loadingClassesAdd=(null===(n=l.loadingClasses)||void 0===n?void 0:n[1])?l.loadingClasses[1].split(" "):"",l.afterLoadingClassesAdd=(null===(r=l.loadingClasses)||void 0===r?void 0:r[2])?l.loadingClasses[2].split(" "):"",l.isAutoPlay=void 0!==c.isAutoPlay&&c.isAutoPlay,l.speed=c.speed||4e3,l.isInfiniteLoop=void 0===c.isInfiniteLoop||c.isInfiniteLoop,l.inner=l.el.querySelector(".hs-carousel-body")||null,l.slides=l.el.querySelectorAll(".hs-carousel-slide")||[],l.prev=l.el.querySelector(".hs-carousel-prev")||null,l.next=l.el.querySelector(".hs-carousel-next")||null,l.dots=l.el.querySelectorAll(".hs-carousel-pagination > *")||null,l.sliderWidth=l.inner.parentElement.clientWidth,l.touchX={start:0,end:0},l.init(),l}return n(e,t),e.prototype.init=function(){var t,e,s=this;this.createCollection(window.$hsCarouselCollection,this),this.inner&&(this.calculateWidth(),this.loadingClassesRemove&&("string"==typeof this.loadingClassesRemove?this.inner.classList.remove(this.loadingClassesRemove):(t=this.inner.classList).remove.apply(t,this.loadingClassesRemove)),this.loadingClassesAdd&&("string"==typeof this.loadingClassesAdd?this.inner.classList.add(this.loadingClassesAdd):(e=this.inner.classList).add.apply(e,this.loadingClassesAdd))),this.prev&&this.prev.addEventListener("click",(function(){s.goToPrev(),s.isAutoPlay&&(s.resetTimer(),s.setTimer())})),this.next&&this.next.addEventListener("click",(function(){s.goToNext(),s.isAutoPlay&&(s.resetTimer(),s.setTimer())})),this.dots&&this.dots.forEach((function(t,e){return t.addEventListener("click",(function(){s.goTo(e),s.isAutoPlay&&(s.resetTimer(),s.setTimer())}))})),this.slides.length&&(this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass(),this.isAutoPlay&&this.autoPlay()),this.inner&&this.afterLoadingClassesAdd&&setTimeout((function(){var t;"string"==typeof s.afterLoadingClassesAdd?s.inner.classList.add(s.afterLoadingClassesAdd):(t=s.inner.classList).add.apply(t,s.afterLoadingClassesAdd)})),this.el.classList.add("init"),this.el.addEventListener("touchstart",(function(t){s.touchX.start=t.changedTouches[0].screenX})),this.el.addEventListener("touchend",(function(t){s.touchX.end=t.changedTouches[0].screenX,s.detectDirection()})),this.observeResize()},e.prototype.observeResize=function(){var t=this;new ResizeObserver((function(){return t.recalculateWidth()})).observe(document.querySelector("body"))},e.prototype.calculateWidth=function(){var t=this;this.inner.style.width="".concat(this.sliderWidth*this.slides.length,"px"),this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.slides.forEach((function(e){e.style.width="".concat(t.sliderWidth,"px")}))},e.prototype.addCurrentClass=function(){var t=this;this.slides.forEach((function(e,s){s===t.currentIndex?e.classList.add("active"):e.classList.remove("active")})),this.dots&&this.dots.forEach((function(e,s){s===t.currentIndex?e.classList.add("active"):e.classList.remove("active")}))},e.prototype.addDisabledClass=function(){if(!this.prev||!this.next)return!1;0===this.currentIndex?(this.next.classList.remove("disabled"),this.prev.classList.add("disabled")):this.currentIndex===this.slides.length-1?(this.prev.classList.remove("disabled"),this.next.classList.add("disabled")):(this.prev.classList.remove("disabled"),this.next.classList.remove("disabled"))},e.prototype.autoPlay=function(){this.setTimer()},e.prototype.setTimer=function(){var t=this;this.timer=setInterval((function(){t.currentIndex===t.slides.length-1?t.goTo(0):t.goToNext()}),this.speed)},e.prototype.resetTimer=function(){clearInterval(this.timer)},e.prototype.detectDirection=function(){var t=this.touchX,e=t.start,s=t.end;s<e&&this.goToNext(),s>e&&this.goToPrev()},e.prototype.recalculateWidth=function(){this.sliderWidth=this.inner.parentElement.clientWidth,this.calculateWidth()},e.prototype.goToPrev=function(){0===this.currentIndex&&this.isInfiniteLoop?(this.currentIndex=this.slides.length-1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):0!==this.currentIndex&&(this.currentIndex-=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},e.prototype.goToNext=function(){this.currentIndex===this.slides.length-1&&this.isInfiniteLoop?(this.currentIndex=0,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):this.currentIndex<this.slides.length-1&&(this.currentIndex+=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},e.prototype.goTo=function(t){this.currentIndex=t,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass()},e.getInstance=function(t,e){var s=window.$hsCarouselCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return s?e?s:s.element:null},e.autoInit=function(){window.$hsCarouselCollection||(window.$hsCarouselCollection=[]),document.querySelectorAll("[data-hs-carousel]:not(.--prevent-on-load-init)").forEach((function(t){window.$hsCarouselCollection.find((function(e){var s;return(null===(s=null==e?void 0:e.element)||void 0===s?void 0:s.el)===t}))||new e(t)}))},e}(s(737).default);window.addEventListener("load",(function(){r.autoInit()})),window.addEventListener("resize",(function(){if(!window.$hsCarouselCollection)return!1;window.$hsCarouselCollection.forEach((function(t){t.element.recalculateWidth()}))})),"undefined"!=typeof window&&(window.HSCarousel=r),e.default=r}},e={};var s=function s(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,s),o.exports}(629);return s})()));