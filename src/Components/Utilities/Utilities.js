import React from 'react';
import './Utilities.css';

export function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />;
}

export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  );
}
