import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { useDispatch } from 'react-redux';
import { universitiesReducer } from 'entities/Universities';

export function createReduxStore() {
	const rootReducers = combineReducers({
		universities: universitiesReducer,
	});

	const store = configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
	});

	return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;

export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
