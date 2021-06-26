//ES5数组扁平化
function flatten(arr){
    let newArr = []
    for(let i = 0; i< arr.length; i++) {
        Array.isArray(arr[i]) ? newArr = newArr.concat(flatten(arr[i])) : newArr.push(arr[i])
    }
    return newArr
}

const backData1 = flatten([1,3,[4,5,6,[3,5]]])
console.log(backData1);


//ES6数组扁平化
function flatten2(arr){
    return arr.flat(Infinity)
}
function flatten3(arr){
    while(arr.some(item=> Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}
// const backData2 = flatten2([1,3,[4,5,6,[3,5]]])
// console.log(backData2);
const backData3 = flatten3([1,3,[4,5,6,[3,5]]])
console.log(backData3);