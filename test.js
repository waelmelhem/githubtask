// console.log("Hello");
import { print,print_recursev,flatten,deep_flatten } from './arrayUtils.js'
import {deep_get,getObjKeys} from "./objectUtils.js"
console.log(deep_get({a:{b:[12,]},c:{d:{e:1}}}, "c.d", [55]));
console.log(getObjKeys({a:{b:[12,]},c:{d:{e:1}}}));

console.log(print([1,1,1,1,[2],[3,[5],[5,7,[7]]]]))
console.log(print_recursev([1,1,1,1,[2],[3,[5],[5,7,[7]]]]),2)
console.log(flatten([[[1],[2],[3],8],7,9]))
console.log(deep_flatten([[[1],[2],[3],8],7,9]));
// console.log("Hello");
import {deep_get,getObjKeys} from "./objectUtils.js"
console.log(deep_get({a:{b:[12,]},c:{d:{e:1}}}, "c.d", [55]));
console.log(getObjKeys({a:{b:[12,]},c:{d:{e:1}}}));
