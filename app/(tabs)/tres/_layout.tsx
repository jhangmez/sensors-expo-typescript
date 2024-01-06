import { Drawer } from 'expo-router/drawer'
import { Pressable, useColorScheme } from 'react-native'

import Colors from '@constants/Colors'
import { DrawerToggleButton } from '@react-navigation/drawer'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Layout() {
  const colorScheme = useColorScheme()
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint
        // drawerInactiveTintColor: Colors[colorScheme ?? 'light'].tint
      }}
      initialRouteName='AccelerometerScreen/index'
    >
      <Drawer.Screen
        name='AccelerometerScreen/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Accelerometer',
          title: 'Accelerometer'
        }}
      />
      <Drawer.Screen
        name='GiroscopeScreen/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Giroscope',
          title: 'Giroscope'
        }}
      />
      <Drawer.Screen
        name='BarometerScreen/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Barometer',
          title: 'Barometer'
        }}
      />
      <Drawer.Screen
        name='PedometerScreen/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Pedometer',
          title: 'Pedometer'
        }}
      />
      <Drawer.Screen
        name='LightSensorScreen/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'LightSensor',
          title: 'LightSensor'
        }}
      />
      <Drawer.Screen
        name='MagnetometerScreen/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Magnetometer',
          title: 'Magnetometer'
        }}
      />
    </Drawer>
  )
}
