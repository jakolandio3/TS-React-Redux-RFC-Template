import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { DATABASE } from '../../env/variables';

//creating an async function for fetching our data

//1) it takes in a search term and returns a function that makes use of Dispatch from redux with our generic type of Action applied (this makes sure the only dispatch functions that can be called are ones we have defined)
//2) it sends a Redux dispatch function to our reducer of type search
//3) it then calls an axios function to fetch data - this uses the params object to add a query to the url of type text populated with the passed in argument of 'term'
//4) it will then map through the objects in the data and return a new array from the results
//5) it then dispatches an update on success or error based on result of the axios function
export const searchRepositories = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.SEARCH_REPOSITORIES });
		try {
			const { data } = await axios.get(DATABASE, { params: { text: term } });
			const names = data.objects.map((result: any) => {
				return result.package.name;
			});
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: names,
			});
		} catch (error) {
			if (error instanceof Error)
				dispatch({
					type: ActionType.SEARCH_REPOSITORIES_ERROR,
					payload: error.message,
				});
		}
	};
};
