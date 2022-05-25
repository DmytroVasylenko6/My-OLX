import React from 'react';
import img1 from '../../img/close-registration-icon.svg';
import img2 from '../../img/category-arrow.svg';

export default function Add() {
   return	<div className="add-block">
				<div className='add-opasity-all-width'></div>
				<div className="add-opasity">
					<div className="add-window">
						<input className='close-add-btn' type='image' src={img1}/>
						<h2 className='add-ads-text'>Додати оголошення</h2>
						<div className="fields-with-names">
							<div className="names">
								<h3>Назва товару</h3>
								<h3>Фото</h3>
								<h3>Опис товару</h3>
								<h3>Категорія товару</h3>
								<h3>Ціна</h3>
								<h3>Телефон</h3>
							</div>
							<form className="fields-for-input" action="#">
								<label className='fields'>
									<input className="field" type="text"/>
								</label>
								<div className="places-for-images">
									<div className='ad-image'>+</div>
									<div className='ad-image'></div>
									<div className='ad-image'></div>
									<div className='ad-image'></div>
									<div className='ad-image'></div>
								</div>
								<label className='fields'>
									<textarea className="field" type="text"/>
									<div className="field-menu-arrow">
										<input className="field-menu" type="text"/>
										<img className='field-menu-icon' src={img2} alt="" />
									</div>
									<input className="field" type="text" placeholder="0,00 грн."/>
									<input className="field" type="text" placeholder="+38 (0--) --- -- --"/>
								</label>
								<button className='add-button'>
									<p>ДОДАТИ</p>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>	
}
