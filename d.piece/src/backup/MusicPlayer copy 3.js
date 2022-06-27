import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable,
    Modal,
    Animated,
    Dimensions,
} from 'react-native';
import GestureRecognizer, {
    swipeDirections,
} from 'react-native-swipe-gestures';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
import { secsToTimestamp } from '../../utils/timeFormat';
import SlidingUpPanel from 'rn-sliding-up-panel';

import { RFValue } from 'react-native-responsive-fontsize';
import { styles_common, styles_music } from '../../components/styles';
import { StatusBar } from 'expo-status-bar';
// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export default function MusicPlayer({
    isVisible,
    onCloseModal,
    selectedMusic,
    isPlaying,
    playOrPause,
    onSeekTrack,
    timestamp,
    onPressNext,
    onPressPrev,
    onClickShuffle,
    onClickLoop,
}) {
    // const _draggedValue = new Animated.Value(100);
    // const backgoundOpacity = _draggedValue.interpolate({
    //     inputRange: [GlobalVar.ScreenHeight - 100, GlobalVar.ScreenHeight],
    //     outputRange: [1, 0],
    //     extrapolate: 'clamp',
    // });

    // const iconTranslateY = _draggedValue.interpolate({
    //     inputRange: [
    //         GlobalVar.ScreenHeight - 56,
    //         GlobalVar.ScreenHeight,
    //         GlobalVar.ScreenHeight,
    //     ],
    //     outputRange: [0, 56, 180 - 32],
    //     extrapolate: 'clamp',
    // });

    // const textTranslateY = _draggedValue.interpolate({
    //     inputRange: [setHeight(10), GlobalVar.ScreenHeight],
    //     outputRange: [0, 8],
    //     extrapolate: 'clamp',
    // });

    // const textTranslateX = _draggedValue.interpolate({
    //     inputRange: [setHeight(10), GlobalVar.ScreenHeight],
    //     outputRange: [0, -112],
    //     extrapolate: 'clamp',
    // });

    // const textScale = _draggedValue.interpolate({
    //     inputRange: [setHeight(10), GlobalVar.ScreenHeight],
    //     outputRange: [1, 0.7],
    //     extrapolate: 'clamp',
    // });
    return (
        <Modal
            // visible={isVisible}
            animationType="slide"
            presentationStyle="fullScreen"
            // style={{ flex: 1, width: '100%' }}
        >
            <SafeAreaView />
            <StatusBar barStyle="dark-content" backgroundColor={'#c4c4c4'} />
            <LinearGradient
                colors={['#c4c4c4', '#cbcbcb', '#fff']}
                style={styles_music.container}
            >
                <View style={{ height: setHeight(11) }} />
                {/* 아마도 리니어그라디언트때문에 비율 차이 발생한듯 */}
                <View
                    style={{
                        height: setHeight(6),
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity //화면 내리는 버튼
                        onPress={onCloseModal}
                        style={{
                            position: 'absolute',
                            // top: 45,
                            left: setHeight(7), //marginLeft 안먹음
                            height: setHeight(16),
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/down.png')}
                        />
                    </TouchableOpacity>

                    <Text //제목
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

                    <TouchableOpacity //메뉴버튼
                        // onPress={onCloseModal}
                        style={{
                            position: 'absolute',
                            // top: 45,
                            right: setWidth(7),
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
                <View //플레이어 GIF 들어가는 곳
                    style={{
                        // backgroundColor: '#ff0',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        resizeMode="cover"
                        style={styles_music(73).iconStyle}
                        source={{ uri: selectedMusic.artwork }}
                    />
                </View>
                <View style={{ height: setHeight(5) }} />
            </LinearGradient>
            <View
                style={{
                    height: setHeight(93),
                    backgroundColor: '#fff',
                }}
            >
                <View
                    style={{
                        height: setHeight(13),
                        backgroundColor: '#fff',
                        alignItems: 'center',
                    }}
                />
                <View //노래제목
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
                        {selectedMusic.title}
                    </Text>
                </View>
                <View //가수명
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
                                color: '#646464',
                            },
                        ]}
                    >
                        {selectedMusic.artist}
                    </Text>
                </View>
                <View
                    style={{
                        height: setHeight(8),
                        // backgroundColor: '#ff0',
                        alignItems: 'center',
                        ...Platform.select({
                            android: {
                                justifyContent: 'flex-end',
                            },
                            ios: {
                                justifyContent: 'flex-start',
                            },
                            // 아래쪽에 붙일려고 쓴 코드인데 ios는 flex-end하니까 위로 올라가서 플랫폼으로 설정함
                        }),
                    }}
                >
                    <Slider //슬라이더
                        tapToSeek={true}
                        minimumTrackTintColor="#bcbcbc"
                        maximumTrackTintColor="#e8e8e8"
                        onValueChange={e => {
                            onSeekTrack(Math.floor(e * selectedMusic.duration));
                        }}
                        style={{ width: setWidth(86) }}
                        // value={timestamp / selectedMusic.duration}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    {/* /*{' '}
                    <Text style={styles_music.mainText}>
                        {secsToTimestamp(timestamp)}
                    </Text>{' '}
                    0:00
                    <Text style={styles_music.mainText}>
                        {secsToTimestamp(selectedMusic.duration - timestamp)}
                        duration초
                    </Text>
                     */}
                </View>
                <View //임의로 6으로 정함
                    style={{ height: setHeight(6) }}
                />
                <View
                    style={[
                        {
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 15,
                        },
                    ]}
                >
                    <View />

                    <Pressable //셔플
                    // style={{ marginLeft: 10 }}
                    // onPress={onClickLoop}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/Shuffle.png')}
                        />
                    </Pressable>

                    <Pressable //이전곡
                        onPress={onPressPrev}
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
                    </Pressable>

                    <Pressable //재생, 일시정지
                        onPress={playOrPause}
                        style={[
                            styles_music.playButtonHolder,
                            { marginLeft: setWidth(12) },
                        ]}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(7).iconStyle}
                            source={
                                isPlaying
                                    ? require('../../../assets/images/play/Play.png')
                                    : require('../../../assets/images/play/pause.png')
                            }
                        />
                    </Pressable>
                    <Pressable //다음버튼
                        onPress={onPressNext}
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
                    </Pressable>
                    <Pressable //셔플
                        style={{ marginLeft: setWidth(15) }}
                        // onPress={onClickShuffle}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/Replaying.png')}
                        />
                    </Pressable>
                </View>
                {/* <Text onPress={() => this._panel.show(360)}>Show panel</Text> */}

                {/* </GestureRecognizer> */}
                {/* )} */}
            </View>
            {/* {isUpModalVisible && (
                <GestureRecognizer
                    style={{ flex: 1 }}
                    onSwipeUp={() => setisUpModalVisible(true)}
                    onSwipeDown={() => setisUpModalVisible(false)}
                >
                    <Modal>
                        <Text>test</Text>
                    </Modal>
                </GestureRecognizer>
            )} */}
            {/* #region 슬라이딩업패널 */}
            {/* <View
                style={{
                    // flex: 84,
                    setHeight: GlobalVar.FigmaScreenHeight - setHeight(200),
                    backgroundColor: '#f8f9fa',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <SlidingUpPanel
                    ref={React.useRef(null)}
                    draggableRange={{
                        top: GlobalVar.FigmaScreenHeight,
                        bottom: setHeight(5),
                    }}
                    animatedValue={_draggedValue}
                    snappingPoints={[360]}
                    height={GlobalVar.ScreenHeight + 180}
                    friction={5}
                >
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
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'white',
                            position: 'relative',
                        }}
                    >
                        <Animated.View
                            style={[
                                // styles.iconBg,
                                {
                                    opacity: backgoundOpacity,
                                    transform: [{ translateY: iconTranslateY }],
                                },
                            ]}
                        />
                        <View
                            style={{
                                height: setHeight(45),
                                backgroundColor: '#b197fc',
                                justifyContent: 'flex-end',
                                padding: setHeight(6),
                                borderRadius: setHeight(2),
                            }}
                        >
                            <Animated.View
                                style={{
                                    transform: [
                                        { translateY: textTranslateY },
                                        { translateX: textTranslateX },
                                        { scale: textScale },
                                    ],
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 28,
                                        color: '#FFF',
                                    }}
                                >
                                    Sliding Up Panel
                                </Text>
                            </Animated.View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: '#f8f9fa',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text>Bottom sheet content</Text>
                        </View>
                    </View>
                </SlidingUpPanel>
            </View> */}
            {/* #endregion */}
        </Modal>
    );
}
