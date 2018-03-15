# ReactL

yarn global add live-server

npm i -g live-server

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server public/


jsx have only at the code ran no data binding

how react and render working

let count = 0;
const addOne = () =>{
    count++;
    renderCountApp()
}

const minusOne = () =>{
    count--;
    renderCountApp();    
}
const reset =()=>{
    count =0;
    renderCountApp();    
}


const appRoot = document.getElementById('app')

const renderCountApp = ()=>{
    const template2 = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(template2, appRoot);
    
}

renderCountApp();

***********************
[98,97,96,'string hello'] -> {98}{97}{96}{'string hello'} ->989796string hello
null undefined true will not be rendered 
and the rendered will be as react-text

can alos render array of jsx like ol li elements

    {
       numbers.map((el)=><p key={el}>Number: {el}</p>) 
           }
