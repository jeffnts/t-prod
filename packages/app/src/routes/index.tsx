import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator()

import Public from './Public'
import App from './App'

const Routes = () => {
	return(
		<NavigationContainer>
			<Navigator initialRouteName="Public" screenOptions={screenOptions}>
				<Screen name='Public' component={Public}/>

				<Screen name='App' component={App}/>
			</Navigator>
		</NavigationContainer>
	)
}

const screenOptions: StackNavigationOptions = {
	headerShown: false	
}


export default Routes