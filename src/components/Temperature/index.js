import React, { Component } from 'react';
import default from '../Footer/index';

const Boiling = (props) => {
    if(props.temp > 100){
        return <p>The water will be boiling.</p>
    }
    return <p>The water will not boil.</p>
};

class InputBoil extends Component {
    constructor(props){
        this.state = {
            temp : 0
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            temp : e.target.value
        })
    }
    render(){
        const {temp} = this.state;
        return(
            <input onChange={this.handleChange} value={temp} />
        )
    }
}
export default InputBoil