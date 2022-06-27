import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Animated,
} from 'react-native';
import { Button } from 'react-native-web';
import {
    styles_common,
    styles_home,
    styles_kdass,
} from '../../components/styles';
import { RoundLongBar } from '../../components/RoundLongBar';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Kdass } from '../../screens/kdass/KdassTestPage';
import { Result } from '../../screens/result/KdassResult';
import { RecordedHistory } from './RecordedHistory';
import { HistoryStat } from './HistoryStat';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const { height } =
    Dimensions.get(
        'window'
    ); /* 저는 아직 전역변수 처리 전이라서 이대로 썼습니다 */

const TopTab = createMaterialTopTabNavigator();
const TopNavigator = () => {
    return (
        <TopTab.Navigator style={{ backgroundColor: '#000000' }}>
            <TopTab.Screen name="History" component={RecordedHistory} />
            <TopTab.Screen name="Stat" component={HistoryStat} />
            <TopTab.Screen name="1" component={Kdass} />
            <TopTab.Screen name="2" component={Result} />
        </TopTab.Navigator>
    );
};

export const Callendar = () => {
    return (
        <View style={styles_common.container_background}>
            <SafeAreaView />
            {/* 여기부터 각자 구현할 것 */}
            <View
                style={{
                    flex: 20,
                    backgroundColor: '#0000ff88',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 18 }}>마음 히스토리</Text>
            </View>
            <View style={{ flex: 6, backgroundColor: '#0000ff28' }} />
            <View
                style={{
                    flexDirection: 'row',
                    flex: 8,
                    backgroundColor: '#0000ff58',
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>March</Text>
                <Pressable style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../../../assets/images/icon/SoothingRecordFill.png')}
                    ></Image>
                </Pressable>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    flex: 26,
                    backgroundColor: '#ffffff',
                }}
            >
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    onMomentumScrollEnd={() => {
                        console.log('Scrolling is End');
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 12,
                            backgroundColor: '#ffffff',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 5,
                            padding: 10,
                            background: '#ffffff', // 배경색이 없으면 그림자가 안보일 수 있음.
                            shadowColor: '#000000', //그림자색
                            shadowOpacity: 0.3, //그림자 투명도
                            shadowOffset: { width: 2, height: 2 }, //그림자 위치
                            //ANDROID
                            elevation: 3,
                        }}
                    >
                        <View style={{ flex: 2, color: 'white' }} />
                        <Text style={{ flex: 5, color: 'black', fontSize: 12 }}>
                            THU
                        </Text>
                        <Text style={{ flex: 7, color: 'black', fontSize: 25 }}>
                            6
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 12,
                            backgroundColor: '#ffffff',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 5,
                            padding: 10,
                            background: '#ffffff', // 배경색이 없으면 그림자가 안보일 수 있음.
                            shadowColor: '#000000', //그림자색
                            shadowOpacity: 0.3, //그림자 투명도
                            shadowOffset: { width: 2, height: 2 }, //그림자 위치
                            //ANDROID
                            elevation: 3,
                        }}
                    >
                        <View style={{ flex: 2, color: 'white' }} />
                        <Text style={{ flex: 5, color: 'black', fontSize: 12 }}>
                            THU
                        </Text>
                        <Text style={{ flex: 7, color: 'black', fontSize: 25 }}>
                            6
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 12,
                            backgroundColor: '#ffffff',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 5,
                            padding: 10,
                            background: '#ffffff', // 배경색이 없으면 그림자가 안보일 수 있음.
                            shadowColor: '#000000', //그림자색
                            shadowOpacity: 0.3, //그림자 투명도
                            shadowOffset: { width: 2, height: 2 }, //그림자 위치
                            //ANDROID
                            elevation: 3,
                        }}
                    >
                        <View style={{ flex: 2, color: 'white' }} />
                        <Text style={{ flex: 5, color: 'black', fontSize: 12 }}>
                            THU
                        </Text>
                        <Text style={{ flex: 7, color: 'black', fontSize: 25 }}>
                            6
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 12,
                            backgroundColor: '#ffffff',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 5,
                            padding: 10,
                            background: '#ffffff', // 배경색이 없으면 그림자가 안보일 수 있음.
                            shadowColor: '#000000', //그림자색
                            shadowOpacity: 0.3, //그림자 투명도
                            shadowOffset: { width: 2, height: 2 }, //그림자 위치
                            //ANDROID
                            elevation: 3,
                        }}
                    >
                        <View style={{ flex: 2, color: 'white' }} />
                        <Text style={{ flex: 5, color: 'black', fontSize: 12 }}>
                            THU
                        </Text>
                        <Text style={{ flex: 7, color: 'black', fontSize: 25 }}>
                            6
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 12,
                            backgroundColor: '#ffffff',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 5,
                            padding: 10,
                            background: '#ffffff', // 배경색이 없으면 그림자가 안보일 수 있음.
                            shadowColor: '#000000', //그림자색
                            shadowOpacity: 0.3, //그림자 투명도
                            shadowOffset: { width: 2, height: 2 }, //그림자 위치
                            //ANDROID
                            elevation: 3,
                        }}
                    >
                        <View style={{ flex: 2, color: 'white' }} />
                        <Text style={{ flex: 5, color: 'black', fontSize: 12 }}>
                            THU
                        </Text>
                        <Text style={{ flex: 7, color: 'black', fontSize: 25 }}>
                            6
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 12,
                            backgroundColor: '#ffffff',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 5,
                            padding: 10,
                            background: '#ffffff', // 배경색이 없으면 그림자가 안보일 수 있음.
                            shadowColor: '#000000', //그림자색
                            shadowOpacity: 0.3, //그림자 투명도
                            shadowOffset: { width: 2, height: 2 }, //그림자 위치
                            //ANDROID
                            elevation: 3,
                        }}
                    >
                        <View style={{ flex: 2, color: 'white' }} />
                        <Text style={{ flex: 5, color: 'black', fontSize: 12 }}>
                            THU
                        </Text>
                        <Text style={{ flex: 7, color: 'black', fontSize: 25 }}>
                            6
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 12, backgroundColor: '#0000ff58' }}></View>
            <RoundLongBar name="마음 기록하러 가기"></RoundLongBar>
            <View style={{ flex: 12, backgroundColor: '#0000ff58' }}></View>

            <View
                style={{
                    flex: 84,
                    backgroundColor: '#f8f9fa',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <SlidingUpPanel
                    ref={React.useRef(null)}
                    minimumVelocityThreshold={
                        1.5
                    } /*손가락을 뗀 후 플링 애니메이션을 트리거하는 속도 임계*/
                    minimumDistanceThreshold={
                        50
                    } /*손가락을 뗀 후 플링 애니메이션을 트리거하기 위한 픽셀 단위 의 거리 임계값*/
                    friction={
                        10
                    } /*플링 애니메이션이 얼마나 빨리 진정되고 중지되는지 결정합니다. */
                    draggableRange={{ top: height - 80, bottom: 350 }}
                    animatedValue={new Animated.Value(350)}
                    allowDragging={
                        true
                    } /* 이거 False로 처리하고 위에 버튼 눌렸을때만 허용하게 할 수 있을듯 ? */
                    showBackdrop={false}
                >
                    <View style={styles.panel}>
                        {/* UI에서 사용하는 헤더처럼 사용하기 위해 아래코드 작성 */}
                        <View
                            style={{
                                width: 75,
                                height: 4,
                                backgroundColor: 'grey',
                                alignSelf: 'center',
                                marginVertical: 15,
                                borderRadius: 2,
                            }}
                        />
                        {/* 여기에 동재형은 아래 Navigator 사용하시면 되고 정은누나는 자유롭게 화면 구성하시면 됩니다 */}
                        <TopNavigator />
                    </View>
                </SlidingUpPanel>
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    panel: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
    },
    panelHeader: {
        height: 20,
        backgroundColor: 'f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    favoriteIcon: {
        position: 'absolute',
        top: -24,
        right: 24,
        backgroundColor: '#2b8a3e',
        width: 48,
        height: 48,
        padding: 8,
        borderRadius: 24,
        zIndex: 1,
    },
};

