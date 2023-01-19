// Method Super

class Person {
    constructor(name) {
        this._name = name;
    }
    getName(){
        return this._name;
    }
}

class Employee extends Person{
    constructor(name, title){
        super(name);
        this._title = title;
    }
}
