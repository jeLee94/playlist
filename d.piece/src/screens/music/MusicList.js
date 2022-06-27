import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    FlatList,
    Pressable,
    TextInput,
    Modal,
} from 'react-native';
import GestureRecognizer, {
    swipeDirections,
} from 'react-native-swipe-gestures';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
import { WithLocalSvg } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { styles_common, styles_music } from '../../components/styles';
import { musiclibrary } from '../../utils/data';
import MusicPlayer from './MusicPlayer';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Audio } from 'expo-av';
// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export function MusicList() {
    //#region 리스트렌더
    const TrackListScreen = () => {
        const [selectedMusic, setSelectedMusic] = useState(null); //음악선택
        const [selectedMusicIndex, setSelectedMusicIndex] = useState(null); //리스트 내에 인덱스
        const [isPlayerModalVisible, setisPlayerModalVisible] = useState(false); //대형플레이어 모달 보일지말지 설정용
        const [isPlaying, setIsPlaying] = useState(false); //재생 설정용
        const [timestamp, setTimestamp] = useState(0); //재생시간 설정용
        const [mode, setMode] = useState('shuffle'); //셔플기능
        const [soundmusic, setSound] = useState('');
        const GlobalIndex = selectedMusicIndex % musiclibrary.length;
        // const GlobalIndex = selectedMusicIndex;
        const [Loaded, SetLoaded] = useState(false);
        const [Loading, SetLoading] = useState(false);
        const sound = React.useRef(new Audio.Sound());

        React.useEffect(() => {
            LoadAudio(); //이거 여기서 빼면 실행안됨
            onPressNext();

            // onSelectTrack();
        }, []);

        //https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
        const PlayAudio = async () => {
            // setIsPlaying(!isPlaying);
            // const { sound: playbackObject } = await Audio.Sound.createAsync(
            //     // require('../../../assets/Hello.mp3')
            //     {
            //         uri: musiclibrary[GlobalIndex].url,
            //     },
            //     { shouldPlay: true }
            // );

            try {
                const result = await sound.current.getStatusAsync();
                if (result.isLoaded) {
                    if (result.isPlaying === false) {
                        sound.current.playAsync();
                        setIsPlaying(false);
                    }
                }
                console.log('isPlaying:' + isPlaying);
                console.log(result.isPlaying);
            } catch (error) {
                setIsPlaying(false);
            }
        };
        const PauseAudio = async () => {
            // setIsPlaying(!isPlaying);
            try {
                const result = await sound.current.getStatusAsync();
                if (result.isLoaded) {
                    if (result.isPlaying === true) {
                        await sound.current.pauseAsync();
                        result.isPlaying === false;
                        setIsPlaying(true);
                    }
                }
                console.log('isPlaying:' + isPlaying);
                console.log(result.isPlaying);
            } catch (error) {
                setIsPlaying(true);
            }
        };
        const LoadAudio = async () => {
            SetLoading(true);
            const checkLoading = await sound.current.getStatusAsync();
            if (checkLoading.isLoaded === false) {
                try {
                    const result = await sound.current.loadAsync(
                        { uri: musiclibrary[GlobalIndex].url },

                        // require('../../../assets/Hello.mp3'),
                        {},
                        true
                    );
                    if (result.isLoaded === false) {
                        SetLoading(false);
                        console.log('Error in Loading Audio');
                    } else {
                        SetLoading(false);
                        SetLoaded(true);
                    }
                } catch (error) {
                    console.log(error);
                    SetLoading(false);
                }
            } else {
                SetLoading(false);
            }
        };

        //0606 시도
        // const playOrPause = async () => {
        //     setIsPlaying(!isPlaying);
        //     try {
        //         if (isPlaying == true) {
        //             const { sound: playbackObject } =
        //                 await Audio.Sound.createAsync(
        //                     // require('../../../assets/Hello.mp3')
        //                     {
        //                         uri: musiclibrary[GlobalIndex].url,
        //                     },
        //                     { shouldPlay: true }
        //                 );
        //             console.log(musiclibrary[GlobalIndex].title);
        //             console.log('status: isPlaying ' + isPlaying);
        //             setSound(sound);
        //             // await sound.playAsync();
        //         } else {
        //             console.log('status: isPlaying ' + isPlaying);
        //             sound = await Audio.Sound.pauseAsync();
        //         }
        //     } catch (error) {
        //         alert('Error' + error.message);
        //     }
        // };

        const onSelectTrack = async (selectedTrack, index) => {
            //비동기함수로 선택된 트랙과 인덱스 받아옴
            // useEffect(() => {
            console.log('selectedTrack ' + selectedTrack.title);
            console.log('index ' + index); //index를 왜 못받아올깡...
            setSelectedMusic(musiclibrary[index % musiclibrary.length]);
            setisPlayerModalVisible(true);
            setTimestamp(0);

            if (SetLoaded) PlayAudio();
            setIsPlaying(true);
            setSelectedMusicIndex(index); //이게 안먹어서
            console.log('selectedindex:' + selectedMusicIndex); //이게 계속 1임
            console.log('selectedMusic:' + selectedMusic);
            // remove TrackPlayer.skip(index);
            // }, []);
            return index, selectedTrack;
        };

        const onSeekTrack = newTimeStamp => {
            setTimestamp(newTimeStamp);
            setIsPlaying(true);
        };

        const onPressNext = () => {
            setTimestamp(0);
            setIsPlaying(false);
            PlayAudio();
            SetLoading(false);
            setSelectedMusic(
                musiclibrary[(selectedMusicIndex + 1) % musiclibrary.length]
            );
            console.log(selectedMusicIndex);
            console.log('s:' + selectedMusicIndex);
            setisPlayerModalVisible(true);
            setSelectedMusicIndex(selectedMusicIndex + 1);
        };

        const onPressPrev = () => {
            if (selectedMusicIndex === 0) {
                return;
            }
            setTimestamp(0);
            setIsPlaying(false);
            setSelectedMusic(
                musiclibrary[(selectedMusicIndex - 1) % musiclibrary.length]
            );
            PlayAudio();
            console.log('s:' + selectedMusicIndex);
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
                            //리스트 한줄 프레서블로 감쌈 ->이거 누르면 플레이어 보인다는 뜻
                            style={{ flex: 1 }}
                            // onPress={() => onSelectTrack(item, index)}
                            onPress={() =>
                                onSelectTrack(item, index) ||
                                setSelectedMusicIndex(index)
                            }
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View
                                    //리스트 앞에 이상한 땡땡이 선 들어가는 곳
                                    style={{ width: setWidth(14) }}
                                />
                                <Image //리스트에서의 앨범 커버 이미지
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
                        {/* 메뉴(점세개) 누르는 곳 -> 0605 디자인 수정으로 삭제 */}
                        {/* <TouchableOpacity
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
                        </TouchableOpacity> */}
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

                {selectedMusic && isPlayerModalVisible && (
                    //https://www.npmjs.com/package/react-native-swipe-gestures
                    <GestureRecognizer
                        style={{ flex: 1 }}
                        onSwipeUp={() => setisPlayerModalVisible(true)}
                        onSwipeDown={() => setisPlayerModalVisible(false)}
                    >
                        <MusicPlayer
                            onCloseModal={() => setisPlayerModalVisible(false)}
                            isVisible={isPlayerModalVisible}
                            isPlaying={isPlaying}
                            // playOrPause={playOrPause}
                            playAudio={PlayAudio}
                            pauseAudio={PauseAudio}
                            loadAudio={LoadAudio}
                            Loading={Loading}
                            Loaded={Loaded}
                            selectedMusic={selectedMusic}
                            onSeekTrack={onSeekTrack}
                            timestamp={timestamp}
                            onPressNext={onPressNext}
                            onPressPrev={onPressPrev}
                            playbackMode={mode}
                            onClickLoop={() =>
                                mood === 'loop'
                                    ? setMode('loop')
                                    : setMode('off')
                            }
                        ></MusicPlayer>
                    </GestureRecognizer>
                )}
            </View>
        );
    };
    //#endregion
    const [menuVisible, setmenuVisible] = useState(false);
    const [modifyModalVisible, setmodifyModalVisible] = useState(false);
    //function Music의 리턴값
    return (
        // SafeAreaView 구현해둠
        <View>
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
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={'#c0c0c0'}
                />

                {/* 상단 회색부분 전체 59로 묶고 내부에 텍스트 배치함 */}
                <View
                    style={{
                        height: setHeight(59),
                        backgroundColor: '#c0c0c0',
                    }}
                >
                    <View style={{ height: setHeight(10) }} />
                    {/* <View style={{ height: setHeight(5) }} /> */}
                    <View
                        style={[
                            styles_music.container_background,
                            {
                                backgroundColor: '#c0c0c0',
                                flexDirection: 'column', // 하위 컴포넌트를 가로로 배치
                                paddingLeft: '7%',
                                paddingRight: '7%',
                                justifyContent: 'center',
                            },
                        ]}
                    >
                        <View
                            style={{
                                // backgroundColor: '#ff0',
                                height: setHeight(20),
                                flexDirection: 'column',
                                // alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <TouchableOpacity //이전 버튼
                                style={{
                                    position: 'absolute',
                                    left: setWidth(0),
                                }}
                            >
                                <WithLocalSvg
                                    width={setWidth(5)}
                                    height={setHeight(5)}
                                    asset={require('../../../assets/images/play_test/backpage.svg')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity //메뉴 버튼
                                style={{
                                    position: 'absolute',
                                    right: setWidth(0),
                                }}
                                onPress={() => setmenuVisible(!menuVisible)}
                            >
                                <Menu //팝업 메뉴 띄우기 https://www.npmjs.com/package/react-native-material-menu
                                    visible={menuVisible}
                                    animationDuration={100}
                                    anchor={
                                        <WithLocalSvg
                                            width={setWidth(5)}
                                            height={setHeight(5)}
                                            asset={require('../../../assets/images/play_test/more_info.svg')}
                                        />
                                    }
                                    onRequestClose={() => setmenuVisible(false)} //메뉴 바깥 누르면 꺼지도록 설정
                                >
                                    <Modal //이름 수정하기 눌렀을 때 나오는 모달
                                        animationType="slide"
                                        visible={modifyModalVisible}
                                        transparent={true}
                                        onRequestClose={() => {
                                            setmodifyModalVisible(
                                                !modifyModalVisible
                                            );
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
                                            <Pressable //임시로 바깥(위쪽)누르면 꺼지도록 함
                                                style={{
                                                    height: setHeight(70),
                                                }}
                                                onPress={() =>
                                                    setmodifyModalVisible(
                                                        !modifyModalVisible
                                                    )
                                                }
                                            ></Pressable>
                                            {/* 모달 내용 */}
                                            <View
                                                style={[
                                                    {
                                                        // marginTop: setHeight(60),
                                                        height: setHeight(69),
                                                        width: setWidth(74),
                                                        backgroundColor: '#fff',
                                                        borderRadius: 10,
                                                        paddingHorizontal:
                                                            setWidth(2),
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
                                                        justifyContent:
                                                            'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Text>이름 수정하기</Text>
                                                </View>
                                                <View
                                                    style={{
                                                        height: setHeight(12),
                                                        // backgroundColor: '#000',
                                                    }}
                                                />
                                                <View
                                                    style={{
                                                        justifyContent:
                                                            'center',
                                                        alignItems: 'center',
                                                        height: setHeight(8),
                                                        paddingRight:
                                                            setWidth(7),
                                                        paddingLeft:
                                                            setWidth(7),
                                                    }}
                                                >
                                                    <TextInput
                                                        style={[
                                                            styles_common.text,
                                                            {
                                                                color: '#747474',
                                                                fontSize:
                                                                    RFValue(
                                                                        28 *
                                                                            GlobalVar.ValueMultiplied,
                                                                        GlobalVar.FigmaScreenHeight
                                                                    ),
                                                            },
                                                        ]}
                                                    >
                                                        잠 잘자고 싶다...
                                                    </TextInput>
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
                                                    onPress={() =>
                                                        setmodifyModalVisible(
                                                            false
                                                        ) ||
                                                        setmenuVisible(false)
                                                    }
                                                >
                                                    <WithLocalSvg
                                                        width={setWidth(21)}
                                                        height={setHeight(9)}
                                                        asset={require('../../../assets/images/play_test/revise_after.svg')}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                            <Pressable //임시로 바깥(아래쪽)누르면 꺼지도록 함
                                                style={{
                                                    height: setHeight(70),
                                                }}
                                                onPress={() =>
                                                    setmodifyModalVisible(
                                                        !modifyModalVisible
                                                    )
                                                }
                                            ></Pressable>
                                        </View>
                                    </Modal>
                                    <MenuItem
                                        onPress={
                                            () => setmodifyModalVisible(true)
                                            // setmenuVisible(false)
                                        }
                                    >
                                        이름 수정하기
                                    </MenuItem>
                                    <MenuItem
                                        onPress={() => setmenuVisible(false)}
                                    >
                                        음원 꾸러미 삭제
                                    </MenuItem>
                                </Menu>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: setHeight(12) }} />
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
                            {/* props로 데이터 받아오도록 바꿔주기 */}
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
