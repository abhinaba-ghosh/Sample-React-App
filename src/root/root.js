import React, { Component } from 'react';
import App from './app';

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <App>
                </App>
            </Provider>
        )
    }
}
