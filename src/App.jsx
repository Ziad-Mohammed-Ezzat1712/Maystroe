import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import OrderButton from './Components/OrderButton/OrderButton';
let x = createBrowserRouter([
  { index: true, element: <Home /> },
]);
function App() {
  return <>
  
  <OrderButton/>
  <RouterProvider router={x} />
  </>
  ;
}
export default App;
