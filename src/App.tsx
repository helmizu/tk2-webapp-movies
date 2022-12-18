import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailFilm from "./pages/DetailFilm";
import Error from "./pages/Error";
import ListFilm from "./pages/ListFilm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListFilm />,
    errorElement: <Error />,
  },
  {
    path: "/detail",
    element: <DetailFilm />,
  },
  {
    path: "/detail/:slug",
    element: <DetailFilm />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
