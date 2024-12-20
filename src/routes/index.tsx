import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { LandingPage } from '../pages/LandingPage';
import { HomePage } from '../pages/HomePage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutSuccessPage } from '../pages/CheckoutSuccessPage';
import { ContactPage } from '../pages/ContactPage';
import { OrderHistoryPage } from '../pages/OrderHistoryPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'products',
        element: <HomePage />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'checkout/success',
        element: <CheckoutSuccessPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'orders',
        element: <OrderHistoryPage />,
      },
    ],
  },
]);