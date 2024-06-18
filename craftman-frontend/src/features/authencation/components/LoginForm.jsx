import { toast } from "react-toastify";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateLogin from "../validators/validate-login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { AxiosError } from "axios";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

export default function LoginForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);
      if (error) {
        return setInputError(error);
      }

      setInputError(initialInputError);

      await login(input);
      navigate("/");
      onSuccess();
      toast.success("Login Successfully");
    } catch (err) {
      console.log(err);

      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "invalid Email or mobile or password"
            : "internal server error";
        return toast.error(message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex ">
        <div className=" w-[400px] max-h-full ">
          <img
            className=" rounded-l-lg "
            src="../src/assets/beer-01.jpeg"
            alt="image-form"
          />
        </div>

        <div className="flex items-center justify-center pl-4">
          <div className="w-full">
            <h2 className="mb-8 text-3xl  text-center font-bold text-amber-500">
              Login
            </h2>
            <div className="mb-4">
              <Input
                className="text-black w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Email address"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                error={inputError.email}
              />
            </div>
            <div className="mb-6">
              <Input
                className="text-black w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Password"
                type="Password"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
                error={inputError.password}
              />
            </div>
            {/* bg-amber-500 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-amber-500 hover:border hover:border-amber-500 */}
            <div className="text-center">
              <Button
                type="submit"
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
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
