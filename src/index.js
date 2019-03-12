import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

import * as RainbowListDelegate from "./RainbowListDelegate";
import ListView from './exercise';

ReactDOM.render(
    <ListView
        numRows={50000}
        rowHeight={RainbowListDelegate.rowHeight}
        renderRowAtIndex={RainbowListDelegate.renderRowAtIndex}
    />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
