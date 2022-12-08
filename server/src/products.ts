export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: '1 Spinner',
    price: 5.98,
    description: 'Un buen producto de entretenimiento.',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription: 'Nuestro spinner es divertido y funcional y quizás justo lo que necesitas.'
  },
  {
    id: 2,
    name: '2 Spinner',
    price: 5.95,
    description: 'Un buen producto de entretenimiento.',
    image: 'http://localhost:8080/fidget-2.jpg',
    longDescription: 'Nuestro spinner es divertido y funcional y quizás justo lo que necesitas.'
  },
  {
    id: 3,
    name: '3 Spinner',
    price: 5.90,
    description: 'Un buen producto de entretenimiento.',
    image: 'http://localhost:8080/fidget-3.jpg',
    longDescription: 'Nuestro spinner es divertido y funcional y quizás justo lo que necesitas.'
  },
  {
    id: 4,
    name: '4 Spinner',
    price: 5.00,
    description: 'Un buen producto de entretenimiento.',
    image: 'http://localhost:8080/fidget-4.jpg',
    longDescription: 'Nuestro spinner es divertido y funcional y quizás justo lo que necesitas.'
  },
  {
    id: 5,
    name: '5 Spinner',
    price: 5.50,
    description: 'Un buen producto de entretenimiento.',
    image: 'http://localhost:8080/fidget-5.jpg',
    longDescription: 'Nuestro spinner es divertido y funcional y quizás justo lo que necesitas.'
  },
  {
    id: 6,
    name: '6 Spinner',
    price: 5.70,
    description: 'Un buen producto de entretenimiento.',
    image: 'http://localhost:8080/fidget-6.jpg',
    longDescription: 'Nuestro spinner es divertido y funcional y quizás justo lo que necesitas.'
  }
];

export default products;