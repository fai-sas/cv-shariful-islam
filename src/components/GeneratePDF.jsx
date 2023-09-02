import ReactDOM from 'react-dom'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer'
import Left from './Left'
import Right from './Right'

// Define your child components
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>My Awesome Site</Text>
  </View>
)

// const Body = () => (
//   <View style={styles.body}>
//     <Left />
//     <Right />
//   </View>
// )

// Define your main component that includes the child components
const MainComponent = () => (
  <View>
    <Header />
    <View style={styles.body}>
      <Left />
      <Right />
    </View>
  </View>
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

// Define the function that generates the PDF
function generatePDF() {
  ReactDOM.render(
    <PDFViewer>
      <Document>
        <Page style={styles.page}>
          <MainComponent />
        </Page>
      </Document>
    </PDFViewer>,
    document.getElementById('root')
  )
}

export default generatePDF
