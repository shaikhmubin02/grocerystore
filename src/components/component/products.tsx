import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '../ui/button';

interface Product {
  image: string;
  alt: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
}

const Products: React.FC = () => { 

  const [showMoreCards, setShowMoreCards] = useState(false); 

  const toggleShowMoreCards = () => {
    setShowMoreCards(!showMoreCards);
  }

  const calculateDiscountPercentage = (originalPrice: number, discountedPrice: number): string => {
    return ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(0);
  }

  const products: Product[] = [
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
        image: "/apple.jpg",
        alt: "Product 9",
        name: "Organic Spinach",
        description: "Nutrient-packed spinach.",
        originalPrice: 79,
        discountedPrice: 69,
      },
      {
        image: "/barocoli.jpg",
        alt: "Product 10",
        name: "Fresh Blueberries",
        description: "Plump and juicy blueberries.",
        originalPrice: 139,
        discountedPrice: 129,
      },
      {
        image: "/carrots.jpg",
        alt: "Product 11",
        name: "Organic Kale",
        description: "Nutrient-dense kale.",
        originalPrice: 59,
        discountedPrice: 49,
      },
      {
        image: "/Strawberries.jpg",
        alt: "Product 12",
        name: "Fresh Strawberries",
        description: "Sweet and juicy strawberries.",
        originalPrice: 159,
        discountedPrice: 149,
      },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {products.slice(0, showMoreCards ? products.length : 8).map((product, index) => (
        <Card key={index}>
          <img
            src={product.image}
            alt={product.alt}
            width={600}
            height={400}
            className="rounded-t-lg w-full object-cover aspect-[3/2]"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-muted-foreground text-sm">{product.description}</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <span className="font-semibold">MRP: ₹{product.discountedPrice}</span>
                <span className="text-muted-foreground line-through ml-2">₹{product.originalPrice}</span>
                <span className="text-primary font-semibold ml-2">
                  {calculateDiscountPercentage(product.originalPrice, product.discountedPrice)}% OFF
                </span>
              </div>
              {/* <Button size="sm">Add to Cart </Button> */}
            </div>
          </CardContent>
        </Card>
      ))}
      {!showMoreCards && (
        <Button variant="outline" size="sm" className="col-span-full" onClick={toggleShowMoreCards}>
          Show More Products
        </Button>
      )}
    </div>
  );
}

export default Products;
