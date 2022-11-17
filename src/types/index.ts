import { RouterState } from 'connected-react-router'

export enum EventType {
  SMARTAPP_RPC = 'smartapp_rpc',
  NOTIFICATION = 'notification',
  OPEN_SMARTAPP_META = 'open_smart_app_meta',
}

export enum BotFeatureMethod {
  ECHO = 'echo',
  UPDATE_APP_COUNTER = 'update_app_counter',
  SEND_NOTIFICATION = 'send_notification',
  ECHO_FILE = 'echo_file',
  ECHO_FILES = 'echo_files',
  SEARCH_USERS = 'search_users',
}

export enum ExpressFeatureMethod {
  ADD_CONTACT = 'add_contact',
  CREATE_PERSONAL_CHAT = 'create_personal_chat',
  SEND_MESSAGE = 'send_message',
  GET_CONTACT = 'get_contact',
  OPEN_SMARTAPP = 'open_smart_app',
  OPEN_CLIENT_SETTINGS = 'open_client_settings',
  GET_CHATS = 'get_chats',
}

export enum ExpressFeatureName {
  ADD_CONTACT = 'Add Contact',
  CREATE_PERSONAL_CHAT = 'Create Personal Chat',
  SEND_MESSAGE = 'Send Message to Group Chat or User',
  GET_CONTACT = 'Get Contact',
  OPEN_SMARTAPP = 'Open SmartApp',
  OPEN_CLIENT_SETTINGS = 'Open Client Settings',
  GET_CHATS = 'Get Chats',
}

export enum ClientEventMethod {
  READY = 'ready',
  UPLOAD_FILE = 'upload_file',
  UPLOAD_FILES = 'upload_files',
}

export interface BotEvent {
  method: BotFeatureMethod | 'menu'
  params: any
  files?: File[]
  timeout?: number
}

export interface ExpressEvent {
  method: ExpressFeatureMethod
  params: any
}

export interface SendMessageActionPayload {
  userHuid: string | null,
  groupChatId: string | null,
  messageBody: string,
  messageMeta?: {}
}

export enum InputId {
  TEXT = 'text',
  COUNT = 'count',
  DELAY = 'delay',
  FILE = 'file',
  FILES = 'files',
  HUIDS = 'huids',
  PHONE = 'phone',
  NAME = 'name',
  HUID = 'huid',
  SMARTAPP_ID = 'appId',
  MESSAGE = 'message',
  GROUP_CHAT_ID = 'groupChatId',
  USER_HUID = 'userHuid',
  FILTER = 'filter',
}

export enum InputLabel {
  TEXT = 'Text',
  COUNT = 'Count',
  DELAY = 'Delay',
  FILE = 'File',
  FILES = 'Files',
  HUIDS = 'Huids',
  PHONE = 'Phone',
  NAME = 'Name',
  HUID = 'Huid',
  SMARTAPP_ID = 'Smartapp ID',
  MESSAGE = 'Message',
  GROUP_CHAT_ID = 'Group chat id',
  USER_HUID = 'User huid',
  FILTER = 'Filter',
}

export enum InputType {
  INPUT_TEXT = 'INPUT_TEXT',
  INPUT_NUMBER = 'INPUT_NUMBER',
  FILE_PICKER = 'FILE_PICKER',
  ARRAY_UUID = 'ARRAY_UUID',
  UUID = 'UUID',
}

export interface Input {
  id: InputId | string
  label: InputLabel
  type: InputType
}

export interface BotFeature {
  method: BotFeatureMethod
  name: string
  uiElements: Input[]
}

export type ExpressFeature = BotFeature | {
  method: ExpressFeatureMethod
  name: ExpressFeatureName
  uiElements: Input[]
}

export type BotFeatures = BotFeature[] | null

export interface BotMethodResponse {
  type: EventType.SMARTAPP_RPC | string,
  files: File[]
  payload: {
    result: string,
    status: 'ok' | 'error'
  }
}

export type BotFeaturesResponse = BotMethodResponse & {
  payload: {
    result: BotFeature[]
  }
}

export interface ExpressMethodResponse {
  ref?: string
  payload: any
}

export interface ExpressNotification {
  ref: null
  type: 'notification'
  data: object
}

export interface File {
  type?: string
  file?: string
  fileMimeType?: string
  fileName?: string
  filePreview?: string
  filePreviewHeight?: number
  filePreviewWidth?: number
  fileSize: number
  fileHash?: string
  fileEncryptionAlgo?: string
  chunkSize?: number
  fileId?: any
  key?: object
}

export interface UIState {
  topLoader: boolean
  mainLoader: boolean
  redirectPath: string
}

export interface BotState {
  features: BotFeatures
  response:  BotMethodResponse | null
  notifications: BotMethodResponse[] | null
}

export interface ClientState {
  attachments: File[] | null
  response: ExpressMethodResponse | null
  meta: ExpressMethodResponse | null
  notifications: ExpressNotification[] | null
}

export interface AppState {
  ui: UIState
  bot: BotState
  client: ClientState
  router: RouterState
}
