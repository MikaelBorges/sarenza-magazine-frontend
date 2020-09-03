import React from "react";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";

const Header = ({ title, src, alt, logoOpacity }) => {
  return (
    src && (
      <header className="logoShop">
        <div className="content">
            <Logo src={src} alt={alt} opacity={logoOpacity} />
            <Title value={title} />
        </div>
      </header>
    )
  );
};

export default Header;