import ModalComponent from "../../../components/Modal";
import useAuth from "../../../hooks/useAuth";
import ProductForm from "./ProductForm";

export default function HeroFirst() {
  const { authUser } = useAuth();

  console.log(authUser);

  return (
    <>
      <div className="w-[468px]">
        <div className="text-amber-500 font-extrabold text-5xl mb-8">
          Find your beer Find a craft beer that speaks to you.
        </div>
        <p className="text-base mb-8">
          ด้วยความหลากหลายทางด้านรสชาติ สีสันความแรงของแอลกอฮอล์ของ
          คราฟเบียร์ในแต่ละประเภท มาสนุกกับการค้นหาคราฟเบียร์ที่ใช่และตรงกับ
          ความชอบสำหรับคุณไปกับ craftMANs
        </p>
        {authUser ? (
          <div className="visible">
            <ModalComponent title={"ค้นหาเบียร์ที่ใช่สำหรับคุณ"}>
              <ProductForm />
            </ModalComponent>
          </div>
        ) : (
          <div className="invisible">
            <ModalComponent title={"ค้นหาเบียร์ที่ใช่สำหรับคุณ"}>
              <ProductForm />
            </ModalComponent>
          </div>
        )}
      </div>
      <div className="w-[542px] mt-4">
        <img
          className="rounded-lg h-[320px]"
          src="../src/assets/beer-12.jpeg"
          alt=""
        />
      </div>
    </>
  );
}
