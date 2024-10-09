// import { createStore, applyMiddleware } from 'redux';
// // import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly';
// import { composeWithDevTools } from '@redux-devtools/extension';

// import { thunk } from 'redux-thunk';

// const initialState = {
//     name: "Prakhar",
    
// }

// const reducer = (initialState) => initialState;

// const store = createStore(
//     reducer, initialState,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
})
