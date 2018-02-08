import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Header name='lyx'/>, document.getElementById('reactNav'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer name='react' info='lyxReact'/>, document.getElementById('reactFooter'));

registerServiceWorker();
