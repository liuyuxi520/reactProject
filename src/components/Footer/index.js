/**
 * Created by liufeifeng on 2/8/18.
 */
import React, { Component } from 'react';
import { footerNav } from '../../config/config';
import './Footer.css';
class Footer extends Component {
    render(){
        return(
            <section>
                <FooterNav name={this.props.name} />
                <FooterAd info={this.props.info} />
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

export default Footer;