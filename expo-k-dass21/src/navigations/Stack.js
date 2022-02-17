import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Intro from "../screens/Intro";
import Test from "../screens/DassTest";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        // Stack.Navigator : Stack.Screen를 관리하는 컴포넌트
        <Stack.Navigator initialRouteName="Intro">
            {/* name : 화면을 대표할 이름 */}
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen
                name="Test"
                component={Test}
                options={{
                    headerTitle: "K-Dass 21 테스트",
                    headerStyle: {
                        height: 80,
                        backgroundColor: "#e2e2e270",
                        borderBottomWidth: 0,
                    },
                    headerBackTitleVisible: "true",
                    headerBackTitle: "이전",
                    // cardStyleInterpolator:
                    //     "CardStyleInterpolators.forHorizontalIOS",
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
