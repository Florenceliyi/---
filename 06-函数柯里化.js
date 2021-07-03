// 函数柯里化
// function curry(fn) {
//     return _curry = (...args)=>{
//         if (args.length === fn.length) return fn(...args)
//         return (...type)=>_curry(...args,...type)
//     }
// }

// const sum = curry((a, b, c, d)=>{
//     return a+b+c+d
// })

// const res = sum(1)(2,2)(3)()

// console.log(res);

// function curry(fn) {
//     // if(!fn.length) return
//     let judge = (...args) => {
//         if (args.length == fn.length) return fn.bind(this, ...args)
//         return (...arg) => judge(...args, ...arg)
//     }
    
//     return judge
// }

// function add(a, b, c, d) {
//     return a + b + c + d 
// }

// let addCurry = curry(add)
// const res = addCurry(1)(2,2)(3)()
// console.log(res);

/**
 * 将函数柯里化
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数，默认为原函数的形参个数
 */
 Array.prototype.curry = _curry
 let arr = new Array([])
 function curry(fn,len = fn.length) {
    return arr.curry.call(this,fn,len)
}

/**
 * 中转函数
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数
 * @param args  已接收的参数列表
 */



function _curry(fn,len,...args) {
    return function (...params) {
        let _args = [...args,...params];
        if(_args.length >= len){
            return fn.apply(this,_args);
        }else{
            return _curry.call(this,fn,len,..._args)
        }
    }
}

let _fn = curry(function(a,b,c,d,e){
    console.log(a,b,c,d,e)
});

_fn(1,2,3,4,5);     // print: 1,2,3,4,5
// _fn(1)(2)(3,4,5);   // print: 1,2,3,4,5
// _fn(1,2)(3,4)(5);   // print: 1,2,3,4,5
// _fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5

