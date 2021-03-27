import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

import logo from "../images/AEAtondo_trasparente.png"

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    // backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    marginTop: "130px"
  },
  image: {
    width: '60%',
    padding: 10,
  },
});

// Create Document Component
const MemberCard = (props) => (
  <Document>
    <Page size="A6" style={styles.page} orientation="landscape">
        <View style={styles.image}>
            <Image src={logo} />
        </View>
        <View style={styles.section}>
            <Text>{props.username}</Text>
        </View>
    </Page>
  </Document>
);

export default MemberCard;