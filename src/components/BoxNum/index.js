/**
 * Created by liufeifeng on 3/2/18.
 */
import React, { Component } from 'react';
import './Box.css';
class Square extends Component {
    render(){
        return (
            <button className="square" onClick={()=>alert(this.props.value)}>{this.props.value}</button>
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
    squareRender(i){
        return(
            <Square value = {i} />
        )
    }
    render(){
        return(
            <div className="board">
                <Status status={this.props.status} />
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