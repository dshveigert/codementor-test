import React, { memo, PropsWithChildren } from 'react';
import { EAnswerType } from '../models/survey';

const Notification: React.FC<PropsWithChildren<{type: EAnswerType}>> = (props) => {
  if (!props.children) return <React.Fragment />;
  let classes = 'info';
  if (props.type) {
    switch (props.type) {
      case 'message':
        classes = 'info';
        break;
      case 'error':
        classes = 'urgent';
        break;
      case 'success':
        classes = 'success';
        break;
      default:
        classes = 'info';
    }
  }
  classes = 'alert alert-' + classes;
  return (
      <div className={classes}>
        {props.children}
      </div>
  );
}

export default memo(Notification);
