// src/components/Products.tsx
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '../ui/button';
import { products } from '@/data/products';  // Correct import statement

const Products: React.FC = () => { 

  const [showMoreCards, setShowMoreCards] = useState(false); 

  const toggleShowMoreCards = () => {
    setShowMoreCards(!showMoreCards);
  }

  const calculateDiscountPercentage = (originalPrice: number, discountedPrice: number): string => {
    return ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(0);
  }

  return (
    <div className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
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
              {/* <Button size="sm">Add to Cart</Button> */}
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
