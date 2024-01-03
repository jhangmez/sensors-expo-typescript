import React, { useState } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { Barometer } from 'expo-sensors'
import { Subscription } from '@utils/types'
import { Button } from 'react-native-paper'

export default function App() {
  const [{ pressure, relativeAltitude }, setData] = useState({
    pressure: 0,
    relativeAltitude: 0
  })
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  const toggleListener = () => {
    subscription ? unsubscribe() : subscribe()
  }

  const subscribe = () => {
    setSubscription(
      Barometer.addListener(({ pressure, relativeAltitude }) => {
        setData({
          pressure,
          relativeAltitude: relativeAltitude || 0
        })
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        Barometer: Listener {subscription ? 'ACTIVE' : 'INACTIVE'}
      </Text>
      <Text>Pressure: {pressure} hPa</Text>
      <Text>
        Relative Altitude:{' '}
        {Platform.OS === 'ios'
          ? `${relativeAltitude} m`
          : `Only available on iOS`}
      </Text>
      <Button onPress={toggleListener} style={styles.button}>
        <Text style={{ color: '#FFFFFF' }}>Toggle listener</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A6C30',
    padding: 4,
    marginTop: 10
  },
  title: {
    textAlign: 'center',
    color: '#002108',
    fontWeight: '700',
    marginBottom: 10
  },
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 20
  }
})
