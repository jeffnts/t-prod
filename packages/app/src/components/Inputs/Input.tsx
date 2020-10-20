import React from 'react'
import { Controller } from 'react-hook-form'

import { Input as RNEInput, InputProps} from 'react-native-elements'


interface props extends InputProps {
	control: any
	errors?: any
	name: string 
	defaultValue?: string 
	rules?: object
}

export const Input = ({ control, errors, name, defaultValue, rules, ...rest }: props) => {
	return(
		<Controller
			control={control}
			name={name}
			rules={rules}
			defaultValue={defaultValue? defaultValue: ''}
			render={({ onChange, onBlur, value }) => (
				<RNEInput
					onChangeText={value => onChange(value)}
					onBlur={onBlur}
					value={value}
					errorStyle={{ color: 'red' }}
					errorMessage={errors && errors[name] && errors[name].message}
					{...rest}
				/>	
			)}			
		/>
	)	
}