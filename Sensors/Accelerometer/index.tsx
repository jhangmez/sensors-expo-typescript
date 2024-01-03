import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Accelerometer } from 'expo-sensors'
import { Subscription } from '@utils/types'
import { Button } from 'react-native-paper'

const AccelerometerScreen = () => {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0
  })
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  const _slow = () => Accelerometer.setUpdateInterval(1000)
  const _fast = () => Accelerometer.setUpdateInterval(16)

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setData))
  }

  const _unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => {
    _subscribe()
    return () => _unsubscribe()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Accelerometer: (in gs where 1g = 9.81 m/s^2)
      </Text>
      <Text style={styles.text}>x: {x}</Text>
      <Text style={styles.text}>y: {y}</Text>
      <Text style={styles.text}>z: {z}</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={subscription ? _unsubscribe : _subscribe}
          style={styles.button}
        >
          <Text style={{ color: '#FFFFFF' }}>
            {subscription ? 'On' : 'Off'}
          </Text>
        </Button>
        <Button onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text style={{ color: '#FFFFFF' }}>Slow</Text>
        </Button>
        <Button onPress={_fast} style={styles.button}>
          <Text style={{ color: '#FFFFFF' }}>Fast</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  button: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: '#1A6C30',
    color: '#FFFFFF'
  },
  title: {
    textAlign: 'center',
    color: '#002108',
    fontWeight: '700'
  },
  middleButton: {
    marginHorizontal: 10
  }
})

export default AccelerometerScreen
