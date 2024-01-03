import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Magnetometer } from 'expo-sensors'
import { Subscription } from '@utils/types'
import { Button } from 'react-native-paper'

export default function Compass() {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0
  })
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  const _slow = () => Magnetometer.setUpdateInterval(1000)
  const _fast = () => Magnetometer.setUpdateInterval(16)

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((result) => {
        setData(result)
      })
    )
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
      <Text style={styles.title}>Magnetometer:</Text>
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
  title: {
    textAlign: 'center',
    color: '#002108',
    fontWeight: '700'
  },
  text: {
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15
  },
  button: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A6C30',
    padding: 4
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc'
  }
})
