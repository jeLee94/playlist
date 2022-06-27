import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    Modal,
    Pressable,
} from 'react-native';
// import Modal from 'react-native-modalbox';
import { musiclibrary } from '../../utils/data';
import {
    GlobalVar,
    setHeight,
    setWidth,
} from '../../components/GlobalVariables';
import { RecomendedAndMore } from '../../components/RecomendedAndMore';
import { TitleHeader } from '../../components/TitleHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import { styles_common, styles_music } from '../../components/styles';
import { RecomenedContent } from '../../components/RecomenedContent';
import { MusicList } from './MusicList';

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export function Music() {
    const renderItem = ({ item }) => <Item title={item.title} />;
    // 뮤직리스트에서 가져온거 렌더싱글뮤직
    const [modalVisible, setModalVisible] = useState(false);
    const renderSingleMusic = ({ item, index }) => {
        let minuites = Math.floor(item.duration / 60);
        let seconds = item.duration % 60;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        //각 리스트 한줄 렌더 시키는 함수
        return (
            <>
                {index === 0}
                <View style={{ flexDirection: 'row' }}>
                    <Pressable
                        //리스트 한줄 프레서블로 감쌈 ->이거 누르면 플레이어 보인다는 뜻
                        style={{ flex: 9 }}
                        onPress={() => onSelectTrack(item, index)}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            {/* <View
                                //리스트 앞에 이상한 땡땡이 선 들어가는 곳
                                style={{ width: setWidth() }}
                            /> */}
                            <Image //리스트에서의 앨범 커버 이미지
                                resizeMode="cover"
                                source={{ uri: item.artwork }}
                                style={styles_music(14).listImageStyle}
                            />

                            <View style={{ width: setWidth(2) }} />
                            <View style={{ justifyContent: 'center' }}>
                                <Text
                                    style={[
                                        styles_common.text,
                                        {
                                            color: '#000',
                                            fontSize: RFValue(
                                                12 * GlobalVar.ValueMultiplied,
                                                GlobalVar.FigmaScreenHeight
                                            ),
                                        },
                                    ]}
                                >
                                    {item.title}
                                </Text>
                                <View style={{ height: setHeight(1) }} />
                                <Text
                                    style={[
                                        styles_common.text,
                                        {
                                            color: '#a6a6a6',
                                            fontSize: RFValue(
                                                10 * GlobalVar.ValueMultiplied,
                                                GlobalVar.FigmaScreenHeight
                                            ),
                                        },
                                    ]}
                                >
                                    {minuites + ' : ' + seconds}
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                    {/* 메뉴(점세개) 누르는 곳 */}
                    <TouchableOpacity
                        style={{ flex: 1, justifyContent: 'center' }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                //메뉴 점세개 이미지
                                resizeMode="cover"
                                source={require('../../../assets/images/play/menu.png')}
                                style={[
                                    styles_music(5).iconStyle,
                                    { tintColor: '#bcbcbc' },
                                ]}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    //각 리스트 사이 간격 비율 4
                    style={{ height: setHeight(4) }}
                />
            </>
        );
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles_common.container_background}>
                <SafeAreaView />
                <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',

                        // backgroundColor: '#fff',
                    }}
                >
                    <View style={{ backgroundColor: '#00000066', flex: 1 }}>
                        <Pressable //임시로 바깥(위쪽)누르면 꺼지도록 함
                            style={{ height: setHeight(70) }}
                            onPress={() => setModalVisible(!modalVisible)}
                        ></Pressable>
                        {/* 모달 내용 */}
                        <View
                            style={[
                                {
                                    // marginTop: setHeight(60),
                                    height: setHeight(55),
                                    width: setWidth(73),
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    paddingHorizontal: setWidth(2),
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    // flex: 1,
                                },
                            ]}
                        >
                            <View style={{ flexDirection: 'row' }}>
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
                        </View>
                        <Pressable //임시로 바깥(아래쪽)누르면 꺼지도록 함
                            style={{ height: setHeight(70) }}
                            onPress={() => setModalVisible(!modalVisible)}
                        ></Pressable>
                    </View>
                </Modal>
                {/* )} */}

                {/* 메인 제목 */}
                <TitleHeader height={20} name2="나를 위한 Soothing" />

                <View style={{ height: setHeight(7) }} />
                <View style={{ height: setHeight(6) }} />
                <View style={{ height: setHeight(13) }} />
                {/* 스트레스 받은~ 어쩌구 텍스트*/}
                <View
                    style={[
                        {
                            height: setHeight(15),
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 10,
                        },
                    ]}
                >
                    {/* 텍스트 2줄 h14, w61*/}
                    <View
                        style={[
                            styles_common.container,
                            {
                                flexDirection: 'column', // 하위 컴포넌트를 가로로 배치
                                marginLeft: '4%',
                                marginRight: '3%',
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles_common.text,
                                {
                                    height: setHeight(8),
                                    fontSize: RFValue(
                                        20 * GlobalVar.ValueMultiplied,
                                        GlobalVar.FigmaScreenHeight
                                    ),
                                },
                            ]}
                        >
                            스트레스 받은
                        </Text>

                        <Text
                            style={[
                                styles_common.text,
                                {
                                    height: setHeight(7.5),
                                    fontSize: RFValue(
                                        20 * GlobalVar.ValueMultiplied,
                                        GlobalVar.FigmaScreenHeight
                                    ),
                                    textAlignVertical: 'top', // 글자 아래로 정렬
                                    paddingTop: setHeight(1),
                                },
                            ]}
                        >
                            당신을 위한 마음의 안정제
                        </Text>
                    </View>
                </View>
                <View style={{ height: setHeight(13) }} />
                {/* 추천 음원 리스트 영역, 모달띄우기 */}

                <RecomendedAndMore
                    height={6}
                    name1="추천 음원 리스트"
                    name2="꾸러미 저장"
                    color1={'#646464'} // 추천 음원 리스트 색상
                    color2={'#6993ff'} // 더보기 색상
                    _onpress={() => setModalVisible(true)}
                />
                <View
                    style={{
                        height: setHeight(3),
                    }}
                />
                <FlatList
                    nestedScrollEnabled
                    data={musiclibrary}
                    keyExtractor={item => item.url}
                    renderItem={renderSingleMusic}
                    style={{ height: setHeight(80) }}
                    //왜인진 모르겠는데 110으로 해야만 리스트뷰 다 뜸
                    //안드로이드에서 플랫리스트 스크롤 안먹음(스크롤뷰)
                />

                <RecomendedAndMore
                    height={5}
                    name1="생활 속 Soothing Tip"
                    name2="더보기"
                    color1={'#646464'} // 추천 음원 리스트 색상
                    color2={'#646464'} // 더보기 색상
                />
                <RecomenedContent
                    height={50}
                    name1="봄 맞이 명상 음악" // picture1={require('../../../assets/Music.jpg')}
                    name2="여름 맞이 명상 음악" // picture2={require('../../../assets/Music.jpg')}
                    name3="가을 맞이 명상 음악" // picture3={require('../../../assets/Music.jpg')}
                    name4="겨울 맞이 명상 음악"
                    width={28}
                    radius={100}
                />
                <RecomendedAndMore
                    height={5}
                    name1="감정 맞춤, 책 추천"
                    name2="더보기"
                    color1={'#646464'} // 추천 음원 리스트 색상
                    color2={'#646464'} // 더보기 색상
                />
                <RecomenedContent
                    height={50}
                    name1="봄 맞이 명상 음악" // picture1={require('../../../assets/Music.jpg')}
                    name2="여름 맞이 명상 음악" // picture2={require('../../../assets/Music.jpg')}
                    name3="가을 맞이 명상 음악" // picture3={require('../../../assets/Music.jpg')}
                    name4="겨울 맞이 명상 음악"
                    width={38}
                    radius={10}
                />

                {/* <RecomendedAndMore name="감정 맞춤, 책 추천" />
                <RecomenedContent /> */}
            </View>
        </ScrollView>
    );
}

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
