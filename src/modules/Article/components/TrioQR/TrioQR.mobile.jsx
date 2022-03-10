import React from 'react';

import styles from './TrioQR.mobile.module.scss';

const TrioQR = ({ Title, QuestionsReponses }) => {
  return (
    <div className={styles.container}>
      {Title && <h3>{Title}</h3>}
      <div className={styles.listContainer}>
        <ul className={styles.listQR}>
          {QuestionsReponses.map((QuestionReponse) => {
            return (
              <li
                className={styles.blocQR}
                style={{ backgroundColor: QuestionReponse.Background }}
                key={QuestionReponse.id}>
                <div className={styles.question}>{QuestionReponse.Question}</div>
                <div className={styles.reponse}>{QuestionReponse.Reponse}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TrioQR;
