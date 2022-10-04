import FeaturePageHeader from '../feature-page-header/FeaturePageHeader'
import { OPEN_SMART_APP_META_FEATURE } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setRedirectPath } from '../../redux/actions/ui'
import { getMeta } from '../../redux/selectors/client'
import { setMeta } from '../../redux/actions/client'

export default function MetaPage() {
  const dispatch = useDispatch()
  const meta = useSelector(getMeta)

  useEffect(() => {
    return () => {
      dispatch(setRedirectPath(''))
      dispatch(setMeta(null))
    }
  }, [dispatch])

  return (
    <>
      <div className='feature-page'>
        <FeaturePageHeader name={OPEN_SMART_APP_META_FEATURE.name} />
        {meta && (
          <div className='response-express'>
            {JSON.stringify(meta.payload, null, 2)}
          </div>
        )}
      </div>
    </>
  )
}
