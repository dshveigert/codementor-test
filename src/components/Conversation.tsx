import React, { useState, memo }  from 'react';

import Notification from './Notification';
import {ISurvey, EAnswerType} from '../models/survey';

interface IConversation extends ISurvey {
  accept: (question: string) => void,
  decline: (question: string) => void,
}

const Conversation = (props: IConversation) => {
  const { question, answer, accept, decline } = props;
  const [ yes, setYes ] = useState(false);
  const settingYes = () => {
    setYes(true);
    accept(question);
  }

  const [ no, setNo ] = useState(false);
  const settingNo = () => {
    setNo(true);
    decline(question);
  }

  const [ showAnswer, setShowAnswer ] = useState(false);

  let type = yes ? EAnswerType.success : no ? EAnswerType.error : EAnswerType.message;

  return (
      <div className='conversation'>
        <Notification type={type}>
          <>
            <p>{question}</p>
            {showAnswer && <p className='conversation-answer'>"{answer}"</p>}
            <div className="conversation-buttons">
              {no ? <button className='ignorance' disabled={showAnswer} onClick={() => setShowAnswer(true)}>Show Answer</button>
                  : <button className='decline' disabled={yes || no} onClick={() => settingNo()}>No</button>}
              <button className='accept' disabled={yes || no} onClick={() => settingYes()}>Yes</button>
            </div>
          </>
        </Notification>
      </div>
  );

}

export default memo(Conversation);
