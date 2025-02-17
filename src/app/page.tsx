'use client'
import CardNav from "@/components/navCardComponent/CardNav";

import Carousel from "@/components/sliderComponent/Carousel";

import Image from "next/image";
import Cart from "@/components/cartComponent/Cart";
import { useState } from "react";
export default function Home() {
   const [cartVisible, setCartVisible] = useState(false);
   const toggleCartVisibility = () => {
      setCartVisible(!cartVisible);
   };

   return (
      <div>
         <div className="nav">
            <nav className='navBar'>
               <div className="container">
                  <div className="uniClubContent">
                     <Image src={'/humburgerMenu.svg'} width={30} height={30} alt='menu nav humburger' />
                     <span>Departamentos</span>

                  </div>
                  <div >
                     <div className="dot">
                        |
                     </div>
                  </div>
                  <div className='descountNav'>
                     <h5>Descontos Cliente Unimed Natal</h5>
                  </div>
                  <div className='uniclubNav'>Venda no Uniclube</div>
               </div>
            </nav>
         </div>
         <Carousel />
         <CardNav />

         <div className="productCard">
            <div className="containerCard">
               <div className="headerContainer">
                  <h2>Descontos cliente</h2>
                  <span>Unimed Natal</span>
               </div>
               <div className="cards">
                  <div className="card">
                     <Image src={'/p1.svg'} width={207} height={192} alt='SmartPhone imagem' />

                  </div>
                  <div className="card">
                     <div className="cardHeader">
                        <Image src={'/smart-watch.jpg'} width={207} height={92} alt='SmartPhone imagem' />
                     </div>
                     <div className="cardBody">

                        <h6>Relogio smart</h6>
                        <del> de 42,90</del>
                        <p>R$ 32,90</p>
                        <span>10% OFF</span>
                     </div>
                     <div className="cardFooter">
                        <p>3x 12,39 sem juross...</p>
                        <a href="./">Vendido por
                           <span>senhora catarina</span>
                        </a>
                     </div>
                  </div>
                  <div className="card">
                     <div className="cardHeader">
                        <Image src={'/controle-sem-fio.jpg'} width={207} height={192} alt='SmartPhone imagem' />
                     </div>
                     <div className="cardBody">
                        <h6>Relogio smart</h6>
                        <div>
                           <del> de 42,90</del>
                           <span>10% OFF</span>
                        </div>
                        <p>R$ 32,90</p>

                     </div>
                     <div className="cardFooter">
                        <p>3x 12,39 sem juross...</p>
                        <a href="./">Vendido por
                           <span>senhora catarina</span>
                        </a>
                     </div>
                  </div>
                  <div className="card">
                     <div className="cardHeader">
                        <Image src={'/cadeira-gamer.jpg'} width={207} height={192} alt='SmartPhone imagem' />
                     </div>


                     <div className="cardBody">

                        <h6>Relogio smart</h6>
                        <div>
                           <del> de 42,90</del>
                           <span>10% OFF</span>
                        </div>
                        <p>R$ 32,90</p>

                     </div>
                     <div className="cardFooter">
                        <p>3x 12,39 sem juross...</p>
                        <a href="./">Vendido por
                           <span>senhora catarina</span>
                        </a>
                     </div>

                  </div>
                  <div className="card">
                     <div className="cardHeader">
                        <Image src={'/smart-watch.jpg'} width={207} height={92} alt='SmartPhone imagem' />
                     </div>

                     <div className="cardBody">
                        <h6>Relogio smart</h6>
                        <div>
                           <del> de 42,90</del>
                           <span>10% OFF</span>
                        </div>
                        <p>R$ 32,90</p>

                     </div>
                     <div className="cardFooter">
                        <p>3x 12,39 sem juross...</p>
                        <a href="./">Vendido por
                           <span>senhora catarina</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <button onClick={toggleCartVisibility} className='cartIcon'>
            <Image src={'/cartIcon.svg'} width={50} height={50} alt='Icone para abrir o menu'></Image>
         </button>
         {cartVisible && (
            <div>
               <Cart />
               <button className='closeBtn' onClick={() => setCartVisible(false)}>x</button>
            </div>
         )}
      </div>

   )
}