// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <NextUIProvider>
    <main className=" dark text-foreground bg-background">
        <App />
      </main>
    </NextUIProvider>
    </BrowserRouter>

)