import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import APIList from './screens/APIList';
import Column from './screens/Column';
import FlatListPage from './screens/FlatList';
import Home from './screens/Home';
import Profile from './screens/Profile';
import ScrollViewPage from './screens/ScrollView';
import Text from './screens/TextPage';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }} />
        <Stack.Screen
          name="Text"
          component={Text}
          options={{ title: "Text" }} />
        <Stack.Screen
          name="Column"
          component={Column}
          options={{ title: "Column" }} />
        <Stack.Screen
          name="FlatList"
          component={FlatListPage}
          options={{ title: "Flat List" }} />
        <Stack.Screen
          name="ScrollView"
          component={ScrollViewPage}
          options={{ title: "Scroll View" }} />
        <Stack.Screen
          name="APIList"
          component={APIList}
          options={{ title: "API List" }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}