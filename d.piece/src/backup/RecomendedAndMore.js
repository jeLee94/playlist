import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles_common } from '../components/styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { GlobalVar } from '../components/GlobalVariables';

// function setHeight(ratio) {
//     const height = GlobalVar.ScreenHeight / (GlobalVar.FlexHeight / ratio);
//     return height;
// }
//props로 빼야하는 것 : textcolor(더보기), 꾸러미저장
// 추천 음원 (가로 스크롤) 리스트쪽 제목 커스텀 컴포넌트
export const RecomendedAndMore = props => {
    return (
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
                            GlobalVar.ScreenHeight
                        ),
                        color: '#646464',
                    },
                ]}
            >
                {props.name}
            </Text>
            {/* 더보기 */}
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
                                GlobalVar.ScreenHeight
                            ),
                            color:
                                props.secondname === '꾸러미 저장'
                                    ? '#6993ff'
                                    : '#c0c0c0',
                        },
                    ]}
                >
                    {props.secondname === '꾸러미 저장'
                        ? '꾸러미 저장'
                        : '더보기'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
