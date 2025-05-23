//Rus
/*
  3.	Удалите старую логику использования данных категорий и продуктов в магазине, заменив её на получение данных с помощью loader в параметрах маршрутизатора.
  4.	Создайте универсальный обработчик ошибок с помощью errorElement.
  5.	Получите данные с категориями и продуктами от API, используя хук useLoaderData(), и примените их на страницах Home и Category.
  6.	С помощью state передайте массив продуктов на страницу ProductDetails. Получите данные с помощью хука useLocation() и используйте их для фильтрации конкретного продукта по параметру URL.
*/


import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Thanks from "./pages/Thanks";
import {fetchCategoryLoader} from "./loaders/categoryLoader.js";
import {fetchProductsLoader} from "./loaders/productsLoader.js";
import {ErrorBoundary} from "./components/ErrorBoundary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> , loader: fetchCategoryLoader, errorElement: <ErrorBoundary/>},
      { path: "old-home", element: <Navigate to={"/"} /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "thanks", element: <Thanks /> },
      { path: "category/:categoryId", element: <Category />, loader: fetchProductsLoader, errorElement: <ErrorBoundary/> },
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> },
      // { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Home />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "about",
//     element: (
//       <>
//         <Header />
//         <About />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "cart",
//     element: (
//       <>
//         <Header /> <Cart />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "categories",
//     element: (
//       <>
//         <Header />
//         <Categories />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "product",
//     element: (
//       <>
//         <Header />
//         <ProductDetails />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <>
//         <Header />
//         <NotFound />
//         <Footer />
//       </>
//     ),
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
