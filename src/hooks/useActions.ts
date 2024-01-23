import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../context';

export function useActions() {
	const dispatch = useDispatch();
	//using bind action creators to return an object will all our action creators
	return bindActionCreators(actionCreators, dispatch);
}
