import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
    FlatList,
    Pressable,
    Modal,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
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
import { musiclibrary } from '../../utils/data';
import MusicPlayer from './MusicPlayer';
import Slider from '@react-native-community/slider';
import { secsToTimestamp } from '../../utils/timeFormat';
// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export function Music() {
    //#region 리스트렌더
    const TrackListScreen = () => {
        const [selectedMusic, setSelectedMusic] = useState(null); //음악선택 -> 미니 플레이어 보이게함
        const [selectedMusicIndex, setSelectedMusicIndex] = useState(null); //리스트 내에 인덱스
        const [isPlayerModalVisible, setisPlayerModalVisible] = useState(false); //대형플레이어 모달 보일지말지 설정용
        const [isPlaying, setIsPlaying] = useState(false); //재생 설정용
        const [timestamp, setTimestamp] = useState(0); //재생시간 설정용
        const [mode, setMode] = useState('shuffle'); //셔플기능
        const [sound, setSound] = useState('');

        const onSelectTrack = async (selectedTrack, index) => {
            //비동기함수로 선택된 트랙과 인덱스 받아옴
            // useEffect(() => {
            setSelectedMusic(selectedTrack);
            setisPlayerModalVisible(true);
            setTimestamp(0);
            setIsPlaying(true);
            setSelectedMusicIndex(index);
            // remove TrackPlayer.skip(index);
            // }, []);
        };

        const playOrPause = async () => {
            setIsPlaying(!isPlaying);
            if (isPlaying == true) {
                const { sound } = await Audio.Sound.createAsync(
                    require('../../../assets/Hello.mp3')
                );
                setSound(sound);

                console.log('Playing Sound');
                await sound.playAsync();
            } else {
                setSound(null);
            }
        };

        const onSeekTrack = newTimeStamp => {
            setTimestamp(newTimeStamp);
            setIsPlaying(true);
        };

        const onPressNext = () => {
            setTimestamp(0);
            setIsPlaying(true);
            setSelectedMusic(
                musiclibrary[(selectedMusicIndex + 1) % musiclibrary.length]
            );
            setisPlayerModalVisible(true);
            setSelectedMusicIndex(selectedMusicIndex + 1);
        };

        const onPressPrev = () => {
            if (selectedMusicIndex === 0) {
                return;
            }
            setTimestamp(0);
            setIsPlaying(true);
            setSelectedMusic(
                musiclibrary[(selectedMusicIndex - 1) % musiclibrary.length]
            );
            setisPlayerModalVisible(true);
            setSelectedMusicIndex(selectedMusicIndex - 1);
        };

        //리스트 한줄씩 보여줌
        const renderSingleMusic = ({ item, index }) => {
            let minuites = Math.floor(item.duration / 60);
            let seconds = item.duration % 60;
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            //각 리스트 한줄 렌더 시키는 함수
            return (
                <>
                    {index === 0}
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable
                            //리스트 한줄 프레서블로 감쌈 ->이거 누르면 미니 플레이어 보임
                            style={{ flex: 9 }}
                            onPress={() => onSelectTrack(item, index)}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View
                                    //리스트 앞에 이상한 땡땡이 선 들어가는 곳
                                    style={{ width: setWidth(14) }}
                                />
                                <Image //플레이중인 앨범 커버 이미지
                                    resizeMode="cover"
                                    source={{ uri: item.artwork }}
                                    style={styles_music(14).listImageStyle}
                                />

                                <View style={{ width: setWidth(2) }} />
                                <View style={{ justifyContent: 'center' }}>
                                    <Text
                                        style={[
                                            styles_common.text,
                                            {
                                                color: '#000',
                                                fontSize: RFValue(
                                                    12 *
                                                        GlobalVar.ValueMultiplied,
                                                    GlobalVar.FigmaScreenHeight
                                                ),
                                            },
                                        ]}
                                    >
                                        {item.title}
                                    </Text>
                                    <View style={{ height: setHeight(1) }} />
                                    <Text
                                        style={[
                                            styles_common.text,
                                            {
                                                color: '#a6a6a6',
                                                fontSize: RFValue(
                                                    10 *
                                                        GlobalVar.ValueMultiplied,
                                                    GlobalVar.FigmaScreenHeight
                                                ),
                                            },
                                        ]}
                                    >
                                        {minuites + ' : ' + seconds}
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                        {/* 메뉴(점세개) 누르는 곳 */}
                        <TouchableOpacity
                            style={{ flex: 1, justifyContent: 'center' }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    //메뉴 점세개 이미지
                                    resizeMode="cover"
                                    source={require('../../../assets/images/play/menu.png')}
                                    style={[
                                        styles_music(5).iconStyle,
                                        { tintColor: '#bcbcbc' },
                                    ]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                        //각 리스트 사이 간격 비율 4
                        style={{ height: setHeight(4) }}
                    />
                </>
            );
        };

        //전체 TrackListScreen()의 return
        return (
            <View style={[{ backgroundColor: '#fff' }]}>
                <SafeAreaView />
                {/* 리스트 렌더링 */}
                <FlatList
                    data={musiclibrary}
                    keyExtractor={item => item.url}
                    renderItem={renderSingleMusic}
                    style={{ height: setHeight(110) }}
                    //왜인진 모르겠는데 110으로 해야만 리스트뷰 다 뜸
                />

                {/* 리스트 하나 눌렀을 때 플레이어 상호작용 */}
                {selectedMusic && isPlayerModalVisible && (
                    <Modal>
                        <LinearGradient
                            colors={['#c4c4c4', '#cbcbcb', '#fff']}
                            style={{ height: setHeight(118) }}
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
                                {/* 화면 내리는 버튼 */}
                                <TouchableOpacity
                                    onPress={() => {
                                        setisPlayerModalVisible(false);
                                    }}
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
                            <View
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
                                    {selectedMusic.title}
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
                                <Slider
                                    tapToSeek={true}
                                    minimumTrackTintColor="#bcbcbc"
                                    maximumTrackTintColor="#e8e8e8"
                                    onValueChange={e => {
                                        onSeekTrack(
                                            Math.floor(
                                                e * selectedMusic.duration
                                            )
                                        );
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
                                {/* <Text style={styles_music.mainText}>
                                    {secsToTimestamp(timestamp)}
                                </Text> 0:00
                                <Text style={styles_music.mainText}>
                                    {secsToTimestamp(
                                        selectedMusic.duration - timestamp
                                    )}  duration초
                                </Text> */}
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
                                {/* 셔플 */}
                                <Pressable
                                // style={{ marginLeft: 10 }}
                                // onPress={onClickLoop}
                                >
                                    <Image
                                        resizeMode="contain"
                                        style={styles_music(5).iconStyle}
                                        source={require('../../../assets/images/play/Shuffle.png')}
                                    />
                                </Pressable>
                                {/* 이전곡 */}
                                <Pressable
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
                                {/* 재생/일시정지 */}
                                <Pressable
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
                                {/* 다음버튼 */}
                                <Pressable
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
                                {/* 셔플 */}
                                <Pressable
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
                        </View>
                    </Modal>
                )}
                {/* {selectedMusic && (
                    <MusicPlayer
                        onCloseModal={() => setisPlayerModalVisible(false)}
                        isVisible={isPlayerModalVisible}
                        isPlaying={isPlaying}
                        playOrPause={playOrPause}
                        selectedMusic={selectedMusic}
                        onSeekTrack={onSeekTrack}
                        timestamp={timestamp}
                        onPressNext={onPressNext}
                        onPressPrev={onPressPrev}
                        playbackMode={mode}
                        onClickLoop={() =>
                            mood === 'loop' ? setMode('loop') : setMode('off')
                        }
                    />
                )} */}
            </View>
        );
    };
    //#endregion
    return (
        // SafeAreaView 구현해둠
        <View showsVerticalScrollIndicator={false}>
            <View
                style={[
                    styles_music.container_background,
                    {
                        height: setHeight(
                            10 + 59 + 9 + 18 * musiclibrary.length
                        ),

                        backgroundColor: '#fff',
                    },
                    //211로 고정하면 플레이리스트 더 생겨도 짤림,
                    //height 안주면 플레이리스트 안생긴 곳 회색처리 됨, 수정하기
                    //일단 임시로 전체 높이 구함
                ]}
            >
                <SafeAreaView />
                <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

                {/* 상단 회색부분 전체 59로 묶고 내부에 텍스트 배치함 */}
                <View
                    style={{
                        height: setHeight(59),
                        backgroundColor: '#c0c0c0',
                    }}
                >
                    <View style={{ height: setHeight(10) }} />
                    <View style={{ height: setHeight(5) }} />
                    <View
                        style={[
                            styles_music.container_background,
                            {
                                backgroundColor: '#c0c0c0',
                                flexDirection: 'column', // 하위 컴포넌트를 가로로 배치
                                paddingLeft: '7%',
                                justifyContent: 'center',
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles_common.text,
                                {
                                    color: '#fff',
                                    fontSize: RFValue(
                                        16 * GlobalVar.ValueMultiplied,
                                        GlobalVar.FigmaScreenHeight
                                    ),
                                },
                            ]}
                        >
                            잠 잘자고 싶다...
                            {/* props로 나중에 바꿔주기 */}
                        </Text>
                    </View>
                    <View style={{ height: setHeight(1) }} />
                    <View
                        style={[
                            {
                                backgroundColor: '#c0c0c0',
                                flexDirection: 'column', // 하위 컴포넌트를 가로로 배치
                                paddingLeft: '7%',
                                justifyContent: 'center',
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles_common.text,
                                {
                                    color: '#fff',
                                    fontSize: RFValue(
                                        12 * GlobalVar.ValueMultiplied,
                                        GlobalVar.FigmaScreenHeight
                                    ),
                                },
                            ]}
                        >
                            2022년 5월 18일
                            {/* DB에서 저장한 날짜 받아오기 props로 해결가능?*/}
                        </Text>
                    </View>
                </View>
                <View
                    style={{ height: setHeight(9), backgroundColor: '#fff' }}
                />

                <TrackListScreen />
            </View>
        </View>
    );
}
