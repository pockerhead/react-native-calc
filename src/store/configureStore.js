import {combineReducers, createStore} from 'redux'
import reducer from '../reducers/reducer'
import devToolsEnhancer from 'remote-redux-devtools';

const rootReducer = combineReducers({reducer});

export default function configureStore() {
  let store = createStore(rootReducer,devToolsEnhancer({ realtime: true }));
  return store
}