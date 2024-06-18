import ButtonLine from "../../../components/Button-outline-2";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";

export default function CommentCard({ title, detail, brand_name }) {
  const { authUser, isAuthUserLoading } = useAuth();

  if (isAuthUserLoading) return <Spinner />;
  return (
    <>
      <div className="w-[300px] h-[245] rounded-lg p-4 bg-white mt-10">
        <div className="text-amber-500 text-base font-bold">{title}</div>
        <div className="text-stone-800 text-sm mt-2">{detail}</div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-amber-500 font-bold text-base mt-2">
              {brand_name}
            </div>
          </div>
          {authUser.isAdmin ? (
            <div className="visible">
              <ButtonLine
                bg="tranparent"
                color="yellow"
                outline="yellow"
                wiidth="20"
                hover="1"
              >
                ลบ
              </ButtonLine>
            </div>
          ) : (
            <div className="invisible">
              <ButtonLine
                bg="tranparent"
                color="yellow"
                outline="yellow"
                wiidth="20"
                hover="1"
              >
                ลบ
              </ButtonLine>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
