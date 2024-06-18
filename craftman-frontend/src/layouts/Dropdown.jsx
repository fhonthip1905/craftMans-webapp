import { useState } from "react";
import UserIcon from "../components/icons";
import ModalComponent from "../components/Modal";
import LoginForm from "../features/authencation/components/LoginForm";
import RegisterForm from "../features/authencation/components/RegisterForm";
import useAuth from "../hooks/useAuth";
import ButtonLine from "../components/Button-outline-2";
import ButtonOutline from "../components/Button-outline";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { authUser, logout } = useAuth();

  const onSuccess = () => {
    setOpen(false);
  };

  const handleClickLogout = () => {
    logout();
    navigate("/");
    toast.success("Good bye");
    setOpen(false);
  };

  return (
    <>
      <div className="flex">
        <div className="relative">
          <div role="button" onClick={() => setOpen((prev) => !prev)}>
            {authUser ? (
              <ButtonLine
                bg="transparent"
                color="yellow"
                outline="yellow"
                width="50"
                hover="1"
                p="1"
              >
                Hi! {authUser.name}
              </ButtonLine>
            ) : (
              <div className="w-9 h-9 rounded-full border-2 border-amber-500 flex justify-center items-center hover:border-amber-500">
                <UserIcon />
              </div>
            )}
          </div>

          {open && (
            <div className="absolute right-0 translate-y-1.5">
              <div className="flex flex-col items-center justify-center gap-4 p-4 w-[140px] bg-neutral-700 rounded-lg shadow-[0_0_6px_rgb(0,0,0,0.2)]">
                {authUser ? (
                  <ButtonOutline
                    bg="yellow"
                    color="yellow"
                    rounded="lg"
                    width="full"
                    outline=""
                    text="bold"
                    hover="1"
                    ease="in"
                    duration="300"
                    transition="color"
                    p="2"
                    onClick={handleClickLogout}
                  >
                    Logout
                  </ButtonOutline>
                ) : (
                  <>
                    <ModalComponent title="Login">
                      <LoginForm onSuccess={onSuccess} />
                    </ModalComponent>

                    <ModalComponent title="Register">
                      <RegisterForm onSuccess={onSuccess} />
                    </ModalComponent>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
