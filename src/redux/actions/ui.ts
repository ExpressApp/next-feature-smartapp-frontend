import { createAction } from 'redux-actions'

export const SET_TOP_LOADER = 'SET_TOP_LOADER'
export const SET_MAIN_LOADER = 'SET_MAIN_LOADER'
export const SET_REDIRECT_PATH = 'SET_REDIRECT_PATH'

export const setTopLoader = createAction(SET_TOP_LOADER, (topLoader: boolean) => topLoader)
export const setMainLoader = createAction(SET_MAIN_LOADER, (mainLoader: boolean) => mainLoader)
export const setRedirectPath = createAction(SET_REDIRECT_PATH, (redirectPath: string) => redirectPath)

export type setTopLoaderActionType = ReturnType<typeof setTopLoader>
export type setMainLoaderActionType = ReturnType<typeof setMainLoader>
export type setRedirectPathActionType = ReturnType<typeof setRedirectPath>
