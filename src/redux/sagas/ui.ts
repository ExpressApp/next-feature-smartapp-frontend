import { put } from 'redux-saga/effects'
import { setMainLoader } from '../actions/ui'
import { Bridge as bridge } from '@expressms/smartapp-sdk'
import { BotFeaturesResponse } from '../../types'
import { MENU_EVENT } from '../../constants'
import { loadFeaturesSuccess } from '../actions/bot'

export function* loadFeaturesSaga() {
  try {
    yield put(setMainLoader(true))

    const response: BotFeaturesResponse = yield bridge.sendBotEvent(MENU_EVENT)

    if (response) yield put(loadFeaturesSuccess(response.payload.result))
  } catch (e: any) {
    console.error('loadFeaturesSaga error', e)
  } finally {
    yield put(setMainLoader(false))
  }
}
