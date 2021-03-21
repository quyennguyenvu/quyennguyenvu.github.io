import React from 'react'
import Particles from 'react-particles-js'
import { particles } from '@/config/particles'

export default function AppBackGround() {
  return (
    <>
      <Particles params={particles} />
      <div id="stars1" className="stars"></div>
      <div id="stars2" className="stars"></div>
      <div id="stars3" className="stars"></div>
    </>
  )
}
