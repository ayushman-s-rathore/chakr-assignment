import React from "react";
import "./lostdeals.css"

function lostdeals(){
  return(
    <div className="lostdeals">
    Lost deals
    <div className="numbers">
        4%
     </div>
     <div className="inc">
        You closed 96 out of 100 deals
     </div>
     <div className="report">
        All deals
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
        <path d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829" stroke="#734A00" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
     </div>

    </div>
  )
}
export default lostdeals