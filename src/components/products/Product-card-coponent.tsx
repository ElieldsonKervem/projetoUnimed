'use client';
import styles from './productCard.module.css'
import Image from 'next/image';
interface ProductCards {
    id: number;
    name: string;
    price: number;
    img: string;
    discount?: number; //opcional o desconto
    quantity: number | null;

}

export default function Product({product}:{product: ProductCards}) {
    const discount = product.discount ? product.price * product.discount : 0;
    return (
        
        <div className={styles.product}>
            <div className={styles.productsContainer} >
            <Image className={styles.productImage} src={'/'+product.img} alt={product.name} 
                width={200}
                height={200}/>
            <h1 className={styles.productName} >{product.name}</h1>
            <p className="norma-price">{product.price}</p>
            {product.discount && <p>{product.discount}</p>}
            <span className="final-price">
                R$ {product.price - discount}
            </span>
            </div>
        </div>
    )
}