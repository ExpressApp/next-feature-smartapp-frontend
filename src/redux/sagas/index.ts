import { all, takeEvery } from 'redux-saga/effects'
import { loadFeaturesSaga } from './ui'
import { sendFeatureBotEventSaga } from './bot'
import { LOAD_FEATURES, SEND_FEATURE_BOT_EVENT } from '../actions/bot'
import {
  sendExpressEventSaga,
  sendExpressReadyEventSaga,
  sendMessageExpressEventSaga,
  uploadFileSaga,
  uploadFilesSaga,
} from './client'
import {
  SEND_EXPRESS_EVENT,
  SEND_EXPRESS_READY_EVENT,
  SEND_MESSAGE_EXPRESS_EVENT,
  UPLOAD_FILE,
  UPLOAD_FILES,
} from '../actions/client'

function* rootSaga() {
  yield all([
    takeEvery(LOAD_FEATURES, loadFeaturesSaga),
    takeEvery(SEND_FEATURE_BOT_EVENT, sendFeatureBotEventSaga),
    takeEvery(SEND_EXPRESS_EVENT, sendExpressEventSaga),
    takeEvery(SEND_MESSAGE_EXPRESS_EVENT, sendMessageExpressEventSaga),
    takeEvery(SEND_EXPRESS_READY_EVENT, sendExpressReadyEventSaga),
    takeEvery(UPLOAD_FILE, uploadFileSaga),
    takeEvery(UPLOAD_FILES, uploadFilesSaga),
  ])
}

export default rootSaga
