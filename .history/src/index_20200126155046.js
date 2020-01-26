import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux'

// Required for Redux store setup
import { Provider } from 'react-redux'
import configureStore from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
  
    const enhancer = composeEnhancers(
      applyMiddleware(...middleware),
      // other store enhancers if any
    );

    const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
