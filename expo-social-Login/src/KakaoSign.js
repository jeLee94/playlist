import {Button} from "react-native"
import { useFonts } from 'expo-font'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';

export default function SignKakao() {

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Medium.ttf'),
      });

    if (!loaded) {
        return null;
    }

    return (
        <TouchableOpacity
            style={styles.KakaobuttonContainer}
            activeOpacity={0.5}
            onPress={() => console.log("카카오 로그인")}
        >
        <View style={styles.KakaoIconContainer}>
            <Image 
                style={styles.KakaoIconStyle}
                source={require('../assets/icons/Kakao_Icon.png')}
            />
        </View>
        <View style={styles.KakaoTextContainer}>
            <Text style={styles.KakaoTextStyle}>카카오 로그인</Text> 
        </View>
        </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create ({
      container : {
          flex : 1,
          alignItems : 'center',
          justifyContent : 'center',
      },
      KakaobuttonContainer : {
          flexDirection : 'row',
          justifyContent : 'flex-start',
          alignItems : 'center',
          width : 240,
          height : 40,
          backgroundColor : '#FEE500',
          borderRadius : 2,
          margin : 5,
      },
      KakaoTextContainer : {
          flex : 1,
          alignItems : 'center',
          justifyContent : 'center',
      },
      KakaoTextStyle : {
          fontFamily : 'Roboto',
          fontSize :17,
          /* 투명도 85 */
          color : 'rgba(0,0,0,0.85)',
          /*fontWeight : 'bold',*/
      },
      KakaoIconContainer : {
          margin : 1,  
          marginLeft : 1,
          width : 37,
          height : 37,
          alignItems : 'center',
          justifyContent : 'center',
      },  
      KakaoIconStyle : {
        width : 17,
        height : 17,
      },
  })
