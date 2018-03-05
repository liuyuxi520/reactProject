import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Board from './components/BoxNum/index';
import registerServiceWorker from './registerServiceWorker';
import { nav } from './config/config';
ReactDOM.render(<Header name='lyx' nav={nav} />, document.getElementById('reactNav'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer name='react' info='lyxReact'/>, document.getElementById('reactFooter'));
ReactDOM.render(<Board status='请玩九宫格' onClick={value => alert(value)} />, document.getElementById('reactBox'));

registerServiceWorker();
