import React from 'react';
import { connect } from 'react-redux';
import Pinterest from '../util/pinterest';
import { PIN_APP } from '../util/config';

let Header = ({ dispatch }) => {
  PDK.init({
    appId: PIN_APP,
    cookie: true
  });
  return (
    <div>Header</div>
  )
}

Header = connect()(Header);

export default Header;