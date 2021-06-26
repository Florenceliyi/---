//发布者类 
class Publish{
    constructor(args) {
        //缓存订阅者的列表
        this.tasks = []
        //订阅者的参数
        this.args = args
    }
    //订阅的方法
    tap(tag, task) {
        this.tasks.push(task)
    }
    //发布的方法
    call(...args) {
        this.tasks.forEach(task => {
            task(...args)
        })
    }
}

//订阅者类
class Suscribe{
    constructor() {
        this.framework = {
            vue: new Publish(),
            react: new Publish()
        } 
    }
    //订阅Vue课程的方法
    takeVue(name, fn) {
        this.framework.vue.tap(name, fn)
    }
    //订阅react课程的方法
    takeReact(name, fn) {
        this.framework.react.tap(name, fn)
    }
    //发布vue课程的消息
    callVue(...args) {
        this.framework.vue.call(...args)
    }
    //发布react课程的消息
    callReact(...args) {
        this.framework.react.call(...args)
    }
}

const florence = new Suscribe()
florence.takeVue('lili', (des) => {
    console.log('lili',des);
})
florence.takeVue('john', (des) => {
    console.log('john',des);
})
florence.takeReact('john', (des) => {
    console.log('john',des);
})
florence.takeReact('baby', (des) => {
    console.log('baby',des);
})
florence.callVue('vue课程已上线')
florence.callReact('react课程已上线')