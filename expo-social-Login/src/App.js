import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
  } from 'react-native';
import Styled from 'styled-components/native';
import { useFonts } from 'expo-font'
import SignGoogle from './GoogleSign'
import SignNaver from './NaverSign';
import SignKakao from './KakaoSign';

  const App = () => {
    const [loaded] = useFonts({
        DoHyeon : require('../assets/fonts/DoHyeon-Regular.ttf'),
      });

    if (!loaded) {
        return null;
    }
      return (
        <SafeAreaView style={{flex:1}}>
          <ImageBackground 
          source={require('../assets/background.jpeg')} 
          style={{width:"100%",height:"100%"}}
          > 
            <View style={styles.TitleContainer}>
              <Text style={styles.TitleStyle}>나를</Text>
              <Text style={styles.TitleStyle}>돌보는 시간</Text>
            </View>
            <View style={styles.LoginContainer}>
              <Text style={styles.TextStyle}>간편 로그인</Text>
                <SignGoogle />
                <SignNaver />
                <SignKakao />
            </View>
          </ImageBackground>
        </SafeAreaView>
      )
  }

  const styles = StyleSheet.create ({
    LoginContainer : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'flex-start',
    },
    TextStyle : {
      fontFamily : 'Roboto',
      fontSize :13,
      color : '#ffffff',
      marginBottom : 10,
  },
    TitleContainer : {
      height : 250,
      marginHorizontal : 30,
      marginTop : 100,
      alignItems : 'flex-start',
      justifyContent : 'flex-start',
    },
    TitleStyle : {
      fontFamily : 'DoHyeon',
      fontSize :50,
      marginBottom : 5,
      fontWeight : 'bold',
      color:'#ffffff'
  },
})

export default App
