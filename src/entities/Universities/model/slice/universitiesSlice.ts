import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UniversitiesSchema, University } from '../types/universities';
import { fetchUniversities } from '../services/fetchActiveUniversities';
import { ITEMS_PER_PAGE } from 'shared/consts/itemsPerPage';

const initialState: UniversitiesSchema = {
	universities: [],
	slicedUniversities: [],
	activePage: 1,
	totalPages: 0,
	isLoading: false,
};

export const orderSlice = createSlice({
	name: 'universities',
	initialState,
	reducers: {
		setUniversities: (state, action: PayloadAction<University[]>) => {
			state.universities = action.payload;
			state.activePage = 1;
			state.totalPages = Math.ceil(action.payload.length / ITEMS_PER_PAGE);
			state.slicedUniversities = action.payload.slice(0, ITEMS_PER_PAGE);
		},
		setTotalPages: (state, action: PayloadAction<number>) => {
			state.totalPages = action.payload;
		},
		setActivePage: (state, action: PayloadAction<number>) => {
			state.activePage = action.payload;
			const start = ITEMS_PER_PAGE * (action.payload - 1);
			const end = start + ITEMS_PER_PAGE;
			state.slicedUniversities = state.universities.slice(start, end);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUniversities.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchUniversities.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(fetchUniversities.rejected, (state) => {
				state.isLoading = false;
				state.activePage = 1;
				state.slicedUniversities = [];
				state.totalPages = 0;
				state.universities = [];
			});
	},
});

export const { actions: universitiesActions } = orderSlice;
export const { reducer: universitiesReducer } = orderSlice;
