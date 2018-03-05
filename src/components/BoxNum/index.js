/**
 * Created by liufeifeng on 3/2/18.
 */
import React, { Component } from 'react';
import Opacity from '../Opacity/index';
import './Box.css';

class Square extends Component {
    handleClick = (value) => {
        // xxx
         this.props.onClick(value);
    }
    render(){
        const { onClick, value } = this.props;
        return (
            <button className="square" onClick={this.handleClick}>{value}</button>
        )
    }
}
class Status extends Component {
    render(){
        return(
            <div className="status">{this.props.status}</div>
        )
    }
}
class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            i: 0
        };
    }
    squareRender(i){
        return(
            <Square value = {i} onClick={this.props.onClick} />
        )
    }
    handleInterDo = () => {
        this.setState({
            i: this.state.i + 1
        })
    }
    render(){
        return(
            <div className="board">
                <Status status={this.props.status} />
                {
                    this.state.i < 10 ? <Opacity name='lyx' interDo={this.handleInterDo} /> : null
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
            </div>
        )
    }
}
export default Board;