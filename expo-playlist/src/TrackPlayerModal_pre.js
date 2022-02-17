import React from "react";
import { View, Text, Modal, Image, StyleSheet, Pressable } from "react-native";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import styles from "./styles";

//import ShuffleIcon from "../../assets/icons/shuffle.png";
//import PrevIcon from "../../assets/icons/prev.png";
//import NextIcon from "../../assets/icons/next.png";
//import LoopIcon from "../../assets/icons/loop.png";
//import PlayIcon from "../../assets/icons/play.png";
//import PauseIcon from "../../assets/icons/pause.png";
//import MenuIcon from "../../assets/icons/down.png";
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
                colors={["#0000ff", "#00005f", "#191414"]}
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
                    {/* <Image
            source={MenuIcon}
            style={{
              width: 15,
              height: 15,
              tintColor: "#fff",
            }}
          /> */}
                </Pressable>
                {/* <Text style={styles.mainText}>Playing from My Playlist</Text> */}
                <Text style={[styles.mainText, { fontWeight: "bold" }]}>
                    {selectedMusic.album}
                </Text>
                <Image
                    style={{ width: 350, height: 350, marginVertical: 75 }}
                    source={{ uri: selectedMusic.artwork }}
                />
                <View
                    style={{ justifyContent: "space-between", width: "100%" }}
                >
                    <View>
                        <Text style={styles.boldMainText}>
                            {selectedMusic.title}
                        </Text>
                        <Text style={styles.mainText}>
                            {selectedMusic.artist}
                        </Text>
                    </View>
                    <Text>Like</Text>
                </View>

                <Slider
                    tapToSeek={true}
                    minimumTrackTintColor="#fff"
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
                <View style={styles.timeStampHolder}>
                    <View />
                    {/* 이전곡 */}
                    <Pressable onPress={onPressPrev}>
                        {/* <Image style={styles.iconWidth} source={PrevIcon} /> */}
                        <AntDesign
                            name="stepbackward"
                            size={24}
                            color="white"
                        />
                    </Pressable>
                    {/* 재생/일시정지 */}
                    {/* <Pressable onPress={playOrPause} style={styles.playButtonHolder}> */}
                    <Pressable onPress={playOrPause}>
                        <FontAwesome
                            size={66}
                            color="white"
                            name={isPlaying ? "pause-circle" : "play-circle"}
                        />
                        {/* <Image
              style={[styles.iconWidth, { tintColor: "#000" }]}
              source={isPlaying ? PauseIcon : PlayIcon}
            /> */}
                    </Pressable>
                    <Pressable onPress={onPressNext}>
                        {/* <Image style={styles.iconWidth} source={NextIcon} /> */}
                        <AntDesign name="stepforward" size={24} color="white" />
                    </Pressable>

                    {/* 반복재생 */}
                    <Pressable onPress={onClickLoop}>
                        {/* <Image
              // style={[
              //   styles.iconWidth,
              //   {tintColor: playbackMode === 'loop' ? '#1DB954' : '#fff'},
              // ]}
              source={LoopIcon} />*/}
                        <AntDesign name="retweet" size={24} color="white" />
                    </Pressable>
                </View>
            </LinearGradient>
        </Modal>
    );
}
