import React from 'react'
import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import WelcomeMesage from '../components/WelcomeMessage'

function Home({ navigation }) {

  const ButtonsChoices = [{title: 'Page 1', screen: 'PageOne'},{title:'Page 2', screen: 'PageTwo'}, {title: 'Page 3', screen: 'PageThree'}]

  const pressHandler = (screen) => {
    navigation.navigate(screen)
  }

  return (
    <ImageBackground source={require('../images/startscreen.jpg')} style={styles.Background}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.inner}>
        <WelcomeMesage></WelcomeMesage>
        {
          ButtonsChoices.map((text, key) => (
            <Button buttonStyle={styles.buttonInner} titleStyle={{
              fontWeight: 'bold',
              fontFamily: 'Arial',
              textAlign: 'center'}} style={styles.buttonContainer} key={key} title={text.title} type='solid' onPress={() => pressHandler(text.screen)}></Button>
          ))
        }
        <Button 
            style={styles.buttonContainer} 
            type='clear' 
            icon={<Icon
                name="kiss-wink-heart"
                size={40}
                color="#ffb7c5"
            />} 
            onPress={() => pressHandler('About')}
        ></Button>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, .8)',
    borderRadius: 25
  },
  buttonContainer: {
    padding: 16
  },
  buttonInner: {
    backgroundColor: '#ffb7c5',
    borderRadius: 25
  }
})

export default Home