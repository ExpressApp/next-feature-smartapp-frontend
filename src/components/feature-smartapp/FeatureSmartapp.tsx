import './FeatureSmartapp.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFeaturesMenu } from '../../redux/selectors/bot'
import { Link, Route, Switch } from 'react-router-dom'
import FeaturePage from '../feature-page/FeaturePage'
import { loadFeatures } from '../../redux/actions/bot'
import TopLoader from '../top-loader/TopLoader'
import { ReactComponent as BotxIcon } from '../../assets/botx-icon.svg'
import {
  EXPRESS_FEATURES,
  EXPRESS_NOTIFICATION_FEATURE,
  OPEN_FILE_FEATURE,
  OPEN_SMART_APP_META_FEATURE,
  SCAN_QR_FEATURE,
} from '../../constants'
import ExpressNotifications from '../express-notifications/ExpressNotifications'
import MetaPage from '../meta-page/MetaPage'
import { getRedirectPath } from '../../redux/selectors/ui'
import { history } from '../../redux/router'
import { ScanQRPage } from '../scan-qr-page/ScanQRPage'
import OpenFile from '../open-file/OpenFile'
import { ExpressFeatureMethod } from '../../types'
import { openClientSettings, useQuery } from '@expressms/smartapp-sdk'

export default function FeatureSmartapp() {
  const dispatch = useDispatch()
  const features = useSelector(getFeaturesMenu)
  const redirectPath = useSelector(getRedirectPath)
  const { platform } = useQuery()

  useEffect(() => {
    if (!features) dispatch(loadFeatures())
  }, [dispatch, features])

  useEffect(() => {
    if (redirectPath) history.push(redirectPath)
  }, [dispatch, redirectPath])

  return (
    <div className="feature-smartapp">
      <div className="header">
        <span className="header__content">
          <BotxIcon className="header__icon" height={20} width={20} />
          <span className="header__text">Feature Smartapp</span>
        </span>
      </div>
      <TopLoader />
      <section className="feature-smartapp__menu">
        <Switch>
          {features?.map(item => (
            <Route key={`${item.method}-route`} path={`/${item.method}`}>
              <FeaturePage {...item} />
            </Route>
          ))}
          {EXPRESS_FEATURES.map(item => (
            <Route key={`${item.method}-route`} path={`/${item.method}`}>
              <FeaturePage {...item} />
            </Route>
          ))}
          <Route key={`${OPEN_SMART_APP_META_FEATURE.method}-route`} path={`/${OPEN_SMART_APP_META_FEATURE.method}`}>
            <MetaPage />
          </Route>
          <Route key={`${EXPRESS_NOTIFICATION_FEATURE.method}-route`} path={`/${EXPRESS_NOTIFICATION_FEATURE.method}`}>
            <ExpressNotifications />
          </Route>
          <Route key={`${SCAN_QR_FEATURE.method}-route`} path={`/${SCAN_QR_FEATURE.method}`}>
            <ScanQRPage />
          </Route>
          <Route key={`${OPEN_FILE_FEATURE.method}-route`} path={`/${OPEN_FILE_FEATURE.method}`}>
            <OpenFile />
          </Route>
          <Route path={'/'}>
            {features?.map(item => (
              <Link className="menu-item" key={`${item.method}-link`} to={`/${item.method}`}>
                {item.name}
              </Link>
            ))}
            {EXPRESS_FEATURES.map(item => {
              if (item.method === ExpressFeatureMethod.OPEN_CLIENT_SETTINGS) {
                return (
                  <div className="menu-item" onClick={() => {
                    if (platform !== 'web') {
                      openClientSettings()
                    } else {
                      alert('Feature is unavailable on web client')
                    }
                  }}>
                    {item.name}
                  </div>
                )
              } else {
                return (
                  <Link className="menu-item" key={`${item.method}-link`} to={`/${item.method}`}>
                    {item.name}
                  </Link>)}
              }
            )}
            <Link
                className="menu-item"
                key={`${EXPRESS_NOTIFICATION_FEATURE.method}-link`}
                to={`/${EXPRESS_NOTIFICATION_FEATURE.method}`}
              >
                {EXPRESS_NOTIFICATION_FEATURE.name}
            </Link>
            <Link className="menu-item" key={`${SCAN_QR_FEATURE.method}-link`} to={`/${SCAN_QR_FEATURE.method}`}>
                {SCAN_QR_FEATURE.name}
            </Link>
          </Route>
        </Switch>
      </section>
    </div>
  )
}
