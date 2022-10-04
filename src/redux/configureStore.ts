import { applyMiddleware, createStore, Store } from 'redux'
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers'
import rootSaga from './sagas'
import { history } from './router'
import { AppState } from '../types'

type ApplicationStore = Store<AppState>

export function configureStore(): ApplicationStore {
  const sagaMiddleware = createSagaMiddleware()
  const routerMiddleware = createRouterMiddleware(history)

  const store: ApplicationStore = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware))
  )

  sagaMiddleware
    .run(rootSaga)
    .toPromise()
    .catch((e: Error) => console.error('Saga error', e))

  return store
}
