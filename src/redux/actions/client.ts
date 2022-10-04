import { createAction } from 'redux-actions'
import { ExpressEvent, ExpressMethodResponse, ExpressNotification, File, SendMessageActionPayload } from '../../types'

export const UPLOAD_FILE = 'UPLOAD_FILE'
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS'
export const UPLOAD_FILES = 'UPLOAD_FILES'
export const UPLOAD_FILES_SUCCESS = 'UPLOAD_FILES_SUCCESS'
export const REMOVE_FILE = 'REMOVE_FILE'
export const REMOVE_FILE_SUCCESS = 'REMOVE_FILE_SUCCESS'
export const RESET_ATTACHMENTS = 'RESET_ATTACHMENTS'
export const SEND_EXPRESS_EVENT = 'SEND_EXPRESS_EVENT'
export const SEND_MESSAGE_EXPRESS_EVENT = 'SEND_MESSAGE_EXPRESS_EVENT'
export const SEND_EXPRESS_EVENT_SUCCESS = 'SEND_EXPRESS_EVENT_SUCCESS'
export const SET_EXPRESS_NOTIFICATION_SUCCESS = 'SET_NOTIFICATION_SUCCESS'
export const RESET_EXPRESS_NOTIFICATION_SUCCESS = 'RESET_EXPRESS_NOTIFICATION_SUCCESS'
export const RESET_EXPRESS_RESPONSE = 'RESET_EXPRESS_RESPONSE'
export const SEND_EXPRESS_READY_EVENT = 'SEND_EXPRESS_READY_EVENT'
export const SET_META = 'SET_META'

export const uploadFile = createAction(UPLOAD_FILE, (type: string = '') => ({ type }))
export const uploadFileSuccess = createAction(UPLOAD_FILE_SUCCESS, (file: File) => (file))
export const uploadFiles = createAction(UPLOAD_FILES, (type: string = '') => ({ type }))
export const uploadFilesSuccess = createAction(UPLOAD_FILES_SUCCESS, (files: File[]) => (files))
export const removeFile = createAction(REMOVE_FILE, (id: number) => id)
export const removeFileSuccess = createAction(REMOVE_FILE_SUCCESS, (id: number) => id)
export const resetAttachments = createAction(RESET_ATTACHMENTS, () => {})
export const sendExpressEvent = createAction(SEND_EXPRESS_EVENT, (expressEvent: ExpressEvent) => expressEvent)
export const sendMessageExpressEvent = createAction(
  SEND_MESSAGE_EXPRESS_EVENT, (payload: SendMessageActionPayload) => payload
)
export const sendExpressEventSuccess = createAction(
  SEND_EXPRESS_EVENT_SUCCESS,
  (response: ExpressMethodResponse | null) => response,
)
export const setExpressNotificationSuccess = createAction(
  SET_EXPRESS_NOTIFICATION_SUCCESS,
  (notification: ExpressNotification | null) => notification,
)
export const resetExpressNotificationSuccess = createAction(
  RESET_EXPRESS_NOTIFICATION_SUCCESS,
  () => {
  },
)
export const setMeta = createAction(
  SET_META,
  (meta: ExpressMethodResponse | null) => meta,
)
export const resetExpressResponse = createAction(RESET_EXPRESS_RESPONSE, () => {})
export const sendReadyEvent = createAction(SEND_EXPRESS_READY_EVENT, () => {})

export type uploadFileActionType = ReturnType<typeof uploadFile>
export type uploadFileSuccessActionType = ReturnType<typeof uploadFileSuccess>
export type uploadFilesActionType = ReturnType<typeof uploadFiles>
export type uploadFilesSuccessActionType = ReturnType<typeof uploadFilesSuccess>
export type removeFileActionType = ReturnType<typeof removeFile>
export type removeFileSuccessActionType = ReturnType<typeof removeFileSuccess>
export type sendExpressEventActionType = ReturnType<typeof sendExpressEvent>
export type sendMessageExpressEventActionType = ReturnType<typeof sendMessageExpressEvent>
export type sendExpressEventSuccessActionType = ReturnType<typeof sendExpressEventSuccess>
export type setExpressNotificationSuccessActionType = ReturnType<typeof setExpressNotificationSuccess>
export type setMetaActionType = ReturnType<typeof setMeta>
