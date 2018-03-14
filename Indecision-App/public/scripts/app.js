'use strict';

console.log('App.js is running');

//JSX - jAvaScript xml
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your Options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two '
        )
    )
);
var user = {
    //     name: 'Venkat M',
    //     age:24,
    //     location:'Hyderbad'
};
var userName = 'Venkat M';
var userAge = 24;
var userLocation = 'Hyderabad';
//if we render the object it throws the error we can use user.age like that
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location:',
            location
        );
    }
}
//we have to use ternary operator in JSX js
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
