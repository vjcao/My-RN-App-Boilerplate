import React from 'react'
import {View, ImageBackground, StyleSheet, StatusBar, Text} from 'react-native'
import { Button } from 'react-native-elements'
import { Audio } from 'expo-av'


function PageOne({ navigation }) {
    const pressHandler = () => {
        navigation.goBack()
    }

    //ex {title: 'WHY!?!?!', send: 'why'},
    const buttons = [
       
    ]

    // ex: why: require('../audio/WHY.m4a'),
    const sounds = {
        
    }

    const handlePlaySound = async note => {
		const soundObject = new Audio.Sound()
		try {
			let source = sounds[note]
			await soundObject.loadAsync(source)
			await soundObject.playAsync()
            console.log('played')
		} catch (error) {
			console.log(error)
		}
	}

    return (
        <ImageBackground source={require('../images/startscreen.jpg')} style={styles.Background}>
          <StatusBar barStyle="light-content"></StatusBar>
          <View style={styles.inner}>
            {
                buttons.map((button, key) => (
                    <Button 
                        buttonStyle={styles.buttonInner} 
                        titleStyle={{
                            fontWeight: 'bold',
                            fontFamily: 'Arial',
                            textAlign: 'center'
                        }} 
                        style={styles.buttonContainer} 
                        key={key} title={button.title} 
                        type='solid' 
                        onPress={() => handlePlaySound(button.send)}
                    ></Button>
                ))
            }
            <Button 
                buttonStyle={styles.buttonInner} 
                titleStyle={{
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    textAlign: 'center'
                }} 
                style={styles.buttonContainer} 
                title={'Back'} 
                onPress={() => pressHandler()}
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
        padding: 8.7
    },
    buttonInner: {
        backgroundColor: '#ffb7c5',
        borderRadius: 25
    },
    backButtonInner: {
        backgroundColor: '#ffb7c5',
        borderRadius: 25
    },
})

export default PageOne