/**
 * Created by liufeifeng on 2/5/18.
 */
import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    toPath(path){
        window.location.href = path;
    }
    render(){
        const {name,nav} = this.props;
        return (
            <ul className='header-ul'>
                {
                    nav.map((item,i) => (
                        <li key={i}>
                            <a onClick={ this.toPath.bind(this,item.path) }>{ item.name } {name}</a>
                        </li>
                    ))
                } 
            </ul>
        )
    }
}


// class Header extends Component {
//     toNextPath = (path) => {
//         window.location.href = path;
//     }
//     render(){
//         const { nav, name } = this.props;
//         return (
//             <ul className='header-ul'>
//             {
//                 nav.map(item => (
//                     <li>
//                         <a onClick={ this.toNextPath.bind(this, item.path) }>{ item.name } {name}</a>
//                     </li>
//                 ))
//             }
//             </ul>
//         )
//     }
// }

export default Header;