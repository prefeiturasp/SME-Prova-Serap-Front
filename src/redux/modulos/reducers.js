import { combineReducers } from 'redux';
import loaderReducers from './loader/loader.reducers';
import sistema from './sistema/reducers';
import usuario from './usuario/reducers';
import provas from './provas/reducers';

const reducers = combineReducers({
  usuario,
  sistema,
  loaderReducers,
  provas,
});

const rootReducer = (state, action) => {
  if (action.type === '@sessao/limparSessao') state = undefined;

  return reducers(state, action);
};

export default rootReducer;
