import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; //para conectar nuestra app
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Header">
      <h3 className="Header-title">
        <Link to={'/'}>PlatziConf Merch</Link>
      </h3>
      <div className="Header-chechout">
        <Link to={'/checkout'}>
          <i className={'fa fa-shopping-basket'}></i>
        </Link>
        {cart.length > 0 && <div className={'Header-alert'}>{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
