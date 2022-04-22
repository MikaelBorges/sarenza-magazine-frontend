import React from 'react';

import Footer from '../../Footer/Footer';
import Menu from '../../Menu/Menu';
import getGender from '../../Menu/service/gender.service';
import getMenu from '../../Menu/service/menu.service';

const Container = ({ children, menus, genders }) => {
  return (
    <>
      <Menu menus={menus} genders={genders} />
      {children}
      <Footer />
    </>
  );
};

export async function initProps() {
  const menus = await getMenu();
  const genders = await getGender();

  return {
    props: {
      meta: [], // meta => liste des éléments <meta> à ajouter
      head: [], // head => Liste des éléments [<script>, <link>] à ajouter en head
      menus,
      genders
    }
  };
}

export default Container;
