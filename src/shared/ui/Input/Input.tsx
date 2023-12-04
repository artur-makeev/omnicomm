/* eslint-disable react/display-name */
import type { ChangeEvent } from 'react';
import { memo, type InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	label?: string;
	id?: string;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		label,
		id,
		...otherProps
	} = props;

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={className}>
			{label && id && (
				<>
					<label htmlFor={`#${id}`}>{label}</label>
					<br />
				</>
			)}
			<input
				id={id}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</div>
	);
});
