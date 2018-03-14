console.log('App.js is running');

//JSX - jAvaScript xml
const app={
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer!',
    options:['One','Two']
}
const template =(
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? 'Here are your Options' : 'No Options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two </li>
        </ol>
    </div>
    
);
const user ={
//     name: 'Venkat M',
//     age:24,
//     location:'Hyderbad'
}
var userName = 'Venkat M';
var userAge= 24;
var userLocation = 'Hyderabad';
//if we render the object it throws the error we can use user.age like that
function getLocation(location) {
    if (location) {
        return <p>Location:{location}</p>;
    }
} 
//we have to use ternary operator in JSX js
const template2 = (
    <div>
        <h1>{user.name ? user.name:'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);