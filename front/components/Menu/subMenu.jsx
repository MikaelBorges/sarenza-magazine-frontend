import React, { useState } from "react";
import styled from "styled-components";
import cn from "classnames";

const Item = styled.div`
  display: inline;
  margin: 10px;
  color: red;
`;
const SubMenu = ({ data, className }) => {
  return (
    <div className="sub">
      <div className="sub-inner">
        <a className="back" href="#0">
          Retour
        </a>
        <a
          className="root  "
          data-promo
          data-ea
          href="/chaussure-nouvelle-collection-homme"
        >
          Afficher tout
        </a>
        {data.map(item => {
          return (
            <div className="col">
              <span className="title">
                <span>{item.category}</span>
              </span>
              <ul className="list">
                {item.links.map(link => {
                  return (
                    <li className="link ">
                      <a href={item.link} data-ea className>
                        {link.label}
                      </a>
                    </li>
                  );
                })}

                <li className="all">
                  <a href="/chaussure-nouvelle-collection-homme" data-ea>
                    Encore plus de nouveautés
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
