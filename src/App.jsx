import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { Left, Right } from './components'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer'

// Define your main component that includes the child components
const MainComponent = () => (
  <Document>
    <Page>
      <Left />
      <Right />
    </Page>
  </Document>
)

// Define the styles for your PDF
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0077cc',
    color: '#ffffff',
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    margin: 10,
  },
  page: {
    backgroundColor: '#ffffff',
  },
})

function App() {
  const generatePDF = () => {
    const pdf = (
      <PDFViewer>
        <MainComponent />
      </PDFViewer>
    )

    const blobPromise = pdfjsLib
      .getDocument({ data: pdf })
      .promise.then((doc) => {
        return doc.getBlob()
      })

    blobPromise.then((blob) => {
      const url = URL.createObjectURL(blob)
      window.open(url, '_blank')
    })
  }

  return (
    <Wrapper>
      <Left />
      <Right />
      {/* <button onClick={generatePDF}>Generate PDF</button> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media screen and (min-width: 680px) {
    display: grid;
    grid-template-columns: 1.7fr 3fr;
    /* gap: 1rem; */
    border-radius: 10px;
  }
`

export default App
