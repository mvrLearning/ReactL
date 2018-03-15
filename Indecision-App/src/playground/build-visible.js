let visibility = false;

const togleVisibility = ()=>{
    visibility = !visibility;
    render();
}

const appRoot = document.getElementById('app')


const render = ()=>{
    const template = (
        <div>
        <h1>Visisbility Toogle</h1>
            <button onClick={togleVisibility}>{visibility?'Hide Details':'Show Details'}</button>
            {visibility && <p>Hey this are some Details you can now see</p>}
        </div>
    )
   
    ReactDOM.render(template, appRoot)
}

render();