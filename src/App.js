import logo from './logo.svg';
import './App.css';
import PDFFile from './PDFFile';
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Mydocument.js'
import { Page, Text, Link,Image, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize:24,
    textAlign: "center",
  },
  text: {
    margin:12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header:{
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  link:{
    color:"black"
  }
});

// Create Document Component
const MyDoc = () => (
  <Document>
  <Page style={styles.body}>
    <Text style={styles.header} fixed></Text>
    <Text style={styles.text}>
      Lorem Ipsum is simply <Link style={styles.link} src='#Footnote'>dummy </Link>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Text>
    <Link src='#Footnote'> // Notice the hash symbol
        <Image style={styles.image} src="./images/crazy.png"></Image>
      </Link>
    <Text
      styles={styles.pageNumber}
      render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`}
      />
  </Page>
  <Page style={styles.body}>
    <Text style={styles.header} fixed></Text>
    <Text style={styles.text}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Text>
    <Text id='Footnote'> // No hash symbol
        You are here because you clicked the link above
      </Text>
    <Text
      styles={styles.pageNumber}
      render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`}
      />
  </Page>
</Document>
);

function App() {
  return (
    <div className="App">
         <PDFViewer>
         <MyDoc />
        </PDFViewer>
        <br/>
            <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
            {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
            }
            </PDFDownloadLink>
      </div>
  );
};


export default App;
