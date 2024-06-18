export default function BrandCard({ name, image }) {
   
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <div className="w-[180px] h-[180px] rounded-full ">
        <img
          src={image}
          alt={name}
          className=" rounded-full transform transition-transform duration-300 ease-in-out hover:scale-130"
        />
      </div>
    </div>
  );
}
