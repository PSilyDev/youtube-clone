import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly';
import { thunk } from 'redux-thunk';

const initialState = {
    name: "Prakhar",
    age: "24",
    type: 'video'
}

const reducer = (initialState) => initialState;

const store = createStore(
    reducer, initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;