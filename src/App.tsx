import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "./components/ui/button";
import viteLogo from "/vite.svg";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={routes} />;
}

export default App;
