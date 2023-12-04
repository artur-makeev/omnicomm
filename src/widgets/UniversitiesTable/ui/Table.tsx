import { getUniversities } from 'entities/Universities/model/selectors/getUniversities';
import { useSelector } from 'react-redux';

export const Table = () => {
	const { slicedUniversities } = useSelector(getUniversities);

	if (!slicedUniversities.length) return null;

	return (
		<table>
			<thead>
				<tr>
					<th>University name</th>
					<th>Country code</th>
					<th>Domains</th>
				</tr>
			</thead>
			<tbody>
				{slicedUniversities.map((u) => (
					<tr key={u.name}>
						<td>{u.name}</td>
						<td>{u.alpha_two_code}</td>
						<td>
							{u.domains.map((d) => (
								<a
									key={d}
									href={`https://${d}`}
									target='_blank'
									rel='noreferrer'
								>
									{' '}
									{d}{' '}
								</a>
							))}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
