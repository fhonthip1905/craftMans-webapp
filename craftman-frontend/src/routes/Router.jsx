import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainContainer from "../layouts/MainContainer";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import YourBeerPage from "../pages/YourBeerPage.jsx";
import LocationPage from "../pages/LocationPage.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import BeerListPage from "../pages/BeerListPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product/:name", element: <ProductDetailPage /> },
      {
        path: "/product/yourbeer",
        element: (
          <ProtectedRoute>
            <YourBeerPage />
          </ProtectedRoute>
        ),
      },
      { path: "/location", element: <LocationPage /> },
      { path: "/:beertype", element: <BeerListPage /> },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
