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

export default function SignGoogle() {
    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Medium.ttf'),
      });

    if (!loaded) {
        return null;
    }

    return (
        <TouchableOpacity
            style={styles.GooglebuttonContainer}
            activeOpacity={0.5}
            onPress={() => console.log("구글 로그인")}
        >
        <View style={styles.GoogleIconContainer}>
            <Image 
                style={styles.GoogleIconStyle}
                source={require('../assets/icons/googleLogo.png')}
            />
        </View>
        <View style={styles.GoogleTextContainer}>
            <Text style={styles.GoogleTextStyle}>구글 로그인</Text> 
        </View>
        </TouchableOpacity>
    )
    /* 구글 계정으로 로그인, 구글로 시작하기, Sign in With Google 등 문구 */
    /*
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.GooglebuttonContainer}
                    activeOpacity={0.7}
                    onPress={() => console.log("Sign in With Goole")}
                >
                <View style={styles.GoogleIconContainer}>
                    <Image 
                        style={styles.GoogleIconStyle}
                        source={require('../assets/icons/google.png')}
                    />
                </View>
                <View style={styles.GoogleTextContainer}>
                    <Text style={styles.GoogleTextStyle}>구글 계정으로 로그인</Text>
                </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
    */
  }

  const styles = StyleSheet.create ({
      container : {
          flex : 1,
          alignItems : 'center',
          justifyContent : 'center',
      },
      GooglebuttonContainer : {
          flexDirection : 'row',
          width : 240,
          height : 40,
          backgroundColor : '#4285f4',
          margin: 5,
      },
      GoogleTextContainer : {
          flex : 1,
          alignItems : 'center',
          justifyContent : 'center',
      },
      GoogleTextStyle : {
          fontFamily : 'Roboto',
          fontSize :17,
          color : '#ffffff',
          /*fontWeight : 'bold',*/
      },
      GoogleIconContainer : {
          /*backgroundColor : '#ffffff',*/
          width : 38,
          height : 38,
          margin: 1,
      },
      GoogleIconStyle : {
          width : '100%',
          height : '100%',
    },
  })
