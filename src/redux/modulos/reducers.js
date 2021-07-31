import { combineReducers } from 'redux';
import sistema from './sistema/reducers';
import usuario from './usuario/reducers';

const reducers = combineReducers({
  usuario,
  sistema,
});

const rootReducer = (state, action) => {
  if (action.type === '@sessao/limparSessao') state = undefined;

  return reducers(state, action);
};

export default rootReducer;
