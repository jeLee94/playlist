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
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
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
import { MusicPlayer } from './MusicPlayer';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export const Music = () => {
    return (
        // SafeAreaView 구현해둠
        <ScrollView showsVerticalScrollIndicator={false}>
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
        </ScrollView>
    );
};
export default function TrackListScreen() {
    const [selectedMusic, setSelectedMusic] = useState(null); //음악선택 변수
    const [selectedMusicIndex, setSelectedMusicIndex] = useState(null); //리스트 내에 인덱스
    const [isPlayerModalVisible, setisPlayerModalVisible] = useState(false); //미니플레이어 모달 보일지말지 설정용
    const [isPlaying, setIsPlaying] = useState(false); //재생 설정용
    const [timestamp, setTimestamp] = useState(0); //재생시간 설정용
    const [mode, setMode] = useState('shuffle'); //셔플기능
    const [sound, setSound] = useState('');

    const onSelectTrack = async (selectedTrack, index) => {
        //비동기함수로 선택된 트랙과 인덱스 받아옴
        setSelectedMusic(selectedTrack); //
        setTimestamp(0);
        setIsPlaying(true);
        setSelectedMusicIndex(index);
        // remove TrackPlayer.skip(index);
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
            setSound();
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
        setSelectedMusicIndex(selectedMusicIndex - 1);
    };

    //리스트 한줄씩 보여줌
    const renderSingleMusic = ({ item, index }) => {
        //item = data.js 전체 목록 어디서받아오는거지?
        //const backgroundColor = item.url === selectedMusic.url ? '#565656' : '#000';
        let minuites = Math.floor(item.duration / 60);
        let seconds = item.duration % 60;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return (
            <>
                {index === 0}
                <View style={{ flexDirection: 'row' }}>
                    <Pressable
                        style={{ flex: 9 }}
                        onPress={() => onSelectTrack(item, index)}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <View
                                //이상한 땡땡이 선 들어가는 곳
                                style={{ width: setWidth(14) }}
                            />
                            <Image
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
                                                12 * GlobalVar.ValueMultiplied,
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
                                                10 * GlobalVar.ValueMultiplied,
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
                    <TouchableOpacity
                        style={{ flex: 1, justifyContent: 'center' }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                            }}
                        >
                            <Image
                                //메뉴 점세개 이미지
                                resizeMode="cover"
                                source={require('../../../assets/images/play/menu.png')}
                                style={[
                                    styles_music(5).iconStyle,
                                    {
                                        tintColor: '#bcbcbc',
                                    },
                                ]}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    //각 리스트 사이 간격 조정
                    style={{ height: setHeight(4) }}
                />
            </>
        );
    };

    //전체 TrackListScreen()의 return
    return (
        <View style={[{ backgroundColor: '#fff' }]}>
            {/* <StatusBar barStyle="default" backgroundColor={'#A0C4DF'} /> */}
            <SafeAreaView />

            {/* <LinearGradient
                colors={['#A0C4DF', '#708090', '#191414']}
                style={styles_music.linearGradient}
            >
                <Text style={styles_music.musicTitle}>재생목록</Text>
            </LinearGradient> */}

            <FlatList
                data={musiclibrary}
                keyExtractor={item => item.url}
                renderItem={renderSingleMusic}
            />

            {/* 리스트 하나 눌렀을 때 상호작용 */}
            {selectedMusic &&
                {
                    /* <Pressable onPress={() => setisPlayerModalVisible(true)}>
                    <View style={[styles_music.widgetContainer]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                resizeMode="stretch"
                                source={{ uri: selectedMusic.artwork }}
                                style={styles_music.widgetImageStyle}
                            />
                            <View>
                                <Text style={styles_music.widgetMusicTitle}>
                                    {selectedMusic.title}
                                </Text>
                                <Text style={styles_music.widgetArtisteTitle}>
                                    {selectedMusic.artist}
                                </Text>
                            </View>
                        </View>
                        {/* 이전 
                        {/* <Pressable
                            style={{ marginLeft: 75 }}
                            onPress={() => onPressPrev()}
                        >
                            <Entypo
                                name="controller-jump-to-start"
                                size={24}
                                color="white"
                            />
                        </Pressable> 
                        {/* 재생,일시정지 
                        {/* <Pressable onPress={() => playOrPause()}>
                            <Entypo
                                name={
                                    isPlaying
                                        ? 'controller-paus'
                                        : 'controller-play'
                                }
                                size={28}
                                color="white"
                            />
                        </Pressable>
                        {/* 다음곡 
                        {/* <Pressable
                            style={{ marginRight: 15 }}
                            onPress={() => onPressNext()}
                        >
                            <Entypo
                                name="controller-next"
                                size={24}
                                color="white"
                            />
                        </Pressable>
                    </View>
                </Pressable>  */
                }}
            {selectedMusic && (
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
            )}
        </View>
    );
}
