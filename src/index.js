import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppBackground from '@/components/background'
import InfoBox from '@/components/infobox'

const App = () => {
  return (
    <>
      <AppBackground />
      <InfoBox />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
