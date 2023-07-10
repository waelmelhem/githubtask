// console.log("Hello");
import {deep_get,getObjKeys} from "./objectUtils.js"
console.log(deep_get({a:{b:[12,]},c:{d:{e:1}}}, "c.d", [55]));
console.log(getObjKeys({a:{b:[12,]},c:{d:{e:1}}}));