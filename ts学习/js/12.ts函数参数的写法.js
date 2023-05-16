"use strict";
// export {}
// 默认参数
function fn(a, b = 3) {
    return a + b;
}
console.log(fn(1, 2));
console.log(fn(2));
fn(1);
