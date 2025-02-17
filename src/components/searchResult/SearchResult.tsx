'use client';
import styles from "./searchResult.module.css";
import Image from "next/image";
interface Result {
  id: number;
  img?: string;
  name: string;
  price: number;
}

interface SearchResultProps {
  results: Result[];
}

export default function SearchResult({ results }: SearchResultProps) {
  return (
    <ul className={styles.resultsList}>
      {results.map((result) => (
        <li key={result.id} className={styles.resultItem}>
          <div className={styles.imageContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={result.img ? `/${result.img}` : "/placeholder.jpg"} // ✅ Agora usa "img"
                alt={result.name || "Produto sem nome"}
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className={styles.productImage}
              />


            </div>
          </div>
          <div className={styles.resultInfo}>
            <h3>{result.name}</h3>
            <div className={styles.priceContainer}>
              <span className={styles.finalPrice}>
                Por: R$ {result.price.toFixed(2)}
              </span>
            </div>
            <button className={styles.addToCartButton}>
              Comprar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
