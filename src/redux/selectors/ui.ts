import { createSelector } from 'reselect'
import { AppState } from '../../types'

export const getTopLoader = createSelector(
  [(state: AppState) => state.ui.topLoader],
  topLoader => topLoader
)

export const getMainLoader = createSelector(
  [(state: AppState) => state.ui.mainLoader],
  mainLoader => mainLoader
)

export const getRedirectPath = createSelector(
  [(state: AppState) => state.ui.redirectPath],
  redirectPath => redirectPath
)
