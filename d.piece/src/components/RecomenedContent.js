import React from 'react';
import { Image, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import { styles_common, styles_home } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { GlobalVar, setHeight, setWidth } from './GlobalVariables';

// 음원 이미지 및 아래 텍스트 커스텀 컴포넌트
const RecommendedSoundSource = props => {
    return (
        <TouchableOpacity
            style={
                ([styles_home.TouchableOpacity_Image],
                {
                    marginHorizontal: setWidth(2),
                    marginVertical: '1.5%',
                })
            }
        >
            <Image
                resizeMode="center"
                style={[
                    {
                        width: setWidth(props.width),
                        height: setWidth(props.width),
                        borderRadius: 10,
                    },
                ]}
                // 책, 음원, 영화 사진
                source={props.picture}
            />

            <Image
                resizeMode="center"
                style={[
                    {
                        width: setWidth(props.width),
                        height: setWidth(props.width),
                        backgroundColor: '#E9E9E975',
                        borderRadius: props.radius ? props.radius : 10, // radius를 주면 그 값으로 디폴트는 10으로 설정함
                        tintColor: '#464646', // 자물쇠 이미지 색상
                        marginTop: setWidth(-props.width), // 이미지 겹치는 방법
                    },
                ]}
                // 잠금 걸린 아이콘 띄우기
                source={require('../../assets/images/icon/LockLine.png')}
            />

            {/* 아래 Text를 밖으로 빼면 Error나면서 튕김 일단 안에 둠.... */}
            <Text
                style={[
                    styles_common.text,
                    {
                        fontSize: RFValue(
                            12 * GlobalVar.ValueMultiplied,
                            GlobalVar.FigmaScreenHeight
                        ),
                        color: '#646464', //
                        marginTop: setHeight(2),
                    },
                ]}
            >
                {props.name}
            </Text>
        </TouchableOpacity>
    );
};

export const RecomenedContent = props => {
    return (
        <View
            style={[
                styles_common.container,
                {
                    height: setHeight(props.height),
                },
            ]}
        >
            <ScrollView
                style={[styles_home.scrollView]}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <RecommendedSoundSource
                    width={props.width}
                    name={props.name1}
                    picture={props.picture1}
                    radius={props.radius}
                />
                <RecommendedSoundSource
                    width={props.width}
                    name={props.name2}
                    picture={props.picture2}
                    radius={props.radius}
                />
                <RecommendedSoundSource
                    width={props.width}
                    name={props.name3}
                    picture={props.picture3}
                    radius={props.radius}
                />
                <RecommendedSoundSource
                    width={props.width}
                    name={props.name4}
                    picture={props.picture4}
                    radius={props.radius}
                />
            </ScrollView>
        </View>
    );
};
