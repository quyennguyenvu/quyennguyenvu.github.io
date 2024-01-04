import React from 'react'

import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import ReactDOM from 'react-dom/client'

import Router from './routes'
import './style.scss'

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: '"Exo", sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  })
  return (
    <ThemeProvider theme={THEME}>
      <Router />
    </ThemeProvider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
