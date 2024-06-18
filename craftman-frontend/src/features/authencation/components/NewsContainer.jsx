import NewsCard from "./NewsCard";

export default function NewsContainer() {
    const news = [
        {
            image : "../src/assets/news/why-craft-beer-different-from-commercial-beer-02-2.jpg",
            date : "24-05-2024",
            title: "แล้วคราฟต์เบียร์ ต่างจาก เบียร์เชิงพานิชย์ยังไง ?",
        },
        {
            image : "../src/assets/news/why-craft-beer-different-from-commercial-beer-02-2.jpg",
            date : "24-05-2024",
            title: "แล้วคราฟต์เบียร์ ต่างจาก เบียร์เชิงพานิชย์ยังไง ?",
        },
        {
            image : "../src/assets/news/why-craft-beer-different-from-commercial-beer-02-2.jpg",
            date : "24-05-2024",
            title: "แล้วคราฟต์เบียร์ ต่างจาก เบียร์เชิงพานิชย์ยังไง ?",
        }
        
    ]
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="flex justify-center mt-16">
        <div className="text-amber-500 font-extrabold text-3xl">บทความ</div>
        <div className="font-extrabold text-3xl mb-8">และข่าวสาร</div>
      </div>
      <div className="flex flex-wrap justify-center items-center w-[1000px] gap-[50px]">
        {news.map((news, index) => (
          <NewsCard
          key={index}
          image={news.image}
          date={news.date}
          title={news.title}
          />
        ))}
      </div>
    </div>
  );
}
