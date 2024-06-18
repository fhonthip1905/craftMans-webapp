export default function NewsCard({ image, title, date }) {
  return (
    <div className="w-[272px]">
      <div>
        <img
          src={image}
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className=" text-sm mt-3">{date}</div>
      <div
        role="button"
        className="text-white text-xl font-bold hover:text-amber-500"
      >
        {title}
      </div>
      <div role="button" className="text-amber-500 text-sm hover:text-white">
        Read more
      </div>
    </div>
  );
}
