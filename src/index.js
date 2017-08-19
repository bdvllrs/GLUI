import './scss/open-iconic.scss';
import './scss/normalize.css';
import './scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';


if(document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
