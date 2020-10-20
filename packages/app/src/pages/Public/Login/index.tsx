import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { validation } from '@tprod/utils'
 
import { Button } from '../../../components/Buttons'
import { Input } from '../../../components/Inputs'

import { Wrapper } from './styles'

type SubmitValues = {
	username: string
	password: string
}

export const Login = () => {
	const { control, handleSubmit, errors } = useForm()

	const { navigate } = useNavigation()

	const onSubmit = (values: SubmitValues) => {
		console.log(values)

		navigate('App')
	}

	return(
		<Wrapper>
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
			<Button 
				title="Login"
				onPress={handleSubmit(onSubmit)}
			/>

			<Button
				type="clear"
				title="Criar nova conta"
				onPress={()=> navigate('Register')}				
			/>
		</Wrapper>
	)
}

