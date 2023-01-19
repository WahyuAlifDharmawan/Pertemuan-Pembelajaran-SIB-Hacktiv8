export class Person{
    constructor(name) {
        this._name = name;
    }
    getName(){
        return this._name;
    }
}

export class Employee extends Person{
    doWork(){
        return "Complete!";
    }
}