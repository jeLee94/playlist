// 공통으로 사용되는 스타일만 여기에 작성
// 이외의 스타일은 본인이 사용하는(그 변수의 스타일을 적용하는) 스크립트에 작성하는 것으로

// 겹치는 UI중 담당자는 여기에 작성한 스타일을
// 커스텀 컴포넌트로 읽어가서 적용 시키고 배포할 것
// 변수명 안 겹치게 체크할 것
import { StyleSheet, StatusBar, Platform, View, Text } from 'react-native';
import { setHeight, setWidth } from './GlobalVariables';

export const styles_login = StyleSheet.create({});

export const styles_home = StyleSheet.create({
    TouchableOpacity_Image: {
        alignItems: 'center', // 가로 기준 가운데 정렬
        justifyContent: 'center', // 세로 가운데 정렬
        backgroundColor: '#E9E9E9',
        borderRadius: 10,
        marginVertical: '1.5%',
    },

    // 동그란 버튼 -> 현재 크기를 타협해야함 크기 더 키우면 늘어짐
    TouchableOpacity_circle: {
        borderWidth: 0,
        borderColor: '#939393',
        alignItems: 'center', // 가로 기준 가운데 정렬
        justifyContent: 'center', // 세로 가운데 정렬
        backgroundColor: '#939393',
    },
    // 그림파일
    Image_38: {
        width: 142,
        height: 142,
    },
    // 그림파일
    Image_32: {
        width: 112,
        height: 112,
    },
    // 그림파일
    Image_16: {
        width: 56,
        height: 56,
    },
    // 그림파일
    Image_14: {
        width: setHeight(12),
        height: setHeight(12),
    },
    // 그림파일
    Image_13: {
        width: 46,
        height: 46,
    },
    // 그림파일
    Image_12: {
        width: 43,
        height: 43,
    },
    // 그림파일
    Image_9: {
        width: 32,
        height: 32,
    },

    scrollView: {
        backgroundColor: '#ffffff',
    },
});

export const styles_callendar = StyleSheet.create({});
export const styles_kdass = StyleSheet.create({});
export const styles_result = StyleSheet.create({});
export const styles_music = param =>
    StyleSheet.create({
        container_background: {
            backgroundColor: '#ffffff',
            // paddingHorizontal: '7%', // 100 중에 좌우 7씩 때니까 7%로 좌우 패딩 잡기
            paddingVertical: '1%', // 상태바랑 너무 딱 붙어 있어서 1% 정도만 패딩 줌
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // 안드로이드 노치 영역 보장해주는 코드
        },
        container: {
            flex: 1,
            backgroundColor: '#191414',
        },
        musicTitle: {
            fontSize: param,
            color: '#000',
            fontWeight: '500',
            marginTop: 4,
            marginHorizontal: 12,
            marginBottom: 2,
        },
        artisteTitle: {
            fontSize: 14,
            color: '#000',
            opacity: 0.8,
            marginHorizontal: 12,
            marginBottom: 13,
            marginTop: 1,
        },
        widgetContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 0,
            height: setHeight(20),
            width: '100%',
            backgroundColor: '#809099',
        },
        widgetMusicTitle: {
            fontSize: 18,
            color: '#000',
            fontWeight: '500',
            marginTop: 15,
            marginHorizontal: 10,
            marginBottom: 1,
        },
        widgetArtisteTitle: {
            fontSize: 12,
            color: '#000',
            opacity: 0.8,
            marginHorizontal: 10,
            marginBottom: 12,
            marginTop: 1,
        },
        timeStampHolder: {
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            paddingHorizontal: 10,
        },
        playButtonHolder: {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        listImageStyle: {
            width: setWidth(param),
            height: setHeight(param),
            marginTop: 3,
            marginLeft: 8,
            borderRadius: 5,
        },
        widgetImageStyle: {
            width: 55,
            height: 60,
            marginTop: 3,
        },

        iconStyle: {
            width: setWidth(param),
            height: setHeight(param),
        },
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
        modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
        },
        buttonOpen: {
            backgroundColor: '#F194FF',
        },
        buttonClose: {
            backgroundColor: '#2196F3',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
    });
export const styles_profile = StyleSheet.create({});
export const styles_setting = StyleSheet.create({});

// 공유할 styles만 아래에 작성
export const styles_common = StyleSheet.create({
    // (전인원) 최상단만 이걸로 감싸고 안에 내용은 container_center나 container 사용할 것
    container_background: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: '7%', // 100 중에 좌우 7씩 때니까 7%로 좌우 패딩 잡기
        paddingVertical: '1%', // 상태바랑 너무 딱 붙어 있어서 1% 정도만 패딩 줌
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // 안드로이드 노치 영역 보장해주는 코드
    },

    // (전인원) 텍스트 하나 같이 상하좌우 센터 잡을땐 이놈 사용(UI에 텍스트만 있는 경우)
    container_center: {
        flex: 1,
        alignItems: 'center', // 가로 기준 가운데 정렬
        justifyContent: 'center', // 세로 기준 가운데 정렬
    },

    // (전인원) 일반 내용일 때 사용
    container: {
        flex: 1,
    },

    // (전인원) 여기에 나중에 font 지정할 거니까 text는 이거 쓰셔야 합니다. Error가 많아서 못했어유
    text: {
        fontSize: 20,
        // fontFamily: _loadAssets.fontAssets, // 폰트 적용 하는 파라미터
        color: '#000000',
    },

    //그림자
    shadowContainer: {
        width: '100%',
        backgroundColor: '#fff',
        ...Platform.select({
            android: { elevation: 1 },
            ios: {
                shadowColor: '#c0c0c0',
                shadowOffset: {
                    width: 3,
                    height: 10,
                },
                shadowOpacity: 0.2,
                shadowRadius: 5,
            },
        }),
    },

    // 아래 작성
});

// 가끔 리액트 네이티브 상의 버그때문에 props가 전달이 제대로 안되는 오류가 발생함
// 그냥 커스텀 컴포넌트 예시로만 봐주시길
export const BlankArea = props => {
    return <View style={{ flex: props.flex, backgroundColor: props.color }} />;
};

// 다른 스크립트에서의 사용 방법
// BlankArea 이거 import 한 후에 <BlankArea flex="3" color="#ff0000" />; 이렇게 사용함
