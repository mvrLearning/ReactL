//arguments Object is no longer bound with arrow funtions

const add = (a,b) =>{
    // console.log(arguments); arguments will throw error
    return a+b;
}

console.log(add(10,45));

//this keyword is also not bound

// const user = {
//     name:'Venkat',
//     cities:['Hyderabad','Guntur'],
//     printPlacesLived:function () { // in this case we will get undefined if we use arrow function
//         console.log(this.name);
//         console.log(this.cities);
//         this.cities.forEach((city)=> {
//             console.log(this.name + 'has lived in' + city); //gets undefined as it will be pointing to window object
//         //to avoid the undefined we can declare a that and assign this to that
//         })

//         //in es6 arrow functions they will not have this bound they will have the access to the parent element
//     }
// }

const user = {
    name: 'Venkat',
    cities: ['Hyderabad', 'Guntur'],
    printPlacesLived() { // es6 method
        return this.cities.map((city)=> this.name + 'has lived in ' + city);
    }
}

console.log(user.printPlacesLived());
 //challenge

 const Multiplier ={
     numbers:[10,20,30],
     multiplyBy:3,
     mutiply(){
         return this.numbers.map((number)=>this.multiplyBy * number);
     }
 }

 console.log(Multiplier.mutiply());
 