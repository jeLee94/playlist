import View from "react-native";
import { NavigationContainer, styled } from "@react-navigation/native";
import StackNavigation from "./navigations/Stack";

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
};

export default App;
