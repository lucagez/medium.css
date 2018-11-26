import React from 'react';

import style from './typo.module.css';
export default (props) => {
  return (
    <div className={`${style.typo}`}>
      {props.children}
    </div>
  )
}