console.log('App.js is running');

//JSX - jAvaScript xml
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}
const onMakedecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
}
const onremoveAll = () => {
    app.options = [];
    renderApp();
}
const appRoot = document.getElementById('app')

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your Options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakedecision}>What should I do?</button>
            <button onClick={onremoveAll}>Remove All</button>
            <ol>
                {app.options && app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>

    );
    ReactDOM.render(template, appRoot);
}

renderApp();


const obj = {
    name : 'Vikram',
    getName(){
        return this.name;
    }
}

console.log(obj.getName());//Vikram

const getName = obj.getName.bind(obj);

console.log(getName());//uncaught reference error

//binding got broken the context will get broken

const func = function(){
    console.log(this); //undefined
}

func(); 

// so we can use bind which takes the first argument of this which should be refered

