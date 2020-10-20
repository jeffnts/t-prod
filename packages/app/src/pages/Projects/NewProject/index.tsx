import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { validation } from '@tprod/utils'

import { Button } from '../../../components/Buttons'
import { Input } from '../../../components/Inputs'

type SubmitProps = {
	name: string
	description: string
}

import { Container } from '../../../components'

export const NewProject = () => {
	const { setOptions, navigate } = useNavigation()

	const { control, handleSubmit, errors } = useForm()

	const onSubmit = (values: SubmitProps) => {
		console.log(values)

		navigate('Project', { project: values })
	}

	useEffect(() => {
		setOptions({
			title: 'Criar Novo Projeto'
		})
	},[])

	return(
		<Container>
			<Input
				control={control}
				errors={errors}
				rules={validation.required}
				name='name'
				placeholder='Digite o nome do projeto'
				autoCapitalize='sentences'		
			/>

			<Input
				control={control}
				name='description'
				placeholder='Digite a descrição do projeto'
				multiline
				inputContainerStyle={{
					minHeight: 100
				}}
				autoCapitalize='sentences'			
			/>

			<Button 
				title="Salvar"
				onPress={handleSubmit(onSubmit)}
			/>
		</Container>
	)
}