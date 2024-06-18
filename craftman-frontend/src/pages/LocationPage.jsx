// import ButtonLine from "../components/Button-outline-2";
// import ModalComponent from "../components/Modal";
// import Spinner from "../components/Spinner";
// import MapForm from "../features/authencation/components/MapForm";
// import ShopImageContainer from "../features/authencation/components/ShopImageContainer";
// import ShopLocationContainer from "../features/authencation/components/ShopLocationContainer";
// import useAuth from "../hooks/useAuth";

// export default function LocationPage() {
//   const lat = 13.7392; // ละติจูดของ The Beer Bridge
//   const lng = 100.5571; // ลองติจูดของ The Beer Bridge
//   const placeName = "The Beer Bridge";
//   const { authUser, isAuthUserLoding } = useAuth();

//   if (isAuthUserLoding) return <Spinner />;

//   const shopImage = [
//     {
//       image: "./src/assets/shop/theBeerBridge/bb-1.png",
//     },
//     {
//       image: "./src/assets/shop/theBeerBridge/bb-2.png",
//     },
//     {
//       image: "./src/assets/shop/theBeerBridge/bb-2.png",
//     },
//     {
//       image: "./src/assets/shop/theBeerBridge/bb-2.png",
//     },
//     {
//       image: "./src/assets/shop/theBeerBridge/bb-3.png",
//     },
//   ];

//   return (
//     <>
//       <div className="flex justify-center">
//         <div className="w-[80%]">
//           <div className="flex items-center justify-center mt-[40px]">
//             <ShopLocationContainer lat={lat} lng={lng} placeName={placeName} />
//           </div>

//           {authUser.isAdmin ? (
//             <div className=" flex justify-end mt-4 visible ">
//               {/* <ButtonLine
//                 bg="tranparent"
//                 color="yellow"
//                 outline="yellow"
//                 wiidth="50"
//                 hover="1"
//                 p="1"
//               >
//                 แก้ไขแผนที่
//               </ButtonLine> */}
//               <ModalComponent title={"แก้ไขแผนที่"}>
//                 <MapForm />
//               </ModalComponent>
//             </div>
//           ) : (
//             <div className="flex justify-end mt-4 invisible ">
//               <ButtonLine
//                 bg="tranparent"
//                 color="yellow"
//                 outline="yellow"
//                 wiidth="50"
//                 hover="1"
//                 p="1"
//               >
//                 แก้ไขแผนที่
//               </ButtonLine>
//             </div>
//           )}

//           <div className="flex justify-center mt-[40px]">
//             <div className="text-amber-500 font-extrabold text-3xl mb-8">
//               บรรยากาศ
//             </div>
//             <div className="font-extrabold text-3xl mb-8">ในร้าน</div>
//           </div>
//           <div className="grid grid-cols-3 gap-4">
//             {shopImage.map((image, index) => (
//               <>
//                 <div className="flex flex-col">
//                   <div key={index} className="w-full h-64 overflow-hidden">
//                     <ShopImageContainer
//                       image={image.image}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   {authUser.isAdmin ? (
//                     <div className="flex justify-end mt-4 visible ">
//                       <ButtonLine
//                         bg="tranparent"
//                         color="yellow"
//                         outline="yellow"
//                         wiidth="20"
//                         hover="1"
//                         p="1"
//                       >
//                         ลบ
//                       </ButtonLine>
//                     </div>
//                   ) : (
//                     <div className="flex justify-end mt-4 invisible ">
//                       <ButtonLine
//                         bg="tranparent"
//                         color="yellow"
//                         outline="yellow"
//                         wiidth="20"
//                         hover="1"
//                         p="1"
//                       >
//                         ลบ
//                       </ButtonLine>
//                     </div>
//                   )}
//                 </div>
//               </>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from "react";
import ButtonLine from "../components/Button-outline-2";
import ModalComponent from "../components/Modal";
import Spinner from "../components/Spinner";
import MapForm from "../features/authencation/components/MapForm";
import ShopImageContainer from "../features/authencation/components/ShopImageContainer";
import ShopLocationContainer from "../features/authencation/components/ShopLocationContainer";
import useAuth from "../hooks/useAuth";
import axios from "../config/axios";

