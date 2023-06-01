import styled from 'styled-components';
import Button from './Button';

const H1 = styled.h1`
	margin-bottom: 70px;
`;

const LoginWrap = styled.div`
	margin: 150px auto 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FormChangeWrap = styled.div`
	display: flex;
	background-color: var(--primary);
`;

const Input = styled.input`
	width: 480px;
	height: 60px;
	border-bottom: 1px solid var(--border-color);

	&::placeholder {
		font-size: 16px;
		color: var(--sub-font-color);
	}

	&[type='password'] {
		margin-bottom: 16px;
	}
`;

const LoginButton = styled(Button)`
	height: 480px;
	height: 60px;
	margin-top: 20px;
`;

const LinkWrap = styled.div`
	display: flex;
	gap: 14px;
	a {
		color: var(--font-color);
	}
`;

export { H1, LoginWrap, FormChangeWrap, Input, LoginButton, LinkWrap };
