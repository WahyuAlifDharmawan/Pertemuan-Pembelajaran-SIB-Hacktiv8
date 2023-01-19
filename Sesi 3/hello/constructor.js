// Constructor

class Employee {
    constructor(name){
        this._name = name;
    }
    // doWork(){
    //     return "Complete!";
    // }
    getName(){
        return this._name;
    }
}

let scoot = new Employee("Scoot Moss");
console.log(scoot.getName());
