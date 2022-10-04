import { createAction } from 'redux-actions'
import { BotEvent, BotFeatures, BotMethodResponse, ExpressMethodResponse } from '../../types'

export const LOAD_FEATURES = 'LOAD_FEATURES'
export const LOAD_FEATURES_SUCCESS = 'LOAD_FEATURES_SUCCESS'
export const RESET_RESPONSE = 'RESET_RESPONSE'
export const SEND_FEATURE_BOT_EVENT = 'SEND_FEATURE_BOT_EVENT'
export const SEND_FEATURE_BOT_EVENT_SUCCESS = 'SEND_FEATURE_BOT_EVENT_SUCCESS'

export const loadFeatures = createAction(LOAD_FEATURES, () => {
})
export const loadFeaturesSuccess = createAction(LOAD_FEATURES_SUCCESS, (features: BotFeatures) => features)
export const resetFeatures = createAction(RESET_RESPONSE, () => {
})
export const sendFeatureBotEvent = createAction(SEND_FEATURE_BOT_EVENT, (botEvent: BotEvent) => botEvent)
export const sendFeatureBotEventSuccess = createAction(
  SEND_FEATURE_BOT_EVENT_SUCCESS,
  (response: BotMethodResponse | ExpressMethodResponse | null) => response,
)

export type loadFeaturesSuccessActionType = ReturnType<typeof loadFeaturesSuccess>
export type sendFeatureBotEventSuccessActionType = ReturnType<typeof sendFeatureBotEventSuccess>
