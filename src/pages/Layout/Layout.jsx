import React from 'react';
import Menu from 'modules/Menu/Menu';
import stylesMobile from './app.mobile.module.scss';
import styles from './app.module.scss';
import Footer from 'modules/Footer/Footer';
import FooterMobile from 'modules/Footer/Footer.mobile';

const Layout = ({ menus, genders, footer, children, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <MenuMobile menus={menus} genders={genders} />
      ) : (
        <Menu menus={menus} genders={genders} />
      )}
      {children && <div className={isMobile ? stylesMobile.app : styles.app}>{children}</div>}
      {isMobile ? <FooterMobile footer={footer} /> : <Footer footer={footer} />}
    </>
  );
};

export default Layout;
