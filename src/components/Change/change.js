import React from 'react';
import img1 from '../../img/close-registration-icon.svg';
import img2 from '../../img/category-arrow.svg';
import img3 from '../../img/delete-icon.png';


export default function Change() {
   return <change> 
	   		<div className="change-block">
					<div className='change-opasity-all-width'></div>
					<div className="change-opasity">
						<div className="change-window">
							<input className='close-change-btn' type='image' src={img1}/>
							<h2 className='change-ads-text'>Редагувати оголошення</h2>
							<div className="change-fields-with-names">
								<div className="change-names">
									<h3>Назва товару</h3>
									<h3>Фото</h3>
									<h3>Опис товару</h3>
									<h3>Категорія товару</h3>
									<h3>Ціна</h3>
									<h3>Телефон</h3>
								</div>
								<form className="change-fields-for-input" action="#">
									<label className='change-fields'>
										<input className="change-field" type="text"/>
									</label>
									<div className="change-places-for-images">
										<div className='change-ad-image'>+</div>
										<div className='change-ad-image'></div>
										<div className='change-ad-image'></div>
										<div className='change-ad-image'></div>
										<div className='change-ad-image'></div>
									</div>
									<label className='change-fields'>
										<textarea className="change-field" type="text"/>
										<div className="change-field-menu-arrow">
											<input className="change-field-menu" type="text"/>
											<img className='change-field-menu-icon' src={img2} alt="" />
										</div>
										<input className="change-field" type="text" placeholder="0,00 грн."/>
										<input className="change-field" type="text" placeholder="+38 (0--) --- -- --"/>
									</label>
									<div className="delete-ad-button">
							   			<img className='delete-icon' src={img3} alt="" />
							   			<p className='delete-text'>Видалити  оголошення</p>
									</div>
									<div className="change-buttons">
										<button className='save-button'>
											<p>ЗБЕРЕГТИ</p>
										</button>
										<button className='cancel-button'>
											<p>ВІДМІНА</p>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>	
         </change>;
}
