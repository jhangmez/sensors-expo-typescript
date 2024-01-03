import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, BottomNavigation } from 'react-native-paper'

import { Platform } from 'react-native'

import {
  AccelerometerScreen,
  BarometerScreen,
  GyroscopeScreen,
  MagnetometerScreen,
  PedometerScreen
} from './Sensors'

const Tab = createBottomTabNavigator()

function HelloWorldScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Hola Mundo, esta es una aplicacion creada por @jhangmez de HarkaySoft
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='HelloWorld'
          component={HelloWorldScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='home' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Accelerometer'
          component={AccelerometerScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='bicycle' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Barometer'
          component={BarometerScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='boat' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Gyroscope'
          component={GyroscopeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='build' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Magnetometer'
          component={MagnetometerScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='compass' color={color} size={size} />
            )
          }}
        />
        {Platform.OS === 'ios' && (
          <Tab.Screen
            name='Pedometer'
            component={PedometerScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name='cog' color={color} size={size} />
              )
            }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
