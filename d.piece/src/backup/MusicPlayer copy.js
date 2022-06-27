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
import { styles_common, styles_music } from '../../components/styles';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export const MusicPlayer = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView />
            <LinearGradient
                colors={['#c4c4c4', '#cbcbcb', '#fff']}
                style={styles_common.container_background}
            >
                {/* 화면제목영역 */}
                <View style={{ height: setHeight(11) }} />
                {/* 아마도 리니어그라디언트때문에 비율 차이 발생한듯 */}
                <View
                    style={{
                        height: setHeight(6),
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* 화면 내리는 버튼 */}
                    <TouchableOpacity
                        // onPress={onCloseModal}
                        style={{
                            position: 'absolute',
                            // top: 45,
                            left: 7,
                            height: setHeight(16),
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/down.png')}
                        />
                    </TouchableOpacity>
                    {/* 제목 */}
                    <Text
                        style={[
                            styles_common.text,
                            {
                                fontSize: RFValue(
                                    14 * GlobalVar.ValueMultiplied,
                                    GlobalVar.FigmaScreenHeight
                                ),
                                alignItems: 'baseline',
                            },
                        ]}
                    >
                        Play
                    </Text>
                    {/* 메뉴 버튼 */}
                    <TouchableOpacity
                        // onPress={onCloseModal}
                        style={{
                            position: 'absolute',
                            // top: 45,
                            right: 7,
                            height: setHeight(16),
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/menu.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ height: setHeight(12) }} />
                <View
                    style={{
                        // backgroundColor: '#fff',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        resizeMode="contain"
                        style={styles_music(73).iconStyle}
                        source={require('../../../assets/images/play/gifEX.gif')}
                    />
                </View>
                <View style={{ height: setHeight(5) }} />
            </LinearGradient>
            {/* 플레이어 컨트롤러 영역 (211-118=93)*/}
            <View style={{ height: setHeight(93), backgroundColor: '#fff' }}>
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
                        // backgroundColor: '#fff',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={[
                            styles_common.text,
                            {
                                fontSize: RFValue(
                                    20 * GlobalVar.ValueMultiplied,
                                    GlobalVar.FigmaScreenHeight
                                ),
                                fontWeight: 'bold',
                                // alignItems: '',
                            },
                        ]}
                    >
                        Title
                    </Text>
                </View>
                {/* 가수이름 */}
                <View
                    style={{
                        height: setHeight(5),
                        // backgroundColor: '#fff',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={[
                            styles_common.text,
                            {
                                fontSize: RFValue(
                                    14 * GlobalVar.ValueMultiplied,
                                    GlobalVar.FigmaScreenHeight
                                ),
                                alignItems: 'center',
                            },
                        ]}
                    >
                        Singer
                    </Text>
                </View>
                {/* 슬라이드 위 공백 7 + 슬라이드 영역 1*/}
                <View
                    style={{
                        height: setHeight(8),
                        // backgroundColor: '#ff0',
                        alignItems: 'center',
                        ...Platform.select({
                            android: { justifyContent: 'flex-end' },
                            ios: { justifyContent: 'flex-start' },
                            // 아래쪽에 붙일려고 쓴 코드인데 ios는 flex-end하니까 위로 올라가서 플랫폼으로 설정함
                        }),
                    }}
                >
                    {/* 슬라이드의 동그라미는 커스텀 컴포넌트로만 수정 가능 
                https://github.com/jeanregisser/react-native-slider */}
                    <Slider
                        tapToSeek={true}
                        minimumTrackTintColor="#bcbcbc"
                        maximumTrackTintColor="#e8e8e8"
                        // onValueChange={e => {
                        //     onSeekTrack(Math.floor(e * selectedMusic.duration));
                        // }}
                        style={{ width: setWidth(86) }}
                        // 양쪽 마진 7씩 빼고 슬라이드가 다 차지
                        // value={timestamp / selectedMusic.duration}
                    />
                </View>
                <View style={{ height: setHeight(9) }} />
                {/* 슬라이드와 버튼 사이 공백 */}

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    {/* 셔플 버튼 */}
                    <TouchableOpacity
                        // onPress={onCloseModal}
                        style={{
                            // top: setHeight(1), //슬라이드로부터 위쪽 여백
                            marginLeft: setWidth(8), // 마진 7 + 버튼과 컨테이너영역1
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/Shuffle.png')}
                        />
                    </TouchableOpacity>

                    {/* 이전 버튼 */}
                    <TouchableOpacity
                        // onPress={onCloseModal}
                        style={{
                            marginLeft: setWidth(15),
                            // backgroundColor: '#000',
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/skip-previous.png')}
                        />
                    </TouchableOpacity>
                    {/* 재생버튼 */}
                    <TouchableOpacity
                        // onPress={onCloseModal}
                        style={{
                            // top: setHeight(9),
                            marginLeft: setWidth(12),
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(7).iconStyle}
                            source={require('../../../assets/images/play/Play.png')}
                        />
                    </TouchableOpacity>

                    {/* 다음 버튼 */}
                    <TouchableOpacity
                        // onPress={onCloseModal}
                        style={{
                            // top: setHeight(1),
                            marginLeft: setWidth(12),
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/skip-forward.png')}
                        />
                    </TouchableOpacity>
                    {/* 리플레이 버튼 */}
                    <TouchableOpacity
                        // onPress={onCloseModal}
                        style={{
                            // top: setHeight(1),
                            marginLeft: setWidth(15),
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/Replaying.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};
