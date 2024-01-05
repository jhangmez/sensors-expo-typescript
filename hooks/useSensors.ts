import { useState, useEffect } from 'react'
import {
  Accelerometer,
  Barometer,
  Gyroscope,
  LightSensor,
  Magnetometer,
  Pedometer
} from 'expo-sensors'

export const useAccelerometer = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 })
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

  return { data, _slow, _fast }
}

export const useBarometer = () => {
  const [data, setData] = useState({ pressure: 0, relativeAltitude: 0 })
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  const _subscribe = () => {
    setSubscription(
      Barometer.addListener(({ pressure, relativeAltitude }) => {
        setData({
          pressure,
          relativeAltitude: relativeAltitude || 0
        })
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

  return { data, _unsubscribe }
}

export const useGyroscope = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 })
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  const _slow = () => Gyroscope.setUpdateInterval(1000)
  const _fast = () => Gyroscope.setUpdateInterval(16)

  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener((gyroscopeData) => {
        setData(gyroscopeData)
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

  return { data, _slow, _fast, _unsubscribe }
}

export const useLightSensor = () => {
  const [illuminance, setIlluminance] = useState(0)
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  const _subscribe = async () => {
    const isAvailable = await LightSensor.isAvailableAsync()
    if (!isAvailable) {
      console.log('LightSensor is not available')
      return
    }

    setSubscription(
      LightSensor.addListener(({ illuminance }) => {
        setIlluminance(illuminance)
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

  return { illuminance, _unsubscribe }
}

export const useMagnetometer = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 })
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  const _slow = () => Magnetometer.setUpdateInterval(1000)
  const _fast = () => Magnetometer.setUpdateInterval(16)

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((magnetometerData) => {
        setData(magnetometerData)
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

  return { data, _slow, _fast, _unsubscribe }
}

export const usePedometer = () => {
  const [stepCount, setStepCount] = useState(0)
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  const _subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync()
    if (!isAvailable) {
      console.log('Pedometer is not available')
      return
    }

    setSubscription(
      Pedometer.watchStepCount((result) => {
        setStepCount(result.steps)
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

  return { stepCount, _unsubscribe }
}
