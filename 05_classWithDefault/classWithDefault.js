class Person{
    constructor(name = "unknow",age = 0){   //Imp
        this.name = name;
        this.age = age;
    }

    getDetail(){
        return `Name:${this.name} and age:${this.age}`;
    }
}

const person01 = new Person("Pratik",24);
console.log(person01.getDetail());

const person02 = new Person();
console.log(person02.getDetail());