// import PropTypes from 'prop-types';
import React from 'react';

function BlockLinks({ data }) {
  return (
    <>
      <div className="col">
        {data &&
          data.slice(0, 2).map((blockSliced) => {
            return (
              <React.Fragment key={blockSliced.id}>
                <div className="title-nav">{blockSliced.title}</div>
                <ul className="list">
                  {blockSliced.links.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href={item.href} className="ea-tracker gtm-click" data-ea>
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </React.Fragment>
            );
          })}
      </div>
      {data &&
        data.slice(2, 3).map((blockSliced) => {
          return (
            <div className="col" key={blockSliced.id}>
              <div className="title-nav">{blockSliced.title}</div>
              <ul className="list">
                {blockSliced.links.map((item) => {
                  return (
                    <li key={item.id}>
                      <a href={item.href} className="ea-tracker gtm-click" data-ea>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </>
  );
}

// BlockLinks.propTypes = {
//     title: PropTypes.string,
//     label: PropTypes.string
// };

// BlockLinks.defaultProps = {
//     title: '',
//     label: ''
// };

export default BlockLinks;
