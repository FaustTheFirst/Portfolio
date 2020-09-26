import { applyMiddleware, combineReducers, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

const initialState = {};

const middlewares = [
  thunk,
  routerMiddleware(history)
];

const defineDevTools = composeWithDevTools({ trace: true });

const composedEnhancers = defineDevTools(
  applyMiddleware(...middlewares)
);

const reducers = {};

const rootReducer = combineReducers({
  router: connectRouter(history),
  ...reducers
});

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
