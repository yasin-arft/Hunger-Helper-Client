import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutesProvider from './providers/RoutesProvider.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RoutesProvider />
    </AuthProvider>
  </React.StrictMode>,
)
