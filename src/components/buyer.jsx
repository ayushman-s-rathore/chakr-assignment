import React from 'react'
import "./buyer.css"
import pic2 from "../assets/Rectangle3.png";

function buyer() {
  return (
    <div className='buyer'>
       Top buyer
       <div className="profile-image">
        <img src={pic2} alt="" />
       </div>
       <div className="profile-name">
        Maggie Johnson
       </div>
       <div className="profile-work">Oasis Organic</div>
    </div>
  )
}
export default buyer;
