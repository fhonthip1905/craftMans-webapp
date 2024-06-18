import { createContext } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  return (
    <>
      <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
    </>
  );
}
