import React from 'react';
import img from "../../img/search.svg"


export default function Header() {
   return <header>
         <div className='header-all-width'>     
            <div className='header'>
               <div className="header-search">
                  <img className='search-img' src={img} alt="" />
                  <div>LOGO</div>
               </div>
               <div className='user-profile'>
                  <p className='registration'>РЕЄСТРАЦІЯ/УВІЙТИ</p>
                  <p className='create'>СТВОРИТИ ОГОЛОШЕННЯ</p>
               </div>   
            </div>
         </div>
         <div className='header-menu-all-width'>
            <div className='header-menu'>
               <p className='header-menu-list'>Нерухомість</p>
               <p className='header-menu-list'>Транспорт</p>
               <p className='header-menu-list'>Робота</p>
               <p className='header-menu-list'>Електроніка</p>
               <p className='header-menu-list'>Бізнес та послуги</p>
               <p className='header-menu-list'>Відпочинок і спорт</p>
               <p className='header-menu-list'>Віддам безкоштовно</p>
               <p className='header-menu-list'>Обмін</p>

               <span className='arrow'>&#8634;</span><p className='header-menu-clean'> Очистити фільтри</p>               
            </div>
         </div>
      </header>;
}
