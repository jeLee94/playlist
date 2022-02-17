import React from "react";
import { View, Text, Modal, Image, Pressable } from "react-native";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import styles from "./styles";

import { secsToTimestamp } from "../../util/timeFormat";

export default function TrackPlayerScreen({
    isVisible,
    onCloseModal,
    selectedMusic,
    isPlaying,
    playOrPause,
    onSeekTrack,
    timestamp,
    onPressNext,
    onPressPrev,
    playbackMode,
    onClickShuffle,
    onClickLoop,
}) {
    return (
        <Modal
            animationType="slide"
            visible={isVisible}
            presentationStyle="fullScreen"
        >
            <LinearGradient
                colors={["#A0C4DF", "#708090", "#191414"]}
                style={styles.container}
            >
                <Pressable
                    onPress={onCloseModal}
                    style={{
                        position: "absolute",
                        top: 45,
                        left: 30,
                    }}
                >
                    <FontAwesome name="angle-down" size={24} color="white" />
                </Pressable>

                <Image
                    style={{
                        width: 325,
                        height: 325,
                        marginTop: 70,
                        marginBottom: 60,
                    }}
                    source={{ uri: selectedMusic.artwork }}
                />
                <View
                    style={{ justifyContent: "space-between", width: "100%" }}
                >
                    <View style={{ alignItems: "center", marginBottom: 10 }}>
                        <Text style={styles.boldMainText}>
                            {selectedMusic.title}
                        </Text>
                        <Text style={styles.mainText}>
                            {selectedMusic.artist}
                        </Text>
                    </View>
                </View>

                <Slider
                    tapToSeek={true}
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="#F5DEB3"
                    onValueChange={(e) => {
                        onSeekTrack(Math.floor(e * selectedMusic.duration));
                    }}
                    style={{ width: "100%", paddingHorizontal: 10 }}
                    value={timestamp / selectedMusic.duration}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Text style={styles.mainText}>
                        {secsToTimestamp(timestamp)}
                    </Text>
                    <Text style={styles.mainText}>
                        {secsToTimestamp(selectedMusic.duration - timestamp)}
                    </Text>
                </View>
                <View style={[styles.timeStampHolder, { marginTop: 15 }]}>
                    <View />
                    {/* 반복재생 */}
                    <Pressable
                        style={{ marginLeft: -10 }}
                        onPress={onClickLoop}
                    >
                        <AntDesign name="retweet" size={24} color="white" />
                    </Pressable>
                    {/* 이전곡 */}
                    <Pressable onPress={onPressPrev}>
                        {/* <Image style={styles.iconWidth} source={PrevIcon} /> */}
                        <Entypo
                            name="controller-jump-to-start"
                            size={33}
                            color="white"
                        />
                    </Pressable>
                    {/* 재생/일시정지 */}
                    {/* <Pressable onPress={playOrPause} style={styles.playButtonHolder}> */}

                    <Pressable onPress={playOrPause}>
                        <AntDesign name="play" size={66} color="white" />
                    </Pressable>
                    {/* 다음버튼 */}
                    <Pressable onPress={onPressNext}>
                        <Entypo
                            name="controller-next"
                            size={33}
                            color="white"
                        />
                    </Pressable>
                    {/* 셔플 */}
                    <Pressable
                        style={{ marginRight: 28 }}
                        onPress={onClickShuffle}
                    >
                        <Ionicons name="md-shuffle" size={28} color="white" />
                    </Pressable>
                </View>
            </LinearGradient>
        </Modal>
    );
}
