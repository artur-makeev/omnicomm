export { UniversitiesSchema, University } from './model/types/universities';
export {
	universitiesReducer,
	universitiesActions,
} from './model/slice/universitiesSlice';
export { getUniversities } from './model/selectors/getUniversities';
export { useFetchUniversities } from './lib/hooks/useFetchUniversities';
