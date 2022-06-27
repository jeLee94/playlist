import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { styles_common, styles_home } from '../../components/styles';
import { RecomendedAndMore } from '../../backup/RecomendedAndMore';
import { RecomenedContent } from '../../components/RecomenedContent';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
import { StatusBar } from 'expo-status-bar';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export const Home = () => {
    return (
        // SafeAreaView 구현해둠
        // styles_common.container_background이놈이 좌우패딩 20씩 잡아줌
        <View style={styles_common.container_background}>
            <SafeAreaView />
            <StatusBar barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* 여기부터 각자 구현할 것 */}
                {/* 1. 헤더 h20, w86 텍스트 중앙 정렬하면 상하좌우 안 잡아줘도 됨 */}
                <View
                    style={[
                        styles_common.container,
                        {
                            height: setHeight(20),
                        },
                    ]}
                >
                    {/* 수딩님 h7*/}
                    <View
                        style={[
                            styles_common.container,
                            {
                                paddingTop: setHeight(8),
                                alignItems: 'center', // 가로 가운데 정렬
                                // backgroundColor: '#0000ff80',
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles_common.text,
                                {
                                    fontSize: RFValue(
                                        18 * GlobalVar.ValueMultiplied,
                                        GlobalVar.ScreenHeight
                                    ),
                                },
                            ]}
                        >
                            수딩님
                        </Text>
                    </View>
                </View>
                {/* 빈 공간 6h, 너비 상관 없음*/}
                <View
                    style={{ height: setHeight(6), backgroundColor: '#ffffff' }}
                />

                {/* 오늘의 내 마음 기록하러 가기 h24 = 5+14(Text)+5, w86 = 4+61(Text)+3+14(Icon)+4, margin : 좌우 4, 상하 5 */}
                <View
                    style={[
                        styles_common.container_center,
                        {
                            height: setHeight(24),
                            flexDirection: 'row',
                            // 100 중에 좌우 4씩 때니까 4%로 좌우 마진 잡기
                            // marginHorizontal: "4%",
                            // backgroundColor: '#0000ff80',
                        },
                    ]}
                >
                    {/* 텍스트 2줄 h14, w61*/}
                    <View
                        style={[
                            styles_common.container,
                            {
                                flexDirection: 'column', // 하위 컴포넌트를 가로로 배치
                                marginLeft: '4%',
                                marginRight: '3%',
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles_common.text,
                                {
                                    // backgroundColor: '#00ffff',
                                    height: setHeight(10),
                                    fontSize: RFValue(
                                        16 * GlobalVar.ValueMultiplied,
                                        GlobalVar.ScreenHeight
                                    ),
                                    textAlignVertical: 'bottom', // 글자 아래로 정렬
                                    paddingBottom: setHeight(1),
                                },
                            ]}
                        >
                            오늘의 내 마음
                        </Text>

                        <Text
                            style={[
                                styles_common.text,
                                {
                                    // backgroundColor: '#000fff',
                                    height: setHeight(10),
                                    fontSize: RFValue(
                                        20 * GlobalVar.ValueMultiplied,
                                        GlobalVar.ScreenHeight
                                    ),
                                    textAlignVertical: 'top', // 글자 아래로 정렬
                                    paddingTop: setHeight(1),
                                },
                            ]}
                        >
                            기록하러 가기
                        </Text>
                    </View>

                    {/* 우측의 Icon */}
                    <TouchableOpacity
                        style={[
                            styles_home.TouchableOpacity_circle,
                            {
                                width: 55,
                                height: 55,
                                borderRadius: 100,
                                marginRight: '4%',
                            },
                        ]}
                    >
                        <Image
                            resizeMode="center"
                            style={[styles_home.Image_14]}
                            source={require('../../../assets/images/icon/KdassLine.png')}
                        />
                    </TouchableOpacity>
                </View>

                {/* 빈 공간 13h, 너비 상관 없음 넘겨 주는 값 flex, color*/}
                <View
                    style={{
                        height: setHeight(13),
                        backgroundColor: '#ffffff',
                    }}
                />

                {/* 추천음원 리스트 상단부 원래 h5인데 텍스트 짤릴 것 같아서 h7로 수정함, 너비 상관 없음 넘겨 주는 값 flex, color
                텍스트 사이즈 전체적으로 1/3씩 더 더해줘야 실제 UI랑 비슷할 듯*/}
                {/* RecomendedAndMore : 커스텀 컴포넌트 나중엔 _onpress도 같이 넘겨줘야함 */}
                <View
                    style={{
                        height: setHeight(5),
                        backgroundColor: '#ffffff',
                        // marginBottom: setHeight(3), // 아래로 빈 공간 3h, 너비 상관 없음
                    }}
                >
                    <RecomendedAndMore name="추천 음원 리스트" />
                </View>

                {/* 추천음원 리스트 53h = 42(UI)+11(Text)h, w37, 좌우 2, 상하 0.8 */}
                <RecomenedContent />

                {/* 빈 공간 13h, 너비 상관 없음 넘겨 주는 값 flex, color*/}
                <View
                    style={{
                        height: setHeight(13),
                        backgroundColor: '#ffffff',
                    }}
                />

                {/* RecomendedAndMore : 커스텀 컴포넌트 나중엔 _onpress도 같이 넘겨줘야함 */}
                <View
                    style={{
                        height: setHeight(7),
                        backgroundColor: '#ffffff',
                        // marginBottom: setHeight(3), // 아래로 빈 공간 3h, 너비 상관 없음
                    }}
                >
                    <RecomendedAndMore name="추천 영화와 책" />
                </View>

                {/* 추천 영화와 책 53h = 42(UI)+11(Text)h, w37, 좌우 2, 상하 0.8 */}
                <RecomenedContent />

                {/* 미니 음악 플레이어 출력될 자리 & 탭 네비 높이 조절 36h -> 34h 위에서 2늘림  Image 하나 들어갈 듯*/}
                <View
                    style={{
                        height: setHeight(10),
                        backgroundColor: '#ffffff',
                    }}
                />
            </ScrollView>
        </View>
    );
};
