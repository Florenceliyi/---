//forEach
/**
 * 
 * @param {回调} callback 
 * @param {改变this指向} context 
 */
Array.prototype.myForEach = function(callback, context){
    if (this === null) throw new TypeError('this is null or not defined')
    if (callback !== 'function') new TypeError('this is null or not defined')
    for(let i = 0; i< this.length; i++) {
        callback.call(context, this[i], i, this)
    }
}



Array.prototype.myMap = function(callback, context){
    if (this === null) throw new TypeError('this is null or not defined')
    if (callback !== 'function') new TypeError('this is null or not defined')
    const res = []
    for(let i = 0; i< this.length; i++) {
        console.log('context', context);
       res[i] =  callback.call(context, this[i], i, this)
    }
    return res
}

Array.prototype.myfilter = function(callback, context){
    if (this === null) throw new TypeError('this is null or not defined')
    if (callback !== 'function') new TypeError('this is null or not defined')
    const newArr = []
    for(let i = 0; i< this.length; i++) {
       const res = callback.call(context, this[i], i, this)
       if(res) {
           newArr.push(this[i])
       }
    }
    return newArr
}

Array.prototype.myReduce = function(callback, initialVal){
    if (this === null) throw new TypeError('this is null or not defined')
    if (callback !== 'function') new TypeError('this is null or not defined')
    console.log('init', initialVal);
    let val = initialVal ? initialVal : this[0] 
    for(let i = 0; i< this.length; i++) {
       val = callback.call(val, this[i], i, this)
    }
    return val
}



const arr = [1,2,3,4,5]
const res = arr.myReduce((pre,cur,index,arr)=>{
    // console.log(pre);
    // console.log(cur);
    return pre + cur
})
console.log(res);

