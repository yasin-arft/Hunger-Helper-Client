import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutesProvider from './providers/RoutesProvider.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.baseURL = import.meta.env.VITE_ServerBaseUrl;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}><AuthProvider>
      <RoutesProvider />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
