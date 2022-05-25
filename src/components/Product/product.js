import React from 'react';
import img1 from '../../img/close-registration-icon.svg';
import img2 from '../../img/like-product.svg';
import img3 from '../../img/share-product.svg';

export default function Product() {
   return	<div className="product-block">
				<div className='product-opasity-all-width'></div>
				<div className="product-opasity">
					<div className="product-window">
						<input className='close-product-btn' type='image' src={img1}/>
						<div className="product-window-image">
							<div className="main-product-image"></div>
							<div className="bottom-product-images">
								<div className="bottom-product-image"></div>
								<div className="bottom-product-image"></div>
								<div className="bottom-product-image"></div>
								<div className="bottom-product-image"></div>
								<div className="bottom-product-image"></div>
							</div>
						</div>
						<div className="product-window-info">
							<h2 className='product-name-header'>Футболка спортивна</h2>
							<p className='product-code'>Код товару<span className='product-code-section'>105-C</span></p>
							<p className='price-product'>200.00 грн</p>
							<div className="seller-info">
								<p>ІНФОРМАЦІЯ ПРО ПРОДАВЦЯ</p>
							</div>
							<div className="like-share-block">
								<div className="like-block">
									<p>В обране</p>
									<img className='like-block-image' src={img2} alt="" />
								</div>
								<div className="share-block">
									<p>Поділитися</p>
									<img className='share-block-image' src={img3} alt="" />
								</div>
							</div>
							<div className='description-product'>
								<p>Опис:</p>
								<p>Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Officia ex corporis,
									perferendis nemo quibusdam ab voluptate
									suscipit laboriosam, ipsum minima eaque
									nobis debitis cumque quis? Lorem ipsum 
									dolor sit amet consectetur, adipisicing 
									elit. Officia ex corporis, perferendis
									nemo quibusdam ab voluptate uscipit 
									laboriosam, ipsum minima eaque nobis 
									debitis cumque quis? 	
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>	
       
}
