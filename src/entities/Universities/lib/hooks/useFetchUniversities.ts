import { useAppDispatch } from 'app/providers/StoreProvider';
import { getUniversities } from '../../model/selectors/getUniversities';
import { fetchUniversities } from '../../model/services/fetchActiveUniversities';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface useFetchUniversitiesProps {
	country: string;
	delay: number;
}

export const useFetchUniversities = (props: useFetchUniversitiesProps) => {
	const { country, delay } = props;
	const dispatch = useAppDispatch();
	const { isLoading } = useSelector(getUniversities);
	const [firstCall, setFirstCall] = useState(true);

	useEffect(() => {
		if (firstCall) {
			dispatch(fetchUniversities(country));
			setFirstCall(false);
		} else {
			const timerId = setTimeout(
				() => dispatch(fetchUniversities(country)),
				delay,
			);

			return () => clearTimeout(timerId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [country]);

	return { isLoading };
};
