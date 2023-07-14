import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <div className="card">
        <h5  className={`card-header bg-${props.mode} text-${props.mode==='light'?'black':'white'} text-center`} style={{fontFamily: 'Cormorant SC', fontSize:'30px'}}>About Us</h5>
        <div className="card-body" style={{backgroundColor: props.mode==='light'?'white':'#010101',color: props.mode==='dark'?'white':'black'}}>
          <h5 className="card-title text-center" style={{fontFamily: 'Cormorant SC', fontSize:'22px',backgroundColor: props.mode==='light'?'white':'#010101',color: props.mode==='dark'?'white':'black'}}>TextTools</h5>
          <p className='card-body'   style={{fontFamily: 'Ibarra Real Nova', fontSize: '18px',backgroundColor: props.mode==='light'?'white':'#010101',color: props.mode==='dark'?'white':'black'}}>
           It is a text tools that can be used to perform various operations on the text.
           Some of which are changing it to uppercase, lowercase, clearnig the text and copying it.
           User can also remove the extra spaces in their text.
           There is also a Text summary which gives the data about no of words ,characters and minutes read for the text.
          </p>
        </div>
      </div>
    </div>
  );
}
