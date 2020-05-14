import React, { Component } from 'react';
import App from './app';
import SamplePage from '../sample-page/sample-page-page';

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <App>
                <SamplePage></SamplePage>
            </App>
        )
    }
}
