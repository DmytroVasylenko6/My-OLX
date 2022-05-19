import React from 'react';

// Image card hover
import img1 from '../../img/product-like.svg';
import img2 from '../../img/product-size.svg';

// Image product: on sale, various
import img3 from '../../img/product-image-1.svg';
import img18 from '../../img/product-image-2.jpg';
import img4 from '../../img/product-image-3.svg';
import img5 from '../../img/product-image-4.svg';

// Image product: rest and sport
import img6 from '../../img/product-image-5.svg';
import img7 from '../../img/product-image-6.svg';
import img8 from '../../img/product-image-7.svg';
import img9 from '../../img/product-image-8.svg';

// Image product: give for free
import img10 from '../../img/product-image-9.svg';
import img11 from '../../img/product-image-10.svg';
import img12 from '../../img/product-image-11.svg';
import img13 from '../../img/product-image-12.svg';

// Image product: business and service
import img14 from '../../img/product-image-13.svg';
import img15 from '../../img/product-image-14.svg';
import img16 from '../../img/product-image-15.svg';
import img17 from '../../img/product-image-16.svg';

export default function Main() {
	return <main>
				
				{/* ===== Part: on sale, various ===== */}
				<div className='sliders-all-width'>
					<div className='sliders'>
						<div className='left-part'>
							<div className="left-arrow"></div>
							<p className='category-produkt'>РОЗПРОДАЖ<span className='sale-word'>РІЗНЕ</span></p>
							<p className='watch-everything'>Дивитися всі</p>
						</div>
						<div className="right-arrow"></div>	
					</div>
				</div>
				<div className='main-content-all-width'>
					<div className='main-content'>
						<div className='product'>
							<div className='product-card'>
								{/* <div className='product-image'> */}
								<img className='product-image' src={img3} alt="" />
								{/* </div> */}
								<div className='product-name-price'>
									<p className='product-name'>Майка жіноча чорна</p>
									<p className='product-price-on-sale'>
										<span className='product-old-price'>200 грн.</span> 100 грн.
									</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img18} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Футболка спортивна</p>
									<p className='product-price-on-sale'>
										<span className='product-old-price'>300 грн.</span> 200 грн.
									</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								{/* <div className='product-image'> */}
								<img className='product-image' src={img4} alt="" />
								{/* </div> */}
								<div className='product-name-price'>
									<p className='product-name'>Автобус</p>
									<p className='product-price-on-sale'>
										<span className='product-old-price'>150 000 грн.</span> 130 000 грн.
									</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img5} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Футболка чоловіча</p>
									<p className='product-price-on-sale'>
										<span className='product-old-price'>200 грн.</span> 100 грн.
									</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* ===== Part: rest and sport ===== */}
				<div className='sliders-all-width'>
					<div className='sliders'>
						<div className='left-part'>
							<div className="left-arrow"></div>
							<p className='category-produkt'>ВІДПОЧИНОК І СПОРТ</p>
							<p className='watch-everything'>Дивитися всі</p>
						</div>
						<div className="right-arrow"></div>	
					</div>
				</div>
				<div className='main-content-all-width'>
					<div className='main-content'>
						<div className='product'>
							<div className='product-card'>
								<img className='product-image' src={img6} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Куртка жіноча</p>
									<p className='product-price'>2 300 грн.</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img7} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Куртка на блискавці</p>
									<p className='product-price'>5 000 грн.</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img8} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Шкарпетки зимові (три пари)</p>
									<p className='product-price'>180 грн.</p>	
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img9} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Куртка чоловіча</p>
									<p className='product-price'>2 000 грн.</p>	
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ===== Part: give for free ===== */}
				<div className='sliders-all-width'>
					<div className='sliders'>
						<div className='left-part'>
							<div className="left-arrow"></div>
							<p className='category-produkt'>ВІДДАМ БЕЗКОШТОВНО</p>
							<p className='watch-everything'>Дивитися всі</p>
						</div>
						<div className="right-arrow"></div>	
					</div>
				</div>
				<div className='main-content-all-width'>
					<div className='main-content'>
						<div className='product'>
							<div className='product-card'>
								<img className='product-image' src={img10} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Навушники Sony</p>
									<p className='product-price'>0 грн.</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img11} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Цуценя, вік 1,5 місяці</p>
									<p className='product-price'>0 грн.</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img12} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Рослина (Монстера)</p>
									<p className='product-price'>0 грн.</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img13} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Міні джембе</p>
									<p className='product-price'>0 грн.</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ===== Part: business and service ===== */}
				<div className='sliders-all-width'>
					<div className='sliders'>
						<div className='left-part'>
							<div className="left-arrow"></div>
							<p className='category-produkt'>БІЗНЕС ТА ПОСЛУГИ</p>
							<p className='watch-everything'>Дивитися всі</p>
						</div>
						<div className="right-arrow"></div>	
					</div>
				</div>
				<div className='main-content-all-width'>
					<div className='main-content'>
						<div className='product'>
							<div className='product-card'>
								<img className='product-image' src={img14} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Організація дитячих свят</p>
									<p className='product-price'>від 1 500 грн.</p>
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img15} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Розпис фасадів</p>
									<p className='product-price'>від 5 000 грн.</p>									
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img16} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Курси малювання на каві</p>
									<p className='product-price'>500 грн.</p>									
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
							<div className='product-card'>
								<img className='product-image' src={img17} alt="" />
								<div className='product-name-price'>
									<p className='product-name'>Пончики на замовлення</p>
									<p className='product-price'>від 100 грн.</p>								
								</div>
								<div className='product-card-hover'>
									<img className='product-like' src={img1} alt="" />
									<img className='product-size' src={img2} alt="" />								
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='pages-all-width'>
					<div className='pages'>
						<div className="page-1">1</div>
						<div className="page-2">2</div>
						<div className="page-3">3</div>	
					</div>
				</div>
         	</main>;
}
