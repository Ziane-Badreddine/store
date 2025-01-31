"use client";

import { ProductType } from "@/hooks/useFetch";
import { createContext, useContext, useState } from "react";
import { toast } from "sonner";



// Type du panier
export interface CartContextType {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
}

// Création du contexte du panier
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider du panier
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) => {
    if(!cart.includes(product)){
      setCart((prevCart) => [...prevCart, product]);
      toast.success(`${product.title} in your cart shop`)
    }
  };

  const removeFromCart = (product: ProductType) => {
   
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    toast.warning(`product ${product.title} is deleted`);
    
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};



