import { useNavigate } from "react-router-dom";
export default function ProductCard({ image, name, description, product }) {
  // console.log("id :", id)

  const navgate = useNavigate();
  const handleClickProduct = () => {
    navgate(`/${product.name}`);
  };
  console.log(product);
  return (
    <div className="flex flex-col justify-center items-center w-[200px] mb-4">
      <div
        role="button"
        className="w-[90px] h-[260px] "
        onClick={handleClickProduct}
      >
        <img
          src={image}
          alt={name}
          className="h-[240px] w-[160px] transform transition-transform duration-300 ease-in-out hover:scale-160"
        />
      </div>
      <div className="font-bold mt-1 text-amber-500 text-2xl">{name}</div>
      <div className="text-base">{description}</div>
    </div>
  );
}
