import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../context';

import './App.css';
import RepositoriesList from './RepositoriesList';

function App() {
	return (
		<Provider store={store}>
			<div className='max-w-[100vw] italic footer-title p-2 m-0 bg-base-300 overflow-hidden text-center'>
				<p> search for NPM packages</p>
			</div>
			<div className='App pt-4 flex flex-col justify-between max-w-[100vw] h-[100vh] items-center text-center'>
				<div className=''>
					<h1 className='font-bold border p-2 rounded-lg'>
						Search for a Package
					</h1>
					<br />
					<RepositoriesList />
				</div>
				<footer className='bottom-0 left-0 max-w-[100vw] footer footer-center p-4 bg-base-300 text-base-content'>
					<aside>
						<p>Copyright © 2024 - All right reserved by Jakob Douglas</p>
					</aside>
				</footer>
			</div>
		</Provider>
	);
}

export default App;
