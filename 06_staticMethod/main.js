class calculater{
    static add(a1,a2){
        return a1+a2;
    }
}

let n1 = parseInt(prompt('Enter the num1'))
let n2 = parseInt(prompt('Enter the num2'))
console.log(calculater.add(n1,n2));