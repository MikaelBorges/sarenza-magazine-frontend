import React, { useState } from "react";
import styled from "styled-components";
import cn from "classnames";

const Item = styled.div`
  display: inline;
  margin: 10px;
  color: red;
`;
const SubMenu = ({ data, className }) => {
  return data.map(el => {
    return (
      <div>
        <div className="col">
          <span className="title">
            <span>{el.category}</span>
          </span>
          <ul className="list">
            {el.links.map(link => {
              return (
                <li className="link ">
                  <a href={link.link} data-ea className>
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="all">
              <a href="/chaussure-nouvelle-collection" data-ea>
                Encore plus de nouveautés
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  });
};

export default SubMenu;
