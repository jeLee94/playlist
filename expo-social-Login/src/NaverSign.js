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

export default function SignNaver() {

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Medium.ttf'),
      });

    if (!loaded) {
        return null;
    }

    return (
        <TouchableOpacity
            style={styles.NaverbuttonContainer}
            activeOpacity={0.5}
            onPress={() => console.log("네이버 로그인")}
        >
        <View style={styles.NaverIconContainer}>
            <Image 
                style={styles.NaverIconStyle}
                source={require('../assets/icons/btnG_Icon_Naver.png')}
            />
        </View>
        <View style={styles.NaverTextContainer}>
            <Text style={styles.NaverTextStyle}>네이버 로그인</Text> 
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
      NaverbuttonContainer : {
          flexDirection : 'row',
          justifyContent : 'flex-start',
          alignItems : 'center',
          width : 240,
          height : 40,
          backgroundColor : '#03C75A',
          borderRadius : 2,
          margin : 5,
      },
      NaverTextContainer : {
          flex : 1,
          alignItems : 'center',
          justifyContent : 'center',
      },
      NaverTextStyle : {
          fontFamily : 'Roboto',
          fontSize :17,
          color : '#ffffff',
          /*fontWeight : 'bold',*/
      },
      NaverIconContainer : {
          margin : 1, 
          marginLeft : 1,
          width : 37,
          height : 37,
          alignItems : 'center',
          justifyContent : 'center',
      },  
      NaverIconStyle : {
        width : 13,
        height : 13,
      },
  })
