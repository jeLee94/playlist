import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
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
        // SafeAreaView 구현해둠
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles_common.container_background}>
                <SafeAreaView />
                {/* 여기부터 각자 구현할 것 */}

                <View style={{ height: setHeight(7) }}></View>
                <View
                    style={{
                        height: setHeight(6),
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: RFValue(
                                14 * GlobalVar.ValueMultiplied,
                                GlobalVar.FigmaScreenHeight
                            ),
                        }}
                    >
                        Soothing Theraphy
                    </Text>
                </View>
                <View style={{ height: setHeight(7) }}></View>
                <View style={{ height: setHeight(6) }} />
                {/* 오늘의 내 마음 기록하러가기 상자 */}
                <View
                    style={[
                        {
                            height: setHeight(24),
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 10,
                        },
                        styles_common.shadowContainer,
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
                                    height: setHeight(10),
                                    fontSize: RFValue(
                                        16 * GlobalVar.ValueMultiplied,
                                        GlobalVar.FigmaScreenHeight
                                    ),
                                    paddingTop: setHeight(4),
                                },
                            ]}
                        >
                            오늘의 내 마음
                        </Text>

                        <Text
                            style={[
                                styles_common.text,
                                {
                                    height: setHeight(10),
                                    fontSize: RFValue(
                                        20 * GlobalVar.ValueMultiplied,
                                        GlobalVar.FigmaScreenHeight
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
                <View style={{ height: setHeight(13) }} />

                {/* 음악꾸러미 영억 */}

                <View
                    style={{
                        height: setHeight(5),
                        justifyContent: 'center',
                    }} //레이아웃에 4라고 돼있는데 글자 크기는 14고... 그래서 5로 늘림
                >
                    <Text
                        style={{
                            fontSize: RFValue(
                                14 * GlobalVar.ValueMultiplied,
                                GlobalVar.FigmaScreenHeight
                            ),
                        }}
                    >
                        음악 꾸러미
                    </Text>
                </View>
                <View
                    style={{
                        height: setHeight(3),
                    }}
                />
                {/* 가로로 스크롤뷰 만들기 */}
                <View style={styles_common.shadowContainer}>
                    <View
                        style={[
                            {
                                backgroundColor: '#c0c0c0',
                                height: setHeight(65),
                                borderTopRightRadius: 10,
                                borderTopLeftRadius: 10,
                            },
                        ]}
                    ></View>
                    <View
                        style={[
                            { backgroundColor: '##fff', height: setHeight(28) },
                        ]}
                    ></View>
                </View>
                <Text style={[styles_common.text, { flex: 10 }]}>
                    MusicPage.js
                </Text>
            </View>
        </ScrollView>
    );
};
