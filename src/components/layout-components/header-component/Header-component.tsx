'use client';
import Image from "next/image";
import styles from './Header.module.css';
import { useState,useEffect } from 'react';
import Link from "next/link";
import SearchBar from "@/components/serachBar/Search-bar-component";
import { CiSearch } from "react-icons/ci";
import gpsIcon from "@/../public/gps.svg";
import login from "@/../public/login.svg";
import Cart from "@/components/cartComponent/Cart";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1020);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

   
  

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logoContainer}>
                    <Image 
                        src="/brand.svg" 
                        alt="Logo Unimed" 
                        fill
                        priority
                        className={styles.logoImage}
                        sizes="(max-width: 768px) 50vw, 220px"
                        
                    />
                </div>
              
                <CiSearch 
                    className={styles.searchIcon} 
                    onClick={() => setShowSearch(!showSearch)}
                />

                <button 
                    className={`
                        ${styles.menuButton} 
                        ${isMenuOpen ? styles.activeBtn : ''}
                    `}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menu"
                >
                    <span className={styles.menuIcon}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <Link href="/" >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/produtos" >
                                Produtos
                            </Link>
                        </li>
                        <li>
                            <Link href="/contato" >
                                Contato
                            </Link>
                        </li>
                        <li>
                            <Link href="/sobre" >
                                Sobre
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <div className={styles.localizationContainer}>
                        <Link href={'./cep'}>
                            <Image src={gpsIcon} width={36} height={36} alt="GPS Icon" />
                            <div>
                                <span className="bold">Onde</span>
                                <p>você está ?</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.localizationContainer}>
                    <Link href={'./login'}>
                        <Image src={login} width={36} height={36} alt="Login Icon" />
                        <div>
                            <span className="bold">Login</span>
                            <p>Entrar</p>
                        </div>
                    </Link>
                </div>
            </div>
           
            {(showSearch || !isMobile) && (
                <div className={styles.searchContainer}>
                    <SearchBar />
                </div>
            )}
           
        </header>
    );
}