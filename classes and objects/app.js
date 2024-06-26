const student ={
    fullname: "prabhat pandey",
    marks : 94.4,
    printmarks : function(){
        console.log("marks = ", this.marks);
    }

};

const employee ={
clactax(){
    console.log("tax rate is 10%");
}
};


const prabhat ={
    salary : 5000,
    salary : function (){
         console.log(this.salary);
    },
    clactax() {
       console.log("tax rate is 20%");
    }
};

// ==========================  this is to inherit the property of superclass======================== //
// it is a reference to a object .

prabhat.__proto__ = employee;



// =========================================== Classes ===============================================//

class ToyotaCar{

    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
  /*  setBrand(brand){
      this.brand = brand;
    } 
    */
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
// fortuner.step("fortuner");
let lexus = new ToyotaCar("lexus",12);
// lexus.setBrand("lexus");
console.log(lexus);


// ================================ inHeritence in javascript =====================================//

class parent{
    hello(){
        console.log("hello");
    }
}

class child extends parent{}
 let obj = new child();



 class person{

    constructor(name){
        this.name = name;
      //  console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("person will eat");
    }
    sleep(){
        console.log("person will sleep");
    }
    work(){
        console.log("Do nothing");
    }
 }
 class engineer extends person{
     
    constructor(name){
        console.log("enter a child constructor")
        super(name);
      //  this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("do coding");
    }
 }

 class doctor extends person{
    work(){
        console.log("do surgeries");
    }
 }

 let ob = new engineer("prabhat");

