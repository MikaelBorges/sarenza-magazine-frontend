import parse from 'html-react-parser';
import React from 'react';

const NeedHelpMobile = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <div className="title-level2">{parse(data.title)}</div>
          <p>{parse(data.text)}</p>
          <section className="cta-faq">
            {data.links.map((link) => (
              <a
                href={link.href}
                className="title ea-tracker ea-print gtm-click"
                key={link.label}
                data-track-label>
                {parse(link.label)}
              </a>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default NeedHelpMobile;
