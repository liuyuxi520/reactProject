/**
 * Created by liufeifeng on 2/8/18.
 */
import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render(){
        const {footerNav,name,info} = this.props;
        return(
            <section>
                <FooterNav footerNav={footerNav} />
                <FooterAd info={info} />
            </section>
        )
    }
} 
class FooterNav extends Component {
    toPath(path){
        window.location.href = path;
    }
    render(){
        const {footerNav} = this.props;
        return(
            <ul className='footer-ul'>
                {
                   footerNav.map((item,i) => (
                    <li key={i}>
                        {/* <a onClick={ this.toPath(item.path) }>{ item.name }</a> */}
                        <a onClick={ this.toPath.bind(this, item.path) }>{ item.name }</a>
                    </li>
                   )) 
                }
                
            </ul>
        )
    }
}
class FooterAd extends Component {
    render(){
        const {info} = this.props;
        return(
            <div className='footer-ad'>{info}</div>
        )
    }
}

export default Footer;