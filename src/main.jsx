import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import generatePDF from './components/GeneratePDF.jsx'

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer'

// Render your app
// ReactDOM.render(
//   <Text>
//     This is some text that appears outside the PDF.
//     <button onClick={generatePDF}>Generate PDF</button>
//   </Text>,
//   document.getElementById('root')
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