export default Callendar;

// import React, { useRef } from 'react';
// import {
//     SafeAreaView,
//     Text,
//     View,
//     ScrollView,
//     Image,
//     TouchableOpacity,
//     StatusBar,
//     Pressable,
// } from 'react-native';
// import {
//     GlobalVar,
//     setHeight,
//     setWidth,
// } from '../../components/GlobalVariables';
// import { MiniPlayer } from './test';
// import { TitleHeader } from '../../components/TitleHeader';
// import { RFValue } from 'react-native-responsive-fontsize';
// import {
//     styles_common,
//     styles_home,
//     styles_music,
//     BlankArea,
// } from '../../components/styles';
// import { RecodingMine } from '../../components/RecordingMind';
// import Modal from 'react-native-modalbox';

// // 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
// export function Music() {
//     return (
//         <ScrollView showsVerticalScrollIndicator={false}>
//             <View style={styles_common.container_background}>
//                 <SafeAreaView />
//                 {/* <StatusBar barStyle="light-content" /> */}
//                 {/* 제목 영역 */}
//                 <TitleHeader height={20} name2="Soothing Theraphy" />

//                 <View style={{ height: setHeight(7) }} />
//                 <View style={{ height: setHeight(6) }} />

//                 <RecodingMine
//                     name1="오늘의 내 마음"
//                     name2="기록하러 가기"
//                     size={8}
//                 />
//                 <View style={{ height: setHeight(13) }} />

