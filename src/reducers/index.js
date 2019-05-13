import {combineReducers} from 'redux';
import productReducer from './product.reducer';
import editReducer from './edit/edit.index';
import productdetailsReducer from'./productDetailsReducer';

const rootReducer = combineReducers({
    productReducer,
    editReducer,
    productdetailsReducer
});

export default rootReducer;