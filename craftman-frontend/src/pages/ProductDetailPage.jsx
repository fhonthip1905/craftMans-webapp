import CommentContainer from "../features/authencation/components/CommentContainer";
import ProductDetailCard from "../features/authencation/components/ProductDetailCard";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { Id } = useParams();
  console.log("id:", Id);

  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <ProductDetailCard id={Id} />
      <CommentContainer id={Id} />
    </div>
  );
}
