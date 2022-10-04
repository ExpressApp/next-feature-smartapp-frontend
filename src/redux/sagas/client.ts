import { Bridge as bridge, ready, sendMessage } from '@expressms/smartapp-sdk'
import { ClientEventMethod, ExpressMethodResponse, File } from '../../types'
import { put } from 'redux-saga/effects'
import {
  sendExpressEventActionType,
  sendExpressEventSuccess,
  sendMessageExpressEventActionType,
  setMeta,
  uploadFileActionType,
  uploadFilesActionType,
  uploadFilesSuccess,
  uploadFileSuccess,
} from '../actions/client'
import { setRedirectPath, setTopLoader } from '../actions/ui'
import { OPEN_SMART_APP_META_FEATURE } from '../../constants'

export function* uploadFileSaga({ payload: { type } }: uploadFileActionType) {
  try {
    const response = yield bridge?.sendClientEvent({
      method: ClientEventMethod.UPLOAD_FILE,
      params: { type },
    })

    if (!response.payload?.record) return

    const file: File = {
      ...response.payload.record,
    }

    yield put(uploadFileSuccess(file))
  } catch (e) {
    console.error(`uploadFileSaga error: ${e}`)
  }
}

export function* uploadFilesSaga({ payload: { type } }: uploadFilesActionType) {
  try {
    const response = yield bridge?.sendClientEvent({
      method: ClientEventMethod.UPLOAD_FILES,
      params: { type },
    })

    if (!response.payload.records.length) return

    const files: File[] = response.payload.records

    yield put(uploadFilesSuccess(files))
  } catch (e) {
    console.error(`uploadFilesSaga error: ${e}`)
  }
}

export function* sendExpressEventSaga(action: sendExpressEventActionType) {
  try {
    yield put(setTopLoader(true))

    const response: ExpressMethodResponse = yield bridge?.sendClientEvent(action.payload)

    yield put(sendExpressEventSuccess(response))
  } catch (e: any) {
    console.error('sendExpressEventSaga error', e)
  } finally {
    yield put(setTopLoader(false))
  }
}

export function* sendMessageExpressEventSaga(action: sendMessageExpressEventActionType) {
  try {
    yield put(setTopLoader(true))

    const response: ExpressMethodResponse = yield sendMessage(action.payload)

    yield put(sendExpressEventSuccess(response))
  } catch (e: any) {
    console.error('sendMessageExpressEventSaga error', e)
  } finally {
    yield put(setTopLoader(false))
  }
}

export function* sendExpressReadyEventSaga() {
  try {
    const response = yield ready(300)

    if (response?.payload?.[OPEN_SMART_APP_META_FEATURE.field]) {
      yield put(setRedirectPath(`/${OPEN_SMART_APP_META_FEATURE.method}`))
      yield put(setMeta(response))
    } else {
      setRedirectPath('/')
    }
  } catch (e) {
    console.error('sendExpressReadyEventSaga', e)
  }
}
