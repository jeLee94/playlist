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
    ActivityIndicator,
} from 'react-native';
// import GestureRecognizer, {
//     swipeDirections,
// } from 'react-native-swipe-gestures';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
import { secsToTimestamp } from '../../utils/timeFormat';
import { WithLocalSvg } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { styles_common, styles_music } from '../../components/styles';
import { StatusBar } from 'expo-status-bar';
// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export default function MusicPlayer({
    isVisible,
    onCloseModal,
    selectedMusic,
    isPlaying,
    // playOrPause,
    playAudio,
    pauseAudio,
    loadAudio,
    Loading,
    Loaded,
    onSeekTrack,
    timestamp,
    onPressNext,
    onPressPrev,
    onClickShuffle,
    onClickLoop,
}) {
    const [secondmodalVisible, setsecondModalVisible] = useState(false);
    return (
        <Modal
            // visible={isVisible}
            animationType="slide"
            presentationStyle="fullScreen"
            // style={{ flex: 1, width: '100%' }}
        >
            <SafeAreaView />
            {/* #region 두번째 모달 */}
            <Modal //곡정보 버튼 눌렀을때 나오는 이중모달
                animationType="slide"
                visible={secondmodalVisible}
                transparent={true}
                onRequestClose={() => {
                    setsecondModalVisible(false);
                }}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                    // backgroundColor: '#fff',
                }}
            >
                <View
                    style={{
                        backgroundColor: '#00000066',
                        flex: 1,
                    }}
                >
                    <TouchableOpacity //임시로 바깥(위쪽)누르면 꺼지도록 함
                        style={{
                            height: setHeight(70),
                        }}
                        onPress={() =>
                            setsecondModalVisible(!secondmodalVisible)
                        }
                    ></TouchableOpacity>
                    {/* 모달 내용 */}
                    <View
                        style={[
                            {
                                // marginTop: setHeight(60),
                                height: setHeight(69),
                                width: setWidth(74),
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: setWidth(2),
                                alignSelf: 'center',
                                // justifyContent:
                                //     'center',
                                // flex: 1,
                            },
                        ]}
                    >
                        <View
                            style={{
                                height: setHeight(3),
                                // backgroundColor: '#000',
                            }}
                        />
                        <View
                            style={{
                                height: setHeight(9),
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text>이중모달 테스트</Text>
                        </View>
                        <View
                            style={{
                                height: setHeight(12),
                                // backgroundColor: '#000',
                            }}
                        />
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: setHeight(8),
                                paddingRight: setWidth(7),
                                paddingLeft: setWidth(7),
                            }}
                        >
                            <Text
                                style={[
                                    styles_common.text,
                                    {
                                        color: '#747474',
                                        fontSize: RFValue(
                                            28 * GlobalVar.ValueMultiplied,
                                            GlobalVar.FigmaScreenHeight
                                        ),
                                    },
                                ]}
                            >
                                이중모달 테스트
                            </Text>
                        </View>
                        <View
                            style={{
                                height: setHeight(4),
                                // backgroundColor: '#000',
                            }}
                        />
                        <View
                            style={{
                                alignItems: 'center',
                            }}
                        >
                            <WithLocalSvg
                                width={setWidth(60)}
                                height={setHeight(1)}
                                asset={require('../../../assets/images/play_test/underline.svg')}
                            />
                        </View>
                        <View
                            style={{
                                height: setHeight(14),
                                // backgroundColor: '#000',
                            }}
                        />
                        <TouchableOpacity //수정 버튼
                            style={{
                                alignItems: 'center',
                            }}
                            onPress={() => setsecondModalVisible(false)}
                        >
                            <WithLocalSvg
                                width={setWidth(21)}
                                height={setHeight(9)}
                                asset={require('../../../assets/images/play_test/revise_after.svg')}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity //임시로 바깥(아래쪽)누르면 꺼지도록 함
                        style={{
                            height: setHeight(70),
                        }}
                        onPress={() =>
                            setsecondModalVisible(!secondmodalVisible)
                        }
                    ></TouchableOpacity>
                </View>
            </Modal>
            {/* #endregion */}
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
                        }}
                    >
                        {/* <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/down.png')}
                        /> */}
                        <WithLocalSvg
                            width={setWidth(5)}
                            height={setHeight(5)}
                            asset={require('../../../assets/images/play_test/down.svg')}
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

                    <TouchableOpacity //음악정보(하트메뉴)버튼
                        // onPress={onCloseModal}
                        style={{
                            position: 'absolute',
                            // top: 45,
                            right: setWidth(7),
                        }}
                        onPress={() => setsecondModalVisible(true)}
                    >
                        {/* <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/menu.png')}
                        /> */}
                        <WithLocalSvg
                            width={setWidth(8)}
                            height={setHeight(8)}
                            asset={require('../../../assets/images/play_test/music_info.svg')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ height: setHeight(88) }}>
                    <View>
                        {Loading ? (
                            <ActivityIndicator size={'small'} color={'red'} />
                        ) : (
                            <>
                                {Loaded === false ? (
                                    <>
                                        <ActivityIndicator />
                                        <Text>Loading Song</Text>
                                    </>
                                ) : (
                                    <>
                                        {/* <Button
                                            title="Play Song"
                                            onPress={playAudio}
                                        />
                                        <Button
                                            title="Pause Song"
                                            onPress={pauseAudio}
                                        /> */}
                                    </>
                                )}
                            </>
                        )}
                    </View>
                </View>
                {/* <View //플레이어 GIF 들어가는 곳
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
                </View> */}
                {/* <View style={{ height: setHeight(5) }} /> */}
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
                <View style={{ height: setHeight(6) }} />
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
                    {/* <View style={{ width: setWidth(7) }} /> */}
                    <TouchableOpacity //셔플
                        style={{ marginLeft: setWidth(7) }}
                        // onPress={onClickLoop}
                    >
                        {/* <Image
                            resizeMode="cover"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/Shuffle.png')}
                        /> */}
                        <WithLocalSvg
                            width={setWidth(8)}
                            height={setHeight(8)}
                            asset={require('../../../assets/images/play_test/shuffle.svg')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity //이전곡
                        onPress={onPressPrev}
                        style={{
                            marginLeft: setWidth(13),
                            // backgroundColor: '#000',
                        }}
                    >
                        {/* <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/skip-previous.png')}
                        /> */}
                        <WithLocalSvg
                            width={setWidth(8)}
                            height={setHeight(8)}
                            asset={require('../../../assets/images/play_test/skip_prev.svg')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity //재생, 일시정지
                        onPress={isPlaying ? playAudio : pauseAudio}
                        style={[
                            styles_music.playButtonHolder,
                            { marginLeft: setWidth(6) },
                        ]}
                    >
                        {/* <Image
                            resizeMode="contain"
                            style={styles_music(7).iconStyle}
                            source={
                                isPlaying
                                    ? require('../../../assets/images/play/Play.png')
                                    : require('../../../assets/images/play/pause.png')
                            }
                        /> */}
                        <WithLocalSvg
                            width={setWidth(13)}
                            height={setHeight(13)}
                            asset={
                                isPlaying
                                    ? require('../../../assets/images/play_test/play_arrow.svg')
                                    : require('../../../assets/images/play_test/pause.svg') //일시정지 대체(임시)
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity //다음버튼
                        onPress={onPressNext}
                        style={{
                            // top: setHeight(1),
                            marginLeft: setWidth(6),
                        }}
                    >
                        {/* <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/skip-forward.png')}
                        /> */}
                        <WithLocalSvg
                            width={setWidth(8)}
                            height={setHeight(8)}
                            asset={require('../../../assets/images/play_test/skip_next.svg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity //셔플
                        onPress={pauseAudio}
                        style={{
                            marginLeft: setWidth(13),
                            marginRight: setWidth(7),
                        }}
                        // onPress={onClickShuffle}
                    >
                        {/* <Image
                            resizeMode="contain"
                            style={styles_music(5).iconStyle}
                            source={require('../../../assets/images/play/Replaying.png')}
                        /> */}
                        <WithLocalSvg
                            width={setWidth(8)}
                            height={setHeight(8)}
                            asset={require('../../../assets/images/play_test/repeat.svg')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
