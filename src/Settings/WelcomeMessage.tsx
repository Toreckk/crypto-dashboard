import React from 'react';
import {AppContext} from '../App/AppProvider'

function WelcomeMessage() {
  return (
      <AppContext.Consumer>
        {({firstVisit})=>
            firstVisit ? 
                <h3>
                    Welcome to CryptoDash, please select your favourite coins to begin.
                </h3> : null
        }
      </AppContext.Consumer>
    
  );
}

export default WelcomeMessage;
