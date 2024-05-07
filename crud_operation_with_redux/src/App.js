import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AddUsers from "./components/AddUsers";
import UpdateUsers from "./components/UpdateUsers";
import UserTable from "./components/UserTable";

function App() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <UserTable />,
    },
    {
      path: "/updateuser/:id",
      element: <UpdateUsers />,
    },
    {
      path :"/adduser",
      element:<AddUsers/>
    }
  ]);
  return (
    <>
     <RouterProvider router={AppRouter}/>
    </>
  );
}

export default App;
