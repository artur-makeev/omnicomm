import { useSelector } from 'react-redux';
import styles from './Pagination.module.css';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { getUniversities, universitiesActions } from 'entities/Universities';

export const Pagination = () => {
	const { activePage, totalPages } = useSelector(getUniversities);
	const dispatch = useAppDispatch();

	const handleClick = (pageNumber: number) => {
		dispatch(universitiesActions.setActivePage(pageNumber));
	};

	if (!totalPages) return null;

	return (
		<div>
			{(function () {
				const buttons = [];
				for (let i = 1; i !== totalPages + 1; i++) {
					buttons.push(
						<button
							key={i}
							onClick={() => handleClick(i)}
							className={i === activePage ? styles.active : ''}
						>
							{i}
						</button>,
					);
				}
				return buttons;
			})()}
		</div>
	);
};
