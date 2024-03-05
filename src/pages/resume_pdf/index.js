import React from 'react'

import { Document, Page, View, Text } from '@react-pdf/renderer'

import Experience from './components/experience'
import TechStack from './components/techstack'
import { styles } from './style'

export default function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={[styles.resumeWrapper]} wrap={false}>
        <View style={[styles.resumeBody]}>
          <View style={[styles.title]}>
            <Text style={styles.h2}>Senior Software Engineer</Text>
          </View>
          <View style={[styles.name]}>
            <Text style={styles.h1}>NGUYEN VU QUYEN</Text>
          </View>

          <View style={styles.inline}>
            <View style={styles.leftGrid}>
              <View style={styles.item}>
                <Text style={styles.h5}>Contact</Text>
                <Text>leo.quyennguyen@gmail.com</Text>
                <Text>(+84) 869225891</Text>
                <Text>Ho Chi Minh City</Text>
              </View>

              <View style={styles.item}>
                <Text style={styles.h5}>Education</Text>
                <View style={[styles.paddingBottom5]}>
                  <Text style={[styles.h6]}>The Degree Of Master</Text>
                  <Text>Computer Engineering</Text>
                  <Text>Hanoi University of Science and Technology</Text>
                  <Text>September 2016 - October 2018</Text>
                  <Text>Hanoi</Text>
                </View>
                <View style={[styles.paddingBottom5]}>
                  <Text style={[styles.h6]}>The Degree Of Engineer</Text>
                  <Text>Information Technology</Text>
                  <Text>Hanoi University of Civil Engineering</Text>
                  <Text>September 2009 - April 2014</Text>
                  <Text>Hanoi</Text>
                </View>
              </View>

              <View style={styles.item}>
                <Text style={styles.h5}>Languages</Text>
                <Text>Native: Vietnamese</Text>
                <Text>Foreign: English</Text>
              </View>

              <TechStack />
            </View>

            <View style={styles.rightGrid}>
              <Experience />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
