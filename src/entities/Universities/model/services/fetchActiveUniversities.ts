import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from 'shared/api';
import type { University } from '../types/universities';
import { universitiesActions } from '../slice/universitiesSlice';

export const fetchUniversities = createAsyncThunk<
	void,
	string,
	{ rejectValue: string }
>('universities/fetchUniversities', async (country, thunkAPI) => {
	try {
		const response = await $api.get<University[]>('/search', {
			params: {
				country,
			},
		});

		if (!response.data) {
			throw new Error();
		}

		thunkAPI.dispatch(universitiesActions.setUniversities(response.data));
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue('error');
	}
});
