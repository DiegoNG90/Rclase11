import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { useAxios } from "../Hooks/useAxios";
import { iProduct } from "../interfaces/product";

// Interfaz
type ContextType = {
  productsResults: Array<iProduct>;
  loading: boolean;
  searchProducts: (item: string) => void;
};

const contextDefault: ContextType = {
  productsResults: [],
  loading: false,
  searchProducts: () => {},
};

export const ProductContext = createContext<ContextType>(contextDefault);
const { Provider } = ProductContext;
