import React from 'react'

import { View, Text } from '@react-pdf/renderer'

import { styles } from '../style'

const BulletItem = ({ children }) => {
  return (
    <View style={styles.row}>
      <View style={styles.bullet}>
        <Text>{'\u2022' + ' '}</Text>
      </View>
      <Text>{children}</Text>
    </View>
  )
}

export default BulletItem
