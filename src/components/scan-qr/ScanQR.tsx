import { useEffect, useRef } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import './ScanQR.scss'

export default function ScanQR({
  onScanSuccess,
  onScanFailure,
}: {
  onScanSuccess: (text: string, result: any) => void
  onScanFailure: (error: string) => void
}) {
  const config = useRef<any>({
    fps: 10,
    qrbox: 250,
    disableFlip: true,
  })

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner('reader', config.current, false)
    html5QrcodeScanner.render(onScanSuccess, onScanFailure)

    return () => {}
    // eslint-disable-next-line
  }, [])

  return <div id="reader" />
}
