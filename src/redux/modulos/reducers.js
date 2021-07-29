import { combineReducers } from 'redux';
import usuario from './usuario/reducers';

const reducers = combineReducers({
  usuario,
});

const rootReducer = (state, action) => {
  if (action.type === '@sessao/limpar') state = undefined;

  return reducers(state, action);
};

export default rootReducer;
