import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { validation } from '@tprod/utils'

import { Button } from '../../../components/Buttons'
import { Input } from '../../../components/Inputs'

import { Container } from '../../../components'
import { Title } from '../../../components/Texts'

type SubmitValues = {
	name: string
	username: string
	password: string
	passwordConfirmation: string
}

export const Register = () => {
	const { control, handleSubmit, errors, setError } = useForm()

	const { navigate } = useNavigation()

	const onSubmit = (values: SubmitValues) => {
		const { password, passwordConfirmation } = values

		if(password !== passwordConfirmation){
			setError('password', {
				message: 'Senhas não conferem'
			})
			setError('passwordConfirmation', {
				message: 'Senhas não conferem'
			})

			return
		}
	}

	return(
		<Container>
			<Title>Criar Nova Conta</Title>
			<Input
				control={control}
				errors={errors}
				rules={validation.required}
				name='name'
				placeholder='Digite seu nome completo'
				autoCapitalize='words'		
			/>

			<Input
				control={control}
				errors={errors}
				rules={validation.required}
				name='username'
				placeholder='Digite seu usuário'
				autoCapitalize='none'		
			/>
			
			<Input
				control={control}
				errors={errors}
				rules={validation.required}
				name='password'
				placeholder='Digite sua senha'
				secureTextEntry={true}
				autoCapitalize='none'		

			/>

		<Input
				control={control}
				errors={errors}
				rules={validation.required}
				name='passwordConfirmation'
				placeholder='Confirme sua senha'
				secureTextEntry={true}
				autoCapitalize='none'		

			/>

			<Button 
				title="Salvar"
				onPress={handleSubmit(onSubmit)}
			/>

			<Button
				type="clear"
				title="Voltar para a tela de login"
				onPress={()=> navigate('Login')}				
			/>
		</Container>
	)
}