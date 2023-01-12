import {
	InputHTMLAttributes
} from 'react';

import { Container } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	labelName: string;
	containerStyle?: object;
}

export const DateInput: React.FC<InputProps> = ({
	name,
	labelName,
	containerStyle = {},
	...rest
}: InputProps) => {
	return (
		<Container>
			<input {...rest} />
			<label htmlFor={name} className="form__label">{labelName}</label>
		</Container>
	);
};
