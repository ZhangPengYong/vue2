"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  联合类型  或
let numAndStr = 10;
// numAndStr = 'str'
// 1 和 '2' 在这里都是类型  类似常量 表示numAndStr2的值只能是 1 或者 '2'
let numAndStr2 = 1;
numAndStr2 = '2';
// numAndStr2 = 2 // 报错
let obj; // | 或 表示要么有a属性，要么有b属性，不能有其他属性
obj = { a: 1 };
obj = { b: 2 };
obj = { a: 1, b: 2 };
//  obj = {a:1,b:2,c:3,} // 报错
