import ButtonLine from "../../../components/Button-outline-2";
import Input from "../../../components/Input";

export default function MapForm() {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-amber-500 font-extrabold text-3xl mb-8">แก้ไข</div>
        <div className="font-extrabold text-3xl mb-10">แผนที่</div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-[300px] max-h-full ">
          <div className="mb-8">
            <Input placeholder="Latijude Ex. 12.09999" />
          </div>

          <div className="mb-8">
            <Input placeholder="Longtijude Ex. 15.09999" />
          </div>
          <div className="flex justify-center">
            <ButtonLine
              bg="tranparent"
              color="yellow"
              outline="yellow"
              wiidth="20"
              hover="2"
            >
              บันทึก
            </ButtonLine>
          </div>
        </div>
      </div>
    </>
  );
}
