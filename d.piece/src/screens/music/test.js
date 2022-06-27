import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
    Pressable,
} from 'react-native';
import { musiclibrary } from '../../utils/data';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
import { TitleHeader } from '../../components/TitleHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    styles_common,
    styles_home,
    styles_music,
    BlankArea,
} from '../../components/styles';
import { RecodingMine } from '../../components/RecordingMind';
import Slider from 'react-native-slider';
import Modal from 'react-native-modalbox';
import { render } from 'react-dom';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export class MiniPlayer extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    marginBottom: setHeight(2),
                    marginHorizontal: setWidth(7),
                }}
            >
                <Modal
                    style={[
                        styles_common.shadowContainer,
                        {
                            // marginTop: setHeight(10),

                            flexDirection: 'row',
                            alignContent: 'center',
                            height: setHeight(13),
                            alignSelf: 'center',

                            alignItems: 'center',
                            elevation: 10,
                            borderRadius: 10,
                        },
                    ]}
                    position={'bottom'}
                    ref={'modal3'}
                    backdropPressToClose={false}
                    entry={'bottom'}
                    backdrop={false}
                >
                    <Text>test</Text>
                </Modal>
                <Pressable
                    style={[
                        styles_common.shadowContainer,
                        {
                            marginTop: setHeight(10),
                            flexDirection: 'row',
                            alignContent: 'center',
                            paddingHorizontal: 0,
                            height: setHeight(13),
                            alignSelf: 'center',
                            width: '86%',
                            alignItems: 'center',
                            elevation: 10,
                            borderRadius: 10,
                        },
                    ]}
                    onPress={() => this.refs.modal3.open()}
                >
                    <Text>test</Text>
                </Pressable>
                {/* <View
                style={[
                    styles_common.shadowContainer,
                    {
                        marginTop: setHeight(10),
                        flexDirection: 'row',
                        alignContent: 'center',
                        paddingHorizontal: 0,
                        height: setHeight(13),
                        alignSelf: 'center',
                        width: '86%',
                        alignItems: 'center',
                        elevation: 10,
                        borderRadius: 10,
                    },
                ]}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        resizeMode="stretch"
                        source={require('../../../assets/images/play/Rectangle.png')}
                        style={{
                            width: setWidth(9),
                            height: setHeight(9),
                            // backgroundColor: '#000',
                            marginLeft: setWidth(2),
                        }}
                    />
                    <Text
                        style={{
                            alignSelf: 'center',
                            marginLeft: setWidth(2),
                        }}
                    >
                        Title
                    </Text>
                    <View style={{ marginLeft: setWidth(42) }} />
                    <Image
                        resizeMode="stretch"
                        source={require('../../../assets/images/play/skip-previous.png')}
                        style={{
                            alignSelf: 'center',
                            width: setWidth(4),
                            height: setHeight(4),
                            // backgroundColor: '#000',
                            // marginLeft: setWidth(2),
                        }}
                    />
                    <Image
                        resizeMode="stretch"
                        source={require('../../../assets/images/play/Play.png')}
                        style={{
                            alignSelf: 'center',
                            width: setWidth(4),
                            height: setHeight(5),
                            // backgroundColor: '#000',
                            marginLeft: setWidth(3),
                        }}
                    />
                    <Image
                        resizeMode="stretch"
                        source={require('../../../assets/images/play/skip-forward.png')}
                        style={{
                            alignSelf: 'center',
                            width: setWidth(4),
                            height: setHeight(4),
                            // backgroundColor: '#000',
                            marginLeft: setWidth(3),
                        }}
                    />
                </View>
            </View> */}
            </View>
        );
    }
}
