import { handleActions } from 'redux-actions'
import { BotState } from '../../types'
import {
  LOAD_FEATURES_SUCCESS,
  loadFeaturesSuccessActionType,
  RESET_RESPONSE,
  SEND_FEATURE_BOT_EVENT_SUCCESS,
} from '../actions/bot'

const initialState: BotState = {
  features: null,
  response: null,
  notifications: null,
}

const reducers = {
  [LOAD_FEATURES_SUCCESS]: (
    state: BotState, { payload: features }: loadFeaturesSuccessActionType,
  ): BotState => ({
    ...state,
    features,
  }),
  [SEND_FEATURE_BOT_EVENT_SUCCESS]: (
    state: BotState,
    { payload: response }: any
  ): BotState => ({
    ...state,
    response,
  }),
  [RESET_RESPONSE]: (state: BotState): BotState => ({
    ...state,
    response: null,
  }),
}

export const bot = handleActions(reducers, initialState)
