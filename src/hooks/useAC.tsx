import { allActionCreators } from '../redux/reducers/allActionCreators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useActionCreators = () =>{
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
}