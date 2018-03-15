
class VisisbilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state={
            visibility:false
        }
    }
    handleToogleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility:!prevState.visibility
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Toogle Visisbility</h1>
                <button onClick={this.handleToogleVisibility}>{this.state.visibility?'Show Details':'Hide Details'}</button>
                {this.state.visibility && <p>Hey this are some Details you can now see</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisisbilityToggle />,document.getElementById('app'));

// let visibility = false;

// const togleVisibility = ()=>{
//     visibility = !visibility;
//     render();
// }

// const appRoot = document.getElementById('app')


// const render = ()=>{
//     const template = (
//         <div>
//         <h1>Visisbility Toogle</h1>
//             <button onClick={togleVisibility}>{visibility?'Hide Details':'Show Details'}</button>
//             {visibility && <p>Hey this are some Details you can now see</p>}
//         </div>
//     )
   
//     ReactDOM.render(template, appRoot)
// }

// render();