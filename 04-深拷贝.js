
//深拷贝 拷贝对象类
function deepClone(data){
    if (typeof data !== 'object') return
    const newObj = Array.isArray(data) ? [] : {}
    for(const key in data) {
        newObj[key] = typeof data[key] === 'object' ? deepClone(data[key]) : data[key]
    }
    return newObj
}

const obj = {
    a: 12,
    b: 'string', 
    c: [1,2,3],
    d: {
        name: {
            cat: 'mianmian'
        }
    }
}
const arr = [4,53,[4, 5, 4, [1,2]]]
const obj2 = deepClone(obj)
console.log(obj2);