import React from 'react';
import img1 from '../../img/close-window.svg';
import img2 from '../../img/search-field-icon.svg';

export default function Search() {
   return	<div className="search">
				<div className='search-opasity-all-width'></div>
				<div className="search-opasity">
					<div className="search-window">
						<input className='close-search-btn' type='image' src={img1}/>
						<form action="#">
							<label>
								<input className="search-field" type="text" placeholder="ПОШУК"/>
							</label>
							<input className='search-icon' type='image' src={img2}/>
						</form>
					</div>
				</div>
			</div>	
}