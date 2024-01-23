import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../context';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

//making out own hook here to annotate the type on useSelector so it knows what to expect from our store
