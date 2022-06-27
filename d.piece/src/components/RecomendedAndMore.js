import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { styles_common, styles_home } from '../components/styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { GlobalVar, setHeight, setWidth } from './GlobalVariables';

// 추천 음원 리스트쪽 커스텀 컴포넌트
export const RecomendedAndMore = props => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View
            style={{
                height: setHeight(props.height),
                backgroundColor: '#ffffff',
                // marginBottom: setHeight(3), // 아래로 빈 공간 3h, 너비 상관 없음
            }}
        >
            <View
                style={[
                    styles_common.container,
                    {
                        flexDirection: 'row',
                        // backgroundColor: '#000000',
                        alignItems: 'center', // 가로 가운데 정렬
                    },
                ]}
            >
                <Text
                    style={[
                        styles_common.text,
                        {
                            fontSize: RFValue(
                                14 * GlobalVar.ValueMultiplied,
                                GlobalVar.FigmaScreenHeight
                            ),
                            color: props.color1,
                        },
                    ]}
                    color={props.color1}
                >
                    {props.name1}
                </Text>

                <TouchableOpacity
                    style={{
                        flex: 1, // 얘가 나머지 영억을 다 차지게 하게 함
                        alignItems: 'flex-end', // 가로 우측 정렬
                        paddingRight: '1.5%', // 패딩 살짝 있어서 적용시킴
                    }}
                    onPressOut={props._onpress}
                >
                    <Text
                        style={[
                            styles_common.text,
                            {
                                fontSize: RFValue(
                                    12 * GlobalVar.ValueMultiplied,
                                    GlobalVar.FigmaScreenHeight
                                ),
                                color: props.color2,
                            },
                        ]}
                        color={props.color2}
                    >
                        {props.name2}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
