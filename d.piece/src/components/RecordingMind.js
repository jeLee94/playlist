import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { styles_common, styles_home, styles_Image } from './styles';
import { GlobalVar, setHeight, setWidth } from './GlobalVariables';

// 오늘의 내 마음 기록하러 가기 h24 = 5+14(Text)+5, w86 = 4+61(Text)+3+14(Icon)+4, margin : 좌우 4, 상하 5
export const RecodingMine = props => {
    return (
        <View
            style={[
                styles_common.shadowContainer,
                {
                    height: setHeight(24),
                    flexDirection: 'row',
                    // 100 중에 좌우 4씩 때니까 4%로 좌우 마진 잡기
                    // marginHorizontal: "4%",
                    // backgroundColor: '#0000ff80',
                    paddingTop: setHeight(5),
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
                            // backgroundColor: '#00ffff',
                            height: setHeight(7),
                            fontSize: RFValue(
                                16 * GlobalVar.ValueMultiplied,
                                GlobalVar.FigmaScreenHeight
                            ),
                        },
                    ]}
                >
                    {props.name1}
                </Text>

                <Text
                    style={[
                        styles_common.text,
                        {
                            // backgroundColor: '#000fff',
                            height: setHeight(7),
                            fontSize: RFValue(
                                20 * GlobalVar.ValueMultiplied,
                                GlobalVar.FigmaScreenHeight
                            ),
                        },
                    ]}
                >
                    {props.name2}
                </Text>
            </View>

            {/* 우측의 Icon */}
            <TouchableOpacity
                style={[
                    styles_home.TouchableOpacity_circle,
                    {
                        width: setHeight(14),
                        height: setHeight(14),
                        borderRadius: 100,
                        marginRight: '4%',
                    },
                ]}
            >
                <Image
                    resizeMode="center"
                    style={{
                        width: setHeight(props.size),
                        height: setHeight(props.size),
                    }}
                    source={require('../../assets/images/icon/KdassLine.png')}
                />
            </TouchableOpacity>
        </View>
    );
};
