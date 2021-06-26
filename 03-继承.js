// ES5寄生组合继承
function Parent(name, age){
    this.name = name
    this.age = age
}
Parent.prototype.walk = function(){
    console.log('走路');
    console.log(this.age);
}
function Child(name, age){
    this.name = name
    this.age = age
    Parent.apply(this, [name, age])
}
Child.prototype.say = function(){
    console.log('说话');
    console.log(this.name);
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

const child1 = new Child('Florence', 18)
const child2 = new Child('alice', 19)
console.log(child1.name);
console.log(child1.age);
console.log(child1.walk());
console.log(child2);

//ES6继承
class Animail{
    constructor(type, name){
        this.type = type
        this.name = name
    }
    run(){
        console.log(this.type, this.name);
    }
}
class Cat extends Animail{
    constructor(...args){
        super(...args)
    }
    setFire(){
        console.log(this.name, this.age);
    }
}
const cat = new Cat('yellowCat', 'redCat', 'blueCat')
cat.run()