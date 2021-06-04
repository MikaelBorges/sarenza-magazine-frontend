import React from 'react';
import styles from './DuoImage.mobile.module.scss';
import Markdown from 'markdown-to-jsx';

const DuoImage = (props) => {
  return (
    <div className={styles.DuoImage}>
        {props.Intro && (
      <Markdown
        options={{
            forceInline: false,
            forceBlock: true,
          overrides: {
            p: { props: { className: styles.Intro } },
            span: { props: { className: styles.Intro } },
            h1: { props: { className: styles.Intro } },
            h2: { props: { className: styles.Intro } },
            h3: { props: { className: styles.Intro } },
            h4: { props: { className: styles.Intro } },
            h5: { props: { className: styles.Intro } },
            h6: { props: { className: styles.Intro } }
          }
        }}>
        {props.Intro}
      </Markdown>
      )}
      <div className={styles.container}>
          {props.BlockLeft && (
        <div className={styles.BlockLeft}>
          <img src={props.BlockLeft.image} alt="image block gauche" className={styles.imageLeft} />
          <h2 className={styles.title}>{props.BlockLeft.Title}</h2>
          <Markdown
            options={{
                forceInline: false,
                forceBlock: true,
                overrides: {
                    p: { props: { className: styles.Text } },
                    span: { props: { className: styles.Text } },
                    h1: { props: { className: styles.Text } },
                    h2: { props: { className: styles.Text } },
                    h3: { props: { className: styles.Text } },
                    h4: { props: { className: styles.Text } },
                    h5: { props: { className: styles.Text } },
                    h6: { props: { className: styles.Text } }
                  }
            }}>
            {props.BlockLeft.Text}
          </Markdown>
        </div>
        )}
        {props.BlockRight && (
        <div className={styles.BlockRight}>
          <img
            src={props.BlockRight.image}
            alt="image block gauche"
            className={styles.imageRight}
          />
          <h2 className={styles.title}>{props.BlockRight.Title}</h2>
          <Markdown
            options={{
              forceInline: false,
              forceBlock: true,
              overrides: {
                p: { props: { className: styles.Text }},
                span: { props: { className: styles.Text }},
                h1: { props: { className: styles.Text }},
                h2: { props: { className: styles.Text }},
                h3: { props: { className: styles.Text }},
                h4: { props: { className: styles.Text }},
                h5: { props: { className: styles.Text }},
                h6: { props: { className: styles.Text }}
              }
            }}>
            {props.BlockRight.Text}
          </Markdown>
        </div>
        )}
      </div>
    </div>
  );
};

export default DuoImage;
