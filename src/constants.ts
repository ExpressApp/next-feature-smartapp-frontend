import {
  ExpressFeature,
  ExpressFeatureMethod,
  ExpressFeatureName,
  InputId,
  InputLabel,
  InputType,
} from './types'

export const EXPRESS_NOTIFICATION_FEATURE = {
  method: 'notification',
  name: 'Express Notification',
}

export const OPEN_SMART_APP_META_FEATURE = {
  name: 'Open Smart App Meta',
  method: 'open_smart_app_meta',
  field: 'openSmartAppMeta',
}

export const SCAN_QR_FEATURE = {
  name: 'Scan QR',
  method: 'scan_qr',
}

export const MENU_EVENT: any = {
  method: 'menu',
  params: {
    text: 'menu',
  },
}

export const INPUT_TYPE: Record<InputType, string> = {
  INPUT_TEXT: 'text',
  INPUT_NUMBER: 'number',
  FILE_PICKER: 'file',
  ARRAY_UUID: 'text',
  UUID: 'text'
}

export const EXPRESS_FEATURES: ExpressFeature[] = [
  {
    method: ExpressFeatureMethod.ADD_CONTACT,
    name: ExpressFeatureName.ADD_CONTACT,
    uiElements: [
      {
        id: InputId.PHONE,
        label: InputLabel.PHONE,
        type: InputType.INPUT_TEXT,
      },
      {
        id: InputId.NAME,
        label: InputLabel.NAME,
        type: InputType.INPUT_TEXT,
      },
    ],
  },
  {
    method: ExpressFeatureMethod.CREATE_PERSONAL_CHAT,
    name: ExpressFeatureName.CREATE_PERSONAL_CHAT,
    uiElements: [{
      id: InputId.HUID,
      label: InputLabel.HUID,
      type: InputType.UUID,
    }],
  },
  {
    method: ExpressFeatureMethod.GET_CONTACT,
    name: ExpressFeatureName.GET_CONTACT,
    uiElements: [{
      id: InputId.PHONE,
      label: InputLabel.PHONE,
      type: InputType.INPUT_TEXT,
    }],
  },
  {
    method: ExpressFeatureMethod.OPEN_SMARTAPP,
    name: ExpressFeatureName.OPEN_SMARTAPP,
    uiElements: [{
      id: InputId.SMARTAPP_ID,
      label: InputLabel.SMARTAPP_ID,
      type: InputType.INPUT_TEXT,
    }],
  },
  {
    method: ExpressFeatureMethod.SEND_MESSAGE,
    name: ExpressFeatureName.SEND_MESSAGE,
    uiElements: [{
      id: InputId.MESSAGE,
      label: InputLabel.MESSAGE,
      type: InputType.INPUT_TEXT,
    }, {
      id: InputId.GROUP_CHAT_ID,
      label: InputLabel.GROUP_CHAT_ID,
      type: InputType.UUID,
    }, {
      id: InputId.USER_HUID,
      label: InputLabel.USER_HUID,
      type: InputType.UUID,
    }],
  },
]
