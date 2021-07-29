import { applyMiddleware, createStore } from 'redux';

export default (reducers, middlewares) => {
  const applyedMiddleware = applyMiddleware(...middlewares);

  return createStore(reducers, applyedMiddleware);
};
