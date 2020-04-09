import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Route from './Routes/Route';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);


ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
            <Route />
        </Provider>
    </div>, document.getElementById('root'));
