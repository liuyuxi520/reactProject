/**
 * Created by liufeifeng on 2/5/18.
 */
import React, { Component } from 'react';
import './Header.css';
// class Header extends Component {
//     toIndex(){
//         window.location.href = '/';
//     }
//     toAbout(){
//         window.location.href = '/about/';
//     }
//     toMy(){
//         window.location.href = '/my/';
//     }
//     render(){
//         return (
//             <ul className='header-ul'>
//                 <li>
//                     <a onClick={ this.toIndex }>{ nav.index } {this.props.name}</a>
//                 </li>
//                 <li>
//                     <a onClick={ this.toAbout }>{ nav.about } {this.props.name}</a>
//                 </li>
//                 <li>
//                     <a onClick={ this.toMy }>{ nav.my } {this.props.name}</a>
//                 </li>
//             </ul>
//         )
//     }
// }


class Header extends Component {
    toNextPath = (path) => {
        window.location.href = path;
    }
    render(){
        const { nav, name } = this.props;
        return (
            <ul className='header-ul'>
            {
                nav.map(item => (
                    <li>
                        <a onClick={ this.toNextPath.bind(this, item.path) }>{ item.name } {name}</a>
                    </li>
                ))
            }
            </ul>
        )
    }
}

export default Header;