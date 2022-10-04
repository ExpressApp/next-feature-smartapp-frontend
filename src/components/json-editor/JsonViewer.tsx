import { useEffect, useRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import { ReactComponent as CopyIcon } from '../../assets/copy.svg'
import JSONEditor from 'jsoneditor'
import '../../../node_modules/jsoneditor/dist/jsoneditor.min.css'
import './JsonViewer.scss'

export default function JsonViewer(props) {
  const container = useRef(null)

  const copyToClipboardJson = obj => {
    const container = document.createElement('textarea')

    container.innerHTML = JSON.stringify(obj, null, '  ')
    document.body.appendChild(container)

    container.select()
    document.execCommand('copy')
    document.body.removeChild(container)
  }

  useEffect(() => {
    const editor = new JSONEditor(container.current, { mode: 'view', enableTransform: true })

    if (props.json) editor.set(props.json)

    const button = document.createElement('button')
    button.className = 'copy-to-clipboard'
    button.innerHTML = ReactDOMServer.renderToStaticMarkup(<CopyIcon height='22' width='22' />)
    button.addEventListener('click', () => copyToClipboardJson(props.json))
    button.setAttribute('title', 'Copy To Clipboard')

    const menu = document.querySelector('.jsoneditor-menu')
    const search = document.querySelector('.jsoneditor-menu .jsoneditor-search')

    menu.insertBefore(button, search)

    return () => editor.destroy()
  }, [props.json])

  return <div className='json-viewer' ref={container} />
}
