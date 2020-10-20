import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ThemeProvider } from 'react-native-elements'
import { locale } from 'dayjs'
import 'dayjs/locale/pt-br'

locale('pt-br')

import Routes from './routes'

const App = () => {
	useEffect(() => {
    if (__DEV__) {
      const RNAsyncStorageFlipper = require('rn-async-storage-flipper').default;
      RNAsyncStorageFlipper(AsyncStorage);
    }
	}, []);
	
	return(
		<ThemeProvider>
				<Routes/>
		</ThemeProvider>	
	)
}

export default App