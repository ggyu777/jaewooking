import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
});

const PDFFile = () => {
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed></Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
      <Text
        styles={styles.pageNumber}
        render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`}
        />
    </Page>
  </Document>;
};

export default PDFFile;