import React, { useState, useEffect }from "react"
import {View, ImageBackground, StyleSheet, StatusBar, Text} from 'react-native'
import { Button } from 'react-native-elements'
import moment from 'moment-timezone'
import Icon from 'react-native-vector-icons/FontAwesome5'


function PageTwo({ navigation }) {
    const [time, setTime] = useState(moment().tz('America/Detroit').format('LTS'))
    const [date, setDate] = useState(moment().tz('America/Detroit').format('dddd, ll'))
    const [currentHour, setCurrentHour] = useState(parseInt(moment().tz('America/Detroit').format('H')))

    const pressHandler = () => {
        navigation.goBack()
    }

    useEffect(() => {
        setInterval(() => {
            setTime(moment().tz('America/Detroit').format('LTS'))
            setDate(moment().tz('America/Detroit').format('dddd, ll'))
            setCurrentHour(parseInt(moment().tz('America/Detroit').format('H')))
		}, 1000);
    }, [])

    return (
        <ImageBackground source={require('../images/startscreen.jpg')} style={styles.Background}>
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.inner}>
                <View style={styles.clock}>
                    <Text style={styles.timetext}>Current Date and Time in EST is:</Text>
                    <Text style={styles.timetext}>
                        {date}
                    </Text>
                    <Text style={styles.timetext}>
                        {time}
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    {
                        currentHour < 20 && currentHour > 7 ?
                        <Icon
                            name='cloud-sun'
                            size={100}
                            color="#ffb7c5"
                        />: 
                        <Icon 
                            name='cloud-moon'
                            size={100}
                            color="#ffb7c5"
                        />
                    }
                </View>
                <View style={styles.bottom}>
                    <Button 
                        titleStyle={{
                            fontWeight: 'bold',
                            fontFamily: 'Arial',
                            textAlign: 'center'
                        }}
                        buttonStyle={styles.buttonInner} 
                        title='Back' 
                        onPress={() => pressHandler()} 
                    />
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
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, .8)'
    },
    clock: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    timetext: {
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
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
})

export default PageTwo