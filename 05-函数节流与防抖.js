//函数防抖
function debounce(fn, timeout){
    clearTimeout(debounce.timeId)
    debounce.timeId = setTimeout(fn, timeout)
}

// 函数节流
function throttle(fn, timeout){
    if(!throttle.lastTime) {
        throttle.lastTime = 0
    }
    const currentTime = new Date().getTime()
    if(currentTime - lastTime > timeout) {
        fn()
    }
    throttle.lastTime = currentTime
}