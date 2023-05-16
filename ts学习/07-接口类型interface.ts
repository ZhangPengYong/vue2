export {}

// interface  用来自定义类型
// 定义接口类型  --- 给对象用
interface MyItf {
    // 属性名：值的类型
    name:string,
    age:number,
    height:number
}
let obj:MyItf
obj = {
    name:'zs',
    age:18,
    height:1.80
}

// 定义接口类型  --- 给数组用
interface arrItf {
    // [index:number] 下标类型:值类型
    [index:number]:number | string
}

let arr:arrItf = [1,2,3,'4','5']


// 定义接口类型  --- 给函数用
interface FnItf {
    // 形参及类型，返回值类型
    (p:string,a:number):void
}

let Fn:FnItf = (p:string,a:number) =>{}
Fn('',1)

