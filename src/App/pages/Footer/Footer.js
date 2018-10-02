import React from 'react';
import { EPROTONOSUPPORT } from 'constants';
import FooterStyles from './FooterStyles.css'


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="footer">
        <p className="footerp">© 2018 Inform</p>
        <ul className="footerul">
          <li>Terms</li>
          <li>Blog</li>
          <li>Hire Us Please</li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
