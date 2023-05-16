"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "200"; // 可根据初值来推到变量类型，且类型不可更改.
// str = 1        // 报错 原因：如上，变量在定义时已确定 不能修改
const num = 1; // 常量不能改变指向(不能被修改)，所以它的值 就是它的类型
// num = "2";     // 报错 原因：常量不能改变指向(不能被修改)
// const num1 = true
// ts原始类型有哪些？ ==> js基础数据类型： number string boolean undefined null symbol
let str1 = "1";
let bool = true;
let num1 = 10;
num1.toFixed(2);
// str1.toFixed(2)  报错
let und = undefined;
let nul = null;
let sy = Symbol(1);
let vo = undefined;
function a() { }
// function b(): undefined {} // 报错
function c() {
    return undefined;
}
// 在ts中函数没有返回值，函数类型就是void
a();
