import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/home/MainPage';
import { Callendar } from '../screens/callendar/CallendarRecordPage';
import { Kdass } from '../screens/kdass/KdassTestPage';
import { Result } from '../screens/result/KdassResult';
import { MusicList } from '../screens/music/MusicList';
import { Profile } from '../screens/profile/ProfilePage';
import { Setting } from '../screens/setting/SettingPage';
// import { Music } from '../screens/login/test2';
// import { Music } from '../screens/login/LoginPage';

const Tab = createBottomTabNavigator();

const dateToStr = date => {
    var week = new Array('일', '월', '화', '수', '목', '금', '토');

    var localTime = date.toLocaleTimeString();

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var dayName = week[date.getDay()];

    return (
        year +
        '년 ' +
        month +
        '월 ' +
        day +
        '일 ' +
        dayName +
        '요일 ' +
        localTime.substring(0, 5)
    );
};

const TabNavigation = () => {
    console.log('실행시간 : ' + dateToStr(new Date()));

    return (
        <Tab.Navigator
            initialRouteName="Music"
            screenOptions={{
                labelPosition: 'bottom',
                showLabel: true,
                style: {
                    backgroundColor: '#000000',
                    borderTopColor: '#ffffff',
                    borderTopWidth: 5,
                },
                activeTintColor: '#000000',
                inactiveTintColor: '#cfcfcf',
                headerShown: false, // 모든 스크린의 액션바를 제거하는 코드
            }}
        >
            {/* 아래 스크린 순서 바꾸셔서 제일 처음 로드되는 페이지 자유롭게 변경해서 사용하세요. */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: props => (
                        <Image
                            style={styles.logo}
                            source={
                                props.focused
                                    ? require('../../assets/images/icon/HomeFill.png')
                                    : require('../../assets/images/icon/HomeLine.png')
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Callendar"
                component={Callendar}
                options={{
                    tabBarLabel: 'Callendar',
                    tabBarIcon: props => (
                        <Image
                            style={styles.logo}
                            source={
                                props.focused
                                    ? require('../../assets/images/icon/SoothingRecordFill.png')
                                    : require('../../assets/images/icon/SoothingRecordLine.png')
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="K-Dass"
                component={Kdass}
                options={{
                    tabBarLabel: 'K-Dass',
                    tabBarIcon: props => (
                        <Image
                            style={styles.logo}
                            source={
                                props.focused
                                    ? require('../../assets/images/icon/KdassFill.png')
                                    : require('../../assets/images/icon/KdassLine.png')
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Result"
                component={Result}
                options={{
                    tabBarLabel: 'Result',
                    tabBarIcon: props => (
                        <Image
                            style={styles.logo}
                            source={
                                props.focused
                                    ? require('../../assets/images/background/ConvexBoth.png')
                                    : require('../../assets/images/background/ConvexDown.png')
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Music"
                component={MusicList}
                options={{
                    tabBarLabel: 'Music',
                    tabBarIcon: props => (
                        <Image
                            style={styles.logo}
                            source={
                                props.focused
                                    ? require('../../assets/images/icon/PlaylistFill.png')
                                    : require('../../assets/images/icon/PlaylistLine.png')
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: props => (
                        <Image
                            style={styles.logo}
                            source={
                                props.focused
                                    ? require('../../assets/images/icon/ProfileFill.png')
                                    : require('../../assets/images/icon/ProfileLine.png')
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: props => (
                        <Image
                            style={styles.logo}
                            source={
                                props.focused
                                    ? require('../../assets/images/icon/Setting.png')
                                    : require('../../assets/images/icon/Setting.png')
                            }
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 32,
        height: 32,
    },
});

export default TabNavigation;
