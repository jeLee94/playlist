import React from "react";
import { NavigationContainer, styled } from "@react-navigation/native";
import TabNavigation from "./navigations/Tab";
import { useEffect } from "react";

// 폰트 설정을 위한 라이브러리
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const cacheFonts = (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
};

const App = () => {
    // // 폰트 가져오는 비동기 코드
    // const [isReady, setIsReady] = useEffect(false);

    // const _loadAssets = async () => {
    //     const fontAssets = cacheFonts([
    //         "../assets/fonts/NotoSansKR-Medium.otf",
    //     ]);
    //     await Promise.all([...fontAssets]);
    // };

    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    );
};

export default App;

/*
    return isReady ? (
        <View />
    ) : (
        <NavigationContainer>
            <AppLoading
                startAsync={_loadAssets}
                onFinish={() => setIsReady(true)}
                onError={console.warn}
            />
            <TabNavigation />
        </NavigationContainer>
    );
*/
