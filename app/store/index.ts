import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from './saga/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducer,
  middleware: [
    ...getDefaultMiddleware({ serializableCheck: false, thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);
