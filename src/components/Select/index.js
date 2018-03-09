import React, { Component } from 'react';
import InputBoil from '../Temperature/index';

import './Select.css';
class Selects extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : this.props.defaultVal
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
            <div>
                <select className='reactSelect' defaultValue={this.state.value} onChange={this.handleChange}>
                    {
                        // if(data && data.length){
                        data && data.length>0 &&
                        data.map((item,index) => (
                            item === value ?(<option key={index} selected value={item}>{item}</option>):(<option key={index} value={item}>{item}</option>)
                        ))
                        // }
                    }
                </select>
                <InputBoil />
            </div>

        )

    }
    
}
export default Selects