import React, { useState, useEffect } from "react";
import { getMenu } from "../../strapi/strapi.service";
import SubMenu from "./subMenu";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(async () => {
    const menus = await getMenu();
    setMenus(menus);
  }, []);
  console.log("menus", menus);
  return (
    <div>
      {menus.map(el => {
        return (
          <li className="menu-group" data-menu-group={0}>
            <a
              className="tab  "
              data-promo
              data-ea
              href="/chaussure-nouvelle-collection"
            >
              {el.header.name}
            </a>
            <div className="sub">
              <div
                className="sub-inner"
                style={{ opacity: 1, height: "0px", display: "none" }}
              >
                <a className="back" href="#0">
                  Retour
                </a>
                <a
                  className="root  "
                  data-promo
                  data-ea
                  href="/chaussure-nouvelle-collection"
                >
                  Afficher tout
                </a>
                <SubMenu data={el.items} />
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Menu;
