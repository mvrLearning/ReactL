var nameVar = 'Venkat';
nameVar = 'Mareddy';
console.log('nameVar',nameVar);

let nameLet = 'Mvr';
nameLet = 'Reddy'//can 
// let nameLet = 'duplicate'; // not allowed
console.log('nameLet',nameLet);

//for const we cannot redefine 
const nameConst = 'Frank';
console.log('nameConst',nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

// all the three have function scoped

//let and const have block level scopes

//block scoping

var fullName = 'Venkat Mareddy';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    let lastName = fullName.split(' ')[1];//const also
    console.log(firstName);
    console.log(lastName);
}

console.log(firstName);//Venkat
console.log(lastName);//error


