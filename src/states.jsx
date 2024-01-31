import React from 'react'
import "./states.css"

function states  ()  {
  return (
    <div className='states'>
        Top states
        <div className="NY">
            <div>NY</div>
            <div className='sales'>120K</div>
        </div>
        <div className="MA">
            <div>MA</div>
            <div className='sales'>80K</div>
        </div>
        <div className="NH">
            <div>NH</div>
            <div className='sales'>70k</div>
        </div>
        <div className="OR">
            <div>OR</div>
            <div className='sales'>50K</div>
        </div>
    </div>
  )
}
export default states
