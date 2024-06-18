import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export default function ProductAuth() {
  return useContext(ProductContext);
}
