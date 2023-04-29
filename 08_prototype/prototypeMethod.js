function student(name){
    this.name= name;
}

student.prototype.printDetails = function(){
    console.log('Hello,this student is'+ this.name);
}

var student = new student("Pratik")
student.printDetails();