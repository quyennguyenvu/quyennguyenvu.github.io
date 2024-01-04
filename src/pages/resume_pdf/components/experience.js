import React from 'react'

import experience from '@leoo/static/data/experience.json'
import { View, Text } from '@react-pdf/renderer'

import BulletItem from './bulletItem'
import { styles } from '../style'

export default function Experience() {
  return (
    <View style={[styles.item]}>
      {experience.map((exp, expId) => {
        return (
          <View style={styles.item} key={expId}>
            <Text style={[styles.h6]}>{exp.title}</Text>
            <Text style={styles.textBold}>{exp.company}</Text>
            <Text>
              {exp.period} / {exp.location}
            </Text>
            {exp.achievements &&
              exp.achievements.map((acm, acmId) => {
                return (
                  <React.Fragment key={`${expId}_${acmId}`}>
                    <BulletItem>{acm}</BulletItem>
                  </React.Fragment>
                )
              })}
          </View>
        )
      })}
    </View>
  )
}
