// import React from 'react';
import ButtonLine from "../../../components/Button-outline-2";
import { useNavigate } from "react-router-dom";

const beerTypes = [
  "IPA",
  "Stout Beer",
  "Imperial IPA",
  "Lager",
  "Pilsner",
  "Citrus",
  "Hefeweizen",
  "Pale Ale",
];
const beerFlavors = [
  "ขม",
  "หวาน",
  "นุ่ม",
  "เปรี้ยว",
  "หอมดอกไม้",
  "หอมผลไม้",
  "เครื่องเทศ",
  "หอมกาแฟ",
];
const beerColors = ["สีทอง", "สีดำ", "สีเหลือง", "สีน้ำตาล"];
const beerOrigins = ["ไทย", "อเมริกา", "ไอร์แลนด์", "เบลเยียม", "รัฐเช็ก"];

const Checkbox = ({ label }) => (
  <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem] mr-8">
    <input
      className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-amber-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
      type="checkbox"
      value=""
      id={label}
    />
    <label
      className="inline-block ps-[0.15rem] hover:cursor-pointer"
      htmlFor={label}
    >
      {label}
    </label>
  </div>
);

export default function ProductForm() {
  const navigate = useNavigate();

  const handleClickSearch = () => {
    navigate("/product/yourbeer");
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mx-auto w-[700px] ">
          <div className="flex justify-center">
            <div className="text-amber-500 font-extrabold text-3xl mb-8">
              ค้นหา
            </div>
            <div className="font-extrabold text-3xl mb-[80px]">
              เบียร์ที่ชอบ
            </div>
          </div>
          <div className="flex justify-between">
            <div className="block">
              <div className="text-amber-500 font-extrabold mb-4 mr-[40px]">
                ประเภท
              </div>
              {beerTypes.map((type) => (
                <Checkbox key={type} label={type} />
              ))}
            </div>

            <div className="block">
              <div className="text-amber-500 font-extrabold mb-4 mr-[40px]">
                รสชาติ
              </div>
              {beerFlavors.map((flavor) => (
                <Checkbox key={flavor} label={flavor} />
              ))}
            </div>

            <div className="block">
              <div className="text-amber-500 font-extrabold mb-4 mr-[40px]">
                สี
              </div>
              {beerColors.map((color) => (
                <Checkbox key={color} label={color} />
              ))}
            </div>

            <div className="block">
              <div className="text-amber-500 font-extrabold mb-4 mr-[20px]">
                แหล่งผลิต
              </div>
              {beerOrigins.map((origin) => (
                <Checkbox key={origin} label={origin} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <ButtonLine
          bg="tranparent"
          color="yellow"
          outline="yellow"
          wiidth="20"
          hover="1"
          onClick={handleClickSearch}
        >
          ค้นหา
        </ButtonLine>
      </div>
    </>
  );
}
