import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    styles_common,
    styles_callendar,
    BlankArea,
} from '../../components/styles';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export const Callendar = () => {
    return (
        // SafeAreaView 구현해둠
        <SafeAreaView style={styles_common.container_background}>
            {/* 여기부터 각자 구현할 것 */}
            <View style={{ flex: 30, backgroundColor: '#0000ff88' }} />
            <View style={{ flex: 20, backgroundColor: '#0000ff58' }} />
            <View style={{ flex: 10, backgroundColor: '#0000ff28' }} />
            <Text style={[styles_common.text, { flex: 10 }]}>
                CallendarRecordPage.js
            </Text>
        </SafeAreaView>
    );
};
