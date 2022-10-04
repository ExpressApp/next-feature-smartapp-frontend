import FeaturePageHeader from '../feature-page-header/FeaturePageHeader'
import { EXPRESS_NOTIFICATION_FEATURE } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { getExpressNotifications } from '../../redux/selectors/client'
import './ExpressNotifications.scss'
import { resetExpressNotificationSuccess } from '../../redux/actions/client'

export default function ExpressNotifications() {
  const dispatch = useDispatch()
  const expressNotifications = useSelector(getExpressNotifications)
  const handleClear = () => {
    dispatch(resetExpressNotificationSuccess())
  }

  return (
    <>
      <div className='feature-page'>
        <FeaturePageHeader name={EXPRESS_NOTIFICATION_FEATURE.name} />
        <div className='feature-page__notifications'>
          {!!expressNotifications.length ? (
            <>
              <div
                className='notifications__clear-button'
                onClick={handleClear}
                title='Clear notifications'
              >
                Clear
              </div>
              {expressNotifications.map((item, i) => (
                <div className='notifications__item' key={i}>
                  {JSON.stringify(item?.data, null, 2)}
                </div>
              ))}
            </>
          ) : (
            <div className='feature-page__notifications-placeholder'>
              New notifications will appear here...
            </div>
          )}
        </div>
      </div>
    </>
  )
}
