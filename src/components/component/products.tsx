import React, { useState } from 'react' 
import { Card, CardContent } from "@/components/ui/card"
import { Button } from '../ui/button';

const Products = () => { 

  const [showMoreCards, setShowMoreCards] = useState(false); 

  const toggleShowMoreCards = () => {
    setShowMoreCards(!showMoreCards)
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
    <Card>
      <img
        src="/apple.jpg"
        alt="Product 1"
        width={600}
        height={400}
        className="rounded-t-lg w-full object-cover aspect-[3/2]"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Organic Apples</h3>
        <p className="text-muted-foreground text-sm">Fresh and juicy apples.</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-semibold">MRP: ₹99</span>
            <span className="text-muted-foreground line-through ml-2">₹109</span>
            <span className="text-primary font-semibold ml-2">10% OFF</span>
          </div>
          {/* <Button size="sm">Add to Cart</Button> */}
        </div>
      </CardContent>
    </Card>
    <Card>
      <img
        src="/barocoli.jpg"
        alt="Product 2"
        width={600}
        height={400}
        className="rounded-t-lg w-full object-cover aspect-[3/2]"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Fresh Broccoli</h3>
        <p className="text-muted-foreground text-sm">Nutrient-rich broccoli.</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-semibold">MRP: ₹79</span>
            <span className="text-muted-foreground line-through ml-2">₹89</span>
            <span className="text-primary font-semibold ml-2">10% OFF</span>
          </div>
          {/* <Button size="sm">Add to Cart</Button> */}
        </div>
      </CardContent>
    </Card>
    <Card>
      <img
        src="/carrots.jpg"
        alt="Product 3"
        width={600}
        height={400}
        className="rounded-t-lg w-full object-cover aspect-[3/2]"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Organic Carrots</h3>
        <p className="text-muted-foreground text-sm">Crunchy and sweet carrots.</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-semibold">MRP: ₹59</span>
            <span className="text-muted-foreground line-through ml-2">₹69</span>
            <span className="text-primary font-semibold ml-2">10% OFF</span>
          </div>
          {/* <Button size="sm">Add to Cart</Button> */}
        </div>
      </CardContent>
    </Card>
    <Card>
      <img
        src="/Strawberries.jpg"
        alt="Product 4"
        width={600}
        height={400}
        className="rounded-t-lg w-full object-cover aspect-[3/2]"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Fresh Strawberries</h3>
        <p className="text-muted-foreground text-sm">Sweet and juicy strawberries.</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-semibold">MRP: ₹149</span>
            <span className="text-muted-foreground line-through ml-2">₹159</span>
            <span className="text-primary font-semibold ml-2">10% OFF</span>
          </div>
          {/* <Button size="sm">Add to Cart</Button> */}
        </div>
      </CardContent>
    </Card>
    <Card>
      <img
        src="/Strawberries.jpg"
        alt="Product 5"
        width={600}
        height={400}
        className="rounded-t-lg w-full object-cover aspect-[3/2]"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Organic Tomatoes</h3>
        <p className="text-muted-foreground text-sm">Juicy and flavorful tomatoes.</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-semibold">MRP: ₹79</span>
            <span className="text-muted-foreground line-through ml-2">₹89</span>
            <span className="text-primary font-semibold ml-2">10% OFF</span>
          </div>
          {/* <Button size="sm">Add to Cart</Button> */}
        </div>
      </CardContent>
    </Card>
    <Card>
      <img
        src="/apple.jpg"
        alt="Product 6"
        width={600}
        height={400}
        className="rounded-t-lg w-full object-cover aspect-[3/2]"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Organic Spinach</h3>
        <p className="text-muted-foreground text-sm">Nutrient-packed spinach.</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-semibold">MRP: ₹69</span>
            <span className="text-muted-foreground line-through ml-2">₹79</span>
            <span className="text-primary font-semibold ml-2">10% OFF</span>
          </div>
          {/* <Button size="sm">Add to Cart</Button> */}
        </div>
      </CardContent>
    </Card>
    <Card>
      <img
        src="/barocoli.jpg"
        alt="Product 7"
        width={600}
        height={400}
        className="rounded-t-lg w-full object-cover aspect-[3/2]"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Fresh Blueberries</h3>
        <p className="text-muted-foreground text-sm">Plump and juicy blueberries.</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-semibold">MRP: ₹129</span>
            <span className="text-muted-foreground line-through ml-2">₹139</span>
            <span className="text-primary font-semibold ml-2">10% OFF</span>
          </div>
          {/* <Button size="sm">Add to Cart</Button> */}
        </div>
      </CardContent>
    </Card>
    <Card>
      <img
        src="/carrots.jpg"
        alt="Product 8"
        width={600}
        height={400}
        className="rounded-t-lg w-full object-cover aspect-[3/2]"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Organic Kale</h3>
        <p className="text-muted-foreground text-sm">Nutrient-dense kale.</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-semibold">MRP: ₹49</span>
            <span className="text-muted-foreground line-through ml-2">₹59</span>
            <span className="text-primary font-semibold ml-2">10% OFF</span>
          </div>
          {/* <Button size="sm">Add to Cart</Button> */}
        </div>
      </CardContent>
    </Card>
    {showMoreCards && (
      <>
        <Card>
          <img
            src="/apple.jpg"
            alt="Product 6"
            width={600}
            height={400}
            className="rounded-t-lg w-full object-cover aspect-[3/2]"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Organic Spinach</h3>
            <p className="text-muted-foreground text-sm">Nutrient-packed spinach.</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <span className="font-semibold">MRP: ₹69</span>
                <span className="text-muted-foreground line-through ml-2">₹79</span>
                <span className="text-primary font-semibold ml-2">10% OFF</span>
              </div>
              {/* <Button size="sm">Add to Cart</Button> */}
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src="/barocoli.jpg"
            alt="Product 7"
            width={600}
            height={400}
            className="rounded-t-lg w-full object-cover aspect-[3/2]"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Fresh Blueberries</h3>
            <p className="text-muted-foreground text-sm">Plump and juicy blueberries.</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <span className="font-semibold">MRP: ₹129</span>
                <span className="text-muted-foreground line-through ml-2">₹139</span>
                <span className="text-primary font-semibold ml-2">10% OFF</span>
              </div>
              {/* <Button size="sm">Add to Cart</Button> */}
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src="/carrots.jpg"
            alt="Product 8"
            width={600}
            height={400}
            className="rounded-t-lg w-full object-cover aspect-[3/2]"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Organic Kale</h3>
            <p className="text-muted-foreground text-sm">Nutrient-dense kale.</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <span className="font-semibold">MRP: ₹49</span>
                <span className="text-muted-foreground line-through ml-2">₹59</span>
                <span className="text-primary font-semibold ml-2">10% OFF</span>
              </div>
              {/* <Button size="sm">Add to Cart</Button> */}
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src="/Strawberries.jpg"
            alt="Product 4"
            width={600}
            height={400}
            className="rounded-t-lg w-full object-cover aspect-[3/2]"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Fresh Strawberries</h3>
            <p className="text-muted-foreground text-sm">Sweet and juicy strawberries.</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <span className="font-semibold">MRP: ₹149</span>
                <span className="text-muted-foreground line-through ml-2">₹159</span>
                <span className="text-primary font-semibold ml-2">10% OFF</span>
              </div>
              {/* <Button size="sm">Add to Cart</Button> */}
            </div>
          </CardContent>
        </Card>
      </>
    )}
    {!showMoreCards && (
      <Button variant="outline" size="sm" className="col-span-full" onClick={toggleShowMoreCards}>
        Show More Products
      </Button>
    )}
  </div>
  )
}

export default Products