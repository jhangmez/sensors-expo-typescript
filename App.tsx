import { StyleSheet, View, Image } from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, BottomNavigation } from 'react-native-paper'
import { Platform } from 'react-native'
import { HarkaySoftBlack } from './assets/Icons/Harkaysoft'
import { JhangmezBlack } from './assets/Icons/jhangmez'

import {
  AccelerometerScreen,
  BarometerScreen,
  GyroscopeScreen,
  MagnetometerScreen,
  PedometerScreen
} from './sensors'

const Tab = createBottomTabNavigator()

function HelloWorldScreen() {
  return (
    <>
      <View style={styles.absolute}>
        <HarkaySoftBlack />
      </View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Hola Mundo, esta es una aplicacion creada por <JhangmezBlack /> de
          HarkaySoft
        </Text>
      </View>
    </>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true
              })

              if (event.defaultPrevented) {
                preventDefault()
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key
                })
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key]
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 })
              }

              return null
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key]
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name

              return label.toString()
            }}
          />
        )}
      >
        <Tab.Screen
          name='Home'
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
  absolute: {
    position: 'absolute',
    top: 40,
    left: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  textStyle: {
    fontSize: 26,
    fontWeight: '600'
  }
})
