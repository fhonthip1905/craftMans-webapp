import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import SuccessIcon from "../../../components/icons/Success";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import productApi from "../../../apis/product-api";

export default function ProductDetailCard() {
  const { authUser, isAuthUserLoading } = useAuth();
  const navigate = useNavigate();

  const { name } = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState({});

  // console.log("product ------", product);
  const handleClick = () => {
    navigate("/location");
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchProductByName = async () => {
      const res = await productApi.getProductDetail(name);
      setProduct(res.data.product);
    };
    fetchProductByName();
  }, []);

  if (isAuthUserLoading) return <Spinner />;

  return (
    <>
      <div className="flex justify-center items-center w-[1000px]">
        <div className="text-amber-500 font-extrabold text-4xl mb-10">
          {name}
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div className="mr-10">
          <img
            className="rounded-lg max-h-[460px]"
            src="../src/assets/beer-detail-01.jpeg"
            alt=""
          />
        </div>
        <div className="w-[468px] min-h-[370px] bg-white p-5 text-stone-800 rounded-lg">
          <div>
            <div className="font-bold">ราคาต่อขวด :</div>
            {isEditing ? (
              <input
                type="text"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            ) : (
              <div className="flex">
                <div className="font-bold text-xl mr-4">{product.price}</div>
                <div className="font-bold text-xl">บาท</div>
              </div>
            )}
          </div>
          <div>
            {isEditing ? (
              <textarea
                name="description"
                value={product?.description}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded mt-2 mb-2"
              />
            ) : (
              <p className="text-sm mt-2 mb-2">{product?.description}</p>
            )}
          </div>
          <div className="flex items-center mb-3">
            <div className="mr-3">
              <SuccessIcon />
            </div>
            <div className="font-bold">ประเภท :</div>
            {isEditing ? (
              <input
                type="text"
                name="type"
                value={product?.type}
                onChange={handleInputChange}
                className="ml-4 w-full border border-gray-300 p-2 rounded"
              />
            ) : (
              <div className="ml-4">{product?.type}</div>
            )}
          </div>

          <div className="flex items-center mb-3">
            <div className="mr-3">
              <SuccessIcon />
            </div>
            <div className="font-bold">สี :</div>
            {isEditing ? (
              <input
                type="text"
                name="color"
                value={product?.color}
                onChange={handleInputChange}
                className="ml-4 w-full border border-gray-300 p-2 rounded"
              />
            ) : (
              <div className="ml-4">{product?.color}</div>
            )}
          </div>

          <div className="flex items-center mb-3">
            <div className="mr-3">
              <SuccessIcon />
            </div>
            <div className="font-bold">รสชาติ :</div>
            {isEditing ? (
              <input
                type="text"
                name="taste"
                value={product?.taste}
                onChange={handleInputChange}
                className="ml-4 w-full border border-gray-300 p-2 rounded"
              />
            ) : (
              <div className="ml-4">{product?.taste}</div>
            )}
          </div>

          <div className="flex items-center mb-3">
            <div className="mr-3">
              <SuccessIcon />
            </div>
            <div className="font-bold">ปริมาณเอลกอฮอล์ :</div>
            {isEditing ? (
              <input
                type="text"
                name="alcohol"
                value={product?.alcohol}
                onChange={handleInputChange}
                className="ml-4 w-full border border-gray-300 p-2 rounded"
              />
            ) : (
              <div className="ml-4">{product?.alcohol}</div>
            )}
          </div>

          <div className="flex items-center mb-3">
            <div className="mr-3">
              <SuccessIcon />
            </div>
            <div className="font-bold">แหล่งผลิต :</div>
            {isEditing ? (
              <input
                type="text"
                name="sources"
                value={product?.sources}
                onChange={handleInputChange}
                className="ml-4 w-full border border-gray-300 p-2 rounded"
              />
            ) : (
              <div className="ml-4">{product?.sources}</div>
            )}
          </div>

          <div className="flex items-center mb-8">
            <div className="mr-3">
              <SuccessIcon />
            </div>
            <div className="font-bold">ร้านที่จำหน่าย :</div>
            {isEditing ? (
              <input
                type="text"
                name="shop"
                value={product?.shop}
                onChange={handleInputChange}
                className="ml-4 w-full border border-gray-300 p-2 rounded"
              />
            ) : (
              <div className="ml-4">{product?.shop}</div>
            )}
          </div>

          <Button
            bg="yellow"
            color="white"
            rounded="lg"
            wiidth="full"
            outline=""
            text="bold"
            hover="1"
            ease="in"
            duration="300"
            transition="color"
            p="2"
            onClick={handleClick}
          >
            ตำแหน่งที่ตั้งแหล่งจำหน่าย
          </Button>

          {authUser.isAdmin ? (
            <div className="mt-4">
              <Button
                bg="yellow"
                color="white"
                rounded="lg"
                wiidth="full"
                outline=""
                text="bold"
                hover="1"
                ease="in"
                duration="300"
                transition="color"
                p="2"
                onClick={handleEditClick}
              >
                {isEditing ? "บันทึกข้อมูล" : "แก้ไขข้อมูล"}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
