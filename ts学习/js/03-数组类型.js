"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let arr:object = [1,2,3]  // 支持 但不会这样写
// 数组的元素一般数据类型都一致，便于处理
//第一种写法
let arr = [1, 2, 3];
arr[0] = 10;
// arr[1] = "20"; // 报错
//第二种写法 泛型 类型参数化
let arr1 = [10, 20, 30];
arr1[0] = 100;
// arr1[1] = "20"; // 报错
// 元组
let arr3 = [10, 20, true];
