import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

import Hello from './containers/Hello'

const store = configureStore()

render(
  <Provider store = {store}>
    <Hello/>
  </Provider>,
    document.getElementById('root')
)
