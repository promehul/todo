import React from 'react';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import {createStore} from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)
render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )


registerServiceWorker();
