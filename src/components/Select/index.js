import React, { Component } from 'react';
import InputBoil from '../Temperature/index';

import './Select.css';
class Selects extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : props.defaultVal
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            value : e.target.value
        })
    }
    render(){
        const { value } = this.state;
        const {data} = this.props;
        return(
            <select className='reactSelect' defaultValue={value} onChange={this.handleChange}>
                {
                    data && data.length &&
                    data.map((item,index) => (<option key={index} selected={item === value} value={item}>{item}</option>))
                }
            </select>
        )

    }
    
}
export default Selects