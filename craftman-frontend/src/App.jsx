import { Slide, ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Router />

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          transition={Slide}
        />
      </ProductContextProvider>
    </>
  );
}

export default App;
