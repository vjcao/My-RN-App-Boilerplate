import React from 'react'
import {View, ImageBackground, StyleSheet, StatusBar, Text, Image} from 'react-native'
import { Button } from 'react-native-elements'

function About({ navigation }) {
    const pressHandler = () => {
        navigation.goBack()
    }

    // type your message here
    let message = ""

    return (
        <ImageBackground source={require('../images/startscreen.jpg')} style={styles.Background}>
          <StatusBar barStyle="light-content"></StatusBar>
          <View style={styles.inner}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../images/Message.jpg')}/>
                </View>
                <Text style={styles.text}>{message}</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title={'Back'} 
                        onPress={() => pressHandler()}
                        titleStyle={{
                            fontWeight: 'bold',
                            fontFamily: 'Arial',
                            textAlign: 'center'
                        }}
                        buttonStyle={styles.buttonInner}
                    ></Button>
                </View>
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
      backgroundColor: 'rgba(255, 255, 255, .9)',
      borderRadius: 25
    },
    text: {
        color: '#ffb7c5',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        padding: 16
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    image: {
        width: 120,
        height: 160
    },
    buttonContainer: {
        padding: 16
    },
    buttonInner: {
        backgroundColor: '#ffb7c5',
        borderRadius: 25
    },
})

export default About