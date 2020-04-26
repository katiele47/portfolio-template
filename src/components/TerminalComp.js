import React, {useState} from 'react';
import Terminal from 'terminal-in-react';
const TerminalComp = ({setState}) => {
 
    return (<div>
        <Terminal 
          commands={{'portfolio-start': setState}}
        />
      </div>)
  }


export default TerminalComp;