//bind实现
Function.prototype.myBind = function (context) {
    let self = this
    const regs = Array.prototype.slice.call(arguments, 1)
    console.log(regs);
    if (context) {
        const newargs = Array.prototype.slice.call(arguments)
        console.log(newargs);
        return () => {
            self.apply(context, [...regs])
        }
    }
    const newFn = function () {}
    this.prototype = Object.create(newFn.prototype)
    newFn.prototype.constructor = newFn
    return newFn
}



//call实现
Function.prototype.myCall = function (context) {
    if (!context) {
        context = window
    }
    const key = Symbol()
    context.key = this
    const args = [...arguments].slice(1)
    const fn = context.key(...args)
    delete context.key
    return fn
}

//apply实现
Function.prototype.myApply = function (context) {
    if (!context) {
        context = window
    }
    if (!Array.isArray(arguments[1])) {
        throw new TypeError('this is not an Array')
    }
    const key = Symbol('key')
    context.key = this
    const args = [...arguments[1]]
    const fn = context.key(...args)
    delete context.key
    return fn
}


function test(a, b, c) {
    console.log('修改的this', this, a, b, c);
    return a + b + c
}

function fn(e, f) {
    // console.log(e, f);
}

test.myApply(fn, [1,2,4])

