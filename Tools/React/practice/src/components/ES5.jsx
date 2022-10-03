import {useState, Component} from 'react';

// function ES5(){
//     var [state, setState] = useState('world');
//     return(
//         <h3>Hello, {state}</h3>
//     )
// }

class ES5 extends Component{
    constructor(props){
        super(props);
        
            this.state = {
            }
    }

    render(){
        return(
            <div>
                <h3>Hello, {this.props.name}</h3>
            </div>
        )
    }
}

export default ES5;