import { 
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Products';
import "./app.scss"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/products/:id',
        element: <Category />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
