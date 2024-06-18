import { useState } from "react";
import Modal from "react-modal";
import ButtonOutline from "./Button-outline";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#333",
    color: "#fff",
    border: "1px solid #444",
    borderRadius: "10px",
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

const ModalComponent = ({ width = 40, title, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <ButtonOutline
        bg="yellow"
        color="yellow"
        rounded="lg"
        wiidth="full"
        outline=""
        text="bold"
        hover="1"
        ease="in"
        duration="300"
        transition="color"
        p="2"
        onClick={openModal}
      >
        {title}
      </ButtonOutline>


      <Modal
        className="relative w-[700px]"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className="flex justify-between items-center"
          style={{ width: `${width}rem` }}
        >
          <button className="invisible">&#10005;</button>
          <button onClick={closeModal} className="text-amber-500">
            &#10005;
          </button>
        </div>
        <div className="p-4">{children}</div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
