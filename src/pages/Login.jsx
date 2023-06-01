import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormWrap, FormChangeBtn } from '../components/styles/Form';
import HoduLogo from '../assets/logo-hodu.svg';
import {
	H1,
	LoginWrap,
	FormChangeWrap,
	Input,
	LoginButton,
	LinkWrap,
} from '../components/styles/LoginStyle';

export default function Login() {
	const [userInput, setUserInput] = useState({
		username: '',
		password: '',
		login_type: 'BUYER',
	});
	const navigate = useNavigate();

	const handleBuyerLogin = () => {
		setUserInput({
			...userInput,
			login_type: 'BUYER',
		});
	};
	const handleSellerLogin = () => {
		setUserInput({
			...userInput,
			login_type: 'SELLER',
		});
	};
	console.log(userInput);

	async function handleLoginSubmit(event) {
		event.preventDefault();
		const inputError = document.querySelector('.input-error');
		if (userInput.username === '') {
			inputError.textContent = '아이디를 입력해 주세요.';
			inputError.classList.remove('hidden');
			console.log('아이디를 입력해 주세요.');
			return;
		} else if (userInput.password === '') {
			inputError.textContent = '비밀번호를 입력해 주세요.';
			inputError.classList.remove('hidden');
			console.log('비밀번호를 입력해 주세요.');
			return;
		}

		try {
			// Send the form data to the specified URL using async/await
			const response = await fetch('https://openmarket.weniv.co.kr/accounts/login/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ ...userInput }),
			});
			const responseData = await response.json();
			console.log(response, responseData);

			if (response.ok) {
				alert(`${userInput.username}님, 반갑습니다.`);
				const token = json.user['token'];
				localStorage.setItem('token', token);
				navigate('/');
			} else {
				if (
					responseData.FAIL_Message ===
					'로그인 정보가 없습니다. 로그인 유형을 학인해주세요.'
				) {
					// 로그인 유형 에러 처리
					inputError.textContent = '로그인 정보가 없습니다. 로그인 유형을 확인해주세요.';
				} else {
					// 로그인 오류 에러 처리
					inputError.textContent = '아이디 또는 비밀번호가 일치하지 않습니다.';
					inputError.classList.remove('hidden');
				}
				inputError.classList.remove('hidden');
			}
		} catch (error) {
			const json = await response.json().user;
			console.log(json);
			console.error('Error:', error);
		}
	}

	return (
		<LoginWrap>
			<H1 className="login-title">
				<Link to="/">
					<img src={HoduLogo} alt="호두 로고 이미지" />
				</Link>
			</H1>
			<FormChangeWrap>
				<h2 className="a11y-hidden">회원 종류 선택하기</h2>
				<FormChangeBtn
					className={`form-btn ${userInput.login_type === 'BUYER' ? '' : 'disable'}`}
					type="button"
					onClick={handleBuyerLogin}
				>
					구매회원 로그인
				</FormChangeBtn>
				<FormChangeBtn
					className={`form-btn ${userInput.login_type === 'SELLER' ? '' : 'disable'}`}
					type="button"
					onClick={handleSellerLogin}
				>
					판매회원 로그인
				</FormChangeBtn>
			</FormChangeWrap>
			<FormWrap onSubmit={handleLoginSubmit}>
				<Input
					type="text"
					placeholder="아이디"
					onChange={(e) => {
						setUserInput({
							...userInput,
							username: e.target.value.trim(),
						});
					}}
				/>
				<Input
					type="password"
					placeholder="비밀번호"
					onChange={(e) => {
						setUserInput({
							...userInput,
							password: e.target.value.trim(),
						});
					}}
				/>
				<label className="input-error hidden"></label>
				<LoginButton className="login-btn" type="submit">
					로그인
				</LoginButton>
			</FormWrap>
			<LinkWrap>
				<a>회원가입</a>
				<p>|</p>
				<a>비밀번호 찾기</a>
			</LinkWrap>
		</LoginWrap>
	);
}
