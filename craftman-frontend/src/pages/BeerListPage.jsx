import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import productApi from "../apis/product-api";
import ProductTypeCard from "../features/authencation/components/ProductTypeCard";

export default function BeerListPage() {
  const { beertype } = useParams();

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const res = await productApi.getBeerT(beertype);
        // console.log(res.data.productlist);
        setBeer(res.data.productlist);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBeer();
  }, []);
  return (
    <>
      <div className=" flex flex-col justify-center items-center min-h-[600px] ">
        <div className="flex justify-center ">
          <div className="text-amber-500 font-extrabold text-3xl mt-10">
            ประเภท : {beertype}
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center items-center w-[1000px] gap-[50px] mt-12"
          role="button"
        >
          {beer.map((product, index) => (
            <ProductTypeCard
              key={index}
              image={product.image}
              name={product.name}
              id={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}
