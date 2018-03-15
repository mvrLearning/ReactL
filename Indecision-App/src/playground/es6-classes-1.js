class Person {
    constructor(name='Anonymous',age=0){ //declaring the default value
        this.name=name;//refers to class reference
        this.age=age;
    }
    
    getGreeting(){
        return `Hi, I am ${this.name}!` ;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description +=` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name,age,location) {
        super(name,age);
        this.homeLocation=location;
    }
hasHomeLocation(){
    return !!this.homeLocation;
}
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()){
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
    
}
const me = new Traveller('Venkat Mareddy',25,'Hyderabad');

const Other = new Traveller();
console.log(me.hasHomeLocation());

console.log(me.getGreeting());
console.log(me.getDescription());


console.log(Other.hasHomeLocation());
console.log(Other.getDescription());