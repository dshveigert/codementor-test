import React, { useState, memo }  from 'react';
import PropTypes from 'prop-types';

import Notification from './Notification';

const Conversation = (props) => {
  const { question, answer, accept, decline } = props;
  const [ yes, setYes ] = useState(null);
  const settingYes = () => {
    setYes(true);
    accept(question);
  }

  const [ no, setNo ] = useState(null);
  const settingNo = () => {
    setNo(true);
    decline(question);
  }

  const [ showAnswer, setShowAnswer ] = useState(null);

  let type = yes ? 'success' : no ? 'error' : 'info';

  return (
      <div className='conversation'>
        <Notification type={type}>
          <p>{question}</p>
          {showAnswer && <p className='conversation-answer'>"{answer}"</p>}
          <div className="conversation-buttons">
            {no ? <button className='ignorance' disabled={showAnswer} onClick={() => setShowAnswer(true)}>Show Answer</button>
                : <button className='decline' disabled={yes || no} onClick={() => settingNo()}>No</button>}
            <button className='accept' disabled={yes || no} onClick={() => settingYes()}>Yes</button>
          </div>

        </Notification>
      </div>
  );

}

Conversation.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  accept: PropTypes.func.isRequired,
  decline: PropTypes.func.isRequired,
}

export default memo(Conversation);
