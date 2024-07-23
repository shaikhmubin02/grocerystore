// src/data/products.ts

export interface Product {
  image: string;
  alt: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
}

export const products: Product[] = [
  {
    image: "/apple.jpg",
    alt: "Product 1",
    name: "Organic Apples",
    description: "Fresh and juicy apples.",
    originalPrice: 109,
    discountedPrice: 99,
  },
  {
    image: "/barocoli.jpg",
    alt: "Product 2",
    name: "Fresh Broccoli",
    description: "Nutrient-rich broccoli.",
    originalPrice: 89,
    discountedPrice: 79,
  },
  {
    image: "/carrots.jpg",
    alt: "Product 3",
    name: "Organic Carrots",
    description: "Crunchy and sweet carrots.",
    originalPrice: 69,
    discountedPrice: 59,
  },
  {
    image: "/Strawberries.jpg",
    alt: "Product 4",
    name: "Fresh Strawberries",
    description: "Sweet and juicy strawberries.",
    originalPrice: 159,
    discountedPrice: 149,
  },
  {
    image: "/Strawberries.jpg",
    alt: "Product 5",
    name: "Organic Tomatoes",
    description: "Juicy and flavorful tomatoes.",
    originalPrice: 89,
    discountedPrice: 79,
  },
  {
    image: "/apple.jpg",
    alt: "Product 6",
    name: "Organic Spinach",
    description: "Nutrient-packed spinach.",
    originalPrice: 79,
    discountedPrice: 69,
  },
  {
    image: "/barocoli.jpg",
    alt: "Product 7",
    name: "Fresh Blueberries",
    description: "Plump and juicy blueberries.",
    originalPrice: 139,
    discountedPrice: 129,
  },
  {
    image: "/carrots.jpg",
    alt: "Product 8",
    name: "Organic Kale",
    description: "Nutrient-dense kale.",
    originalPrice: 59,
    discountedPrice: 49,
  }, 
  {
    image: "/Strawberries.jpg",
    alt: "Product 5",
    name: "Organic Tomatoes",
    description: "Juicy and flavorful tomatoes.",
    originalPrice: 89,
    discountedPrice: 79,
  },
  {
    image: "/apple.jpg",
    alt: "Product 6",
    name: "Organic Spinach",
    description: "Nutrient-packed spinach.",
    originalPrice: 79,
    discountedPrice: 69,
  },
  {
    image: "/barocoli.jpg",
    alt: "Product 7",
    name: "Fresh Blueberries",
    description: "Plump and juicy blueberries.",
    originalPrice: 139,
    discountedPrice: 129,
  },
  {
    image: "/carrots.jpg",
    alt: "Product 8",
    name: "Organic Kale",
    description: "Nutrient-dense kale.",
    originalPrice: 59,
    discountedPrice: 49,
  },
];
