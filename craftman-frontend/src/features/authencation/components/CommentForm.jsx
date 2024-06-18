import { useState } from "react";
import Button from "../../../components/Button";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import axios from "../../../config/axios";
import Spinner from "../../../components/Spinner";

export default function CommentForm({ id }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [loding, setLoding] = useState(false);
  const { authUser } = useAuth();
  // console.log(id);

  const commentData = {
    title: title,
    detail: detail,
    user_id: authUser.id,
    product_id: Number(id),
  };

  const hdClickCreateComment = async () => {
    try {
      setLoding(true);
      await axios.post("/comment", commentData);
      toast.success("แสดงความเห็นของคุณเรียบร้อยค่ะ");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoding(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        {loding && <Spinner tranparent />}
        <div className="mx-auto w-[500px] ">
          <div className="flex justify-center">
            <div className="text-amber-500 font-extrabold text-3xl mb-8 mr-2">
              Share your
            </div>
            <div className="font-extrabold text-3xl mb-[40px]">experience</div>
          </div>
          <div className="mb-10">
            <textarea
              className="block w-full focus:outline-none resize-none rounded-md text-stone-800 p-2 "
              rows={1}
              placeholder="หัวข้อของคุณ"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>

          <div>
            <textarea
              className="block w-full focus:outline-none resize-none rounded-lg text-stone-800 p-4 mb-10"
              rows={5}
              placeholder={`แสดงความคิดเห็นของ, ${authUser?.name}?`}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
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
              onClick={hdClickCreateComment}
            >
              แสดงความคิดเห็น
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
