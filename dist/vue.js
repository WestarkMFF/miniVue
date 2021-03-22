(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
}(this, (function () { 'use strict';

  let uid = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function () {
      const vm = this;

      console.log(this);

      vm._uid = uid++;
      vm._isVue = true;
      vm._self = vm;
    };
  }

  // 万恶开端 2021.2.27

  function Vue(opt) {
    if(!this instanceof Vue){
      console.log("Vue is a constructor, should be created by 'new'");
      return
    }
    this._init(opt);
  }

  initMixin(Vue);

  return Vue;

})));
