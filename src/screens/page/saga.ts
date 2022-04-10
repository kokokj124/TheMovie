import { getPages } from "./api";
import { call, put, takeLatest } from 'redux-saga/effects';
import { actionDataPages, actionRequestPage } from "./slice";

function* getPage(action: any): Generator<object>{                
    const dataAPI: any = yield call(getPages, action.payload);
    
    // for (const [key, value] of Object.entries(dataAPI.data)) {
    //     console.log(`${key}: ${value}`);
    //   }

     
    yield put(actionDataPages(dataAPI.data))
}

function* pageWatcher(){    
    yield takeLatest(actionRequestPage, getPage)
}

export default pageWatcher