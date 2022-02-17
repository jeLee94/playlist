import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    Pressable,
    SafeAreaView,
    StatusBar,
} from "react-native";

import { musiclibrary } from "../../util/data"; //음원 목록 데이터
import { LinearGradient } from "expo-linear-gradient"; //배경에 선형그라디언트
import TrackPlayerScreen from "../components/TrackPlayerModal"; //플레이어용 소스코드
import { Entypo } from "@expo/vector-icons";
import { styles_list } from "../components/styles";

export default function TrackListScreen() {
    const [selectedMusic, setSelectedMusic] = useState(null); //음악선택 변수
    const [selectedMusicIndex, setSelectedMusicIndex] = useState(null); //리스트 내에 인덱스
    const [isPlayerModalVisible, setisPlayerModalVisible] = useState(false); //미니플레이어 모달 보일지말지 설정용
    const [isPlaying, setIsPlaying] = useState(false); //재생 설정용
    const [timestamp, setTimestamp] = useState(0); //재생시간 설정용
    const [mode, setMode] = useState("shuffle"); //셔플기능

    const onSelectTrack = async (selectedTrack, index) => {
        //비동기함수로 선택된 트랙과 인덱스 받아옴
        setSelectedMusic(selectedTrack); //
        setTimestamp(0);
        setSelectedMusicIndex(index);
        // remove TrackPlayer.skip(index);
        // playOrPause();
    };

    const playOrPause = async () => {
        setIsPlaying(!isPlaying);
    };

    const onSeekTrack = (newTimeStamp) => {
        setTimestamp(newTimeStamp);
    };

    const onPressNext = () => {
        setTimestamp(0);
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
        setSelectedMusic(
            musiclibrary[(selectedMusicIndex - 1) % musiclibrary.length]
        );
        setSelectedMusicIndex(selectedMusicIndex - 1);
    };

    const renderSingleMusic = ({ item, index }) => {
        //item = data.js 전체 목록 어디서받아오는거지?
        //const backgroundColor = item.url === selectedMusic.url ? '#565656' : '#000';
        return (
            <>
                {index === 0}
                <Pressable onPress={() => onSelectTrack(item, index)}>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            resizeMode="cover"
                            source={{ uri: item.artwork }}
                            style={styles_list.listImageStyle}
                        />
                        <View>
                            <Text style={styles_list.musicTitle}>
                                {item.title}
                            </Text>
                            <Text style={styles_list.artisteTitle}>
                                {item.artist}
                            </Text>
                        </View>
                    </View>
                </Pressable>
            </>
        );
    };

    return (
        <View style={styles_list.container}>
            <StatusBar barStyle="default" backgroundColor={"#A0C4DF"} />
            <SafeAreaView />
            {selectedMusic && (
                <TrackPlayerScreen
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
                        mood === "loop" ? setMode("loop") : setMode("off")
                    }
                />
            )}

            <LinearGradient
                colors={["#A0C4DF", "#708090", "#191414"]}
                style={styles_list.linearGradient}
            >
                <Text style={styles_list.musicTitle}>재생목록</Text>
            </LinearGradient>

            <FlatList
                data={musiclibrary}
                keyExtractor={(item) => item.url}
                renderItem={renderSingleMusic}
            />

            {selectedMusic && (
                <Pressable onPress={() => setisPlayerModalVisible(true)}>
                    <View style={[styles_list.widgetContainer, {}]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                resizeMode="cover"
                                source={{ uri: selectedMusic.artwork }}
                                style={styles_list.widgetImageStyle}
                            />
                            <View>
                                <Text style={styles_list.widgetMusicTitle}>
                                    {selectedMusic.title}
                                </Text>
                                <Text style={styles_list.widgetArtisteTitle}>
                                    {selectedMusic.artist}
                                </Text>
                            </View>
                        </View>
                        {/* 이전 */}
                        <Pressable
                            style={{ marginLeft: 75 }}
                            onPress={() => onPressPrev()}
                        >
                            <Entypo
                                name="controller-jump-to-start"
                                size={24}
                                color="white"
                            />
                        </Pressable>
                        {/* 재생,일시정지 */}
                        <Pressable onPress={() => playOrPause()}>
                            <Entypo
                                name={
                                    isPlaying
                                        ? "controller-paus"
                                        : "controller-play"
                                }
                                size={28}
                                color="white"
                            />
                        </Pressable>
                        {/* 다음곡 */}
                        <Pressable
                            style={{ marginRight: 15 }}
                            onPress={() => onPressPrev()}
                        >
                            <Entypo
                                name="controller-next"
                                size={24}
                                color="white"
                            />
                        </Pressable>
                    </View>
                </Pressable>
            )}
        </View>
    );
}
