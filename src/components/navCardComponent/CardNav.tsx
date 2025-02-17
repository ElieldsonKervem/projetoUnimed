import styles from './CardNav.module.css';
import Image from 'next/image';

export default function CardNav(){
    return(
        <div className={styles.CardNav}>
            <div className={styles.CardNavContainer}>
               <div className={styles.navCards}>
                  <a href="./">
                     <Image src={"/card1.svg"} width={96} height={96} alt="Card 1"/>
                   </a>
               </div>
               <div className={styles.navCards}>
               <a href="./">
                     <Image src={"/card2.svg"} width={96} height={96} alt="Card 2"/>
                   </a>
               </div>
               <div className={styles.navCards}>
                   <a href="./">
                     <Image src={"/card3.svg"} width={96} height={96} alt="Card 3"/>
                   </a>
               </div>
               <div className={styles.navCards}>
                   <a href="./">
                     <Image src={"/card4.svg"} width={96} height={96} alt="Card 4"/>
                   </a>
               </div>
               <div className={styles.navCards}>
                   <a href="./">
                     <Image src={"/card5.svg"} width={96} height={96} alt="Card 5"/>
                   </a>
               </div>
               <div className={styles.navCards}>
                   <a href="./">
                     <Image src={"/card6.svg"} width={96} height={96} alt="Card 6"/>
                   </a>
               </div>
               <div className={styles.navCards}>
                    <a href="./">
                        <Image src={"/card7.svg"} width={96} height={96} alt="Card 7"/>
                   </a>
               </div>
               <div className={styles.navCards}>
                   <a href="./">
                     <Image src={"/card8.svg"} width={96} height={96} alt="Card 8"/>
                   </a>
               </div>
               <div className={styles.navCards}>
                   <a href="./">
                     <Image src={"/card9.svg"} width={96} height={96} alt="Card 9"/>
                   </a>
               </div>
               <div className={styles.navCards}>
                    <a href="./">
                     <Image src={"/card10.svg"} width={96} height={96} alt="Card 10"/>
                   </a>
               </div>
            </div>
        </div>
    )
}
