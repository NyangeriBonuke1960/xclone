import { withLayoutContext } from "expo-router"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Image, View, Text } from "react-native"

const { Navigator } = createMaterialTopTabNavigator()
const TopTabs = withLayoutContext(Navigator)

const HomeLayout = () => {
  return (
    <>
      <View>
        <Image
          source={{ uri: 'https://thvnext.bing.com/th/id/OIP.e2HhlkNqx5yeQNqeav1-YwHaFj?o=7&rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'}}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
      </View>
    
      <TopTabs>
        <TopTabs.Screen name="foryou" options={{ title: 'For You'}} />
        <TopTabs.Screen name="following" options={{ title: 'Following'}} />
      </TopTabs>
    </>
  )
}

export default HomeLayout