"use strict";(self.webpackChunktravel_site=self.webpackChunktravel_site||[]).push([[582],{222:(e,t,s)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var o=s.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}s.r(t),s.d(t,{default:()=>i});const i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var t,s;return t=e,(s=[{key:"events",value:function(){var e=this;this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(t){return e.keyPressHandler(t)}))}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeTheModal()}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n    <div class="modal">\n    <div class="modal__inner">\n      <h2 class="section-title section-title--green section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n      <div class="wrapper wrapper--narrow">\n        <p class="modal__description">Click the HipCamp link below to book a campsite or connect with me on social network to discuss other opportunities.</p>\n        \n      </div>\n\n      <div class="social-icons">\n        <a href="https://www.facebook.com/george.s.peck.1" target="_blank" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n        <a href="https://twitter.com/grittyNwitty" target="_blank" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n        <a href="https://www.instagram.com/georgeshermanpeck/" target="_blank" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n        <a href="https://www.youtube.com/channel/UCwUTc0JHLL97aoXBTU5P3kw" target="_blank" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n      </div>\n\n      <div class="wrapper wrapper--narrow hipcamp">\n      <a href="https://www.hipcamp.com/en-US/u/georgepa798bb"><img src="assets/images/icons/hipcamp.svg" alt="HipCamp"></a>\n      </div>\n    </div>\n    <div class="modal__close">X</div>\n  </div>\n    ')}}])&&o(t.prototype,s),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);