import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000
};

const modal = ({ show, closed }) => {
  return(
    <Transition in={show} timeout={animationTiming} mountOnEnter unmountOnExit>
      {state => {
        const cssClasses = ['Modal'];
        if(state === 'entering') cssClasses.push('ModalOpen');
        else if(state === 'exiting') cssClasses.push('ModalClosed');
        return(
          <div className={cssClasses.join(' ')}>
              <h1>A Modal</h1>
              <button className="Button" onClick={closed}>Dismiss</button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;