//                 {/* 음악꾸러미 영억 */}
//                 <View
//                     style={{
//                         height: setHeight(5),
//                         justifyContent: 'center',
//                     }} //레이아웃에 높이 4로 돼있는데 글자 잘려서 5로 늘림
//                 >
//                     <Text
//                         style={{
//                             fontSize: RFValue(
//                                 14 * GlobalVar.ValueMultiplied,
//                                 GlobalVar.FigmaScreenHeight
//                             ),
//                         }}
//                     >
//                         음악 꾸러미
//                     </Text>
//                 </View>
//                 <View style={{ height: setHeight(3) }} />
//             </View>
//             <View>
//                 {/* 가로 스크롤뷰 */}
//                 <View
//                     style={{
//                         paddingLeft: setWidth(7),
//                         backgroundColor: '#fff',
//                     }}
//                 >
//                     <ScrollView
//                         style={{
//                             height: setHeight(98),
//                             backgroundColor: '#fff',
//                         }}
//                         horizontal={true}
//                         showsHorizontalScrollIndicator={false}
//                     >
//                         <MusicPackage />
//                         <MusicPackage />
//                         <MusicPackage />
//                         <MusicPackage />
//                     </ScrollView>
//                 </View>

//                 <View
//                     style={[
//                         styles_common.container_background,
//                         { height: setHeight(50) },
//                     ]}
//                 />
//             </View>
//         </ScrollView>
//     );
// }

// export const MusicPackage = props => {
//     //props로 데이터 전달하도록 수정
//     const modal = useRef('modal3');
//     function modalopen() {
//         modal.open();
//     }
//     return (
//         <View>
//             <Modal
//                 style={[
//                     styles_common.shadowContainer,
//                     {
//                         // marginTop: setHeight(10),

//                         flexDirection: 'row',
//                         alignContent: 'center',
//                         height: setHeight(13),
//                         alignSelf: 'center',

//                         alignItems: 'center',
//                         elevation: 10,
//                         borderRadius: 10,
//                     },
//                 ]}
//                 position={'bottom'}
//                 ref={modal}
//                 backdropPressToClose={false}
//                 // entry={'bottom'}
//                 backdrop={false}
//             >
//                 <Text>test</Text>
//             </Modal>

//             <TouchableOpacity
//                 style={[{ paddingRight: setWidth(4) }]}
//                 onPress={modalopen}
//             >
//                 {/* 페이지 전환 여기서, 스택 네비게이션쓰기 */}

//                 <View
//                     resizeMode="center"
//                     style={[
//                         {
//                             width: setWidth(80),
//                             height: setHeight(65),
//                             backgroundColor: '#E9E9E9',
//                             borderTopStartRadius: 10,
//                             borderTopEndRadius: 10,
//                             tintColor: '#939393',
//                             alignContent: 'center',
//                         },
//                     ]}
//                 />
//                 <View
//                     style={[
//                         {
//                             height: setHeight(28),
//                         },
//                         styles_common.shadowContainer,
//                     ]}
//                 >
//                     <Text
//                         style={[
//                             styles_common.text,
//                             {
//                                 paddingTop: setHeight(3),
//                                 paddingLeft: setWidth(5),
//                                 fontSize: RFValue(
//                                     10 * GlobalVar.ValueMultiplied,
//                                     GlobalVar.FigmaScreenHeight
//                                 ),
//                                 color: '#646464',
//                                 marginTop: setHeight(1), //이거 넣으면
//                             },
//                         ]}
//                     >
//                         2022년 5월 25일
//                     </Text>
//                     <Text
//                         style={[
//                             styles_common.text,
//                             {
//                                 paddingTop: setHeight(1),
//                                 paddingLeft: setWidth(5),
//                                 fontSize: RFValue(
//                                     14 * GlobalVar.ValueMultiplied,
//                                     GlobalVar.FigmaScreenHeight
//                                 ),
//                                 color: '#646464',
//                             },
//                         ]}
//                     >
//                         잠 잘 자고 싶다...
//                     </Text>
//                     <View style={{ height: setHeight(3) }} />
//                     <View
//                         style={{
//                             alignSelf: 'center',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                         }}
//                     >
//                         <Image
//                             // resizeMode="contain"
//                             style={{ width: setWidth(72.5) }}
//                             source={require('../../../assets/images/play/line5.png')}
//                         />
//                     </View>
//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             alignItems: 'center',
//                             marginTop: setWidth(1),
//                         }}
//                     >
//                         <Text
//                             style={[
//                                 styles_common.text,
//                                 {
//                                     height: setHeight(4),
//                                     paddingLeft: setWidth(5),
//                                     fontSize: RFValue(
//                                         10 * GlobalVar.ValueMultiplied,
//                                         GlobalVar.FigmaScreenHeight
//                                     ),
//                                     color: '#646464',
//                                 },
//                             ]}
//                         >
//                             [K-DASS] 22.03.28 감정 결과 _ 우울 80 ·3곡
//                         </Text>
//                         <Image
//                             // resizeMode="contain"
//                             style={{
//                                 justifyContent: 'flex-end',
//                                 marginLeft: setWidth(10),
//                             }}
//                             source={require('../../../assets/images/play/listen.png')}
//                         />
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );
// };
