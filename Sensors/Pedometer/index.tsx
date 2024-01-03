import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { Platform } from 'react-native'
import { Subscription } from '@utils/types'

export default function App() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking')
  const [pastStepCount, setPastStepCount] = useState(0)
  const [currentStepCount, setCurrentStepCount] = useState(0)

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync()
    setIsPedometerAvailable(String(isAvailable))

    if (isAvailable) {
      const end = new Date()
      const start = new Date()
      start.setDate(end.getDate() - 1)

      if (Platform.OS === 'ios') {
        const pastStepCountResult = await Pedometer.getStepCountAsync(
          start,
          end
        )
        if (pastStepCountResult) {
          setPastStepCount(pastStepCountResult.steps)
        }
      }

      return Pedometer.watchStepCount((result) => {
        setCurrentStepCount(result.steps)
      })
    }
  }
  let subscription: Subscription | undefined
  useEffect(() => {
    const fetchData = async () => {
      subscription = await subscribe()
    }

    fetchData()

    return () => subscription && subscription.remove()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      {Platform.OS === 'ios' ? (
        <>
          <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
          <Text>Walk! And watch this go up: {currentStepCount}</Text>
        </>
      ) : (
        <Text>This feature is only available on iOS.</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
