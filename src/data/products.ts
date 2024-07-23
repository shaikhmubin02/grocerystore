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
    image: "/1.jpg",
    alt: "Product 1",
    name: "Tirupati Cotton Seed Oil",
    description: "15 kgs",
    originalPrice: 2114,
    discountedPrice: 1865,
  },
  {
    image: "/2.jpg",
    alt: "Product 2",
    name: "Tirupati Cotton Seed Oil",
    description: "5 Litres",
    originalPrice: 785,
    discountedPrice: 625,
  },
  {
    image: "/3.jpg",
    alt: "Product 3",
    name: "Tirupati Active Corn Oil",
    description: "15 Litres",
    originalPrice: 1929,
    discountedPrice: 1660,
  },
  {
    image: "/4.jpg",
    alt: "Product 4",
    name: "Tirupati Active Corn Oil",
    description: "1 Liters",
    originalPrice: 161,
    discountedPrice: 129,
  },
  {
    image: "/5.jpg",
    alt: "Product 5",
    name: "Fortune Refined Sunflower Oil Tin",
    description: "15 Litres",
    originalPrice: 2075,
    discountedPrice: 1680,
  },
  {
    image: "/6.jpg",
    alt: "Product 6",
    name: "Fortune Sunlite Refined Sunflower Oil",
    description: "15 Litres",
    originalPrice: 2125,
    discountedPrice: 1714,
  },
  {
    image: "/7.jpg",
    alt: "Product 7",
    name: "Fortune Plus Soyabean Oil Tin",
    description: "15 Litres",
    originalPrice: 2245,
    discountedPrice: 1665,
  },
  {
    image: "/8.jpg",
    alt: "Product 8",
    name: "Fortune Sunlite Refined Sunflower Oil",
    description: "1 Litre",
    originalPrice: 145,
    discountedPrice: 119,
  }, 
  {
    image: "/9.jpg",
    alt: "Product 5",
    name: "Gulab Cotton Seed Oil",
    description: "15 kgs",
    originalPrice: 2351,
    discountedPrice: 1785,
  },
  {
    image: "/10.jpg",
    alt: "Product 6",
    name: "Gulab Cotton Seed Oil",
    description: "5 Litres",
    originalPrice: 751,
    discountedPrice: 562,
  },
  {
    image: "/11.jpg",
    alt: "Product 7",
    name: "Gulab Sunflower Oil Tin",
    description: "15 Litres",
    originalPrice: 2151,
    discountedPrice: 1610,
  },
  {
    image: "/12.jpg",
    alt: "Product 8",
    name: "Gulab Sunflower Oil",
    description: "5 Litres",
    originalPrice: 751,
    discountedPrice: 549,
  },
];
