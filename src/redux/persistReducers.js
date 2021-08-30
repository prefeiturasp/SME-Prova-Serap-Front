import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'sme-serap',
      storage,
      whitelist: ['usuario', 'provas'],
    },
    reducers,
  );

  return persistedReducer;
};
