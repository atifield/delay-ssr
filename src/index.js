import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

console.log("before rendered " + (performance.now() - window.t0) + " milliseconds.");

window.delay(1)
.then(function() {

    if (!window.bodyReplaced) {
        console.log("render");
        ReactDOM.render(<App />, document.getElementById('root'));
        window.firstRendered = true;
    }
    else {
        console.log("hydrate");
        ReactDOM.hydrate(<App />, document.getElementById('root'));
    }
    
    console.log("after rendered " + (performance.now() - window.t0) + " milliseconds.");
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
