import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import brandgroup  from "@/../public/brandgroup.svg"

export default function Footer() {
  const footerLinks = [
    {
      title: "Saúde e Bem-estar",
      links: [
        "Beleza",
        "Cuidados Pessoais",
        "Produtos Regionais",
        "Bebês",
        "Ver mais"
      ]
    },
    {
      title: "Estilo",
      links: [
        "Vestuário",
        "Calçados",
        "Bijuterias e Acessórios",
        "Música e Hobbies",
        "Ver mais"
      ]
    },
    {
      title: "Eletro",
      links: [
        "Eletrodomésticos",
        "Celulares, Tablets e Acessórios",
        "Câmeras e Acessórios",
        "Casa, Jardim e Limpeza",
        "Ver mais"
      ]
    },
    {
      title: "Mais Departamentos",
      links: [
        "Petshop",
        "Brinquedos e Jogos",
        "Livros",
        "Móveis e Decoração",
        "Alimentos e Bebidas",
        "Construção",
        "Agro e Indústria",
        "Ver todos os departamentos"
      ]
    },
    {
      title: "Outras Categorias",
      links: [
        "Tincidunt",
        "Ipsum Lorem",
        "Tempor",
        "Sit Amet",
        "Consequat",
        "Pellentesque"
      ]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {footerLinks.map((section, index) => (
          <div key={index} className={styles.footerColumn}>
            <h5 className={styles.sectionTitle}>
              <Link href="/" className={styles.footerLink}>
                {section.title}
              </Link>
            </h5>
            <ul className={styles.linkList}>
              {section.links.map((linkText, linkIndex) => (
                <li key={linkIndex} className={styles.footerItem}>
                  <Link href="/" className={styles.footerLink}>
                    {linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.sliderFooter}>
           <div className={styles.sliderItens}>
               <Image alt="" layout="intrinsic" src={brandgroup} />
               <Image alt="" layout="intrinsic"   src={brandgroup}/>
               <Image alt="" layout="intrinsic"   src={brandgroup}/>
               <Image alt="" layout="intrinsic"   src={brandgroup}/>
               <Image alt="" layout="intrinsic"   src={brandgroup}/>
               <Image alt="" layout="intrinsic"   src={brandgroup}/>
               <Image alt="" layout="intrinsic"   src={brandgroup}/>
               <Image alt="" layout="intrinsic"   src={brandgroup}/>
               <Image alt="" layout="intrinsic"   src={brandgroup}/>
           </div>
      </div>
    </footer>
  );
}