// import ButtonLine from "../../../components/Button-outline-2";
// import Spinner from "../../../components/Spinner";
// import useAuth from "../../../hooks/useAuth";
import BrandCard from "./BrandCard";

export default function BrandContainer() {
  // const { authUser, isAuthUserLoading } = useAuth();
    const brands = [
        {
          image: "../src/assets/brand/triple pearl.jpeg",
          name: "triple pearl"
        },
        {
          image: "../src/assets/brand/sandport.jpeg",
          name: "sandport"
        },
        {
          image: "../src/assets/brand/sierra-nevada.jpeg",
          name: "sierra-nevada"
        },
        {
          image: "../src/assets/brand/mahanakorn.jpeg",
          name: "mahanakorn"
        },
    ]

    // if (isAuthUserLoading) return <Spinner />;

  return (
    <div>
      <div className="mt-14 flex flex-col justify-center items-center gap-[2px]">
        <div className="flex justify-center">
          <div className="text-amber-500 font-extrabold text-3xl">
            แนะนำ
          </div>
          <div className="font-extrabold text-3xl mb-8">
            ยี่ห้อคราฟต์เบียร์ที่ควรลอง
          </div>
        </div>
        {/* <div className="flex justify-end w-full items-start mt-[-80px]">
        {authUser.isAdmin ? (
          <div className="mt-4 visible">
             <ButtonLine
                bg="transparent"
                color="yellow"
                outline="yellow"
                width="50"
                hover="1"
                p="1"
              >
                เพิ่มยี่ห้อเบียร์
              </ButtonLine>
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
                เพิ่มยี่ห้อเบียร์
              </ButtonLine>
          </div>
        )}
      </div> */}
        <div className="flex flex-wrap justify-center items-center w-[1000px] gap-[50px] mt-[50px]">
        {brands.map((brands, index) => (
          <BrandCard
            key={index}
            image={brands.image}
            name={brands.name}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
