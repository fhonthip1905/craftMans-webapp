import { useState } from "react";
import Button from "../../../components/Button";
import { AxiosError } from "axios";
import authApi from "../../../apis/auth-api";
import { toast } from "react-toastify";
import validateRegister from "../validators/validate-resgister";
import Input from "../../../components/Input";

const initialFormData = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const initialFormDataError = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm({ onSuccess }) {
  const [FormData, setFormData] = useState(initialFormData);
  const [FormDataError, setFormDataError] = useState(initialFormDataError);

  const handleChangeInput = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateRegister(FormData);
      console.log(FormData);
      if (error) {
        return setFormDataError(error);
      }
      setFormDataError({ ...initialFormData });

      await authApi.register(FormData);
      onSuccess();
      toast.success("Register successfully. please login to continue.");
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        setFormDataError((prev) => ({
          ...prev,
          email: "email  already in use.",
        }));
      }
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex justify-start items-center min-h-[450px] w-[700px] ">
        <img
          className=" rounded-l-lg h-[460px] w-[300px] "
          src="../src/assets/beer-01.jpeg"
          alt="image-form"
        />
        <div className="relative w-[290px] h-[380px] flex items-center justify-between ml-8 ">
          <div className="w-full">
            <h2 className="mb-5 text-3xl  text-center font-bold text-amber-500">
              Register
            </h2>
            <div className="mb-4">
              <Input
                className=" text-black w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="First name"
                type="text"
                name="name"
                value={FormData.name}
                onChange={handleChangeInput}
                error={FormDataError.name}
              />
            </div>

            <div className="mb-4">
              <Input
                className="text-black w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Last name"
                type="text"
                name="lastname"
                value={FormData.lastname}
                onChange={handleChangeInput}
                error={FormDataError.lastname}
              />
            </div>
            <div className="mb-4">
              <Input
                className="text-black w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Email"
                type="text"
                name="email"
                value={FormData.email}
                onChange={handleChangeInput}
                error={FormDataError.email}
              />
            </div>
            <div className="mb-4">
              <Input
                className="text-black w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Password"
                type="password"
                name="password"
                value={FormData.password}
                onChange={handleChangeInput}
                error={FormDataError.password}
              />
            </div>
            <div className="mb-6">
              <Input
                className="text-black w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Confirm password"
                type="password"
                name="confirmPassword"
                value={FormData.confirmPassword}
                onChange={handleChangeInput}
                error={FormDataError.confirmPassword}
              />
            </div>
            <div className="text-center">
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
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
