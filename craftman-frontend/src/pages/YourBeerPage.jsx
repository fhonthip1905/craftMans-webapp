
import ProductCard from "../features/authencation/components/ProductCard";


const products = [
  {
    id: 1,
    image: "../src/assets/beer-bottle/sierra-nevada-bottle.png",
    name: "Lager",
  },
  {
    id: 2,
    image: "../src/assets/beer-bottle/sierra-nevada-bottle.png",
    name: "Pilsner",
  },
  {
    id: 3,
    image: "../src/assets/beer-bottle/sierra-nevada-bottle.png",
    name: "Hefeweizen",
  },

  {
    id: 4,
    image: "../src/assets/beer-bottle/sierra-nevada-bottle.png",
    name: "Stout Beer",
  },
];

export default function YourBeerPage() {

  return (
    <>
      <div className=" flex flex-col justify-center items-center min-h-[600px] ">
        <div className="flex justify-center ">
          <div className="text-amber-500 font-extrabold text-3xl">
            คราฟเบียร์
          </div>
          <div className="font-extrabold text-3xl mb-8">ที่ใช่สำหรับคุณ</div>
        </div>
        <div className="flex">
          <div className="text-md font-bold mb-10 mr-2">สีทอง </div>
          <div className="text-md font-bold mb-10 mr-2">หอมผลไม้</div>
        </div>

        <div
          className="flex flex-wrap justify-center items-center w-[1000px] gap-[50px] mt-12"
          role="button"
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
