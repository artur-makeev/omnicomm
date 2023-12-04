import { useState } from 'react';
import { UniversitiesTable } from 'widgets/UniversitiesTable';
import { UniversitiesPagination } from 'widgets/UniversitiesPagination';
import { Input } from 'shared/ui/Input/Input';
import { useFetchUniversities } from 'entities/Universities';

export const App = () => {
	const [country, setCountry] = useState('Russian Federation');
	const { isLoading: universitiesLoading } = useFetchUniversities({
		country,
		delay: 1000,
	});

	return (
		<>
			<Input
				label='Поиск'
				id='search'
				onChange={setCountry}
				type='string'
				value={country}
			/>

			{universitiesLoading ? (
				<div>loading</div>
			) : (
				<div>
					<UniversitiesTable />
					<UniversitiesPagination />
				</div>
			)}
		</>
	);
};
