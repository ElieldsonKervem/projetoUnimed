'use client'
import { useState } from "react";
import Image from "next/image";
import CardNav from "@/components/navCardComponent/CardNav";
import Carousel from "@/components/sliderComponent/Carousel";
import Cart from "@/components/cartComponent/Cart";

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
                     <Image src={'/humburgerMenu.svg'} width={30} height={30} alt='Menu hambúrguer' />
                     <span>Departamentos</span>
                  </div>
                  <div className="dot">|</div>
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
                     <Image src={'/p1.svg'} width={207} height={192} alt='Imagem de um Smartphone' />
                  </div>
                  <div className="card">
                     <div className="cardHeader">
                        <Image src={'/smart-watch.jpg'} width={207} height={92} alt='Imagem de um Smartwatch' />
                     </div>
                     <div className="cardBody">
                        <h6>Relógio Smart</h6>
                        <del>de R$ 42,90</del>
                        <p>R$ 32,90</p>
                        <span>10% OFF</span>
                     </div>
                     <div className="cardFooter">
                        <p>3x de R$ 12,39 sem juros</p>
                        <a href="./">Vendido por <span>Senhora Catarina</span></a>
                     </div>
                  </div>
                  <div className="card">
                     <div className="cardHeader">
                        <Image src={'/controle-sem-fio.jpg'} width={207} height={192} alt='Imagem de um Controle sem fio' />
                     </div>
                     <div className="cardBody">
                        <h6>Controle sem fio</h6>
                        <div>
                           <del>de R$ 42,90</del>
                           <span>10% OFF</span>
                        </div>
                        <p>R$ 32,90</p>
                     </div>
                     <div className="cardFooter">
                        <p>3x de R$ 12,39 sem juros</p>
                        <a href="./">Vendido por <span>Senhora Catarina</span></a>
                     </div>
                  </div>
                  <div className="card">
                     <div className="cardHeader">
                        <Image src={'/cadeira-gamer.jpg'} width={207} height={192} alt='Imagem de uma Cadeira Gamer' />
                     </div>
                     <div className="cardBody">
                        <h6>Cadeira Gamer</h6>
                        <div>
                           <del>de R$ 42,90</del>
                           <span>10% OFF</span>
                        </div>
                        <p>R$ 32,90</p>
                     </div>
                     <div className="cardFooter">
                        <p>3x de R$ 12,39 sem juros</p>
                        <a href="./">Vendido por <span>Senhora Catarina</span></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <button onClick={toggleCartVisibility} className='cartIcon'>
            <Image src={'/cartIcon.svg'} width={50} height={50} alt='Ícone para abrir o carrinho' />
         </button>
         {cartVisible && (
            <div>
               <Cart />
               <button className='closeBtn' onClick={() => setCartVisible(false)}>x</button>
            </div>
         )}
      </div>
   );
}
