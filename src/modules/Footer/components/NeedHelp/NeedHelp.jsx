import parse from 'html-react-parser';
import React from 'react';

const NeedHelp = ({ data }) => {
  return (
    <>
      {data && (
        <div className="Sc">
          <div className="title-level3">{parse(data.title)}</div>
          <div className="content-Sc">
            <div className="infos-SC">
              <p>{parse(data.text)}</p>
              <ul className="cta-faq">
                {data.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="title ea-tracker ea-print gtm-click"
                      key={link.label}
                      data-ea>
                      {parse(link.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NeedHelp;
