import { StyleSheet } from 'react-native'
import { useBarometer } from '@hooks/useSensors'
import EditScreenInfo from '@components/EditScreenInfo'
import { Text, View } from '@components/Themed'

export default function BarometerScreen() {
  const { data, _unsubscribe } = useBarometer()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Barometer</Text>
      <Text>DATA DE pressure:{data.pressure}</Text>
      <Text>DATA DE pressure:{data.relativeAltitude}</Text>
      {/* <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='app/(tabs)/two.tsx' /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
