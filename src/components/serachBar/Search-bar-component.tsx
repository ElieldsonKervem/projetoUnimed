'use client';
//import { CiSearch } from 'react-icons/ci';
import styles from './searchbar.module.css';
import { useState } from 'react';
import products from '@/data/products';
import SearchResult from '@/components/searchResult/SearchResult'; // Importe o componente SearchResult
import { FormEvent } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  // Add other properties as needed
}

export default function SearchBar() {
  const [querySearch, setQuerySearch] = useState('');
  const [searchResult, setSearchResult] = useState<Product[]>([]);

  const handleWithSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleWithSearchQuery();
  };

  const handleWithSearchQuery = () => {
    // Filtra os produtos com base na consulta de busca
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(querySearch.toLowerCase())
    );
    setSearchResult(filteredProducts);
  };

  return (
    <div className={styles.searchDiv}>
      <form className={styles.formSearch} onSubmit={handleWithSubmit}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Buscar produtos"
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
        />
        <button
          type='submit'
          className={styles.searchButton}
          aria-label="Pesquisar"
        >

        </button>
      </form>

      <SearchResult results={searchResult} />
    </div>
  );
}
