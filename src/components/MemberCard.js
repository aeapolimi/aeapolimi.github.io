import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

import logo from "../images/tessera_AEA.png"

import 'fontsource-roboto';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    marginTop: "85px",
    position: "absolute",
    marginLeft: "200px",
    color: "white",
    textTransform: "uppercase",
    textDecoration: "underline",
    // fontSize: "20px"
  },
  view: {
    width: '100%',
    height: '100%',
    padding: 0,
  },
  image: {
    objectFit: 'cover',
  }
});

// Create Document Component
const MemberCard = (props) => (
  <Document>
    <Page size="A6" style={styles.page} orientation="landscape" object-fit="fill">
        <View style={styles.view}>
            <Image src={logo} style={styles.image}/>
        </View>
        <View style={styles.section}>
            <Text>{props.username}</Text>
        </View>
    </Page>
  </Document>
);

export default MemberCard;