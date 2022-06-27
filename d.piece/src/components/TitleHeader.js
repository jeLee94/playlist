import React from 'react';
import { Text, View } from 'react-native';
import { styles_common, styles_home } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { GlobalVar, setHeight, setWidth } from './GlobalVariables';

// 1. 헤더 h20, w86 텍스트 중앙 정렬하면 상하좌우 안 잡아줘도 됨
export const TitleHeader = props => {
    return (
        <View
            style={[
                styles_common.container,
                {
                    height: setHeight(props.height),
                },
            ]}
        >
            {/* 수딩님 h7*/}
            <View
                style={[
                    styles_common.container,
                    {
                        marginTop: setHeight(9),
                        flexDirection: 'row',
                        alignItems: 'flex-end', // 가로 가운데 정렬
                        justifyContent: 'center', // 가로 가운데 정렬
                    },
                ]}
            >
                <Text
                    style={[
                        styles_common.text,
                        {
                            fontSize: RFValue(
                                18 * GlobalVar.ValueMultiplied,
                                GlobalVar.ScreenHeight
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
                            fontSize: RFValue(
                                14 * GlobalVar.ValueMultiplied,
                                GlobalVar.ScreenHeight
                            ),
                            alignItems: 'baseline',
                        },
                    ]}
                >
                    {props.name2}
                </Text>
            </View>
        </View>
    );
};
