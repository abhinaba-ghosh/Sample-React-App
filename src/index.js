import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root/root';
import './index.css';

function initializeRoot() {
    render(
        <AppContainer>
            <Root/>
        </AppContainer>,
        document.getElementById('root'),
    );

    if (module.hot) {
        module.hot.accept('./root/root', () => {
            const NewRoot = require('./root/root').default;
            render(
                <AppContainer>
                    <NewRoot/>
                </AppContainer>,
                document.getElementById('root'),
            );
        });
    }
}

initializeRoot();
