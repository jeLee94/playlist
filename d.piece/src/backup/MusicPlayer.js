import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
import { TitleHeader } from '../../components/TitleHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    styles_common,
    styles_home,
    styles_music,
    BlankArea,
} from '../../components/styles';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export const Music = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView />

            <LinearGradient
                colors={['#c4c4c4', '#cbcbcb', '#fff']}
                style={styles_common.container_background}
            >
                {/* 화면제목영역 */}
                <TitleHeader height={16} name2="Play" />
                {/* GIF영역 */}
                <View style={{ height: setHeight(88) }} />
            </LinearGradient>
            {/* 플레이어 컨트롤러 영역 */}
            <View
                style={{
                    height: setHeight(13),
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            />
            {/* 노래 제목 */}
            <View
                style={{
                    height: setHeight(8),
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={[
                        styles_common.text,
                        {
                            fontSize: RFValue(
                                20 * GlobalVar.ValueMultiplied,
                                GlobalVar.ScreenHeight
                            ),
                            fontWeight: 'bold',
                            alignItems: 'baseline',
                        },
                    ]}
                >
                    Title
                </Text>
            </View>
            {/* 가수 */}
            <View
                style={{
                    height: setHeight(5),
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={[
                        styles_common.text,
                        {
                            fontSize: RFValue(
                                14 * GlobalVar.ValueMultiplied,
                                GlobalVar.ScreenHeight
                            ),
                            alignItems: 'baseline',
                        },
                    ]}
                >
                    Singer
                </Text>
            </View>
            <View
                style={{
                    height: setHeight(7),
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            />
            <View
                style={{
                    height: setHeight(7),
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            >
                <Slider
                    tapToSeek={true}
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="#F5DEB3"
                    // onValueChange={e => {
                    //     onSeekTrack(Math.floor(e * selectedMusic.duration));
                    // }}
                    style={{ width: '100%', paddingHorizontal: 10 }}
                    // value={timestamp / selectedMusic.duration}
                />
            </View>
        </ScrollView>
    );
};
