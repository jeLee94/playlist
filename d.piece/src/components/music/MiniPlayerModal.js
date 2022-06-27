import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

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

// 이 아래 변수를 /src/navigations/Tab.js에서 import한 후, <Tab.Screen> </Tab.Screen> 안의 컴포넌트로 사용함
export function Music({ isPlaying }) {
    return <View style={{ height: setHeight(13), width: '84%' }}></View>;
}
