import React from 'react';
import img1 from '../../img/close-registration-icon.svg';

export default function Exit() {
   return <exit> 
	   		<div className="exit-block">
					<div className='exit-opasity-all-width'></div>
					<div className="exit-opasity">
						<div className="exit-window">
							<input className='close-exit-btn' type='image' src={img1}/>
							<h2 className='exit-question'>Ви дійсно хочете вийти з акаунта?</h2>
							<div>
								<button className='button-exit'>ВИЙТИ</button>
								<button className='button-cancel'>ВІДМІНА</button>
							</div>
						</div>
					</div>
				</div>	
         </exit>;
}
