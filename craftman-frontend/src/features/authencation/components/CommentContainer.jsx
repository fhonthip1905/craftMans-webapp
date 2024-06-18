import ModalComponent from "../../../components/Modal";
import useAuth from "../../../hooks/useAuth";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import Spinner from "../../../components/Spinner";

export default function CommentContainer({ id }) {

  const { authUser, isAuthUserLoading } = useAuth();

  const details = [
    {
      title: "Transformed my work process",
      detail:
        " Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis.",
      brand_name: "Beer Brand"
    },
    {
      title: "Transformed my work process",
      detail:
        " Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis.",
      brand_name: "Beer Brand"
    },
    {
      title: "Transformed my work process",
      detail:
        " Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis.",
      brand_name: "Beer Brand"
    },
  ];

  if (isAuthUserLoading) return <Spinner />;

  return (
    <div>
      <div className="mt-12 flex flex-col justify-center items-center">
        <div className="flex justify-center ">
          <div className="text-amber-500 font-extrabold text-3xl">
            ความคิดเห็น
          </div>
          <div className="font-extrabold text-3xl">จากผู้มีประสบการณ์</div>
        </div>
        <div className="flex justify-end mt-4 w-[990px]">
          {/* Recheck User Role */}
          {authUser ? (
            <div className="visible">
              <ModalComponent title={"เพิ่มความคิดเห็นของคุณ"} >
                <CommentForm id={id}/>
              </ModalComponent>
            </div>
          ) : (
            <div className="invisible">
              <ModalComponent title={"เพิ่มความคิดเห็นของคุณ"}>
                <CommentForm />
              </ModalComponent>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-center items-center w-[1040px] gap-[50px] mb-10">
          {details.map((details, index) => (
            <CommentCard
              key={index}
              title={details.title}
              detail={details.detail}
              brand_name={details.brand_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
