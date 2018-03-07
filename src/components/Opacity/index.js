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
            let {opacity} = this.state;
            opacity -=0.05;
            if(opacity<0.1){
                opacity = 1;
            }
            this.setState({
                opacity
            });
            this.props.interDo && this.props.interDo();            
        },200);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        let {opacity} = this.state;
        let {name} = this.props;
        return(
            <div style={{opacity}}>hello {name}</div>
        )
    }
    
}
export default Opacity;
