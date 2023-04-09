import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

// Reducers
import { dataReducer } from "./reducer";



const reducers = combineReducers({
    data: dataReducer
});

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
    reducers,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);

export default store;