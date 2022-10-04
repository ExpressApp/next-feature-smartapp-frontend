import { createSelector } from 'reselect'
import { AppState } from '../../types'

export const getAttachments = createSelector(
  [(state: AppState) => state.client.attachments],
  features => features,
)

export const getExpressResponse = createSelector(
  [(state: AppState) => state.client.response],
  response => response,
)

export const getMeta = createSelector(
  [(state: AppState) => state.client.meta],
  meta => meta,
)

export const getExpressNotifications = createSelector(
  [(state: AppState) => state.client.notifications],
  notificaions => notificaions,
)
