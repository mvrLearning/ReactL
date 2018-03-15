class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life In the hands of a Computer';
        const options = ['Thing One','Thing Two','Thing four'];

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component { //for react components render method should be defined
    //upper case first letter react takes
    render(){
          // we can get access from this.props
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{

render(){
    return (
        <div>
            {this.props.options.map((option)=><Option key={option} optionText ={option}/>)}
           
        </div>
    )
}

}

class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.optionText}
            </div>
        )
    }
}
class AddOption extends React.Component{
    render(){
        return(
            <div>
                Add Option Component Here
            </div>
        )
    }
}


        

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))