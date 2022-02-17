import React, { useEffect } from "react";
import styled from "styled-components";
import {
    Alert,
    Component,
    Pressable,
    StyleSheet,
    View,
    Text,
} from "react-native";
import * as Progress from "react-native-progress";
import { useState } from "react";
const Test = () => {
    //#region 타입 및 질문 정의
    var types = " SADADSASADSSDSADDSAAD";
    var Questions = [];
    Questions[1] = "나는 안정을 취하기 힘들었다.";
    Questions[2] = "입이 바싹 마르는 느낌이 들었다.";
    Questions[3] = "어떤 것에도 긍정적인 감정을 느낄 수가 없었다.";
    Questions[4] =
        "숨쉬기가 곤란한 적이 있었다(심하게 호흡이 가쁘거나 가만히 있을 때도 호흡 곤란이 있었다).";
    Questions[5] = "무엇인가를 시작하는 것이 어려웠다.";
    Questions[6] = "어떤 상황에 과잉 반응을 보이는 경향이 있었다.";
    Questions[7] = "몸이 떨리는 것을 느꼈다(예: 손 떨림)";
    Questions[8] = "모든 일에 신경을 너무 많이 쓴다고 느꼈다.";
    Questions[9] = "내가 너무 당황해서 웃음거리가 될까 봐 걱정했다.";
    Questions[10] = "나는 기대할 것이 아무것도 없다는 생각이 들었다.";
    Questions[11] = "자꾸 초조해졌다.";
    Questions[12] = "나는 진정하는 것이 어려웠다.";
    Questions[13] = "기운이 쳐지고 우울했다.";
    Questions[14] = "내가 하는 일에 방해가 되는 것을 용납할 수 없었다.";
    Questions[15] = "내 자신이 심한 불안상태까지 도달했음을 느꼈다.";
    Questions[16] = "어떤 것에도 몰두 할 수가 없었다.";
    Questions[17] = "나는 사람으로서 가치가 없다고 느꼈다.";
    Questions[18] = "내가 꽤 신경질적이라고 느꼈다.";
    Questions[19] =
        "가만히 있을 때도 심장이 두근거리는 것이 느껴졌다. (예: 심장이 심하게 빨리뛰는 느낌, 불규칙한 심장 박동)";
    Questions[20] = "아무 이유 없이 무서움을 느꼈다.";
    Questions[21] = "산다는 것이 의미가 없다는 생각이 들었다.";
    //#endregion

    const [Question, setQuestions] = useState(Questions[1]);
    const [progress, setProgress] = useState(0);
    const [Count, setCount] = useState(0);
    const [Score, setScore] = useState(0);
    const [SumScore, setSumScore] = useState([0, 0, 0]);

    // setScore가 비동기 처리함수여서 동기화 시키기 위해 useEffect 사용함
    // 문제점 같은 버튼을 누르면 Score의 값이 똑같이서 작동안함

    useEffect(() => {
        _onPress();
    }, [Score]);

    function _onPress() {
        // if (Score == -1) return;
        setScore(0);

        let type = types.substring(Count, Count + 1);
        if (Count < 21) {
            // D, A, S 별로 선택한 점수++
            switch (type) {
                case "D":
                    console.log(
                        Count,
                        "번째 문항은 D입니다. 선택 : ",
                        Score,
                        "총합 D : ",
                        `${SumScore[0]}, A : ${SumScore[1]}, S : ${SumScore[2]}`
                    );
                    setSumScore([
                        SumScore[0] + Score,
                        SumScore[1],
                        SumScore[2],
                    ]);
                    break;
                case "A":
                    console.log(
                        Count,
                        "번째 문항은 A입니다. 선택 : ",
                        Score,
                        "총합 : ",
                        `${SumScore[0]}, A : ${SumScore[1]}, S : ${SumScore[2]}`
                    );
                    setSumScore([
                        SumScore[0],
                        SumScore[1] + Score,
                        SumScore[2],
                    ]);
                    break;
                case "S":
                    console.log(
                        Count,
                        "번째 문항은 S입니다. 선택 : ",
                        Score,
                        "총합 : ",
                        `${SumScore[0]}, A : ${SumScore[1]}, S : ${SumScore[2]}`
                    );
                    setSumScore([
                        SumScore[0],
                        SumScore[1],
                        SumScore[2] + Score,
                    ]);
                    break;
                default:
                    console.log(
                        `D : ${SumScore[0]}\nA : ${SumScore[1]}\nS : ${SumScore[2]}`
                    );
                    break;
            }

            console.log(type.substring(Count, Count + 1));
            setCount((prevCount) => prevCount + 1);
            setQuestions(Questions[Count + 1]);
            setProgress((prevProgress) => prevProgress + 1);
        } else {
            Alert.alert(
                "K-Dass21 검사 결과",
                `D : ${SumScore[0]}\nA : ${SumScore[1]}\nS : ${SumScore[2]}`
            );
        }
    }

    return (
        <View style={styles.Full}>
            <View style={styles.Container}>
                <Text style={styles.QText}>Q{Count}</Text>
                <View style={{ height: 150 }} />
                <Text
                    style={[styles.QText, { color: "#000000", fontSize: 20 }]}
                >
                    {Question}
                </Text>
            </View>
            <View style={[{ paddingTop: 20 }]}>
                {/* 다큐먼트 : https://www.npmjs.com/package/react-native-progress */}
                <Progress.Bar
                    progress={progress / 21} // 진행도
                    animated={true}
                    width={330}
                    height={8}
                    color={"#ff8080DD"}
                    unfilledColor={"#e2e2e2dd"}
                    borderWidth={0} // 외부 테두리 제거(너비 0)
                    border-radius={10}
                />
            </View>
            <View>
                <View>
                    <View style={{ height: 3 }} />
                    <View style={styles.fixToText}>
                        <Text style={styles.title}>전혀 아냐</Text>
                        <Text style={styles.title}> </Text>
                        <Text style={styles.title}> </Text>
                        <Text style={styles.title}>완전 맞아</Text>
                    </View>
                    <View style={styles.fixToButton}>
                        <MyPressable
                            number={1}
                            onPress={() => {
                                setScore((PrecScore) => PrecScore + 1);
                            }}
                        />
                        <MyPressable
                            number={2}
                            onPress={() => {
                                setScore((PrecScore) => PrecScore + 2);
                            }}
                        />
                        <MyPressable
                            number={3}
                            onPress={() => {
                                setScore(3);
                            }}
                        />
                        <MyPressable
                            number={4}
                            onPress={() => {
                                setScore(4);
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const MyPressable = ({ number, onPress }) => {
    return (
        <Pressable
            pressRententionOffset={10}
            hitSlop={10}
            color="#ff8080ff"
            style={styles.Pressable}
            onPress={onPress}
        >
            <Text style={styles.ButtonText}>{number}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    Full: {
        backgroundColor: "#e2e2e270",
        alignItems: "center",
        height: "100%",
    },

    Container: {
        backgroundColor: "#ffffff",
        width: "80%",
        height: "80%",
        padding: 20,
        shadowColor: "#000000", //그림자색
        shadowOpacity: 0.3, //그림자 투명도
        shadowRadius: 5,
        shadowOffset: { width: 3, height: 3 }, //그림자 위치
        borderRadius: 15,
        elevation: 12,
    },

    QText: {
        fontSize: 30,
        color: "#ff8080DD",
        fontWeight: "bold",
        opacity: 0.8,
    },

    fixToText: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 25,
    },
    fixToButton: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 42,
    },
    title: {
        textAlign: "center",
        marginVertical: 8,
        fontSize: 16,
    },
    ButtonText: {
        color: "white",
        fontSize: "25",
        textAlign: "center",
        marginVertical: 8,
        fontSize: 16,
    },
    Pressable: {
        backgroundColor: "#ff8080ff",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        marginBottom: 30,
        borderRadius: 20,

        ...Platform.select({
            ios: {
                shadowColor: "rgba(0,0,0,0.2)",
                shadowOpacity: 1,
                shadowOffset: { height: 2, width: 2 },
                shadowRadius: 2,
            },

            android: {
                elevation: 4,
            },
        }),
    },
});

export default Test;
