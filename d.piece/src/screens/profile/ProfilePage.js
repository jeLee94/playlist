import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { GlobalVar, setHeight } from '../../components/GlobalVariables';
import { RFValue } from 'react-native-responsive-fontsize';

import { styles_common, styles_profile } from '../../components/styles';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export const Profile = () => {
    return (
        // SafeAreaView 구현해둠
        <SafeAreaView style={styles_common.container_background}>
            {/* 여기부터 각자 구현할 것 */}
            <View style={{ height: setHeight(7) }} />
            <View style={{ height: setHeight(6), alignItems: 'center' }}>
                <Text
                    style={[
                        {
                            height: setHeight(10),
                            fontSize: RFValue(
                                14 * GlobalVar.ValueMultiplied,
                                GlobalVar.ScreenHeight
                            ),
                            paddingTop: setHeight(4),
                        },
                    ]}
                >
                    오늘의 내 마음
                </Text>
            </View>
            <View style={{ height: setHeight(7) }} />
            <View style={{ height: setHeight(6) }} />
            <Text style={[styles_common.text, { flex: 10 }]}>
                ProfilePage.js
            </Text>
        </SafeAreaView>
    );
};
