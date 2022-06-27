import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-native-modalbox';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
import {
    Text,
    Button,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { styles_music, styles_common } from '../../components/styles';
import { RFValue } from 'react-native-responsive-fontsize';
// export class Music extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isOpen: false,
//             isDisabled: false,
//             swipeToClose: true,
//             sliderValue: 0.3,
//         };
//     }
export function Music() {
    const ModalEl = useRef();
    const [isOpen, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClickOutside = ({ target }) => {
        if (isOpen && !ModalEl.current.contains(target)) setOpen(false);
    };
    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const renderItem = ({ item }) => <Item title={item.title} />;
    return (
        <ScrollView style={{ marginTop: 50, backgroundColor: '#fff' }}>
            <SafeAreaView />
            <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
            <Button
                title="Position centered + backdrop + disable"
                onPress={() => modal3.current.contains()}
                style={styles.btn}
            />
            <View
                style={{
                    height: setHeight(211),
                }}
            />
            {isOpen && (
                <Modal
                    style={[
                        styles.modal,
                        styles.modal3,
                        { marginTop: setHeight(60) },
                    ]}
                    position={'top'}
                    ref={ModalEl}
                    isDisabled={isDisabled}
                >
                    <View
                        style={{
                            height: setHeight(55),
                            width: setWidth(73),
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            paddingHorizontal: setWidth(2),
                            alignSelf: 'center',
                            justifyContent: 'center',
                            // flexDirection: 'row',
                        }}
                    >
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={{ height: setHeight(3) }} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image
                                resizeMode="contain"
                                style={styles_music(5).iconStyle}
                                source={require('../../../assets/images/play/Plus.png')}
                            ></Image>
                        </TouchableOpacity>
                        <View style={{ width: setWidth(2) }}></View>
                        <TextInput
                            style={{
                                height: setHeight(5),
                                width: setWidth(61),
                                backgroundColor: '#f4f4f4',
                                borderRadius: 2.5,
                            }}
                            // value={text}
                            // onChangeText={onChangeText}
                        />
                    </View>
                    {/* <View>
                        <Text style={styles.text}>Modal centered</Text>
                        <Button
                            title={`Disable (${
                                this.state.isDisabled ? 'true' : 'false'
                            })`}
                            onPress={() =>
                                this.setState({
                                    isDisabled: !this.state.isDisabled,
                                })
                            }
                            style={styles.btn}
                        />
                    </View> */}
                </Modal>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 50,
        flex: 1,
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal2: {
        height: 230,
        backgroundColor: '#3B5998',
    },

    modal3: {
        height: 300,
        width: 300,
    },

    modal4: {
        height: 300,
    },

    btn: {
        margin: 10,
        backgroundColor: '#3B5998',
        color: 'white',
        padding: 10,
    },

    btnModal: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: 'transparent',
    },

    text: {
        color: 'black',
        fontSize: 22,
    },
});

const DATA = [
    {
        id: '1',
        title: '싸웠을 때',
    },
    {
        id: '2',
        title: '잠 잘 자고 싶다...',
    },
    {
        id: '3',
        title: '명상할 때',
    },
    {
        id: '4',
        title: '조용한 명상',
    },
];

const Item = ({ title }) => (
    <View
        style={{
            flexDirection: 'row',
            paddingVertical: setHeight(3),
            borderBottomWidth: 1,
            borderBottomColor: '#f3f3f3',
        }}
    >
        <TouchableOpacity>
            <Image
                resizeMode="contain"
                style={styles_music(5).iconStyle}
                source={require('../../../assets/images/play/threeline.png')}
            ></Image>
        </TouchableOpacity>
        <View style={{ width: setWidth(2) }} />
        <Text
            style={[
                styles_common.text,
                {
                    fontSize: RFValue(
                        12 * GlobalVar.ValueMultiplied,
                        GlobalVar.FigmaScreenHeight
                    ),
                    alignSelf: 'center',
                },
            ]}
        >
            {title}
        </Text>
    </View>
);
