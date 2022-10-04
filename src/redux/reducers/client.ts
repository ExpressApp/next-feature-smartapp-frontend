import { handleActions } from 'redux-actions'
import { ClientState } from '../../types'

import {
  REMOVE_FILE_SUCCESS,
  removeFileSuccessActionType,
  RESET_ATTACHMENTS, RESET_EXPRESS_NOTIFICATION_SUCCESS, RESET_EXPRESS_RESPONSE,
  SEND_EXPRESS_EVENT_SUCCESS,
  sendExpressEventSuccessActionType,
  SET_EXPRESS_NOTIFICATION_SUCCESS, SET_META, setExpressNotificationSuccessActionType, setMetaActionType,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILES_SUCCESS,
  uploadFilesSuccessActionType,
  uploadFileSuccessActionType,
} from '../actions/client'

const initialState: ClientState = {
  attachments: null,
  response: null,
  meta: null,
  notifications: [],
}

const reducers = {
  [UPLOAD_FILE_SUCCESS]: (
    state: ClientState, { payload: file }: uploadFileSuccessActionType,
  ): ClientState => ({
    ...state,
    attachments: [file],
  }),
  [UPLOAD_FILES_SUCCESS]: (
    state: ClientState,
    { payload: files }: uploadFilesSuccessActionType,
  ): ClientState => ({
    ...state,
    attachments: [...files],
  }),
  [REMOVE_FILE_SUCCESS]: (
    state: ClientState, { payload: id }: removeFileSuccessActionType,
  ): ClientState => ({
    ...state,
    attachments: state.attachments.filter(attachment => attachment.fileId !== id),
  }),
  [RESET_ATTACHMENTS]: (
    state: ClientState,
  ): ClientState => ({
    ...state,
    attachments: null,
  }),
  [SET_EXPRESS_NOTIFICATION_SUCCESS]: (
    state: ClientState, { payload }: setExpressNotificationSuccessActionType,
  ): ClientState => ({
    ...state,
    notifications: [payload, ...state.notifications],
  }),
  [RESET_EXPRESS_NOTIFICATION_SUCCESS]: (
    state: ClientState
  ): ClientState => ({
    ...state,
    notifications: [],
  }),
  [SEND_EXPRESS_EVENT_SUCCESS]: (
    state: ClientState, response: sendExpressEventSuccessActionType
  ): ClientState => ({
    ...state,
    response
  }),
  [RESET_EXPRESS_RESPONSE]: (state: ClientState): ClientState => ({
    ...state,
    response: null,
  }),
  [SET_META]: (
    state: ClientState, { payload }: setMetaActionType
  ): ClientState => ({
    ...state,
    meta: payload,
  }),
}

export const client = handleActions<ClientState, any>(reducers, initialState)
