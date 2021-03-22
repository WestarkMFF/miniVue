let uid = 0

export function initMixin(Vue) {
  Vue.prototype._init = function () {
    const vm = this

    console.log(this)

    vm._uid = uid++
    vm._isVue = true
    vm._self = vm
  }
}
