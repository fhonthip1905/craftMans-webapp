export default function ShopImageContainer({ image }) {
  return (
    <div className="flex justify-center mt-[40px]">
      <div className="flex flex-wrap justify-center items-center ">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
