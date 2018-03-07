/**
 * Created by liufeifeng on 3/2/18.
 */
import React, { Component } from 'react';
import Opacity from '../Opacity/index';
import './Box.css';

class Square extends Component {
    handleClick = () => {
        const {value,onClick} = this.props;
        // xxx
         onClick(value);
    }
    render(){
        const { value,stateVal } = this.props;
        const whether = value == stateVal;
        if(whether){
            return (
                <button className="square highlight" onClick={this.handleClick}>{value}</button>
            )
        }
        return (
            <button className="square" onClick={this.handleClick}>{value}</button>
        )
    }
}
class Status extends Component {
    render(){
        const {status} = this.props;
        return(
            <div className="status">{status}</div>
        )
    }
}
class InputSquare extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : props.defaultValue || ''
        }
    }
    handleChange = (e) => {
        // debugger
        const value = e.target.value;
        const {onChange} = this.props;
        this.setState({value});
        onChange && onChange(value);
    }
    handleSubmit(){
        const {onClick} = this.props;
        const {value} = this.state;
        onClick && onClick(value)
    }
    render(){
        return(
            <div>
                <input className='squareInput' type='text' value={this.state.value} onChange={this.handleChange} />
                <input className='squareBtn' type='submit' value='change' onClick={this.handleSubmit.bind(this)} />
            </div>
        )
    }
} 
class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            i: 1
        };
    }
    squareRender(i){
        let {onClick}=this.props;
        return(
            <Square value = {i} stateVal={this.state.i} onClick={onClick} />
        )
    }
    handleInterDo = () => {
        this.setState({
            i: this.state.i + 1
        })
    } 
    handleChange = (value) => {
        console.log(value)
    }
    handleSubmit = (value) => {
        this.setState({
            i: value
        })
    }
    render(){
        return(
            <div className="board">
                <Status status={this.props.status} />
                {
                    this.state.i < 10 ? <Opacity name='lyx'  /> : null
                }
                <div>
                    <div className="row-square">
                        {this.squareRender(1)}
                        {this.squareRender(2)}
                        {this.squareRender(3)}
                    </div>
                    <div className="row-square">
                        {this.squareRender(4)}
                        {this.squareRender(5)}
                        {this.squareRender(6)}
                    </div>
                    <div className="row-square">
                        {this.squareRender(7)}
                        {this.squareRender(8)}
                        {this.squareRender(9)}
                    </div>
                </div>
                <InputSquare defaultValue={this.state.i} onChange={this.handleChange} onClick={this.handleSubmit} />
            </div>
        )
    }
}
export default Board;