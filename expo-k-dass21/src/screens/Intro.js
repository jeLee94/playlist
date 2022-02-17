import React from "react";
import { StyleSheet, View, Image, Text, Button, Pressable } from "react-native";

const Intro = ({ navigation }) => {
    return (
        <View style={styles.Full}>
            <Pressable onPress={() => navigation.navigate("Test")}>
                <View style={{ height: 120 }} />
                <View style={styles.Container}>
                    <View style={styles.ImageContainer}>
                        <Image
                            style={styles.Image}
                            source={require("../../assets/png1.png")}
                        />
                    </View>
                </View>
                <View style={[styles.Container, { paddingTop: 40 }]}>
                    <Text style={{ fontSize: 25 }}>K-Dass21 검사</Text>
                    <Text style={{ fontSize: 18.5, paddingTop: 25 }}>
                        지난 한 주 동안, 아래의 문항이 귀하에게 얼만큼
                        해당되었는지 0, 1, 2, 3번에 동그라미 표시해 주십시오.
                        정답이 있는 것이 아니므로 오래 생각하지 마시고
                        답해주시기 바랍니다.
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    Full: {
        backgroundColor: "#e2e2e270",
        height: "100%",
    },

    Container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        paddingHorizontal: 35,
    },

    Image: {
        width: 65,
        height: 50,
        tintColor: "#ff8080DD",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        opacity: 1.0, // 투명도 설정
    },

    ImageContainer: {
        borderRadius: 8,
        width: 110,
        height: 150,
        tintColor: "#ff8080DD",
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",

        // shadowOffset: { width: 30, height: 30 }, //그림자 위치
        // shadowRadius: 30,
        // shadowColor: "#ff8080", //그림자색
        // shadowOpacity: 1.0, //그림자 투명도
        elevation: 15,
    },
});

export default Intro;
