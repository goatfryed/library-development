import React from 'react';
import {render} from 'react-dom';
import * as webpackNumbers from '@library-development/webpack-author-libraries';
import {WebpackReactComponent} from '@library-development/webpack-react-lib';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    webpack-author-libraries: {webpackNumbers.numToWord(2)}
                </p>
                <WebpackReactComponent />
            </header>
        </div>
    );
}

render(
    <App/>,
    document.getElementById('app')
);