import { print,print_recursev,flatten,deep_flatten } from './arrayUtils.js'

console.log(print([1,1,1,1,[2],[3,[5],[5,7,[7]]]]))
console.log(print_recursev([1,1,1,1,[2],[3,[5],[5,7,[7]]]]),2)
console.log(flatten([[[1],[2],[3],8],7,9]))
console.log(deep_flatten([[[1],[2],[3],8],7,9]));
console.log("CP1")
console.log("Testing Cherry pick 2");