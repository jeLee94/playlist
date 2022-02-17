import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Home, List, Search } from "../screens/TabScreens";

const TabIcon1 = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};
const TabIcon2 = ({ name, size, color }) => {
  return <FontAwesome name={name} size={size} color={color} />;
};
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Search" component={Search} /> */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: (props) => TabIcon1({ ...props, name: "home" }),
            // headerShown: false,
          }}
        />
        <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarIcon: (props) => TabIcon2({ ...props, name: "list" }),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: (props) => TabIcon2({ ...props, name: "search" }),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
