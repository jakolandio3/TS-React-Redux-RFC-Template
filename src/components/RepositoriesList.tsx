import React, { useEffect, useRef, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//repositories search and list component rendered on screen
const RepositoriesList: React.FC = () => {
	const { searchRepositories } = useActions();
	//CONTROLLED STATE FOR SEARCH TERM
	const [term, setTerm] = useState<string>('');
	//REF OBJECT FOR SEARCH INPUT
	const searchInput = useRef<HTMLInputElement | null>(null);
	//getting state out of the storestate
	// instead of annotating here weve made a hook where its annotated
	const { loading, error, data } = useTypedSelector(
		(state) => state.repositories
	);
	console.log(data);
	// useEffect here just focuses the user on the input on render
	useEffect(() => {
		if (!searchInput.current) {
			return;
		}
		searchInput.current.focus();
	}, []);
	//submit function prevent re-load of page and sends dispatch of search value
	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		//using our dispatch hook
		searchRepositories(term);
	}

	return (
		<div>
			<form
				name='search-packages'
				className='flex flex-row gap-6 py-2'
				action='submit'
				onSubmit={onSubmit}
			>
				<input
					name='search'
					className='rounded-xl text-center'
					ref={searchInput}
					type='text'
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
				<button className=' border p-1 rounded-lg hover:bg-gray-700 hover:text-gray-900 transition ease-in-out duration-700'>
					Search
				</button>
			</form>
			<h1 className='font-bold border-b mt-10'>RepositoriesList</h1>
		</div>
	);
};

export default RepositoriesList;
