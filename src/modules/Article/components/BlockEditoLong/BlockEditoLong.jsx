import React, {useRef} from 'react';
// import PropTypes from 'prop-types';
import styles from './BlockEditoLong.module.scss';
import Mardown from 'markdown-to-jsx';
import useOnScreen from 'utils/useOnScreen';
import useGTM, {TrackEvent} from 'utils/useGTM';

const BlockEditoLong = ({ Title, Text, Image, Button }) => {
  const trackCTA = useRef();
  const isVisible = useOnScreen(trackCTA);


  const trackGTM = (Button, eventName) => {
    let obj = {
      id: Button.id,
      name: Button.label,
      position: 'Block Edito Long'
    };
    useGTM(obj, eventName);
  };

  return Title && Text && Image ? (
    <div className={styles.wrapper}>
      <div className={styles.boxButton}>
        <div className={styles.blocText}>
          <h2 className={styles.title}>{Title}</h2>
          <Mardown options={{ forceInline: false }}>{Text}</Mardown>
         { Button && <a href={Button.link} className={styles.link} ref={trackCTA} onClick={(e) => {
           e.preventDefault()
              trackGTM(Button, TrackEvent.PromotionClick);
            }}>
            {Button.label}
          </a>}
          {isVisible ? trackGTM(Button, TrackEvent.PromotionPrint) : null}
        </div>
      </div>
      {Image && <img src={Image.url} className={styles.visual} alt={Image.alt} />}
    </div>
  ) : null;
};

// BlockEditoLong.propTypes = {

// };

export default BlockEditoLong;
la version mobile
import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
import styles from './BlockEditoLong.mobile.module.scss';
import Mardown from 'markdown-to-jsx';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';

const BlockEditoLong = ({ Title, Text, Image, Button }) => {
  const trackCTA = useRef();
  const isVisible = useOnScreen(trackCTA);

  const trackGTM = (Button, eventName) => {
    let obj = {
      id: Button.id,
      name: Button.label,
      position: 'Block Edito Long'
    };
    useGTM(obj, eventName);
  };

  return Title && Text && Image ? (
    <div className={styles.wrapper}>
      <div className={styles.boxButton}>
        <div className={styles.blocText}>
          <h2 className={styles.title}>{Title}</h2>
          <Mardown options={{ forceInline: false }}>{Text}</Mardown>
        </div>
        {Button && (
          <a
            href={Button.link}
            className={styles.link}
            ref={trackCTA}
            onClick={(e) => {
              e.preventDefault();
              trackGTM(Button, TrackEvent.PromotionClick);
            }}>
            {Button.label}
          </a>
        )}
        {isVisible ? trackGTM(Button, TrackEvent.PromotionPrint) : null}
      </div>
      {Image && <img src={Image.url} className={styles.visual} alt={Image.alt} />}
    </div>
  ) : null;
};

// BlockEditoLong.propTypes = {

// };

export default BlockEditoLong;
