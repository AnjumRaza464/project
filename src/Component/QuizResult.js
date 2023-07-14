import React from 'react'

function QuizResult(props) {
  return (
    <>
    
   
      
   
    <div className='show-score'>
   
    <div className="spinner-grow " role="status">
  <span className="visually-hidden">Loading...</span>
</div>  Your Score : {props.score}<br />
<div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
</div>  Total Score : {props.totalscore}<br /><br/>
      
     <div className="modal-footer ">
     
        <button type="button"  onClick={props.tryAgain} className="btn btn-primary m-auto ">Try Again</button>
      </div>
    </div>
    
    
    
    </>
    
  )
}

export default QuizResult
