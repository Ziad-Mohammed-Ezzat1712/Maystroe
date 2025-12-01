import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
let x = createBrowserRouter([
  { index: true, element: <Home /> },
]);
function App() {
  return <RouterProvider router={x} />;
}
export default App;
