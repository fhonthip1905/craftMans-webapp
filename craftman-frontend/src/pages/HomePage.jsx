import BrandContainer from "../features/authencation/components/BrandContainer";
import HeroContainer from "../features/authencation/components/HeroContainer";
import NewsContainer from "../features/authencation/components/NewsContainer";
import ProductContainer from "../features/authencation/components/ProductContainer";

export default function HomePage() {
  
    return (
      <div className="max-w-[72rem] mx-auto py-8 px-4">
       <HeroContainer />
       <ProductContainer/>
       <BrandContainer />
       <NewsContainer />
      </div>
    );
  }