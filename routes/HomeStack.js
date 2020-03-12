import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../src/containers/Home'
import PageOne from '../src/containers/PageOne'
import PageTwo from '../src/containers/PageTwo'
import PageThree from '../src/containers/PageThree'
import About from '../src/containers/About'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerShown: false
        },
    },
    PageOne: {
        screen: PageOne,
        navigationOptions: {
            title: 'Home',
            headerShown: false
        },
    },
    PageTwo: {
        screen: PageTwo,
        navigationOptions: {
            title: 'Home',
            headerShown: false
        },
    },
    PageThree: {
        screen: PageThree,
        navigationOptions: {
            title: 'Home',
            headerShown: false
        },
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'Home',
            headerShown: false
        },
    }
}

const HomeStack = createStackNavigator(screens) 

export default createAppContainer(HomeStack)