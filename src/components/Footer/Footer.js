import React from 'react';
import img from "../../img/like.svg"

export default function Footer() {
   return   <div className='contacts-all-with'>
               <div className='contacts'>
                  <p><span className='corporate-rights'>&copy;</span> 2022</p>
                  <p className='rights-style'>All Rights Reserved</p>
                  <p>Developed with</p>
                  <img className='img-style' src={img} alt="" />
                  <p>by <span className='goit-style'>GoIT Students</span></p>         
               </div>
            </div>         
}
