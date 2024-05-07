import logo from "./logo.svg";
import "./App.css";
import GetUsers from "./components/GetUsers";
import AddUsers from "./components/AddUsers";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import UpdateUser from "./components/UpdateUser";
import { ToastContainer } from "react-toastify";
import Modal from "./components/Modal";

function App() {
  const userDataForAdd = null; 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <GetUsers />,
    },
    {
      path: "/addUsers",
      element: <AddUsers />,
    },
    {
      path: "/updateuser/:id",
      element: <UpdateUser />,
    },
    {
      path: "/modal",
      element: <Modal />,
    },
  ]);
  return (
    <>
  
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
