import React, { useState, useCallback, memo } from 'react';

import data from '../mock/survey.json';
import Conversation from './Conversation';
import Notification from './Notification';
import { ISurvey, ISurveyAnswer, EAnswerType } from '../models/survey';

const Survey = () => {
  const [answersList, setAnswersList] = useState<ISurveyAnswer[]>([]);
  const [answersCount, setAnswersCount] = useState(0);

  const accept = useCallback((question: string) => {
    setAnswersList([...answersList, {question, type: EAnswerType.success}]);
    setAnswersCount(answersCount + 1);
  }, [answersList, answersCount]);
  const decline = useCallback((question: string) => {
    setAnswersList([...answersList, {question, type: EAnswerType.error}]);
  }, [answersList, answersCount]);

  return (
      <div className='survey'>
        <div className="survey-questions">
          <h3>Do you know:</h3>
          {data && data.map((item: ISurvey) => <Conversation key={item.question} question={item.question} answer={item.answer} accept={accept} decline={decline} />)}
        </div>
        {answersList.length > 0 && <div className="survey-answers">
          <h3>Answers<span className='survey-counter'><span className='right'>: {answersCount}</span> of {data.length}</span></h3>
          {answersList.map((item: ISurveyAnswer) => <Notification key={item.question} type={item.type} children={<span>{item.question}</span>} />)}
        </div>}
      </div>
  );
}

export default memo(Survey);
