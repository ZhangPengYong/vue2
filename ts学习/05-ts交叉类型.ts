export {}

// & 交叉类型

// let a:number&string  // 不会有任何值满足这个类型 一般不会这么写
// 如果一个属性出现多次类型的设置，需要都满足
let obj:{name:string,age:number} & {height:number}  // & 都 必须有name，age,height属性,都得有
obj = {name:'zs',age:18,height:1.80}

// & 换成 | 才可以少属性
