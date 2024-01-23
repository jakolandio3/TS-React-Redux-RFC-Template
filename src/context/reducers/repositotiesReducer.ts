import { ActionType } from '../action-types';
import { Action } from '../actions';

//Type for state object
interface RepositoryState {
	loading: boolean;
	error: string | null;
	data: string[];
}

//Main reducer function for dispatch handling
//The switch statements are acting as an if statement for the type
//The cases handled by the enum 'ActionType' removes any chance of error
function repositotiesReducer(
	state: RepositoryState,
	action: Action
): RepositoryState {
	switch (action.type) {
		default:
			return state;
		case ActionType.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data: [] };
		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return { loading: false, error: action.payload, data: [] };
	}
}

export default repositotiesReducer;
