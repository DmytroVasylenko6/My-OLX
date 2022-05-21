import React from 'react';
import img1 from '../../img/close-registration-icon.svg';
import img2 from '../../img/google-icon.png';

export default function Registration() {
   return <registration>
        		<div className="registration-block">
					<div className='registration-opasity-all-width'></div>
					<div className="registration-opasity">
						<div className="registration-window">
						<input className='close-registration-btn' type='image' src={img1}/>
						<div className='autorise-registration-info'>
							<p className='autorise-google-info'>
								Ви можете авторизуватися за допомогою Google Account:
							</p>
							<button className='google-autorise-button' type='button'>
								<img className='google-autorise-button-icon' src={img2} alt="" />
								<p>Google</p>
							</button>
							<p className='registration-google-info'>
								Або зайти за допомогою імейлу і пароля, попередньо зареєструвавшись:
							</p>
						</div>	
						<form action="#">
							<label className='email-password-fields'>
								<input className="email-field" type="text" placeholder="E-mail"/>
								<input className="password-field" type="text" placeholder="Password"/>
							</label>
				   		</form>
						<form className='email-password-buttons' action="">
							<button className='enter-button' type='button'>УВІЙТИ</button>
							<button className='registration-button' type='button'>ЗАРЕЄСТРУВАТИСЬ</button>
						</form>
						</div>
					</div>
				</div>	
     	 </registration>;
}
