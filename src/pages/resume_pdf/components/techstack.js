import React from 'react'

import techstacks from '@leoo/static/data/techstacks.json'
import { View, Text } from '@react-pdf/renderer'

import { styles } from '../style'

export default function TechStack() {
  return (
    <View style={styles.item}>
      <Text style={styles.h5}>Tech Stacks</Text>
      {techstacks.map((category, categoryId) => {
        return (
          <View style={[styles.paddingBottom5]} key={categoryId}>
            <Text style={[styles.h6]}>{category.name}</Text>
            {category.items.map((item, itemId) => {
              return (
                <React.Fragment key={`${categoryId}_${itemId}`}>
                  <Text>{item}</Text>
                </React.Fragment>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}
