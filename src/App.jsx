import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage1 from "./Pages/home";
const router = createBrowserRouter([
  {path : "/", element : <HomePage1/>}
])


function App() {
  return (
    <div >
      <RouterProvider router ={router} />
    </div>
  );
}

export default App;
