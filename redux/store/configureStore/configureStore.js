import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../../reducer';
import ReduxThunk from 'redux-thunk';

const logger = createLogger({
    predicate: (getState, action) => __DEV__
});

const createRNReduxStore = applyMiddleware(logger, ReduxThunk)(createStore);

const store = createRNReduxStore(rootReducer);

export default store;