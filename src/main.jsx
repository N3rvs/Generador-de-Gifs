import React from 'react'
import ReactDOM from 'react-dom/client'
import {GitApp} from './GitApp'
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GitApp />
  </React.StrictMode>,
)