import { Input } from '../types'

export interface FormValues {
  [key: string]: string | undefined
}

export const getFormInitialValues: (uiElements: Input[]) => FormValues = uiElements => {
  return uiElements?.reduce((acc: FormValues, item) => {
    acc[item.id] = undefined
    return acc
  }, {})
}
