import ButtonLine from "../../../components/Button-outline-2";
import ModalComponent from "../../../components/Modal";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";
import CreateProductForm from "./CreateProductForm";
import ProductCard from "./ProductCard";

export default function ProductContainer() {
  const { authUser, isAuthUserLoading } = useAuth();

  const products = [
    {
      image: "../src/assets/beer-bottle/stone_ipa.png",
      name: "Lager",
      description: "สายนุ่มละมุน",
    },
    {
      image: "../src/assets/beer-bottle/pilsner.png",
      name: "Pilsner",
      description: "สายบางเบา",
    },
    {
      image: "../src/assets/beer-bottle/fullmoon.png",
      name: "Wheat",
      description: "สายกลิ่นเริส",
    },
    {
      image: "../src/assets/beer-bottle/avalanche.png",
      name: "Porter",
      description: "สายดื่มง่าย",
    },
    {
      image: "../src/assets/beer-bottle/cheerday.png",
      name: "Pale Ale",
      description: "สายหอมหวาน",
    },
    {
      image: "../src/assets/beer-bottle/sierra-nevada-bottle.png",
      name: "IPA",
      description: "สายเข้ม",
    },
    {
      image: "../src/assets/beer-bottle/cnx.png",
      name: "SourAle",
      description: "สายหนักแน่น",
    },
    {
      image: "../src/assets/beer-bottle/guinness.png",
      name: "Stout Beer",
      description: "สายดำ",
    },
  ];

  if (isAuthUserLoading) return <Spinner />;

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="flex justify-center gap-4">
        <div className="text-amber-500 font-extrabold text-4xl mb-10">8</div>
        <div className="font-extrabold text-3xl mb-8">
          ประเภทคราฟต์เบียร์ที่ติดท็อปฮิต
        </div>
      </div>
      <div className="flex justify-end w-full items-start mt-[-80px]">
        {authUser && authUser.isAdmin ? (
          <div className="mt-4 visible">
            <ModalComponent title="เพิ่มสินค้า">
              <CreateProductForm />
            </ModalComponent>
          </div>
        ) : (
          <div className="mb-t invisible">
            <ButtonLine
              bg="transparent"
              color="yellow"
              outline="yellow"
              width="50"
              hover="1"
              p="1"
            >
              เพิ่มสินค้า
            </ButtonLine>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center items-center w-[1000px] gap-[50px] mt-[40px]">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            description={product.description}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
