import React from 'react'
import me from '../compoent/me.jpg'

export default function Main(props) {
  return (
    
   
    <>
    
    <div className="row">
        <div className="colm-1">
            <div className="user-info">
                <div className="user">
                <i className="fa-regular fa-user"></i>
                </div>
                <h1 className='title'>
                    Hi, I'am
                    <div>Kundan</div>
                </h1>
                <p className='decs'>Web designer and developer </p>
            
            <div className="info">
        <i className="fa-regular fa-envelope"></i>
        <span>
            kundangupta@gamil.com
        </span>
        </div>
        <div className="info">
        <i className="fa-solid fa-location-dot"></i>
        <span>
            Ranchi ,Jharkhand
        </span>
        </div>
        </div>
        </div>
       <div className="colm-2">
            <img src={me}/>
           
        </div>

    </div>
    </>
  )
}

