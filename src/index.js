import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { ModalsProvider } from "services/modals";

import "styles/global.scss";

import store from './store'
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <ModalsProvider>
            <App />
        </ModalsProvider>
    </Provider>,
  document.getElementById('root')
);