export default function LocationPage() {
  const lat = 13.7392; // ละติจูดของ The Beer Bridge
  const lng = 100.5571; // ลองติจูดของ The Beer Bridge
  const placeName = "The Beer Bridge";
  const { authUser, isAuthUserLoading } = useAuth();
  const [shopImages, setShopImages] = useState([
    {
      image: "./src/assets/shop/theBeerBridge/bb-1.png",
    },
    {
      image: "./src/assets/shop/theBeerBridge/bb-2.png",
    },
    {
      image: "./src/assets/shop/theBeerBridge/bb-2.png",
    },
    {
      image: "./src/assets/shop/theBeerBridge/bb-2.png",
    },
    {
      image: "./src/assets/shop/theBeerBridge/bb-3.png",
    },
  ]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  if (isAuthUserLoading) return <Spinner />;

  const handleDeleteImage = async (index) => {
    try {
      setLoading(true);
      // ส่ง request ไปยัง backend เพื่อทำการลบรูปภาพ
      await axios.delete(`/deleteimage/${index}`);
      // อัพเดต state ของ shopImages หลังจากลบรูปภาพแล้ว
      const updatedImages = shopImages.filter((_, i) => i !== index);
      setShopImages(updatedImages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddImage = () => {
    document.getElementById("fileInput").click();
  };

  const handleSaveImage = async () => {
    try {
      const formData = new FormData();
      if (file) {
        formData.append("image", file);
      }
      setLoading(true);
      // ส่ง request ไปยัง backend เพื่อทำการเพิ่มรูปภาพ
      const response = await axios.post("/addimage", formData);
      // อัพเดต state ของ shopImages หลังจากเพิ่มรูปภาพแล้ว
      setShopImages([...shopImages, { image: response.data.imageUrl }]);
      setFile(null); // ล้างค่า file หลังจากอัพโหลดเสร็จแล้ว
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center">
      {loading && <Spinner tranparent />}
        <div className="w-[80%]">
          <div className="flex items-center justify-center mt-[40px]">
            <ShopLocationContainer lat={lat} lng={lng} placeName={placeName} />
          </div>

          {authUser.isAdmin ? (
            <div className="flex justify-end mt-4 visible">
              <ModalComponent title={"แก้ไขแผนที่"}>
                <MapForm />
              </ModalComponent>
            </div>
          ) : (
            <div className="flex justify-end mt-4 invisible">
              <ButtonLine
                bg="tranparent"
                color="yellow"
                outline="yellow"
                wiidth="50"
                hover="1"
                p="1"
              >
                แก้ไขแผนที่
              </ButtonLine>
            </div>
          )}

          <div className="flex justify-center mt-[40px]">
            <div className="text-amber-500 font-extrabold text-3xl mb-8">
              บรรยากาศ
            </div>
            <div className="font-extrabold text-3xl mb-8">ในร้าน</div>
          </div>

          {authUser.isAdmin && (
            <div className="flex justify-end mb-4">
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <ButtonLine
                bg="tranparent"
                color="yellow"
                outline="yellow"
                wiidth="50"
                hover="1"
                p="1"
                onClick={file ? handleSaveImage : handleAddImage}
              >
                {file ? "บันทึก" : "เพิ่มรูปภาพ"}
              </ButtonLine>
            </div>
          )}

          {file && (
            <div className="flex justify-center mb-4">
              <img
                src={URL.createObjectURL(file)}
                alt="Selected"
                className="object-cover w-full h-full max-w-xs rounded-lg"
              />
            </div>
          )}

          <div className="grid grid-cols-3 gap-4">
            {shopImages.map((image, index) => (
              <div key={index} className="flex flex-col">
                <div className="w-full h-64 overflow-hidden">
                  <ShopImageContainer
                    image={image.image}
                    className="object-cover w-full h-full"
                  />
                </div>
                {authUser.isAdmin ? (
                  <div className="flex justify-end mt-4 visible">
                    <ButtonLine
                      bg="tranparent"
                      color="yellow"
                      outline="yellow"
                      wiidth="20"
                      hover="1"
                      p="1"
                      onClick={() => handleDeleteImage(index)}
                    >
                      ลบ
                    </ButtonLine>
                  </div>
                ) : (
                  <div className="flex justify-end mt-4 invisible">
                    <ButtonLine
                      bg="tranparent"
                      color="yellow"
                      outline="yellow"
                      wiidth="20"
                      hover="1"
                      p="1"
                    >
                      ลบ
                    </ButtonLine>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
