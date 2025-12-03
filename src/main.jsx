import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Homepage } from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Shop from "./components/shop/Shop";


const router = createBrowserRouter([{
  path:"/",
  element: <Homepage/>
},
  {
    path: "shop",
    element: <Shop/>
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
<RouterProvider router={router}/>  
  </StrictMode>
);
