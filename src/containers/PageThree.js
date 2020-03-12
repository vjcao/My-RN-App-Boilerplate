import React from 'react'
import {View, ImageBackground, StyleSheet, StatusBar, Text, Image} from 'react-native'
import { Button } from 'react-native-elements'


function PageThree({ navigation }) {
    const pressHandler = () => {
        navigation.goBack()
    }

    const startDate = new Date('January 01, 2019 00:00:00')
    let today = new Date()

    let days = Math.floor((today - startDate) / (1000*60*60*24))

    return (
        <ImageBackground source={require('../images/startscreen.jpg')} style={styles.Background}>
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.inner}>
                <Text style={styles.text}>It's been</Text>
                <Text style={styles.text}>{days} days</Text>
                <Text style={styles.text}>since {startDate.toLocaleDateString("en-US")}</Text>
                <View style={styles.bottom}>
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
      backgroundColor: 'rgba(255, 255, 255, .8)',
      borderRadius: 25
    },
    text: {
        color: '#ffb7c5',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'center',
        paddingLeft: 16, 
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 0
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 16
    },
    buttonContainer: {
        padding: 16
    },
    buttonInner: {
        backgroundColor: '#ffb7c5',
        borderRadius: 25
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    image: {
        width: 250,
        height: 250,
    }
})

export default PageThree