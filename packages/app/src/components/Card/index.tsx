import React, { useCallback, useMemo, Fragment } from 'react'
import dayjs from 'dayjs'

import { Text } from 'react-native'

import { Wrapper, Content, Item, Title, Button } from './styles'

type Props = {
	type: 'project' | 'task'
	name: string
	status: string
	start: string
	finish: string
	tasks?: [object]
	handleShow?: Function
	buttonText?: string
}

export const Card = (props: Props) => {
	const { type, name, status, start, finish, tasks, handleShow, buttonText } = props

	const mapStatus: any = {
		'Em andamento': 'inProgress',
		'Finalizado': 'done'
	}

	const renderTasks = useCallback(type => {
		if(type === 'project'){
			return(
				<Item>
					<Title>
						Quantidade de tarefas:
					</Title>
					<Text>{tasks?.length}</Text>
				</Item>
			)
		}

		return <Fragment></Fragment>
	},[type, tasks])

	const renderButton = useCallback((handleShow, status, buttonText) => {
		if(handleShow){
			return(
				<Button 
					status={mapStatus[status]}
					title={buttonText}
					onPress={handleShow}									
				/>
			)
		}

		return <Fragment></Fragment>
	},[handleShow])
	

	const startTime = useMemo(() => {
		return dayjs(start).format('DD/MM/YYYY - h:mm:ss A')
	},[start])

	const finishTime = useMemo(()=>{
		return dayjs(finish).format('DD/MM/YYYY - h:mm:ss A')
	},[finish])

	const totalTime = useMemo(() => {
		const startTime = dayjs(start)
		const finishTime = dayjs(finish)

		const totalTime = startTime.diff(finishTime, 'hour')

		return totalTime
	},[start, finish])

	return(
		<Wrapper
			status={mapStatus[status]}
		>
			<Content>
				<Item>
					<Title>Nome:</Title>
					<Text>{name}</Text>
				</Item>
				
				<Item>
					<Title>Status:</Title>
					<Text>{status}</Text>
				</Item>
				<Item>
					<Title>Início:</Title>
					<Text>{startTime}</Text>
				</Item>
			
				<Item>
					<Title>Término:</Title>
					<Text>{finishTime}</Text>
				</Item>

				<Item>
					<Title>Tempo Total:</Title>
					<Text>{totalTime}</Text>
				</Item>
				{renderTasks(type)}
			</Content>
			{renderButton(handleShow, status, buttonText)}
		</Wrapper>
	)
}