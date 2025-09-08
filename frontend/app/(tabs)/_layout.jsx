import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
                let iconName = 'home'

                if (route.name === 'home') iconName = 'home'
                else if (route.name === 'search') iconName = 'search'
                else if (route.name === 'grok') iconName = 'flame'
                else if (route.name === 'communities') iconName = 'people'
                else if (route.name === 'notifications') iconName = 'notifications'
                else if (route.name === 'messages') iconName = 'chatbubble'

                return <Ionicons name={iconName} size={size} color={color} />
            }
        })}
     >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="grok" />
      <Tabs.Screen name="communities" />
      <Tabs.Screen name="notifications" />
      <Tabs.Screen name="messages" />
     </Tabs>
  )
}

export default TabsLayout