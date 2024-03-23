import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { MyStoreApp } from './MyStoreApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyStoreApp />
    </BrowserRouter>
  </React.StrictMode>,
)
