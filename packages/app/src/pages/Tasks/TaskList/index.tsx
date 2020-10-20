import React, { useState, useCallback, useEffect } from 'react'
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native'
import { types, hooks } from '@tprod/utils'

import { Card as RNICard, SearchBar } from 'react-native-elements'

import { Card } from '../../../components'

import { Wrapper } from './styles'

type Route = RouteProp<types.RouteTypes, 'Project'>

export const TaskList = () => {
	const route: Route = useRoute()

	const { params } = route
	const { project } = params
	const { tasks } = project
	const { useFiltered } = hooks

	const { setOptions } = useNavigation()

	const [search, setSearch] = useState<string>("")

	const [filteredTasks, setFilteredTasks] = useFiltered<types.Task>({
		field: tasks, 
		filterBy: ['name', 'status']
	})

	const searchTask = (value: string) => {
		setSearch(value)
		setFilteredTasks(value)
	}

	const renderTasks = useCallback(tasks => {
		return tasks.map((task: types.Task) =>(
			<Card
				key={task._id}
				type="task"
				name={task.name}
				status={task.status}
				start={task.start}
				finish={task.finish}				
			/>
		))
	},[tasks])

	useEffect(() => {
		setOptions({
			title: `Projeto: ${project.name}`
		})
	})

	return(
		<Wrapper>
			<SearchBar
        placeholder="Pesquise por alguma tarefa"
				onChangeText={searchTask}
				value={search}
      />
			<RNICard>
				<RNICard.Title>Tarefas</RNICard.Title>
				<RNICard.Divider/>
				{renderTasks(filteredTasks)}  
			</RNICard>

		</Wrapper>
	)
}