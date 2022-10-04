import React, { useEffect, useState } from 'react'
import { Bridge as bridge } from '@expressms/smartapp-sdk'
import MainLoader from './main-loader/MainLoader'
import FeatureSmartapp from './feature-smartapp/FeatureSmartapp'
import { useDispatch, useSelector } from 'react-redux'
import { BotMethodResponse, EventType, ExpressNotification } from '../types'
import { sendReadyEvent, setExpressNotificationSuccess } from '../redux/actions/client'
import Notifier from './notifier/Notifier'
import { getMainLoader } from '../redux/selectors/ui'

export default function Main() {
  const dispatch = useDispatch()
  const [load, setLoad] = useState(true)
  const isMainLoader = useSelector(getMainLoader)
  const [notifier, setNotifier] = useState<BotMethodResponse['payload'] | null>(null)

  useEffect(() => {
    if (load) {
      setLoad(false)
      dispatch(sendReadyEvent())
    }

    bridge?.onReceive(({ type, payload }) => {
      if (typeof payload !== 'object') return

      switch (type) {
        case EventType.SMARTAPP_RPC: {
          setNotifier(payload as BotMethodResponse['payload'])
          setTimeout(() => setNotifier(null), 3000)
          break
        }
        case EventType.NOTIFICATION: {
          dispatch(setExpressNotificationSuccess(payload as ExpressNotification))
          break
        }
      }
    })
  }, [dispatch, load])

  return (
    <>
      {isMainLoader && <MainLoader />}
      <FeatureSmartapp />
      {notifier && <Notifier {...notifier} />}
    </>
  )
}
