import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import actionReducer from './store'
import {Provider} from 'react-redux'
import App from './Component/App'

const store = createStore(actionReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'))