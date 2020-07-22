import React from 'react';

const Notification = (props) => {
  if (!props.children) return null;
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

export default Notification;
