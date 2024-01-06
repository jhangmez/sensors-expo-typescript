import { StyleSheet } from 'react-native'
import { useGyroscope } from '@hooks/useSensors'
import EditScreenInfo from '@components/EditScreenInfo'
import { Text, View } from '@components/Themed'

export default function GyroscopeScreen() {
  const { data, _slow, _fast } = useGyroscope()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giroscopio</Text>
      <Text>DATA DE x:{data.x}</Text>
      <Text>DATA DE y:{data.y}</Text>
      <Text>DATA DE z:{data.z}</Text>
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
