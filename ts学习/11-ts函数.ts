// export {}

// function (a:number,b:number):number {
//     return a + b
// }

// 接口定义函数类型
// interface FnItf{
//     (p:string):number
// }

// let fn:FnItf = (p:string) =>{
//     return 1
// }   
// fn('')

// 类型别名定义函数类型
// type FnType =  (p:string)=>void
// let fn2:FnType = (p:string):void =>{}
// fn2('')

// 函数作为对象的属性出现时
// interface ObJiyf{
//     fn:FnType
// }
// let obj:ObJiyf = {
//     fn:(obj) => {return 1}
// }

// obj.fn('')


type ObjType = {fn:(p:string) => number}
let obj2:ObjType = {
    fn:(str) =>{
        return 1
    }
}

obj2.fn('')