import { put } from 'redux-saga/effects'
import { setMainLoader } from '../actions/ui'
import { BotMethodResponse } from '../../types'
import { Bridge as bridge } from '@expressms/smartapp-sdk'
import { sendFeatureBotEventSuccess } from '../actions/bot'

export function* sendFeatureBotEventSaga(action) {
  try {
    yield put(setMainLoader(true))

    const response: BotMethodResponse = yield bridge?.sendBotEvent(action.payload)

    yield put(sendFeatureBotEventSuccess(response))
  } catch (e: any) {
    console.error('sendFeatureBotEventSaga error', e)
  } finally {
    yield put(setMainLoader(false))
  }
}
