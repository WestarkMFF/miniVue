// 万恶开端 2021.2.27
import { initMixin } from "./core/instance/init"

function Vue(opt) {
  if(!this instanceof Vue){
    console.log("Vue is a constructor, should be created by 'new'")
    return
  }
  this._init(opt)
}

initMixin(Vue)

export default Vue
