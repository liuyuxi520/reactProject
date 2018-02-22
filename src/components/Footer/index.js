/**
 * Created by liufeifeng on 2/8/18.
 */
import React, { Component } from 'react';
import { footerNav } from '../../config/config';
import './footer.css';
class Footer extends Component {
    constructor(props){
        super(props)
        this.state = { //通过es6类的继承实现时 state的初始化要在constructor中声明
            whether:true
        }
    }
    render(){
        const name = this.state.whether?this.props.name:'';
        return(
            <section>
                <FooterNav name={name} />
                <FooterAd info={this.props.info} />
                <Count />
            </section>
        )
    }
}
class FooterNav extends Component {
    toIndex(){
        window.location.href = '/';
    }
    toAbout(){
        window.location.href = '/about/';
    }
    toNews(){
        window.location.href = '/news/';
    }
    toMy(){
        window.location.href = '/my/';
    }
    render(){
        return(
            <ul className='footer-ul'>
                <li>
                    <a onClick={ this.toIndex }>{ footerNav.index } {this.props.name}</a>
                </li>
                <li>
                    <a onClick={ this.toAbout }>{ footerNav.about } {this.props.name}</a>
                </li>
                <li>
                    <a onClick={ this.toNews }>{ footerNav.news } {this.props.name}</a>
                </li>
                <li>
                    <a onClick={ this.toMy }>{ footerNav.my } {this.props.name}</a>
                </li>
            </ul>
        )
    }
}
class FooterAd extends Component {
    render(){
        return(
            <div className='footer-ad'>{this.props.info}</div>
        )
    }
}

class Count extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    handleClick=()=>{
        this.setState({count : this.state.count+1});    
    }
    // alick(){
    //     this.setState(states => ({
    //         count : states.count+1
    //     }));
    // }
    render(){
        return(
            <p className='number' onClick={this.handleClick}>点我！点击次数为 {this.state.count}</p>
        )
    }
}

export default Footer;