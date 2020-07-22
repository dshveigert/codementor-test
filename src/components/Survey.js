import React, { useState } from 'react';

import data from '../mock/survey.json';
import Conversation from './Conversation';
import Notification from './Notification';

const Survey = () => {
  const [answersList, setAnswersList] = useState([]);
  const [answersCount, setAnswersCount] = useState(0);

  const accept = (q) => {
    setAnswersList([...answersList, {q, type: 'success'}]);
    setAnswersCount(answersCount + 1);
  }
  const decline = (q) => {
    setAnswersList([...answersList, {q, type: 'error'}]);
  }

  return (
      <div className='survey'>
        <div className="survey-questions">
          <h3>Do you know:</h3>
          {data && data.map(item => <Conversation key={item.q} question={item.q} answer={item.a} accept={accept} decline={decline} />)}
        </div>
        {answersList.length > 0 && <div className="survey-answers">
          <h3>Answers<span className='survey-counter'><span className='right'>: {answersCount}</span> of {data.length}</span></h3>
          {answersList && answersList.map(item => <Notification key={item.q} type={item.type} children={<span>{item.q}</span>} />)}
        </div>}

      </div>
  );
}

export default Survey;
