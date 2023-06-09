import React from 'react';
import { Link } from 'react-router-dom';
import HoduLogo from '../../../assets/logo-hodu.svg';
import UserIcon from '../../../assets/icon-user.svg';
import CartIcon from '../../../assets/icon-shopping-cart.svg';
import SearchIcon from '../../../assets/icon-search.svg';
import { HeaderWrapper } from './HeaderStyle';

interface HeaderProps {
  id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
  return (
    <HeaderWrapper id={id}>
      <div className='header-left'>
        <h1>
          <Link to='/'>
            <img src={HoduLogo} alt='호두 로고 이미지' />
          </Link>
        </h1>
        <form>
          <input type='text' placeholder='상품을 검색해보세요!' />
          <button type='submit'>
            <img src={SearchIcon} alt='' />
          </button>
        </form>
      </div>

      <div className='header-right'>
        <Link to='/accounts/cart/'>
          <img src={CartIcon} alt='장바구니 아이콘' />
          <p>장바구니</p>
        </Link>
        <Link to='/accounts/login/'>
          <img src={UserIcon} alt='유저 아이콘' />
          <p>로그인</p>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
