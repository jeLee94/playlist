import React from "react"
//import * as WebBrowser from 'expo-web-brower'
import { StyleSheet, Text, View, Image, Button } from "react-native"
import * as Google from 'expo-google-app-auth'
import styled from "styled-components/native";
import google from './src/google';
//import * as Expo from 'expo'

const Container = styled.View `
    justify-content : center;
    align-items : center;
    padding: 5px;
    margin : 3px 0px;
`

const StyledText = styled.Text `
    font-size : 30px;
`

/*
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }

  signIn = async () => {
    try {
      const result = await Google.LogInAsync({
        androidClientId:
          "998546578053-jci2htrr2jb54ctf6v3kukpa1krokhkf.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
*/
/*
const Login = ({navigation}) => {
  const [googleSubmitting, setGoogleSubmitting] = useState(false)
}
*/
/*
const handleGoogleSignin = () => {
  //setGoogleSubmitting(true)
  const config = {
    iosClientId : '998546578053-oh5hlrb8g2vgocoem87l2fhrjcb2so7p.apps.googleusercontent.com',
    androidClientId : '998546578053-jci2htrr2jb54ctf6v3kukpa1krokhkf.apps.googleusercontent.com',
    scopes : ['profile', 'email']
  }
  Google
    .logInAsync(config)
    .then((result) => {
      const {type, user} = result;

      if (type == 'success'){
        const {email, name, photoUrl} = user;
        handleMessage('Google signin successful', 'SUCCESS')
        setTimeout(() => navigation.navigate('welcom', {email, name, photoUrl}), 1000)
      } else {
        handleMessage('Goggle signin was canclled');
      }
      //setGoogleSubmitting(false)
    })
    .catch(error => {
      console.log(error);
      handleMessage('Am error occurred. Check your network and try again');
      //setGoogleSubmitting(false)
    })
}

const LoginPage = () => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => handleGoogleSignin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
export default LoginPage
*/
/*
const Container = () => styled.View `
  width : 80%;
  height : 15px;
  margin : 3px 0;
  padding : 15px 20px;
  border-radius : 10px;
  borderColor : '#bebebe',
  background-color : '#ffffff',
  align-Items : center,
  justify-content : center,
`*/

/*
async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId: '998546578053-jci2htrr2jb54ctf6v3kukpa1krokhkf.apps.googleusercontent.com',
      iosClientId: '998546578053-oh5hlrb8g2vgocoem87l2fhrjcb2so7p.apps.googleusercontent.comE',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}
*/
/*
 const App = () => {
   return (
     <Container>
      <Button title="Goggle SignLogin" onPress={() => console.log("메")} />
     </Container>
   )
 }
*/
/*
const App = () => {
  return (
    <Container>
      <Button title="Naver" />
      <Button title="Google SignLogin" />
    </Container>
  )
}
*/

const App = () => {
  return (
    <Container>
      <StyledText>Sign with Google</StyledText>
      <Google />
    </Container>
  )
}
 export default App
 

 