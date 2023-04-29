class Emp{
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

      getSalary(){
        return `${this.salary}`
      }
}

const emp = new Emp("Pratik","developer",20000);
console.log(emp.getSalary());