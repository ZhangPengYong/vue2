"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// | &
// && 优先于 ||
// console.log(1||2&&3)
// & 优先于 |
let obj;
obj = {
    name: 'zx',
    age: 18
};
obj = {
    name: 18,
    age: 'zx'
};
