import React from 'react';
import { EPROTONOSUPPORT } from 'constants';
import HeaderStyles from './HeaderStyles.css'
import TemporaryDrawer from '../Drawer';



class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <br/>
        <TemporaryDrawer />
        <h2 className="headerp">InForm</h2>
      </header>
    )
  }
}

export default Header;
