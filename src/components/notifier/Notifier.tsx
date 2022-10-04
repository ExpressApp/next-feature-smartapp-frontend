import { BotMethodResponse } from '../../types'
import './Notifier.scss'

export default function Notifier({ result, status }: BotMethodResponse['payload']) {
  return (
    <div className={'notifier'}>
      <span className={'notifier__text'}>{result}</span>
      <span className={'notifier__text'}>Status: {status}</span>
    </div>
  )
}
