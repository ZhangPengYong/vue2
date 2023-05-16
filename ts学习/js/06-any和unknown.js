"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 不推荐使用any,any会绕过类型校验
// let a:any = 1
// a = '1'
// a = [10]
// a = {a:1}
// a.toFixed(2)   // 绕过了，不检测
let n = 1;
n = '1';
n = [10];
n = { a: 1 };
// n.toFixed(2)  // 报错   有做类型校验，除非上面写number，才不会有报错
// n.concat()
if (typeof n === 'number') {
    n.toFixed(2);
}
else if (typeof n === 'string') {
    n.concat();
}
