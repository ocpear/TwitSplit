import React from 'react';
import ReactDOM from 'react-dom';
import TwitSplit from './screens/TwitSplit';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <TwitSplit />
    </Provider>,
   document.getElementById('root')
);