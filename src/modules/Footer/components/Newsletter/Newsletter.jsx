import parse from 'html-react-parser';
// import PropTypes from 'prop-types';
import React from 'react';

import AreaInput from './AreaInput';

const Newsletter = ({ data }) => {
  return (
    <>
      {data && (
        <div className="newsletter">
          <form
            action="/subscription/contest"
            className="subscribe-newsletter"
            method="POST"
            data-async
            data-display-success="true"
            noValidate="novalidate">
            <input type="hidden" name="Res" value="0" />
            <input
              type="hidden"
              name="todelete"
              value="Merci ! Vous êtes bien inscrit à la newsletter et votre code de bienvenue vous a été envoyé par email."
            />
            <input type="hidden" name="todelete" value="Vous êtes déjà inscrit à la newsletter !" />
            <input type="hidden" name="SubOrigin" value="4" />
            <input type="hidden" name="ContestId" value="Inscription_newsletter_site" />
            <input type="hidden" name="optin" value="true" />
            <input type="hidden" name="civility" />
            <div className="title-level1">{data.title}</div>
            <div className="nl-subtitle">{data.subtitle}</div>
            <p>{data.text}</p>
            <AreaInput
              label={data.input.Label}
              placeholder={data.input.Placeholder}
              buttons={data.input.Button}
              key={data.input.id}
            />
            <div className="legal-message">{parse(data.term)}</div>
          </form>
        </div>
      )}
    </>
  );
};

// Newsletter.propTypes = {
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     text: PropTypes.string,
//     terms: PropTypes.string
// };

export default Newsletter;
