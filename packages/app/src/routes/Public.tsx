import React from 'react'

import { createStackNavigator,  StackNavigationOptions } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator()

import { Login, Register } from '../pages/Public'

const Public = () => {
	return(
		<Navigator initialRouteName="Login" screenOptions={screenOptions}>
			<Screen name='Login' component={Login} />
			<Screen name='Register' component={Register}/>
		</Navigator>
	)
}

const screenOptions: StackNavigationOptions = {
	headerShown: false	
}

export default Public