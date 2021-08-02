import { combineReducers } from 'redux';
import loader from './loader/reducers';
import sistema from './sistema/reducers';
import usuario from './usuario/reducers';

const reducers = combineReducers({
  usuario,
  sistema,
  loader,
});

const rootReducer = (state, action) => {
  if (action.type === '@sessao/limparSessao') state = undefined;

  return reducers(state, action);
};

export default rootReducer;
