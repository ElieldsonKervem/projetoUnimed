'use client'

import { useState } from "react";
import styles from './cart.module.css'
import Image from "next/image";
import CepConsult from "../cepApi/CepApi";

export default function Cart(){
    const qtdIntens:number = 0;
    const [visible,setVisible] = useState(false)
    return(
        <div className={styles.cartContainer}>
            <div className={styles.cartHeader}>
                 <div>
                    <img src="./vetorU.svg" alt="vetor u" />
                 </div>
                 <div>
                    <a href="./">
                      <img src="./pagination.svg" alt="" />
                     </a>
                 </div>
                 <div className={styles.closeTag}>
                     <img src="./close.svg" alt="" />
                 </div>
            </div>
            <div className={styles.container}>
                <h2>Carrinho </h2>
                <span>{qtdIntens}</span>
            </div>

            <div className={styles.cartBody}>
               
               <div className={styles.cartBodyProduct}>
                  <div>
                     <Image src='./bag.svg' width={71} height= {71}
                      alt = 'Bolsa'
                     />
                  </div>
                  <div>
                     <p>Bolsa Feminina Sacola Grande Matelassê Preto de telinha</p>
                  </div>
                  <div>
                     <img src="./trash.svg" alt="" />
                  </div>
               </div>

            </div>

            <div className={styles.cartFooter}>
               <div>
                  <img src="./less.svg" alt="" />
                   <span>1</span>
                  <img src="./plus.svg" alt="" />
               </div>
               <div>
                   <del>R$ 200,00</del>
                   <p>R$ 195,00</p>
               </div>
            </div>


           
           


            <div className={styles.cartBody}>
               
               <div className={styles.cartBodyProduct}>
                  <div>
                     <Image src='./toy.svg' width={71} height= {71}
                      alt = 'Bolsa'
                     />
                  </div>
                  <div>
                     <p>Bolsa Feminina Sacola Grande Matelassê Preto de telinha</p>
                  </div>
                  <div>
                     <img src="./trash.svg" alt="" />
                  </div>
               </div>

            </div>

            <div className={styles.cartFooter}>
               <div>
                  <img src="./less.svg" alt="" />
                   <span>2</span>
                  <img src="./plus.svg" alt="" />
               </div>
               <div>
                   <del>R$ 200,00</del>
                   <p>R$ 195,00</p>
               </div>
            </div>



            

         

            <div className={styles.cartBody}>
               
               <div className={styles.cartBodyProduct}>
                  <div>
                     <Image src='./bag.svg' width={71} height= {71}
                      alt = 'Bolsa'
                     />
                  </div>
                  <div>
                     <p>Bolsa Feminina Sacola Grande Matelassê Preto de telinha</p>
                  </div>
                  <div>
                     <img src="./trash.svg" alt="" />
                  </div>
               </div>

            </div>

            <div className={styles.cartFooter}>
               <div>
                  <img src="./less.svg" alt="" />
                   <span>4</span>
                  <img src="./plus.svg" alt="" />
               </div>
               <div>
                   <del>R$ 200,00</del>
                   <p>R$ 195,00</p>
               </div>
            </div> 


         
            

            <div className={styles.cartBody}>
               
               <div className={styles.cartBodyProduct}>
                  <div>
                     <Image src='./bag.svg' width={71} height= {71}
                      alt = 'Bolsa'
                     />
                  </div>
                  <div>
                     <p>Bolsa Feminina Sacola Grande Matelassê Preto de telinha</p>
                  </div>
                  <div>
                     <img src="./trash.svg" alt="" />
                  </div>
               </div>

            </div>

            <div className={styles.cartFooter}>
               <div>
                  <img src="./less.svg" alt="" />
                   <span>1</span>
                  <img src="./plus.svg" alt="" />
               </div>
               <div>
                   <del>R$ 200,00</del>
                   <p>R$ 195,00</p>
               </div>
            </div>


        
      

            <div className={styles.cartBody}>
               
               <div className={styles.cartBodyProduct}>
                  <div>
                     <Image src='./toy.svg' width={71} height= {71}
                      alt = 'Bolsa'
                     />
                  </div>
                  <div>
                     <p>Bolsa Feminina Sacola Grande Matelassê Preto de telinha</p>
                  </div>
                  <div>
                     <img src="./trash.svg" alt="" />
                  </div>
               </div>

            </div>

            <div className={styles.cartFooter}>
               <div>
                  <img src="./less.svg" alt="" />
                   <span>2</span>
                  <img src="./plus.svg" alt="" />
               </div>
               <div>
                   <del>R$ 200,00</del>
                   <p>R$ 195,00</p>
               </div>
            </div>
  
            <div className={styles.cartBody}>
               
               <div className={styles.cartBodyProduct}>
                  <div>
                     <Image src='./bag.svg' width={71} height= {71}
                      alt = 'Bolsa'
                     />
                  </div>
                  <div>
                     <p>Bolsa Feminina Sacola Grande Matelassê Preto de telinha</p>
                  </div>
                  <div>
                     <img src="./trash.svg" alt="" />
                  </div>
               </div>

            </div>

            <div className={styles.cartFooter}>
               <div>
                  <img src="./less.svg" alt="" />
                   <span>4</span>
                  <img src="./plus.svg" alt="" />
               </div>
               <div>
                   <del>R$ 200,00</del>
                   <p>R$ 195,00</p>
               </div>
            </div>
          
          <div className={styles.cartSubmit}>
            <div className={styles.cartSubHeader}>
             
               <div>
                  <img src="./frete.svg" alt=""  onClick={() => setVisible(true)}
                   />
                  <span>Calcule fretes e prazos</span>
                  <div>
                
                   </div>
               </div>
                <div className={`
                ${styles.conditional}
                ${visible ? styles.visible : styles.none}  
                
                `}>
                  <CepConsult className={styles.consult} 
                   close = {()=>{
                     setVisible(false)
                   }}
                  />
                </div>
             
            </div>
           
          </div>
          <button className={styles.btnSubmit}>
                PROSEGUIR 
                 <img src="./btn.svg" alt="" />
            </button>
        </div>   
           
    )
}