import { Pressable, Button, View, Text } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import DassTest from "../DassTest";
import pushbutton from "../DassTest";

const MyPressable = ({ number, onPress }) => {
    return (
        <Pressable
            pressRententionOffset={10}
            hitSlop={10}
            color="#ff8080ff"
            style={styles.Pressable}
            onPress={pushbutton}
        >
            <Text style={styles.ButtonText}>{number}</Text>
        </Pressable>
    );
};

const Bottom_Button_UI = ({ onPressEvent }) => {
    return (
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
                    <MyPressable number={1} onPress={onPressEvent} />
                    <MyPressable number={2} onPress={onPressEvent} />
                    <MyPressable number={3} onPress={onPressEvent} />
                    <MyPressable number={4} onPress={onPressEvent} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default Bottom_Button_UI;
