import * as types from './actionTypes';
import appService from '../services/AppService';


export let beginSubmit = () => {
    return { type:types.BEGIN_SUBMIT }
}

export let submitError = () => {
    return { type:types.SUBMIT_ERROR }
}

export let submitSuccess = (base64) => {
    return { type:types.SUBMIT_SUCCESS, base64 }
}

export let submitData = (data) => {
    return function(dispatch){
        dispatch(beginSubmit());
        return appService.submitBase64(data).then(()=>{
            dispatch(submitSuccess(data.base64));
        }).catch( err =>{
            dispatch(submitError(err));
            throw(err);
        });
    }
}
