import { withLayoutContext } from "expo-router"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

const { Navigator } = createMaterialTopTabNavigator()
const TopTabs = withLayoutContext(Navigator)

const NotificationsLayout = () => {
  return (
    <TopTabs
        screenOptions={{
            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            tabBarIndicatorStyle: { backgroundColor: 'black' }
        }}
     />
  )
}

export default NotificationsLayout