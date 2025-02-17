interface Product {
  id: string,
  name: string,
  price: number,
  img: string,

}

const products: Product[] = [
  {
    id: "1",
    name: "Smartphone X",
    price: 2999.99,
    img: "smartphone-x.jpg",

  },
  {
    id: "2",
    name: "Notebook Gamer",
    price: 7599.90,
    img: "notebook-gamer.jpg",

  },
  {
    id: "3",
    name: "Fone Bluetooth",
    price: 199.99,
    img: "fone-bluetooth.jpg",

  },
  {
    id: "4",
    name: "Monitor 27' 4K",
    price: 1899.00,
    img: "monitor-4k.jpg",

  },
  {
    id: "5",
    name: "Teclado Mecânico RGB",
    price: 499.99,
    img: "teclado-mecanico.jpg",

  },
  {
    id: "6",
    name: "Mouse Gamer",
    price: 249.99,
    img: "mouse-gamer.jpg",

  },
  {
    id: "7",
    name: "Cadeira Gamer",
    price: 1299.99,
    img: "cadeira-gamer.jpg",

  },
  {
    id: "8",
    name: "Controle sem fio",
    price: 349.90,
    img: "controle-sem-fio.jpg",

  },
  {
    id: "9",
    name: "Caixa de Som Bluetooth",
    price: 399.99,
    img: "caixa-som.jpg",

  }
];

export default products;
