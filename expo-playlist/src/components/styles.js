import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191414",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 40,
        paddingBottom: 20,
    },
    boldMainText: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "500",
        marginTop: 3,
        marginHorizontal: 20,
        marginBottom: 1,
    },
    mainText: {
        fontSize: 16,
        color: "#fff",
        opacity: 0.8,
        marginHorizontal: 20,
        marginBottom: 8,
        // marginTop: 1,
    },
    linearGradient: {
        width: "100%",
        height: 250,
        justifyContent: "center",
        alignItems: "center",
    },
    iconWidth: {
        width: 30,
        height: 30,
        tintColor: "#fff",
    },
    timeStampHolder: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 10,
    },
    playButtonHolder: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export const styles_list = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191414",
    },
    musicTitle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "500",
        marginTop: 4,
        marginHorizontal: 12,
        marginBottom: 2,
    },
    artisteTitle: {
        fontSize: 14,
        color: "#fff",
        opacity: 0.8,
        marginHorizontal: 12,
        marginBottom: 13,
        marginTop: 1,
    },
    widgetContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 0,
        height: 60,
        width: "100%",
        backgroundColor: "#809099",
    },
    widgetMusicTitle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "500",
        marginTop: 12,
        marginHorizontal: 10,
        marginBottom: 1,
    },
    widgetArtisteTitle: {
        fontSize: 12,
        color: "#fff",
        opacity: 0.8,
        marginHorizontal: 10,
        marginBottom: 12,
        marginTop: 1,
    },
    widgetImageStyle: {
        width: 55,
        height: 60,
        marginTop: 3,
    },
    listImageStyle: {
        width: 45,
        height: 45,
        marginTop: 3,
        marginLeft: 8,
        borderRadius: 5,
    },
    linearGradient: {
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    shuffleButton: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    shuffleButtonContainer: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 40,
        alignSelf: "center",
        backgroundColor: "#1DB954",
    },
});

export default styles;
