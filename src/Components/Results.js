import React from 'react';

const Results =( {score, playAgain}) =>  {
  
    return (
      <div className="score-board">
        <div className="score">
        <h3> you scored {score}/5 correct answers!</h3> 
        <br/>
          <button className="playbtn" onClick ={playAgain}>
          Play Again</button>
          </div>
        
      </div>
  )
}


export default Results;
