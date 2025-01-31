"use client";



import { Button } from "@/components/ui/button";
import { ShoppingCart, StarIcon, Trash, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@radix-ui/react-scroll-area";

const CartShop = () => {
  const { cart, removeFromCart } = useCart();



  return (
    <ScrollArea>
      <div className="flex flex-col items-center justify-center gap-2 pb-10">
        {cart.length > 0 ? (
          cart.map((product,i) => (
            <Card key={i} className="w-[310px] flex flex-col ">
              <CardHeader>
                <CardTitle><img className='  mx-auto object-center object-cover pb-2 h-[20vh] ' src={product.image} alt={product.title} height={100} width={200} /></CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-green-800 line-clamp-1 text-start'>{product.title}</p>

              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <div className="flex flex-col  justify-between gap-2">
                  <div className='text-neutral-700 text-xs '>{product.price}$</div>
                  <div className='text-neutral-700 text-xs flex items-center justify-center gap-1'>{product.rating.rate}/5
                    <StarIcon className="w-4 h-3 " color="yellow" />
                  </div>
                </div>
                <Button onClick={() => removeFromCart(product)}><Trash2 /></Button>
              </CardFooter>
            </Card>
          ))) : (
          <p className="text-center pt-32">Le panier est vide</p>
        )}
      </div>

    </ScrollArea>
  );
};

export default CartShop;
