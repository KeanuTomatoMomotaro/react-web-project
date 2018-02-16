import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import GuestBook from './components/GuestBook';

ReactDOM.render(<GuestBook />, document.getElementById('root'));
registerServiceWorker();
