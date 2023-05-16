export {}

// 默认参数 参数名:number=3  这个参数默认值是3
function fn(a:number,b:number=3){
    return a + b
}
console.log(fn(1,2));
console.log(fn(2));
fn(1)


// 缺省参数 参数名? 表示可以被缺省的参数
function fn1(a:number,b?:number){
    return 1
}
fn1(1)
fn1(1,2)

// 剩余参数
function fn2(a:number,b:number,...arr:number[]){
    console.log(a,b);
    console.log(arr);
}
fn2(1,2,3,4,5)

// let arr1 = [1,2,3]
// let arr2 = [...arr1]
// arr1[0] = 4
// console.log(arr1);
// console.log(arr2); 

let obj1 = {a:1,b:2,c:[,1,2,3]}
let obj2 = {...obj1}  // 浅拷贝
obj1.a = 100
obj1.c[0] = 100
console.log(obj1);
console.log(obj2);
