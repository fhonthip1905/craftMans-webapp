import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ImageIcon } from "../../../components/icons/Image";
import { useRef, useState } from "react";
import Spinner from "../../../components/Spinner";
import axios from "../../../config/axios";
import { toast } from "react-toastify";

export default function CreateProductForm() {
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");
  const [m4, setM4] = useState("");
  const [m5, setM5] = useState("");
  const [m6, setM6] = useState("");
  const [m7, setM7] = useState("");
  const [m8, setM8] = useState("");
  const [m9, setM9] = useState("");

  const handleClickCreateProduct = async () => {
    try {
      const formData = new FormData();
      if (m1) formData.append("name", m1);
      if (m2) formData.append("price", m2);
      if (m3) formData.append("type", m3);
      if (m4) formData.append("color", m4);
      if (m5) formData.append("taste", m5);
      if (m6) formData.append("alcohol", m6);
      if (m7) formData.append("sources", m7);
      if (m8) formData.append("shop_id", m8);
      if (m9) formData.append("brand_id", m9);

      if (file) {
        formData.append("image", file);
      }
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      setLoading(true);
      await axios.post("/product", formData);
      toast.success("Create product successfully");
     
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {loading && <Spinner tranparent />}
        <div className="mx-auto w-[500px]">
          <div className="flex justify-center">
            <div className="text-amber-500 font-extrabold text-3xl mb-8">
              เพิ่ม
            </div>
            <div className="font-extrabold text-3xl mb-[40px]">สินค้าใหม่</div>
          </div>
          <div className="flex flex-col justify-center items-center mb-8">
            <input
              type="file"
              className="hidden"
              ref={fileEl}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            {file ? (
              <div
                role="button"
                onClick={() => fileEl.current?.click()}
                className="flex flex-col items-center justify-center w-[240px] h-[300px] bg-stone-200 rounded-md relative"
              >
                <img
                  className="mx-auto"
                  src={URL.createObjectURL(file)}
                  alt="post"
                />
                <button
                  className="absolute top-1 right-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                    fileEl.current.value = "";
                  }}
                >
                  &#10005;
                </button>
              </div>
            ) : (
              <div
                role="button"
                onClick={() => fileEl.current?.click()}
                className="flex flex-col items-center justify-center w-[240px] h-[300px] bg-stone-200 rounded-md"
              >
                <ImageIcon />
                <span className="text-amber-500">เพิ่มรูปภาพสินค้า</span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="ชื่อสินค้า"
              value={m1}
              onChange={(e) => setM1(e.target.value)}
            />
            <Input
              placeholder="ราคาสินค้า"
              value={m2}
              onChange={(e) => setM2(e.target.value)}
            />
            <Input
              placeholder="ประเภทสินค้า"
              value={m3}
              onChange={(e) => setM3(e.target.value)}
            />
            <Input
              placeholder="สี"
              value={m4}
              onChange={(e) => setM4(e.target.value)}
            />
            <Input
              placeholder="รสชาติ"
              value={m5}
              onChange={(e) => setM5(e.target.value)}
            />
            <Input
              placeholder="ปริมาณเอลกอฮอล์"
              value={m6}
              onChange={(e) => setM6(e.target.value)}
            />
            <Input
              placeholder="แหล่งผลิต"
              value={m7}
              onChange={(e) => setM7(e.target.value)}
            />
            <Input
              placeholder="รหัสร้านจำหน่ายสินค้า"
              value={m8}
              onChange={(e) => setM8(e.target.value)}
            />
            <Input
              placeholder="รหัสของหี่ย้อสินค้า"
              value={m9}
              onChange={(e) => setM9(e.target.value)}
            />
          </div>
          <div className="mt-8">
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
              onClick={handleClickCreateProduct}
            >
              บันทึกข้อมูลสินค้า
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
