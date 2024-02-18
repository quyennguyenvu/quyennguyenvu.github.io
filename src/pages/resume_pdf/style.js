import font from '@leoo/static/fonts/Exo/static/Exo-Medium.ttf'
import fontBold from '@leoo/static/fonts/Exo/static/Exo-SemiBold.ttf'
import { StyleSheet, Font } from '@react-pdf/renderer'

const orange = '#ff6c0a'

// disable break words
// ref: https://stackoverflow.com/questions/74373068/pdf-generate-enable-text-wrap-and-disable-break-words
export const chunkSubstr = (str, size) => {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}

Font.registerHyphenationCallback((word) => {
  if (word.length > 16) {
    return chunkSubstr(word, 14)
  } else {
    return [word]
  }
})

Font.register({
  family: 'Exo',
  format: 'truetype',
  fonts: [{ src: font }, { src: fontBold }],
})

export const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    verticalAlign: 'sub',
    borderColor: orange,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  h6: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  expWrapper: {
    marginTop: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  bullet: {
    height: '100%',
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
  resumeWrapper: {
    padding: 0,
    margin: 0,
    backgroundColor: '#fff',
    fontSize: 12,
    lineHeight: '1.4',
    fontFamily: 'Exo',
    fontWeight: 'normal',
  },
  resumeBody: {},
  item: {
    marginBottom: 20,
  },
  name: {
    marginTop: 20,
    position: 'absolute',
    textAlign: 'center',
    display: 'flex',
    alignSelf: 'center',
  },
  title: {
    backgroundColor: '#f2f2f2',
    marginTop: 45,
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center',
    borderTopColor: orange,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderBottomColor: orange,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
  },
  leftGrid: {
    textAlign: 'right',
    maxWidth: '33%',
    flexBasis: '33%',
    padding: 10,
  },
  paddingBottom5: {
    paddingBottom: 5,
  },
  rightGrid: {
    borderLeftColor: orange,
    borderLeftStyle: 'solid',
    borderLeftWidth: 2,
    maxWidth: '67%',
    flexBasis: '67%',
    padding: 10,
  },
})
