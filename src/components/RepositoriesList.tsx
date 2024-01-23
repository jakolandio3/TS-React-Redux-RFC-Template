import React, { useEffect, useRef, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//repositories search and list component rendered on screen
const RepositoriesList: React.FC = () => {
	const { searchRepositories } = useActions();
	//CONTROLLED STATE FOR SEARCH TERM
	const [term, setTerm] = useState<string>('');
	//REF OBJECT FOR SEARCH INPUT
	const [staticTerm, setStaticTerm] = useState<string>('');
	const searchInput = useRef<HTMLInputElement | null>(null);
	//getting state out of the storestate
	// instead of annotating here weve made a hook where its annotated
	const { loading, error, data } = useTypedSelector(
		(state) => state.repositories
	);

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
		setStaticTerm(term);
		setTerm('');
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
					placeholder='Enter a Package Name'
					name='search'
					className='rounded-xl text-center placeholder:text-gray-600'
					ref={searchInput}
					type='text'
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
				<button className=' border p-1 rounded-lg hover:bg-gray-700 hover:text-gray-900 transition ease-in-out duration-700 '>
					Search
				</button>
			</form>
			{loading && (
				<span className='loading loading-ring loading-md mt-8'></span>
			)}
			{error && <h3 className='text-red-500'>An error occurred: {error}</h3>}
			{!error && !loading && data.length > 0 && (
				<>
					<h1 className='font-bold border-b mt-10 '>RepositoriesList</h1>
					<div role='alert' className='alert alert-success mt-3 p-1 text-sm'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='stroke-current shrink-0 h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
						<span>
							We've found {data.length} results for {staticTerm}
						</span>
					</div>
					<div className='flex flex-col mt-6 gap-2 pb-6 max-w-[300px]'>
						{data.map((result) => (
							<kbd key={result} className='kbd kbd-md text-wrap'>
								{result}
							</kbd>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default RepositoriesList;
