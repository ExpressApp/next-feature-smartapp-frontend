import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { history } from '../router'
import { ui } from './ui'
import { AppState } from '../../types'
import { bot } from './bot'
import { client } from './client'

export const rootReducer = combineReducers<AppState>({
  ui,
  bot,
  client,
  router: connectRouter(history),
})
