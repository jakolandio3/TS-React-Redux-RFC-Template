import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../context';

import './App.css';
import RepositoriesList from './RepositoriesList';

function App() {
	return (
		<Provider store={store}>
			<div className='App pt-4 flex flex-col justify-center w-[100vw] items-center text-center'>
				<h1 className='font-bold border p-2 rounded-lg'>
					{' '}
					Search for a Package
				</h1>
				<br />
				<RepositoriesList />
			</div>
		</Provider>
	);
}

export default App;
