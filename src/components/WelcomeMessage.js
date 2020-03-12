import React, { useEffect, useState } from 'react'
import {Text, StyleSheet} from 'react-native'

function WelcomeMessage() {
    const birthday = {month: 1, day: 1}
    const [message, setMessage] = useState('')
    let today = new Date()


    useEffect(() => {
        setInterval(() => {
            if (today.getDate() === birthday.day && today.getMonth() === birthday.month) {
                setMessage('Happy Birthday!')
            }
            else {
                if (today.getHours() > 4 && today.getHours() < 12) {
                    setMessage('Good Morning!')
                } 
                else if (today.getHours() > 16  || today.getHours() < 5) {
                    setMessage('Good Evening!')
                }
                else {
                    setMessage('Good Afternoon!')
                }
            }
        }, 1000)
    })  

    return (
        <Text style={styles.header}>{message}</Text>
    )
}


const styles = StyleSheet.create({
    header: {
        color: '#ffb7c5',
        fontSize: 60,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'center',
        paddingLeft: 16, 
        paddingTop: 32,
        paddingRight: 16,
        paddingBottom: 16
    }
})

export default WelcomeMessage