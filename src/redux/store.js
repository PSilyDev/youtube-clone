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

import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';

const store = configureStore({
  reducer: {
    auth: authReducer, // Combining reducers here directly
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development mode
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Default middleware includes redux-thunk
});

export default store;
