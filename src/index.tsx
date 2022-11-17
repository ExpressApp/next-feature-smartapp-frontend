import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Main from './components/Main'
import { configureStore } from './redux/configureStore'
import { history } from './redux/router'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      {/* @ts-ignore */}
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
