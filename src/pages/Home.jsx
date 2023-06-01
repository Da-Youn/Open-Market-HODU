import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HoduLogo from '../assets/logo-hodu.svg';
import UserIcon from '../assets/icon-user.svg';
import CartIcon from '../assets/icon-shopping-cart.svg';
import SearchIcon from '../assets/icon-search.svg';
import { HeaderWrapper } from '../components/styles/HeaderStyle';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<Header />
			<article>
				<h2>HOME</h2>
			</article>
		</div>
	);
}
