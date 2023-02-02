import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Productpage from './Pages/Productpage';
import RootLayout from './Layout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/products', element: <Productpage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
