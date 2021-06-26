// 数据类型的判断
function judgeDataType(data) {
    let res = Object.prototype.toString.call(data).split(' ')[1]
    return res.substring(0, res.length - 1)
}

const res = judgeDataType([1,2,3])
console.log(res);





