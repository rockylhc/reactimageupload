import * as types from '../actions/actionTypes';
import initialState from './initialState';


function actionTypeEndsInSuccessOrFailed(type){
    return type.substring(type.length - 8) == '_SUCCESS' || type.substring(type.length - 8) == '_ERROR';
}

export default function appReducer(state = initialState, action){
    if(action.type == types.BEGIN_SUBMIT){
        return Object.assign({}, state, {base64: action.base64, status:1 });
    }
    if(action.type == types.SUBMIT_ERROR || actionTypeEndsInSuccessOrFailed(action.type)){
        return Object.assign({}, state, {base64: action.base64, status:0 })
    }
    return state;
}