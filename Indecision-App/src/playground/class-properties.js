class OldSyntax{
    constructor(){
        this.name='Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `My name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

console.log(oldSyntax);

class NewSyntax{
name='jen';
getGreeting = ()=>{
    return `My name is ${this.name}`;
    
}
}
const newSyntax = new NewSyntax();

const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());

console.log(newSyntax);
