import Ionicons from '@expo/vector-icons/Ionicons'
import { Link, Tabs } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'
import { HarkaySoftBlack } from '@icons/Harkaysoft'

import Colors from '@constants/Colors'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name']
  color: string
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'harkaysoft',
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='checkmark-circle' color={color} />
          ),
          // headerShown: false,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name='information-outline'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link
              href='https://harkaysoft.vercel.app'
              style={{ marginLeft: 15 }}
            >
              <HarkaySoftBlack />
            </Link>
          )
        }}
      />
      <Tabs.Screen
        name='tres'
        options={{
          title: 'Sensors',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='compass' color={color} />
          ),
          headerShown: false
          // ,
          // headerLeft: () => (
          //   <Link href='/modal' asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name='navicon'
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // )
        }}
      />
    </Tabs>
  )
}
