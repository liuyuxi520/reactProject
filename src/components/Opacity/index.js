import React, { Component } from 'react';
class Opacity extends Component {
    constructor(props){
        super(props);
        this.state = {
            opacity:1
        }
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.props.interDo();
            var opacity = this.state.opacity;
            opacity -=0.05;
            if(opacity<0.1){
                opacity = 1;
            }
            this.setState({
                opacity
            });
        },200);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        return(
            <div style={{opacity:this.state.opacity}}>hello {this.props.name}</div>
        )
    }
    
}
export default Opacity;
