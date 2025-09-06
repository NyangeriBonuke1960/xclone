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
                else if (route.name === 'notifications') iconName = 'notifications'
                else if (route.name === 'messages') iconName = 'messages'

                return <Ionicons name={iconName} size={size} color={color} />
            }
        })}
     />
  )
}

export default TabsLayout