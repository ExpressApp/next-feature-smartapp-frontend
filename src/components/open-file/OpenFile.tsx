import FeaturePageHeader from '../feature-page-header/FeaturePageHeader'
import { OPEN_FILE_FEATURE } from '../../constants'
import classnames from "classnames"
import { useState } from "react"
import { Bridge as bridge } from "@expressms/smartapp-sdk"

export default function OpenFile() {
  const [inputValue, setInputValue] = useState('')
  const handleClick = () => {
    if (!inputValue) return
    console.error({inputValue: JSON.parse(inputValue)})

    bridge?.sendClientEvent({
      method: OPEN_FILE_FEATURE.method,
      params: JSON.parse(inputValue),
    })
  }

  return (
    <div className="feature-page">
      <FeaturePageHeader name={OPEN_FILE_FEATURE.name} />
      <input
        className={classnames({
          input: true,
        })}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        type={'text'}
      />
      <div className='form-buttons'>
        <button
          className={classnames({
            'btn--submit': true,
            'btn--submit-disabled': !inputValue,
          })}
          disabled={!inputValue}
          type="submit"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
