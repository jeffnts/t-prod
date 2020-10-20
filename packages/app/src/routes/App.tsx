import React from 'react'
import { createStackNavigator,  StackNavigationOptions } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator()

import { ProjectList, Project, NewProject } from '../pages/Projects'
import { TaskList, Task, NewTask } from '../pages/Tasks'

const App = () => {
	return(
		<Navigator initialRouteName="ProjectList" screenOptions={screenOptions}>
			{/* Peojects */}
			<Screen 
				name='ProjectList' 
				component={ProjectList} 
			/>
			<Screen 
				name='Project' 
				component={Project}
			/>
			<Screen 
				name='NewProject' 
				component={NewProject}
			/>

			{/* Tasks */}
			<Screen 
				name='TaskList' 
				component={TaskList} 			
			/>
			<Screen name='Task' component={Task}/>
			<Screen 
				name='NewTask' 
				component={NewTask}
			/>
		</Navigator>
	)
}


const screenOptions: StackNavigationOptions = {
	
}

export default App