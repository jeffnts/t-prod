import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { types, hooks } from '@tprod/utils'

import { Card as RNICard, SearchBar } from 'react-native-elements'

import { Card } from '../../../components'
import { AddButton } from '../../../components/Buttons'

import { Wrapper } from './styles'

const projects = [
	{
			_id: '1',
		 name: 'Projeto 1',		 
		 start: new Date().toString(),
		 finish: new Date().toString(),
		 status: 'inProgress',
		 tasks: [
			{
				_id: '1',
				name: 'Tarefa 1',
				status: 'done',
				start: new Date().toString(),
				finish: new Date().toString(),
			}
		]
	},

	{
		_id: '2',
	 name: 'Projeto 2',		 
	 start: new Date().toString(),
	 finish: new Date().toString(),
	 status: 'done',
	 tasks: [
		{
			_id: '1',
			name: 'Tarefa 1',
			status: 'done',
			start: new Date().toString(),
			finish: new Date().toString(),
		},
		{
			_id: '2',
			name: 'Tarefa 2',
			status: 'inProgress',
			start: new Date().toString(),
			finish: new Date().toString(),
		}
	]
},
 ]

export const ProjectList = () => {
	const { navigate, setOptions } = useNavigation()

	const { useFiltered } = hooks

	const [search, setSearch] = useState<string>("")

	const projectsTransformed = useMemo(() => {
		const mapStatus: any = {
			inProgress: 'Em andamento',
			done: 'Finalizado'
		}

		return projects.map((project) => {
			return {
				...project,
				status: mapStatus[project.status],
				tasks: project.tasks.map(task => {
					return {
						...task,
						status: mapStatus[task.status]
					} 
				})
			}
		})
	},[projects])

	const [filteredProjects, setFilteredProjects] = useFiltered({
		field: projectsTransformed, 
		filterBy: ['name', 'status']
	})

	const searchProject = (value: string) => {
		setSearch(value)
		setFilteredProjects(value)
	}

	const selectProject = (id: string) => {
		const project = projectsTransformed?.find((project) => project._id === id)

		navigate('TaskList', { project })
	}

	const renderProjects = useCallback(projects => {
		return projects.map((project: types.Project) =>(
			<Card
				key={project._id}
				type="project"
				name={project.name}
				status={project.status}
				start={project.start}
				finish={project.finish}
				tasks={project.tasks}
				handleShow={() => selectProject(project._id)}
				buttonText="Vizualizar Tarefas"
			/>
		))
	},[projects])

	useEffect(() => {
		setOptions({
			title: 'Lista de Projetos'
		})
	},[])


	return(
		<Wrapper>			
			 <SearchBar
        placeholder="Pesquise por algum projeto"
				onChangeText={searchProject}
				value={search}
      />
			<RNICard>
				<RNICard.Title>Projetos</RNICard.Title>
				<RNICard.Divider/>
				{renderProjects(filteredProjects)}  
			</RNICard>

			<AddButton
				onPress={() => navigate('NewProject')}
			/>	
		</Wrapper>
	)
}