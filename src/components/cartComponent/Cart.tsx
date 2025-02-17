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
                    <Image src="/vetorU.svg" alt="vetor u" width={24} height={24} />
                 </div>
                 <div>
                    <a href="./">
                      <Image src="/pagination.svg" alt="pagina" width={24} height={24} />
                     </a>
                 </div>
                 <div className={styles.closeTag}>
                     <Image src="/close.svg" alt="Fechar" width={24} height={24} />
                 </div>
            </div>
            <div className={styles.container}>
                <h2>Carrinho </h2>
                <span>{qtdIntens}</span>
            </div>

            {[1, 2, 4, 1, 2, 4].map((qtd, index) => (
                <div key={index}>
                    <div className={styles.cartBody}>
                        <div className={styles.cartBodyProduct}>
                            <div>
                                <Image src={`/bag.svg`} width={71} height={71} alt="Bolsa" />
                            </div>
                            <div>
                                <p>Bolsa Feminina Sacola Grande Matelassê Preto de telinha</p>
                            </div>
                            <div>
                                <Image src="/trash.svg" alt="Remover" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.cartFooter}>
                        <div>
                            <Image src="/less.svg" alt="Diminuir" width={24} height={24} />
                            <span>{qtd}</span>
                            <Image src="/plus.svg" alt="Aumentar" width={24} height={24} />
                        </div>
                        <div>
                            <del>R$ 200,00</del>
                            <p>R$ 195,00</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className={styles.cartSubmit}>
                <div className={styles.cartSubHeader}>
                    <div>
                        <Image 
                            src="/frete.svg" 
                            alt="Frete"  
                            width={24} 
                            height={24} 
                            onClick={() => setVisible(true)}
                        />
                        <span>Calcule fretes e prazos</span>
                    </div>
                    <div className={`${styles.conditional} ${visible ? styles.visible : styles.none}`}>
                        <CepConsult className={styles.consult} close={() => setVisible(false)} />
                    </div>
                </div>
            </div>
            <button className={styles.btnSubmit}>
                PROSEGUIR 
                <Image src="/btn.svg" alt="Botão" width={24} height={24} />
            </button>
        </div>   
    )
}
