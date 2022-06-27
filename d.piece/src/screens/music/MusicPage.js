import React, { useRef } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
    Pressable,
} from 'react-native';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
import { MiniPlayer } from './test';
import { TitleHeader } from '../../components/TitleHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    styles_common,
    styles_home,
    styles_music,
    BlankArea,
} from '../../components/styles';
import { RecodingMine } from '../../components/RecordingMind';
import Modal from 'react-native-modalbox';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export const Music = () => {
    // const modal3 = useRef(null);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles_common.container_background}>
                <SafeAreaView />
                {/* <StatusBar barStyle="light-content" /> */}
                {/* 제목 영역 */}
                <TitleHeader height={20} name2="Soothing Theraphy" />

                <View style={{ height: setHeight(7) }} />
                <View style={{ height: setHeight(6) }} />

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
                    }} //레이아웃에 높이 4로 돼있는데 글자 잘려서 5로 늘림
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
                {/* 가로 스크롤뷰 */}
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

export const MusicPackage = props => {
    //props로 데이터 전달하도록 수정
    return (
        <View>
            <TouchableOpacity
                style={[{ paddingRight: setWidth(4) }]}
                onPress={props._onPress}
            >
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
                        },
                        styles_common.shadowContainer,
                    ]}
                >
                    <Text
                        style={[
                            styles_common.text,
                            {
                                paddingTop: setHeight(3),
                                paddingLeft: setWidth(5),
                                fontSize: RFValue(
                                    10 * GlobalVar.ValueMultiplied,
                                    GlobalVar.FigmaScreenHeight
                                ),
                                color: '#646464',
                                marginTop: setHeight(1), //이거 넣으면
                            },
                        ]}
                    >
                        2022년 5월 25일
                    </Text>
                    <Text
                        style={[
                            styles_common.text,
                            {
                                paddingTop: setHeight(1),
                                paddingLeft: setWidth(5),
                                fontSize: RFValue(
                                    14 * GlobalVar.ValueMultiplied,
                                    GlobalVar.FigmaScreenHeight
                                ),
                                color: '#646464',
                            },
                        ]}
                    >
                        잠 잘 자고 싶다...
                    </Text>
                    <View style={{ height: setHeight(3) }} />
                    <View
                        style={{
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            // resizeMode="contain"
                            style={{ width: setWidth(72.5) }}
                            source={require('../../../assets/images/play/line5.png')}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            // alignItems: 'flex-end',
                            marginTop: setWidth(1),
                            height: setHeight(4),
                        }}
                    >
                        <View>
                            <Text
                                style={[
                                    styles_common.text,
                                    {
                                        paddingLeft: setWidth(5),
                                        fontSize: RFValue(
                                            10 * GlobalVar.ValueMultiplied,
                                            GlobalVar.FigmaScreenHeight
                                        ),
                                        color: '#646464',
                                    },
                                ]}
                            >
                                [K-DASS] 22.03.28 감정 결과 _ 우울 80 ·3곡
                            </Text>
                        </View>
                        <View // 듣기 이미지 정렬왜안돼~~
                            style={{}}
                        >
                            <Image //듣기 이미지
                                // resizeMode="contain"
                                style={[
                                    {
                                        // flexDirection: 'row',
                                        // justifyContent: 'flex-end',
                                        width: setWidth(12),
                                        height: setHeight(4),
                                        // marginLeft: setWidth(5),
                                    },
                                ]}
                                source={require('../../../assets/images/play/listen.png')}
                            />
                        </View>
                    </View>
                </View>
                {/* </View> */}
            </TouchableOpacity>
        </View>
    );
};
