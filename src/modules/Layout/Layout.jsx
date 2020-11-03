import Footer from 'modules/Footer/Footer';
import FooterMobile from 'modules/Footer/Footer.mobile';
import Menu from 'modules/Menu/Menu';
import MenuMobile from 'modules/Menu/Menu.mobile';
import React from 'react';

import Breadcrumb from '@/components/commons/Breadcrumb/Breadcrumb';

import stylesMobile from './app.mobile.module.scss';
import styles from './app.module.scss';

const Layout = ({ menus, genders, footer, children, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <MenuMobile menus={menus} genders={genders} />
      ) : (
        <Menu menus={menus} genders={genders} />
      )}
      {children && (
        <div className={isMobile ? stylesMobile.app : styles.app}>
          <div className={styles.boxBreadcrumb}>
            <Breadcrumb />
          </div>
          {children}
        </div>
      )}
      {isMobile ? <FooterMobile footer={footer} /> : <Footer footer={footer} />}
    </>
  );
};

export default Layout;
