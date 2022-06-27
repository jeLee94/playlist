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
import { RecodingMine } from '../../components/RecordingMind';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export const Music = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles_common.container_background}>
                <SafeAreaView />
                {/* <StatusBar barStyle="light-content" /> */}
                {/* 제목 영역 */}
                <TitleHeader height={20} name2="Soothing Theraphy" />

                <View style={{ height: setHeight(7) }} />
                <View style={{ height: setHeight(6) }} />
                {/* 오늘의 내 마음 기록하러가기 상자 */}
                {/* <View
                    style={[
                        {
                            height: setHeight(24),
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 10,
                        },
                        styles_common.shadowContainer,
                    ]}
                > */}
                {/* 텍스트 2줄 h14, w61*/}
                {/* <View
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
                    </View> */}

                {/* 우측의 Icon */}
                {/* <TouchableOpacity
                        style={[
                            styles_home.TouchableOpacity_circle,
                            {
                                width: setHeight(14),
                                height: setHeight(14),
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
                </View> */}
                <RecodingMine
                    name1="오늘의 내 마음"
                    name2="기록하러 가기"
                    size={8}
                />
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
                <View style={{ height: setHeight(3) }} />
            </View>
            <View>
                {/* 가로로 스크롤뷰 만들기 */}
                <View
                    style={{
                        paddingLeft: setWidth(7),
                        backgroundColor: '#fff',
                    }}
                >
                    <ScrollView
                        style={{
                            height: setHeight(98),
                            backgroundColor: '#fff',
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <MusicPackage />
                        <MusicPackage />
                        <MusicPackage />
                        <MusicPackage />
                    </ScrollView>
                </View>
                {/* <Text style={[styles_common.text, { flex: 10 }]}>
                    MusicPage.js
                </Text> */}
                <View
                    style={[
                        styles_common.container_background,
                        { height: setHeight(50) },
                    ]}
                />
            </View>
        </ScrollView>
    );
};

export const MusicPackage = () => {
    return (
        <TouchableOpacity style={[{ paddingRight: setWidth(4) }]}>
            {/* 페이지 전환 여기서, 스택 네비게이션쓰기 */}

            <View
                resizeMode="center"
                style={[
                    {
                        width: setWidth(80),
                        height: setHeight(65),
                        backgroundColor: '#E9E9E9',
                        borderTopStartRadius: 10,
                        borderTopEndRadius: 10,
                        tintColor: '#939393',
                        alignContent: 'center',
                    },
                ]}
            />
            <View
                style={[
                    {
                        height: setHeight(28),
                        // eleva
                    },
                    styles_common.shadowContainer,
                ]}
            >
                <Text
                    style={[
                        styles_common.text,
                        {
                            padding: 10,
                            fontSize: RFValue(
                                12 * GlobalVar.ValueMultiplied,
                                GlobalVar.FigmaScreenHeight
                            ),
                            color: '#646464',
                            marginTop: setHeight(2), //이거 넣으면
                        },
                    ]}
                >
                    봄 맞이 명상 음악
                </Text>
            </View>
        </TouchableOpacity>
    );
};
