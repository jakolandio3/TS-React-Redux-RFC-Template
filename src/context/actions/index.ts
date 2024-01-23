import { ActionType } from '../action-types';

//Defining interfaces for each Case/Action
//We can use our enum reference to types here to make sure they are 100% using the same string value for reference
interface SearchRepositoriesAction {
	type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
	payload: string[];
}
interface SearchRepositoriesErrorAction {
	type: ActionType.SEARCH_REPOSITORIES_ERROR;
	payload: string;
}
//Type for Action object
export type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesSuccessAction
	| SearchRepositoriesErrorAction;
