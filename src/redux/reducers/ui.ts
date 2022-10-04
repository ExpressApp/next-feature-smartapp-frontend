import { handleActions } from 'redux-actions'
import { UIState } from '../../types'
import {
  SET_MAIN_LOADER,
  SET_REDIRECT_PATH,
  SET_TOP_LOADER,
  setMainLoaderActionType, setRedirectPathActionType,
  setTopLoaderActionType,
} from '../actions/ui'

const initialState: UIState = {
  topLoader: false,
  mainLoader: false,
  redirectPath: '',
}

const reducers = {
  [SET_TOP_LOADER]: (
    state: UIState, { payload: topLoader }: setTopLoaderActionType
  ): UIState => ({
    ...state, topLoader
  }),
  [SET_MAIN_LOADER]: (
    state: UIState, { payload: mainLoader }: setMainLoaderActionType
  ): UIState => ({
    ...state, mainLoader
  }),
  [SET_REDIRECT_PATH]: (
    state: UIState, { payload: redirectPath }: setRedirectPathActionType
  ): UIState => ({
    ...state, redirectPath
  }),
}

export const ui = handleActions<UIState, any>(reducers, initialState)
