import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles_common, styles_home } from '../components/styles';

// 음원 이미지 및 아래 텍스트 커스텀 컴포넌트
export const RecommendedSoundSource = () => {
    return (
        <TouchableOpacity
            style={[
                styles_home.TouchableOpacity_Image,
                {
                    flex: 1,
                    marginHorizontal: '3%',
                    marginVertical: '1.5%',
                },
            ]}
        >
            <Image
                style={[styles_home.Image_14, { backgroundColor: '#939393' }]}
                source={require('../../assets/images/icon/LockFill.png')}
            />
        </TouchableOpacity>
    );
};
