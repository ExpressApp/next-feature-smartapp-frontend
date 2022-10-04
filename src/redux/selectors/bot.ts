import { createSelector } from 'reselect'
import { AppState } from '../../types'

export const getFeaturesMenu = createSelector(
  [(state: AppState) => state.bot.features],
  features => features,
)

export const getFeatureBotResponse = createSelector(
  [(state: AppState) => state.bot.response],
  response => response,
)
