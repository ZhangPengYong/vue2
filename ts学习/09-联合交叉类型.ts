export {}

// | &

// && 优先于 ||
// console.log(1||2&&3)

// & 优先于 |
let obj:{name:string} & {age:number} | {name:number} & {age:string}
obj = {
    name:'zx',
    age:18
}

obj = {
    name:18,
    age:'zx'
}